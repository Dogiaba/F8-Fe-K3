var scrollBottom = document.querySelector(".scrollBottom")
scrollBottom.addEventListener("click", ()=>{
    window.scroll({
        top:2000,
        behavior:"smooth",
    }) 
})

var scrollTop = document.querySelector(".scrollTop");
window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 200){
        scrollTop.classList.add("show");
    }else{
        scrollTop.classList.remove("show");
    }
})

scrollTop.addEventListener("click", ()=>{
    window.scroll({
        top: 0,
        behavior:"smooth",
    })
})