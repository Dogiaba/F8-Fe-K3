var lens = document.querySelector("#lens");
var image1 = document.querySelector("#img1");

var image2 = document.getElementById("img2");

var img = document.querySelector(".product-img");

image1.addEventListener("mousemove", function (e) {

  var cx = image1.clientWidth / lens.clientWidth;
  var cy = image1.clientHeight / lens.clientHeight;

  var x = e.clientX - e.target.offsetLeft;
  var y = e.clientY - e.target.offsetTop;

  lens.style.display = "block";
  
  lens.style.left = x + "px";
  lens.style.top = y + 250 + "px";



  if (x >= image1.width - lens.offsetWidth / 2) {x = image1.width - lens.offsetWidth;}
  if (x < lens.offsetWidth / 2) {x = 0;}
  if (y >= image1.height - lens.offsetHeight / 2) {y = image1.height - lens.offsetHeight;}
  if (y < lens.offsetHeight / 2) {y = 0;}



  
  image2.style.backgroundSize = `${image2.clientWidth * cx}px ${
    image2.clientHeight * cy
  }px`;

  /* Display what the lens "sees": */
  image2.style.backgroundPosition =
    "-" +
    (x - 500 / 2 / 6)*  cx +
    "px " +
    "-" +
    (y - 500 / 2 / 6 + 250)* cy +
    "px";
});

// lens.style.left = x + "px";
// lens.style.top = y + 500+ "px";

image1.addEventListener("mouseout", function () {
  lens.style.display = "none";
});
