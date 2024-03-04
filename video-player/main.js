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

// Mute & unmute functionality
const volumeBtn = document.querySelector("#volume");

function muteNunmuteFn() {
  video.muted = video.muted ? false : true;
}

function updateVolumeIcon() {
  const icon = volumeBtn.querySelector("i");
  icon.textContent = "";
  icon.textContent = video.muted ? "volume_off" : "volume_up";
}

video.addEventListener("volumechange", updateVolumeIcon);
volumeBtn.addEventListener("click", muteNunmuteFn);

// Updating Progress Bar 
const progressIndicator = document.querySelector("#progress-indicator");

function updateProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;

  progressIndicator.style.width = `${progressPercentage}%`;
}

video.addEventListener("timeupdate", updateProgress);

// Seeking functionality
const progessBar = document.querySelector("#progress-bar");

function seekingFn(e) {
  const updatedTime = (e.offsetX / progessBar.offsetWidth) * video.duration;

  video.currentTime = updatedTime;
}

let mouseIsDown = false;

progessBar.addEventListener("mousedown", () => (mouseIsDown = true));
progessBar.addEventListener("mouseup", () => (mouseIsDown = false));
progessBar.addEventListener("click", seekingFn);
progessBar.addEventListener("mousemove", (e) => mouseIsDown && seekingFn);