(function() {
  'use strict';

//create vars for btns
  let stopBtn = document.getElementById('stopButton')
  let slowBtn = document.getElementById('slowButton')
  let goBtn = document.getElementById('goButton')

//create vars for lights themselves
  let stopLight = document.querySelector('#stopLight')
  let slowLight = document.querySelector('#slowLight')
  let goLight = document.querySelector('#goLight')

  //btn and light control - on and off - lights are independent
  stopBtn.addEventListener('click', function(){
    stopLight.classList.toggle('stop')
  })
  slowBtn.addEventListener('click', function(){
    slowLight.classList.toggle('slow')
  })
  goBtn.addEventListener('click', function(){
    goLight.classList.toggle('go')
  })

  //logs the btn the mouse entered
  stopBtn.addEventListener('mouseenter', function(){
    console.log(`Entered ${event.target.innerHTML} button`)
  })
  slowBtn.addEventListener('mouseenter', function(){
    console.log(`Entered ${event.target.innerHTML} button`)
  })
  goBtn.addEventListener('mouseenter', function(){
    console.log(`Entered ${event.target.innerHTML} button`)
  })

  //logs the btn the mouse left
  stopBtn.addEventListener('mouseleave', function(){
    console.log(`Left ${event.target.innerHTML} button`)
  })
  slowBtn.addEventListener('mouseleave', function(){
    console.log(`Left ${event.target.innerHTML} button`)
  })
  goBtn.addEventListener('mouseleave', function(){
    console.log(`Left ${event.target.innerHTML} button`)
  })

  //log the state of each bulb
  let buttons = document.querySelector('.button')

  buttons.addEventListener("click", function(){
    if(stopBtn.classList.contains('stop')) {
      console.log()
    }

  })

})();
