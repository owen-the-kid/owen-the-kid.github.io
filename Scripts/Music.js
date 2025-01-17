document.addEventListener("DOMContentLoaded", function() {
    var rwMusic = document.getElementById("rwMusic");
    var ffMusic = document.getElementById("ffMusic");
    var playMusic = document.getElementById("playMusic");
    var music = document.getElementById("music");
    var currentSong = 1;

    if (ffMusic) {
        ffMusic.addEventListener("click", switchSongs);
    }

    if (rwMusic) {
        rwMusic.addEventListener("click", rewindSong);
    }
    
    if (playMusic) {
        playMusic.addEventListener("click", togglePlayPause);
    }

    function switchSongs() {
        if (music) {
            currentSong = (currentSong % 4) + 1;
            music.src = `../Music/song${currentSong}.mp3`;
            music.play();
            updateSongImage();
            updateNowPlaying();
        }
    }

    function rewindSong() {
        if (music) {
            currentSong = (currentSong + 3) % 4 + 1;
            music.src = `../Music/song${currentSong}.mp3`;
            music.play();
            updateSongImage();
            updateNowPlaying();
        }
    }

    function togglePlayPause() {
        if (music) {
            if (music.paused) {
                music.play();
                playMusic.innerHTML = '<i class="fas fa-pause"></i> Pause';
                playMusic.style.backgroundColor = 'red';
            } else {
                music.pause();
                playMusic.innerHTML = '<i class="fas fa-play"></i> Play';
                playMusic.style.backgroundColor = '';
            }
        }
    }

    if (ffMusic) {
        ffMusic.addEventListener("click", function() {
            music.play();
        });
    }

    function updateSongImage() {
        var songImage = document.getElementById("songImage");
        
        if (!songImage) {
            songImage = document.createElement("img");
            songImage.id = "songImage";
            document.body.appendChild(songImage);
        }
        
        songImage.src = `../Images/song${currentSong}.png`;
    }

    var musicName = ["Barry Uhl - Devourering The Devoted", "Blksmiith - Sattelite of the Old Days", "Pond - So Lo", "The Dear Hunter - The Indigo Child"];
    function updateNowPlaying() {
        var nowPlaying = document.getElementById("nowPlaying");
        
        if (!nowPlaying) {
            nowPlaying = document.createElement("p");
            nowPlaying.id = "nowPlaying";
            document.body.appendChild(nowPlaying);
        }
        
        nowPlaying.textContent = `Nu speelt: ${musicName[currentSong - 1]}`;
    }
});

