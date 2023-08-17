// S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N

var n = prompt("Nhập vào số n : ");
n = +n;

function S(n) {
  if (n < 0) {
    return "Enter number > 0";
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return S(n - 1) + 1 / n;
  }
}

console.log(S(n));
