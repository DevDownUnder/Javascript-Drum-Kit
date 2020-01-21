//Add event listener for when a key is pressed
//window is the event target i.e. the user must press a key whilst on the page
//function (e) - e is shorthand for Keyboard event (key is pressed)
window.addEventListener('keydown', playSound) 


function playSound (e) {
    //set variable for audio
    //document (html / DOM) querySelector (element and class / id)
    //reference the audio element with a data-key = "65"
    //the back ticks ` ` and expression in the ${ } gets passed into the function (e) - see template literals MDN
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //key variable added as per above
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //If an unassigned key is pressed then stop the function from running all together
    if (!audio) return;

    //Rewind to the start (allows the key to be pressed repeatedly)
    audio.currentTime = 0;

    //Play audio
    audio.play()

    //Animate playing key
    //we have added the css class of 'playing' to the key when pressed
    key.classList.add('playing');

};

//Add function to remove border highlight animation once audio play is finished
function removeTransition(e) {
    this.classList.remove('playing');
};

//Create variable to select ALL selectors with 'key' (to target all the keys)
const keys = document.querySelectorAll('.key');
//Add event listener that listens out for the transition to end for EACH key
//keys (all keys) .forEach (each individual key)
//(key =>) = key variable (key pressed) => (function) remove transition 
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



