/* ═══════════════════════════════════════════════
   EduNusantara — script.js
   All interactive functionality for the portal
═══════════════════════════════════════════════ */

'use strict';

/* ── DATA ──────────────────────────────────────────────────────── */

const DATA = {
  sd: {
    color: 'var(--sd)',
    subjects: [
      { icon: '🔢', name: 'Matematika SD',       meta: 'Kelas 1–6 · Bilangan, Geometri, Pengukuran, Data' },
      { icon: '🔬', name: 'IPA SD',               meta: 'Kelas 1–6 · Makhluk Hidup, Benda, Energi, Bumi' },
      { icon: '🗺️', name: 'IPS SD',               meta: 'Kelas 1–6 · Lingkungan, Sejarah Lokal, Sosial' },
      { icon: '📝', name: 'Bahasa Indonesia SD',   meta: 'Kelas 1–6 · Membaca, Menulis, Menyimak, Berbicara' },
      { icon: '🌏', name: 'PKn SD',               meta: 'Kelas 1–6 · Pancasila, UUD, Kewarganegaraan' },
      { icon: '🙏', name: 'Pendidikan Agama',      meta: 'Kelas 1–6 · Islam, Kristen, Hindu, Buddha, Konghucu' },
      { icon: '🎨', name: 'SBdP (Seni Budaya)',    meta: 'Kelas 1–6 · Seni Rupa, Musik, Tari, Prakarya' },
      { icon: '⚽', name: 'PJOK SD',              meta: 'Kelas 1–6 · Olahraga, Gerak Dasar, Kesehatan' },
      { icon: '🇬🇧', name: 'Bahasa Inggris SD',   meta: 'Kelas 4–6 · Percakapan Dasar, Kosakata, Grammar' },
    ]
  },
  smp: {
    color: 'var(--smp)',
    subjects: [
      { icon: '📐', name: 'Matematika SMP',        meta: 'Kelas 7–9 · Aljabar, Geometri, Statistika, Peluang' },
      { icon: '⚗️', name: 'IPA Terpadu',           meta: 'Kelas 7–9 · Fisika, Kimia, Biologi Terintegrasi' },
      { icon: '🌏', name: 'IPS Terpadu',           meta: 'Kelas 7–9 · Geografi, Sejarah, Sosiologi, Ekonomi' },
      { icon: '📝', name: 'Bahasa Indonesia SMP',  meta: 'Kelas 7–9 · Teks, Sastra, Tata Bahasa, Menulis' },
      { icon: '🇬🇧', name: 'Bahasa Inggris SMP',  meta: 'Kelas 7–9 · Grammar, Reading, Writing, Speaking' },
      { icon: '🏛️', name: 'PPKn SMP',             meta: 'Kelas 7–9 · Konstitusi, HAM, Demokrasi, Norma' },
      { icon: '🎭', name: 'Seni Budaya SMP',       meta: 'Kelas 7–9 · Seni Rupa, Musik, Tari, Teater' },
      { icon: '💻', name: 'Informatika / TIK',     meta: 'Kelas 7–9 · Komputer, Internet, Coding Dasar' },
      { icon: '⚽', name: 'PJOK SMP',             meta: 'Kelas 7–9 · Olahraga, Atletik, Kesehatan' },
      { icon: '🌱', name: 'Prakarya SMP',          meta: 'Kelas 7–9 · Kerajinan, Rekayasa, Budidaya, Pengolahan' },
    ]
  },
  sma: {
    color: 'var(--sma)',
    subjects: [
      { icon: '📐', name: 'Matematika Wajib',       meta: 'Kelas 10–12 · Fungsi, Limit, Integral, Statistika' },
      { icon: '📊', name: 'Matematika Peminatan',   meta: 'Kelas 10–12 · Vektor, Matriks, Turunan Lanjut' },
      { icon: '⚡', name: 'Fisika',                meta: 'Kelas 10–12 · Mekanika, Termodinamika, Listrik, Optik' },
      { icon: '🧪', name: 'Kimia',                 meta: 'Kelas 10–12 · Atom, Ikatan, Reaksi, Kimia Organik' },
      { icon: '🌱', name: 'Biologi',               meta: 'Kelas 10–12 · Sel, Genetika, Evolusi, Ekosistem' },
      { icon: '💰', name: 'Ekonomi',               meta: 'Kelas 10–12 · Mikro, Makro, Akuntansi, Pasar' },
      { icon: '📜', name: 'Sejarah Indonesia',     meta: 'Kelas 10–12 · Prasejarah, Kolonial, Kemerdekaan' },
      { icon: '🌍', name: 'Geografi',              meta: 'Kelas 10–12 · Litosfer, Atmosfer, SIG, Geopolitik' },
      { icon: '👥', name: 'Sosiologi',             meta: 'Kelas 10–12 · Struktur Sosial, Perubahan, Konflik' },
      { icon: '🇬🇧', name: 'Bahasa Inggris SMA',  meta: 'Kelas 10–12 · Essay, Advanced Grammar, Speaking' },
      { icon: '📝', name: 'Bahasa Indonesia SMA',  meta: 'Kelas 10–12 · Karya Ilmiah, Sastra, Debat' },
      { icon: '🎨', name: 'Seni Budaya SMA',       meta: 'Kelas 10–12 · Apresiasi, Kreasi, Pertunjukan' },
      { icon: '🏛️', name: 'PPKn SMA',             meta: 'Kelas 10–12 · Hukum, Demokrasi, HAM, Globalisasi' },
      { icon: '🤝', name: 'Antropologi',           meta: 'Kelas 10–12 · Budaya, Bahasa Daerah, Tradisi' },
    ]
  },
  kul: {
    color: 'var(--kul)',
    subjects: [
      { icon: '💻', name: 'Informatika & TI',      meta: 'S1 · Algoritma, OOP, Database, Jaringan, AI/ML' },
      { icon: '⚙️', name: 'Teknik Mesin',          meta: 'S1 · Dinamika, Termodinamika, Material, Manufaktur' },
      { icon: '⚡', name: 'Teknik Elektro',        meta: 'S1 · Rangkaian, Sinyal, Kontrol, Elektronika' },
      { icon: '🏗️', name: 'Teknik Sipil',          meta: 'S1 · Struktur, Mekanika Tanah, Hidrolika, Jalan' },
      { icon: '🏭', name: 'Teknik Industri',       meta: 'S1 · Sistem Produksi, Riset Operasi, Ergonomi' },
      { icon: '🩺', name: 'Kedokteran',            meta: 'S1 · Anatomi, Fisiologi, Patologi, Farmakologi' },
      { icon: '⚖️', name: 'Ilmu Hukum',            meta: 'S1 · Perdata, Pidana, Tata Negara, Hukum Int.' },
      { icon: '📈', name: 'Ekonomi & Bisnis',      meta: 'S1 · Akuntansi, Manajemen, Keuangan, Pemasaran' },
      { icon: '🔭', name: 'MIPA',                  meta: 'S1 · Matematika, Fisika, Kimia, Biologi Murni' },
      { icon: '🧠', name: 'Psikologi',             meta: 'S1 · Kognitif, Klinis, Industri, Perkembangan' },
      { icon: '🏛️', name: 'Ilmu Sosial & Politik', meta: 'S1 · Sosiologi, Pemerintahan, Hubungan Internasional' },
      { icon: '📚', name: 'Pendidikan',            meta: 'S1 · Pedagogi, Kurikulum, Psikologi Pendidikan' },
      { icon: '🏥', name: 'Kesehatan Masyarakat',  meta: 'S1 · Epidemiologi, Gizi, K3, Promosi Kesehatan' },
      { icon: '🌾', name: 'Pertanian',             meta: 'S1 · Agronomi, Pemuliaan, Agroekologi, Kehutanan' },
      { icon: '🎬', name: 'Ilmu Komunikasi',       meta: 'S1 · Jurnalistik, Broadcast, PR, Media Digital' },
    ]
  }
};

/* ── MATERI CONTENT (in-page viewer) ──────────────────────────── */

const MATERI_CONTENT = {
  'Matematika SD': {
    intro: 'Fondasi matematika yang kuat dimulai dari bangku SD. Berikut ringkasan materi per kelas:',
    topics: [
      'Kelas 1 — Bilangan cacah 1–20, penjumlahan & pengurangan sederhana, pengenalan bentuk bangun datar',
      'Kelas 2 — Perkalian & pembagian dasar, satuan panjang, waktu, pengukuran berat',
      'Kelas 3 — Pecahan sederhana, keliling bangun datar, tabel dan diagram batang',
      'Kelas 4 — KPK & FPB, luas bangun datar, sudut, bilangan bulat negatif',
      'Kelas 5 — Desimal, persen, volume bangun ruang sederhana, koordinat titik',
      'Kelas 6 — Rasio & perbandingan, statistika dasar, operasi hitung campuran, persiapan ujian'
    ]
  },
  'Fisika': {
    intro: 'Fisika SMA membangun kemampuan analisis dan problem solving berbasis sains:',
    topics: [
      'Kelas 10 — Pengukuran & besaran, Kinematika (GLB & GLBB), Hukum Newton, Usaha & Energi',
      'Kelas 10 — Momentum & Impuls, Getaran Harmonis Sederhana, Elastisitas',
      'Kelas 11 — Fluida Statis & Dinamis, Suhu, Kalor & Perpindahan Kalor',
      'Kelas 11 — Termodinamika, Gas Ideal, Gelombang Mekanik, Gelombang Bunyi',
      'Kelas 12 — Listrik Statis (Coulomb, Kapasitor), Listrik Dinamis (Kirchhoff)',
      'Kelas 12 — Medan Magnet, Induksi Elektromagnetik, Fisika Inti & Radioaktivitas'
    ]
  },
  'Kimia': {
    intro: 'Kimia SMA mengeksplorasi materi dari skala atom hingga reaksi kompleks:',
    topics: [
      'Kelas 10 — Hakikat Ilmu Kimia, Struktur Atom, Sistem Periodik Unsur',
      'Kelas 10 — Ikatan Kimia, Tata Nama Senyawa, Stoikiometri',
      'Kelas 11 — Termokimia, Laju Reaksi, Kesetimbangan Kimia',
      'Kelas 11 — Larutan (Asam-Basa, Buffer, Hidrolisis, Ksp)',
      'Kelas 12 — Redoks & Elektrokimia, Koloid, Kimia Unsur',
      'Kelas 12 — Kimia Organik: Alkana, Alkena, Benzena, Polimer, Biomolekul'
    ]
  },
  'Informatika & TI': {
    intro: 'Kurikulum Informatika & Teknologi Informasi di perguruan tinggi mencakup:',
    topics: [
      'Semester 1–2 — Dasar Pemrograman (C++/Python), Kalkulus, Aljabar Linear, Logika Matematika',
      'Semester 3–4 — Struktur Data & Algoritma, Basis Data, Sistem Operasi, Jaringan Komputer',
      'Semester 5–6 — Rekayasa Perangkat Lunak, Keamanan Siber, Kecerdasan Buatan',
      'Semester 7–8 — Machine Learning, Big Data, Cloud Computing, Skripsi & Proyek Akhir'
    ]
  }
};

/* ── CHIPS GENERATOR ──────────────────────────────────────────── */

function buildChips() {
  Object.keys(DATA).forEach(key => {
    const container = document.getElementById('chips-' + key);
    if (!container) return;
    DATA[key].subjects.slice(0, 8).forEach(s => {
      const chip = document.createElement('span');
      chip.className = 'mapel-chip';
      chip.textContent = s.name.replace(/ (SD|SMP|SMA|Terpadu|Wajib|Peminatan)$/i, '').trim();
      container.appendChild(chip);
    });
  });
}

/* ── MODAL FUNCTIONS ──────────────────────────────────────────── */

function buildSubjectList(jenjang) {
  const list = document.getElementById('list-' + jenjang);
  if (!list || list.children.length > 0) return;
  const { subjects, color } = DATA[jenjang];

  subjects.forEach(s => {
    const item = document.createElement('div');
    item.className = 'subject-item';
    item.innerHTML = `
      <div class="subject-info">
        <div class="subject-icon">${s.icon}</div>
        <div>
          <div class="subject-name">${s.name}</div>
          <div class="subject-meta">${s.meta}</div>
        </div>
      </div>
      <div class="subject-btns">
        <button class="s-btn s-btn-view" data-name="${s.name}" data-meta="${s.meta}">👁 Lihat</button>
        <button class="s-btn s-btn-dl" style="background:${color}" data-name="${s.name}">⬇ Unduh</button>
      </div>`;

    item.querySelector('.s-btn-view').addEventListener('click', () => openViewer(s.name, s.meta));
    item.querySelector('.s-btn-dl').addEventListener('click', () => simulateDownload(s.name));
    list.appendChild(item);
  });
}

function openModal(jenjang) {
  buildSubjectList(jenjang);
  const overlay = document.getElementById('modal-' + jenjang);
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(jenjang) {
  const overlay = document.getElementById('modal-' + jenjang);
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(o => o.classList.remove('open'));
  document.body.style.overflow = '';
}

/* ── VIEWER ───────────────────────────────────────────────────── */

function openViewer(name, meta) {
  const titleEl = document.getElementById('viewer-title');
  const bodyEl  = document.getElementById('viewer-body');
  if (!titleEl || !bodyEl) return;

  titleEl.textContent = name;
  const content = MATERI_CONTENT[name];

  let html = '';
  if (content) {
    html += `<p style="color:var(--muted);font-size:.9rem;margin-bottom:20px;line-height:1.6">${content.intro}</p>`;
    html += '<div>';
    content.topics.forEach(t => {
      html += `<div class="viewer-topic">${t}</div>`;
    });
    html += '</div>';
  } else {
    html += `<p style="color:var(--muted);font-size:.9rem;margin-bottom:20px;line-height:1.6">${meta}</p>`;
  }

  html += `
    <div class="viewer-download-box">
      <div class="dbox-icon">📄</div>
      <h4>Materi Lengkap Tersedia</h4>
      <p>Unduh file PDF berisi materi lengkap, contoh soal, dan pembahasan untuk <strong style="color:var(--text)">${name}</strong></p>
      <button class="dbox-btn" id="viewerDownloadBtn">⬇ Unduh PDF — ${name}.pdf</button>
    </div>`;

  bodyEl.innerHTML = html;

  document.getElementById('viewerDownloadBtn').addEventListener('click', () => simulateDownload(name));
  document.getElementById('modal-viewer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── DOWNLOAD SIMULATION ──────────────────────────────────────── */

function simulateDownload(name) {
  const safeName = name.replace(/[^a-zA-Z0-9\s]/g, '').trim().replace(/\s+/g, '-');
  const text = [
    '============================================================',
    `  MATERI: ${name}`,
    `  EduNusantara — Portal Pendidikan Indonesia`,
    '============================================================',
    '',
    'Ini adalah simulasi file materi.',
    'Dalam implementasi produksi, file PDF lengkap berisi:',
    '  • Ringkasan teori setiap bab',
    '  • Contoh soal bertahap',
    '  • Pembahasan lengkap',
    '  • Soal latihan dan kunci jawaban',
    '',
    `File: ${safeName}.pdf`,
    `Diunduh: ${new Date().toLocaleString('id-ID')}`,
    '',
    '© 2025 EduNusantara · Gratis untuk semua pelajar Indonesia',
  ].join('\n');

  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = safeName + '.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(`📄 ${name}.pdf berhasil diunduh!`);
}

/* ── TOAST ────────────────────────────────────────────────────── */

let toastTimer = null;

function showToast(msg) {
  const toast   = document.getElementById('toast');
  const msgEl   = document.getElementById('toast-msg');
  if (!toast || !msgEl) return;

  msgEl.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

/* ── SEARCH ───────────────────────────────────────────────────── */

const ALL_SUBJECTS = Object.entries(DATA).flatMap(([key, val]) =>
  val.subjects.map(s => ({ ...s, jenjang: key.toUpperCase(), id: key, color: val.color }))
);

function doSearch(query) {
  const container = document.getElementById('search-results');
  if (!container) return;
  const q = query.toLowerCase().trim();

  if (!q) { container.innerHTML = ''; return; }

  const results = ALL_SUBJECTS.filter(s =>
    s.name.toLowerCase().includes(q) || s.meta.toLowerCase().includes(q)
  );

  if (!results.length) {
    container.innerHTML = '<p class="no-result">Tidak ditemukan. Coba kata kunci lain.</p>';
    return;
  }

  container.innerHTML = results.slice(0, 9).map(s => `
    <div class="result-chip" data-id="${s.id}" data-name="${s.name}" data-meta="${s.meta}" role="button">
      <span class="chip-dot" style="background:${s.color}"></span>
      ${s.icon} ${s.name}
      <span class="chip-tag" style="background:${s.color}">${s.jenjang}</span>
    </div>`).join('');

  container.querySelectorAll('.result-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      openModal(chip.dataset.id);
    });
  });
}

/* ── COUNTER ANIMATION ────────────────────────────────────────── */

function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    if (el.dataset.animated) return;
    el.dataset.animated = '1';
    const target  = +el.dataset.target;
    const isLarge = target >= 1000;
    const suffix  = target === 98 ? '%' : isLarge ? '+' : '';
    let current   = 0;
    const steps   = 64;
    const inc     = target / steps;
    const timer   = setInterval(() => {
      current = Math.min(current + inc, target);
      const display = isLarge
        ? Math.round(current).toLocaleString('id-ID')
        : Math.round(current);
      el.textContent = display + suffix;
      if (current >= target) clearInterval(timer);
    }, 22);
  });
}

/* ── SCROLL REVEAL ────────────────────────────────────────────── */

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

/* ── CUSTOM CURSOR ────────────────────────────────────────────── */

function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function loop() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
    ring.style.left   = rx + 'px';
    ring.style.top    = ry + 'px';
    requestAnimationFrame(loop);
  }
  loop();

  const hoverTargets = 'button, a, [data-jenjang], .mapel-chip, .result-chip, .tv-card, .feature-card, .jenjang-card';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) document.body.classList.add('hovering');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) document.body.classList.remove('hovering');
  });

  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; ring.style.opacity = '1'; });
}

/* ── NAVBAR ───────────────────────────────────────────────────── */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ── HAMBURGER ────────────────────────────────────────────────── */

function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    const spans = btn.querySelectorAll('span');
    if (menu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

window.closeMobile = function () {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('hamburger');
  if (menu) menu.classList.remove('open');
  if (btn) btn.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
};

/* ── CARD / BUTTON EVENT DELEGATION ──────────────────────────── */

function initCards() {
  // Jenjang cards
  document.querySelectorAll('.jenjang-card').forEach(card => {
    card.addEventListener('click', e => {
      const jenjang = card.dataset.jenjang;
      if (jenjang) openModal(jenjang);
    });
  });

  // View / Download buttons inside cards
  document.addEventListener('click', e => {
    const viewBtn = e.target.closest('.btn-view');
    const dlBtn   = e.target.closest('.btn-dl');

    if (viewBtn) {
      e.stopPropagation();
      const j = viewBtn.dataset.jenjang;
      if (j) openModal(j);
    }
    if (dlBtn) {
      e.stopPropagation();
      const j = dlBtn.dataset.jenjang;
      if (j) {
        const names = DATA[j].subjects.map(s => s.name).join(', ');
        simulateDownload('Paket Lengkap ' + j.toUpperCase() + ' (' + DATA[j].subjects.length + ' Mapel)');
      }
    }
  });
}

/* ── MODAL CLOSE ──────────────────────────────────────────────── */

function initModalClose() {
  // Close buttons [data-close]
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.close));
  });

  // Viewer close
  const closeViewer = document.getElementById('closeViewer');
  if (closeViewer) {
    closeViewer.addEventListener('click', () => {
      document.getElementById('modal-viewer').classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllModals();
  });
}

/* ── INIT ─────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // Build UI
  buildChips();

  // Observers
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  const statsBar = document.getElementById('statsBar');
  if (statsBar) statsObserver.observe(statsBar);

  // Interactions
  initCursor();
  initNavbar();
  initHamburger();
  initCards();
  initModalClose();

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => doSearch(e.target.value));
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape') { e.target.value = ''; doSearch(''); }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
