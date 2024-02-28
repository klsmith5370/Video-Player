"use strict";

const playNpauseBtn = document.querySelector("#play-pause");
const video = document.querySelector("video");

// function playNpauseFn() {
//   video.paused ? video.play() : video.pause();
// }

function playNpauseFn() {
  if (video.paused) {
    video.play();
  } else {
    video.paused();
  }
}

function updatePlayNPauseIcon() {
  const icon = playNpauseBtn.querySelector("i");
  icon.textContent = "";

  icon.textContent = video.paused ? "play_arrow" : "paused";
}

video.addEventListener("play", updatePlayNPauseIcon);
video.addEventListener('click', playNpauseFn)
video.addEventListener("pause", updatePlayNPauseIcon);
playNpauseBtn.addEventListener("click", playNpauseFn);