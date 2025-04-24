# Manifast Web Application ✨

## Overview 📝

Manifast is a simple, multi-page web application designed to guide users through a process of reflection and manifestation 🙏. It uses a combination of calming video backgrounds 🎬, random inspirational messages 💬, prompts 🤔, and affirmations ✅ across several pages to create a focused experience.

## Project Structure 📁

The project consists of the following files:

* **`index.html`** 🏠: The main landing page. It features a video background, the application title "Manifast.", displays an initial random message, and provides navigation to Page 2 and an informational popup.
* **`page2.html`** ➡️: The second page in the flow, displaying a different random message related to visualization and linking to Page 3.
* **`page3.html`**❓: This page presents the user with a random question to prompt reflection on their desires. It includes a popup form where the user can type their manifestation ✍️. Upon submission, the input is passed to Page 4.
* **`page4.html`** 🎉: The final page displays a personalized affirmation incorporating the user's input from Page 3. It also shows a randomly selected inspirational quote.
* **`script.js`** ⚙️: Contains the JavaScript logic for:
    * Generating and displaying random messages/questions appropriate for each page (index, page 2, page 3).
    * Handling the display logic (show/hide) for popups on `index.html` and `page3.html`.
    * Processing the form submission on `page3.html` and passing the user's input to `page4.html` via URL parameters.
    * Retrieving the user's input on `page4.html` from URL parameters and displaying the personalized affirmation and a random quote.
* **`style.css`** 🎨: Contains specific CSS rules for styling the various elements like text, popups, forms, icons, and layout across the pages.
* **`global.css`** 🌍: Defines global styles, including CSS resets and base element styling.
* **`136041-764371300_small.mp4`**: The video file used for the background on all pages 🎬.

## Features 🌟

* **Multi-Page Flow**: Guides the user step-by-step through a manifestation process (Welcome -> Visualize -> Input Desire -> Affirmation).
* **Video Background**: Uses a calming video background for ambiance.
* **Randomized Content**: Displays random messages, questions, and quotes to provide a dynamic experience.
* **User Input & Personalization**: Allows users to input their desire on Page 3, which is then used to personalize the affirmation on Page 4.
* **Informational Popup**: Provides instructions on how to use the application.
* **Responsive Design**: Includes basic viewport settings and some media queries for different screen sizes.

## How to Run 🚀

1.  Ensure all files (`index.html`, `page2.html`, `page3.html`, `page4.html`, `script.js`, `style.css`, `global.css`, `136041-764371300_small.mp4`) are in the same directory (`mani/`).
2.  Open the `index.html` file in a web browser 🌐.
3.  Navigate through the pages using the provided links/icons 🖱️.
