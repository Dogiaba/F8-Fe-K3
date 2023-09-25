let tab = document.querySelector(".form");
let tabHeader = document.querySelector(".tab_header");
let tabHeadElement = tab.querySelectorAll(".tab_header > div");
let tabBody = tab.querySelector(".tab_body");
let tabBodyElement = tab.querySelectorAll(".tab_body > div");


for(let i = 0; i<tabHeadElement.length; i++){
    tabHeadElement[i].addEventListener("click",function(){
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeadElement[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyElement[i].classList.add("active");
    })
}

