var counter = document.querySelector(".counter");
var btnLink = document.querySelector(".btn-link");

var counterNumber = 20;
let checkTime;
// let focusOut = false;

// btnLink.disabled = true;
counter.innerText = counterNumber;

function startDown(currentTime) {
  if (!checkTime) checkTime = currentTime;
  if (currentTime - checkTime > 1000) {
    counterNumber--;
    checkTime = currentTime;
    counter.innerText = counterNumber;
  }
  if (counterNumber > 0) {
    requestAnimationFrame(startDown);
  }else{
    btnLink.disabled = false;
  }
}
requestAnimationFrame(startDown);



btnLink.addEventListener("click", function(){
  if(counterNumber === 0){
    window.location.href="https://anonystick.com/blog-developer/performance-javascript-3-vi-du-nay-co-the-chung-minh-2020121088424197"
  }else{
    btnLink.disabled = true;
  }

})

// Sử dụng event blur or focus phát hiện user chuyển tab
window.addEventListener('blur', function() {
    focusOut = true;
    document.title = "Breakup";
  })
  
  window.addEventListener('focus', function() {
    focusOut = false;
    document.title = "Patch Up";
  });


