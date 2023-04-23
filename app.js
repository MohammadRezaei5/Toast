const showMsgBtn = document.querySelector("button");

function toast(sentence, duration) {
  const message = document.querySelector(".toast");
  message.classList.add("toast--show");
  message.innerText = sentence;
  setTimeout(() => {
    message.classList.remove("toast--show");
  }, duration);
}

showMsgBtn.addEventListener("click", () => {
  toast("سلام محمد امروز 30 دقیقه را در اینستاگرام سپری کردی", 2000);
});
