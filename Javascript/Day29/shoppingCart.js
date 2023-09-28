var quantityNumnber = document.querySelector(".quantityNumber");
var addToCart = document.querySelector(".add_cart");
// var addToCart = document.getElementsByTagName("button");
// var productItem=[
//     {
//         stt: 1,
//         name:"Sản phẩm 1",
//         price:"1000",
//     },
//     {
//         stt: 2,
//         name:"Sản phẩm 2",
//         price:"2000",
//     },
//     {
//         stt: 3,
//         name:"Sản phẩm 3",
//         price:"3000",
//     },
//     {
//         stt: 4,
//         name:"Sản phẩm 4",
//         price:"4000",
//     },

// ]

var shoppingCart = function () {
  cart = [];

  function itemCart(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  function saveCart() {
    sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
  }
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  var obj = {};
  obj.addItemToCart = function (name, price, count) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  };
    // Set count from item
    obj.setCountForItem = function(name, count) {
        for(var i in cart) {
          if (cart[i].name === name) {
            cart[i].count = count;
            break;
          }
        }
      };

      // Remove item from cart
  obj.removeItemFromCart = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count --;
        if(cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
  }
  saveCart();
}

};

addToCart.addEventListener("click", function (event) {
  event.preventDefault();
  var name = this.name = name;
  var price = Number(this.price = price);
  var count = this.count = count;
//   shoppingCart.addItemToCart(name, price, count);
  console.log("ok");
});
