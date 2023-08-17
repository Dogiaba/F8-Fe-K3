// var text = document.getElementById('text');
// text.addEventListener("load", init(), false);

// function changeColor() {
//     text.style.color = "#F00";
// }

// function init() {
//     setTimeout(changeColor, 3000);
// }

// var textElement = document.getElementById("text");
// myFunction();

// function myFunction() {
//     var letters = document.getElementById('text');
//     for (var i = 0; i < letters.innerHTML.length; i++) {
//         //only change the one you want to
//             letters.innerHTML = letters.innerHTML.replace(letters[i], '<span style="color: red;">'+letters[i]+'</span>');
//        }
// }
// var interval = setInterval(myFunction(), 500);

// function changeLetter(textToChange, position){

//     if (textToChange.length === position) return textToChange;

//     return textToChange.slice(0, position)
//            + '<span style="color:red;">' + textToChange[position] + '</span>'
//            + textToChange.slice(position + 1);
// }

// function colourCycle(textElement) {
//     var letters = textElement.innerHTML;
//         for (var i = 1; i <= textElement.innerHTML.length; i++) {
//         (function (i) {
//             setTimeout(function () {
//                 textElement.innerHTML = changeLetter(letters, i);
//             }, 100 * i);
//         })(i);
//     }
// }

function myFunction() {
  var letters = document.getElementById("text");
  var text = letters.innerHTML;
  var i = 0;
  console.log("test" + text);
  // var textSpace = text.split(" ");

  return function () {
    var j;
    if (i < text.length) {
      letters.innerHTML = " ";
      for (j = 0; j <= i; j++) {
        letters.innerHTML += '<span style="color: red;">' + text[j] + "</span>";
      }
      letters.innerHTML += text.slice(j);
      i++;
    } else {
      clearInterval(interval);
    }
  };
}

var interval = setInterval(myFunction(), 100);
