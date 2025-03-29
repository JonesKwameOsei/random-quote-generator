# Random Quote Generator

A simple and elegant web application that generates random quotes and allows users to share them on Twitter. This project demonstrates the use of modern web development practices and JavaScript logic to create an interactive and responsive user experience.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [JavaScript Logic](#javascript-logic)
5. [How to Use](#how-to-use)
6. [Acknowledgments](#acknowledgments)

---

## Overview

The Random Quote Generator is a lightweight web application designed to display random quotes fetched from an external API or a local dataset. Users can generate new quotes with a button click and share their favorite quotes on Twitter seamlessly.

---

## Features

- Fetches quotes from an external API or a local dataset.
- Displays quotes dynamically with proper styling for long and short quotes.
- Allows users to share quotes directly on Twitter.
- Includes a loading spinner for better user experience during data fetching.
- Fully responsive design for desktop and mobile devices.

---

## Tech Stack

- **HTML**: Structure of the web application.
- **CSS**: Styling and responsive design.
- **JavaScript**: Core logic for fetching, displaying, and interacting with quotes.
- **Font Awesome**: Icons for UI elements.
- **Live Server**: Local development server for real-time updates.

---

## JavaScript Logic

1. **Fetching Quotes**:
   - Quotes are fetched from an external API or a local dataset (`quotes.js`).
   - The `fetch` API is used to retrieve data asynchronously.

2. **Random Quote Selection**:
   - A random quote is selected using `Math.random()` from the fetched dataset.

3. **Dynamic DOM Manipulation**:
   - The quote text and author are dynamically inserted into the DOM.
   - Long quotes are styled differently for better readability.

4. **Error Handling**:
   - Errors during API calls are logged to the console for debugging.

5. **Loading Spinner**:
   - A loader is displayed while fetching quotes to enhance user experience.

6. **Twitter Integration**:
   - Users can share quotes on Twitter using a dynamically generated URL.

7. **Event Listeners**:
   - Button clicks are handled using event listeners to trigger new quote generation or Twitter sharing.

---

## How to Use

1. Open the application in a web browser.
2. Click the "New Quote" button to generate a random quote.
3. Click the Twitter icon to share the displayed quote on Twitter.

---

## Acknowledgments

- Quotes API by [Jacinto Design](https://jacintodesign.github.io/quotes-api/).
- Font Awesome for providing beautiful icons.
- Inspiration from various web development tutorials and resources.

---

> **Note**: This project is a simple example of a Random Quote Generator and is not intended for production use. It's a great way to learn JavaScript and web development concepts.

> **Author**: [Jones Osei](https://github.com/JonesKwameOsei)

> **Repository**: [GitHub Repo](https://github.com/JonesKwameOsei/random-quote-generator)

> **Live Demo**: [GitHub Pages](https://joneskwameosei.github.io/random-quote-generator/)
