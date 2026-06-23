/* ============================================================
   Starseek Navigation - Main JavaScript
   星索导航科技 - 主逻辑脚本
   ============================================================ */

(function () {
  'use strict';

  // --- Detect current language from path ---
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const currentLang = pathParts[0] === 'zh' || pathParts[0] === 'en' ? pathParts[0] : 'zh';
  const t = I18N[currentLang] || I18N['zh'];

  // --- Determine relative path prefix ---
  const langPrefix = '/' + currentLang;

  // --- Detect active page ---
  function getActivePage() {
    const path = window.location.pathname;
    if (path.includes('/products')) return 'products';
    if (path.includes('/solutions')) return 'solutions';
    if (path.includes('/about')) return 'about';
    if (path.includes('/contact')) return 'contact';
    return 'home';
  }
  const activePage = getActivePage();

  // --- Inject Navigation Bar ---
  function renderNavbar() {
    const navHTML = `
      <nav class="navbar">
        <div class="container">
          <a href="${langPrefix}/" class="nav-logo">
            <img src="../images/logo.png" alt="${t.siteName}" height="36" onerror="this.style.display='none'">
            <span>${t.siteName}</span>
          </a>
          <ul class="nav-links" id="navLinks">
            <li><a href="${langPrefix}/" class="${activePage === 'home' ? 'active' : ''}">${t.navHome}</a></li>
            <li><a href="${langPrefix}/products.html" class="${activePage === 'products' ? 'active' : ''}">${t.navProducts}</a></li>
            <li><a href="${langPrefix}/solutions.html" class="${activePage === 'solutions' ? 'active' : ''}">${t.navSolutions}</a></li>
            <li><a href="${langPrefix}/about.html" class="${activePage === 'about' ? 'active' : ''}">${t.navAbout}</a></li>
            <li><a href="${langPrefix}/contact.html" class="${activePage === 'contact' ? 'active' : ''}">${t.navContact}</a></li>
          </ul>
          <div style="display:flex;align-items:center;gap:12px;">
            <div class="lang-switch">
              <button class="${currentLang === 'zh' ? 'active' : ''}" onclick="switchLang('zh')" aria-label="中文">中</button>
              <button class="${currentLang === 'en' ? 'active' : ''}" onclick="switchLang('en')" aria-label="English">EN</button>
            </div>
            <button class="nav-toggle" id="navToggle" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML + '<div id="bannerSlider" class="banner-slider"></div>');

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
      // Close on link click
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
      });
    }
  }

  // --- Language Switch ---
  window.switchLang = function (lang) {
    const path = window.location.pathname;
    // Replace language prefix in path
    const parts = path.split('/').filter(Boolean);
    if (parts[0] === 'zh' || parts[0] === 'en') {
      parts[0] = lang;
    } else {
      parts.unshift(lang);
    }
    window.location.href = '/' + parts.join('/') + window.location.search;
  };

  // --- Inject Footer ---
  function renderFooter() {
    const footerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="${langPrefix}/" class="nav-logo">
                <span>${t.siteName}</span>
              </a>
              <p>${t.footerDesc}</p>
            </div>
            <div class="footer-col">
              <h4>${t.footerProducts}</h4>
              <ul>
                <li><a href="${langPrefix}/products.html">${currentLang === 'zh' ? 'GNSS抗干扰单元' : 'GNSS Anti-Jamming Units'}</a></li>
                <li><a href="${langPrefix}/products.html">${currentLang === 'zh' ? '侦测反制设备' : 'Detection & Countermeasure'}</a></li>
                <li><a href="${langPrefix}/products.html">${currentLang === 'zh' ? '低空防护系统' : 'Low-Altitude Protection'}</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>${t.footerSolutions}</h4>
              <ul>
                <li><a href="${langPrefix}/solutions.html">${currentLang === 'zh' ? '机场安全保障' : 'Airport Security'}</a></li>
                <li><a href="${langPrefix}/solutions.html">${currentLang === 'zh' ? '基础设施防护' : 'Infrastructure Protection'}</a></li>
                <li><a href="${langPrefix}/solutions.html">${currentLang === 'zh' ? '军事要地防护' : 'Military Site Protection'}</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>${t.footerAbout}</h4>
              <ul>
                <li><a href="${langPrefix}/about.html">${t.navAbout}</a></li>
                <li><a href="${langPrefix}/contact.html">${t.navContact}</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>${t.footerRights}</p>
          </div>
        </div>
      </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // --- Scroll Reveal ---
  function initScrollReveal() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // --- Navbar scroll effect ---
  function initNavScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 23, 0.95)';
        navbar.style.boxShadow = '0 1px 20px rgba(0,0,0,0.3)';
      } else {
        navbar.style.background = 'rgba(10, 14, 23, 0.85)';
        navbar.style.boxShadow = 'none';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // --- Product Filter (global onclick handler) ---
  window.filterProducts = function(filter, btn) {
    var tabs = document.querySelectorAll('.category-tab');
    var cards = document.querySelectorAll('[data-category]');
    tabs.forEach(function(t) { t.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    cards.forEach(function(card) {
      var link = card.parentElement;
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = '';
        if (link && link.classList.contains('product-card-link')) link.style.display = '';
      } else {
        card.style.display = 'none';
        if (link && link.classList.contains('product-card-link')) link.style.display = 'none';
      }
    });
  };

  // --- Product Category Tabs ---
  function initCategoryTabs() {
    var tabs = document.querySelectorAll('.category-tab');
    var cards = document.querySelectorAll('[data-category]');

    if (!tabs.length || !cards.length) return;

    function applyFilter(filter) {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      var activeTab = document.querySelector('.category-tab[data-filter="' + filter + '"]');
      if (activeTab) activeTab.classList.add('active');

      cards.forEach(function(card) {
        var link = card.parentElement;
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.removeAttribute('hidden');
          card.style.cssText = '';
          if (link && link.classList.contains('product-card-link')) {
            link.removeAttribute('hidden');
            link.style.cssText = '';
          }
        } else {
          card.setAttribute('hidden', '');
          card.style.cssText = 'display:none !important';
          if (link && link.classList.contains('product-card-link')) {
            link.setAttribute('hidden', '');
            link.style.cssText = 'display:none !important';
          }
        }
      });
    }

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        applyFilter(tab.getAttribute('data-filter'));
      });
    });

    // Check URL parameter on load
    var params = new URLSearchParams(window.location.search);
    var catParam = params.get('category');
    if (catParam && document.querySelector('.category-tab[data-filter="' + catParam + '"]')) {
      applyFilter(catParam);
    }
  }

  // --- Contact Form ---
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // Check for success redirect
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sent') === '1') {
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = currentLang === 'zh' ? '✓ 已发送' : '✓ Sent';
        btn.classList.add('btn-accent');
        btn.disabled = true;
      }
    }

    form.addEventListener('submit', () => {
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = currentLang === 'zh' ? '发送中...' : 'Sending...';
      btn.disabled = true;
    });
  }

  // --- Page-Specific Title Injection ---
  function setPageMeta() {
    const pageTitles = {
      home: t.siteTagline + ' - ' + t.siteNameFull,
      products: t.navProducts + ' - ' + t.siteNameFull,
      solutions: t.navSolutions + ' - ' + t.siteNameFull,
      about: t.navAbout + ' - ' + t.siteNameFull,
      contact: t.navContact + ' - ' + t.siteNameFull,
    };
    if (pageTitles[activePage]) {
      document.title = pageTitles[activePage];
    }
  }

  // --- Banner Slider ---
  function initBannerSlider() {
    const bannerContainer = document.getElementById('bannerSlider');
    if (!bannerContainer) return;

    const imgBase = langPrefix.replace(/\/$/, '') + '/../images/products/';
    const slidesData = [
      { img: imgBase + 'XS-AJ-08-L1-S130_best2.png', title: currentLang === 'zh' ? 'GNSS抗干扰单元' : 'GNSS Anti-Jamming Units', desc: currentLang === 'zh' ? '微型4阵元到旗舰双16阵元，覆盖全频段全星座，有效对抗宽带/窄带/扫频/脉冲干扰' : 'From miniature 4-element to flagship dual 16-element, covering all bands and constellations', link: langPrefix + '/products.html?category=antenna', linkText: currentLang === 'zh' ? '了解产品 →' : 'View Products →' },
      { img: imgBase + 'XS-AJ-16-L1-S200_best4.png', title: currentLang === 'zh' ? '无人机侦测反制' : 'Drone Detection & Countermeasure', desc: currentLang === 'zh' ? '雷达+无线电+光电多模侦测，定向干扰与导航欺骗反制，全天候低空安防' : 'Radar + Radio + EO multi-mode detection, directional jamming and navigation spoofing countermeasure', link: langPrefix + '/products.html?category=detection', linkText: currentLang === 'zh' ? '了解方案 →' : 'View Solutions →' },
      { img: imgBase + 'XS-AJ-D16-L1L2-S300_best2.png', title: currentLang === 'zh' ? '低空防护系统' : 'Low-Altitude Protection Systems', desc: currentLang === 'zh' ? '固定式+移动式一体化低空防护，多站点组网协同，7×24自动值守' : 'Fixed + mobile integrated low-altitude protection, multi-site networking, 24/7 autonomous operation', link: langPrefix + '/products.html?category=protection', linkText: currentLang === 'zh' ? '了解系统 →' : 'View Systems →' },
    ];

    let currentSlide = 0;
    let interval;

    function buildHTML() {
      let slidesHTML = '';
      let dotsHTML = '';
      slidesData.forEach((s, i) => {
        slidesHTML += `<div class="banner-slide${i === 0 ? ' active' : ''}">
          <img src="${s.img}" alt="${s.title}" onerror="this.style.opacity='0'">
          <div class="banner-slide-content">
            <h2>${s.title}</h2>
            <p>${s.desc}</p>
            <a href="${s.link}" class="btn btn-primary btn-lg">${s.linkText}</a>
          </div>
        </div>`;
        dotsHTML += `<button class="banner-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="${currentLang === 'zh' ? '第'+(i+1)+'张' : 'Slide '+(i+1)}"></button>`;
      });
      return `<div class="banner-slider-inner">${slidesHTML}</div>
        <button class="banner-arrow prev" aria-label="${currentLang === 'zh' ? '上一张' : 'Previous'}">◀</button>
        <button class="banner-arrow next" aria-label="${currentLang === 'zh' ? '下一张' : 'Next'}">▶</button>
        <div class="banner-nav">${dotsHTML}</div>`;
    }

    bannerContainer.innerHTML = buildHTML();

    const slides = bannerContainer.querySelectorAll('.banner-slide');
    const dots = bannerContainer.querySelectorAll('.banner-dot');

    function goTo(n) {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    function next() { goTo(currentSlide + 1); }
    function prev() { goTo(currentSlide - 1); }

    bannerContainer.querySelector('.banner-arrow.next').addEventListener('click', () => { next(); resetTimer(); });
    bannerContainer.querySelector('.banner-arrow.prev').addEventListener('click', () => { prev(); resetTimer(); });
    dots.forEach(d => d.addEventListener('click', () => { goTo(parseInt(d.dataset.index)); resetTimer(); }));

    function resetTimer() { clearInterval(interval); interval = setInterval(next, 5000); }
    interval = setInterval(next, 5000);
  }

  // --- Counter Animation for Stats ---
  function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    if (!statValues.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statValues.forEach(el => observer.observe(el));
  }

  // --- Initialize ---
  document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
    setPageMeta();
    initScrollReveal();
    initNavScroll();
    initCategoryTabs();
    initContactForm();
    initBannerSlider();
    animateStats();
  });

})();
