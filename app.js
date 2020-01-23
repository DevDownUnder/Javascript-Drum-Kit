//Add event listener for when a key is pressed
//window is the event target i.e. the user must press a key whilst on the web page
window.addEventListener('keydown', playSound)

//function (e) - e is shorthand for Keyboard event (key is pressed)
function playSound(e) {
    //set variable for audio
    //document (html / DOM) querySelector (element and class / id)
    //reference the audio element with a data-key = "65"
    //template literal - element [ class ${ key press event. identify which key}
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
//variable.For each key (function parameter => remove transition once ended)
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//See below for explanation of what the arrow function is doing (shorthand)

/*keys.forEach(function (key) {
    key.addEventListener('transitionend', removeTransition)
});
*/
