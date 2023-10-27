const wrapper = document.querySelector(".wrapper");
const banner = document.querySelector(".banner");
const productContent = document.querySelector(".products");
const container = document.querySelector(".container");
setTimeout(()=> {
    wrapper.classList.remove("skeleton")
},3000)

// function getBaner(value){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve(value);

//   },3000)
//   })
// }
// const banerHeader = async()=>{
//   const bannerOther = await getBaner(`
//     <div class="banner">
//     <img src="./img/banner.9aa4579c.jpg" alt="banner" />
//   </div>
//   `);
//   console.log(bannerOther)
//   banner.outerHTML = bannerOther;
// };

function render(dataProduct) {
  Promise.all(
    dataProduct.map((value, index) => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(value);
                // productContent.classList.remove("skeleton")
            },3000)
          });

    })
  ).then((data)=>{
    const result = data.reduce((prev , value)=> {
        return prev  + 
        `
        <div class="item-product">
        <div class="item-img ">
          <img src="${value.img}" alt="product" />
        </div>
        <h3 class="item-title ">${value.name}</h3>
        <div class="item-info">
          <span class="nameType">${value.type}</span>
          <div class="item-vote">
            <span class="voteStart ">${value.vote}</span>
            <span class="item-start ">
              <i class="fa-solid fa-star"></i>
            </span>
          </div>
        </div>
        <h3 class="price ">${value.price}</h3>
        <div class="item-btn ">
          <button class="item-addBtn">Add to card</button>
          <button class="item-buyBtn">Buy now</button>
        </div>
      </div>
        `
    },``)
    // productContent.innerHTML= result
    container.outerHTML = `
    <div class="container">
      <div class="products ">${result}</div>
    </div>
    `
    console.log(result);
  })
}
render(dataProduct);
// banerHeader()