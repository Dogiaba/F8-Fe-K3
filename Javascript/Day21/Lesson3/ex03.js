var data = [];
var dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
var dataLogin = handleLogin("Nguyen Van B", "1234567");

function handleRegister(name, pass, email) {
  if (!name || !pass || !email) {
    console.log("Enter complete information!!!");
    return -1;
  }

  var dataInfor = {
    name: name,
    email: email,
    pass: pass,
    role: "user",
  };
  data.push(dataInfor);
  console.log("Register Success!");
}

function handleLogin(name, pass) {
  var dataLogin = data.find(function (dataUser) {
    return dataUser.name === name && dataUser.pass === pass;
  });

  if (dataLogin) {
    console.log("Data information:");
    console.log(dataLogin);
  } else {
    console.log("Inappropriate information");
  }
}
console.log("Registered account", data);
