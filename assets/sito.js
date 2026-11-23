/* Rachele Stermieri — comportamenti comuni a tutte le pagine */
(function () {
  'use strict';

  /* Numero e messaggio WhatsApp: si cambiano solo qui */
  var WHATSAPP = '393492712137';
  var MESSAGGIO = 'Ciao Rachele, vorrei parlarti dei miei progetti.';
  document.querySelectorAll('[data-whatsapp]').forEach(function (a) {
    a.href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(MESSAGGIO);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  /* Testata: bordo quando si scorre */
  var testata = document.querySelector('.testata');
  function suScorrimento() { if (testata) testata.classList.toggle('scorsa', window.scrollY > 8); }
  window.addEventListener('scroll', suScorrimento, { passive: true });
  suScorrimento();

  /* Menu su telefono */
  var bottone = document.querySelector('.apri-menu');
  var menu = document.querySelector('.menu');
  if (bottone && menu) {
    bottone.addEventListener('click', function () {
      var aperto = menu.classList.toggle('aperto');
      document.body.classList.toggle('menu-aperto', aperto);
      bottone.setAttribute('aria-expanded', aperto);
    });
  }

  /* Tendina "Servizi" */
  document.querySelectorAll('.menu .con-tendina').forEach(function (voce) {
    var b = voce.querySelector('button.voce');
    var ampio = window.matchMedia('(min-width: 1061px)');
    function imposta(aperta) { voce.classList.toggle('aperto', aperta); b.setAttribute('aria-expanded', aperta); }
    b.addEventListener('click', function (e) { e.stopPropagation(); imposta(!voce.classList.contains('aperto')); });
    voce.addEventListener('mouseenter', function () { if (ampio.matches) imposta(true); });
    voce.addEventListener('mouseleave', function () { if (ampio.matches) imposta(false); });
    document.addEventListener('click', function (e) { if (ampio.matches && !voce.contains(e.target)) imposta(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { imposta(false); b.focus(); } });
  });

  /* Comparsa delicata degli elementi */
  var elementi = document.querySelectorAll('.compare');
  if ('IntersectionObserver' in window) {
    var osservatore = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('visto'); osservatore.unobserve(v.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    elementi.forEach(function (el) { osservatore.observe(el); });
  } else {
    elementi.forEach(function (el) { el.classList.add('visto'); });
  }

  /* Anno nel piè di pagina */
  document.querySelectorAll('[data-anno]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
