if (document.querySelector(('.swiper'))) {
  const swiper = new Swiper('.swiper', {
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

const button = document.querySelector('.button');
const hero = document.querySelector('.container__hero');

const marioDown = (evt) => {
  evt.preventDefault();

  const height = getComputedStyle(hero).height.slice(0, 3);
  let counter = 0;

  const timerId = setInterval(() => {
    if (counter === +height) {
      location.href = button.href;
      clearInterval(timerId);
      button.removeEventListener('click', evt => marioDown(evt));
      setTimeout(() => {
        hero.style.top = '0';
      }, 1000);
    } else {
      counter++;
      hero.style.top =  counter + 'px';
    }
  }, 10)
}

button.addEventListener('click', evt => marioDown(evt));


const links = document.querySelectorAll('.contacts__link');

for (let link of links) {
  link.addEventListener('mousedown', () => {
    link.style.bottom = '20px';
  });

  link.addEventListener('mouseup', () => {
    link.style.bottom = '0';
  });

  link.addEventListener('mouseout', () => {
    link.style.bottom = '0';
  })
}
