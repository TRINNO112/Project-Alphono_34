(function() {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  
  // Game dimensions (virtual resolution)
  const GW = 320;
  const GH = 180;
  const LEVEL_WIDTH = 1700;

  // Game States: TITLE, PLAY, DIALOGUE, CARD, CELEBRATE
  let gameState = 'TITLE';
  let heartsCollected = 0;
  let frameCount = 0;
  let isMuted = false;
  
  // Input tracking
  const keys = { left: false, right: false, jump: false };
  
  // Camera scroll
  const camera = { x: 0 };
  
  // Player state
  const player = {
    x: 30,
    y: 120,
    vx: 0,
    vy: 0,
    width: 14,
    height: 20,
    isGrounded: false,
    facingLeft: false,
    landTimer: 0
  };

  // Pillars & End game components
  const pillars = [
    { x: 1480, y: 50, w: 16, h: 100 },
    { x: 1600, y: 50, w: 16, h: 100 }
  ];
  
  const letter = {
    x: 1542,
    y: 90,
    w: 16,
    h: 10,
    bob: 0,
    spawned: false,
    clicked: false
  };

  // Entities lists
  let hearts = [];
  let stars = [];
  let clouds = [];
  let particles = [];
  let fireworks = []; // active rockets and explosions

  // Audio Context
  let audioCtx = null;
  let musicInterval = null;
  let musicIndex = 0;

  // Dialogues list
  const dialogueLines = [
    "Sakshi! You collected all 17 hearts of happiness and reached the end of the quest!",
    "Look! The starlit night sky has lit up with fireworks to celebrate your 17th birthday! 🎆",
    "A magical letter has appeared above you, floaty and sparkling...",
    "Go ahead and tap/click the letter to open your special birthday message!"
  ];
  let dialogueIdx = 0;
  let typedText = '';
  let typewriterTimer = null;

  // Personal message shown inside the final Card
  const letterPersonalMsg = 
    "Dearest Sakshi,\n\n" +
    "Happy birthday my dear sister! 💜\n\n" +
    "This was a small game I was able to make in this time. I hope you will achieve all your dreams and have a great year ahead.\n\n" +
    "Yeah, really. Happy birthday!";

  // Image assets
  const avatarImg = new Image();
  avatarImg.src = '../avatar.png'; // point to the avatar image in parent directory
  let avatarLoaded = false;
  avatarImg.onload = () => { avatarLoaded = true; };

  // DOM Elements
  const titleScreen = document.getElementById('titleScreen');
  const dialogueScreen = document.getElementById('dialogueScreen');
  const cardScreen = document.getElementById('cardScreen');
  const dialogueTextEl = document.getElementById('dialogueText');
  const letterTextEl = document.getElementById('letterText');
  const heartCountEl = document.getElementById('heartCount');
  
  const startBtn = document.getElementById('startBtn');
  const dialogueBtn = document.getElementById('dialogueBtn');
  const restartBtn = document.getElementById('restartBtn');
  const muteBtn = document.getElementById('muteBtn');
  const unmutedIcon = document.getElementById('unmutedIcon');
  const mutedIcon = document.getElementById('mutedIcon');

  const btnLeft = document.getElementById('btnLeft');
  const btnRight = document.getElementById('btnRight');
  const btnJump = document.getElementById('btnJump');

  // Initialize Game level state
  function initLevel() {
    player.x = 30;
    player.y = 120;
    player.vx = 0;
    player.vy = 0;
    player.isGrounded = false;
    player.landTimer = 0;
    player.facingLeft = false;
    
    camera.x = 0;
    heartsCollected = 0;
    frameCount = 0;
    dialogueIdx = 0;
    letter.spawned = false;
    letter.clicked = false;
    
    heartCountEl.textContent = `HEARTS: 0/17`;

    // 17 Hearts placed strategically across level
    hearts = [
      { id: 1, x: 90, y: 130, collected: false, bob: Math.random() * 100 },
      { id: 2, x: 190, y: 90, collected: false, bob: Math.random() * 100 },
      { id: 3, x: 230, y: 90, collected: false, bob: Math.random() * 100 },
      { id: 4, x: 310, y: 55, collected: false, bob: Math.random() * 100 },
      { id: 5, x: 440, y: 75, collected: false, bob: Math.random() * 100 },
      { id: 6, x: 500, y: 130, collected: false, bob: Math.random() * 100 },
      { id: 7, x: 600, y: 95, collected: false, bob: Math.random() * 100 },
      { id: 8, x: 720, y: 50, collected: false, bob: Math.random() * 100 },
      { id: 9, x: 840, y: 80, collected: false, bob: Math.random() * 100 },
      { id: 10, x: 950, y: 50, collected: false, bob: Math.random() * 100 },
      { id: 11, x: 1020, y: 130, collected: false, bob: Math.random() * 100 },
      { id: 12, x: 1120, y: 90, collected: false, bob: Math.random() * 100 },
      { id: 13, x: 1220, y: 50, collected: false, bob: Math.random() * 100 },
      { id: 14, x: 1260, y: 50, collected: false, bob: Math.random() * 100 },
      { id: 15, x: 1300, y: 50, collected: false, bob: Math.random() * 100 },
      { id: 16, x: 1390, y: 80, collected: false, bob: Math.random() * 100 },
      { id: 17, x: 1490, y: 90, collected: false, bob: Math.random() * 100 },
    ];

    // Background Twinklers
    stars = [];
    for (let i = 0; i < 40; i++) {
      stars.push({
        x: Math.random() * GW,
        y: Math.random() * (GH - 60),
        size: Math.random() * 1 + 0.5,
        twinkleSpeed: 0.05 + Math.random() * 0.05,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Mid-ground clouds
    clouds = [
      { x: 100, y: 30, w: 30, h: 10, speed: 0.05 },
      { x: 400, y: 20, w: 45, h: 12, speed: 0.03 },
      { x: 700, y: 40, w: 35, h: 10, speed: 0.04 },
      { x: 1100, y: 25, w: 40, h: 11, speed: 0.055 },
      { x: 1400, y: 35, w: 30, h: 8, speed: 0.045 },
    ];

    particles = [];
    fireworks = [];
  }

  // Ground and platforms (virtual coordinates)
  const platforms = [
    // Solid ground segments
    { x: 0, y: 150, w: 380, h: 30, type: 'ground' },
    { x: 460, y: 150, w: 420, h: 30, type: 'ground' },
    { x: 960, y: 150, w: 740, h: 30, type: 'ground' },

    // Floating brick platforms
    { x: 150, y: 115, w: 70, h: 8, type: 'floating' },
    { x: 260, y: 90, w: 60, h: 8, type: 'floating' },
    { x: 380, y: 100, w: 80, h: 8, type: 'floating' },
    { x: 530, y: 115, w: 70, h: 8, type: 'floating' },
    { x: 660, y: 85, w: 80, h: 8, type: 'floating' },
    { x: 780, y: 110, w: 70, h: 8, type: 'floating' },
    { x: 880, y: 100, w: 80, h: 8, type: 'floating' },
    { x: 1000, y: 115, w: 60, h: 8, type: 'floating' },
    { x: 1100, y: 80, w: 90, h: 8, type: 'floating' },
    { x: 1220, y: 110, w: 80, h: 8, type: 'floating' },
    { x: 1350, y: 125, w: 80, h: 8, type: 'floating' },
    { x: 1470, y: 138, w: 150, h: 12, type: 'floating' } // Big stage between pillars
  ];

  // ── Web Audio Synth Engine ──
  function getAudioContext() {
    if (isMuted) return null;
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSfx(type) {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'jump') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(650, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } 
    else if (type === 'collect') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.setValueAtTime(0.08, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } 
    else if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.06);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } 
    else if (type === 'unlock') {
      const notes = [261.63, 329.63, 392.00, 523.25];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.06, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.2);
      });
    }
  }

  // Looping Happy Birthday Synthesizer
  const MELODY = [
    [261.63, 0.75], [261.63, 0.25], [293.66, 1.00], [261.63, 1.00], [349.23, 1.00], [329.63, 2.00], [0, 0.5],
    [261.63, 0.75], [261.63, 0.25], [293.66, 1.00], [261.63, 1.00], [392.00, 1.00], [349.23, 2.00], [0, 0.5],
    [261.63, 0.75], [261.63, 0.25], [523.25, 1.00], [440.00, 1.00], [349.23, 1.00], [329.63, 1.00], [293.66, 2.00], [0, 0.5],
    [466.16, 0.75], [466.16, 0.25], [440.00, 1.00], [349.23, 1.00], [392.00, 1.00], [349.23, 2.00]
  ];

  function startBirthdayMusic() {
    stopBirthdayMusic();
    const ctx = getAudioContext();
    if (!ctx) return;
    musicIndex = 0;
    playNextNote();
  }

  function playNextNote() {
    const ctx = getAudioContext();
    if (!ctx || isMuted) return;
    const now = ctx.currentTime;
    const item = MELODY[musicIndex];
    if (!item) {
      musicIndex = 0;
      playNextNote();
      return;
    }

    const [freq, durationBeats] = item;
    const durationSeconds = durationBeats * 0.44;

    if (freq > 0) {
      // Main retro synth lead
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, now);

      // Warm sub bass harmonizer
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(freq / 2, now);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.linearRampToValueAtTime(0.04, now + durationSeconds - 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + durationSeconds);

      subGain.gain.setValueAtTime(0.03, now);
      subGain.gain.linearRampToValueAtTime(0.03, now + durationSeconds - 0.05);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + durationSeconds);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + durationSeconds);

      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + durationSeconds);
    }

    musicIndex++;
    musicInterval = setTimeout(playNextNote, durationSeconds * 1000);
  }

  function stopBirthdayMusic() {
    if (musicInterval) {
      clearTimeout(musicInterval);
      musicInterval = null;
    }
  }

  // ── Particle Emitter sparklers ──
  function createSparkles(x, y, color = '#ff477e', count = 10) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.5,
        size: Math.random() * 2.5 + 0.8,
        life: 1.0,
        decay: 0.03 + Math.random() * 0.03,
        color
      });
    }
  }

  // ── Fireworks Generator ──
  function launchFirework() {
    // Launch a rocket from bottom to top
    const startX = 1450 + Math.random() * 180;
    const targetY = 30 + Math.random() * 50;
    fireworks.push({
      type: 'rocket',
      x: startX,
      y: 180,
      targetY: targetY,
      vx: (1542 - startX) * 0.01 + (Math.random() - 0.5) * 0.5, // slight aim to center
      vy: -3.5 - Math.random() * 1.5,
      color: `hsl(${Math.random() * 360}, 100%, 65%)`
    });
  }

  function explodeFirework(x, y, color) {
    playSfx('collect');
    const particleCount = 24 + Math.floor(Math.random() * 12);
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2.2 + 0.8;
      fireworks.push({
        type: 'particle',
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0,
        decay: 0.02 + Math.random() * 0.015,
        color: color
      });
    }
  }

  // ── Dialogue Typewriter ──
  function startDialogue() {
    gameState = 'DIALOGUE';
    dialogueScreen.classList.remove('hidden');
    
    dialogueIdx = 0;
    showDialogueLine();
  }

  function showDialogueLine() {
    if (typewriterTimer) clearInterval(typewriterTimer);
    dialogueTextEl.textContent = '';
    
    const line = dialogueLines[dialogueIdx];
    let charIdx = 0;
    
    typewriterTimer = setInterval(() => {
      if (charIdx < line.length) {
        dialogueTextEl.textContent += line.charAt(charIdx);
        charIdx++;
        if (charIdx % 3 === 0) playSfx('click');
      } else {
        clearInterval(typewriterTimer);
      }
    }, 30);
  }

  function advanceDialogue() {
    playSfx('click');
    if (dialogueIdx < dialogueLines.length - 1) {
      dialogueIdx++;
      showDialogueLine();
    } else {
      // Open card directly
      dialogueScreen.classList.add('hidden');
      openBirthdayCard();
    }
  }

  function openBirthdayCard() {
    gameState = 'CARD';
    cardScreen.classList.remove('hidden');
    letterTextEl.textContent = '';
    
    // Typewriter effect for card
    let charIdx = 0;
    const timer = setInterval(() => {
      if (charIdx < letterPersonalMsg.length) {
        letterTextEl.textContent += letterPersonalMsg.charAt(charIdx);
        charIdx++;
      } else {
        clearInterval(timer);
      }
    }, 20);

    startBirthdayMusic();
  }

  // ── Game Update Loop ──
  function update() {
    frameCount++;

    // 1. Clouds float
    clouds.forEach(c => {
      c.x -= c.speed;
      if (c.x + c.w < 0) c.x = LEVEL_WIDTH;
    });

    // 2. Play state physics
    if (gameState === 'PLAY') {
      const speed = 1.3;
      const gravity = 0.35;
      const jumpStrength = -6.5;

      if (keys.left) {
        player.vx = -speed;
        player.facingLeft = true;
      } else if (keys.right) {
        player.vx = speed;
        player.facingLeft = false;
      } else {
        player.vx = 0;
      }

      if (keys.jump && player.isGrounded) {
        player.vy = jumpStrength;
        player.isGrounded = false;
        playSfx('jump');
      }

      player.vy += gravity;
      player.x += player.vx;
      
      // Boundaries
      if (player.x < 0) player.x = 0;
      if (player.x + player.width > LEVEL_WIDTH) player.x = LEVEL_WIDTH - player.width;

      // Platform collisions X
      platforms.forEach(p => {
        if (player.x < p.x + p.w && player.x + player.width > p.x && player.y < p.y + p.h && player.y + player.height > p.y) {
          if (player.vx > 0) player.x = p.x - player.width;
          if (player.vx < 0) player.x = p.x + p.w;
        }
      });

      player.y += player.vy;
      let grounded = false;

      // Platform collisions Y
      platforms.forEach(p => {
        if (player.x < p.x + p.w && player.x + player.width > p.x && player.y < p.y + p.h && player.y + player.height > p.y) {
          if (player.vy > 0) {
            player.y = p.y - player.height;
            player.vy = 0;
            grounded = true;
          } else if (player.vy < 0) {
            player.y = p.y + p.h;
            player.vy = 0;
          }
        }
      });

      if (grounded && !player.isGrounded) {
        player.landTimer = 8;
      }
      player.isGrounded = grounded;

      // Pit check
      if (player.y > GH) {
        playSfx('click');
        player.x = Math.max(30, player.x - 70);
        player.y = 80;
        player.vx = 0;
        player.vy = 0;
        player.isGrounded = false;
      }

      // Hearts Collection
      hearts.forEach(h => {
        if (!h.collected) {
          const dist = Math.hypot((player.x + player.width/2) - h.x, (player.y + player.height/2) - h.y);
          if (dist < 14) {
            h.collected = true;
            heartsCollected++;
            heartCountEl.textContent = `HEARTS: ${heartsCollected}/17`;
            playSfx('collect');
            createSparkles(h.x, h.y, '#ff477e', 12);
          }
        }
      });

      // Camera Scrolling
      const targetCamX = player.x - GW / 2 + player.width / 2;
      camera.x += (targetCamX - camera.x) * 0.1;
      if (camera.x < 0) camera.x = 0;
      if (camera.x > LEVEL_WIDTH - GW) camera.x = LEVEL_WIDTH - GW;

      // Check ending condition: Reached pillars area
      if (player.x >= 1520 && heartsCollected >= 17) {
        gameState = 'CELEBRATE';
        player.vx = 0;
        player.vy = 0;
        player.x = 1542; // Center player between pillars
        
        playSfx('unlock');
        createSparkles(1542 + 7, 138, '#ffea7a', 30);
        
        // Spawn envelope letter floating above
        letter.spawned = true;
      }
    }

    // 3. Ending celebration simulation (Celebrate state)
    if (gameState === 'CELEBRATE') {
      // Auto-centering camera on final platform
      const targetCamX = 1542 + 7 - GW / 2;
      camera.x += (targetCamX - camera.x) * 0.08;

      // Launch fireworks occasionally
      if (Math.random() < 0.02) {
        launchFirework();
      }

      // Update fireworks
      fireworks.forEach((f, idx) => {
        if (f.type === 'rocket') {
          f.x += f.vx;
          f.y += f.vy;
          // Spawn trail particles
          if (frameCount % 3 === 0) {
            particles.push({
              x: f.x,
              y: f.y,
              vx: (Math.random() - 0.5) * 0.5,
              vy: 0.5,
              size: 1,
              life: 0.6,
              decay: 0.05,
              color: 'rgba(255, 230, 150, 0.4)'
            });
          }
          if (f.y <= f.targetY || f.vy >= 0) {
            // EXPLODE!
            explodeFirework(f.x, f.y, f.color);
            fireworks.splice(idx, 1);
          }
        } 
        else if (f.type === 'particle') {
          f.x += f.vx;
          f.y += f.vy;
          f.vy += 0.04; // gravity on sparks
          f.life -= f.decay;
          if (f.life <= 0) {
            fireworks.splice(idx, 1);
          }
        }
      });
    }

    // 4. Update standard particle lists
    particles.forEach((pt, i) => {
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.life -= pt.decay;
      if (pt.life <= 0) {
        particles.splice(i, 1);
      }
    });

    if (player.landTimer > 0) player.landTimer--;
  }

  // ── Render ──
  function drawPlayer(p) {
    const px = p.x - camera.x;
    const py = p.y;

    if (!avatarLoaded) {
      ctx.fillStyle = '#78a2e8';
      ctx.fillRect(px, py, p.width, p.height);
      return;
    }

    const drawW = 20;
    const drawH = 20;
    
    let squashX = 1;
    let squashY = 1;
    let tilt = 0;

    // Movement animation properties
    if (!p.isGrounded) {
      squashX = p.vy < 0 ? 0.85 : 0.92;
      squashY = p.vy < 0 ? 1.15 : 1.08;
    } else if (p.landTimer > 0) {
      squashX = 1.25;
      squashY = 0.75;
    } else if (Math.abs(p.vx) > 0.1) {
      squashY = 1 + Math.abs(Math.sin(frameCount * 0.28)) * 0.06;
      squashX = 1 - Math.abs(Math.sin(frameCount * 0.28)) * 0.04;
      tilt = Math.sin(frameCount * 0.28) * 0.08;
    } else {
      squashY = 1 + Math.sin(frameCount * 0.08) * 0.025;
      squashX = 1 - Math.sin(frameCount * 0.08) * 0.015;
    }

    ctx.save();
    ctx.translate(px + p.width / 2, py + p.height - 3);
    if (p.facingLeft) {
      ctx.scale(-1, 1);
    }
    ctx.rotate(tilt);
    ctx.scale(squashX, squashY);

    // Procedural walk legs
    ctx.fillStyle = '#0f2444';
    const legHeight = 3;
    
    if (!p.isGrounded) {
      ctx.fillRect(-5, -legHeight, 2, legHeight);
      ctx.fillRect(2, -legHeight, 2, legHeight);
      ctx.fillStyle = '#111';
      ctx.fillRect(-6, -1, 3, 2);
      ctx.fillRect(3, -1, 3, 2);
    } else if (Math.abs(p.vx) > 0.1) {
      const phase1 = frameCount * 0.28;
      const phase2 = phase1 + Math.PI;

      const leg1X = -5 + Math.sin(phase1) * 3.5;
      const leg1Y = -legHeight + Math.max(0, Math.cos(phase1)) * 2;
      const leg2X = 2 + Math.sin(phase2) * 3.5;
      const leg2Y = -legHeight + Math.max(0, Math.cos(phase2)) * 2;

      ctx.fillStyle = '#4b75ff';
      ctx.fillRect(leg1X + 1, -legHeight, 1, legHeight + leg1Y);
      ctx.fillStyle = '#111';
      ctx.fillRect(leg1X, leg1Y, 3, 2);

      ctx.fillStyle = '#4b75ff';
      ctx.fillRect(leg2X + 1, -legHeight, 1, legHeight + leg2Y);
      ctx.fillStyle = '#111';
      ctx.fillRect(leg2X, leg2Y, 3, 2);
    } else {
      ctx.fillRect(-4, -legHeight, 2, legHeight);
      ctx.fillRect(2, -legHeight, 2, legHeight);
      ctx.fillStyle = '#111';
      ctx.fillRect(-5, 0, 3, 2);
      ctx.fillRect(1, 0, 3, 2);
    }

    // Drawing actual avatar
    ctx.drawImage(avatarImg, -drawW / 2, -drawH - (legHeight - 1), drawW, drawH);
    ctx.restore();
  }

  function drawPillar(px, py, w, h) {
    const screenX = px - camera.x;
    
    // Draw greek pixel-art pillar (shading with grey colors)
    ctx.fillStyle = '#64748b'; // base border
    ctx.fillRect(screenX, py, w, h);
    ctx.fillStyle = '#94a3b8'; // primary body
    ctx.fillRect(screenX + 2, py + 4, w - 4, h - 8);
    ctx.fillStyle = '#cbd5e1'; // highlights
    ctx.fillRect(screenX + 2, py + 4, 3, h - 8);

    // Pillar caps (top and base structures)
    ctx.fillStyle = '#475569';
    ctx.fillRect(screenX - 3, py, w + 6, 4);
    ctx.fillRect(screenX - 3, py + h - 4, w + 6, 4);
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(screenX - 2, py + 1, w + 4, 2);
  }

  function render() {
    ctx.clearRect(0, 0, GW, GH);

    // 1. Sky Gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, GH);
    skyGrad.addColorStop(0, '#0a0521');
    skyGrad.addColorStop(0.5, '#130c33');
    skyGrad.addColorStop(1, '#23144d');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, GW, GH);

    // 2. Stars
    stars.forEach(st => {
      const val = Math.sin(frameCount * st.twinkleSpeed + st.phase) * 0.5 + 0.5;
      ctx.fillStyle = `rgba(255, 255, 255, ${val * 0.8 + 0.2})`;
      ctx.fillRect(st.x, st.y, st.size, st.size);
    });

    // 3. Parallax hills (15%)
    ctx.fillStyle = '#1a0d3b';
    const hillOffset1 = -camera.x * 0.15;
    ctx.beginPath();
    ctx.moveTo(0, GH);
    for (let x = 0; x <= GW; x += 10) {
      const worldX = x - hillOffset1;
      const y = 110 + Math.sin(worldX * 0.007) * 12 + Math.cos(worldX * 0.015) * 6;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(GW, GH);
    ctx.fill();

    // 4. Parallax trees (35%)
    ctx.fillStyle = '#111f44';
    const hillOffset2 = -camera.x * 0.35;
    ctx.beginPath();
    ctx.moveTo(0, GH);
    for (let x = 0; x <= GW; x += 8) {
      const worldX = x - hillOffset2;
      const y = 130 + Math.sin(worldX * 0.012) * 8 + Math.cos(worldX * 0.024) * 4;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(GW, GH);
    ctx.fill();

    // 5. Clouds
    clouds.forEach(c => {
      const cx = c.x - camera.x * 0.5;
      ctx.fillStyle = 'rgba(235, 220, 255, 0.14)';
      ctx.fillRect(cx, c.y, c.w, c.h);
      ctx.fillRect(cx + 4, c.y - 3, c.w - 8, c.h);
    });

    // 6. Draw Platforms
    platforms.forEach(p => {
      const px = p.x - camera.x;
      if (px + p.w < 0 || px > GW) return;

      if (p.type === 'ground') {
        ctx.fillStyle = '#3a8738'; // Grass
        ctx.fillRect(px, p.y, p.w, 3);
        ctx.fillStyle = '#266023';
        ctx.fillRect(px, p.y + 3, p.w, 2);
        
        ctx.fillStyle = '#382216'; // Dirt
        ctx.fillRect(px, p.y + 5, p.w, p.h - 5);
        ctx.fillStyle = '#21130a';
        for (let gx = Math.floor(px) + 8; gx < px + p.w; gx += 16) {
          ctx.fillRect(gx, p.y + 8, 2, 2);
        }
      } else {
        ctx.fillStyle = '#c76e2e'; // Bricks
        ctx.fillRect(px, p.y, p.w, p.h);
        ctx.fillStyle = '#e89e5a';
        ctx.fillRect(px + 1, p.y + 1, p.w - 2, p.h - 2);
        ctx.fillStyle = '#7a3e14';
        ctx.fillRect(px, p.y + p.h - 1, p.w, 1);
        for (let bx = px + 10; bx < px + p.w; bx += 12) {
          ctx.fillRect(bx, p.y, 1, p.h);
        }
      }
    });

    // 7. Celebrate Fireworks Backdrops (drawn behind pillars/player)
    fireworks.forEach(f => {
      const screenX = f.x - camera.x;
      if (f.type === 'rocket') {
        ctx.fillStyle = f.color;
        ctx.fillRect(screenX - 1, f.y - 3, 2, 6);
      } else if (f.type === 'particle') {
        ctx.fillStyle = f.color;
        ctx.globalAlpha = f.life;
        ctx.fillRect(screenX, f.y, 1.5, 1.5);
      }
    });
    ctx.globalAlpha = 1.0;

    // 8. Draw Pillars
    pillars.forEach(pil => {
      drawPillar(pil.x, pil.y, pil.w, pil.h);
    });

    // 9. Draw Hearts
    hearts.forEach(h => {
      if (h.collected) return;
      const hx = h.x - camera.x;
      if (hx + 10 < 0 || hx - 10 > GW) return;

      ctx.save();
      const heartBob = Math.sin(frameCount * 0.08 + h.bob) * 2.5;
      ctx.translate(hx, h.y + heartBob);

      ctx.fillStyle = '#ff3b68';
      ctx.fillRect(-4, -3, 3, 3);
      ctx.fillRect(1, -3, 3, 3);
      ctx.fillRect(-5, -2, 10, 3);
      ctx.fillRect(-4, 1, 8, 2);
      ctx.fillRect(-2, 3, 4, 2);
      ctx.fillRect(-1, 5, 2, 1);
      ctx.restore();
    });

    // 10. Particles sparkles
    particles.forEach(pt => {
      const px = pt.x - camera.x;
      ctx.fillStyle = pt.color;
      ctx.globalAlpha = pt.life;
      ctx.fillRect(px, pt.y, pt.size, pt.size);
    });
    ctx.globalAlpha = 1.0;

    // 11. Draw Player Character
    drawPlayer(player);

    // 12. Celebrate state: Happy Birthday text + Floating envelope
    if (gameState === 'CELEBRATE') {
      // Big Pixel style "HAPPY BIRTHDAY"
      ctx.fillStyle = '#ff3b68';
      ctx.font = 'bold 12px "Press Start 2P", monospace';
      ctx.textAlign = 'center';
      
      const txtY = 32 + Math.sin(frameCount * 0.06) * 2;
      ctx.shadowColor = 'rgba(236,72,153,0.5)';
      ctx.shadowBlur = 4;
      ctx.fillText("HAPPY BIRTHDAY", 1542 + 7 - camera.x, txtY);
      ctx.fillStyle = '#ffd13b';
      ctx.fillText("SAKSHI!", 1542 + 7 - camera.x, txtY + 15);
      
      // Reset shadows
      ctx.shadowBlur = 0;

      // Draw Floating Envelope Letter
      if (letter.spawned && !letter.clicked) {
        const lx = letter.x - camera.x;
        const ly = letter.y + Math.sin(frameCount * 0.05) * 3;
        
        ctx.save();
        ctx.translate(lx, ly);

        // Pixel-art envelope body (cream base)
        ctx.fillStyle = '#fffdf0';
        ctx.fillRect(-8, -5, 16, 10);
        ctx.strokeStyle = '#382216';
        ctx.lineWidth = 1;
        ctx.strokeRect(-8.5, -5.5, 17, 11);

        // Envelope flaps
        ctx.fillStyle = '#ff6b8b'; // pink heart seal
        ctx.fillRect(-1.5, -1, 3, 2);
        ctx.fillRect(-0.5, 1, 1, 1);

        ctx.strokeStyle = '#d9d1ab';
        ctx.beginPath();
        ctx.moveTo(-8, -5);
        ctx.lineTo(0, 1);
        ctx.lineTo(8, -5);
        ctx.stroke();

        ctx.restore();

        // Tap/click floating indicator prompt
        if (Math.floor(frameCount / 18) % 2 === 0) {
          ctx.fillStyle = '#e2e8f0';
          ctx.font = 'bold 6px "Press Start 2P", monospace';
          ctx.fillText("✉️ TAP TO OPEN", 1542 + 7 - camera.x, letter.y - 12);
        }
      }
    }
  }

  // Canvas click listener to open the letter
  canvas.addEventListener('click', (e) => {
    if (gameState !== 'CELEBRATE' || !letter.spawned || letter.clicked) return;

    // Get click coordinates relative to canvas
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const clickX = (e.clientX - rect.left) * scaleX + camera.x;
    const clickY = (e.clientY - rect.top) * scaleY;

    // Envelope bounding boundaries
    const lMinX = letter.x - 15;
    const lMaxX = letter.x + 15;
    const lMinY = letter.y - 15;
    const lMaxY = letter.y + 15;

    // Check hit
    if (clickX >= lMinX && clickX <= lMaxX && clickY >= lMinY && clickY <= lMaxY) {
      letter.clicked = true;
      playSfx('unlock');
      createSparkles(letter.x + 8, letter.y + 5, '#ff477e', 35);
      
      // Wait for sparkles then launch dialogue typewriter
      setTimeout(() => {
        startDialogue();
      }, 500);
    }
  });

  // Tap controller mappings
  function setKey(name, val) {
    keys[name] = val;
  }

  // Desktop keyboard bindings
  window.addEventListener('keydown', (e) => {
    if (gameState !== 'PLAY') return;
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') setKey('left', true);
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') setKey('right', true);
    if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
      e.preventDefault();
      setKey('jump', true);
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') setKey('left', false);
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') setKey('right', false);
    if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') setKey('jump', false);
  });

  // Mobile virtual controller touch mappings
  function bindTouch(btn, key) {
    btn.addEventListener('touchstart', (e) => { e.preventDefault(); setKey(key, true); });
    btn.addEventListener('touchend', (e) => { e.preventDefault(); setKey(key, false); });
    btn.addEventListener('mousedown', () => setKey(key, true));
    btn.addEventListener('mouseup', () => setKey(key, false));
    btn.addEventListener('mouseleave', () => setKey(key, false));
  }

  bindTouch(btnLeft, 'left');
  bindTouch(btnRight, 'right');
  bindTouch(btnJump, 'jump');

  // Interface Buttons click triggers
  startBtn.addEventListener('click', () => {
    playSfx('unlock');
    titleScreen.classList.add('hidden');
    gameState = 'PLAY';
    initLevel();
  });

  dialogueBtn.addEventListener('click', advanceDialogue);
  
  restartBtn.addEventListener('click', () => {
    stopBirthdayMusic();
    playSfx('unlock');
    
    cardScreen.classList.add('hidden');
    titleScreen.classList.remove('hidden');
    gameState = 'TITLE';
    initLevel();
  });

  muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    if (isMuted) {
      unmutedIcon.classList.add('hidden');
      mutedIcon.classList.remove('hidden');
      stopBirthdayMusic();
      if (audioCtx) {
        audioCtx.close();
        audioCtx = null;
      }
    } else {
      unmutedIcon.classList.remove('hidden');
      mutedIcon.classList.add('hidden');
      if (gameState === 'CARD') startBirthdayMusic();
    }
  });

  // Frame tick loop
  function tick() {
    update();
    render();
    requestAnimationFrame(tick);
  }

  // Start initialization
  initLevel();
  requestAnimationFrame(tick);
})();
