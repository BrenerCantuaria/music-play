let listMusic = [
    {
        tittle: 'Ice & Fire',
        Artist: 'Canyon',
        src: './music/Ice&Fire-King Canyon.mp3',
        img: './assets/img/bar.jpg'
    },
    {
        tittle: 'Silver Waves',
        Artist: 'TrackTribe',
        src: './music/Silver Waves - TrackTribe.mp3',
        img: './assets/img/nature.jpg'
    },
    {
        tittle: 'Boom Bap Flick',
        Artist: 'Quincas Moreira',
        src: './music/Boom Bap Flick - Quincas Moreira.mp3',
        img: './assets/img/night.jpg'
    }
]

let music = document.querySelector('audio')
let indexMusic = 0
let durationMusic = document.querySelector('.end')
durationMusic.innerText = timerMusic(Math.floor(music.duration))

let imagem = document.querySelector('img')
let nameMusic = document.querySelector('.description h1')
let nameArtist = document.querySelector('.description h3')


renderMusic(indexMusic)


document.querySelector('.play').addEventListener('click', playMusic)
document.querySelector('.pause').addEventListener('click', pauseMusic)
music.addEventListener('timeupdate', updateBar)
document.querySelector('.previous').addEventListener('click', () => {
    indexMusic--
    if (indexMusic < 0) {
        indexMusic = 2
    }
    renderMusic(indexMusic)

})


document.querySelector('.next').addEventListener('click', () => {
    indexMusic++
    if (indexMusic < 0) {
        indexMusic = 0
    }
    renderMusic(indexMusic)
})


function renderMusic(index) {
    music.setAttribute('src', listMusic[index].src)
    music.addEventListener('loadeddata', () => {
        nameMusic.innerText = listMusic[index].tittle
        nameArtist.innerText = listMusic[index].Artist
        imagem.src = listMusic[index].img

        durationMusic.innerText = timerMusic(Math.floor(music.duration))
    })
}


function playMusic() {
    music.play()
    document.querySelector('.pause').style.display = 'block'
    document.querySelector('.play').style.display = 'none'
}

function pauseMusic() {
    music.pause()
    document.querySelector('.pause').style.display = 'none'
    document.querySelector('.play').style.display = 'block'
}

function updateBar() {
    let prog = document.querySelector('progress')
    prog.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%'
    let timeMusic = document.querySelector('.inicial')
    timeMusic.innerText = timerMusic(Math.floor(music.currentTime))
}

function timerMusic(segundos) {
    let timerMinuto = Math.floor(segundos / 60)
    let timerSegundos = segundos % 60
    if (timerSegundos < 10) {
        timerSegundos = '0' + timerSegundos
    }
    return timerMinuto + ":" + timerSegundos
}

