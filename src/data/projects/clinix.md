---
id: clinix
title: Clinix
description: A clinic management system designed to help clinics manage their internal data like patients, appointments, finances etc.
technologies:
  - Angular
  - Spring Boot
  - Postgres
  - Docker
github: https://github.com/RutKoticha/clinix
isOngoing: true
---
## 1. Project Overview

Clinix is a comprehensive clinic management application designed to handle patient profiles, electronic health records (EHR), dynamic doctor scheduling, and real-time medical prescriptions. Built with security and clinical workflows in mind, it minimizes admin overhead while keeping critical medical records safely encrypted.

This application was engineered with a primary focus on clean security standards, ensuring patient electronic health records (EHR) comply with medical database standards. It allows easy appointment creation, records management, and real-time medical billing modules.

## 2. Key Features

*   **Patient EHR Module:** Secure entry, search, and storage of patient diagnostics history and clinical vitals.
*   **Doctor Scheduling:** Dynamic calendars showing availability slots and managing booking collision handles.
*   **Billing & Invoices:** Direct generation of digital invoices detailing medicine prescriptions and service fees.

## 3. Architecture & Tech Decisions

The application uses an **Angular** frontend coupled with a robust **Spring Boot** backend REST API, utilizing **Postgres** as the primary database store, containerized via **Docker**.

> "We chose PostgreSQL over MongoDB because patient records require strong relational integrity and transactional consistency (ACID properties) for billing purposes."

## 4. Challenges & Learnings

Managing scheduling conflicts across multiple time-zones for consulting medical experts was a key challenge. This was solved by persisting schedules in UTC and performing dynamic local adjustments on the frontend side.
