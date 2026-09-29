// Web Audio API Synthesizer & Cyberpunk Ambient Soundtrack Engine
// Pure in-browser synthesis: zero external audio assets, zero latency, ultra-lightweight.

class CyberAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.bgmEnabled = false;
    this.bgmTimer = null;
    this.bgmGainNode = null;
    this.bgmMasterGain = 0.09;
    this.bgmChordIndex = 0;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  // ==========================================
  // CORE SOUND EFFECTS (PRESERVED & EXPANDED)
  // ==========================================

  playBlip(freq = 600, duration = 0.08) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  playHover() {
    this.playBlip(440, 0.04);
  }

  playSelect() {
    this.playBlip(880, 0.12);
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + i * 0.06);
        gain.gain.setValueAtTime(0.08, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.18);
      });
    } catch (e) {}
  }

  playWarp() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch (e) {}
  }

  // ==========================================
  // BRAND NEW CYBERPUNK SOUND EFFECTS
  // ==========================================

  // Cybernetic footsteps while moving
  playFootstep(type = 'walk') {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(type === 'run' ? 320 : 220, now);

      osc.type = 'triangle';
      const baseFreq = type === 'run' ? 95 : (type === 'crawl' ? 65 : 80);
      const pitchVariation = baseFreq + (Math.random() * 16 - 8);
      osc.frequency.setValueAtTime(pitchVariation, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.08);

      const vol = type === 'run' ? 0.07 : (type === 'crawl' ? 0.09 : 0.04);
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {}
  }

  // Triumphant Milestone Reached / Unlocked Fanfare
  playMilestoneUnlock() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // D minor pentatonic cyberpunk heroic chord progression
      const chords = [
        [293.66, 440.00, 587.33], // D4, A4, D5
        [349.23, 523.25, 698.46], // F4, C5, F5
        [392.00, 587.33, 783.99], // G4, D5, G5
        [440.00, 659.25, 880.00, 1174.66] // A4, E5, A5, D6
      ];

      chords.forEach((chord, stepIdx) => {
        const time = now + stepIdx * 0.12;
        chord.forEach((freq) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, time);

          gain.gain.setValueAtTime(0.06, time);
          gain.gain.exponentialRampToValueAtTime(0.001, time + 0.35);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(time);
          osc.stop(time + 0.36);
        });
      });
    } catch (e) {}
  }

  // Mechanical Terminal / Keyboard Keystroke
  playTerminalKeystroke() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400 + Math.random() * 400, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.03);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.035);
    } catch (e) {}
  }

  // Sci-fi station waypoint resonance hum
  playStationHum() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, now);
      osc.frequency.linearRampToValueAtTime(220, now + 0.2);
      osc.frequency.linearRampToValueAtTime(110, now + 0.4);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {}
  }

  // High-tech Access Granted beep
  playAccessGranted() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [880, 1760].forEach((f, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + i * 0.08);

        gain.gain.setValueAtTime(0.07, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.12);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.12);
      });
    } catch (e) {}
  }

  // Cyber Glitch / Distortion
  playGlitch() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.setValueAtTime(1200, now + 0.04);
      osc.frequency.setValueAtTime(180, now + 0.08);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.14);
    } catch (e) {}
  }

  // ==========================================
  // GENERATIVE CYBERPUNK AMBIENT SOUNDTRACK
  // ==========================================

  // Starts the continuous atmospheric dark-synth music loop
  startBgm() {
    this.init();
    if (!this.ctx || this.bgmTimer) return;
    this.bgmEnabled = true;

    // Atmospheric Minor Progression: Dm9 -> Bbmaj7 -> Fadd9 -> Csus4
    const progression = [
      { bass: 73.42, pad: [146.83, 220.00, 261.63, 329.63] }, // D2, D3, A3, C4, E4
      { bass: 58.27, pad: [116.54, 174.61, 233.08, 293.66] }, // Bb1, Bb2, F3, Bb3, D4
      { bass: 87.31, pad: [174.61, 220.00, 261.63, 349.23] }, // F2, F3, A3, C4, F4
      { bass: 65.41, pad: [130.81, 196.00, 261.63, 329.63] }  // C2, C3, G3, C4, E4
    ];

    const playChordStep = () => {
      if (!this.bgmEnabled || !this.ctx) return;

      const chord = progression[this.bgmChordIndex % progression.length];
      this.bgmChordIndex++;

      const now = this.ctx.currentTime;
      const duration = 4.2; // 4.2 seconds per ambient bar

      // 1. Warm Analog Low-pass Filter for the entire ambient pad
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now);
      filter.frequency.linearRampToValueAtTime(750, now + duration * 0.5);
      filter.frequency.linearRampToValueAtTime(400, now + duration);

      const padGain = this.ctx.createGain();
      padGain.gain.setValueAtTime(0.001, now);
      padGain.gain.linearRampToValueAtTime(this.bgmMasterGain * 0.8, now + 1.2);
      padGain.gain.linearRampToValueAtTime(this.bgmMasterGain * 0.7, now + duration - 0.8);
      padGain.gain.linearRampToValueAtTime(0.001, now + duration);

      filter.connect(padGain);
      padGain.connect(this.ctx.destination);

      // Pad Oscillators
      chord.pad.forEach((freq) => {
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);
        osc.connect(filter);
        osc.start(now);
        osc.stop(now + duration + 0.1);
      });

      // 2. Sub-Bass Drone
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(chord.bass, now);
      subGain.gain.setValueAtTime(0.001, now);
      subGain.gain.linearRampToValueAtTime(this.bgmMasterGain * 1.1, now + 0.8);
      subGain.gain.linearRampToValueAtTime(0.001, now + duration);

      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + duration + 0.1);

      // 3. Ethereal High Cyber Arpeggio Plucks
      const arpNotes = [chord.pad[1] * 2, chord.pad[2] * 2, chord.pad[3] * 2, chord.pad[0] * 4];
      [0.6, 1.4, 2.2, 3.0].forEach((offset, idx) => {
        const arpTime = now + offset;
        const arpOsc = this.ctx.createOscillator();
        const arpGain = this.ctx.createGain();
        arpOsc.type = 'sine';
        arpOsc.frequency.setValueAtTime(arpNotes[idx % arpNotes.length], arpTime);

        arpGain.gain.setValueAtTime(0.001, arpTime);
        arpGain.gain.linearRampToValueAtTime(this.bgmMasterGain * 0.5, arpTime + 0.05);
        arpGain.gain.exponentialRampToValueAtTime(0.0001, arpTime + 0.7);

        arpOsc.connect(arpGain);
        arpGain.connect(this.ctx.destination);
        arpOsc.start(arpTime);
        arpOsc.stop(arpTime + 0.75);
      });
    };

    playChordStep();
    this.bgmTimer = setInterval(playChordStep, 4100);
  }

  stopBgm() {
    this.bgmEnabled = false;
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  toggleBgm() {
    if (this.bgmEnabled) {
      this.stopBgm();
      return false;
    } else {
      this.startBgm();
      return true;
    }
  }

  isBgmActive() {
    return this.bgmEnabled;
  }

  toggle() {
    this.enabled = !this.enabled;
    if (!this.enabled && this.bgmEnabled) {
      this.stopBgm();
    }
    return this.enabled;
  }
}

export const sound = new CyberAudio();
