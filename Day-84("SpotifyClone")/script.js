console.log("Let's write some javascript");
let currentSong = new Audio();
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    //console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1]);
        }
    }
    return songs;
}

const playMusic = async (track,pause = false) => {
    currentSong.src = "/songs/" + track;
    if(!pause){
        await currentSong.play();
        pause.src = pause.svg;
        document.querySelector(".songinfo :nth-child(1)").innerHTML = decodeURI(track).replace(".mp3"," ");
        document.querySelector(".songinfo :nth-child(2)").innerHTML = "Rohan";
    }
}

async function main() {
    //Get the list of songs
    let songs = await getSongs();
    const randomIndex = Math.floor(Math.random() * songs.length);
    playMusic(songs[randomIndex],true);
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" src="music.svg" alt="">
        <div class="songlistinfo">
           <div>${song.replaceAll("%20", " ")}</div>
           <div>Rohan</div>
        </div>
        <div class="playnow">
           <img class="invert" src="play.svg" alt="">
        </div>
        </li>`;
    }
    //Attach an event listener to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach((e) => {
        e.addEventListener("click", () => {
            console.log(e.querySelector(".songlistinfo :nth-child(1)").innerHTML)
            playMusic(e.querySelector(".songlistinfo :nth-child(1)").innerHTML.trim());
        })
    });

    //Attach an event listener to play,next and previous.
    pause.addEventListener('click', async () => {
        try {
            if (currentSong.paused) {
                currentSong.play();
                pause.src = "pause.svg"; // Change the icon to represent play
            } else {
                currentSong.pause();
                pause.src = "play.svg"; // Change the icon to represent play
            }
        } catch (error) {
            console.error("Error during playback:", error.message);
        }
    });
    
    //Listen for timeupdate event
    currentSong.addEventListener('timeupdate', () => {
        console.log("Current Time: ",currentSong.currentTime,"Duration: ",currentSong.duration);
        document.querySelector(".currenttime").innerHTML = `${formatTime(currentSong.currentTime)}`;
        document.querySelector(".songduration").innerHTML = `${formatTime(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime/currentSong.duration)*100+"%";
    })

    //Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click",(e) => {
      console.log("seekbar event listener", e);
    } )
}
main();
