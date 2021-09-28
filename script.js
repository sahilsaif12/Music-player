let main="https://ia801409.us.archive.org/9/items/21_20210821/"
let songs = [
    {
        song: "https://ia801400.us.archive.org/5/items/1_20210821_202108/1.mp3",
        name: " Baarish ban jaana, - Payal Dev, Stebin Ben",
        img: "https://i.postimg.cc/x8mBCH54/1.jpg"
    }
    ,
    {
        song:  main + "2.mp3",
        name: "Barsat ki dhun - Jubin nautiyal",
        img: "https://i.postimg.cc/4NDt0nLW/2.jpg"
    }
    ,
    {
        song:  main + "3.mp3",
        name: "Bedardi se pyar ka - Jubin nautiyal",
        img: "https://i.postimg.cc/wMLzynFH/3.jpg"
    }
    ,
    {
        song: main + "4.mp3",
        name: "Bewafa tera muskurana - Jubin nautiyal",
        img: "https://i.postimg.cc/fbmJ0KMs/4.jpg"
    }
    ,
    {
        song: main + "5.mp3",
        name: "Dil lauta do - Jubin nautiyal",
        img: "https://i.postimg.cc/QM3TFrbN/5.jpg"
    }
    ,
    {
        song: main + "6.mp3",
        name: "Filhall 2 - B Praak",
        img: "https://i.postimg.cc/66j5qSCR/6.jpg"
    }
    ,
    {
        song: main + "7.mp3",
        name: "Is qadar - Darshan Ravel",
        img: "https://i.postimg.cc/0Ns9hqqg/7.jpg"
    }
    ,
    {
        song: main + "8.mp3",
        name: "Jannat ve - Darshan Ravel",
        img: "https://i.postimg.cc/BnMjn1Xp/8.jpg"
    }
    ,
    {
        song: main + "9.mp3",
        name: "Laal chunariya - Akul",
        img: "https://i.postimg.cc/8cr31jhZ/9.jpg"
    }
    ,
    {
        song:main + "10.mp3",
        name: "Lut gaye - Jubin nautiyal",
        img:"https://i.postimg.cc/q7NvBDfB/10.jpg"
    }
    ,
    {
        song:main + "11.mp3",
        name: "Wafa na raas aayi - Jubin nautiyal",
        img: "https://i.postimg.cc/6qnXMH16/11.jpg"
    }
    ,
    {
        song: main + "12.mp3",
        name: "Bewafa tera masoom chehra - Jubin nautiyal",
        img:"https://i.postimg.cc/SNbqnhJn/12.jpg"
    }
    ,
    {
        song: main + "13.mp3",
        name: "Main jis din bhula du - Jubin nautiyal",
        img:"https://i.postimg.cc/PrbHZRw2/13.jpg"
    }
    ,
    {
        song: main + "14.mp3",
        name: "Meri aashiqui - Jubin nautiyal",
        img:"https://i.postimg.cc/0ycqXKZS/14.jpg"
    }
    ,
    {
        song: main + "15.mp3",
        name: "Thora thora pyaar - Stebin Ben",
        img: "https://i.postimg.cc/t4Pr0pJ9/15.jpg"
    }
    ,
    {
        song: main + "16.mp3",
        name: "Raataan lambiyan - Jubin nautiya",
        img: "https://i.postimg.cc/bwBtnTWV/16.jpg"
    }
    ,
    {
        song: main + "17.mp3",
        name: "Kabhi Tumhe - Darshan Raval",
        img:"https://i.postimg.cc/KjGzwkCg/17.jpg"
    }
    ,
    {
        song: main + "18.mp3",
        name: "Tum Ho Toh Lagta Hain - Amaal Mallik, Shaan ",
        img:"https://i.postimg.cc/288ypzxh/18.jpg"
    }
    ,
    {
        song: main + "19.mp3",
        name: "Tum bewafa ho - Payal Dev, Stebin Ben",
        img:"https://i.postimg.cc/RCGCLkzF/19.jpg"
    }
    ,
    {
        song: main + "20.mp3",
        name: "Mohabbat Phir Ho Jayegi - Yaseer Desai",
        img: "https://i.postimg.cc/ZqFzKNbR/20.jpg"
    }
    ,
    {
        song: main + "21.mp3",
        name: "Aaj Bhi - Vishal Mishra",
        img:"https://i.postimg.cc/0yw8t0rB/21.jpg"
    }
    ,
    {
        song: main + "22.mp3",
        name: "Mann Mera - Gajendra Verma",
        img: "https://i.postimg.cc/J498BHKc/22.jpg"
    }
    ,
    {
        song: main + "23.mp3",
        name: "Aapke Pyaar Mein X Kitna Bechain - JalRaj",
        img:"https://i.postimg.cc/635xNr5w/23.jpg"
    }
    ,
    {
        song: main + "24.mp3",
        name: "           dil ka sauda hua  -  Jalraj",
        img: "https://i.postimg.cc/nM83DdTt/24.jpg"
    }
    ,
    {
        song: main + "25.mp3",
        name: "Standing by you- Nish",
        img: "https://i.postimg.cc/Y0vcvtWs/25.jpg"
    }
    ,
    {
        song:"https://ia601402.us.archive.org/18/items/music_20210824/26.mp3",
        name: "Khusi jab bhi teri - jubin nautiyal",
        img: "https://i.postimg.cc/yYZMPZC8/26.jpg"
    }
]

// let index=16
let index = Math.floor(Math.random() * songs.length + 1)
let updateTimer
let body = document.querySelector('body')
let controlBtn = document.querySelectorAll(' .prev-btn, .pause-btn, .next-btn')
let pauseBtn = document.getElementsByClassName('pause-btn')[0]
let nextBtn = document.getElementsByClassName('next-btn')[0]
let prevBtn = document.getElementsByClassName('prev-btn')[0]
let imgRotate = document.getElementById('img')
// let audio = document.createElement("audio");
let textMove = document.querySelector('h2')
let img = document.getElementById('img')
let songMeter = document.getElementsByClassName('song-meter')[0]
let fullSong = document.getElementsByClassName('full-song')[0]
let progress = document.getElementsByClassName('progress')[0]
let shuffle = document.getElementsByClassName('shuffle')[0]
let queue = document.getElementsByClassName('queue')[0]
let arrow = document.getElementById('arrow')
let mainClick = document.querySelector('main')
let fav = document.getElementsByClassName('fav')[0]
let favoriteList = document.getElementsByClassName('favorite-list')[0]
let downArrow = document.getElementsByClassName('downArrow')[0]
let favSongsListShow = document.getElementsByClassName('favSongsListShow')[0]
var audio=new Audio(songs[index].song)
//! ---- load the song ---- 
let playSong = (s) => {
    clearInterval(updateTimer)
    audio.src = songs[s].song
    textMove.innerHTML = songs[s].name
    img.src = songs[s].img
    body.style.backgroundImage = `url(${songs[s].img})`
    updateTimer = setInterval(seekUpdate, 1000);
    audio.addEventListener("ended", nextSong)
    imgRotate.style.animation = null
    textMove.style.animation = null
    setTimeout(() => {
        pausePlay()
    }, 1500);
}
//! ---- initial song ----
playSong(index)

//! ---- pause and play button working ---- 
function pausePlay() {
    if (pauseBtn.classList.contains('hide')) {
        audio.play()
        imgRotate.style.animation = " imgRotate 4s infinite linear"
        textMove.style.animation = "textMove 9s infinite linear"
    }
    else {
        audio.pause()
        imgRotate.style.animationPlayState = "paused"
        textMove.style.animationPlayState = "paused"
        // imgRotate.style.animation=" originPlace 1s  linear"
    }
}

//! ---- when one songs ends , next songs will start ---- 
function nextSong() {
    if (shuffleSong() == 0) {
        index++
        if (index > songs.length - 1) {
            index = 0
        }
    }
    else {
        index = shuffleSong()
    }
    playSong(index)
}

//! ---- randomize song ---- 
function shuffleSong() {
    if (shuffle.classList.contains('shuffle-checked')) {
        let randomSong = Math.floor(Math.random() * songs.length + 1)
        return randomSong
    }
    else {
        return 0
    }
}

//! ---- pause button toggle ----
pauseBtn.addEventListener('click', () => {
    pauseBtn.classList.toggle('hide')
    pausePlay()
})

//! ---- control buttons clicking animation ---- 
for (let i = 0; i < controlBtn.length; i++) {
    controlBtn[i].addEventListener('click', () => {
        controlBtn[i].style.animation = " controlBtn .5s linear"
        setTimeout(() => {
            controlBtn[i].style.animation = null
        }, 500);
    })
}

//! ---- prev << button functionality ---- 
prevBtn.addEventListener('click', () => {
    if (shuffleSong() == 0) {
        index--
        if (index < 0) {
            index = songs.length - 1
        }
    }
    else {
        index = shuffleSong()
    }
    playSong(index)
    favOrNotCheck()
    queue.classList.add('PrevOrNext')
    queueImgForPrevNext()
})

//! ---- next >> button functionality ---- 
nextBtn.addEventListener('click', () => {
    if (shuffleSong() == 0) {
        index++
        if (index > songs.length - 1) {
            index = 0
        }
    }
    else {
        index = shuffleSong()
    }
    playSong(index)
    favOrNotCheck()
    queue.classList.add('PrevOrNext')
    queueImgForPrevNext()
})

//! ---- shuffle button toggle---- 
shuffle.addEventListener('click', () => {
    shuffle.classList.toggle('shuffle-checked')
    if (shuffle.classList.contains('shuffle-checked')) {
        queue.style.display = "none"
    }
    else {
        queue.style.display = "flex"
    }

})

//! ----clicking on song progress meter for quick audio jump ---- 
progress.addEventListener('input', () => {
    let clickPoint = audio.duration * (progress.value / 100)
    audio.currentTime = clickPoint
})

//! ---- song progress length and full duration and current duration---- 
function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(audio.duration)) {
        seekPosition = audio.currentTime * (100 / audio.duration);

        progress.value = seekPosition;

        let currentMinutes = Math.floor(audio.currentTime / 60);
        let currentSeconds = Math.floor(audio.currentTime % 60);
        let durationMinutes = Math.floor(audio.duration / 60);
        let durationSeconds = Math.floor(audio.duration % 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }

        songMeter.textContent = currentMinutes + ":" + currentSeconds;
        fullSong.textContent = durationMinutes + ":" + durationSeconds;
    }
}

//! ---- song queue----
let images = document.getElementsByClassName('images')[0]
arrow.addEventListener('click', () => {
    queue.classList.toggle('wide')
    queueImgFunction()
})

//! ----functionality and layout After clicking song queue side button and playing any song inside the queue----
function queueImgFunction() {
    if (queue.classList.contains('wide')) {
        arrow.innerHTML = "&rsaquo;<br><p>Queue</p>"
        let queueArray = []
        var p = index + 1
        for (let i = 0; i < songs.length; i++) {
            if (p == songs.length) {
                p = 0
            }
            var queueImgCreate = document.createElement('img');
            queueImgCreate.src = `${songs[p].img}`
            queueImgCreate.setAttribute('class', 'queueImg');
            images.appendChild(queueImgCreate);
            queueArray.push(p)
            p++
        }
        let queueImg = document.querySelectorAll('.queueImg')
        for (let i = 0; i < queueImg.length; i++) {
            queueImg[i].addEventListener('click', () => {
                playSong(queueArray[i])
                index = queueArray[i]
                queue.classList.add('PrevOrNext')
                queueImgForPrevNext()
                favOrNotCheck()
            })
        }
    }
    else {
        arrow.innerHTML = "&lsaquo;"
        images.innerHTML = ""
    }
}

//! ---- functionality on the expanded song queue after clicking next , prev , any song on the queue list----
function queueImgForPrevNext() {
    if (queue.classList.contains('PrevOrNext')) {
        if (queue.classList.contains('wide')) {
            images.innerHTML = ""
            queueImgFunction()
        }
        else {
            queue.classList.remove('PrevOrNext')
        }
    }
}

//! ---- conditions on clicking outside and queue song box or favorite list box will close----
mainClick.addEventListener('click', () => {
    if (window.outerWidth <= 650) {
        queue.classList.remove('wide')
        arrow.innerHTML = "&lsaquo;"
        images.innerHTML = ""
    }
    if (window.outerWidth > 650) {
        favoriteList.classList.remove('expand-favorite-list')
        downArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none"
        stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>List`
        favSongsListShow.innerHTML = ""
    }
})

//! ---- clicking on fav (heart) button and storing that song's index on an array----
var favSongs = []

fav.addEventListener('click', () => {
    fav.classList.toggle('fill')
    if (fav.classList.contains('fill')) {
        favSongs.push(index)
    }
    else {
        if (favSongs.includes(index)) {
            favSongs.splice(favSongs.indexOf(index), 1)
        }
    }
})

//! ---- clicking on the fav list button at bottom ----
downArrow.addEventListener('click', () => {
    favoriteList.classList.toggle('expand-favorite-list')
    if (favoriteList.classList.contains('expand-favorite-list')) {
        downArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="6 9 12 15 18 9" />
    </svg>`
        for (let i = 0; i < favSongs.length; i++) {
            var favSongDiv = document.createElement('div');
            var favSongImg = document.createElement('img');
            var favSongName = document.createElement('p');
            favSongDiv.setAttribute('class', 'favSongDiv');
            favSongsListShow.appendChild(favSongDiv);
            favSongDiv.appendChild(favSongImg);
            favSongDiv.appendChild(favSongName);
            favSongImg.src = `${songs[favSongs[i]].img}`
            favSongName.innerHTML = `${songs[favSongs[i]].name}`
        }
        let favSongDivClick = document.querySelectorAll('.favSongDiv')
        for (let i = 0; i < favSongDivClick.length; i++) {
            favSongDivClick[i].addEventListener('click', () => {
                playSong(favSongs[i])
                pauseBtn.classList.add('hide')
                index = favSongs[i]
                queue.classList.add('PrevOrNext')
                queueImgForPrevNext()
            })
        }
        if (favSongs.length == 0) {
            favSongsListShow.innerHTML = "you don't have any song on favorite list"
        }
    }
    else {
        favSongsListShow.innerHTML = ""
        downArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none"
        stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>List`
    }
})

//! ---- checking a particular song is in fav list or not. so that the heart will fill with red or not----
function favOrNotCheck() {
    if (fav.classList.contains('fill')) {
        if (favSongs.includes(index)) {

        }
        else {
            fav.classList.remove('fill')
        }
    }
    else {
        if (favSongs.includes(index)) {
            fav.classList.add('fill')
            fav.style.animation = null
        }
        else {
        }
    }
}