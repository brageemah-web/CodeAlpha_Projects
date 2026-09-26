# 🧮 Studio Ghibli Sage Green Calculator

A clean, responsive, and tactile web-based calculator interface built with HTML5, CSS3, and JavaScript. Inspired by the soft, organic color palettes of Studio Ghibli films like *My Neighbor Totoro*, this project features color-coded input controls, and a CSS Grid layout.

---

## 🎨 Color Palette Reference

Inspired by tranquil forest greenery, natural moss, and warm parchment light:

| Element / Role | Hex Code | Description |
| :--- | :--- | :--- |
| **Page Background** | `#C0D09D` | Soft Meadow Green |
| **Calculator Chassis** | `#A8BE8F` | Moss Green Container |
| **Display Window** | `#E8EDB9` | Birch Parchment Light |
| **Numeric Keypad** | `#788A6F` | Sage Foliage Base |
| **Numeric Hover Key** | `#90A07D` | Muted Sage Highlight |
| **Operator Keys** | `#446A37` | Deep Canopy Green |
| **Clear Button** | `#468C37` | Fresh Grassland Accent |
| **Equals Button** | `#799A64` | Soft Fern Accent |

---

## ✨ Features

* **🌿 Ghibli-Inspired Aesthetics:** Organic green tones bring a calm, aesthetic feel to everyday arithmetic.
* **✨ Micro-Interactive Feedback:** Smooth scale transitions when hovering (`1.05x`) and clicking (`0.95x`) buttons.
* **📱 Responsive Centered Layout:** Centered frame with ambient depth drop shadows (`0 15px 35px`).
* **📐 Grid-Based Keypad:** Clean 4-column layout (`grid-template-columns: repeat(4, 1fr)`) with span-two styling for the zero key.
* **🏷️ Color-Coded Hierarchy:** Visual distinction between numbers, operators, clear (`C`), and evaluation (`=`) controls.

---

## 📁 Project Structure

```text
├── index.html          # HTML5 structure for display and button grid
├── style.css           # CSS3 styling, grid rules, and Ghibli color palette
└── script.js          # JavaScript logic for calculator math operations
```

---

## ⌨️ Keyboard Shortcuts

| Key | Associated Action | Visual Key |
| :---: | :--- | :---: |
| `0` – `9` | Append digit to display | `0` – `9` |
| `+`, `-`, `*`, `/` | Append arithmetic operator | `+`, `-`, `*`, `/` |
| `.` | Append decimal point | `.` |
| `Enter` | Evaluate mathematical expression | `=` |
| `Backspace` | Remove last character (`deleteLast()`) | `⌫` / `DEL` |
| `Escape` | Clear current calculation (`clearDisplay()`) | `C` / `AC` |

---

## 🚀 Getting Started

### Quick Start
1. Clone or download this repository to your local computer.
2. Place `index.html`, `style.css`, and `script.js` in the same project directory.
3. Open `index.html` in any web browser to view and use the calculator.

---

## 🛠️ Built With

* **HTML5:** Semantic elements (`<main>`, `<input>`, `<button>`).
* **CSS3:** CSS Grid, Flexbox, custom box shadows, and smooth scaling transitions.
* **Vanilla JavaScript:** DOM events, mathematical evaluation, and state handling.