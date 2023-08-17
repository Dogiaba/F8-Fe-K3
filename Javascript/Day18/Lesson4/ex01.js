var numbers = [5, 1, 9, 8, 10];
var element = 4;
function insertElement(element, numbers) {
  numbers.push(element);
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers;
}

console.log(insertElement(element, numbers));
