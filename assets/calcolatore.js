/* Calcolatore del piano di accumulo
   - capitalizzazione mensile: tasso mensile = rendimento annuo / 12
   - versamenti a fine mese: ogni mese prima matura l'interesse, poi si aggiunge il versamento */
(function () {
  'use strict';
  var modulo = document.getElementById('calc');
  if (!modulo) return;

  var campi = {
    iniziale: document.getElementById('c-iniziale'),
    mensile: document.getElementById('c-mensile'),
    rendimento: document.getElementById('c-rendimento'),
    anni: document.getElementById('c-anni')
  };
  /* Formato italiano con il punto anche sulle migliaia a 4 cifre (es. 9.651 €) */
  var euro = { format: function (n) {
    var v = Math.round(n), segno = v < 0 ? '-' : '';
    return segno + String(Math.abs(v)).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' €';
  } };
  var euroAsse = function (n) {
    if (Math.abs(n) >= 1e6) return (n / 1e6).toLocaleString('it-IT', { maximumFractionDigits: 1 }) + ' mln';
    if (Math.abs(n) >= 1e3) return Math.round(n / 1e3).toLocaleString('it-IT') + 'k';
    return Math.round(n).toLocaleString('it-IT');
  };

  function numero(input, min, max, predefinito) {
    var v = parseFloat(String(input.value).replace(',', '.'));
    if (!isFinite(v)) return predefinito;
    return Math.min(max, Math.max(min, v));
  }

  /* Calcolo puro: restituisce i valori a fine di ogni anno */
  function simula(iniziale, mensile, rendimentoAnnuo, anni) {
    var i = rendimentoAnnuo / 100 / 12;
    var capitale = iniziale;
    var versato = iniziale;
    var righe = [];
    for (var m = 1; m <= anni * 12; m++) {
      capitale = capitale * (1 + i) + mensile;
      versato += mensile;
      if (m % 12 === 0) righe.push({ anno: m / 12, versato: versato, finale: capitale, interessi: capitale - versato });
    }
    return righe;
  }
  window.simulaPAC = simula; // utile per i controlli

  function grafico(righe) {
    var svg = document.getElementById('c-grafico');
    var W = 640, H = 280, sx = 58, dx = 8, su = 12, giu = 30;
    var w = W - sx - dx, h = H - su - giu;
    var max = Math.max.apply(null, righe.map(function (r) { return Math.max(r.finale, r.versato); })) || 1;
    var n = righe.length, passo = w / n, larg = Math.max(2, passo * 0.62);
    var y = function (v) { return su + h - (v / max) * h; };
    var out = '';
    for (var g = 0; g <= 4; g++) {
      var val = max * g / 4, yy = y(val);
      out += '<line x1="' + sx + '" x2="' + (W - dx) + '" y1="' + yy + '" y2="' + yy + '" stroke="#E2D8C8"' + (g ? ' stroke-dasharray="2 5"' : '') + '/>';
      out += '<text x="' + (sx - 10) + '" y="' + (yy + 4) + '" text-anchor="end" font-size="11" fill="#686B6E" font-family="Manrope,sans-serif">' + euroAsse(val) + '</text>';
    }
    var ogni = n > 30 ? 10 : n > 12 ? 5 : n > 6 ? 2 : 1;
    righe.forEach(function (r, k) {
      var x = sx + k * passo + (passo - larg) / 2;
      var hv = Math.max(0, (Math.min(r.versato, r.finale) / max) * h);
      var hi = Math.max(0, (r.interessi / max) * h);
      out += '<rect x="' + x.toFixed(1) + '" y="' + (su + h - hv).toFixed(1) + '" width="' + larg.toFixed(1) + '" height="' + hv.toFixed(1) + '" fill="#1E2D42" rx="1.5"><title>Anno ' + r.anno + ': versato ' + euro.format(r.versato) + '</title></rect>';
      if (hi > 0.3) out += '<rect x="' + x.toFixed(1) + '" y="' + (su + h - hv - hi).toFixed(1) + '" width="' + larg.toFixed(1) + '" height="' + hi.toFixed(1) + '" fill="#8C9C88" rx="1.5"><title>Anno ' + r.anno + ': interessi ' + euro.format(r.interessi) + '</title></rect>';
      if (r.anno % ogni === 0 || r.anno === 1) out += '<text x="' + (x + larg / 2).toFixed(1) + '" y="' + (H - 10) + '" text-anchor="middle" font-size="11" fill="#686B6E" font-family="Manrope,sans-serif">' + r.anno + '</text>';
    });
    svg.innerHTML = out;
  }

  function aggiorna() {
    var iniziale = numero(campi.iniziale, 0, 1e8, 0);
    var mensile = numero(campi.mensile, 0, 1e6, 0);
    var rendimento = numero(campi.rendimento, -20, 20, 0);
    var anni = Math.round(numero(campi.anni, 1, 50, 1));
    var righe = simula(iniziale, mensile, rendimento, anni);
    var ultima = righe[righe.length - 1];
    document.getElementById('r-versato').textContent = euro.format(ultima.versato);
    document.getElementById('r-interessi').textContent = euro.format(ultima.interessi);
    document.getElementById('r-finale').textContent = euro.format(ultima.finale);
    document.getElementById('c-tabella').innerHTML = righe.map(function (r) {
      return '<tr><td>' + r.anno + '</td><td>' + euro.format(r.versato) + '</td><td>' + euro.format(r.interessi) + '</td><td>' + euro.format(r.finale) + '</td></tr>';
    }).join('');
    grafico(righe);
  }

  modulo.addEventListener('input', aggiorna);
  modulo.addEventListener('submit', function (e) { e.preventDefault(); });
  aggiorna();
})();
