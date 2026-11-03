/* ---------- birthday page for Salman Arif ---------- */

const wishes = [
  "May your year be full of laughter and adventure!",
  "Keep shining, keep smiling, brother!",
  "Wishing you health, success and endless happiness.",
  "The coolest brother in the world deserves the best day ever!",
  "May all your dreams come true this year.",
];

let wishIndex = 0;
let candleLit = true;

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
const cakeBtn = document.getElementById("cakeBtn");
const cakeHint = document.getElementById("cakeHint");
const wishText = document.getElementById("wishText");
const wishBtn = document.getElementById("wishBtn");

/* ---------- confetti ---------- */
function burst() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#f5c542", "#ff6b8b", "#5ad1e6", "#9be564", "#ffffff"];
  const parts = [];

  for (let i = 0; i < 180; i++) {
    parts.push({
      x: canvas.width / 2,
      y: canvas.height / 3,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -12 - 2,
      s: Math.random() * 6 + 4,
      col: colors[Math.floor(Math.random() * colors.length)],
      r: Math.random() * 6,
    });
  }

  let frames = 0;
  (function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    parts.forEach((p) => {
      p.vy += 0.3;
      p.x += p.vx;
      p.y += p.vy;
      p.r += 0.1;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.col;
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
      ctx.restore();
    });
    if (frames++ < 200) requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  })();
}

/* ---------- cake ---------- */
cakeBtn.addEventListener("click", () => {
  candleLit = !candleLit;
  cakeBtn.textContent = candleLit ? "🎂🕯️" : "🎂💨";
  cakeHint.textContent = candleLit
    ? "Tap the cake to blow out the candle"
    : "Wish made! ✨";
  if (candleLit) burst();
});

/* ---------- wishes ---------- */
wishBtn.addEventListener("click", () => {
  wishIndex = (wishIndex + 1) % wishes.length;
  wishText.textContent = wishes[wishIndex];
  burst();
});

/* ---------- first burst on load ---------- */
setTimeout(burst, 400);
