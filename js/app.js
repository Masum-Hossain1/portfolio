const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('fas-times');
    navbar.classList.remove('open');
    if(window.scrollY > 60){
        document.querySelector('.top').classList.add('active');
    }else {
        document.querySelector('.top').classList.remove('active');
    }
}

const sr = ScrollReveal ({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text',{delay: 190, origin: 'bottom'});
sr.reveal('.service, .portfolio',{delay: 100, origin: 'bottom'});
sr.reveal('.about-img, .contact-text',{delay: 100, origin: 'left'});
sr.reveal('.about-text, .contact-form',{delay: 100, origin: 'right'});

