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