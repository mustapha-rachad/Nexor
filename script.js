

document.addEventListener('DOMContentLoaded', function() {

// Menu Toggle Functionality

const menuIcon = document.getElementById('menu-icon');

const navbar = document.querySelector('.navbar');

// Only set up menu toggle if elements exist

if (menuIcon && navbar) {

menuIcon.addEventListener('click', function() {

this.classList.toggle('bx-x');

navbar.classList.toggle('active');

});

}

// Sticky Header and Active Section Highlighting

window.onscroll = function() {

// Only run if sections exist

const sections = document.querySelectorAll('section');

const navLinks = document.querySelectorAll('.header nav a');

if (sections.length > 0 && navLinks.length > 0) {

sections.forEach(sec => {

let top = window.scrollY;

let offset = sec.offsetTop - 150;

let height = sec.offsetHeight;

let id = sec.getAttribute('id');

if(top >= offset && top < offset + height){

navLinks.forEach(link => {

link.classList.remove('active');

});

const activeLink = document.querySelector(`.header nav a[href*="${id}"]`);

if (activeLink) activeLink.classList.add('active');

}

});

}

// Sticky header

const header = document.querySelector('header');

if (header) {

header.classList.toggle('sticky', window.scrollY > 100);

}

// Close menu when scrolling

if (menuIcon && navbar) {

menuIcon.classList.remove('bx-x');

navbar.classList.remove('active');

}

};

// Initialize libraries only if needed elements exist

if (typeof ScrollReveal !== 'undefined') {

ScrollReveal({

distance: '80px',

duration: 2000,

delay: 200,

});

// Only reveal elements that exist

const revealSelectors = [

'.Home-content', '.heading',

'.Home-img', '.services-container', '.Portfolio-box', '.contact form',

'.Home-content h1', '.About-img',

'.Home-content p', '.About-content'

];

revealSelectors.forEach(selector => {

if (document.querySelector(selector)) {

ScrollReveal().reveal(selector, {

origin: selector.includes('top') ? 'top' :

selector.includes('bottom') ? 'bottom' :

selector.includes('left') ? 'left' : 'right'

});

}

});

}

// Typed.js initialization

if (typeof Typed !== 'undefined') {

const typedElement = document.querySelector('.multiple-text');

if (typedElement) {

const typed = new Typed('.multiple-text', {

strings: ['Nexor', 'Nexor', 'Nexor'],

typeSpeed: 100,

backSpeed: 100,

backDelay: 1000,

loop: true

});

}

}

});