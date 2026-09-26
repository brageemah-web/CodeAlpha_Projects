# 📷 Interactive Image Gallery

A responsive and interactive web-based image gallery application built with HTML5, CSS3, and JavaScript. The project allows users to filter images by category (*Nature*, *Cities*, *Animals*) and interact with a full-screen lightbox modal complete with keyboard navigation.

---

## 🎨 Color Palette Reference

Inspired by soft coastal water and atmospheric sky tones:

| Element / Role | Hex Code | Description |
| :--- | :--- | :--- |
| **Header Bar** | `#384956` | Deep Slate Blue |
| **Active Filter Pill** | `#2B828B` | Cyan / Teal Accent |
| **Page Background** | `#C2D1DD` | Soft Off-White / Ice Tint |
| **Pill Outline / Text** | `#A4B8C6` | Muted Slate Blue |
| **Lightbox Overlay** | `#141C24` | Semi-transparent Midnight Slate |

---

## ✨ Features

* **⚡ Real-Time Category Filtering:** Filter items by `All`, `Nature`, `Cities`, and `Animals`.
* **🖼️ Interactive Lightbox View:** Modal overlay displaying image title, category tag, and high-res view.
* **⌨️ Keyboard Controls:** Navigate images easily using `Left Arrow`, `Right Arrow`, and `Escape` keys.
* **📱 Responsive Grid:** Dynamic layout adjusting smoothly across Desktop, Tablet, and Mobile devices.

---

## 📁 Project Structure

```text
├── index.html          # HTML5 structure with gallery grid and lightbox modal
├── style.css           # Styling rules and color palette
├── script.js          # Interactive JavaScript logic (Filtering, Lightbox, Keyboard events)
└── images/             # Local image assets
    ├── banner2.jpg
    ├── beach.jpg
    ├── bear.jpg
    ├── chicago.jpg
    ├── cliff.jpg
    ├── dog.jpg
    ├── duck.jpg
    ├── hibiscus.jpg
    ├── london.jpg
    ├── mountain.jpg
    ├── tulips.jpg
    ├── turtle.jpg
    └── water lily.jpg
```

---

## 🖼️ Included Gallery Items

| Index | Title / Alt | Category | Asset File |
| :---: | :--- | :--- | :--- |
| `0` | Water lily | `nature` | `images/water lily.jpg` |
| `1` | London | `cities` | `images/london.jpg` |
| `2` | Dog | `animals` | `images/dog.jpg` |
| `3` | Beach | `nature` | `images/beach.jpg` |
| `4` | Turtle | `animals` | `images/turtle.jpg` |
| `5` | Hibiscus | `nature` | `images/hibiscus.jpg` |
| `6` | Duck | `animals` | `images/duck.jpg` |
| `7` | Cliff | `nature` | `images/cliff.jpg` |
| `8` | Field of tulips | `nature` | `images/tulips.jpg` |
| `9` | Bear | `animals` | `images/bear.jpg` |
| `10` | Mountain | `nature` | `images/mountain.jpg` |
| `11` | Chicago | `cities` | `images/chicago.jpg` |

---

## 🚀 Getting Started

### Quick Start
1. Clone or download this repository to your local computer.
2. Ensure your image assets are located inside an `images/` directory relative to `index.html`.
3. Open `index.html` in any web browser.

### Keyboard Shortcuts (Inside Lightbox)
* **`Escape`** or **`×`**: Close the modal
* **`←` (Left Arrow)** or **`❮`**: Show previous image
* **`→` (Right Arrow)** or **`❯`**: Show next image

---

## 🛠️ Built With

* **HTML5:** Semantic tags (`<header>`, `<main>`, `<section>`, `<nav>`) and data attributes (`data-category`, `data-index`).
* **CSS3:** CSS Grid, Flexbox, transitions, and hover effects.
* **Vanilla JavaScript:** Event handling, DOM manipulation, and dynamic modal rendering.