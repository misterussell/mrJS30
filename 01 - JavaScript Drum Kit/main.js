function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  //handle audio
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  //handle transitions
  if (!key) return;
  key.classList.add('playing');
};

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

//remove transitions singularly by targeting the singular keyUp
// window.addEventListener('keyup', (e) => {
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//
//   if (!key) return;
//   key.classList.remove('playing');
// });

//apply transitions as a group to all key elements
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//apply transitions and call sound event
window.addEventListener('keydown', playSound);
