//Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

function minElement(array) {
  //Giả định vị trí số lớn nhất là số đầu tiên của mảng.
  let min = array[0];
  let min_index = 0;
  /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị lớn nhất*/
  for (let i = 0; i < array.length; ++i) {
    if (min > array[i]) {
      //Thay đổi giá trị lớn nhất nếu tìm ra số lớn hơn
      min = array[i];
      min_index = i;
    }
  }
  console.log("min= ", min);
  console.log("min_index= ", min_index);
}

// Function to find the maximum value
function maxElement(array) {
  //Giả định vị trí số lớn nhất là số đầu tiên của mảng.
  let max = array[0];
  let max_index = 0;
  /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị lớn nhất*/
  for (let i = 0; i < array.length; ++i) {
    if (max < array[i]) {
      //Thay đổi giá trị lớn nhất nếu tìm ra số lớn hơn
      max = array[i];
      max_index = i;
    }
  }
  console.log("max= ", max);
  console.log("max_index= ", max_index);
}

let arr = [9, 2, 12, 5, 90, 3, 6];
minElement(arr);
maxElement(arr);

<!-- ===================================================================================== -->


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
    productContent.innerHTML= result
    // container.outerHTML = `
    // <div class="container">
    //   <div class="products ">${result}</div>
    //   <!-- .products -->
    // </div>
    // `
    console.log(result);
  })
}
render(dataProduct);
// banerHeader()