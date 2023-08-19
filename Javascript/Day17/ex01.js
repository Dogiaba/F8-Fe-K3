

var letters = document.getElementById("text");
var text = letters.innerHTML;
var i = 0;
function myFunction() {

    var j;
    if (i < text.length) {
      letters.innerHTML = " ";
      for (j = 0; j <= i; j++) {
        letters.innerHTML += '<span style="color: red;">' + text[j] + "</span>";
      }
      letters.innerHTML += text.slice(j);
      i++;
    } else {
      text = letters.innerText
      i = 0
    }
}

setInterval(myFunction, 100);
