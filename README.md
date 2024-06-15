# Frontend Mentor - In-browser markdown editor solution

This is a solution to the [In-browser markdown editor challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/inbrowser-markdown-editor-r16TrrQX9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Create, Read, Update, and Delete markdown documents
- Name and save documents to be accessed as needed
- Edit the markdown of a document and see the formatted preview of the content
- View a full-page preview of the formatted content
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- **Bonus**: If you're building a purely front-end project, use localStorage to save the current state in the browser that persists when the browser is refreshed
- **Bonus**: Build this project as a full-stack application

### Screenshot

![](/screenshots/markdown.jpg)

### Links

- Solution URL: https://github.com/DaniilGurski/FM-markdown.git
- Live Site URL: https://fm-markdown.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Gulp](https://gulpjs.com/) - Task runner, scss compiler
- [Marked](https://marked.js.org/) - Markdown formatting


### What I learned
disabling spell checking for input data in html:

```html
<textarea class="markdown-input-area font-markdown | font-size-200" id="markdown-input-area" aria-label="markdown editor" spellcheck="false"></textarea>
```
(index.html)

adding backdrop to dialog element: 
```css
::backdrop {
   background-color: hsla(0, 0%, 0%, 0.23);
}
```
(_modal.scss)

Styling the container based on its width. I needed to take this into account because when aside panel was openend: 

```css
@container (inline-size >= #{rem($medium-screen-size)}) {
    &__document-name-editor {
        padding-inline: rem(24);
        border-left: 1px solid $clr-neutral-400;
    }
    &__logo {
        display: block;
    }
}
```
(_header.scss)

endsWith js method:
```js
// add .md extention if needed
if (!documentData.documentName.endsWith(".md")) {
    documentData.documentName += ".md";
}
```
(save-doc.js)


Dates in js and padStart method (pads a string with another if there is place): 
```js
const creationDate  = new Date();
const creationDay   = (creationDate.getDate()).toString().padStart(2, "0");
const creationMonth = creationDate.getMonth()
const creationYear  = creationDate.getFullYear();
```
(save.doc.js)

 
 ### Useful resources

- [Useful programmer](https://www.youtube.com/watch?v=SMwgbtCDrLw) - Little about "marked" library
- [Kevin Powell](https://www.youtube.com/watch?v=3_-Je5XpbqY) - About container queries.


## Author
- Frontend Mentor - [@DaniilGurski](https://www.frontendmentor.io/profile/DaniilGurski)