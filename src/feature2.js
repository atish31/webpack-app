import { red, blue } from "./button-style"

const top = document.createElement('div');
const bottom = document.createElement('div');

top.innerText = 'Top of the footer';
bottom.innerText = 'Bottom of the footer';

top.style = red;
bottom.style = blue;

const footer = document.createElement('footer');
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
