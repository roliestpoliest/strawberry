'use strict';

// selectors
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const inputTitle = document.querySelector(".input-title");
const inputArtist = document.querySelector(".input-artist");
const inputAlbum = document.querySelector(".input-album");
const inputLyrics = document.querySelector(".input-lyrics");
const submitButton = document.querySelector(".submit-button");

var songCount = 1;
inputTitle.focus();

// event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
submitButton.addEventListener("click", addSong);
inputTitle.addEventListener("keypress", submitWithEnter);
inputArtist.addEventListener("keypress", submitWithEnter);
inputAlbum.addEventListener("keypress", submitWithEnter);
inputLyrics.addEventListener("keypress", submitWithEnter);

// functions
function setGradient(event){
    console.log("gradient selector function");
    const content = document.getElementById("use-gradient");
    // content.style.backgroundColor = "#a0c4ff"; 
    content.style.background = "linear-gradient(180deg, " + color1.value + ", " + color2.value + ")";
    document.body.style.backgroundColor = color2.value;
}

function submitWithEnter(event){
    if (event.key == "Enter"){
        event.preventDefault();
        addSong(event);
    }
}

function addSong(event){
    event.preventDefault();
    console.log(songCount + '. hello');
    console.log(inputTitle.value + ", " + inputArtist.value + ", " + inputAlbum.value + ", " + inputLyrics.value);

    if(!inputTitle.value){
        document.getElementsByName("input-title")[0].placeholder = "input cannot be empty";
        inputTitle.focus();
        return;
    }
    document.getElementsByName("input-title")[0].placeholder = "title";

    const playListContainer = document.getElementById("playlist-container");
    const newParentDiv = document.createElement("div");
    newParentDiv.classList.add("parent-container");
    playListContainer.appendChild(newParentDiv);

    const newSection1 = document.createElement("div");
    newSection1.classList.add("container-section1");
    newParentDiv.appendChild(newSection1);
    
    const newSongImage = document.createElement("img");
    newSongImage.src = "/images/music-placeholder.png";
    newSongImage.alt = "image placeholder";
    newSongImage.classList.add("image-placeholder");
    newSection1.appendChild(newSongImage);
    
    const newSongInfoDiv = document.createElement("div");
    const newSongTitle = document.createElement("div");
    const newArtistTitle = document.createElement("div");
    const newAlbumTitle = document.createElement("div");

    newSongInfoDiv.classList.add("song-info");
    newSection1.appendChild(newSongInfoDiv);
    
    newSongTitle.classList.add("song-title");
    newArtistTitle.classList.add("song-artist");
    newAlbumTitle.classList.add("song-album");

    newSongTitle.innerText = inputTitle.value;
    newArtistTitle.innerText = inputArtist.value;
    newAlbumTitle.innerText = inputAlbum.value;

    newSongInfoDiv.appendChild(newSongTitle);
    newSongInfoDiv.appendChild(newArtistTitle);
    newSongInfoDiv.appendChild(newAlbumTitle);

    const newSection2 = document.createElement("div");
    newSection2.classList.add("container-section2");
    newParentDiv.appendChild(newSection2);

    const newLyricsText = document.createElement("p");
    newLyricsText.classList.add("lyrics-text");
    newLyricsText.innerText = inputLyrics.value;
    newSection2.appendChild(newLyricsText);

    songCount += 1;
    inputTitle.value = "";
    inputArtist.value = "";
    inputAlbum.value = "";
    inputLyrics.value = "";
    inputTitle.focus();
}