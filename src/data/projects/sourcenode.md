---
id: sourcenode
title: SourceNode
description: An attempt to facilitate dev teams, tools they use everyday integrating realtime chat, kanban board for task management, secret management using secure vault and integration with Github to monitor repository activity.
technologies:
  - Next.js
  - Tailwind CSS
  - Spring Boot
  - Fast API
  - Docker
  - Postgres
github: https://github.com/RutKoticha/sourcenode
isOngoing: false
---
## 1. Project Overview

SourceNode is a developer productivity utility integrating realtime chat, a kanban board for task management, secret management using a secure vault, and integration with GitHub to monitor repository activity. It serves as a unified workspace for engineering teams.

SourceNode acts as an interactive dependency graph visualizer. It solves the critical developer pain point of exploring nested modular code imports and database relation maps without digging through complex config files.

## 2. Key Features

*   **Interactive Canvas:** Smooth panning, zooming, and nodes drag-and-drop mechanics using canvas libraries.
*   **Import Parser:** Automated scan script parsing file-based JavaScript/TypeScript dependency imports.
*   **Query Filter:** Find specific connections, upstream/downstream dependencies, and circular references instantly.

## 3. Architecture & Tech Decisions

SourceNode utilizes **Next.js** and **Tailwind CSS** for the frontend interface, coupled with a **Spring Boot** and **Fast API** backend, storing relational tasks and repository metadata in a **Postgres** database, all containerized with **Docker**.

> "We chose PostgreSQL because dev team integration tools require strong relational schemas for tracking kanban tasks, secure vaults, and repository meta-relations."

## 4. Challenges & Learnings

Rendering hundreds of DOM-based node connections resulted in low frame rates. Migrating the drawing mechanics to a customized Canvas-based rendering loop reduced re-render overhead, providing smooth 60fps interaction profiles.
