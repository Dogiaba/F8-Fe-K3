// var newArr = [[], [],[]];

// arr.forEach((value) =>{
//     value.forEach((element)=>{
//         if(typeof element === "string"){
//             newArr[0].push(element);
//         }else if(typeof element === "number"){
//             newArr[1].push(element);
//         }else if(typeof element === "boolean"){
//             newArr[2].push(element);
//         }
//     });
// });
// document.write(`[${newArr[0]}], [${newArr[1]}], [${newArr[2]}]`);

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

if (Array.isArray(arr)) {
  arr = arr.flat(Infinity);
  var arrayType = arr.reduce(function (prev, current) {
    var type = typeof current;
    if (!prev[type]) {
      prev[type] = [];
    }
    prev[type].push(current);
    return prev;
  }, []);

  var newArr = [];
  for (var index in arrayType) {
    newArr.push(arrayType[index]);
  }
console.log(`[${newArr[0]}], [${newArr[1]}], [${newArr[2]}]`);
}
