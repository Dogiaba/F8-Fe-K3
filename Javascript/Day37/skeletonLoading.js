// var dataProduct= [
//     {
//         id:1,
//         name:"WD 2TB Elements",
//         type:"electronics",
//         vote:3.4,
//         img: "./img/product.jpg",
//     },
//     {
//         id:2,
//         name:"WD 2TB Elements",
//         type:"electronics",
//         vote:3.4,
//         img: "./img/product.jpg",
//     },
//     {
//         id:3,
//         name:"WD 2TB Elements",
//         type:"electronics",
//         vote:3.4,
//         img: "./img/product.jpg",
//     },
// ]

// const banner = document.querySelector(".banner");
// const itemImg = document.querySelector(".item-img");
// const itemTitle = document.querySelector(".item-title");
// const price = document.querySelector(".price");
// const itemBtn = document.querySelector(".item-btn");
// const itemStart = document.querySelector(".item-start");
// const nameType = document.querySelector(".nameType")
// const voteStart = document.querySelector(".voteStart");

// const render = ()=>{
//     banner.classList.remove("skeleton");
//     itemImg.classList.remove("skeleton");
//     itemTitle.classList.remove("skeleton");
//     price.classList.remove("skeleton");
//     itemBtn.classList.remove("skeleton");
//     itemStart.classList.remove("skeleton")
//     nameType.classList.remove("skeleton")
//     voteStart.classList.remove("skeleton")
// }
const wrapper = document.querySelector(".wrapper");
setTimeout(()=> {
    wrapper.classList.remove("skeleton")
},1000)

// setTimeout(() =>{
//     render();
// },1000)
