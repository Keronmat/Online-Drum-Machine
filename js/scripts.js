const checkbox = document.getElementById("cmn-toggle-1");

checkbox.addEventListener("change", function() {
  const mainDrum = document.querySelector("#main-drum");
  const onOffHeader = document.querySelector(".onOffHeader");

  if (this.checked) {
    mainDrum.classList.remove("main-drumOff");
    mainDrum.classList.add("main-drumOn");
    onOffHeader.innerHTML = "On";
  } else {
    mainDrum.classList.remove("main-drumOn");
    mainDrum.classList.add("main-drumOff");
    onOffHeader.innerHTML = "Off";
  }
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.drum-key[data-key="${e.keyCode}"]`);

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

//listening for clicks
keys.forEach(el => {
  el.addEventListener("click", () => {
    const audioKey = el.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${audioKey}"]`);
    if (checkbox.checked === true) {
      el.classList.add("playing");
      audio.currentTime = 0;
      audio.play();
    } else return alert("Please click the On button!"); // ensure the button is on
    turn;
  });
});

//listening for keydown
["mousedown", "keydown", "onclick"].forEach(e => {
  window.addEventListener(e, playSound);
});
