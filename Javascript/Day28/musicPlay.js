var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progessSpan = progress.querySelector("span");

//Giá trị khởi tạo
var initialClientX;
var percent = 0;
var percent2 = 0;
var currentPercent = 0;

let isPlaying = false;
var isDragging = false;

progressBar.addEventListener("mousedown", function (e) {
  //Lấy offsetX của progress-bar
  var offsetX = e.offsetX;
  //Tính giá trị phần trăm giữa offsetX và chiều rộng của progress-bar
  percent = (offsetX * 100) / progressBar.clientWidth;

  //Làm tròn 2 chữ số phần thập phân
  percent = percent.toFixed(2);

  progress.style.width = `${percent}%`;
  percent2 = percent;

  //Kích hoạt hành động bấm chuột và kéo
  initialClientX = e.clientX;
  currentPercent = percent;
  document.addEventListener("mousemove", handleDrag);
});

progessSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);

  //Cập nhật clientX khi bấm chuột vào button màu tím
  initialClientX = e.clientX;
});

//Hủy sự kiện mousemove nếu mouseup vào document
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);

  //Lấy phần trăm cuối cùng và cập nhật vào biến currentPercent
  currentPercent = percent2;
});

//Kéo thả thay đổi vị trí
var handleDrag = function (e) {
  //Lấy giá trị clientX mới nhất tại vị trí chuột

  //Khoảng cách kéo = clientX mới nhất - clientX ban đầu
  var moveWidth = e.clientX - initialClientX;

  //Tính phần trăm giữa khoảng cách kéo và chiều rộng của progress-bar
  percent = (moveWidth * 100) / progressBar.clientWidth;
  // percent2 = (moveWidth * 100) / progressBar.clientWidth;
  percent = +percent.toFixed(2) + +currentPercent;

  //Cập nhật width cho progress

  if (percent < 0 || percent2 < 0) {
    percent = 0;
    // percent2 = 0;
  }

  if (percent > 100 || percent2 > 100) {
    percent = 100;
    // percent2 = 100;
  }

  // progress.style.width = `${percent}%`;
  progress.style.width = `${percent}%`;

  isDragging = true;

  var currentTime = (percent / 100) * audio.duration;
  currentTimeEl.innerText = getTime(currentTime);
};

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");
var playBtn = document.querySelector(".player .play-btn");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;
const playerRemaining = document.querySelector(".player-remaining");
const playerDuration = document.querySelector(".player-duration");

//Viết hàm chuyển đổi từ giây -> Định dạng phút:giây

var getTime = function (seconds) {
  //Tính ra số phút:
  //Lấy số giây / 60 -> Làm tròn xuống (Math.floor())
  var mins = Math.floor(seconds / 60);

  //Tính số giây còn lại sau khi đã trừ cho số phút -> Làm tròn xuống (Vì sẽ bị lẻ số giây)
  seconds = Math.floor(seconds - mins * 60);

  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

//Lấy thời lượng của audio
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

//Phát nhạc và dừng nhạc khi bấm nút play
playBtn.addEventListener("click", function () {
  //audio.paused -> Lấy trạng thái audio
  if (audio.paused) {
    audio.play(); //Phát nhạc
  } else {
    audio.pause();
  }
});

//Lắng nghe event play
audio.addEventListener("play", function () {
  playBtn.children[0].classList.remove("fa-play");
  playBtn.children[0].classList.add("fa-pause");
});

//Lắng nghe event pause
audio.addEventListener("pause", function () {
  playBtn.children[0].classList.remove("fa-pause");
  playBtn.children[0].classList.add("fa-play");
});

//----------

progressBar.addEventListener("change", function () {
  audio.currentTime = this.value;
});
// displayTime();

//Lắng nghe sự kiện timeupdate
audio.addEventListener("timeupdate", function () {
  //Lấy thời gian hiện tại của bài hát
  var currentTime = audio.currentTime;

  //Chuyển currentTime thành phần trăm
  var percent = (currentTime * 100) / audio.duration;

  if (!isDragging) {
    //Show currentTime lên UI
    currentTimeEl.innerText = getTime(currentTime);

    //Cập nhật width vào progress
    progress.style.width = `${percent}%`;
  }
});

audio.addEventListener("timeupdate", function () {
  if (!isDragging) {
    var progress = (audio.currentTime / audio.duration) * 100;
    // progressBar.value = progress;
  }
});

progressBar.addEventListener("mousedown", function (e) {
  isDragging = true;
  audio.play();
  initialClientX = e.clientX;
});

progressBar.addEventListener("mouseup", function (e) {
  var clickPosition =
    (e.clientX - progressBar.getBoundingClientRect().left) /
    progressBar.clientWidth;
  var newTime = clickPosition * audio.duration;
  audio.currentTime = newTime;
  if (isPlaying) {
    audio.play();
  }
  isDragging = false;
});

var presentTime = document.querySelector(".present-time");
var timeTooltip = function (e) {
  var position = e.clientX - progressBar.offsetLeft;
  var hoverPosition =
    (e.clientX - progressBar.getBoundingClientRect().left) /
    progressBar.clientWidth;
  var previewTime = hoverPosition * audio.duration;

  presentTime.textContent = getTime(previewTime);
  presentTime.style.display = "block";
  presentTime.style.left = `${position}px`;
  presentTime.style.color = "#fff";
  presentTime.style.background = "black";
};

progressBar.addEventListener("mousemove", timeTooltip);

audio.addEventListener("ended", function () {
  audio.currentTime = 0;
});

progressBar.addEventListener("mouseout", function () {
  presentTime.style.display = "none";
});

//----
var karaokeOpen = document.querySelector(".karaokeOpen");
karaokeOpen.addEventListener("click", function (e) {
  var karaokes = document.querySelector(".karaoke");
  karaokes.classList.add("show");
  // console.log("test");

  var close = karaokes.querySelector(".close");
  close.addEventListener("click", function () {
    karaokes.classList.remove("show");
  });

  karaokes.addEventListener("mouseup", function (e) {
    e.stopPropagation();
  });

  karaokes.addEventListener("mousedown", function () {
    e.stopPropagation();
  });
});

lyric = lyric.data.sentences;
// console.log(lyric)
var requesId, currentIndex;

var karaokeContent = document.querySelector(".karaoke_inner");
var handleKaraoke = function () {
  var currentTime = audio.currentTime * 1000;

  handleColor(currentTime);//xử lý tô màu tuwnghf từ khi hát karaoke

  //  console.log(currentTime);

  var index = lyric.findIndex(function (sentence) {
    var words = sentence.words;
    return (
      currentTime >= words[0].startTime &&
      currentTime <= words[words.length - 1].endTime
    );
  });
  if (index !== -1) {
    // var sentence = lyric[index].words
    // .map(function (word){
    //   return word.data;
    // })
    // .join(" ")
    if (index === 0) {
      var sentenceHtml = `
    <p>${getSentence(0)}</p>
    <p>${getSentence(1)}</p>
    `;
      //hiển thị lời bài hát
      karaokeContent.innerHTML = sentenceHtml;
    } else {
      //thực hiện next câu dạng sole
      nextSentence(index);
    }
    currentIndex = index;
  }
  requesId = requestAnimationFrame(handleKaraoke);
};

var getSentence = function (index) {
  // return lyric[index].words
  return lyric[index].words
    .map(function (word) {
      // return word.data;
      return `
      <span class="word" 
      data-start-time="${word.startTime}" 
      data-end-time="${word.endTime}">${word.data}<span>${word.data}</span></span>
      `
    })
    .join(" ");

  // return lyric[index].words
  //       .map(function (word) {
  //           return `<span class="word" data-start-time="${word.startTime}" data-end-time="${word.data}">${word.data}<span>${word.data}</span></span>`;
  //       })
  //       .join(" ");

};

var nextSentence = function (index) {
  var sentenceEl = karaokeContent.children;
  function showSentence(lineI) {
    sentenceEl[lineI].style.transition = `opacity 0.4s ease-in-out`;
      sentenceEl[lineI].style.opacity = 0;
      setTimeout(function () {
        sentenceEl[lineI].innerHTML = getSentence(index + 1);
        sentenceEl[lineI].style.opacity = 1;
      }, 300);
  }
    if (index % 2 !== 0) {
     showSentence(0)
    } else {
     showSentence(1)
  }
};
//note currentTime - startTime/ (endTime - startTime) *100
var handleColor = function(currentTime){
  console.log(currentTime);
  var wordList = karaokeContent.querySelectorAll(".word");

  if(wordList.length){
    wordList.forEach(function(wordItem){
      //lay startTime, endTime của từng từ trên giao diện
      var startTime = wordItem.dataset.startTime;
      var endTime = wordItem.dataset.endTime;

      if(currentTime > startTime && currentTime < endTime){
        var rate = ((currentTime - startTime)/(endTime - startTime) *100);

        wordItem.children[0].style.width = `${rate}%`;
      }

      if(currentTime > endTime){
        wordItem.children[0].style.width=`100%`;
      }
    })
  }
}
// requestAnimationFrame(handleKaraoke);

audio.addEventListener("play", function () {
  requesId = requestAnimationFrame(handleKaraoke);
});

audio.addEventListener("pause", function () {
  cancelAnimationFrame(requesId);
});
