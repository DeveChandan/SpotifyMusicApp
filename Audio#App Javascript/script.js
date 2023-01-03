console.log('Hey I am Music App')
let songIndex = 0
let AudioElement = new Audio('song/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let Myprogress = document.getElementById('myprogress')
let gif = document.getElementById('gif')
let dj=document.getElementById('dj')
let somgitem = Array.from(document.getElementsByClassName('songitem'))
let songs = [
    { songName: 'anjaana anjaani(tujhe bhula diya) ', filePath: 'song/1.mp2', CoverPath: 'cover/1.png' },
    { songName: 'Badmaash Company-Chaska ', filePath: 'song/2.mp2', CoverPath: 'cover/1.png' },
    { songName: 'Band Baaja Baaraat - Dum Dum ', filePath: 'song/3.mp2', CoverPath: 'cover/1.png' },
    { songName: 'Slama isqe ', filePath: 'song/4.mp2', CoverPath: 'cover/1.png' },
    { songName: 'Bang Bang - Uff [DJMaza.Info] ', filePath: 'song/5.mp2', CoverPath: 'cover/1.png' },
    { songName: 'Slama isqe ', filePath: 'song/6.mp2', CoverPath: 'cover/1.png' },
    { songName: 'Chennai Express - Titli ', filePath: 'song/7.mp2', CoverPath: 'cover/1.png' },
    { songName: 'Slama isqe ', filePath: 'song/8.mp2', CoverPath: 'cover/1.png' },
    { songName: 'Sjh;hi hiut66hgv iih ', filePath: 'song/9.mp2', CoverPath: 'cover/1.png' },
    { songName: 'Slama isqe ', filePath: 'song/10.mp2', CoverPath: 'cover/1.png' },
    { songName: 'Slama isqe ', filePath: 'song/11.mp2', CoverPath: 'cover/1.png' },


]
somgitem.forEach((element, i) => {
   
    element.getElementsByTagName('img')[0].src = songs[i].CoverPath
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName
});

////play section
masterPlay.addEventListener('click', () => {
    if (AudioElement.paused || AudioElement.currentTime <= 0) {
        AudioElement.play()
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
        gif.style.opacity = 1
    }
    else {
        AudioElement.pause()
        masterPlay.classList.add('fa-play')
        masterPlay.classList.remove('fa-pause')
        gif.style.opacity = 0
    }
})
///progrssbar
AudioElement.addEventListener('timeupdate', () => {
    document.getElementById("demo").innerHTML = AudioElement.currentTime;
    let curmins=Math.floor(AudioElement.currentTime/60);
    let cursec=Math.floor(AudioElement.currentTime-curmins*60);
    let durmis=Math.floor(AudioElement.duration/60);
    let dursec=Math.floor(AudioElement.duration-durmis*60);
    demo.innerHTML=curmins+':'+cursec;
    progress = parseInt((AudioElement.currentTime / AudioElement.duration) * 100)
    Myprogress.value = progress;
    
})
Myprogress.addEventListener('change', () => {
    AudioElement.currentTime = Myprogress.value * AudioElement.duration / 100
    
})
const makellplay = () => {
    Array.from(document.getElementsByClassName('list')).forEach((element) => {
        element.classList.remove('fa-pause')
        element.classList.add('fa-play')
        
    })
}
Array.from(document.getElementsByClassName('list')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makellplay()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')
        AudioElement.src = `song/${songIndex + 1}.mp3`
        //AudioElement.src = 'song/3.mp3'
    dj.innerText=songs[songIndex].songName

        if (AudioElement.paused || AudioElement.currentTime <= 0) {
            AudioElement.play()
            masterPlay.classList.remove('fa-play')
            masterPlay.classList.add('fa-pause')
            gif.style.opacity = 1
        }
        else {
            AudioElement.pause()
            masterPlay.classList.add('fa-play')
            masterPlay.classList.remove('fa-pause')
            gif.style.opacity = 0
        }
        /*AudioElement.currentTime = 0
       AudioElement.play();
       masterPlay.classList.add('fa-pause')
       masterPlay.classList.remove('fa-play')*/
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 10) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    AudioElement.src = `song/${songIndex + 1}.mp3`
    dj.innerText=songs[songIndex].songName
    AudioElement.currentTime = 0
    AudioElement.play();
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
    if (AudioElement.paused || AudioElement.currentTime <= 0) {
        gif.style.opacity = 1
    }
    else {
        gif.style.opacity = 0
    }
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1
    }
    AudioElement.src = `song/${songIndex + 1}.mp3`
    dj.innerText=songs[songIndex].songName

    AudioElement.currentTime = 0
    AudioElement.play();
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
 
    if (AudioElement.paused || AudioElement.currentTime <= 0) {
        gif.style.opacity = 1
    }
    else {
        gif.style.opacity = 0
    }
})