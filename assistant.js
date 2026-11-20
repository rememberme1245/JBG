/* JBG Assistant — pre-text generated Q&A widget (no backend, no AI API).
   Injects a floating chat bubble bottom-right on every page. */
(function () {
  'use strict';
  if (location.search.indexOf('shot=1') !== -1) return; // keep screenshots clean

  var QA = [
    { q: 'JBG Air price?', k: ['air price', 'price of air', 'air cost', 'how much air', 'air laptop price', 'jbg air price', 'air $'],
      a: 'JBG Air starts at <b>US$1,999</b> (proposed, 256 GB) — a 15-inch display in a ~1.05 cm ultra-thin chassis. See <a href="air-specifications.html">Air specs</a>.' },
    { q: 'JBG Pro price?', k: ['pro price', 'price of pro', 'pro cost', 'how much pro', 'jbg pro price', 'pro $', 'pro laptop price'],
      a: 'JBG Pro starts at <b>US$2,499</b> (proposed, 256 GB) — 16-inch, 24-core, 1.40 cm thin. See <a href="pro-specifications.html">Pro specs</a>.' },
    { q: 'JBG Play price?', k: ['play price', 'price of play', 'play cost', 'how much play', 'handheld price', 'gaming handheld price'],
      a: 'JBG Play starts at <b>US$2,199</b> (proposed, 256 GB) — Steam-Deck-style handheld, 20% thinner, elastomer grips. See <a href="play-specifications.html">Play specs</a>.' },
    { q: 'JBG Tone price?', k: ['tone price', 'earphone price', 'earbuds price', 'headphone', 'how much tone'],
      a: 'JBG Tone is <b>US$299</b> (proposed) — wired + wireless ANC earphones with a detachable braided 3.5 mm AUX cable. See <a href="tone-specifications.html">Tone specs</a>.' },
    { q: 'JBG Feather price?', k: ['feather price', 'mouse price', 'how much feather', 'gaming mouse'],
      a: 'JBG Feather is <b>US$149</b> (proposed) — a ~20 g ultralight precision mouse with 8K wireless. See <a href="feather-specifications.html">Feather specs</a>.' },
    { q: 'JBG Vista price?', k: ['vista price', 'monitor price', 'portable monitor', 'display price', 'how much vista'],
      a: 'JBG Vista is <b>US$449</b> (proposed) — a 16-inch portable display, 0.7-inch thin, protective case included. See <a href="vista-specifications.html">Vista specs</a>.' },
    { q: 'All prices / cheapest?', k: ['price', 'prices', 'cost', 'how much', 'cheapest', 'most expensive', 'pricing', 'pricing list', 'range'],
      a: 'Proposed USD prices: Air <b>$1,999</b> · Pro <b>$2,499</b> · Play <b>$2,199</b> · Tone <b>$299</b> · Feather <b>$149</b> · Vista <b>$449</b>. Feather is the most affordable; Pro is the flagship. Full lineup on <a href="products.html">Products</a>.' },
    { q: 'Air vs Pro differences?', k: ['air vs pro', 'air or pro', 'difference', 'compare', 'which laptop', 'pro vs air', 'better laptop'],
      a: 'Air = 15-inch, ~1.05 cm, built for mobility. Pro = 16-inch, 1.40 cm, 24-core workstation — only +33.4% thicker (vs Apple\'s +46.7% Air-to-Pro jump), ~55% quicker on heavy loads. Use the <a href="compare.html">comparison table</a> — the header dropdowns let you compare any two JBG devices.' },
    { q: 'Air specs / how thin?', k: ['air spec', 'air thin', 'air size', 'air screen', 'air inch', 'air cm', 'air mm', 'air weight', 'air core'],
      a: 'JBG Air targets a 15-inch display in a ~1.05 cm (10.5 mm) CNC aluminium chassis, 12-core, NVMe Gen4 storage. Details on <a href="air-specifications.html">Air specs</a>.' },
    { q: 'Pro specs / screen size?', k: ['pro spec', 'pro thin', 'pro size', 'pro screen', 'pro inch', 'pro cm', 'pro core', '24 core', 'workstation'],
      a: 'JBG Pro targets a 16-inch 24-core hybrid workstation at 1.40 cm thin, NVMe Gen4 storage, ≥20% more RAM than Air. Details on <a href="pro-specifications.html">Pro specs</a>.' },
    { q: 'Finishes / colours?', k: ['finish', 'colour', 'color', 'silver', 'midnight', 'starlight', 'ultramarine', 'crimson', 'titanium', 'sky blue', 'options'],
      a: 'Air: Midnight, Starlight, Silver, Sky Blue. Pro: Space Black, Silver, Natural Titanium. Play: Midnight, Ultramarine, Crimson, <b>Silver</b>. Tone: Midnight, Ivory, Titanium. Pick finishes on the <a href="purchase.html">Purchase page</a>.' },
    { q: 'Storage upgrades?', k: ['storage', 'ssd', 'gb', 'tb', '256', '512', '1tb', '2tb', 'capacity', 'memory', 'upgrade'],
      a: 'NVMe Gen4 options: 256 GB included · 512 GB <b>+US$80</b> · 1 TB <b>+US$180</b> · 2 TB <b>+US$380</b> (proposed). Choose during configuration on <a href="purchase.html">Purchase</a>.' },
    { q: 'External water cooler?', k: ['cooler', 'water cooler', 'cooling', 'liquid', 'overclock', '5.8', '6.1', 'ghz', 'boost', 'dock'],
      a: 'The Tempered-Glass External Water Cooler is a <b>+US$100</b> Play add-on (Step 04 on <a href="purchase.html">Purchase</a>): visible coolant loop, radiator + dual exhaust fans, quick-disconnect hoses — unlocking proposed 5.8–6.1 GHz CPU and GPU overclocking when connected.' },
    { q: 'JBG Play specs?', k: ['play spec', 'handheld spec', 'play grip', 'elastomer', 'steam deck', 'play cpu', 'play gpu', 'handheld'],
      a: 'JBG Play targets an 8-core / 12–16 CU handheld, 20% thinner than common handhelds, High-Density Textured Elastomer grips for strain-free long sessions, dual trackpads, and the optional water cooler for 5.8–6.1 GHz + GPU OC. See <a href="play-specifications.html">Play specs</a>.' },
    { q: 'Tone wired or wireless?', k: ['tone', 'aux', 'wired', 'wireless', 'bluetooth', 'anc', 'noise', 'earphone', 'cable', '3.5'],
      a: 'Both. JBG Tone is wireless ANC (up to 99% ambient reduction target) plus a detachable braided 3.5 mm TRRS AUX cable for zero-latency wired use — cable included in the box. See <a href="tone-specifications.html">Tone specs</a>.' },
    { q: 'How do I order?', k: ['order', 'buy', 'purchase', 'checkout', 'how to get', 'enquire', 'reserve'],
      a: 'Configure on <a href="purchase.html">Purchase</a> → Add to Cart → in <a href="cart.html">Cart</a> verify a partner-bank card → it hands off to the Contact form with a "Product Purchase" enquiry — name + email and it\'s sent. No payment is taken; it\'s a reservation enquiry.' },
    { q: 'Bank card / allocation?', k: ['bank', 'card', 'verify', 'verification', 'allocation', 'bin', 'credit', 'dbs', 'ocbc', 'uob', 'hsbc', 'citibank', 'stanchart', 'standard chartered'],
      a: 'Cart asks for your card number first — the starting digits identify the issuing bank (real Singapore BIN table + Luhn check) — then you select your partner bank to cross-verify. Verified → continue to purchase enquiry. The number never leaves your browser.' },
    { q: 'Warranty?', k: ['warranty', 'guarantee', 'care', 'support coverage', 'repair'],
      a: 'Every JBG product carries a proposed 2-year JBG Care coverage — details are listed in each product\'s order summary on <a href="purchase.html">Purchase</a>.' },
    { q: 'Returns / refunds?', k: ['return', 'refund', 'cancel', 'exchange', 'money back'],
      a: 'No payment is taken — it\'s a reservation enquiry only, so there\'s nothing to refund. For anything post-purchase, contact the team via <a href="contactus.html">Contact Us</a>.' },
    { q: 'Shipping / availability?', k: ['ship', 'shipping', 'delivery', 'deliver', 'when', 'available', 'availability', 'stock', 'release', 'launch', 'date', 'preorder', 'pre-order'],
      a: 'JBG is a development-stage concept — specs and prices are proposed targets, not confirmed retail. Submitting a purchase enquiry registers interest; the team follows up by email. Ask <a href="contactus.html">Contact Us</a> for timelines.' },
    { q: 'Is this real?', k: ['real', 'legit', 'fake', 'scam', 'actual product', 'exist', 'concept', 'prototype'],
      a: 'Honest answer: JBG is a <b>product concept / prototype project</b> — the site, renders and flows are a working demonstration. Specifications are proposed development targets, not shipping products.' },
    { q: 'Discounts / student?', k: ['discount', 'student', 'promo', 'coupon', 'deal', 'offer', 'cheap', 'sale'],
      a: 'No discount codes — proposed pricing only. For promotions or student pricing, raise it with the team via <a href="contactus.html">Contact Us</a>.' },
    { q: 'Contact details?', k: ['contact', 'email', 'phone', 'call', 'reach', 'human', 'talk', 'support', 'help', 'enquiry', 'enquire'],
      a: 'Email <a href="mailto:jbgenquires@gmail.com">jbgenquires@gmail.com</a> or call +65 9182 2228 (Mon–Fri 09:00–18:00 SGT). Or use the <a href="contactus.html">Contact form</a> — it emails the team directly.' },
    { q: 'Where is JBG?', k: ['where', 'location', 'singapore', 'hq', 'headquarters', 'country', 'based', 'address'],
      a: 'JBG Headquarters, Singapore (placeholder location on the site footer). The team is reachable at <a href="mailto:jbgenquires@gmail.com">jbgenquires@gmail.com</a> / +65 9182 2228.' },
    { q: 'What is JBG?', k: ['what is jbg', 'who is jbg', 'about jbg', 'jovan', 'company', 'brand', 'who are you'],
      a: 'Jovan Basic Gizmo (JBG) is a portable-computing concept — ultra-thin liquid-cooled laptops, handheld gaming, and precision accessories under "Power Without Boundaries". More on <a href="aboutus.html">About Us</a>.' },
    { q: 'Battery life?', k: ['battery', 'battery life', 'hours', 'charge', 'charging', 'usb-c', 'usbc'],
      a: 'Battery figures are proposed development targets and differ per product — check the spec tables on each product page (e.g. <a href="air-specifications.html">Air</a>, <a href="play-specifications.html">Play</a>, <a href="tone-specifications.html">Tone</a>).' },
    { q: 'Gaming performance?', k: ['game', 'gaming', 'fps', 'performance', 'gpu', 'cpu speed', 'fast', 'benchmark'],
      a: 'JBG Play targets 8-core / 12–16 CU portable performance; the +US$100 water cooler unlocks proposed 5.8–6.1 GHz CPU boost + GPU overclocking. Pro laptop targets ~55% faster heavy-workload performance vs typical premium laptops. All proposed — see <a href="technology.html">Technology</a>.' },
    { q: 'What\'s in the box?', k: ['box', 'included', 'in the box', 'accessories', 'comes with', 'package'],
      a: 'Each product\'s "In the Box" list is on its spec page and shown during configuration on <a href="purchase.html">Purchase</a> — e.g. Tone ships with earphones, charging case, braided 3.5 mm AUX wire, ear tips + USB-C lead.' }
  ];

  var GREETING = 'Hi — I\'m the JBG assistant. Ask me about products, pricing, finishes, ordering or card verification — or tap a question below.';
  var FALLBACK = 'I\'m a pre-scripted assistant and don\'t have that one yet — try a question below, or ask the team directly at <a href="contactus.html">Contact Us</a> / <a href="mailto:jbgenquires@gmail.com">jbgenquires@gmail.com</a>.';
  var CHIPS = ['JBG Air price?', 'Air vs Pro?', 'External water cooler?', 'How do I order?', 'Finishes / colours?', 'Is this real?'];

  // ---------- build DOM ----------
  var fab = document.createElement('button');
  fab.className = 'jbg-chat-fab';
  fab.setAttribute('aria-label', 'Open JBG assistant chat');
  fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';

  var panel = document.createElement('div');
  panel.className = 'jbg-chat-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'JBG assistant');
  panel.innerHTML =
    '<div class="jbg-chat-head"><div><div class="chat-title">JBG Assistant</div><span class="chat-eyebrow">Pre-scripted answers · instant</span></div>' +
    '<button class="jbg-chat-close" aria-label="Close chat">×</button></div>' +
    '<div class="jbg-chat-msgs" role="log" aria-live="polite"></div>' +
    '<div class="jbg-chat-chips"></div>' +
    '<form class="jbg-chat-form"><input type="text" placeholder="Ask about JBG…" autocomplete="off" aria-label="Ask the JBG assistant">' +
    '<button type="submit" class="jbg-chat-send" aria-label="Send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></button></form>';

  document.body.appendChild(fab);
  document.body.appendChild(panel);

  var msgs = panel.querySelector('.jbg-chat-msgs');
  var chips = panel.querySelector('.jbg-chat-chips');
  var form = panel.querySelector('.jbg-chat-form');
  var input = form.querySelector('input');
  var greeted = false;

  function addMsg(html, who) {
    var d = document.createElement('div');
    d.className = 'jbg-chat-msg ' + who;
    d.innerHTML = html;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function renderChips() {
    chips.innerHTML = '';
    CHIPS.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'jbg-chat-chip';
      b.textContent = c;
      b.addEventListener('click', function () { ask(c); });
      chips.appendChild(b);
    });
  }

  function answerFor(text) {
    var t = ' ' + text.toLowerCase().replace(/[^a-z0-9$.%\s]/g, ' ') + ' ';
    var best = null, bestScore = 0;
    QA.forEach(function (qa) {
      var score = 0;
      qa.k.forEach(function (kw) { if (t.indexOf(kw) !== -1) score += kw.length; });
      // individual word match for longer keyword tails
      qa.q.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(' ').forEach(function (w) {
        if (w.length > 3 && t.indexOf(' ' + w) !== -1) score += w.length * 0.5;
      });
      if (score > bestScore) { bestScore = score; best = qa; }
    });
    return bestScore >= 3 ? best.a : FALLBACK;
  }

  function ask(text) {
    var clean = text.trim();
    if (!clean) return;
    addMsg(clean.replace(/</g, '&lt;'), 'user');
    if (/^(hi|hello|hey|yo|sup|good (morning|afternoon|evening))[\s!?.]*$/i.test(clean)) {
      addMsg('Hello! What would you like to know — prices, specs, finishes, or how ordering works?', 'bot');
      return;
    }
    if (/thank|thanks|thx/i.test(clean) && clean.length < 30) {
      addMsg('Anytime — anything else about the JBG lineup?', 'bot');
      return;
    }
    addMsg(answerFor(clean), 'bot');
  }

  function open() {
    panel.classList.add('open');
    if (!greeted) {
      greeted = true;
      addMsg(GREETING, 'bot');
      renderChips();
    }
    setTimeout(function () { input.focus(); }, 240);
  }

  fab.addEventListener('click', function () {
    panel.classList.contains('open') ? panel.classList.remove('open') : open();
  });
  panel.querySelector('.jbg-chat-close').addEventListener('click', function () {
    panel.classList.remove('open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') panel.classList.remove('open');
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    ask(input.value);
    input.value = '';
    input.focus();
  });
})();
