console.log("Let's write some javascript");
let currentSong = new Audio();
let songs;
let currentFolder;
function formatTime(seconds) {
    if(isNaN((seconds) || seconds < 0)){
        return " ";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
    currentFolder = folder;
    let a = await fetch(`http://127.0.0.1:5500/${currentFolder}`);
    let response = await a.text();
    //console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${currentFolder}/`)[1]);
        }
    }
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";
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
            playMusic(e.querySelector(".songlistinfo :nth-child(1)").innerHTML.trim());
        })
    });
}

const playMusic = async (track, pause = false) => {
    currentSong.src = `/${currentFolder}/` + track;
    if (!pause) {
        await currentSong.play();
        pause.src = pause.svg;
        document.querySelector(".songinfo :nth-child(1)").innerHTML = decodeURI(track).replace(".mp3", " ");
        document.querySelector(".songinfo :nth-child(2)").innerHTML = "Rohan";
    }
}

async function displayAlbums(){
    let a = await fetch(`http://127.0.0.1:5500/songs`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    console.log(div);
}

async function main() {
    //Get the list of songs
    await getSongs("songs/loved");
    const randomIndex = Math.floor(Math.random() * songs.length);
    playMusic(songs[randomIndex], true);

    //Display all the albums on the page
    displayAlbums();
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
        // console.log("Current Time: ", currentSong.currentTime, "Duration: ", currentSong.duration);
        document.querySelector(".currenttime").innerHTML = `${formatTime(currentSong.currentTime)}`;
        document.querySelector(".songduration").innerHTML = `${formatTime(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    //Add an event listener to the seekbar
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        console.log("click fired on seekbar");
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration) * percent / 100;
    })
   
    //Adding event listeer to the next and previous
    next.addEventListener("click",() => {
       console.log("Next clicked");
       let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
       if ((index+1) < songs.length){
        playMusic(songs[index+1]);
       }   
       else{
        playMusic(songs[0]);
       }
    });
    previous.addEventListener("click",() => {
        console.log("Previous clicked");
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if ((index-1) >= 0 ){
         playMusic(songs[index-1]);
        }
        else{
            playMusic(songs[songs.length-1]);
        }
    } );

    //Adding event listner for hamburger
    document.querySelector(".hamburger").addEventListener("click",() => {
         document.querySelector(".left").style.left = "0";
    })
    document.querySelector(".close").addEventListener("click",() => {
         document.querySelector(".left").style.left = "-110%";
    })

    //Adding event listener for volume range
    volumerange.addEventListener("change",(e) => {
      currentSong.volume = parseInt(e.target.value)/100;
    })

    //Loding playlist when card(album) is clicked
    Array.from(document.getElementsByClassName("card")).forEach(card=>{
        console.log(card);
        card.addEventListener("click", async (item)=>{
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
        })
    })
}
main();