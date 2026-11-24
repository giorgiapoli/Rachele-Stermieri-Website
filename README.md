# Sito di Rachele Stermieri

Sito statico (HTML, CSS e un po' di JavaScript), senza nulla da installare.

## Come si modifica
- **Testi delle pagine e domande dei servizi:** in `tools/genera.mjs`. Dopo ogni modifica lanciare `node tools/genera.mjs`, che rigenera tutte le pagine, `404.html`, `sitemap.xml` e `robots.txt`.
- **Colori, caratteri, impaginazione:** `assets/stile.css`.
- **Numero WhatsApp:** `assets/sito.js` e `assets/contatti.js`.
- **Calcolatore PAC:** `assets/calcolatore.js` (capitalizzazione mensile, versamenti a fine mese).
- **Modulo contatti e calendario:** `assets/contatti.js`. Finché `INDIRIZZO_MODULO` è vuoto, la richiesta viene preparata come messaggio WhatsApp. Il calendario compare solo se `CALENDARIO` contiene un indirizzo (ad esempio Calendly).
- **Foto:** `img/rachele-tonda.jpg` e `img/rachele.jpg`.

## Da completare prima del lancio
- Dati professionali inseriti (Albo OCF n° 2853, Banca Mediolanum S.p.A., P. IVA, email): da far verificare alla Compliance. Manca l'indirizzo per la privacy policy.
- Privacy policy, cookie policy e note legali: sono bozze da far rivedere.
- Collegare il dominio `rachelestermiericonsulente.it` (file `CNAME` + record DNS).
