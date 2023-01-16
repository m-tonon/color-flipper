// const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
  // goal => get random number between 0 -3 (n index) colors [i]
  const pickedColor = getRGBColor();
  console.log(pickedColor);

  document.body.style.backgroundColor = pickedColor;
  color.textContent = pickedColor;
});

// function getRandomNumber () {
//   return Math.floor(Math.random()*colors.length);
// }
function getRGBColor(){
  const number = (min,max) => Math.floor((Math.random() * max) + min);
  const r = number(0,255);
  const g = number(0,255); 
  const b = number(0,255);
  return rgb = `rgb(${r},${g},${b})`;
}