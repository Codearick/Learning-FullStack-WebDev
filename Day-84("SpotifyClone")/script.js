console.log("Let's write some javascript");
let currentSong = new Audio();

async function getSongs(){
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    //console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1]);
        }
    }
    return songs;
}

const playMusic = (track) => {
  currentSong.src = "/songs/" + track;
  currentSong.play();
  pause.src = "pause.svg"
}
 
async function main(){
    //Get the list of songs
    let songs = await getSongs();
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (const song of songs) { 
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" src="music.svg" alt="">
        <div class="songlistinfo">
           <div>${song.replaceAll("%20"," ")}</div>
           <div>Rohan</div>
        </div>
        <div class="playnow">
           <img class="invert" src="play.svg" alt="">
        </div>
        </li>`;
    }
    //Attach an event listener to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach((e) => {
        e.addEventListener("click",(element) => {
          console.log(e.querySelector(".songlistinfo :nth-child(1)").innerHTML)
          let track = playMusic(e.querySelector(".songlistinfo :nth-child(1)").innerHTML.trim());
        })
    });

    //Attach an event listener to play,next and previous.
    pause.addEventListener("click",() => {
        if(currentSong.paused){
            currentSong.play();
            pause.src = "play.svg"
        } else{
            currentSong.pause();
            pause.src = "pause.svg"
        }
    })
}
main();