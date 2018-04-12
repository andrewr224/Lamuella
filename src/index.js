import menu    from './menu';
import about   from './about';
import contact from './contact';

let mainLink    = document.querySelector('#main');
let menuLink    = document.querySelector('#menu');
let aboutLink   = document.querySelector('#about');
let contactLink = document.querySelector('#contact');

mainLink.addEventListener('click', () => { menu.render(); });
menuLink.addEventListener('click', () => { menu.render(); });
aboutLink.addEventListener('click', () => { about.render(); });
contactLink.addEventListener('click', () => { contact.render(); });

menu.render();
