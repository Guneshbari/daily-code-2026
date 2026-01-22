# Password Manager App

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript" />
  <img src="https://img.shields.io/badge/CSS-3-blue?logo=css3" />
  <img src="https://img.shields.io/badge/Create%20React%20App-CRA-lightgrey?logo=createreactapp" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Project-Password%20Manager%20App-brightgreen" />
  <img src="https://img.shields.io/badge/Focus-CRUD%20%26%20Conditional%20Rendering-blue" />
</p>

A React application that allows users to securely store, search, view, and delete passwords with masking support.

Built as part of **Daily Code 2026**, focusing on form handling, list management, conditional UI rendering, and state-driven logic.

---

## 📑 Contents

- Overview
- Features
- Password Management Logic
- Concepts Practiced
- Screenshots
- Project Structure
- Getting Started
- Tech Stack
- Notes
- Author

---

## 📌 Overview

The Password Manager App enables users to add, search, display, and delete password entries.

Passwords are masked by default and can be revealed using a toggle, reinforcing secure UI patterns and controlled rendering.

---

## ✨ Features

- Add website, username, and password entries
- Mask passwords using stars by default
- Toggle to show or hide passwords
- Search passwords by website name (case-insensitive)
- Delete individual password entries
- Display empty state when no passwords exist

---

## 🔐 Password Management Logic

- On **Add**:
  - New password entry is added
  - Password count increments
  - Inputs reset to empty
- Passwords are masked using a stars image by default
- When **Show Passwords** is checked:
  - Plain text passwords are displayed
- Search filters passwords by website name
- When all passwords are deleted:
  - "No Passwords" view is shown

---

## 🧠 Concepts Practiced

- Controlled form inputs
- Conditional rendering
- List filtering
- State-driven UI updates
- Parent–child component communication
- CRUD operations

---

## 🖼️ Screenshots

![No Passwords View](screenshots/no-passwords.png)
![Masked Passwords View](screenshots/masked-passwords.png)
![Show Passwords View](screenshots/show-passwords.png)
![Demo](screenshots/demo.gif)

---

## 📁 Project Structure

src/
├── components/
│   ├── PasswordManager/
│   │   ├── index.js
│   │   └── index.css
│   └── PasswordItem/
│       ├── index.js
│       └── index.css
├── App.js
└── index.js

---

## 🚀 Getting Started

Install dependencies:

    npm install

Start the development server:

    npm start

Runs at: http://localhost:3000

---

## 🛠️ Tech Stack

- React (Create React App)
- JavaScript (ES6+)
- CSS

---

## 📌 Notes

- Passwords are masked using images for visual security
- Search is case-insensitive
- Designed to satisfy strict testing requirements
- Empty state handled gracefully

---

## 👤 Author

Built as part of **Daily Code 2026**
Maintained by **Guneshbari**

