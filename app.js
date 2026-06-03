// --- LOCAL SEQUENTIAL FOLDER TRACKS (No Photos, Named sequentially song 1 to song 11) ---
const tracks = [
  {
    id: 0,
    title: "Pehli Nazar Mein",
    artist: "Atif Aslam",
    plays: "Race",
    file: "songs/song1.mp3.mpeg",
    isFav: false,
    badge: "track",
    lyrics: [
      { time: 0, text: "🎵 Pehli Nazar Mein (Race) - Atif Aslam 🎵" },
      { time: 2, text: "♪ (Acoustic Guitar Instrumental Intro) ♪" },
      { time: 16, text: "Humming: Yeahhh... ooo... baby..." },
      { time: 24, text: "Pehli nazar mein kaise jaado kar diya..." },
      { time: 30, text: "Tera ban baitha hai mera jiya." },
      { time: 36, text: "Jaane kya hoga, kya hoga ab aage," },
      { time: 42, text: "Is dil ko ab to bas tu hi bhaaye." },
      { time: 48, text: "Baby I love you, baby I love you so," },
      { time: 54, text: "Baby I love you, baby I love you... baby I love you so" },
      { time: 60, text: "Har dua mein shamil tera naam ho gaya," },
      { time: 66, text: "Tu mila to lagta hai khuda mil gaya." }
    ]
  },
  {
    id: 1,
    title: "Tere Liye",
    artist: "Atif Aslam",
    plays: "Prince",
    file: "songs/song2.mp3.mpeg",
    isFav: true,
    badge: "track",
    lyrics: [
      { time: 0, text: "🎵 Tere Liye (Prince) - Atif Aslam 🎵" },
      { time: 2, text: "♪ (Synth Electro Beats Intro) ♪" },
      { time: 15, text: "Humming: Ooo... tere liye..." },
      { time: 25, text: "Tere liye hum hain jiye..." },
      { time: 30, text: "Hothon ko siye... tere liye." },
      { time: 36, text: "Tere liye hum hain jiye..." },
      { time: 42, text: "Dil ke raste pe hum to chal diye." },
      { time: 48, text: "♪ (Electric Guitar Interlude) ♪" },
      { time: 56, text: "Saansein bhi ab to teri hi amanat hain," },
      { time: 63, text: "Tu hai to meri har ek khushi salamat hai." }
    ]
  },
  {
    id: 2,
    title: "Tu Hi Mera",
    artist: "Shafqat Amanat Ali",
    plays: "Jannat 2",
    file: "songs/song3.mp3.mpeg",
    isFav: false,
    badge: "track",
    lyrics: [
      { time: 0, text: "🎵 Tu Hi Mera (Jannat 2) - Shafqat Amanat Ali 🎵" },
      { time: 2, text: "♪ (Whistle & Guitar Hook Intro) ♪" },
      { time: 22, text: "Tu hi mera... mera... mera..." },
      { time: 27, text: "Tu hi mera... mera... mera..." },
      { time: 33, text: "Kaise bataayein tumhein kitna chahein," },
      { time: 39, text: "Har saans mein teri hi raah takte jaayein." },
      { time: 46, text: "Tu hi mera humsafar, tu hi meri manzil," },
      { time: 53, text: "Tere bina jeena lagta hai bada mushkil." }
    ]
  },
  {
    id: 3,
    title: "Sach Keh Raha Hai Deewana",
    artist: "KK",
    plays: "RHTDM",
    file: "songs/song4.mp3.mpeg",
    isFav: false,
    badge: "track",
    lyrics: [
      { time: 0, text: "🎵 Sach Keh Raha Hai Deewana - KK 🎵" },
      { time: 2, text: "♪ (Iconic Keyboard Instrumental Intro) ♪" },
      { time: 29, text: "Sach keh raha hai deewana..." },
      { time: 35, text: "Dil na kisi se lagana..." },
      { time: 41, text: "Jhoothe yaar ke jhoothe vaade," },
      { time: 47, text: "Jhoothi mohabbat ke jhoothe daave." },
      { time: 53, text: "Mera dard koi na jaane..." },
      { time: 59, text: "Deewana toh bas tera rasta hi maane." },
      { time: 65, text: "Aankhon mein ansu leke haste hain hum..." }
    ]
  },
  {
    id: 4,
    title: "Tu Hi Haqeeqat (Humsafar)",
    artist: "Javed Ali",
    plays: "Tum Mile",
    file: "songs/song5.mp3.mpeg",
    isFav: false,
    badge: "track",
    lyrics: [
      { time: 0, text: "🎵 Tu Hi Haqeeqat - Javed Ali 🎵" },
      { time: 2, text: "♪ (Soft Flute and Keyboard Acoustic Intro) ♪" },
      { time: 26, text: "Tu humsafar mere, tu humkadam..." },
      { time: 32, text: "Tu hi safar mera, tu hi hai rehnuma." },
      { time: 38, text: "Tu hi haqeeqat, khwaab tu..." },
      { time: 44, text: "Dhadkanon ka saaz tu..." },
      { time: 51, text: "Tere bina har lamha adhura sa lagta hai," },
      { time: 59, text: "Ek pal bhi door jana saza sa lagta hai." }
    ]
  },
  {
    id: 5,
    title: "Kabhi Jo Baadal Barse",
    artist: "Arijit Singh",
    plays: "Jackpot",
    file: "songs/song6.mp3.mpeg",
    isFav: false,
    badge: "track",
    lyrics: [
      { time: 0, text: "🎵 Kabhi Jo Baadal Barse - Arijit Singh 🎵" },
      { time: 2, text: "♪ (Rain sound effects and Violin Hook Intro) ♪" },
      { time: 30, text: "Kabhi jo baadal barse..." },
      { time: 35, text: "Main dekhoon tujhe aankhein bharke..." },
      { time: 41, text: "Tu lage mujhe pehli baarish ki tarah," },
      { time: 47, text: "Bheega de mujhe apne pyaar mein zara." },
      { time: 55, text: "♪ (Melodious Flute & Violin Interlude) ♪" },
      { time: 63, text: "Aankhon mein teri hai mera saara jahan," },
      { time: 70, text: "Tu kahe to chhod doon main ye aasman." }
    ]
  },
  {
    id: 6,
    title: "Bekhayali",
    artist: "Sachet Tandon",
    plays: "Kabir Singh",
    file: "songs/song7.mp3.mpeg",
    isFav: false,
    badge: "track",
    lyrics: [
      { time: 0, text: "🎵 Bekhayali (Kabir Singh) - Sachet Tandon 🎵" },
      { time: 2, text: "♪ (Acoustic Guitar Strumming Intro) ♪" },
      { time: 15, text: "Bekhayali mein bhi tera hi khayaal aaye..." },
      { time: 21, text: "Kyun bichhadna hai zaroori, ye sawaal aaye." },
      { time: 27, text: "Dil ko na roko, na dhoondhe ye sahara," },
      { time: 33, text: "Tere bina mera guzaara nahi yaara." },
      { time: 40, text: "♪ (Heavy Rock Drums and Guitar Distortion) ♪" },
      { time: 48, text: "Raatein guzar jati hain teri hi yaadon mein," },
      { time: 55, text: "Dhoondhu tujhe apni hi khoyi baaton mein." }
    ]
  },
  {
    id: 7,
    title: "Woh Bheegi Bheegi Yaadein",
    artist: "James",
    plays: "Gangster",
    file: "songs/song8.mp3.mpeg",
    isFav: false,
    badge: "track",
    lyrics: [
      { time: 0, text: "🎵 Bheegi Bheegi (Gangster) - James 🎵" },
      { time: 2, text: "♪ (Heavy Distortion Rock Guitar Hook Intro) ♪" },
      { time: 20, text: "Humming: Na na na... na na na..." },
      { time: 32, text: "Bheegi bheegi yaadon mein..." },
      { time: 38, text: "Bheegi bheegi raaton mein..." },
      { time: 44, text: "Yaad aate hain woh bite lamhe," },
      { time: 50, text: "Jab hum aur tum paas hote the." },
      { time: 58, text: "♪ (Sad Flute Melancholic Interlude) ♪" },
      { time: 66, text: "Kyun zindagi ke raste badal gaye yaara," },
      { time: 74, text: "Kyun khoyi khoyi hai manzil hamari dobara." }
    ]
  },
  {
    id: 8,
    title: "Kinna Sona (Mahiya)",
    artist: "Sunil Kamath",
    plays: "Bhaag Johnny",
    file: "songs/song9.mp3.mpeg",
    isFav: false,
    badge: "track",
    lyrics: [
      { time: 0, text: "🎵 Kinna Sona (Bhaag Johnny) - Sunil Kamath 🎵" },
      { time: 2, text: "♪ (Smooth Acoustic Fingerstyle Guitar Intro) ♪" },
      { time: 20, text: "Mahiya mere maahi..." },
      { time: 25, text: "Jaaniya dil jaani..." },
      { time: 31, text: "Kinna sona tu... sona tu haan..." },
      { time: 37, text: "Har pal tere paas hi main to rahoon." },
      { time: 43, text: "♪ (Soft Piano and Bass Crossover) ♪" },
      { time: 51, text: "Saanson mein teri hi khushboo mehke," },
      { time: 59, text: "Haathon mein tera haath rahe to dil behke." }
    ]
  },
  {
    id: 9,
    title: "Soniye Hiriye",
    artist: "Shael Oswal",
    plays: "Shael Hits",
    file: "songs/song10.mp3.mpeg",
    isFav: false,
    badge: "track",
    lyrics: [
      { time: 0, text: "🎵 Soniye Hiriye - Shael Oswal 🎵" },
      { time: 2, text: "♪ (Keyboard Piano Hook and Kick Beat Intro) ♪" },
      { time: 18, text: "Soniye hiriye teri yaad aandi ae..." },
      { time: 24, text: "Seene vich tadapta hai dil, jaan jaandi ae." },
      { time: 30, text: "Tu hi jind meriye, dil da karaar ni," },
      { time: 36, text: "Tu aaja tainu rab da vaasta." },
      { time: 43, text: "♪ (Rhythmic Punjabi Beat Interlude) ♪" },
      { time: 51, text: "Udekta main tera raasta..." },
      { time: 58, text: "Tere naam kitti apni zindagi saari." }
    ]
  },
  {
    id: 10,
    title: "Baarish (Is Dard-e-Dil)",
    artist: "Mohammed Irfan",
    plays: "Yaariyan",
    file: "songs/song11.mp3.mpeg",
    isFav: false,
    badge: "track",
    lyrics: [
      { time: 0, text: "🎵 Baarish (Yaariyan) - Mohammed Irfan 🎵" },
      { time: 2, text: "♪ (Piano chord progression and snaps Intro) ♪" },
      { time: 16, text: "Dil mera hai nasamajh kitna..." },
      { time: 21, text: "Besabar yeh bewakoof bada." },
      { time: 27, text: "Is dard-e-dil ki sifarish..." },
      { time: 32, text: "Ab kar de koi yahaan," },
      { time: 37, text: "Ki mil jaaye isey woh baarish..." },
      { time: 43, text: "Jo bhigaa de poori tarah." },
      { time: 49, text: "♪ (Melodic Acoustic String Outro) ♪" }
    ]
  }
];

// --- AUDIO PLAYER INITIALIZATION ---
let currentTrackIndex = 0; // Starts with song 1
let isPlaying = false;
let isShuffle = false;
let isRepeat = true;

const audio = document.getElementById("audio-engine");

// DOM elements
const playBtn = document.getElementById("player-play-btn");
const playIcon = playBtn.querySelector(".play-icon");
const pauseIcon = playBtn.querySelector(".pause-icon");

const trackTitleEl = document.getElementById("player-track-title");
const artistNameEl = document.getElementById("player-artist-name");
const playCountEl = document.getElementById("player-play-count");
const albumArtEl = document.getElementById("player-album-art");
const albumDiscEl = document.getElementById("player-album-disc");
const favBtn = document.getElementById("player-fav-btn");

const currentTimeEl = document.getElementById("current-time");
const totalDurationEl = document.getElementById("total-duration");

const circularProgress = document.getElementById("circular-progress-bar");
const circularThumb = document.getElementById("progress-thumb");
const hotListContainer = document.getElementById("hot-list-container");
const waveformContainer = document.getElementById("waveform-visualizer");

// Spotify Floating Mini Player DOM elements
const miniPlayer = document.getElementById("mini-player");
const miniArt = document.getElementById("mini-art");
const miniTitle = document.getElementById("mini-title");
const miniArtist = document.getElementById("mini-artist");
const miniPlayBtn = document.getElementById("mini-play-btn");
const miniPlaySvg = document.getElementById("mini-play-svg");
const miniProgressBar = document.getElementById("mini-progress");

// Waveform configurations
const totalWaveBars = 36;
const waveHeights = Array.from({ length: totalWaveBars }, () => Math.floor(Math.random() * 26) + 6);

// --- APP SETUP ---
window.addEventListener("DOMContentLoaded", () => {
  setupFolderMusicList();
  setupWaveform();
  loadTrack(currentTrackIndex);
  
  // Waveform updating loop
  updateWaveformAnimation();
  
  // Start the center glowing wave ribbon animation loop
  animateWaveCanvas();

  // Start the premium splash background animation
  initSplashCanvas();
});

// --- SINGLE PHONE NAVIGATION (Spotify Style) ---
function switchScreen(screenId) {
  // If player is open and switching to home/saved, slide down the player
  if (screenId !== 'player') {
    const playerScreen = document.getElementById("screen-player");
    if (playerScreen) playerScreen.classList.remove("active");
  }

  document.querySelectorAll(".screen-content").forEach(screen => {
    if (screen.id === "screen-player" && screenId !== 'player') return;
    screen.classList.remove("active");
  });

  const targetScreen = document.getElementById(`screen-${screenId}`);
  if (targetScreen) {
    targetScreen.classList.add("active");
  }

  document.querySelectorAll(".bottom-nav .nav-item").forEach(item => {
    item.classList.remove("active");
  });

  if (screenId === 'home') {
    const el = document.getElementById("nav-home");
    if (el) el.classList.add("active");
  } else if (screenId === 'player') {
    const el = document.getElementById("nav-playlist");
    if (el) el.classList.add("active");
  } else if (screenId === 'saved') {
    const el1 = document.getElementById("nav-saved-home");
    const el2 = document.getElementById("nav-saved-saved");
    if (el1) el1.classList.add("active");
    if (el2) el2.classList.add("active");
    setupSavedMusicList();
  }
}

// --- POPULATE VERTICAL FOLDER MUSIC LIST (Sequential names, beautiful vector icons) ---
function setupFolderMusicList() {
  hotListContainer.innerHTML = "";
  
  tracks.forEach((track, index) => {
    const card = document.createElement("div");
    card.className = `hot-card-row track-id-${index}`;
    card.onclick = () => playTrack(index);
    card.innerHTML = `
      <div class="row-img-wrapper">
        <div class="row-card-placeholder">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h6V3h-8z"/>
          </svg>
        </div>
      </div>
      <div class="row-info">
        <span class="row-title">${track.title}</span>
        <span class="row-artist">${track.artist}</span>
      </div>
      <div class="row-right-badge">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="opacity: 0.3;">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="12" cy="5" r="1"/>
          <circle cx="12" cy="19" r="1"/>
        </svg>
      </div>
    `;
    hotListContainer.appendChild(card);
  });
}

// --- SETUP STATIC WAVEFORM ---
function setupWaveform() {
  waveformContainer.innerHTML = "";
  for (let i = 0; i < totalWaveBars; i++) {
    const bar = document.createElement("div");
    bar.className = "wave-bar";
    bar.style.height = `${waveHeights[i]}px`;
    bar.onclick = (e) => {
      e.stopPropagation();
      const clickPercent = i / totalWaveBars;
      if (audio.duration) {
        audio.currentTime = clickPercent * audio.duration;
      }
    };
    waveformContainer.appendChild(bar);
  }
}

// --- WAVEFORM FLUTTER ANIMATION ---
function updateWaveformAnimation() {
  requestAnimationFrame(updateWaveformAnimation);
  
  const bars = waveformContainer.children;
  if (!bars.length) return;

  const currentPercent = audio.duration ? (audio.currentTime / audio.duration) : 0;
  const activeBarIndex = Math.floor(currentPercent * totalWaveBars);

  for (let i = 0; i < totalWaveBars; i++) {
    if (i <= activeBarIndex && audio.currentTime > 0) {
      bars[i].classList.add("active-bar");
    } else {
      bars[i].classList.remove("active-bar");
    }

    if (isPlaying) {
      const baseHeight = waveHeights[i];
      const timeFactor = Date.now() * 0.006;
      const waveShift = Math.sin(timeFactor + i * 0.6) * 10;
      const noise = (Math.random() - 0.5) * 4;
      const dynamicHeight = Math.max(4, Math.min(36, baseHeight + waveShift + noise));
      bars[i].style.height = `${dynamicHeight}px`;
    } else {
      bars[i].style.height = `${waveHeights[i]}px`;
    }
  }
}

// --- MUSIC PLAYER ENGINE MECHANISMS ---

function loadTrack(index) {
  currentTrackIndex = index;
  const track = tracks[index];
  
  audio.src = track.file;
  
  // Update Full Player Text
  trackTitleEl.textContent = track.title;
  artistNameEl.textContent = track.artist;
  playCountEl.textContent = track.plays;
  
  // Clear dynamic vinyl labels (no album cover files, keep transparent/empty)
  albumArtEl.innerHTML = ``;
  
  // Render canvas inside stationary overlay if not already present
  const waveContainer = document.getElementById("stationary-wave-container");
  if (waveContainer && !document.getElementById("eq-canvas")) {
    waveContainer.innerHTML = `
      <canvas id="eq-canvas" width="164" height="164" style="width: 100%; height: 100%; border-radius: 50%; pointer-events: none; background: transparent;"></canvas>
    `;
  }
  
  // Update both Mini Players dynamically
  const miniTitles = [document.getElementById("mini-title"), document.getElementById("mini-title-saved")];
  const miniArtists = [document.getElementById("mini-artist"), document.getElementById("mini-artist-saved")];
  const miniArts = [document.getElementById("mini-art"), document.getElementById("mini-art-saved")];
  
  const miniPlaceholder = `
    <div class="mini-art-placeholder">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h6V3h-8z"/>
      </svg>
    </div>
  `;

  miniTitles.forEach(el => { if (el) el.textContent = track.title; });
  miniArtists.forEach(el => { if (el) el.textContent = track.artist; });
  miniArts.forEach(el => { if (el) el.innerHTML = miniPlaceholder; });

  // Favorite state setting (sync to all heart icons in nav bars)
  const navHearts = [document.getElementById("nav-saved-home"), document.getElementById("nav-saved-saved")];
  if (track.isFav) {
    favBtn.classList.add("liked");
    navHearts.forEach(h => { if (h) h.classList.add("liked"); });
  } else {
    favBtn.classList.remove("liked");
    navHearts.forEach(h => { if (h) h.classList.remove("liked"); });
  }

  // Active list highlighting
  document.querySelectorAll(".hot-card-row").forEach(el => el.classList.remove("active-playing-card"));
  const targetCard = document.querySelector(`.hot-card-row.track-id-${index}`);
  if (targetCard) targetCard.classList.add("active-playing-card");

  resetProgressUI();
  if (isLyricsPanelActive) {
    drawLyrics();
  }
}

function playTrack(index) {
  loadTrack(index);
  play();
  switchScreen('player');
}

function play() {
  audio.play().then(() => {
    isPlaying = true;
    
    // Update Full Play Button SVG states
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    albumDiscEl.style.animationPlayState = "running";
    
    // Update both Mini Play Buttons SVG states
    const playSvg = `
      <rect x="4" y="4" width="4" height="16"/>
      <rect x="12" y="4" width="4" height="16"/>
    `;
    const svg1 = document.getElementById("mini-play-svg");
    const svg2 = document.getElementById("mini-play-svg-saved");
    if (svg1) svg1.innerHTML = playSvg;
    if (svg2) svg2.innerHTML = playSvg;

    // Make floating mini-player bars visible
    const mini1 = document.getElementById("mini-player");
    const mini2 = document.getElementById("mini-player-saved");
    if (mini1) mini1.style.display = "flex";
    if (mini2) mini2.style.display = "flex";
  }).catch(err => {
    console.log("Audio load error: User interaction required or invalid track path.", err);
  });
}

function pause() {
  audio.pause();
  isPlaying = false;
  
  // Update Full Play Button SVG states
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
  albumDiscEl.style.animationPlayState = "paused";
  
  // Update both Mini Play Buttons SVG states
  const pauseSvg = `<polygon points="5 3 19 12 5 21 5 3"/>`;
  const svg1 = document.getElementById("mini-play-svg");
  const svg2 = document.getElementById("mini-play-svg-saved");
  if (svg1) svg1.innerHTML = pauseSvg;
  if (svg2) svg2.innerHTML = pauseSvg;
}

function togglePlayPause() {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
}

function nextTrack() {
  let nextIndex = currentTrackIndex + 1;
  if (isShuffle) {
    nextIndex = Math.floor(Math.random() * tracks.length);
  } else if (nextIndex >= tracks.length) {
    nextIndex = 0;
  }
  playTrack(nextIndex);
}

function prevTrack() {
  let prevIndex = currentTrackIndex - 1;
  if (prevIndex < 0) {
    prevIndex = tracks.length - 1;
  }
  playTrack(prevIndex);
}

function resetProgressUI() {
  circularProgress.style.strokeDashoffset = 534;
  updateThumbPosition(0);
  currentTimeEl.textContent = "00:00";
  totalDurationEl.textContent = "00:00";
  const bar1 = document.getElementById("mini-progress");
  const bar2 = document.getElementById("mini-progress-saved");
  if (bar1) bar1.style.width = "0%";
  if (bar2) bar2.style.width = "0%";
}

// --- UPDATE PROGRESS CLOCK & SLIDERS ---
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  
  const current = audio.currentTime;
  const duration = audio.duration;
  
  currentTimeEl.textContent = formatTime(current);
  totalDurationEl.textContent = formatTime(duration);

  const progressPercent = current / duration;

  // Circular progress
  const strokeOffset = 534 - (progressPercent * 534);
  circularProgress.style.strokeDashoffset = strokeOffset;
  updateThumbPosition(progressPercent);

  // Both Mini Progress Bars
  const bar1 = document.getElementById("mini-progress");
  const bar2 = document.getElementById("mini-progress-saved");
  if (bar1) bar1.style.width = `${progressPercent * 100}%`;
  if (bar2) bar2.style.width = `${progressPercent * 100}%`;

  // Synchronize scrolling lyrics
  updateLyricsSync();
});

audio.addEventListener("ended", () => {
  if (isRepeat) {
    audio.currentTime = 0;
    play();
    // Force reset lyrics container scroll to top immediately
    const container = document.getElementById("lyrics-text-container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
    updateLyricsSync();
  } else {
    nextTrack();
  }
});

// Format time format e.g. "01:25"
function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Circular thumb coordinates
function updateThumbPosition(percent) {
  const angle = -Math.PI / 2 + (percent * 2 * Math.PI);
  const radius = 42.5; 
  
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  
  circularThumb.style.left = `${x}%`;
  circularThumb.style.top = `${y}%`;
}

// Adjust volume
function adjustVolumeLevel(direction) {
  if (direction === 0) {
    audio.volume = 0;
    showToast("Volume Muted");
  } else {
    audio.volume = Math.min(1.0, audio.volume + 0.1);
    showToast(`Volume: ${Math.round(audio.volume * 100)}%`);
  }
}

// Favorite toggles
function toggleFavorite() {
  const currentTrack = tracks[currentTrackIndex];
  currentTrack.isFav = !currentTrack.isFav;
  
  const navHearts = [document.getElementById("nav-saved-home"), document.getElementById("nav-saved-saved")];
  
  if (currentTrack.isFav) {
    favBtn.classList.add("liked");
    navHearts.forEach(h => { if (h) h.classList.add("liked"); });
    showToast("Added to Liked Songs");
  } else {
    favBtn.classList.remove("liked");
    navHearts.forEach(h => { if (h) h.classList.remove("liked"); });
    showToast("Removed from Liked Songs");
  }
  
  // If the Liked Songs screen is currently active, dynamically refresh it!
  const savedScreen = document.getElementById("screen-saved");
  if (savedScreen && savedScreen.classList.contains("active")) {
    setupSavedMusicList();
  }
}

function toggleShuffleMode() {
  isShuffle = !isShuffle;
  const btn = document.getElementById("btn-shuffle");
  if (isShuffle) {
    btn.classList.add("active-util");
    showToast("Shuffle Enabled");
  } else {
    btn.classList.remove("active-util");
    showToast("Shuffle Disabled");
  }
}

function toggleRepeatMode() {
  isRepeat = !isRepeat;
  const btn = document.getElementById("btn-repeat");
  if (isRepeat) {
    btn.classList.add("active-util");
    showToast("Repeat Enabled");
  } else {
    btn.classList.remove("active-util");
    showToast("Repeat Disabled");
  }
}

// --- PREMIUM TOAST SYSTEM ---
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-icon">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    </div>
    <div class="toast-message">${message}</div>
  `;
  
  container.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}

// --- LYRICS PANEL CONTROL ---
let isLyricsPanelActive = false;
function toggleLyricsPanel() {
  const panel = document.getElementById("lyrics-panel");
  if (!panel) return;
  
  closeQueuePanel();
  closeOptionsPanel();
  
  isLyricsPanelActive = !isLyricsPanelActive;
  if (isLyricsPanelActive) {
    panel.classList.add("active");
    drawLyrics();
    updateLyricsSync(); // Immediately sync state without waiting for next timeupdate tick
  } else {
    panel.classList.remove("active");
  }
}

function drawLyrics() {
  const container = document.getElementById("lyrics-text-container");
  if (!container) return;
  container.innerHTML = "";
  
  const track = tracks[currentTrackIndex];
  const lyricData = track.lyrics || getFallbackLyrics(track.title);
  
  lyricData.forEach((line, index) => {
    const el = document.createElement("div");
    el.className = `lyric-line line-index-${index}`;
    el.textContent = line.text;
    el.onclick = () => {
      audio.currentTime = line.time;
      if (!isPlaying) play();
    };
    container.appendChild(el);
  });
}

function updateLyricsSync() {
  if (!isLyricsPanelActive) return;
  const track = tracks[currentTrackIndex];
  const lyricData = track.lyrics || getFallbackLyrics(track.title);
  const currentTime = audio.currentTime;
  
  let activeIndex = -1;
  for (let i = 0; i < lyricData.length; i++) {
    if (currentTime >= lyricData[i].time) {
      activeIndex = i;
    } else {
      break;
    }
  }
  
  const container = document.getElementById("lyrics-text-container");
  const lines = document.querySelectorAll(".lyric-line");
  lines.forEach((line, idx) => {
    if (idx === activeIndex) {
      if (!line.classList.contains("active-line")) {
        line.classList.add("active-line");
        
        // Smoothly center-scroll the active lyric line ONLY inside the container
        if (container) {
          const containerCenter = container.clientHeight / 2;
          const lineOffset = line.offsetTop - container.offsetTop;
          const lineCenter = line.clientHeight / 2;
          container.scrollTo({
            top: lineOffset - containerCenter + lineCenter,
            behavior: "smooth"
          });
        }
      }
    } else {
      line.classList.remove("active-line");
    }
  });
}

function getFallbackLyrics(title) {
  // Return different lyrics depending on track title
  const idNum = parseInt(title.replace(/\D/g, '')) || 1;
  
  return [
    { time: 0, text: `🎵 Radio Ava Broadcast: ${title} 🎵` },
    { time: 5, text: "Welcome to the premium Persian music scene" },
    { time: 10, text: "Let the sound waves carry your thoughts" },
    { time: 18, text: "This high-fidelity track is running directly from folder" },
    { time: 26, text: "Tap any of these lines to jump to that moment!" },
    { time: 35, text: "♪ (Beautiful Crossover Solo Beat) ♪" },
    { time: 45, text: "Radio Ava - always with you, always active" },
    { time: 55, text: "You can swipe down to close the lyrics at any time" },
    { time: 65, text: "Enjoying the song? Add it to your favorites list!" },
    { time: 80, text: "Radio Ava Smiley Face Project 2026" }
  ];
}

// --- QUEUE PANEL CONTROL ---
let isQueueActive = false;
function toggleQueuePanel() {
  const panel = document.getElementById("queue-panel");
  if (!panel) return;
  
  isLyricsPanelActive = false;
  const lyrPanel = document.getElementById("lyrics-panel");
  if (lyrPanel) lyrPanel.classList.remove("active");
  closeOptionsPanel();
  
  isQueueActive = !isQueueActive;
  if (isQueueActive) {
    panel.classList.add("active");
    drawQueue();
  } else {
    panel.classList.remove("active");
  }
}

function showQueuePanel() {
  isQueueActive = false;
  toggleQueuePanel();
}

function closeQueuePanel() {
  isQueueActive = false;
  const panel = document.getElementById("queue-panel");
  if (panel) panel.classList.remove("active");
}

function drawQueue() {
  const container = document.getElementById("queue-list-container");
  if (!container) return;
  container.innerHTML = "";
  
  tracks.forEach((track, index) => {
    const isActive = index === currentTrackIndex;
    const row = document.createElement("div");
    row.className = `queue-item-row ${isActive ? 'active-q-item' : ''}`;
    row.onclick = () => {
      playTrack(index);
      closeQueuePanel();
    };
    
    row.innerHTML = `
      <div class="queue-item-img">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h6V3h-8z"/>
        </svg>
      </div>
      <div class="queue-item-info">
        <span class="queue-item-title">${track.title}</span>
        <span class="queue-item-artist">${track.artist}</span>
      </div>
      ${isActive ? '<span class="queue-item-nowplaying">Playing</span>' : ''}
    `;
    container.appendChild(row);
  });
}

// --- OPTION SHEET (MORE OPTIONS) ---
let isOptionsActive = false;
function showMoreOptions() {
  closeQueuePanel();
  isLyricsPanelActive = false;
  const lyrPanel = document.getElementById("lyrics-panel");
  if (lyrPanel) lyrPanel.classList.remove("active");
  
  let panel = document.getElementById("options-panel");
  if (!panel) {
    panel = document.createElement("div");
    panel.id = "options-panel";
    panel.className = "options-panel";
    document.querySelector(".app-viewport").appendChild(panel);
  }
  
  const track = tracks[currentTrackIndex];
  panel.innerHTML = `
    <div class="options-header">
      <div class="options-art">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h6V3h-8z"/>
        </svg>
      </div>
      <div class="options-track-info">
        <span class="options-title">${track.title}</span>
        <span class="options-artist">${track.artist}</span>
      </div>
      <button class="btn-close-lyrics" onclick="closeOptionsPanel()">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="options-list">
      <div class="option-item" onclick="toggleFavorite(); closeOptionsPanel();">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <span class="option-label">${track.isFav ? 'Remove from Favorites' : 'Add to Favorites'}</span>
      </div>
      <div class="option-item" onclick="addToPlaylist(); closeOptionsPanel();">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="option-label">Add to Playlist</span>
      </div>
      <div class="option-item" onclick="downloadTrack(); closeOptionsPanel();">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="option-label">Download Audio File</span>
      </div>
      <div class="option-item" onclick="shareTrack(); closeOptionsPanel();">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
        <span class="option-label">Share Song Link</span>
      </div>
    </div>
  `;
  
  setTimeout(() => panel.classList.add("active"), 10);
  isOptionsActive = true;
}

function closeOptionsPanel() {
  const panel = document.getElementById("options-panel");
  if (panel) {
    panel.classList.remove("active");
  }
  isOptionsActive = false;
}

// --- CORE UTILITY ACTIONS ---

function downloadTrack() {
  const track = tracks[currentTrackIndex];
  const a = document.createElement("a");
  a.href = track.file;
  a.download = `${track.title}.mpeg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  showToast(`Downloading: ${track.title}`);
}

function shareTrack() {
  const track = tracks[currentTrackIndex];
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast("Share link copied to clipboard!");
    }).catch(() => {
      showToast("Could not copy link");
    });
  } else {
    showToast(`Shared: ${track.title}`);
  }
}

function addToPlaylist() {
  const track = tracks[currentTrackIndex];
  showToast(`Added to Playlist`);
}

function setupSavedMusicList() {
  const container = document.getElementById("saved-list-container");
  if (!container) return;
  container.innerHTML = "";
  
  const likedTracks = tracks.filter(t => t.isFav);
  if (likedTracks.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; margin-top: 100px; color: var(--text-grey); padding: 0 20px;">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 16px; opacity: 0.3; color: var(--color-primary);">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <p style="font-size: 14px; font-weight: 600; color: #fff;">Your Library is empty</p>
        <p style="font-size: 11px; opacity: 0.5; margin-top: 6px; line-height: 1.4;">Songs you like by tapping the heart icon will appear here.</p>
      </div>
    `;
    return;
  }
  
  likedTracks.forEach((track) => {
    const index = tracks.findIndex(t => t.id === track.id);
    const card = document.createElement("div");
    card.className = `hot-card-row track-id-${index} ${index === currentTrackIndex ? 'active-playing-card' : ''}`;
    card.onclick = () => playTrack(index);
    card.innerHTML = `
      <div class="row-img-wrapper">
        <div class="row-card-placeholder">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h6V3h-8z"/>
          </svg>
        </div>
      </div>
      <div class="row-info">
        <span class="row-title">${track.title}</span>
        <span class="row-artist">${track.artist}</span>
      </div>
      <div class="row-right-badge" onclick="event.stopPropagation(); removeLikedTrack(${track.id});">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="color: var(--color-primary); cursor: pointer; filter: drop-shadow(0 0 4px rgba(254, 59, 117, 0.4));">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
    `;
    container.appendChild(card);
  });
}

function removeLikedTrack(trackId) {
  const track = tracks.find(t => t.id === trackId);
  if (track) {
    track.isFav = false;
    
    // Sync all hearts
    if (track.id === currentTrackIndex) {
      favBtn.classList.remove("liked");
    }
    const navHearts = [document.getElementById("nav-saved-home"), document.getElementById("nav-saved-saved")];
    navHearts.forEach(h => { if (h) h.classList.remove("liked"); });
    
    showToast(`Removed from Liked Songs`);
    setupSavedMusicList();
  }
}

// --- CIRCULAR TRACK CLICK-TO-SEEK INTERACTIVITY ---
const svgWrapper = document.querySelector(".circular-track-svg-wrapper");
if (svgWrapper) {
  svgWrapper.addEventListener("click", (e) => {
    if (e.target.closest(".vol-btn")) return;
    
    const rect = svgWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    let angle = Math.atan2(y, x);
    angle += Math.PI / 2;
    if (angle < 0) angle += 2 * Math.PI;
    
    const percent = angle / (2 * Math.PI);
    if (audio.duration) {
      audio.currentTime = percent * audio.duration;
    }
  });
}

// --- DYNAMIC AUDIO WAVE RIBBON ANIMATION SYSTEM ---
let wavePhase = 0;
let waveAmpScale = 0; // Smooth multiplier for amplitude transition
let currentTheme = 'sunset';
const particles = [];
const maxParticles = 18;

function toggleThemePanel() {
  const panel = document.getElementById("theme-panel");
  if (panel) {
    panel.classList.toggle("active");
  }
}

function setTheme(themeName) {
  document.body.className = `theme-${themeName}`;
  currentTheme = themeName;
  showToast(`Theme: ${themeName.charAt(0).toUpperCase() + themeName.slice(1)}`);
  
  // Close the theme panel
  const panel = document.getElementById("theme-panel");
  if (panel) panel.classList.remove("active");
}

function animateWaveCanvas() {
  requestAnimationFrame(animateWaveCanvas);
  
  const canvas = document.getElementById("eq-canvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const centerY = height / 2;
  
  ctx.clearRect(0, 0, width, height);
  
  // Smoothly transition amplitude scale multiplier based on whether song is playing
  if (isPlaying) {
    waveAmpScale += (1.0 - waveAmpScale) * 0.1;
    wavePhase += 0.055; // Ripple phase forward
  } else {
    waveAmpScale += (0.0 - waveAmpScale) * 0.08;
    if (waveAmpScale > 0.01) {
      wavePhase += 0.01;
    }
  }
  
  // Dynamic color palette mapping based on active theme selection
  let stop1 = "rgba(254, 59, 117, 0.95)";
  let stop2 = "rgba(165, 76, 245, 0.9)";
  let stop3 = "rgba(0, 242, 254, 0.95)";
  let pulseGlow = "rgba(254, 59, 117, 0.6)";
  
  if (currentTheme === 'cyberpunk') {
    stop1 = "rgba(255, 0, 127, 0.95)";
    stop2 = "rgba(176, 38, 255, 0.9)";
    stop3 = "rgba(0, 255, 204, 0.95)";
    pulseGlow = "rgba(0, 255, 204, 0.6)";
  } else if (currentTheme === 'oceanic') {
    stop1 = "rgba(79, 172, 254, 0.95)";
    stop2 = "rgba(0, 168, 255, 0.9)";
    stop3 = "rgba(0, 242, 254, 0.95)";
    pulseGlow = "rgba(0, 242, 254, 0.6)";
  } else if (currentTheme === 'mystic') {
    stop1 = "rgba(137, 44, 220, 0.95)";
    stop2 = "rgba(165, 76, 245, 0.9)";
    stop3 = "rgba(224, 195, 252, 0.95)";
    pulseGlow = "rgba(165, 76, 245, 0.6)";
  }

  // Create horizontal gradient running across centerY
  const grad = ctx.createLinearGradient(6, centerY, width - 6, centerY);
  grad.addColorStop(0.0, stop1);
  grad.addColorStop(0.5, stop2);
  grad.addColorStop(1.0, stop3);

  // Simulated rhythmic music beat pulsing (120 BPM)
  let beatPulse = 1.0;
  if (isPlaying) {
    const beatRate = 125; 
    const timeSec = Date.now() / 1000;
    const beatVal = Math.sin(timeSec * Math.PI * (beatRate / 60));
    beatPulse = 1.0 + Math.max(0, beatVal) * 0.16; // Up to 16% amplitude expansion
  }

  // Draw base line if flat, otherwise draw glowing fluid sine ribbon threads
  if (waveAmpScale < 0.001) {
    // Draw flat glowing gradient line
    ctx.shadowBlur = 10;
    ctx.shadowColor = stop1;
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(8, centerY);
    ctx.lineTo(width - 8, centerY);
    ctx.stroke();
  } else {
    // Render 5 overlapping fine threads to build the 3D-fluid ribbon effect
    const threads = [
      { amp: 26 * beatPulse, freq: 0.040, phase: wavePhase, opacity: 0.9, width: 2.2 },
      { amp: 21 * beatPulse, freq: 0.045, phase: wavePhase + 1.2, opacity: 0.8, width: 1.8 },
      { amp: 17 * beatPulse, freq: 0.035, phase: -wavePhase * 0.9 + 2.5, opacity: 0.7, width: 1.4 },
      { amp: 13 * beatPulse, freq: 0.050, phase: wavePhase * 1.3 + 4.1, opacity: 0.6, width: 1.1 },
      { amp: 9 * beatPulse, freq: 0.030, phase: -wavePhase * 1.1 + 0.8, opacity: 0.5, width: 0.8 }
    ];

    threads.forEach((t, i) => {
      ctx.shadowBlur = (14 - i * 2) * waveAmpScale;
      ctx.shadowColor = i % 2 === 0 ? stop1 : stop3;
      ctx.strokeStyle = grad;
      ctx.lineWidth = t.width;
      ctx.globalAlpha = t.opacity * waveAmpScale;
      ctx.lineCap = "round";
      ctx.beginPath();
      
      const startX = 6;
      const endX = width - 6;
      
      for (let x = startX; x <= endX; x++) {
        // Sine window function to taper waves towards the edges
        const normalizedX = (x - startX) / (endX - startX);
        const windowScale = Math.sin(normalizedX * Math.PI);
        
        const y = centerY + Math.sin(x * t.freq + t.phase) * t.amp * waveAmpScale * windowScale;
        
        if (x === startX) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    });

    // Particle emissions - Floating glowing sparkles drifting along primary wave path
    if (isPlaying && particles.length < maxParticles && Math.random() < 0.15) {
      particles.push({
        xProgress: 0,
        speed: 0.004 + Math.random() * 0.006,
        size: 1 + Math.random() * 2,
        yOffset: (Math.random() - 0.5) * 8,
        opacity: 0.4 + Math.random() * 0.6
      });
    }

    if (particles.length > 0) {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.xProgress += p.speed;
        if (p.xProgress > 1.0) {
          particles.splice(i, 1);
          continue;
        }

        const startX = 6;
        const endX = width - 6;
        const x = startX + p.xProgress * (endX - startX);
        const normalizedX = p.xProgress;
        const windowScale = Math.sin(normalizedX * Math.PI);

        // Position calculations driven by primary thread wave variables
        const primaryAmp = 26 * beatPulse * waveAmpScale * windowScale;
        const y = centerY + Math.sin(x * 0.040 + wavePhase) * primaryAmp + p.yOffset * waveAmpScale;

        ctx.fillStyle = i % 2 === 0 ? `rgba(255, 255, 255, ${p.opacity * waveAmpScale})` : grad;
        ctx.shadowBlur = 8 * waveAmpScale;
        ctx.shadowColor = pulseGlow;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
    
    ctx.globalAlpha = 1.0; // Reset transparency
  }
  
  // Clean up shadow settings
  ctx.shadowBlur = 0;
}

// --- PREMIUM SPLASH BACKGROUND ANIMATION SYSTEM ---
let splashCanvas;
let splashCtx;
let splashParticles = [];
let splashTime = 0;

function initSplashCanvas() {
  splashCanvas = document.getElementById("splash-bg-canvas");
  if (!splashCanvas) return;
  
  splashCtx = splashCanvas.getContext("2d");
  
  // Fit canvas to parent container sizing
  const rect = splashCanvas.parentElement.getBoundingClientRect();
  splashCanvas.width = rect.width || 350;
  splashCanvas.height = rect.height || 710;
  
  // Populate floating dust particles
  splashParticles = [];
  const particleCount = 28;
  for (let i = 0; i < particleCount; i++) {
    splashParticles.push({
      x: Math.random() * splashCanvas.width,
      y: Math.random() * splashCanvas.height,
      size: 0.8 + Math.random() * 1.8,
      speedY: 0.2 + Math.random() * 0.4,
      alpha: 0.15 + Math.random() * 0.55,
      sinOffset: Math.random() * 100,
      sinSpeed: 0.005 + Math.random() * 0.015
    });
  }
  
  animateSplash();
}

function animateSplash() {
  if (!splashCanvas || !splashCtx) return;
  
  // Perform checks so we only animate when active splash page is visible
  const splashScreen = document.getElementById("screen-splash");
  if (splashScreen && !splashScreen.classList.contains("active")) {
    requestAnimationFrame(animateSplash);
    return;
  }
  
  requestAnimationFrame(animateSplash);
  
  const width = splashCanvas.width;
  const height = splashCanvas.height;
  splashCtx.clearRect(0, 0, width, height);
  
  splashTime += 0.003;
  
  // Deep dark ambient background gradient fill
  const bgGrad = splashCtx.createRadialGradient(width/2, height/3, 10, width/2, height/2, width);
  bgGrad.addColorStop(0, "#111016");
  bgGrad.addColorStop(1, "#07060a");
  splashCtx.fillStyle = bgGrad;
  splashCtx.fillRect(0, 0, width, height);
  
  // Dynamically resolve colors from CSS variables
  const color1 = getComputedStyle(document.body).getPropertyValue('--color-primary').trim() || '#fe3b75';
  const color2 = getComputedStyle(document.body).getPropertyValue('--color-secondary').trim() || '#ff6a3c';
  
  // Draw soft drifting waves at bottom
  splashCtx.shadowBlur = 0;
  splashCtx.globalAlpha = 0.07;
  splashCtx.fillStyle = color1;
  splashCtx.beginPath();
  splashCtx.moveTo(0, height);
  for (let x = 0; x <= width; x++) {
    const y = height * 0.7 + Math.sin(x * 0.005 + splashTime * 3) * 35 + Math.cos(x * 0.003 + splashTime * 1.5) * 20;
    splashCtx.lineTo(x, y);
  }
  splashCtx.lineTo(width, height);
  splashCtx.closePath();
  splashCtx.fill();
  
  splashCtx.globalAlpha = 0.05;
  splashCtx.fillStyle = color2;
  splashCtx.beginPath();
  splashCtx.moveTo(0, height);
  for (let x = 0; x <= width; x++) {
    const y = height * 0.72 + Math.sin(x * 0.004 - splashTime * 2.5 + 4) * 45 + Math.cos(x * 0.006 + splashTime * 2) * 15;
    splashCtx.lineTo(x, y);
  }
  splashCtx.lineTo(width, height);
  splashCtx.closePath();
  splashCtx.fill();
  
  splashCtx.globalAlpha = 1.0;
  
  // Draw drifting star dust sparkles
  splashParticles.forEach(p => {
    p.y -= p.speedY;
    p.x += Math.sin(p.y * p.sinSpeed + p.sinOffset) * 0.15;
    
    if (p.y < -10) {
      p.y = height + 10;
      p.x = Math.random() * width;
    }
    
    splashCtx.shadowBlur = 5;
    splashCtx.shadowColor = "#ffffff";
    
    let verticalFade = 1.0;
    if (p.y < 120) {
      verticalFade = p.y / 120;
    } else if (p.y > height - 120) {
      verticalFade = (height - p.y) / 120;
    }
    
    splashCtx.fillStyle = `rgba(255, 255, 255, ${p.alpha * verticalFade})`;
    splashCtx.beginPath();
    splashCtx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
    splashCtx.fill();
  });
  
  splashCtx.shadowBlur = 0;
}
