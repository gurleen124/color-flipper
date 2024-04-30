const colors = ['pink', 'green', 'skyblue', 'orange', 'yellow', 'violet'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const random = getRandomNumber();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }