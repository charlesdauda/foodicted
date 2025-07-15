let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// ScrollReveal animations
ScrollReveal().reveal('.hero-text', {
  delay: 300,
  origin: 'left',
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  reset: false
});

ScrollReveal().reveal('.store .col', {
  interval: 200,
  origin: 'bottom',
  distance: '40px',
  duration: 800
});

ScrollReveal().reveal('.banner-box', {
  interval: 200,
  origin: 'right',
  distance: '50px',
  duration: 900
});

ScrollReveal().reveal('.row', {
  interval: 150,
  origin: 'bottom',
  distance: '50px',
  duration: 900
});

ScrollReveal().reveal('.cta-content', {
  origin: 'top',
  distance: '60px',
  duration: 1000
});

ScrollReveal().reveal('.blog-box', {
  interval: 200,
  origin: 'bottom',
  distance: '40px',
  duration: 1000
});

ScrollReveal().reveal('.footer-box', {
  interval: 150,
  origin: 'bottom',
  distance: '30px',
  duration: 800
});
// ScrollReveal animations
ScrollReveal().reveal('.hero-text', {
  delay: 300,
  origin: 'left',
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  reset: false
});

ScrollReveal().reveal('.store .col', {
  interval: 200,
  origin: 'bottom',
  distance: '40px',
  duration: 800
});

ScrollReveal().reveal('.banner-box', {
  interval: 200,
  origin: 'right',
  distance: '50px',
  duration: 900
});

ScrollReveal().reveal('.row', {
  interval: 150,
  origin: 'bottom',
  distance: '50px',
  duration: 900
});

ScrollReveal().reveal('.cta-content', {
  origin: 'top',
  distance: '60px',
  duration: 1000
});

ScrollReveal().reveal('.blog-box', {
  interval: 200,
  origin: 'bottom',
  distance: '40px',
  duration: 1000
});

ScrollReveal().reveal('.footer-box', {
  interval: 150,
  origin: 'bottom',
  distance: '30px',
  duration: 800
});

