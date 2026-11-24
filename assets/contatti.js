/* Modulo contatti e calendario
   IMPOSTAZIONI — da completare quando sono pronti:
   - INDIRIZZO_MODULO: l'indirizzo di un servizio di invio moduli (ad esempio Formspree: https://formspree.io/f/xxxx).
     Finché è vuoto, la richiesta viene preparata come messaggio WhatsApp per Rachele.
   - CALENDARIO: l'indirizzo di un calendario di prenotazione (ad esempio Calendly). Finché è vuoto, la sezione resta nascosta. */
(function () {
  'use strict';
  var INDIRIZZO_MODULO = '';
  var CALENDARIO = '';
  var WHATSAPP = '393492712137';

  var modulo = document.getElementById('modulo-contatti');
  if (modulo) {
    var bottone = modulo.querySelector('button[type="submit"]');
    var esitoWhatsApp = modulo.querySelector('[data-esito-whatsapp]');
    if (INDIRIZZO_MODULO) {
      bottone.textContent = 'Invia la richiesta';
      document.getElementById('modulo-info').textContent = 'Ti ricontatterò per concordare il primo incontro.';
    }
    modulo.hidden = false;
    modulo.addEventListener('submit', function (e) {
      e.preventDefault();
      var valido = true;
      modulo.querySelectorAll('[required]').forEach(function (c) {
        var ok = c.type === 'checkbox' ? c.checked : c.value.trim() !== '' && c.checkValidity();
        c.setAttribute('aria-invalid', ok ? 'false' : 'true');
        if (!ok && valido) { c.focus(); valido = false; }
      });
      if (!valido) { modulo.reportValidity(); return; }

      var dati = new FormData(modulo);
      var mostraGrazie = function () {
        modulo.querySelector('.campi').style.display = 'none';
        modulo.querySelector('.esito').style.display = 'block';
      };

      if (INDIRIZZO_MODULO) {
        bottone.disabled = true;
        fetch(INDIRIZZO_MODULO, { method: 'POST', body: dati, headers: { Accept: 'application/json' } })
          .then(function (r) { if (!r.ok) throw new Error(); mostraGrazie(); })
          .catch(function () { bottone.disabled = false; alert('Non è stato possibile inviare la richiesta. Riprova oppure scrivimi su WhatsApp.'); });
        return;
      }

      var testo = 'Ciao Rachele, sono ' + dati.get('nome') + ' ' + dati.get('cognome') + '.\n\n' + dati.get('esigenza') +
        '\n\nEmail: ' + dati.get('email') + (dati.get('telefono') ? '\nTelefono: ' + dati.get('telefono') : '');
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(testo), '_blank', 'noopener');
      esitoWhatsApp.textContent = 'Per completare la richiesta, invia il messaggio in WhatsApp.';
    });
  }

  if (CALENDARIO) {
    var box = document.getElementById('calendario');
    box.style.display = 'block';
    document.getElementById('calendario-contenuto').innerHTML =
      '<iframe src="' + CALENDARIO + '" title="Prenota un incontro" style="width:100%;height:720px;border:1px solid #DDE6EF;border-radius:16px;background:#fff" loading="lazy"></iframe>';
  }
})();
