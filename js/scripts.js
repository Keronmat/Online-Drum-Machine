function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.drum-key[data-key="${e.keyCode}"]`);
  const checkbox = document.getElementById("cmn-toggle-1");
  if (checkbox.checked === true) {
    if (!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  } else return;
}

const keys = Array.from(document.querySelectorAll(".drum-key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
//window.addEventListener("keydown", playSound);

//trying clicks

keys.forEach(el => {
  el.addEventListener("click", () => {
    const audioKey = el.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${audioKey}"]`);
    el.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  });
});

//tring clicks
["mousedown", "keydown", "onclick"].forEach(e => {
  window.addEventListener(e, playSound);
});
