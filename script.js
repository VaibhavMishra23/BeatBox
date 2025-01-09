var clap = new Audio('./clap.mp3');
var hihat = new Audio('./hihat.mp3');
var openhat = new Audio('./openhat.mp3');
var kick = new Audio('./kick.mp3');
var boom = new Audio('./boom.mp3');
var tom = new Audio('./tom.mp3');
var tink = new Audio('./tink.mp3');
var snare = new Audio('./snare.mp3');
var ride = new Audio('./ride.mp3');


function addClass(button){
    button.classList.add("active");
    const sound = button.firstElementChild.textContent;
    switch(sound){
        case 'A':
            clap.play();
            break;
        case 'S':
            hihat.play();
            break;
        case 'D':
            kick.play();
            break;
        case 'F':
            openhat.play();
            break;
        case 'G':
            boom.play();
            break;
        case 'H':
            ride.play();
            break;
        case 'J':
            snare.play();
            break;
        case 'K':
            tom.play();
            break;
        case 'L':
            tink.play();
            break;
    }
    setTimeout(() => {
        button.classList.remove("active");
    }, 150);
}

function handleOnClick(event){
    const button = event.currentTarget;
    addClass(button);
}

document.addEventListener('keydown',(e)=>{
    const button = document.getElementById(e.key.toLocaleUpperCase());
    addClass(button);
});