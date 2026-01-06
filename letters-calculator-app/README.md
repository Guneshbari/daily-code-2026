# Letters Calculator App

A simple React application that calculates and displays the number of letters entered in an input field in real time.

This project is designed to practice **controlled inputs**, **state updates**, and **conditional rendering** in React.

---

## 🚀 Features

- Text input to enter a phrase
- Displays the total number of letters typed
- Updates the count dynamically as the user types
- Shows an initial letter count of `0`

---

## 🧠 Concepts Used

- React Class Components
- Controlled form elements
- State management
- Event handling
- Conditional rendering
- Accessibility with labels

---

## 📂 Project Structure

src/
├── components/
│ └── LettersCalculator/
│ ├── index.js
│ └── index.css


---

## ▶️ Getting Started

### 1. Install Dependencies
```bash
npm install

2. Run the App

npm start

The app will run at http://localhost:3000.
🔍 App Behavior

    On page load, the letter count is displayed as 0

    As the user types in the input field, the letter count updates instantly

    The input field is associated with a label for better accessibility

🧪 Testing Notes

    Uses a <label> element with the text "Enter the phrase"

    The input field is associated with the label using htmlFor and id

    The count text follows the exact format:
    No.of letters: X

    Image includes the required alt attribute:
    letters calculator

📌 Conclusion

This project demonstrates how to build a responsive, accessible input-based React component using controlled inputs and state-driven rendering.

It emphasizes correctness, clarity, and adherence to testing requirements.
