/* ============================================================
   GQMA Landing Page — Scripts
   ============================================================ */

(function () {
  'use strict';

  // --- Contact config ---
  function initContact() {
    var cfg = window.GQMA_CONFIG || {};
    if (cfg.email) {
      var el = document.getElementById('contact-email');
      el.href = 'mailto:' + cfg.email;
      el.style.display = '';
    }
    if (cfg.github) {
      var el2 = document.getElementById('contact-github');
      el2.href = cfg.github;
      el2.style.display = '';
    }
  }

  // --- Navigation scroll ---
  function initNav() {
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('nav-toggle');
    var links = nav.querySelector('.nav-links');

    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });

    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });

    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // --- Hero canvas — floating nodes ---
  function initCanvas() {
    var canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var particles = [];
    var count = 50;
    var mouse = { x: -1000, y: -1000 };

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    canvas.addEventListener('mousemove', function (e) {
      var r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    });
    canvas.addEventListener('mouseleave', function () {
      mouse.x = -1000; mouse.y = -1000;
    });

    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(224, 122, 58, 0.5)';
        ctx.fill();

        for (var j = i + 1; j < particles.length; j++) {
          var q = particles[j];
          var dx = p.x - q.x, dy = p.y - q.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(224, 122, 58,' + (0.12 * (1 - dist / 160)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        var mdx = p.x - mouse.x, mdy = p.y - mouse.y;
        var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 200) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = 'rgba(245, 166, 35,' + (0.25 * (1 - mdist / 200)) + ')';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      requestAnimationFrame(draw);
    }
    draw();
  }

  // --- Scroll reveal ---
  function initReveal() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in, .work-card, .approach-card, .highlight-card').forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Init ---
  document.addEventListener('DOMContentLoaded', function () {
    initContact();
    initNav();
    initCanvas();
    initReveal();
  });
})();
