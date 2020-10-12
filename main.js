// Sound for the white keys
document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA"){
        let audio = new Audio('music/A.mp3');
        audio.play();}
    else if (event.code === "KeyS"){
        let audio = new Audio('music/S.mp3');
        audio.play();}
    else if (event.code === "KeyD"){
        let audio = new Audio('music/D.mp3');
        audio.play();}
    else if (event.code === "KeyF"){
        let audio = new Audio('music/F.mp3');
        audio.play();}
    else if (event.code === "KeyG"){
        let audio = new Audio('music/G.mp3');
        audio.play();}
    else if (event.code === "KeyH"){
        let audio = new Audio('music/H.mp3');
        audio.play();}
    else if (event.code === "KeyJ"){
        let audio = new Audio('music/J.mp3');
        audio.play();}
    else
        console.log("Not hitting the piano keystrokes")
});
// Sound for the black keys
document.addEventListener("keydown", function(event){
    if (event.code === "KeyW"){
        let audio = new Audio('music/W.mp3');
        audio.play();
    } else if (event.code === "KeyE"){
        let audio = new Audio('music/E.mp3');
        audio.play();
    } else if (event.code === "KeyT"){
        let audio = new Audio('music/T.mp3');
        audio.play();
    } else if (event.code === "KeyY"){
        let audio = new Audio('music/Y.mp3');
        audio.play();
    } else if (event.code === "KeyU") {
        let audio = new Audio('music/U.mp3');
        audio.play();
    } else
        console.log("Not hitting the piano keystrokes")
});

document.getElementById("a").addEventListener("click", function (){
    let audio = new Audio('music/A.mp3');
    audio.play();
});
document.getElementById("s").addEventListener("click", function (){
    let audio = new Audio('music/S.mp3');
    audio.play();
});
document.getElementById("d").addEventListener("click", function (){
    let audio = new Audio('music/D.mp3');
    audio.play();
});
document.getElementById("f").addEventListener("click", function (){
    let audio = new Audio('music/F.mp3');
    audio.play();
});
document.getElementById("g").addEventListener("click", function (){
    let audio = new Audio('music/G.mp3');
    audio.play();
});
document.getElementById("h").addEventListener("click", function (){
    let audio = new Audio('music/H.mp3');
    audio.play();
});
document.getElementById("j").addEventListener("click", function (){
    let audio = new Audio('music/J.mp3');
    audio.play();
});
document.getElementById("w").addEventListener("click", function (){
    let audio = new Audio('music/W.mp3');
    audio.play();
});
document.getElementById("e").addEventListener("click", function (){
    let audio = new Audio('music/E.mp3');
    audio.play();
});
document.getElementById("t").addEventListener("click", function (){
    let audio = new Audio('music/T.mp3');
    audio.play();
});
document.getElementById("y").addEventListener("click", function (){
    let audio = new Audio('music/Y.mp3');
    audio.play();
});
document.getElementById("u").addEventListener("click", function (){
    let audio = new Audio('music/U.mp3');
    audio.play();
});