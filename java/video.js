<link rel="stylesheet" href="C:\Users\pc\OneDrive\Desktop\html_learn\css\style.css"></link>
var video = document.getElementById("myVideo");


// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
} else {
    video.pause();
    btn.innerHTML = "Play";
}
var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play();
} 

function pauseAudio() { 
    x.pause(); 
} 
}