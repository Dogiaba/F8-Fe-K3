var n = 5;
var count = 1;
var triangle = "";

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    triangle += count;
    count++;
  }
  triangle += " \n";
}
console.log(triangle);
