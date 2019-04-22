const mastersItem = document.querySelectorAll('.masters__item');
const arrowLeft = document.querySelector('#left');
const arrowRight = document.querySelector('#right');
let counter = 0;

arrowRight.addEventListener('click', changeSlide);
arrowLeft.addEventListener('click', changeSlide);

function changeSlide(event) {
  mastersItem[counter].classList.toggle('active');

  if (event.target.id == 'right') counter++;
  else counter--;

  if (counter == mastersItem.length) counter = 0;
  else if (counter < 0) counter = mastersItem.length - 1;  

  mastersItem[counter].classList.toggle('active');
}