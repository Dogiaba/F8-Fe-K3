var customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customer) {
  // sort low to hight
  const sortAge = customer.sort(
    (objA, objB) => objA.age - objB.age);
  console.log(sortAge);
  customer.forEach((e) => {
    var lastName = e.name.split(" ");
    e.shortName = lastName[0] + " " + lastName[lastName.length - 1];
  });
}

var result = createCustomers(customers);
console.log(result);
