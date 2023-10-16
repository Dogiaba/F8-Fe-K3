var lens = document.querySelector("#lens");
var image1 = document.querySelector("#img1");
var image2 = document.getElementById("#img2");

image1.addEventListener("mousemove", function (e) {
  var pos;


  var x = e.clientX - e.target.offsetLeft;
  var y = e.clientY - e.target.offsetTop;
  //   var x = lens.offsetWidth / e.offsetWidth;
  //   var y= lens.offsetHeight / e.offsetHeight;




  lens.style.display = "block";

  //   lens.style.left = x + 76 + "px";
  //   lens.style.top = y + 299  + "px";

  lens.style.left = x + "px";
  lens.style.top = y + 250 + "px";

  image2.style.backgroundPosition =
    (x - (500 / 2 / 6)) * -6 + "px" + (y - (500 / 2 / 6) + 250) * -6 + "px";
});

image1.addEventListener("mouseout", function () {
  lens.style.display = "none";
});
