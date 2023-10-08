//Show dropdown
var dropBtn = document.querySelector(".dropBtn");
var dropDown = document.querySelector(".dropdown");
var vlll = document.getElementById("myDropdown");
var textInput = document.querySelector("#text-input");

dropBtn.addEventListener("click", () => {
  dropDown.classList.toggle("show-menu");
});

// Prevent event bubble up to window.
vlll.addEventListener("click", function (event) {
  event.stopPropagation();
});
//-----click ount btn File----
// window.addEventListener("click",(event) =>{
//     if(!event.target.matches(" .dropBtn")){
//         var dropDownContent = document.querySelector(".dropdown-content");
//         var i;
//         for(  i = 0; i < dropDownContent.length; i++){
//             var openDropdown = dropDownContent[i];
//             if (openDropdown.classList.contains('show-menu')) {
//                 openDropdown.classList.remove('show-menu');
//               }
//         }
//         console.log("test")
//     }
// })

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
  document.execCommand("styleWithCSS", false, true);
  document.execCommand("ForeColor", false, `${this.value}`);
});

//---------------change all text color---------------
// const changTextColor = (event) =>{
//     const selectedColor = event.currentTarget.value;
//     content.style.color = selectedColor;
// }
// colorBtn.addEventListener("change", changTextColor);

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
html2pdf().set(opt).from(element).save();
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
