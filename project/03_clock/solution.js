// work on event like click and get the time

// const clock= document.querySelector('#clock');
//  clock.addEventListener('click', function (e) {
//     let date = new Date();
//   clock.innerText = date.toLocaleTimeString();
//  })

// Auto working clock
 const clock= document.querySelector('#clock');
    setInterval(() => {
    let date = new Date();
  clock.innerText = date.toLocaleTimeString();
    }, 1000);