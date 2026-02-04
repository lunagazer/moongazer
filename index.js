const video = document.getElementById('openingVideo');
video.addEventListener('ended', () => {
  document.body.classList.add('ready');
  setTimeout(() => {
    document.querySelector('.background').classList.add('unblurred');
  }, 400);
});

video.addEventListener('transitionend', (e) => {
  if (e.propertyName === 'opacity') {
    video.remove();
  }
});

video.addEventListener('timeupdate', () => {
  if (video.currentTime >= video.duration - 0.10) {
    video.classList.add('fade-out');
  }
});
