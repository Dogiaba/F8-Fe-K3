var btnVoice = document.querySelector(".btn");
var actice = document.querySelector(".actice");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "vi-VN";

btnVoice.addEventListener("click", function () {
  recognition.start();
  actice.innerHTML = "Hãy nói nội dung bạn muốn...";

  recognition.onresult = function (event) {
    const voiceResult = event.results[0][0].transcript.toLowerCase();
    console.log(voiceResult);
    voiceResult.innerHTML = `<span>Đã hoàn thành</span>
    <span>Đang tìm kiếm ${voiceResult}</span>`;
    handleVoice(voiceResult);
  };
});


function handleVoice(listen) {
  for (let item of keywords) {
    console.log(listen.toLowerCase(), item.keyword);
    if (listen.toLowerCase().includes(item.keyword)) {
      console.log(item.url);
      window.open(item.url, "_blank");
      break;
    }
  }
  actice.innerHTML = "Không tìm được nội dung yêu cầu";
}


