// A simplified, illustrative toy: it is NOT the lab's actual ergodic
// control algorithm, just a hand-built heuristic that captures the core
// idea -- spend time in proportion to "how interesting" a region is,
// while still covering the rest of the space over time.

const NX = 90;
const NY = 51;
const TRAIL_LENGTH = 40;
const VISIT_WEIGHT = 1.1;
const VISIT_DECAY = 0.996;
const MAX_SPEED = 0.9; // grid cells / frame
const ACCEL = 0.18;
const DAMPING = 0.9;

document.querySelectorAll('.ergodic-demo').forEach(initErgodicDemo);

function initErgodicDemo(container) {
  const theme = getComputedStyle(document.documentElement);
  const primary = theme.getPropertyValue('--primary').trim() || '#0ea5e9';
  const bgAlt = theme.getPropertyValue('--background-alt').trim() || '#1c1c1c';

  const heatCanvas = document.createElement('canvas');
  heatCanvas.width = NX;
  heatCanvas.height = NY;

  const bgCanvas = document.createElement('canvas');
  bgCanvas.style.filter = 'blur(6px)';
  const bgCtx = bgCanvas.getContext('2d');
  bgCtx.imageSmoothingEnabled = true;

  const fgCanvas = document.createElement('canvas');
  const fgCtx = fgCanvas.getContext('2d');

  container.appendChild(bgCanvas);
  container.appendChild(fgCanvas);

  const hint = document.createElement('div');
  hint.className = 'demo-hint';
  hint.textContent = 'Click to mark points of interest — watch the agent balance lingering where it matters against covering the rest.';
  container.appendChild(hint);

  const resetButton = document.createElement('button');
  resetButton.className = 'button demo-reset';
  resetButton.type = 'button';
  resetButton.setAttribute('data-style', 'bare');
  resetButton.textContent = 'Reset';
  container.appendChild(resetButton);

  let info, visited, agent, vel, trail;

  function reset() {
    info = new Float32Array(NX * NY).fill(0.08);
    visited = new Float32Array(NX * NY);
    addBlob(NX * 0.3, NY * 0.35, 1);
    addBlob(NX * 0.7, NY * 0.65, 1);
    agent = { x: NX / 2, y: NY / 2 };
    vel = { x: 0, y: 0 };
    trail = [];
    drawHeatmap();
  }

  function addBlob(gx, gy, strength) {
    const sigma = 6;
    const radius = Math.ceil(sigma * 3);
    for (let dy = -radius; dy <= radius; dy++) {
      const py = Math.round(gy) + dy;
      if (py < 0 || py >= NY) continue;
      for (let dx = -radius; dx <= radius; dx++) {
        const px = Math.round(gx) + dx;
        if (px < 0 || px >= NX) continue;
        const d2 = dx * dx + dy * dy;
        const idx = py * NX + px;
        info[idx] = Math.min(1.6, info[idx] + strength * Math.exp(-d2 / (2 * sigma * sigma)));
      }
    }
  }

  function drawHeatmap() {
    const img = heatCanvas.getContext('2d').createImageData(NX, NY);
    const [pr, pg, pb] = hexToRgb(primary);
    const [br, bgc, bb] = hexToRgb(bgAlt);
    for (let i = 0; i < NX * NY; i++) {
      const t = Math.min(1, info[i] / 1.2);
      img.data[i * 4] = lerp(br, pr, t);
      img.data[i * 4 + 1] = lerp(bgc, pg, t);
      img.data[i * 4 + 2] = lerp(bb, pb, t);
      img.data[i * 4 + 3] = 255;
    }
    heatCanvas.getContext('2d').putImageData(img, 0, 0);
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    bgCtx.drawImage(heatCanvas, 0, 0, bgCanvas.width, bgCanvas.height);
  }

  function errorAt(gx, gy) {
    const px = clamp(Math.round(gx), 0, NX - 1);
    const py = clamp(Math.round(gy), 0, NY - 1);
    return info[py * NX + px] - VISIT_WEIGHT * visited[py * NX + px];
  }

  function step() {
    const eR = errorAt(agent.x + 1, agent.y);
    const eL = errorAt(agent.x - 1, agent.y);
    const eD = errorAt(agent.x, agent.y + 1);
    const eU = errorAt(agent.x, agent.y - 1);
    let gx = (eR - eL) / 2;
    let gy = (eD - eU) / 2;
    const mag = Math.hypot(gx, gy);
    if (mag > 1e-4) { gx /= mag; gy /= mag; } else { gx = 0; gy = 0; }

    // small exploration jitter so the agent doesn't stall on flat regions
    gx += (Math.random() - 0.5) * 0.3;
    gy += (Math.random() - 0.5) * 0.3;

    vel.x = vel.x * DAMPING + gx * ACCEL;
    vel.y = vel.y * DAMPING + gy * ACCEL;
    const speed = Math.hypot(vel.x, vel.y);
    if (speed > MAX_SPEED) {
      vel.x = (vel.x / speed) * MAX_SPEED;
      vel.y = (vel.y / speed) * MAX_SPEED;
    }

    agent.x += vel.x;
    agent.y += vel.y;
    if (agent.x < 1 || agent.x > NX - 1) vel.x *= -1;
    if (agent.y < 1 || agent.y > NY - 1) vel.y *= -1;
    agent.x = clamp(agent.x, 1, NX - 1);
    agent.y = clamp(agent.y, 1, NY - 1);

    const idx = Math.round(agent.y) * NX + Math.round(agent.x);
    visited[idx] += 0.08;
    for (let i = 0; i < visited.length; i++) visited[i] *= VISIT_DECAY;

    trail.push({ x: agent.x, y: agent.y });
    if (trail.length > TRAIL_LENGTH) trail.shift();
  }

  function drawAgent() {
    const w = fgCanvas.width;
    const h = fgCanvas.height;
    fgCtx.clearRect(0, 0, w, h);
    const sx = w / NX;
    const sy = h / NY;

    trail.forEach((p, i) => {
      const alpha = (i / trail.length) * 0.5;
      fgCtx.beginPath();
      fgCtx.arc(p.x * sx, p.y * sy, 3, 0, Math.PI * 2);
      fgCtx.fillStyle = withAlpha(primary, alpha);
      fgCtx.fill();
    });

    fgCtx.beginPath();
    fgCtx.arc(agent.x * sx, agent.y * sy, 7, 0, Math.PI * 2);
    fgCtx.fillStyle = primary;
    fgCtx.shadowColor = primary;
    fgCtx.shadowBlur = 12;
    fgCtx.fill();
    fgCtx.shadowBlur = 0;
  }

  function pointerToGrid(evt) {
    const rect = container.getBoundingClientRect();
    const x = ((evt.clientX - rect.left) / rect.width) * NX;
    const y = ((evt.clientY - rect.top) / rect.height) * NY;
    return { x, y };
  }

  container.addEventListener('pointerdown', (evt) => {
    hint.setAttribute('data-hidden', '');
    const { x, y } = pointerToGrid(evt);
    addBlob(x, y, 0.9);
    drawHeatmap();
  });

  resetButton.addEventListener('click', (evt) => {
    evt.stopPropagation();
    reset();
  });

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    [bgCanvas, fgCanvas].forEach((c) => {
      c.width = w;
      c.height = h;
    });
    drawHeatmap();
  };
  new ResizeObserver(resize).observe(container);

  reset();
  resize();

  (function animate() {
    requestAnimationFrame(animate);
    step();
    drawAgent();
  })();
}

function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const bigint = parseInt(h.length === 3
    ? h.split('').map((c) => c + c).join('')
    : h, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function withAlpha(hex, alpha) {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
