# Translator Automation Testing (Playwright)

This project contains end-to-end automation tests for a Tamil–English Translator web application using Playwright.  
The test suite validates functional behavior, negative scenarios, and UI responsiveness of the text input field.

---

## Tech Stack

- Playwright (End-to-End Testing)
- JavaScript (Node.js)
- Chromium Browser
- Git & GitHub

---

## Project Structure

Translator_Test/
├── tests/
│   └── Translator.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

---

## Test Coverage

### Positive Test Cases
- Basic Tamil and Thanglish sentences
- Question and statement formats
- Office, travel, shopping, health, and food-related inputs
- Multi-clause and paragraph-style text
- Mixed English and Tamil words

### Negative Test Cases
- Numbers only input
- Emojis only input
- Special characters
- Excessive repeated characters
- Script-like input
- New lines and tab characters
- Empty input handling

### UI / UX Test
- Continuous typing without UI freeze
- Input field responsiveness validation

---

## Application Under Test

URL:  
https://tamil.changathi.com/

---

## Getting Started

### Prerequisites
- Node.js (version 16 or above)
- Git

Check versions:
