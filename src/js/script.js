const menu__links = document.querySelectorAll('.header__menu-link');

menu__links.forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('.header__menu-link_active').classList.remove('header__menu-link_active');
        link.classList.add('header__menu-link_active');
    } ,false);
});



const skills__values = document.querySelectorAll('.skills__value'),
      skills__scales = document.querySelectorAll('.skills__scale'),
      skills__titles = document.querySelectorAll('.skills__head title');

skills__values.forEach( (value, i) => {
    skills__scales[i].style.width = value.querySelector('span').innerHTML + '%';
    document.querySelectorAll('.skills__head')[i].style.width = 600 * value.querySelector('span').innerHTML / 100 + 'px';
});