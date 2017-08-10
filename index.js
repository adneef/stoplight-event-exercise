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
  stopBtn.addEventListener("click", function(){
    stopLight.classList.toggle('stop')
  })
  slowBtn.addEventListener("click", function(){
    slowLight.classList.toggle('slow')
  })
  goBtn.addEventListener("click", function(){
    goLight.classList.toggle('go')
  })
})();
