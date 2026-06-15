const buttons = document.querySelectorAll('.button');
const arr=Array.from('buttons')
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    buttons.forEach(function (butt){
      body.style.backgroundColor = e.target.id;
    });
  });
});
