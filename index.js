const video = document.getElementById('openingVideo');
video.addEventListener('ended', () => {
  video.classList.add('fade-out');
  document.body.classList.add('ready');
});
