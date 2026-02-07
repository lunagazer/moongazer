const video = document.getElementById("openingVideo");
const popup = document.getElementById("popup");
const enterBtn = document.getElementById("enter");

enterBtn.addEventListener("click", () => {
  popup.style.display = "none";
  video.play();
});

video.addEventListener("ended", () => {
  document.body.classList.add("ready");
  setTimeout(() => {
    document.querySelector(".background").classList.add("blur");
  }, 400);
});

video.addEventListener("transitionend", (e) => {
  if (e.propertyName === "opacity") {
    video.remove();
  }
});

let faded = false;
video.addEventListener("timeupdate", () => {
  if (!faded && video.currentTime >= video.duration - 0.1) {
    faded = true;
    video.classList.add("fade-out");
  }
});
