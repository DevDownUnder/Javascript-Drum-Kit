//Add event listener for when a key is pressed
//window is the event target i.e. the user must press a key whilst on the page
//function (e) - e is shorthand for Keyboard event (key is pressed)
window.addEventListener('keydown', function (e) {
    //set variable for audio
    //document (html / DOM) querySelector (element and class / id)
    //reference the audio element with a data-key = "65"
    const audio = document.querySelector(`audio[data-key=${e.keyCode}]`)
});


