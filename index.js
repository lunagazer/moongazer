const video = document.getElementById("openingVideo");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

popup.style.display = "flex";
document.body.classList.add("popup-active");

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  document.body.classList.remove("popup-active");
  video.play();
});

video.addEventListener("ended", () => {
  document.body.classList.add("ready");
  setTimeout(() => {
    document.querySelector(".background").classList.add("unblurred");
  }, 400);
});

video.addEventListener("transitionend", (e) => {
  if (e.propertyName === "opacity") {
    video.remove();
  }
});

video.addEventListener("timeupdate", () => {
  if (video.currentTime >= video.duration - 0.10) {
    video.classList.add("fade-out");
  }
});
