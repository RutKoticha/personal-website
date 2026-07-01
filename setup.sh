#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Color definitions for clear logging
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0;30m' # No Color
BOLD='\033[1m'

log_status() {
    echo -e "${BLUE}${BOLD}[STATUS]${NC} $1"
}

log_success() {
    echo -e "${GREEN}${BOLD}[SUCCESS]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}${BOLD}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}${BOLD}[ERROR]${NC} $1"
}

# --- DEPENDENCY CHECK ---
log_status "Checking system prerequisites..."

if ! command -v node &> /dev/null; then
    log_error "Node.js is not installed. Please install Node.js before running this script."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    log_error "npm is not installed. Please install npm before running this script."
    exit 1
fi

if ! command -v mongorestore &> /dev/null; then
    log_warn "mongorestore utility not found. Database restoration may fail if MongoDB tools are missing."
fi

# --- FRONTEND SETUP ---
log_status "Setting up Frontend..."
if [ -d "client" ]; then
    cd client
    log_status "Installing frontend packages (this may take a minute)..."
    npm install
    cd ..
    log_success "Frontend packages installed successfully."
else
    log_error "Directory 'client' not found. Skipping frontend setup."
fi

# --- BACKEND SETUP ---
log_status "Setting up Backend..."
if [ -d "server" ]; then
    cd server
    log_status "Installing backend packages..."
    npm install
    
    # --- ENVIRONMENT VARIABLES GENERATION ---
    log_status "Configuring environment variables (.env)..."
    
    if [ ! -f ".env.example" ]; then
        log_error ".env.example file missing in server directory. Cannot generate .env file."
        exit 1
    fi

    # Read example file and initialize new .env
    cp .env.example .env
    
    echo -e "\n${BOLD}--- Configuration Input Needed ---${NC}"
    echo "Please provide the following details to set up the application."
    echo "Press ENTER to accept the default values where provided."
    echo "----------------------------------"

    # Port Configuration
    read -p "Enter Port [default: 5000]: " port
    port=${port:-5000}
    
    # MongoDB URI Configuration
    while [ -z "$mongo_uri" ]; do
        read -p "Enter MongoDB URI [e.g., mongodb://localhost:27017/markipedia]: " mongo_uri
        if [ -z "$mongo_uri" ]; then
            log_warn "MongoDB URI is required to run the application."
        fi
    done

    # JWT Secret Generation/Input
    read -p "Enter JWT Secret (Press Enter to auto-generate a secure key): " jwt_secret
    if [ -z "$jwt_secret" ]; then
        # Generate 256-bit (32 byte) hex string
        if command -v openssl &> /dev/null; then
            jwt_secret=$(openssl rand -hex 32)
            log_success "Auto-generated secure JWT Secret."
        else
            jwt_secret="default_fallback_secret_32_chars_long_minimum"
            log_warn "openssl not found. Using a default fallback secret. Change this in production."
        fi
    fi

    # JWT Expiration
    read -p "Enter JWT Expiration duration [default: 1d]: " jwt_expire
    jwt_expire=${jwt_expire:-1d}

    # OAuth Providers Documentation Prompt
    echo -e "\n${YELLOW}Note: For Google and GitHub OAuth, you must retrieve credentials from their respective developer consoles.${NC}"
    echo "Google Callback: /api/auth/google/callback"
    echo "GitHub Callback: /api/auth/github/callback"
    echo "----------------------------------"

    read -p "Enter Google Client ID: " google_id
    read -p "Enter Google Client Secret: " google_secret
    read -p "Enter GitHub Client ID: " github_id
    read -p "Enter GitHub Client Secret: " github_secret

    # Safely update values in .env using temporary file to maintain platform independence (macOS/Linux sed differences)
    sed -e "s|^PORT=.*|PORT=$port|" \
        -e "s|^MONGODB_URI=.*|MONGODB_URI=$mongo_uri|" \
        -e "s|^JWT_SECRET=.*|JWT_SECRET=$jwt_secret|" \
        -e "s|^JWT_EXPIRE=.*|JWT_EXPIRE=$jwt_expire|" \
        -e "s|^GOOGLE_CLIENT_ID=.*|GOOGLE_CLIENT_ID=$google_id|" \
        -e "s|^GOOGLE_CLIENT_SECRET=.*|GOOGLE_CLIENT_SECRET=$google_secret|" \
        -e "s|^GITHUB_CLIENT_ID=.*|GITHUB_CLIENT_ID=$github_id|" \
        -e "s|^GITHUB_CLIENT_SECRET=.*|GITHUB_CLIENT_SECRET=$github_secret|" \
        .env > .env.tmp && mv .env.tmp .env

    log_success ".env file successfully configured inside the server directory."
    cd ..
else
    log_error "Directory 'server' not found. Skipping backend setup."
fi

# --- DATABASE RESTORATION ---
log_status "Setting up Database..."
if [ -d "db-backup/markipedia" ]; then
    log_status "Restoring database backup..."
    if mongorestore --db markipedia ./db-backup/markipedia; then
        log_success "Database restored successfully."
    else
        log_error "Database restoration failed. Verify that your local MongoDB instance is running."
    fi
else
    log_warn "Backup folder './db-backup/markipedia' not found. Skipping database restoration."
fi

# --- COMPLETION GUIDANCE ---
echo -e "\n--------------------------------------------------"
log_success "Setup process is complete!"
echo -e "--------------------------------------------------"
echo -e "${BOLD}To run the application, open two separate terminal windows:${NC}"
echo -e "  ${BLUE}Terminal 1 (Frontend):${NC} cd client && npm run dev"
echo -e "  ${BLUE}Terminal 2 (Backend):${NC}  cd server && npm run dev"
echo -e "--------------------------------------------------\n"
