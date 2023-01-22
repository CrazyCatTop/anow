const hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.header__menu'),
      close = document.querySelector('.header__close'),
      overlay = document.querySelector('.header__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

const menu__links = document.querySelectorAll('.header__link');

function setActive(i) {
    document.querySelector('.header__link_active').classList.remove('header__link_active');
    menu__links[i].classList.add('header__link_active');
} 

menu__links.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

const skills__values = document.querySelectorAll('.skills__value'),
      skills__scales = document.querySelectorAll('.skills__scale'),
      skills__titles = document.querySelectorAll('.skills__head title');

let windowWidth, scaleWidth, aboutPoint, portfolioPoint, teamPoint, newsPoint, contactsPoint, footerPoint;

resolutionChanging();

window.addEventListener('resize', () => {
    resolutionChanging();
});

function resolutionChanging() {
    windowWidth = window.screen.width;
    if (windowWidth >= 992) {
        scaleWidth = 600;
        aboutPoint = 6.5;
        portfolioPoint = 28.5; 
        teamPoint = 52;
        newsPoint = 80;
        contactsPoint = 91.5;
        footerPoint = 98;
    }
    if (windowWidth < 992) {
        scaleWidth = 340;
        aboutPoint = 5.7;
        portfolioPoint = 23;
        teamPoint = 49.6;
        newsPoint = 75.6;
        contactsPoint = 91.3;
        footerPoint = 98.8;
    }
    if (windowWidth < 768) {
        scaleWidth = 540;
        aboutPoint = 3.6;
        portfolioPoint = 14.3;
        teamPoint = 45.4;
        newsPoint = 80.5;
        contactsPoint = 94.5;
        footerPoint = 99.5;
    }
    if (windowWidth < 576) {
        scaleWidth = 300;
        aboutPoint = 5;
        portfolioPoint = 22.8;
        teamPoint = 47.8;
        newsPoint = 75.5;
        contactsPoint = 89.5;
        footerPoint = 97.4;
    }
    skills__values.forEach( (value, i) => {
        skills__scales[i].style.width = value.querySelector('span').innerHTML + '%';
        document.querySelectorAll('.skills__head')[i].style.width = scaleWidth * value.querySelector('span').innerHTML / 100 + 'px';
    });
}

const h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

document.addEventListener('scroll', function() {

    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

    resolutionChanging();

    if (percent <= aboutPoint) {
        setActive(0);
    }
    if (percent > aboutPoint && percent < portfolioPoint) {
        setActive(1);
    }
    if (percent > portfolioPoint && percent < teamPoint) {
        setActive(2);
    }
    if (percent > teamPoint && percent < newsPoint) {
        setActive(3);
    }
    if (percent > newsPoint && percent < contactsPoint) {
        setActive(4);
    }
    if (percent > contactsPoint && percent < footerPoint) {
        setActive(5);
    }
    if (percent > footerPoint) {
        setActive(6);
    }

});