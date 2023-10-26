const menu = document.querySelector('.header-nav-mobile');
const overlay = document.querySelector('#overlay');
const menuButton = document.querySelector('.nav-bars-btn');
menuButton.addEventListener('click', () => {
  menu.classList.toggle('nav-bar-open');
  overlay.classList.toggle('overlay-open');
  menuButton.classList.toggle('open');
});
// const videoPlayer = document.getElementById('videoPlayer');
// const myVideo = document.getElementById('myVideo');
// const playVideo = document.querySelector('.play-btn-pc');
// const closeBtn = document.querySelector('.close-btn');
// closeBtn.addEventListener('click', () => {
//   videoPlayer.classList.toggle('close-video');
//   myVideo.classList.toggle('close-video');
// });
const videoPlayer_mb = document.getElementById('videoPlayer-mb');
const myVideo_mb = document.getElementById('myVideo-mb');
const videoPlayer_pc = document.getElementById('videoPlayer-pc');
const myVideo_pc = document.getElementById('myVideo-pc');
function stopVideoPC() {
  videoPlayer_pc.style.display = 'none';
}
function playVideoPC(file) {
  myVideo_pc.src = file;
  videoPlayer_pc.style.display = 'block';
}
function stopVideoMb() {
  videoPlayer_mb.style.display = 'none';
}
function playVideoMb(file) {
  myVideo_mb.src = file;
  videoPlayer_mb.style.display = 'block';
}
//slider
$('.owl-carousel').owlCarousel({
  center: true,
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      stagePadding: 285,
      loop: true,
    },
  },
});
