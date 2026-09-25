# COS30045 T01(a): Appliance Energy Consumption Website
A small website built with HTML, CSS and JavaScript. It has three pages (Home, Televisions and About Us), and JavaScript switches between them without reloading.

**Author:** Nelson anak Sikua

## Files
- `index.html`: the page structure. Each "page" is a `<section>`.
- `style.css`: the styling, using colours taken from the power logo.
- `script.js`: the page switching, the active nav link, and the footer year.
- `images/logo.svg`: the power logo. Clicking it returns you to Home.

## Requirements checklist
- [x] Three pages: Home, Televisions, About Us
- [x] Top navigation that swaps pages using JavaScript
- [x] Power logo in the top left that returns you to Home
- [x] Hover feedback on the nav links and logo
- [x] Current-page feedback: the active link is highlighted, the tab title changes, and `aria-current` is set
- [x] A CSS file with colours matching the logo
- [x] A footer with the year, author name and GenAI acknowledgement
- [x] Placeholder content about appliance energy use in the Australian market

## GenAI use
I used Claude Code, an AI coding assistant, to generate the first version of the HTML, CSS and JavaScript and the placeholder content. The requirements came from the task sheet. I then reviewed the code to make sure I understood each part:

- `showPage()` toggles the `active` class on each section and nav link, and CSS hides any section without `active`.
- `history.pushState` and the `popstate` listener keep the URL hash and the back button working.
- The logo colours are stored as CSS variables in `:root`, so the whole theme can be changed in one place.

## Reflection
I used Claude Code to generate the first version of the website from the task requirements. It was quick and got the basic structure working straight away, but I still had to go through the code to understand it. The main part I focused on was the JavaScript that switches between pages. It hides and shows sections by adding and removing an active class instead of loading separate HTML files, which I hadn't done before.

This task was a good refresher on HTML, CSS and JavaScript, especially using CSS variables to keep the colours consistent with the logo. I also practised pushing to GitHub and hosting on Vercel, which was easier than I expected.

GenAI saved a lot of time, but it's easy to end up with code you don't really understand. I need to be able to explain and change everything myself, so I made sure I could do that before submitting.
