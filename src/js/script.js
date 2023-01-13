const skills__values = document.querySelectorAll('.skills__value'),
      skills__scales = document.querySelectorAll('.skills__scale'),
      skills__titles = document.querySelectorAll('.skills__head title');

skills__values.forEach( (value, i) => {
    skills__scales[i].style.width = value.querySelector('span').innerHTML + '%';
    document.querySelectorAll('.skills__head')[i].style.width = 600 * value.querySelector('span').innerHTML / 100 + 'px';
});