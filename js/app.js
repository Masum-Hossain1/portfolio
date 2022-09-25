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

