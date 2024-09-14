// code to play sound when button is clicked!
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    playSounds(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// code to play sound when key is pressed
document.addEventListener("keydown", function (event) {
  playSounds(event.key);
  buttonAnimation(event.key);
});

// code to decide which sound to play if/else ladder
function playSounds(char) {
  if (char === "w") {
    new Audio("/sounds/crash.mp3").play();
  } else if (char === "a") {
    new Audio("/sounds/kick-bass.mp3").play();
  } else if (char === "s") {
    new Audio("/sounds/snare.mp3").play();
  } else if (char === "d") {
    new Audio("/sounds/tom-1.mp3").play();
  } else if (char === "j") {
    new Audio("/sounds/tom-2.mp3").play();
  } else if (char === "k") {
    new Audio("/sounds/tom-3.mp3").play();
  } else if (char === "l") {
    new Audio("/sounds/tom-4.mp3").play();
  }
}

// effect to be added when key is pressed or clicked
function buttonAnimation(char) {
  let activeBtn = document.querySelector("." + char);
  if (activeBtn) {
    activeBtn.classList.add("pressed");
  }

  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 100);
}
