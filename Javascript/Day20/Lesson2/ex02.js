var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
let result = [];
let flatten = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(arr[i])) {
      flatten(item);
    } else {
      result.push(item);
    }
  }
  return result;
};
console.log("Chuyển về mảng 1 chiều " + flatten(arr));
