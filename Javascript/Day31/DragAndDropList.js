var listContent = document.querySelector(".list-content");
var draggableList = document.querySelector(".draggable-list");

const listCourse = [
  "Module 01: Nhập môn lập trình web",
  "Lập trình web là gì? Thiết kế web là gì?",
  "Lộ trình học lập trình web Fullstack",
  "Phương pháp học lập trình hiệu quả",
  "Các công việc liên quan đến lập trình web",
  "Cơ chế hoạt động của website",
  "Module 02: Ngôn ngữ đánh dấu HTML",
  "Giới thiệu về ngôn ngữ HTML",
  "Cấu trúc trang HTML, cấu trúc thẻ HTML",
  "Các loại thẻ HTML, các nhóm thẻ HTML",
  "Các thẻ HTML hay dùng trong nhóm Block",
  "Các thẻ HTML hay dùng trong nhóm Inline",
  "Các thẻ HTML5 hay dùng và cấu trúc chuẩn trang HTML5",
  "Cách đặt tên class, id trong HTML",
  "Quy tắc đặt tên class BEM",
  "Module 3: Ngôn ngữ định dạng CSS",
  "Nhập môn CSS",
  "Giới thiệu ngôn ngữ định dạng CSS",
  "Cách học CSS hiệu quả",
  "cách tích hợp CSS vào trang web",
  "Bộ chọn CSS (CSS Selector) từ cơ bản đến nâng cao",
  "Pseudo Elements",
  "Pseudo Classes",
  "Các đơn vị thường dùng trong CSS",
  "CSS cơ bản",
  "Các thuộc tính định dạng văn bản",
  "Thuộc tính background",
  "Thuộc tính border",
  "Thuộc tính kích thước: width, height,...",
  "Thuộc tính căn chỉnh văn bản: text-align",
  "Thuộc tính overflow và ứng dụng",
  "Thuộc tính opacity, filter",
  "Thuộc tính padding, margin",
  "Box Model CSS",
  "Module 4: Ngôn ngữ SCSS",
  "Giới thiệu về ngôn ngữ tiền xử lý",
  "Các ngôn ngữ tiền xử lý phổ biến hiện nay",
  "Tại sao nên chọn SCSS cho dự án Front-End?",
  "Cách làm việc với SCSS",
  "Cài đặt SCSS và các cách biên dịch SCSS sang CSS",
  "Cú pháp SCSS",
  "Biến trong SCSS",
  "Toán tử trong SCSS",
  "Phân cấp trong SCSS",
  "Các cách kế thừa trong SCSS: extends, mixin, placeholder",
  "Functions trong SCSS",
  "Câu lệnh rẽ nhánh: @if @else",
  "Vòng lặp: @for, @while, @each",
  "Import, use, forward trong SCSS",
  "Kỹ thuật chia file, folder khi xây dựng dự án với SCSS",
  "Thực hành: Xây dựng Grid System bằng cách sử dụng SCSS",
];

function checkModule(m) {
  if (m.indexOf("Module") !== -1) {
    return true;
  }
}

const listItems = [];

let dragStartIndex;

createList();
upColor();

function createList() {
   var ex = 1;
  [...listCourse]
    .sort((value1, value2) => value1.sort - value2.sort)
    .forEach((course, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);

      if (checkModule(course) === true) {
        listItem.innerHTML = `
         <div class="draggable" draggable="true">
            <p class="course_list active">${course}</p>
         </div>`;
        upColor();
      } else {
        listItem.innerHTML = `
      <div class="draggable" draggable="true">
      <div><span class="number">Bai:${ex}:</span></div>
         <p class="course_list">${course}</p>
      </div>`;
      ex++;
      }
      listItems.push(listItem);
      draggableList.append(listItem);
    });
  addEventListener();
}

function upColor() {
  var notActive = document.querySelectorAll(".course_list:not(.acrive)");
  notActive.forEach(function (value) {
    value.parentElement.parentElement.classList.remove("active");
  });

  var active = document.querySelectorAll(".course_list.active");
  active.forEach(function (value) {
    value.parentElement.parentElement.classList.add("active");
  });
  console.log(active);
  sortNumber()
}

function dragStart() {
  //   console.log("Event:", 'dragstart');
  dragStartIndex = this.closest("li").getAttribute("data-index");
  upColor();
}
function dragEnter() {
  //console.log("Event:", 'dragenter');
  this.classList.add("over");
  upColor();
}

function dragLeave() {
  //console.log("Event:", 'dragleave');
  this.classList.remove("over");
  upColor();
}
function dragOver(e) {
  //console.log("Event:", 'dragover');
  e.preventDefault();
  upColor();
}

function dragDrop() {
  //   console.log("Event:", 'drop');
  const dragEndIndex = this.getAttribute("data-index");

  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
  upColor();

}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");
  listItems[fromIndex].append(itemTwo);
  listItems[toIndex].append(itemOne);
}

function addEventListener() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

function sortNumber(){
   var number =document.querySelectorAll(".number");
   number.forEach(function(value, index){
      value.innerText = `Bai:${index + 1}:`;

   })
}
