const video = document.getElementById('video');
const playPause = document.getElementById('play-pause');
const rewind = document.getElementById('rewind');
const forward = document.getElementById('forward');
const volume = document.getElementById('volume');
const progress = document.getElementById('progress');
const mute = document.getElementById('mute');
const fullscreen = document.getElementById('fullscreen');

// Play/Pause
playPause.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPause.textContent = 'Pause';
    } else {
        video.pause();
        playPause.textContent = 'Play';
    }
});

// Volume
volume.addEventListener('input', () => {
    video.volume = volume.value;
});

// Update progress
video.addEventListener('timeupdate', () => {
    progress.max = video.duration;
    progress.value = video.currentTime;
});

// Skip
forward.addEventListener('click', () => {
    video.currentTime += 5;
});
rewind.addEventListener('click', () => {
    video.currentTime -= 5;
});

// Seek
progress.addEventListener('input', () => {
    video.currentTime = progress.value;
});



// Mute toggle
mute.addEventListener('click', () => {
    video.muted = !video.muted;
    mute.textContent = video.muted ? 'Unmute' : 'Mute';
});

// Fullscreen toggle
fullscreen.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        video.requestFullscreen();
    }
});

// Click to play/pause
video.addEventListener('click', () => {
    playPause.click();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case ' ': // Spacebar
            e.preventDefault();
            playPause.click();
            break;
        case 'ArrowRight':
            video.currentTime += 5;
            break;
        case 'ArrowLeft':
            video.currentTime -= 5;
            break;
        case 'm':
            mute.click();
            break;
        case 'f':
            fullscreen.click();
            break;
    }
});
