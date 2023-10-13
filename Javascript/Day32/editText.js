//Show dropdown
var dropBtn = document.querySelector(".dropBtn");
var dropDown = document.querySelector(".dropdown");
var dropDownContent = document.querySelector(".dropdown-content");
var vlll = document.getElementById("myDropdown");
var textInput = document.querySelector("#text-input");

dropBtn.addEventListener("click", () => {
  dropDownContent.classList.toggle("show-menu");
});

// Prevent event bubble up to window.
vlll.addEventListener("click", function (event) {
  event.stopPropagation();
});

//-----click out btn File----
window.addEventListener("click", (event) => {
  if (!event.target.matches(".dropBtn")) {
      if (dropDownContent.classList.contains("show-menu")) {
        dropDownContent.classList.remove("show-menu");
      }
    // console.log(dropDownContent);
  }
});

var boldBtn = document.querySelector("#bold-btn");
boldBtn.addEventListener("click", () => {
  document.execCommand("bold");
});

var underlineBtn = document.querySelector("#underline-btn");
underlineBtn.addEventListener("click", () => {
  document.execCommand("underline");
});

var italicBtn = document.querySelector("#italic-btn");
italicBtn.addEventListener("click", () => {
  document.execCommand("italic");
});

var content = document.querySelector(".content");
var colorBtn = document.querySelector("#color-btn");

colorBtn.addEventListener("blur", () => {
  var pickColor = colorBtn.value;
  document.execCommand("styleWithCSS", false, true);
  document.execCommand("ForeColor", false, pickColor);
});

//---------------change all text color---------------
// const changTextColor = (event) =>{
//     const selectedColor = event.currentTarget.value;
//     content.style.color = selectedColor;
// }
// colorBtn.addEventListener("change", changTextColor);

//------Save txt------
var txtBtn = document.querySelector(".txt-btn");
txtBtn.addEventListener("click", () => {
  var tempLink = document.createElement("a");
  var blob = new Blob([`${content.value}`], { type: "text/plain" });
  tempLink.setAttribute("href", URL.createObjectURL(blob));
  tempLink.setAttribute("download", `${textInput.value}.txt`);
  tempLink.click();

  URL.revokeObjectURL(tempLink.href);
});

//--------save pdf---------
var pdfBtn = document.querySelector(".pdf-btn");
pdfBtn.addEventListener("click", () => {
  var opt = {
    margin: 1,
    filename: `${textInput.value}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  // New Promise-based usage:
  html2pdf().set(opt).from(content).save();
  // console.log("tesst")
});

//----new file-------
var newBtn = document.querySelector(".new-btn");
newBtn.addEventListener("click", () => {
  textInput.value = "";
  content.innerHTML = "";
});

//-------------
// var content = document.querySelector(".content");
// document.designMode = "on";
// content.addEventListener("click", (event)=>{
//     if (event.keyCode == 16) {
//         // Execute command if user presses the SHIFT button:
//         document.execCommand("bold");
//       }
// })
