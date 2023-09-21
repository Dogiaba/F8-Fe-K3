//tạo các element
var carousel = document.querySelectorAll(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var nextBtn = document.querySelector(".carousel-nav .next");
var prevBtn = document.querySelector(".carousel-nav .prev");

var slideIndex = 1;

// var sliderImgs =
// var dost = document.querySelector(".dost");
//-> Lấy ra danh sách cá items
var carouselItems = carouselInner.children;
console.log(carouselItems);

//-- tinh chieu rong cua 1 item
var itemWidth = carouselInner.clientWidth;
console.log(itemWidth);
//lấy chiều rộng của 1 element

//->-- tính tổng chiều rộng các ỉtem
var totaWidth = itemWidth * carouselItems.length;
console.log(totaWidth);
//-> Cập nhập css
carouselInner.style.width = `${totaWidth}px`;

//--xử lý chuyển slide
var position = 0;
nextBtn.addEventListener("click", function () {
  //chan neu chay het slide
  if (Math.abs(position) >= totaWidth - itemWidth) {
    return;
  }
  position -= innerWidth;
  carouselInner.style.translate = `${position}px`;
});

prevBtn.addEventListener("click", function () {
  //chan neu chay het slide
  if (Math.abs(position) <= 0) {
    return;
  }
  position += innerWidth;
  carouselInner.style.translate = `${position}px`;
});

//dot by img
for (let i = 0; i < carousel.length; ++i) {
  const slider = carousel[i];
  const dots = slider.querySelector(".dots");
  const sliderImgs = slider.querySelectorAll(".item");

  //create dots and add listeners
  for (let i = 0; i < sliderImgs.length; ++i) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    // dot.addEventListener("click", dotClick.bind(null, i), false);
  }

  const allDots = dots.querySelectorAll(".dot");
  allDots[0].classList.add("active-dot");
  sliderImgs[0].style.left = "0";

  //   function dotClick(num){

  //   }

  const dotss = dots.querySelectorAll("*").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      moveDot(index + 1);
    });
  });

  function moveDot(index) {
    slideIndex = index;
  }
}
// Mouse Drag-----------------
// var carousel = document.querySelectorAll(".carousel");
const container = document.querySelector(".slider");

const container_width = container.clientWidth;

// var carouselInner = document.querySelector(".carousel-inner");
const imgs_wrapper = document.querySelector(".slider__wrapper");

// const sliderImgs = slider.querySelectorAll(".item");
const imgs = document.querySelectorAll(".slide");
const total_imgs = imgs.length;
let current_index = 0;
let pointer_is_down = false;
let [start_x, end_x] = [0, 0];
let move_distance = 0;


function createDraggingEffects() {
  const max_distance = 2;
  const scrolled_distance =
    current_index * container_width + (start_x - end_x) / max_distance;

  switchImages(-scrolled_distance);
}

function calculateFinalMoveDistance() {
  const scrolled_distance = Math.abs(start_x - end_x);
  const minimum_distance = 30;

  if (scrolled_distance < minimum_distance) {
    move_distance = -(current_index * container_width);
    switchImages();
    return false;
  }

  if ((start_x > end_x) & (current_index < total_imgs - 1)) {
    // scroll next
    current_index++;
  } else if (start_x < end_x && current_index > 0) {
    // scroll prev
    current_index--;
  }

  move_distance = -(current_index * container_width);
  switchImages(move_distance);
}

function switchImages(scrolled_number) {
  const distance = scrolled_number || move_distance;
//edit here
  carouselInner.style.transform = `translateX(${distance}px)`;
}

function handleMouseLeave(e) {
  if (!pointer_is_down) return false;

  pointer_is_down = false;
  [start_x, end_x] = [0, 0];
  switchImages();
}



container.addEventListener("mousedown", (e) => {
  e.preventDefault();
  pointer_is_down = true;
  start_x = e.pageX;
});

container.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!pointer_is_down) return false;
  end_x = e.pageX;
  createDraggingEffects();
});

container.addEventListener("mouseup", (e) => {
  e.preventDefault();
  pointer_is_down = false;
  calculateFinalMoveDistance();
});

container.addEventListener("mouseleave", handleMouseLeave);

container.addEventListener("touchstart", (e) => {
  pointer_is_down = true;
  start_x = e.touches[0].pageX;
});

container.addEventListener("touchmove", (e) => {
  if (!pointer_is_down) return false;
  end_x = e.touches[0].pageX;
  createDraggingEffects();
});

container.addEventListener("touchend", (e) => {
  pointer_is_down = false;
  calculateFinalMoveDistance();
});
