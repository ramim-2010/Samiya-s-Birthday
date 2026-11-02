
// =====================================
// PAGE NAVIGATION
// =====================================

function nextPage(number) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + number)
        .classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (number === 6) {
        createConfetti(35);
    }
}


// =====================================
// YOUTUBE MUSIC PLAYER
// =====================================

let youtubePlayer = null;
let musicPlaying = false;
let youtubeReady = false;

const musicBtn = document.getElementById("musicBtn");
const musicVideoId = "nVxTTBlUTlg";

window.onYouTubeIframeAPIReady = function() {

    youtubePlayer = new YT.Player("youtube-player", {

        height: "1",
        width: "1",

        videoId: musicVideoId,

        playerVars: {
            autoplay: 0,
            loop: 1,
            playlist: musicVideoId,
            playsinline: 1
        },

        events: {

            onReady: function() {
                youtubeReady = true;
                console.log("Birthday Music Ready!");
            },

            onStateChange: function(event) {

                if (event.data === YT.PlayerState.PLAYING) {
                    musicPlaying = true;
                    musicBtn.textContent = "⏸ Pause Music";
                }

                if (event.data === YT.PlayerState.PAUSED) {
                    musicPlaying = false;
                    musicBtn.textContent = "🎵 Play Music";
                }

                if (event.data === YT.PlayerState.ENDED) {
                    youtubePlayer.playVideo();
                }
            }
        }
    });
};


// LOAD YOUTUBE API

const youtubeScript = document.createElement("script");

youtubeScript.src = "https://www.youtube.com/iframe_api";

document.head.appendChild(youtubeScript);


// MUSIC PLAY / PAUSE

function toggleMusic() {

    if (!youtubeReady || !youtubePlayer) {
        alert("Music is loading. Please try again!");
        return;
    }

    if (!musicPlaying) {

        youtubePlayer.playVideo();

    } else {

        youtubePlayer.pauseVideo();

    }
}


// =====================================
// OPEN GIFT
// =====================================

function openGift() {

    document.getElementById("gift")
        .classList.add("opened");

    createConfetti(50);

    if (youtubeReady && youtubePlayer) {
        youtubePlayer.playVideo();
    }

    setTimeout(() => {
        nextPage(2);
    }, 900);
}


// =====================================
// BLOW CANDLES
// =====================================

function blowCandles() {

    const cake = document.getElementById("cake");
    const text = document.getElementById("cakeText");

    cake.textContent = "🎂✨";

    text.textContent =
        "May all your beautiful wishes come true, Samiya! ❤️";

    document.getElementById("blowBtn")
        .classList.add("hidden");

    document.getElementById("cakeNext")
        .classList.remove("hidden");

    createConfetti(45);
}


// =====================================
// PHOTO GALLERY
// =====================================

function showImage(img) {

    if (!img.complete || img.naturalWidth === 0) {
        alert("This image could not be loaded.");
        return;
    }

    document.getElementById("largeImage").src = img.src;

    document.getElementById("imageViewer")
        .classList.remove("hidden");
}


function closeImage() {

    document.getElementById("imageViewer")
        .classList.add("hidden");
}


// CLOSE IMAGE WITH ESCAPE

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeImage();
    }

});


// =====================================
// FINAL SURPRISE
// =====================================

function celebrate() {

    document.getElementById("ending")
        .classList.remove("hidden");

    document.getElementById("finalHeart")
        .style.transform = "scale(1.4)";

    createConfetti(100);

    setTimeout(() => {

        document.getElementById("ending")
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

    }, 200);
}


// =====================================
// CONFETTI
// =====================================

function createConfetti(amount = 30) {

    const emojis = [
        "❤️", "💕", "💖",
        "✨", "🌸", "🎉", "💗"
    ];

    for (let i = 0; i < amount; i++) {

        const piece = document.createElement("span");

        piece.className = "confetti-piece";

        piece.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        piece.style.fontSize =
            (15 + Math.random() * 20) + "px";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5500);
    }
}


// =====================================
// FLOATING HEARTS
// =====================================

function createFloatingHearts() {

    const container = document.getElementById("hearts");

    const emojis = [
        "❤️", "💕", "💗",
        "💖", "🌸", "✨"
    ];

    for (let i = 0; i < 22; i++) {

        const heart = document.createElement("span");

        heart.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDelay =
            Math.random() * 10 + "s";

        heart.style.animationDuration =
            (7 + Math.random() * 7) + "s";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        container.appendChild(heart);
    }
}

createFloatingHearts();
