// type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
// nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"

document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup-form").style.display = "flex";
  })

  document.querySelector(".closetab").addEventListener("click", function(){
    document.querySelector(".popup-form").style.display = "none";
  })

console.log("welcome to spotify")

// initialise the variable

let songIndex = 0;
let audioElement = new Audio('1.wav');
let playbtn = document.getElementById('playbtn');
let progressbar = document.getElementById('progressbar');

let songs = [
  {songName: "reckless", filePath: "1.wav", coverPath: "images/reckless.jpg"},
  {songName: "reckless", filePath: "2.wav", coverPath: "images/reckless.jpg"},
  {songName: "reckless", filePath: "3.wav", coverPath: "images/reckless.jpg"},
  {songName: "reckless", filePath: "4.wav", coverPath: "images/reckless.jpg"},
  {songName: "reckless", filePath: "5.wav", coverPath: "images/reckless.jpg"},
  {songName: "reckless", filePath: "6.wav", coverPath: "images/reckless.jpg"},
  {songName: "reckless", filePath: "7.wav", coverPath: "images/reckless.jpg"},
  {songName: "reckless", filePath: "8.wav", coverPath: "images/reckless.jpg"},
  {songName: "reckless", filePath: "9.wav", coverPath: "images/reckless.jpg"},
]

// play pause event

playbtn.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    playbtn.classList.remove('fa-circle-play');
    playbtn.classList.add('fa-circle-pause');
  }
  else{
    audioElement.pause();
    playbtn.classList.remove('fa-circle-pause');
    playbtn.classList.add('fa-circle-play');
  }
})

audioElement.addEventListener('timeupdate', ()=>{
  // console.log('timeupdate');
  // update progressbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progress); 
  progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>{
  audioElement.currentTime = progressbar.value*audioElement.duration/100;
})

// song plays on clicking the heading and banner of the song

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
  Element.addEventListener('click', (e)=>{
    index = parseInt(e.target.id);
    console.log(e.target);
    audioElement.src = `audio files/${index+1}.wav`;
    audioElement.currentTime = 0;
    audioElement.play();
    playbtn.classList.remove('fa-circle-play');
    playbtn.classList.add('fa-circle-pause');
  })
})