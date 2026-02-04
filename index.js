const video = document.getElementById('openingVideo');
video.addEventListener('ended', () => {
  video.classList.add('fade-out');
  document.body.classList.add('ready');
});

video.addEventListener('transitionend', (e) => {
  if (e.propertyName === 'opacity') {
    video.remove();
  }
});
