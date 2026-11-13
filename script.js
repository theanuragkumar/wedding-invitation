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
    title: 'Anurag & Lakshmi — Wedding Invitation',
    introHint: 'You have received an invitation',
    openAria: 'Open wedding invitation',
    tap: 'Tap the envelope to open',
    blessing: "With the blessings of Lord Ganesha and together with their families, you're invited to celebrate the marriage of",
    names: 'Anurag <span>&amp;</span> Lakshmi',
    names2: 'Anurag &amp; Lakshmi',
    invite: 'Anurag and Lakshmi joyfully invite you to share in their happiness and bless them as they begin their new journey together as husband and wife. Your presence and warm wishes will make these celebrations truly memorable for both families.',
    saveDate: 'Save the Date',
    weddingDay: 'The Wedding Day',
    scratchSub: 'Scratch the card to reveal the date',
    scratchHint: '✦ Scratch here ✦',
    weddingDate: 'The Wedding Date',
    dateBig: '2 December 2026',
    dateSub: 'Wednesday · 18:00',
    days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds',
    celebrations: 'Celebrations',
    order: 'Order of the Day',
    haldi: 'Haldi &amp; Mehdi',
    haldiWhen: 'Tuesday, 1 December 2026 at 17:00',
    residences: 'At Respective Residences',
    haldiAddr: "<b>Groom's Residence:</b> E-35, Railway Quarter, Six Banglow, Igatpuri<br><b>Bride's Residence:</b> Satpur, Nashik",
    groomDir: "Groom's directions", brideDir: "Bride's directions",
    gcal: '📅 Google Calendar',
    ceremony: 'Wedding Ceremony',
    ceremonyWhen: 'Wednesday, 2 December 2026 at 18:00',
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
    title: 'अनुराग और लक्ष्मी — विवाह निमंत्रण',
    introHint: 'आपको एक निमंत्रण प्राप्त हुआ है',
    openAria: 'विवाह निमंत्रण खोलें',
    tap: 'खोलने के लिए लिफ़ाफ़े पर टैप करें',
    blessing: 'भगवान श्री गणेश के आशीर्वाद एवं अपने परिवारों के साथ, आपको इस शुभ विवाह उत्सव में सादर आमंत्रित करते हैं',
    names: 'अनुराग <span>&amp;</span> लक्ष्मी',
    names2: 'अनुराग &amp; लक्ष्मी',
    invite: 'अनुराग और लक्ष्मी अपनी खुशियों में सहभागी बनने और पति-पत्नी के रूप में नए जीवन की शुरुआत पर उन्हें आशीर्वाद देने के लिए आपको हर्षपूर्वक आमंत्रित करते हैं। आपकी उपस्थिति और शुभकामनाएँ दोनों परिवारों के लिए इन उत्सवों को सचमुच यादगार बना देंगी।',
    saveDate: 'तारीख़ याद रखें',
    weddingDay: 'विवाह का दिन',
    scratchSub: 'तिथि देखने के लिए कार्ड को स्क्रैच करें',
    scratchHint: '✦ यहाँ स्क्रैच करें ✦',
    weddingDate: 'विवाह की तिथि',
    dateBig: '2 दिसंबर 2026',
    dateSub: 'बुधवार · सायं 6:00 बजे',
    days: 'दिन', hours: 'घंटे', minutes: 'मिनट', seconds: 'सेकंड',
    celebrations: 'उत्सव',
    order: 'दिन का कार्यक्रम',
    haldi: 'हल्दी और मेहंदी',
    haldiWhen: 'मंगलवार, 1 दिसंबर 2026 को सायं 5:00 बजे',
    residences: 'अपने-अपने निवास पर',
    haldiAddr: '<b>वर पक्ष का निवास:</b> ई-35, रेलवे क्वार्टर, सिक्स बंगलो, इगतपुरी<br><b>वधू पक्ष का निवास:</b> सातपुर, नाशिक',
    groomDir: 'वर पक्ष के लिए दिशा-निर्देश', brideDir: 'वधू पक्ष के लिए दिशा-निर्देश',
    gcal: '📅 गूगल कैलेंडर',
    ceremony: 'विवाह समारोह',
    ceremonyWhen: 'बुधवार, 2 दिसंबर 2026 को सायं 6:00 बजे',
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
const currentSide = 'groom';
const NM = { en: { g: 'Anurag', b: 'Lakshmi' }, hi: { g: 'अनुराग', b: 'लक्ष्मी' } };
const pair = l => currentSide === 'bride' ? [NM[l].b, NM[l].g] : [NM[l].g, NM[l].b];
Object.assign(I18N.en, {
  names: () => { const [a, b] = pair('en'); return `${a} <span>&amp;</span> ${b}`; },
  names2: () => { const [a, b] = pair('en'); return `${a} &amp; ${b}`; },
  hash: () => currentSide === 'bride' ? '#Lak&amp;Anu' : '#Anu&amp;Lak',
  invite: () => { const [a, b] = pair('en'); return `${a} and ${b} joyfully invite you to share in their happiness and bless them as they begin their new journey together as husband and wife. Your presence and warm wishes will make these celebrations truly memorable for both families.`; },
  haldiAddr: () => {
    const g = "<b>Groom's Residence:</b> E-35, Railway Quarter, Six Banglow, Igatpuri";
    const b = "<b>Bride's Residence:</b> Satpur, Nashik";
    return currentSide === 'bride' ? b + '<br>' + g : g + '<br>' + b;
  }
});
Object.assign(I18N.hi, {
  names: () => { const [a, b] = pair('hi'); return `${a} <span>&amp;</span> ${b}`; },
  names2: () => { const [a, b] = pair('hi'); return `${a} &amp; ${b}`; },
  hash: () => currentSide === 'bride' ? '#Lak&amp;Anu' : '#Anu&amp;Lak',
  invite: () => { const [a, b] = pair('hi'); return `${a} और ${b} अपनी खुशियों में सहभागी बनने और पति-पत्नी के रूप में नए जीवन की शुरुआत पर उन्हें आशीर्वाद देने के लिए आपको हर्षपूर्वक आमंत्रित करते हैं। आपकी उपस्थिति और शुभकामनाएँ दोनों परिवारों के लिए इन उत्सवों को सचमुच यादगार बना देंगी।`; },
  haldiAddr: () => {
    const g = '<b>वर पक्ष का निवास:</b> ई-35, रेलवे क्वार्टर, सिक्स बंगलो, इगतपुरी';
    const b = '<b>वधू पक्ष का निवास:</b> सातपुर, नाशिक';
    return currentSide === 'bride' ? b + '<br>' + g : g + '<br>' + b;
  }
});
Object.assign(I18N.en, {
    skip: 'Skip — reveal the date',
    rsvpEyebrow: 'RSVP', rsvpTitle: 'Will You Join Us?', rsvpSub: 'Please let us know so we can plan',
    rsvpName: 'Your name', rsvpNameErr: 'Please enter your name',
    rsvpYes: 'Joyfully accept', rsvpNo: 'Regretfully decline',
    rsvpGuests: 'Number of guests', rsvpNote: 'A message for the couple (optional)',
    rsvpSend: '💬 Send RSVP on WhatsApp', rsvpHelp: 'Opens WhatsApp with your reply ready to send',
    rsvpMsgYes: (n, g, note) => `Hello! This is ${n}. I will be delighted to attend the wedding of Anurag & Lakshmi on 2 December 2026. Guests: ${g}.` + (note ? `\n\n${note}` : ''),
    rsvpMsgNo: (n, g, note) => `Hello! This is ${n}. I regret that I am unable to attend the wedding of Anurag & Lakshmi on 2 December 2026, but I send my love and blessings.` + (note ? `\n\n${note}` : '')
});
Object.assign(I18N.hi, {
    skip: 'छोड़ें — तिथि दिखाएँ',
    rsvpEyebrow: 'कृपया उत्तर दें', rsvpTitle: 'क्या आप हमारे साथ होंगे?', rsvpSub: 'कृपया हमें बताइए ताकि हम व्यवस्था कर सकें',
    rsvpName: 'आपका नाम', rsvpNameErr: 'कृपया अपना नाम लिखें',
    rsvpYes: 'सहर्ष स्वीकार', rsvpNo: 'खेद सहित असमर्थ',
    rsvpGuests: 'अतिथियों की संख्या', rsvpNote: 'वर-वधू के लिए संदेश (वैकल्पिक)',
    rsvpSend: '💬 व्हाट्सऐप पर उत्तर भेजें', rsvpHelp: 'व्हाट्सऐप में आपका उत्तर तैयार खुलेगा',
    rsvpMsgYes: (n, g, note) => `नमस्ते! मैं ${n} हूँ। मैं 2 दिसंबर 2026 को अनुराग और लक्ष्मी के विवाह में सहर्ष उपस्थित रहूँगा/रहूँगी। अतिथि: ${g}।` + (note ? `\n\n${note}` : ''),
    rsvpMsgNo: (n, g, note) => `नमस्ते! मैं ${n} हूँ। खेद है कि मैं 2 दिसंबर 2026 को अनुराग और लक्ष्मी के विवाह में उपस्थित नहीं हो पाऊँगा/पाऊँगी, परंतु मेरा प्रेम और आशीर्वाद आपके साथ है।` + (note ? `\n\n${note}` : '')
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
    title: 'Anurag & Lakshmi — Wedding Ceremony',
    start: '20261202T123000Z', end: '20261202T153000Z', // 18:00–21:00 IST
    location: 'Chandrabhaga Lawns, Trimbakeshwar Road, Nashik',
    details: 'Wedding ceremony of Anurag & Lakshmi.'
  },
  haldi: {
    title: 'Anurag & Lakshmi — Haldi & Mehdi',
    start: '20261201T113000Z', end: '20261201T143000Z', // 17:00–20:00 IST
    location: "Groom's: E-35, Railway Quarter, Six Banglow, Igatpuri | Bride's: Satpur, Nashik",
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
  let muted = false;
  try { muted = store.get('muted') === '1'; } catch (e) {}
  bgm.volume = 0.5;

  function paint() {
    const on = !bgm.paused && !muted;
    btn.textContent = muted ? '🔇' : '🔊';
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

/* ---------- RSVP via WhatsApp ---------- */
(function () {
  const WA = '918540999094';
  const form = document.getElementById('rsvpForm');
  const nameEl = document.getElementById('rsvpName');
  const err = document.getElementById('rsvpErr');
  const row = document.getElementById('guestsRow');
  const out = document.getElementById('gCount');
  let guests = 1;
  const paint = () => { out.textContent = guests; };
  document.getElementById('gMinus').addEventListener('click', () => { guests = Math.max(1, guests - 1); paint(); });
  document.getElementById('gPlus').addEventListener('click', () => { guests = Math.min(15, guests + 1); paint(); });
  form.querySelectorAll('input[name="att"]').forEach(r => r.addEventListener('change', () => {
    row.hidden = form.att.value === 'no';
  }));
  nameEl.addEventListener('input', () => { err.hidden = true; });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = nameEl.value.trim();
    if (!name) { err.hidden = false; nameEl.focus(); return; }
    const note = document.getElementById('rsvpNote').value.trim();
    const key = form.att.value === 'yes' ? 'rsvpMsgYes' : 'rsvpMsgNo';
    const text = t(key, name, guests, note);
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
  });
})();
