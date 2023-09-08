  
Object.prototype.getCurrency = function (currency) {
  return this.toLocaleString() + "" + currency;
};
var price = 12000;
console.log(price.getCurrency("đ"));


//cach 2:
// const options2 = { style: 'currency', currency: 'USD' };
// const numberFormat2 = new Intl.NumberFormat('en-US', options2);
