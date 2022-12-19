document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase());
});

document.querySelector(".composer button").addEventListener('click', () => {
    let song = document.querySelector("#input").value;

    if(song !== "") {
        let ArraySong = song.split("");
        playComposition(ArraySong);
    }
});

function playSound(sound){  
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(keyElement){
        keyElement.classList.add("active");

        setTimeout(() => {
            keyElement.classList.remove("active");
        },300);
    }

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();

    }
}

function playComposition(ArraySong) {
    let wait = 0;

    for(let songItem of ArraySong){
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250; 
    }
}