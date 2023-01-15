const menu__links = document.querySelectorAll('.header__menu-link'),
      h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

function removeActive() {
    document.querySelector('.header__menu-link_active').classList.remove('header__menu-link_active');
} 

function setActive(i) {
    menu__links[i].classList.add('header__menu-link_active');
} 

/* menu__links.forEach((link) => {
    link.addEventListener('click', () => {
        removeActive();
        link.classList.add('header__menu-link_active');
    } ,false);
}); */ 

document.addEventListener('scroll', function() {

    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

    if (percent <= 6.5) {
        removeActive();
        setActive(0);
    }
    if (percent > 6.5) {
        removeActive();
        setActive(1);
    }
    if (percent > 28.5 && percent < 52) {
        removeActive();
        setActive(2);
    }
    if (percent > 52 && percent < 79.5) {
        removeActive();
        setActive(3);
    }
    if (percent > 79.5 && percent < 91.5) {
        removeActive();
        setActive(4);
    }
    if (percent > 91.5 && percent < 98) {
        removeActive();
        setActive(5);
    }
    if (percent > 98) {
        removeActive();
        setActive(6);
    }

});

const skills__values = document.querySelectorAll('.skills__value'),
      skills__scales = document.querySelectorAll('.skills__scale'),
      skills__titles = document.querySelectorAll('.skills__head title');

skills__values.forEach( (value, i) => {
    skills__scales[i].style.width = value.querySelector('span').innerHTML + '%';
    document.querySelectorAll('.skills__head')[i].style.width = 600 * value.querySelector('span').innerHTML / 100 + 'px';
});