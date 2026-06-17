---
id: markipedia
title: Markipedia
description: Reimagination of Wikipedia to be like medium.com, articles written in markdown, simple ui, easy to read rendering of markdown etc.
technologies:
  - React
  - Tailwind CSS
  - Node.js
  - Express.js
github: https://github.com/RutKoticha/markipedia
isOngoing: false
---
## 1. Project Overview

Markipedia provides a fast, structured wiki workspace for capturing team knowledge in Markdown format. Inspired by medium.com, it renders clean, easy-to-read markdown articles with live editing previews and automated version history.

Markipedia is engineered as an offline-first Wiki application. It aims to support developer teams in capturing, searching, and structuring documentation wiki pages with full editing previews, even without a steady network connection.

## 2. Key Features

*   **Split-Pane Editor:** Side-by-side Markdown editing pane and formatted HTML preview window.
*   **Offline Workspace Sync:** Local caching using browser storage layers to allow offline writing, syncing with the central database on network reconnection.
*   **Nested Articles Hierarchy:** Tree-structure file explorer directories for cataloging documents.

## 3. Architecture & Tech Decisions

Markipedia utilizes a client-side **React** and **Tailwind CSS** interface supported by a lightweight **Node.js/Express.js** backend server.

> "We structured the editing engine around customized unified/remark parsing pipelines, allowing extensibility of standard GFM (GitHub Flavored Markdown) and mathematical LaTeX equations."

## 4. Challenges & Learnings

Synchronizing offline changes from multiple clients could lead to rewrite overrides. We integrated a simple timestamp-based version check. When updates conflict, the client is prompted with a side-by-side visual diff to resolve edits manually.
