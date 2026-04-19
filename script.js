function openApp(url) {
  window.location.href = url;
}

/* Banner Slider */
const images = [
  "https://via.placeholder.com/350x150/ff7f7f",
  "https://via.placeholder.com/350x150/7fbfff",
  "https://via.placeholder.com/350x150/7fff7f"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slider").src = images[index];
}, 2000);
