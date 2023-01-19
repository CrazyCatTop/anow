const hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.header__menu'),
      close = document.querySelector('.header__close');

let windowWidth = window.screen.width,
    scaleWidth = 600;

if (windowWidth < 1200) {

}
if (windowWidth < 992) {
    scaleWidth = 340;
}
if (windowWidth < 768) {
    scaleWidth = 540;
}
if (windowWidth < 576) {
    scaleWidth = 300;
}

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const menu__links = document.querySelectorAll('.header__link'),
      h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

function setActive(i) {
    document.querySelector('.header__link_active').classList.remove('header__link_active');
    menu__links[i].classList.add('header__link_active');
} 

menu__links.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

/* menu__links.forEach((link) => {
    link.addEventListener('click', () => {
        setActive(menu__links.indexOf(link));
    } ,false);
}); */

document.addEventListener('scroll', function() {

    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

    if (percent <= 6.5) {
        setActive(0);
    }
    if (percent > 6.5) {
        setActive(1);
    }
    if (percent > 28.5 && percent < 52) {
        setActive(2);
    }
    if (percent > 52 && percent < 80) {
        setActive(3);
    }
    if (percent > 80 && percent < 91.5) {
        setActive(4);
    }
    if (percent > 91.5 && percent < 98) {
        setActive(5);
    }
    if (percent > 98) {
        setActive(6);
    }

});

const skills__values = document.querySelectorAll('.skills__value'),
      skills__scales = document.querySelectorAll('.skills__scale'),
      skills__titles = document.querySelectorAll('.skills__head title');

skills__values.forEach( (value, i) => {
    skills__scales[i].style.width = value.querySelector('span').innerHTML + '%';
    document.querySelectorAll('.skills__head')[i].style.width = scaleWidth * value.querySelector('span').innerHTML / 100 + 'px';
});