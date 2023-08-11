// Bài 1: Tính tiền taxi
// Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

var money1 = 15000;
var money2 = 13500;
var money3 = 11000;
var totalMoney;
var km = prompt("Enter km: ");
if (km <= 1) {44
  totalMoney = money1;
  document.write(`So tien phai tra: ${totalMoney}đ`);
} else if (km > 1 && km <= 5) {
  totalMoney = km * money2;
  document.write(`So tien phai tra: ${totalMoney}đ`);
} else if (km > 5 && km <= 120) {
  totalMoney = km * money3;
  document.write(`So tien phai tra: ${totalMoney}đ`);
} else if (km > 120) {
  totalMoney = km * ((10 * 11000) / 100);
  document.write(`So tien phai tra: ${totalMoney}đ`);
}
