Array.prototype.push2 = function(...arr){
    for(var i = 0; i < arr.length; i++){
        this[this.length] = arr[i];
    }
    return this.length;
}

var arrays = [2,3,4,5];
var res = arrays.push2(1,0,9);
console.log(arrays);

//cách 2:
// Array.prototype.push2 = (function() {
//     var original = Array.prototype.push;
//     return function() {
//         return original.apply(this, arguments);
//     };
// })();