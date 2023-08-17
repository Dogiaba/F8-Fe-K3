function minElement(array) {
  //Giả định vị trí số lớn nhất là số đầu tiên của mảng.
  let min = array[0];
  let min_index = 0;
  for (let i = 0; i < array.length; ++i) {
    if (min > array[i]) {
      min = array[i];
      min_index = i;
    }
  }
  console.log("min= ", min);
  console.log("min_index= ", min_index);
}

// Function to find the maximum value
function maxElement(array) {
  let max = array[0];
  let max_index = 0;
  for (let i = 0; i < array.length; ++i) {
    if (max < array[i]) {
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
















//===================Cách 2==================
// var numbers = [1,2,10,5,90,3,6];
// var largest = numbers[0];
// var smallest = numbers[0];
// var indexMax = 0;
// var indexMin = 0;
// for (var i = 0; i < numbers.length; i++) {
//   var temp = numbers[i];
//   if (temp > largest) {
//     largest = numbers[i];
//     indexMax = i;
//   }
//   if (temp < smallest) {
//     smallest = numbers[i];
//     indexMin = i;
//   }
// }
// document.innerHTML()
// console.log(largest);
// console.log("test " + indexMax);
// console.log(smallest);
// console.log("test " + indexMin);
