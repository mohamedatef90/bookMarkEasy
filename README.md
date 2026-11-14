# Book-Mark Easier

A small bookmark manager that runs in the browser: save a website name and URL, see your saved sites in a table, visit or delete them, and search the list. It is plain HTML, CSS, and JavaScript with no build step.

## Features

- **Add a bookmark:** enter a site name and URL (the form shows an alert if a field is empty).
- **Table of saved sites** with a Visit button (opens the site in a new tab) and a Delete button for each row.
- **Search:** filter the list as you type.
- **Persistence:** bookmarks are stored in the browser's `localStorage` under the key `links`. Nothing is sent to a server.

## Tech

- HTML, CSS, and vanilla JavaScript (`js/main.js`)
- Bootstrap 5 (bundled in `css/` and `js/`) and Font Awesome (bundled, with `webfonts/`)
- Oswald and Roboto from Google Fonts

## Running

Open `index.html` in a browser. Google Fonts need an internet connection; everything else is local.

## Project structure

```
index.html     Page
js/main.js     Add, display, delete, and search logic
css/           Bootstrap, Font Awesome, and custom styles
webfonts/      Font Awesome fonts
note.txt       Short project note
```
