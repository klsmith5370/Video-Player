"use strict";

// Play & Pause Functionality
const playNpauseBtn = document.querySelector("#play-pause");
const video = document.querySelector("video");

function playNpauseFn() {
  video.paused ? video.play() : video.pause();
}

// function playNpauseFn() {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.paused();
//   }
// }

function updatePlayNPauseIcon() {
  const icon = playNpauseBtn.querySelector("i");
  icon.textContent = "";

  icon.textContent = video.paused ? "play_arrow" : "paused";
}

video.addEventListener("play", updatePlayNPauseIcon);
video.addEventListener('click', playNpauseFn)
video.addEventListener("pause", updatePlayNPauseIcon);
playNpauseBtn.addEventListener("click", playNpauseFn);


// Rewind & Fast-forward functionality
const rewindBtn = document.querySelector("#rewind");
const fastForwardBtn = document.querySelector("#fast-forward");

function rewindNforwardFn(type) {
  video.currentTime += type === "rewind" ? -10 : 10;
}

rewindBtn.addEventListener("click", () => rewindNforwardFn("rewind"));
fastForwardBtn.addEventListener("click", () => rewindNforwardFn("forward"));