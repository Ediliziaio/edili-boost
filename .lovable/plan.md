

# Piano: Rimuovere "Settori Serviti" + Aggiungere banner "Guadagniamo se tu guadagni" a tutte le pagine

## Modifiche

### 1. Rimuovere sezione "Settori Serviti" da `CasiStudio.tsx`
Eliminare il blocco righe 459-492 (la sezione con le 3 card Fotovoltaico/Infissi/Rifacimenti) e la relativa variabile `sectorSummaries`.

### 2. Creare componente condiviso `PerformanceBanner.tsx`
Un banner compatto riutilizzabile con il messaggio chiave del modello a performance:
- Titolo: "Noi guadagniamo solo se TU guadagni"
- 3 punti: "0€ di canone fisso", "% solo sulle vendite generate", "I nostri interessi = i tuoi"
- CTA verso `/#candidati`
- Stile: sfondo con gradient dorato/secondary, bordo dorato, icona Handshake

### 3. Inserire il banner nelle pagine che non ce l'hanno
- **`ChiSiamo.tsx`** — prima del CTA finale
- **`CasiStudio.tsx`** — prima del CTA finale (al posto della sezione rimossa)
- **`Servizi.tsx`** — prima del CTA finale
- **`Contattaci.tsx`** — prima del Footer

La pagina **Prezzi** ha già il concetto integrato nella hero e nella sezione "Perché lo facciamo così", quindi non serve aggiungerlo di nuovo.

## File coinvolti
- `src/components/PerformanceBanner.tsx` (nuovo)
- `src/pages/CasiStudio.tsx` (rimuovi settori serviti, aggiungi banner)
- `src/pages/ChiSiamo.tsx` (aggiungi banner)
- `src/pages/Servizi.tsx` (aggiungi banner)
- `src/pages/Contattaci.tsx` (aggiungi banner)

