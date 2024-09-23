let othr = document.querySelector(".oth");
let scnav = document.querySelector(".second-nav");
othr.onclick = function () {
  scnav.classList.toggle("hide");
};
let sec = document.querySelector(".seconds");
let min = document.querySelector(".minutes");
let hour = document.querySelector(".hours");
let day = document.querySelector(".days");
setInterval(function () {
  sec.innerHTML = sec.innerHTML - 1;
  if (sec.innerHTML == -1) {
    sec.innerHTML = 59;
    min.innerHTML = min.innerHTML - 1;
    if (min.innerHTML == -1) {
      min.innerHTML = 59;
      hour.innerHTML = hour.innerHTML - 1;
      if (hour.innerHTML == -1) {
        hour.innerHTML = 23;
        day.innerHTML = day.innerHTML - 1;
      }
    }
  }
}, 10);
