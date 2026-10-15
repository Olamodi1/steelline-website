/* Steelline — motion enhancements (scroll progress, header state, card tilt).
   Additive to script.js; respects prefers-reduced-motion. */
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var bar = document.querySelector('.scroll-progress');
  var header = document.querySelector('.site-header');
  var doc = document.documentElement;

  function onScroll() {
    var scrolled = doc.scrollTop || document.body.scrollTop;
    var max = doc.scrollHeight - doc.clientHeight;
    if (bar) bar.style.width = (max > 0 ? (scrolled / max) * 100 : 0) + '%';
    if (header) header.classList.toggle('scrolled', scrolled > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (reduceMotion) return;

  // Subtle 3D tilt toward the cursor on cards.
  var cards = document.querySelectorAll('.service-card, .process-card, .stat-card');
  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform =
        'translateY(-6px) rotateX(' + (-py * 4).toFixed(2) + 'deg) rotateY(' + (px * 5).toFixed(2) + 'deg)';
    });
    card.addEventListener('mouseleave', function () { card.style.transform = ''; });
  });
})();
