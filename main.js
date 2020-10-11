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