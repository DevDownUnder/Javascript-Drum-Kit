//Add event listener for when a key is pressed
//window is the event target i.e. the user must press a key whilst on the page
//function (e) - e is shorthand for Keyboard event (key is pressed)
window.addEventListener('keydown', function (e) {
    //keycode instead of actual key 
    console.log(e.keyCode);
});


