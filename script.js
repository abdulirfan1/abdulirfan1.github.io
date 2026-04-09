/* ============================================================
   TERMINAL GREETING — typewriter cycling through languages
   ============================================================ */
(function () {
  const phrases = [
    'Hi, I\'m',                    // English
    'console.log("Hi, I\'m")',     // JavaScript
    'Hola, soy',                   // Spanish
    'print("Hi, I\'m")',           // Python
    'Bonjour, je suis',            // French
    'echo "Hi, I\'m"',             // Bash
    'مرحباً، أنا',                  // Arabic
    'printf("Hi, I\'m");',         // C
    'Ciao, sono',                  // Italian
    'puts "Hi, I\'m"',             // Ruby
    'ہیلو، میں',                   // Urdu
    'fmt.Println("Hi, I\'m")',     // Go
  ];

  const el = document.getElementById('greeting-text');
  const TYPE_MS = 65;   // ms per character typed
  const DEL_MS = 35;   // ms per character deleted
  const PAUSE = 1800; // ms to hold the full phrase
  const GAP = 400;  // ms pause after fully deleted

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      // Type forward
      charIndex++;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        // Fully typed — pause then start deleting
        deleting = true;
        setTimeout(tick, PAUSE);
        return;
      }
      setTimeout(tick, TYPE_MS);
    } else {
      // Delete backward
      charIndex--;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        // Fully deleted — move to next phrase
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, GAP);
        return;
      }
      setTimeout(tick, DEL_MS);
    }
  }

  // Kick off after a short initial delay
  setTimeout(tick, 600);
})();


/* ============================================================
   F1 CAR — top-down, roams the hero section freely
   ============================================================ */
(function () {
  const hero = document.getElementById('hero');
  const car = document.getElementById('f1-topdown');
  if (!hero || !car) return;

  const CAR_W = 132;
  const CAR_H = 56;
  const SPEED = 110;   // px/s
  const MARGIN = 80;    // edge avoidance zone (px)
  const MAX_AV = 95;    // max angular velocity (deg/s)

  let W, H;
  function resize() { W = hero.offsetWidth; H = hero.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);

  // Start near centre, random heading
  let x = W / 2;
  let y = H / 2;
  let angle = Math.random() * 360;
  let angVel = 0;
  let lastTime = null;

  function angleDiff(a, b) {
    let d = (b - a) % 360;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    return d;
  }

  function animate(ts) {
    if (!lastTime) { lastTime = ts; requestAnimationFrame(animate); return; }
    const dt = Math.min((ts - lastTime) / 1000, 0.05);
    lastTime = ts;

    // Random steering nudge
    angVel += (Math.random() - 0.5) * 160 * dt;

    // Edge avoidance — steer toward centre when inside the margin
    const toCenter = Math.atan2(H / 2 - y, W / 2 - x) * 180 / Math.PI;
    const proximity = 1 - Math.min(Math.min(x, W - x, y * 1.2, H - y) / MARGIN, 1);
    if (proximity > 0) {
      angVel += angleDiff(angle, toCenter) * proximity * 4 * dt;
    }

    // Clamp & dampen
    angVel = Math.max(-MAX_AV, Math.min(MAX_AV, angVel));
    angVel *= Math.pow(0.88, dt * 60);

    // Integrate position
    angle += angVel * dt;
    const rad = angle * Math.PI / 180;
    x += Math.cos(rad) * SPEED * dt;
    y += Math.sin(rad) * SPEED * dt;

    // Hard clamp
    x = Math.max(CAR_W / 2, Math.min(W - CAR_W / 2, x));
    y = Math.max(CAR_H / 2, Math.min(H - CAR_H / 2, y));

    car.style.left = (x - CAR_W / 2) + 'px';
    car.style.top = (y - CAR_H / 2) + 'px';
    car.style.transform = `rotate(${angle.toFixed(2)}deg)`;

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();


/* ============================================================
   HERO GLOW — radial gradient follows mouse
   ============================================================ */
(function () {
  const hero = document.getElementById('hero');

  let rafId = null;

  hero.addEventListener('mousemove', function (e) {
    if (rafId) return;
    rafId = requestAnimationFrame(function () {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty('--glow-x', x.toFixed(2) + '%');
      hero.style.setProperty('--glow-y', y.toFixed(2) + '%');
      rafId = null;
    });
  });

  // Reset to center when mouse leaves
  hero.addEventListener('mouseleave', function () {
    hero.style.setProperty('--glow-x', '50%');
    hero.style.setProperty('--glow-y', '35%');
  });
})();


/* ============================================================
   NAV — hamburger toggle + active link on scroll
   ============================================================ */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  // Hamburger open / close
  toggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked (mobile)
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Active link highlight on scroll
  const sections = document.querySelectorAll('main section[id]');

  function onScroll() {
    const scrollY = window.scrollY + 80;
    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          links.forEach(function (l) { l.classList.remove('active'); });
          link.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ============================================================
   CONTACT DROPDOWN
   ============================================================ */
(function () {
  const dropdown = document.querySelector('.contact-dropdown');
  if (!dropdown) return;

  const toggle = dropdown.querySelector('.contact-dropdown-toggle');

  // Toast
  const toast = document.createElement('div');
  toast.className = 'copy-toast';
  document.body.appendChild(toast);
  let toastTimer;

  function showToast(msg) {
    clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2000);
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const open = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Copy-to-clipboard buttons
  dropdown.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(btn.dataset.copy).then(function () {
        showToast(btn.dataset.label + ' copied to clipboard');
      });
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // Close on outside click
  document.addEventListener('click', function () {
    dropdown.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
})();


/* ============================================================
   PROJECT CARDS — click anywhere on card to open live demo
   ============================================================ */
(function () {
  document.querySelectorAll('.project-card[data-href]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      window.open(card.dataset.href, '_blank', 'noopener,noreferrer');
    });
  });
})();
