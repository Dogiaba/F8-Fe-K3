var listContent = document.querySelector(".list-content");
var draggableList = document.querySelector(".draggable-list");

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
//-----color title module-------
function upColor() {
  var notActive = document.querySelectorAll(".course_list:not(.acrive)");
  notActive.forEach(function (value) {
    value.parentElement.parentElement.classList.remove("active");
  });

  var active = document.querySelectorAll(".course_list.active");
  active.forEach(function (value) {
    value.parentElement.parentElement.classList.add("active");
  });
  //   console.log(active);
  sortNumber();

   
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
//---sort lesson number------
function sortNumber() {
  var number = document.querySelectorAll(".number");
  number.forEach(function (value, index) {
    value.innerText = `Bai:${index + 1}:`;
  });
}
