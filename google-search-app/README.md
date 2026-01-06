Google Search Suggestions App

A React application that replicates Google-style search suggestions.
Suggestions update dynamically as the user types, and clicking on a suggestion auto-fills the search input.

This project focuses on React fundamentals, clean data flow, and component-based design.

✨ Features

Displays all suggestions on initial load

Filters suggestions in real time as the user types

Case-insensitive search

Clicking the arrow icon fills the search input

Clean and responsive UI

🧠 Concepts Practiced

React class components

Controlled form inputs

Parent–child communication using props

Callback functions

List rendering with map and filter

📁 Project Structure
src/
├── components/
│   ├── GoogleSuggestions/
│   │   ├── index.js
│   │   └── index.css
│   └── SuggestionItem/
│       ├── index.js
│       └── index.css
├── App.js
└── index.js

🚀 Getting Started
Install dependencies
npm install

Start the app
npm start


The app runs at http://localhost:3000

🧩 Component Overview
GoogleSuggestions

Maintains the search input state

Filters the suggestions list

Passes callback functions to child components

SuggestionItem

Displays individual suggestions

Updates the search input when the arrow is clicked

🛠️ Tech Stack

React (Create React App)

JavaScript (ES6+)

CSS

📌 Notes

Bootstrapped with Create React App

Folder structure and naming are important for imports and tests

Focused on clarity and correct React patterns

👤 Author

Built as part of Daily Code 2026
Maintained by Guneshbari
