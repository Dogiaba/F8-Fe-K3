// # Bài 1:
// Viết hàm đảo ngược số nguyên với tham số là số cần đảo ngược
function reverseInt(number){
    var rever = number.toString().split('').reverse().join('');
    return parseInt(rever);
}
console.log(reverseInt(12345));



