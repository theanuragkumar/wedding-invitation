/* ---------- Persistent preferences (localStorage with cookie fallback) ---------- */
const store = {
  get(k) {
    try { const v = localStorage.getItem(k); if (v !== null) return v; } catch (e) {}
    const m = document.cookie.match(new RegExp('(?:^|; )' + k + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  },
  set(k, v) {
    try { localStorage.setItem(k, v); } catch (e) {}
    document.cookie = k + '=' + encodeURIComponent(v) + '; max-age=31536000; path=/; SameSite=Lax';
  }
};

/* ---------- Language (English / Hindi) ---------- */
const I18N = {
  en: {
    title: 'Lakshmi & Anurag — Wedding Invitation',
    introHint: 'You have received an invitation',
    openAria: 'Open wedding invitation',
    tap: 'Tap the envelope to open',
    blessing: "With the blessings of Lord Ganesha and together with their families, you're invited to celebrate the marriage of",
    names: 'Lakshmi <span>&amp;</span> Anurag',
    names2: 'Lakshmi &amp; Anurag',
    invite: 'Lakshmi and Anurag joyfully invite you to share in their happiness and bless them as they begin their new journey together as husband and wife. Your presence and warm wishes will make these celebrations truly memorable for both families.',
    saveDate: 'Save the Date',
    weddingDay: 'The Wedding Day',
    scratchSub: 'Scratch the card to reveal the date',
    scratchHint: '✦ Scratch here ✦',
    weddingDate: 'The Wedding Date',
    dateBig: '2 December 2026',
    dateSub: 'Wednesday · 18:00 onwards',
    days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds',
    celebrations: 'Celebrations',
    order: 'Order of the Day',
    haldi: 'Haldi &amp; Mehdi',
    haldiWhen: 'Tuesday, 1 December 2026 at 17:00 onwards',
    residences: 'At Respective Residences',
    gcal: '📅 Google Calendar',
    ceremony: 'Wedding Ceremony',
    ceremonyWhen: 'Wednesday, 2 December 2026 at 18:00 onwards',
    venue: 'Chandrabhaga Lawns',
    road: 'Trimbakeshwar Road',
    getDir: 'Get directions',
    awaiting: 'Awaiting Your Presence',
    blessings: 'With Love &amp; Blessings',
    quote: '“With hearts full of joy, we await your gracious presence to make our celebration complete.”',
    where: 'Where We Celebrate',
    mapShow: '📍 Show the map', mapHide: '✕ Hide the map',
    mapNote: 'Opens Google Maps inside this page',
    getDirArrow: 'Get directions ↗',
    good: 'Good to Know',
    details: 'Details',
    queries: 'For queries, contact',
    anurag: 'Anurag'
  },
  hi: {
    title: 'लक्ष्मी और अनुराग — विवाह निमंत्रण',
    introHint: 'आपको एक निमंत्रण प्राप्त हुआ है',
    openAria: 'विवाह निमंत्रण खोलें',
    tap: 'खोलने के लिए लिफ़ाफ़े पर टैप करें',
    blessing: 'भगवान श्री गणेश के आशीर्वाद एवं अपने परिवारों के साथ, आपको इस शुभ विवाह उत्सव में सादर आमंत्रित करते हैं',
    names: 'लक्ष्मी <span>&amp;</span> अनुराग',
    names2: 'लक्ष्मी &amp; अनुराग',
    invite: 'लक्ष्मी और अनुराग अपनी खुशियों में सहभागी बनने और पति-पत्नी के रूप में नए जीवन की शुरुआत पर उन्हें आशीर्वाद देने के लिए आपको हर्षपूर्वक आमंत्रित करते हैं। आपकी उपस्थिति और शुभकामनाएँ दोनों परिवारों के लिए इन उत्सवों को सचमुच यादगार बना देंगी।',
    saveDate: 'तारीख़ याद रखें',
    weddingDay: 'विवाह का दिन',
    scratchSub: 'तिथि देखने के लिए कार्ड को स्क्रैच करें',
    scratchHint: '✦ यहाँ स्क्रैच करें ✦',
    weddingDate: 'विवाह की तिथि',
    dateBig: '2 दिसंबर 2026',
    dateSub: 'बुधवार · सायं 6:00 बजे से',
    days: 'दिन', hours: 'घंटे', minutes: 'मिनट', seconds: 'सेकंड',
    celebrations: 'उत्सव',
    order: 'दिन का कार्यक्रम',
    haldi: 'हल्दी और मेहंदी',
    haldiWhen: 'मंगलवार, 1 दिसंबर 2026 को सायं 5:00 बजे से',
    residences: 'अपने-अपने निवास पर',
    gcal: '📅 गूगल कैलेंडर',
    ceremony: 'विवाह समारोह',
    ceremonyWhen: 'बुधवार, 2 दिसंबर 2026 को सायं 6:00 बजे से',
    venue: 'चंद्रभागा लॉन्स',
    road: 'त्र्यंबकेश्वर रोड',
    getDir: 'दिशा-निर्देश पाएँ',
    awaiting: 'आपकी प्रतीक्षा में',
    blessings: 'प्रेम और आशीर्वाद सहित',
    quote: '“हर्ष से भरे हृदय के साथ, हम आपकी गरिमामयी उपस्थिति की प्रतीक्षा करते हैं, ताकि हमारा उत्सव पूर्ण हो।”',
    where: 'हमारा उत्सव स्थल',
    mapShow: '📍 मानचित्र दिखाएँ', mapHide: '✕ मानचित्र छिपाएँ',
    mapNote: 'गूगल मैप्स इसी पृष्ठ में खुलेगा',
    getDirArrow: 'दिशा-निर्देश पाएँ ↗',
    good: 'जानने योग्य बातें',
    details: 'विवरण',
    queries: 'किसी भी जानकारी के लिए संपर्क करें',
    anurag: 'अनुराग'
  }
};
/* ---------- Names / addresses ---------- */
const currentSide = 'bride';
const NM = { en: { g: 'Anurag', b: 'Lakshmi' }, hi: { g: 'अनुराग', b: 'लक्ष्मी' } };
const pair = l => currentSide === 'bride' ? [NM[l].b, NM[l].g] : [NM[l].g, NM[l].b];
Object.assign(I18N.en, {
  names: () => { const [a, b] = pair('en'); return `${a} <span>&amp;</span> ${b}`; },
  names2: () => { const [a, b] = pair('en'); return `${a} &amp; ${b}`; },
  hash: () => 'Two hearts, one beautiful journey',
  invite: () => { const [a, b] = pair('en'); return `${a} and ${b} joyfully invite you to share in their happiness and bless them as they begin their new journey together as husband and wife. Your presence and warm wishes will make these celebrations truly memorable for both families.`; }
});
Object.assign(I18N.hi, {
  names: () => { const [a, b] = pair('hi'); return `${a} <span>&amp;</span> ${b}`; },
  names2: () => { const [a, b] = pair('hi'); return `${a} &amp; ${b}`; },
  hash: () => 'दो दिल, एक खूबसूरत सफ़र',
  invite: () => { const [a, b] = pair('hi'); return `${a} और ${b} अपनी खुशियों में सहभागी बनने और पति-पत्नी के रूप में नए जीवन की शुरुआत पर उन्हें आशीर्वाद देने के लिए आपको हर्षपूर्वक आमंत्रित करते हैं। आपकी उपस्थिति और शुभकामनाएँ दोनों परिवारों के लिए इन उत्सवों को सचमुच यादगार बना देंगी।`; }
});
Object.assign(I18N.en, {
    skip: 'Skip — reveal the date',
    navHome: 'Home', navDate: 'Date', navEvents: 'Events', navMap: 'Map',
});
Object.assign(I18N.hi, {
    skip: 'छोड़ें — तिथि दिखाएँ',
    navHome: 'मुख्य', navDate: 'तिथि', navEvents: 'कार्यक्रम', navMap: 'नक्शा',
});
let currentLang = 'en';
try {
  const saved = store.get('lang');
  if (saved === 'en' || saved === 'hi') currentLang = saved;
  else if ((navigator.language || '').toLowerCase().startsWith('hi')) currentLang = 'hi';
} catch (e) {}
const t = (k, ...a) => { const v = I18N[currentLang][k]; return typeof v === 'function' ? v(...a) : v; };
function setLang(l) {
  currentLang = l;
  try { store.set('lang', l); } catch (e) {}
  document.documentElement.lang = l;
  document.title = t('title');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); el.setAttribute('aria-label', t(el.dataset.i18nPh)); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
  if (typeof updateMapBtn === 'function') updateMapBtn();
}
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ---------- Envelope ---------- */
const envelope = document.getElementById('envelope');
const intro = document.getElementById('intro');
const card = document.getElementById('card');
let opened = false;

function openEnvelope() {
  if (opened) return;
  opened = true;
  envelope.classList.add('open');
  document.querySelector('.intro-tap').style.visibility = 'hidden';
  setTimeout(() => {
    card.classList.remove('hidden');
    intro.classList.add('leaving');
    window.scrollTo(0, 0);
    initScratch();
  }, 1900);
  setTimeout(() => intro.remove(), 3000);
}
envelope.addEventListener('click', openEnvelope);
envelope.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEnvelope(); }
});

/* ---------- Scratch card ---------- */
function initScratch() {
  const canvas = document.getElementById('scratch');
  const wrap = document.getElementById('scratchWrap');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const dpr = window.devicePixelRatio || 1;
  const w = wrap.clientWidth, h = wrap.clientHeight;
  canvas.width = w * dpr; canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  // foil
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, '#c9a766'); g.addColorStop(.5, '#e8d3a2'); g.addColorStop(1, '#b8934f');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 400; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * .18})`;
    ctx.fillRect(Math.random() * w, Math.random() * h, 2, 2);
  }

  ctx.globalCompositeOperation = 'destination-out';
  ctx.lineWidth = 34; ctx.lineCap = 'round'; ctx.lineJoin = 'round';

  let drawing = false, last = null, done = false, moves = 0;
  window.__revealDate = () => { if (done) return; done = true; canvas.classList.add('done'); const sk = document.getElementById('skipScratch'); if (sk) sk.hidden = true; };
  const pos = e => {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  canvas.addEventListener('pointerdown', e => {
    drawing = true; last = pos(e); canvas.setPointerCapture(e.pointerId); scratch(last, last);
  });
  canvas.addEventListener('pointermove', e => {
    if (!drawing) return;
    const p = pos(e); scratch(last, p); last = p;
    if (++moves % 8 === 0) check();
  });
  ['pointerup', 'pointercancel'].forEach(ev =>
    canvas.addEventListener(ev, () => { drawing = false; check(); }));

  function scratch(a, b) {
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
  }
  function check() {
    if (done) return;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let clear = 0, total = 0;
    for (let i = 3; i < data.length; i += 64) { total++; if (data[i] === 0) clear++; }
    if (clear / total > 0.5) {
      window.__revealDate();
    }
  }
}

/* ---------- Countdown (IST) ---------- */
const WEDDING = new Date('2026-12-02T18:00:00+05:30');
const pad = n => String(n).padStart(2, '0');
function tick() {
  let diff = Math.max(0, WEDDING - Date.now());
  const d = Math.floor(diff / 864e5); diff %= 864e5;
  const h = Math.floor(diff / 36e5); diff %= 36e5;
  const m = Math.floor(diff / 6e4);
  const s = Math.floor((diff % 6e4) / 1000);
  document.getElementById('cd-d').textContent = d;
  document.getElementById('cd-h').textContent = pad(h);
  document.getElementById('cd-m').textContent = pad(m);
  document.getElementById('cd-s').textContent = pad(s);
}
tick(); setInterval(tick, 1000);

/* ---------- Calendar links ---------- */
const EVENTS = {
  wedding: {
    title: 'Lakshmi & Anurag — Wedding Ceremony',
    start: '20261202T123000Z', end: '20261202T153000Z', // 18:00–21:00 IST
    location: 'Chandrabhaga Lawns, Trimbakeshwar Road, Nashik',
    details: 'Wedding ceremony of Lakshmi & Anurag.'
  },
  haldi: {
    title: 'Lakshmi & Anurag — Haldi & Mehdi',
    start: '20261201T113000Z', end: '20261201T143000Z', // 17:00–20:00 IST
    location: 'At respective residences',
    details: 'Haldi & Mehdi at respective residences.'
  }
};
function gcalUrl(e) {
  const p = new URLSearchParams({
    action: 'TEMPLATE', text: e.title, dates: `${e.start}/${e.end}`,
    details: e.details, location: e.location
  });
  return 'https://calendar.google.com/calendar/render?' + p;
}
document.getElementById('gcal-wedding').href = gcalUrl(EVENTS.wedding);
document.getElementById('gcal-haldi').href = gcalUrl(EVENTS.haldi);

/* ---------- Map ---------- */
const mapBtn = document.getElementById('showMap');
const mapBox = document.getElementById('map');
function updateMapBtn() { mapBtn.textContent = t(mapBox.hidden ? 'mapShow' : 'mapHide'); }
mapBtn.addEventListener('click', function () {
  if (mapBox.hidden) {
    mapBox.innerHTML = '<iframe loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" ' +
      'src="https://www.google.com/maps?q=Chandrabhaga+Lawns+Trimbakeshwar+Road+Nashik&output=embed"></iframe>';
    mapBox.hidden = false;
  } else {
    mapBox.hidden = true; mapBox.innerHTML = '';
  }
  updateMapBtn();
});

// map is shown by default
mapBtn.click();
setLang(currentLang);

/* ---------- Sparkles, bursts & event reveals ---------- */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  // twinkling stars in the background
  for (let i = 0; i < 22; i++) {
    const s = document.createElement('div');
    s.className = 'twinkle';
    s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;` +
      `--s:${4 + Math.random() * 6}px;--d:${2.5 + Math.random() * 3}s;--dl:${Math.random() * 4}s`;
    document.body.appendChild(s);
  }

  // gold confetti / sparkle burst
  window.burst = function (x, y, n = 36) {
    const colors = ['#e8c982', '#d9b25a', '#fff3c8', '#e29aa6', '#f6d9a8'];
    for (let i = 0; i < n; i++) {
      const p = document.createElement('div');
      p.className = 'spark' + (Math.random() < .4 ? ' rect' : '');
      p.style.left = x + 'px'; p.style.top = y + 'px';
      p.style.background = colors[i % colors.length];
      document.body.appendChild(p);
      const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 170;
      p.animate([
        { transform: 'translate(0,0) rotate(0) scale(1)', opacity: 1 },
        { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d + 90}px) rotate(${Math.random() * 720}deg) scale(.4)`, opacity: 0 }
      ], { duration: 1100 + Math.random() * 900, easing: 'cubic-bezier(.2,.7,.3,1)' }).onfinish = () => p.remove();
    }
  };

  // burst when envelope opens
  document.getElementById('envelope').addEventListener('click', () => {
    const r = document.getElementById('envelope').getBoundingClientRect();
    setTimeout(() => burst(r.left + r.width / 2, r.top + r.height / 2, 50), 700);
    setTimeout(() => burst(innerWidth / 2, innerHeight / 3, 40), 1900);
  }, { once: true });

  // sparkle trail + celebratory burst for the scratch card
  const sc = document.getElementById('scratch');
  let n = 0;
  sc.addEventListener('pointermove', e => { if (e.buttons || e.pointerType === 'touch') if (++n % 5 === 0) burst(e.clientX, e.clientY, 3); });
  new MutationObserver(() => {
    if (sc.classList.contains('done')) {
      const r = sc.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2, 70);
    }
  }).observe(sc, { attributes: true, attributeFilter: ['class'] });

  // alternate slide-in for event cards
  document.querySelectorAll('.event').forEach((el, i) => {
    el.classList.add(i % 2 ? 'reveal-r' : 'reveal-l');
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }), { threshold: .15 });
    io.observe(el);
  });
})();

/* ---------- Background music (starts on envelope tap, user can mute) ---------- */
(function () {
  const bgm = document.getElementById('bgm');
  const btn = document.getElementById('musicBtn');
  const SV = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
  const SPK = '<path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4z" fill="currentColor" fill-opacity=".18"/>';
  const ICON_ON = SV + SPK + '<path class="w1" d="M15.2 9.2a4 4 0 0 1 0 5.6"/><path class="w2" d="M17.8 6.8a7.5 7.5 0 0 1 0 10.4"/></svg>';
  const ICON_OFF = SV + SPK + '<path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>';
  let muted = false;
  try { muted = store.get('muted') === '1'; } catch (e) {}
  bgm.volume = 0.5;

  function paint() {
    const on = !bgm.paused && !muted;
    btn.innerHTML = muted ? ICON_OFF : ICON_ON;
    btn.classList.toggle('playing', on);
    btn.setAttribute('aria-pressed', String(muted));
  }
  function start() {
    if (muted) { paint(); return; }
    bgm.play().then(paint).catch(paint);
  }
  bgm.addEventListener('error', () => { btn.hidden = true; });
  bgm.addEventListener('canplay', () => { btn.hidden = false; paint(); }, { once: true });

  // browsers block autoplay, so the tap on the envelope starts the song
  document.getElementById('envelope').addEventListener('click', start, { once: true });

  btn.addEventListener('click', () => {
    muted = !muted;
    try { store.set('muted', muted ? '1' : '0'); } catch (e) {}
    if (muted) bgm.pause(); else bgm.play().catch(() => {});
    paint();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) bgm.pause(); else if (!muted && bgm.currentTime > 0) bgm.play().catch(() => {});
  });
})();
/* ---------- Skip scratch ---------- */
document.getElementById('skipScratch').addEventListener('click', () => { if (window.__revealDate) window.__revealDate(); });

/* ---------- Scroll reveal ---------- */
(function () {
  const els = document.querySelectorAll('.block, footer');
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* ---------- Falling rose petals ---------- */
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = document.createElement('canvas');
  c.id = 'petals'; document.body.appendChild(c);
  const ctx = c.getContext('2d');
  let W, H, dpr;
  function resize() {
    dpr = window.devicePixelRatio || 1;
    W = innerWidth; H = innerHeight;
    c.width = W * dpr; c.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize(); addEventListener('resize', resize);

  const COLORS = [['#e8798f', '#a82c47'], ['#f2a1b2', '#c4566b'], ['#d9455f', '#8c1f38'], ['#f7c1cc', '#d9718a'], ['#c93a58', '#7d1a30']];
  const COUNT = innerWidth < 600 ? 14 : 24;

  function make(initial) {
    const col = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      x: Math.random() * W,
      y: initial ? Math.random() * H : -30 - Math.random() * 200,
      size: 9 + Math.random() * 12,
      vy: 0.3 + Math.random() * 0.55,
      sway: 0.35 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2,
      freq: 0.01 + Math.random() * 0.015,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - .5) * 0.02,
      flip: Math.random() * Math.PI * 2,
      vf: 0.015 + Math.random() * 0.02,
      col, t: 0
    };
  }
  const petals = Array.from({ length: COUNT }, () => make(true));

  function draw(p) {
    const s = p.size;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.scale(Math.cos(p.flip) * .8 + .2 * Math.sign(Math.cos(p.flip) || 1), 1); // 3D tumble
    const g = ctx.createRadialGradient(0, s * .3, s * .1, 0, 0, s * 1.2);
    g.addColorStop(0, p.col[0]); g.addColorStop(1, p.col[1]);
    ctx.fillStyle = g;
    ctx.globalAlpha = 0.92;
    ctx.beginPath(); // rose petal: broad rounded top, pointed base
    ctx.moveTo(0, s);
    ctx.bezierCurveTo(-s * .9, s * .5, -s * 1.1, -s * .7, -s * .25, -s);
    ctx.quadraticCurveTo(0, -s * .85, s * .25, -s);
    ctx.bezierCurveTo(s * 1.1, -s * .7, s * .9, s * .5, 0, s);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = .8;
    ctx.beginPath(); ctx.moveTo(0, s * .8); ctx.quadraticCurveTo(0, 0, 0, -s * .6); ctx.stroke();
    ctx.restore();
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.t++;
      p.y += p.vy;
      p.x += Math.sin(p.t * p.freq + p.phase) * p.sway;
      p.rot += p.vr; p.flip += p.vf;
      if (p.y > H + 30 || p.x < -50 || p.x > W + 50) petals[i] = make(false);
      draw(p);
    }
    requestAnimationFrame(frame);
  }
  frame();
})();

/* ---------- Sticky menu ---------- */
(function () {
  const links = [...document.querySelectorAll('#nav a')];
  const secs = links.map(a => document.getElementById(a.dataset.sec));
  const set = id => links.forEach(a => a.classList.toggle('on', a.dataset.sec === id));
  function update() {
    const y = innerHeight * 0.4;
    let cur = secs[0].id;
    if (scrollY > 80) secs.forEach(s => { if (s.getBoundingClientRect().top <= y) cur = s.id; });
    if (scrollY > 80 && innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = secs[secs.length - 1].id;
    set(cur);
  }
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  setInterval(update, 400);
  links.forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const el = document.getElementById(a.dataset.sec);
    const top = el.getBoundingClientRect().top + scrollY - 14;
    scrollTo({ top, behavior: 'smooth' });
  }));
  update();
})();
