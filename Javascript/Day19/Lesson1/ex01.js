// var arrA = [1, 4, 3, 2];
// var arrB = [5, 2, 6, 7, 1];

// const filteredArray = arrA.filter((value) => arrB.includes(value));
// console.log(`Kết quả giao giữa hai chuỗi: [${filteredArray}]`);



var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1];
var arrB = [5, 2, 6, 7, 1, 3];
function filter(array) {
  return array.reduce((result, item) => {
    if (!result.includes(item)) result.push(item);
    return result;
  }, []);
}


function filterIncludes(arrA, arrB) {
  if (Array.isArray(arrA) && Array.isArray(arrB))
    return filter(arrA.filter((n) => arrB.includes(n)));
  else return "arrA hoặc arrB không phải mảng";
}
console.log(filterIncludes(arrA, arrB));
