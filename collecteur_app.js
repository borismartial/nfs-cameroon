// ════════════════════════════════════════════════════════════
// NFS CAMEROON — Application Collecteur Terrain
// Architecture offline-first avec IndexedDB + synchronisation GAS
// ════════════════════════════════════════════════════════════

const LOGO_SRC = "data:image/png;base64,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";
const GAS_URL = "https://script.google.com/macros/s/AKfycbyIzgPsZuL_C9lvpz2jlfwHyfabhjMk8bWcWnAyrAupofc1cwks3hTPSHmYFUBXQ98/exec";
const DB_NAME = 'nfs_collecteur_db';
const DB_VERSION = 2;

let DB = null;
let ME = null;          // Commercial connecté
let portefeuille = [];  // Liste des membres affectés
let pinBuf = '';
let mPinBuf = '';
let pendingAction = null;
let currentClientId = null;
let currentOpType = null;
let modePaiementActuel = 'CASH';
let lastCollecteResult = null;
let isOnline = navigator.onLine;

// ── INDEXEDDB — COUCHE DE STOCKAGE LOCAL ───────────────────────
// Stores :
//   commercial      : profil du collecteur connecté (1 enregistrement)
//   portefeuille    : liste des membres affectés à ce commercial
//   collectes       : ledger complet des opérations (clé = uuid, jamais réécrit après sync)
//   syncQueue       : file des collectes en attente d'envoi au serveur
//   cloture         : historique des clôtures de caisse journalières

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('commercial')) {
        db.createObjectStore('commercial', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('portefeuille')) {
        db.createObjectStore('portefeuille', { keyPath: 'membreId' });
      }
      if (!db.objectStoreNames.contains('collectes')) {
        const store = db.createObjectStore('collectes', { keyPath: 'uuid' });
        store.createIndex('membreId', 'membreId', { unique: false });
        store.createIndex('dateCollecte', 'dateCollecte', { unique: false });
        store.createIndex('statut', 'statut', { unique: false });
      }
      if (!db.objectStoreNames.contains('syncQueue')) {
        db.createObjectStore('syncQueue', { keyPath: 'uuid' });
      }
      if (!db.objectStoreNames.contains('cloture')) {
        db.createObjectStore('cloture', { keyPath: 'id', autoIncrement: true });
      }
      if (!db.objectStoreNames.contains('creditsCollecte')) {
        const store = db.createObjectStore('creditsCollecte', { keyPath: 'uuid' });
        store.createIndex('membreId', 'membreId', { unique: false });
      }
      if (!db.objectStoreNames.contains('virementsCollecte')) {
        const store = db.createObjectStore('virementsCollecte', { keyPath: 'uuid' });
        store.createIndex('membreId', 'membreId', { unique: false });
      }
      if (!db.objectStoreNames.contains('syncQueueCredits')) {
        db.createObjectStore('syncQueueCredits', { keyPath: 'uuid' });
      }
      if (!db.objectStoreNames.contains('syncQueueVirements')) {
        db.createObjectStore('syncQueueVirements', { keyPath: 'uuid' });
      }
    };
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = (e) => reject(e.target.error);
  });
}

function idbGet(store, key) {
  return new Promise((resolve, reject) => {
    const tx = DB.transaction(store, 'readonly');
    const req = tx.objectStore(store).get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

function idbGetAll(store) {
  return new Promise((resolve, reject) => {
    const tx = DB.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

function idbPut(store, value) {
  return new Promise((resolve, reject) => {
    const tx = DB.transaction(store, 'readwrite');
    const req = tx.objectStore(store).put(value);
    req.onsuccess = () => resolve(value);
    req.onerror = () => reject(req.error);
  });
}

function idbDelete(store, key) {
  return new Promise((resolve, reject) => {
    const tx = DB.transaction(store, 'readwrite');
    const req = tx.objectStore(store).delete(key);
    req.onsuccess = () => resolve(true);
    req.onerror = () => reject(req.error);
  });
}

function idbClear(store) {
  return new Promise((resolve, reject) => {
    const tx = DB.transaction(store, 'readwrite');
    const req = tx.objectStore(store).clear();
    req.onsuccess = () => resolve(true);
    req.onerror = () => reject(req.error);
  });
}

// ── UUID — généré côté client, clé de la déduplication ─────────
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// ── UTILS ────────────────────────────────────────────────────
function fmtN(n){return (parseFloat(n)||0).toLocaleString('fr-FR');}
function fmt(n){return fmtN(n)+' FCFA';}
function isoDay(){return new Date().toISOString().slice(0,10);}
function nowHHMM(){return new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});}
function todayFr(){return new Date().toLocaleDateString('fr-FR',{day:'2-digit',month:'2-digit',year:'numeric'});}
function toast(msg,type=''){const t=document.getElementById('toast');t.textContent=msg;t.className='show '+type;setTimeout(()=>t.className='',3200);}
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}

// ── GAS NETWORK LAYER ────────────────────────────────────────
function gasGet(table) {
  return new Promise((resolve) => {
    const cbName = 'cb_' + Date.now() + '_' + Math.floor(Math.random()*10000);
    const script = document.createElement('script');
    const timer = setTimeout(() => {
      delete window[cbName];
      try { document.body.removeChild(script); } catch(e){}
      resolve(null);
    }, 15000);
    window[cbName] = (data) => {
      clearTimeout(timer);
      delete window[cbName];
      try { document.body.removeChild(script); } catch(e){}
      resolve(data && data.ok ? (data.data||[]) : null);
    };
    script.src = GAS_URL + '?action=get&table=' + table + '&callback=' + cbName + '&t=' + Date.now();
    script.onerror = () => { clearTimeout(timer); resolve(null); };
    document.body.appendChild(script);
  });
}

async function gasPostWithResponse(body) {
  return new Promise((resolve) => {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', GAS_URL, true);
      xhr.setRequestHeader('Content-Type', 'text/plain');
      xhr.timeout = 25000;
      xhr.onload = () => {
        try { resolve(JSON.parse(xhr.responseText)); }
        catch(e) { resolve(null); }
      };
      xhr.onerror = () => resolve(null);
      xhr.ontimeout = () => resolve(null);
      xhr.send(JSON.stringify(body));
    } catch(e) { resolve(null); }
  });
}

// ── MOTEUR DE SYNCHRONISATION OFFLINE-FIRST ────────────────────
// Principe : TOUTE collecte saisie est immédiatement écrite dans IndexedDB
// (store "collectes", statut "local") AVANT toute tentative réseau.
// Elle est aussi ajoutée à "syncQueue". Un cycle de sync tente d'envoyer
// chaque élément de la file ; le serveur dédoublonne par UUID (voir GAS),
// donc renvoyer plusieurs fois la même collecte ne crée jamais de doublon.
// Une fois confirmée par le serveur, l'élément est retiré de la file
// et la collecte locale passe au statut "synced".

let syncEnCours = false;

async function ajouterCollecteLocale(collecte) {
  collecte.statut = collecte.statut || 'local';
  await idbPut('collectes', collecte);
  await idbPut('syncQueue', { uuid: collecte.uuid, tentatives: 0, derniereTentative: null });
  rafraichirBadgeSync();
}

async function cyclesSynchronisation() {
  if (syncEnCours) return;
  if (!navigator.onLine) { setSyncIndicator('offline'); return; }
  syncEnCours = true;
  setSyncIndicator('pending');

  try {
    const queue = await idbGetAll('syncQueue');
    if (!queue.length) { setSyncIndicator('ok'); syncEnCours = false; return; }

    let succes = 0, echecs = 0;
    for (const item of queue) {
      const collecte = await idbGet('collectes', item.uuid);
      if (!collecte) { await idbDelete('syncQueue', item.uuid); continue; }

      const resp = await gasPostWithResponse({ action: 'upsertCollecte', collecte });
      if (resp && resp.ok) {
        collecte.statut = 'synced';
        collecte.idServeur = resp.collecte && resp.collecte.id ? resp.collecte.id : collecte.idServeur;
        await idbPut('collectes', collecte);
        await idbDelete('syncQueue', item.uuid);
        succes++;
      } else {
        item.tentatives = (item.tentatives||0) + 1;
        item.derniereTentative = Date.now();
        await idbPut('syncQueue', item);
        echecs++;
      }
    }

    if (succes > 0) toast('🔄 '+succes+' collecte(s) synchronisée(s)', 'ok');
    setSyncIndicator(echecs > 0 ? 'pending' : 'ok');
  } catch(e) {
    console.error('Erreur cycle sync:', e);
    setSyncIndicator('offline');
  }
  syncEnCours = false;
  rafraichirBadgeSync();
}

function setSyncIndicator(state) {
  const dot = document.getElementById('syncDot');
  const label = document.getElementById('syncLabel');
  if (!dot) return;
  dot.className = 'sync-dot';
  if (state === 'ok') { dot.classList.add('ok'); label.textContent = 'Synchronisé'; }
  else if (state === 'pending') { dot.classList.add('pending'); label.textContent = 'Sync en cours...'; }
  else { label.textContent = 'Hors ligne'; }
}

async function rafraichirBadgeSync() {
  const box = document.getElementById('syncQueueBox');
  if (!box) return;
  const queue = await idbGetAll('syncQueue');
  if (!queue.length) {
    box.innerHTML = '<div style="text-align:center;color:var(--green);font-size:12px;padding:8px">✅ Toutes les collectes sont synchronisées</div>';
  } else {
    box.innerHTML = `<div style="font-size:12px;color:var(--muted);margin-bottom:6px">${queue.length} collecte(s) en attente d'envoi</div>` +
      '<div style="font-size:11px;color:var(--gold)">📶 Seront synchronisées automatiquement dès le retour du réseau</div>';
  }
}

function forcerSyncManuelle(){
  toast('Synchronisation forcée...');
  cyclesSynchronisation();
}

// Écouteurs réseau — déclenchent une synchronisation automatique au retour du réseau
window.addEventListener('online', () => {
  isOnline = true;
  toast('📶 Connexion rétablie','ok');
  cyclesSynchronisation();
  cyclesSynchronisationCredits();
  cyclesSynchronisationVirements();
});
window.addEventListener('offline', () => { isOnline = false; setSyncIndicator('offline'); });

// ── CONNEXION ────────────────────────────────────────────────
function pinKey(k){
  if(pinBuf.length>=4)return;
  pinBuf+=String(k);
  updateDots();
  if(pinBuf.length===4){
    setTimeout(() => {
      try { doLogin(); }
      catch(e){ console.error('Erreur appel doLogin:', e); toast('Erreur technique','err'); }
    }, 200);
  }
}
function pinDel(){pinBuf=pinBuf.slice(0,-1);updateDots();}
function updateDots(){for(let i=0;i<4;i++) document.getElementById('d'+i).classList.toggle('filled',i<pinBuf.length);}

async function doLogin(){
  const id = document.getElementById('loginId').value.trim().toUpperCase();
  const pin = pinBuf;
  document.getElementById('loginError').style.display = 'none';

  if (!id) {
    document.getElementById('loginError').textContent = 'Entrez votre numéro de commercial';
    document.getElementById('loginError').style.display = 'block';
    pinBuf=''; updateDots();
    return;
  }

  try {
    // S'assurer que la base locale est prête avant toute lecture
    if (!DB) DB = await openDB();

    // 1. Essayer en local d'abord (mode offline pur)
    let commercial = await idbGet('commercial', id);

    // 2. Si en ligne, vérifier/rafraîchir depuis le serveur
    if (navigator.onLine) {
      const remote = await gasGet('nfs_commerciaux');
      if (remote && Array.isArray(remote)) {
        const found = remote.find(c => c.id === id);
        if (found) {
          commercial = found;
          await idbPut('commercial', commercial);
        }
      }
    }

    if (commercial && String(commercial.pin||'').trim() === pin) {
      if (commercial.statut === 'suspendu') {
        document.getElementById('loginError').textContent = 'Compte suspendu — contactez votre superviseur';
        document.getElementById('loginError').style.display = 'block';
        pinBuf=''; updateDots();
        return;
      }
      ME = commercial;
      sessionStorage.setItem('nfs_collecteur_session', ME.id);
      await chargerPortefeuille();
      goHome();
      return;
    }

    document.getElementById('loginError').textContent = 'Identifiant ou PIN incorrect';
    document.getElementById('loginError').style.display = 'block';
    pinBuf=''; updateDots();
  } catch(err) {
    console.error('Erreur doLogin:', err);
    document.getElementById('loginError').textContent = 'Erreur technique — réessayez';
    document.getElementById('loginError').style.display = 'block';
    pinBuf=''; updateDots();
  }
}

async function chargerPortefeuille(){
  // Charger depuis le cache local d'abord (affichage immédiat même hors-ligne)
  portefeuille = await idbGetAll('portefeuille');

  // Puis rafraîchir depuis le serveur si en ligne
  if (navigator.onLine) {
    const [affectations, membres] = await Promise.all([
      gasGet('nfs_portefeuilles'),
      gasGet('nfs_membres')
    ]);
    if (affectations && membres) {
      const mesAffectations = affectations.filter(a => a.commercialId === ME.id);
      const membresMap = {};
      membres.forEach(m => membresMap[m.id] = m);

      const nouveauPortefeuille = mesAffectations
        .map(a => membresMap[a.membreId])
        .filter(Boolean);

      await idbClear('portefeuille');
      for (const m of nouveauPortefeuille) {
        await idbPut('portefeuille', m);
      }
      portefeuille = nouveauPortefeuille;
    }
  }
}

function logout(){
  sessionStorage.removeItem('nfs_collecteur_session');
  ME = null; portefeuille = []; pinBuf=''; updateDots();
  document.getElementById('loginId').value='';
  document.getElementById('loginError').style.display='none';
  showScreen('loginScreen');
}

// ── NAVIGATION ───────────────────────────────────────────────
function goHome(){
  if(!ME){ showScreen('loginScreen'); return; }
  renderHome();
  showScreen('homeScreen');
}

function goTo(screen){
  if(!ME){ showScreen('loginScreen'); return; }
  if(screen==='tourneeScreen') renderTournee();
  if(screen==='rechercheScreen'){ document.getElementById('searchInput').value=''; document.getElementById('rechercheResults').innerHTML=''; }
  if(screen==='clotureScreen') renderCloture();
  if(screen==='perfScreen') renderPerformance();
  if(screen==='profilScreen') renderProfil();
  showScreen(screen);
}

function goBackFromFiche(){
  // Depuis crédit/virement, retour à la fiche client ; sinon vers la tournée
  const fromScreen = document.querySelector('.screen.active')?.id;
  if ((fromScreen === 'creditScreen' || fromScreen === 'virementScreen' || fromScreen === 'saisieScreen') && currentClientId) {
    ouvrirFicheClient(currentClientId);
  } else {
    goTo('tourneeScreen');
  }
}

// ── RENDU ACCUEIL ────────────────────────────────────────────
async function renderHome(){
  document.getElementById('headerName').textContent = ME.prenom + ' ' + ME.nom;
  document.getElementById('heroDate').textContent = todayFr();

  const collectesAujourdhui = await getCollectesDuJour();
  const totalCollecte = collectesAujourdhui
    .filter(c => c.type === 'VERSEMENT')
    .reduce((s,c) => s + (parseFloat(c.montant)||0), 0);
  const clientsVisites = new Set(collectesAujourdhui.map(c => c.membreId)).size;

  document.getElementById('heroCollecte').textContent = fmt(totalCollecte);
  document.getElementById('heroVisites').textContent = clientsVisites + ' / ' + portefeuille.length;

  const visitesIds = new Set(collectesAujourdhui.map(c => c.membreId));
  const restants = portefeuille.filter(m => !visitesIds.has(m.id));

  const listEl = document.getElementById('homeClientList');
  listEl.innerHTML = restants.length
    ? restants.slice(0,6).map(m => renderClientItem(m, 'attente')).join('')
    : '<div class="client-item" style="justify-content:center;color:var(--green);font-size:13px;padding:18px">✅ Tous les clients du jour sont visités</div>';

  await rafraichirBadgeSync();
  setSyncIndicator(navigator.onLine ? 'ok' : 'offline');
}

async function getCollectesDuJour(){
  const all = await idbGetAll('collectes');
  const today = isoDay();
  return all.filter(c => c.dateCollecte === today && c.membreId && portefeuille.some(m=>m.id===c.membreId));
}

function renderClientItem(m, statut){
  const initiales = (m.nom||'?')[0] + (m.prenom||'?')[0];
  const statutLabel = { collecte:'Visité', attente:'À visiter', manque:'Manqué' }[statut] || statut;
  return `<div class="client-item" onclick="ouvrirFicheClient('${m.id}')">
    <div class="client-avatar">${initiales}</div>
    <div class="client-info">
      <div class="client-name">${m.nom} ${m.prenom}</div>
      <div class="client-sub">${m.id} · Solde EP: ${fmt(m.soldeEP||0)}</div>
    </div>
    <span class="client-status st-${statut}">${statutLabel}</span>
  </div>`;
}

// ── RENDU TOURNÉE COMPLÈTE ───────────────────────────────────
async function renderTournee(){
  const collectesAujourdhui = await getCollectesDuJour();
  const visitesIds = new Set(collectesAujourdhui.map(c => c.membreId));

  const listEl = document.getElementById('tourneeList');
  if (!portefeuille.length) {
    listEl.innerHTML = '<div style="text-align:center;padding:30px;color:var(--muted)">Aucun client affecté à votre portefeuille</div>';
    return;
  }

  listEl.innerHTML = `<div style="font-size:12px;color:var(--muted);margin-bottom:10px">${portefeuille.length} client(s) dans votre portefeuille</div>` +
    '<div class="client-list">' +
    portefeuille.map(m => renderClientItem(m, visitesIds.has(m.id) ? 'collecte' : 'attente')).join('') +
    '</div>';
}

// ── RECHERCHE CLIENT ─────────────────────────────────────────
function filtrerRecherche(){
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultsEl = document.getElementById('rechercheResults');
  if (!q) { resultsEl.innerHTML = ''; return; }

  const results = portefeuille.filter(m =>
    (m.nom||'').toLowerCase().includes(q) ||
    (m.prenom||'').toLowerCase().includes(q) ||
    (m.id||'').toLowerCase().includes(q) ||
    (m.tel||'').includes(q)
  );

  resultsEl.innerHTML = results.length
    ? '<div class="client-list">' + results.map(m => renderClientItem(m,'attente')).join('') + '</div>'
    : '<div style="text-align:center;padding:24px;color:var(--muted);font-size:13px">Aucun résultat</div>';
}

// ── FICHE CLIENT ─────────────────────────────────────────────
async function ouvrirFicheClient(membreId){
  currentClientId = membreId;
  const m = portefeuille.find(x => x.id === membreId);
  if (!m) return toast('Client introuvable dans votre portefeuille','err');

  const collectes = await idbGetAll('collectes');
  const historique = collectes
    .filter(c => c.membreId === membreId)
    .sort((a,b) => (b.dateCollecte+b.heureCollecte).localeCompare(a.dateCollecte+a.heureCollecte))
    .slice(0,8);

  document.getElementById('ficheClientContent').innerHTML = `
    <div style="background:#fff;border-radius:14px;border:1px solid var(--border);padding:18px;text-align:center;margin-bottom:13px">
      <div style="width:64px;height:64px;background:var(--navy);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:800;color:#fff;margin:0 auto 10px">${(m.nom||'?')[0]}${(m.prenom||'?')[0]}</div>
      <div style="font-size:16px;font-weight:800;color:var(--navy)">${m.nom} ${m.prenom}</div>
      <div style="font-size:11px;color:var(--muted);margin-top:3px">${m.id} · ${m.tel||'—'}</div>
    </div>
    <div style="background:#fff;border-radius:14px;border:1px solid var(--border);padding:14px;margin-bottom:13px">
      <div style="display:flex;justify-content:space-between;padding:6px 0"><span style="font-size:12px;color:var(--muted)">Solde Épargne</span><span class="fw7 text-green">${fmt(m.soldeEP||0)}</span></div>
      <div style="display:flex;justify-content:space-between;padding:6px 0"><span style="font-size:12px;color:var(--muted)">Solde Courant</span><span class="fw7" style="color:var(--blue)">${fmt(m.soldeCC||0)}</span></div>
    </div>
    <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:8px">Historique des collectes</div>
    <div class="client-list">
      ${historique.length ? historique.map(c => `
        <div class="client-item" style="cursor:default">
          <div style="font-size:18px">${c.type==='VERSEMENT'?'📥':'📤'}</div>
          <div class="client-info">
            <div class="client-name">${c.type==='VERSEMENT'?'Versement':'Retrait'} — ${fmt(c.montant)}</div>
            <div class="client-sub">${c.dateCollecte} à ${c.heureCollecte||'—'}</div>
          </div>
          <span class="badge-sync ${c.statut==='synced'?'synced':'pending'}">${c.statut==='synced'?'Synchronisé':'En attente'}</span>
        </div>`).join('') : '<div class="client-item" style="justify-content:center;color:var(--muted);font-size:12px">Aucune collecte enregistrée</div>'}
    </div>`;

  showScreen('ficheClientScreen');
}

// ── SAISIE DE COLLECTE ───────────────────────────────────────
function ouvrirSaisieCollecte(type){
  currentOpType = type;
  modePaiementActuel = 'CASH';
  document.getElementById('saisieMontant').value = '';
  document.getElementById('saisieDisp').textContent = '0';
  document.getElementById('saisieConfirmation').value = '';
  document.querySelectorAll('.mode-card').forEach(c=>c.classList.remove('selected'));
  document.getElementById('mode-cash').classList.add('selected');

  const m = portefeuille.find(x => x.id === currentClientId);
  document.getElementById('saisieTitle').textContent = type === 'VERSEMENT' ? 'Versement' : 'Retrait';
  document.getElementById('saisieBtn').className = 'main-btn ' + (type==='VERSEMENT' ? 'green' : 'orange');
  document.getElementById('saisieClientInfo').innerHTML =
    `<b>${m.nom} ${m.prenom}</b> (${m.id})<br>Solde Épargne actuel : ${fmt(m.soldeEP||0)}`;

  majSoldeApres();
  showScreen('saisieScreen');
}

function selectModePaiement(mode){
  modePaiementActuel = mode;
  document.querySelectorAll('.mode-card').forEach(c=>c.classList.remove('selected'));
  const map = { CASH:'mode-cash', ORANGE_MONEY:'mode-om', MTN_MONEY:'mode-momo' };
  document.getElementById(map[mode]).classList.add('selected');
}

function majSoldeApres(){
  const m = portefeuille.find(x => x.id === currentClientId);
  const montant = parseFloat(document.getElementById('saisieMontant')?.value) || 0;
  const soldeActuel = parseFloat(m?.soldeEP || 0);
  const soldeApres = currentOpType === 'VERSEMENT' ? soldeActuel + montant : soldeActuel - montant;
  const el = document.getElementById('saisieSoldeApres');
  if (el) el.innerHTML = `Solde après opération : <b style="color:${soldeApres<0?'var(--red)':'var(--navy)'}">${fmt(soldeApres)}</b>`;
}
document.addEventListener('input', (e) => { if(e.target.id==='saisieMontant') majSoldeApres(); });

// ── CRÉDIT COLLECTE ──────────────────────────────────────────
// ── CRÉDIT COLLECTEUR — demande personnelle du commercial ──────
function ouvrirDemandeCredit(){
  document.getElementById('creditMontant').value = '';
  document.getElementById('creditDisp').textContent = '0';
  document.getElementById('creditDuree').value = '6';
  document.getElementById('creditGarantie').value = '';
  document.getElementById('creditMotif').value = 'Crédit collecte';
  document.getElementById('creditSoldeActuel').textContent = fmt(ME.soldeCollecte||0);

  showScreen('creditScreen');
}

async function confirmerDemandeCredit(){
  const montant = parseFloat(document.getElementById('creditMontant').value);
  const duree = parseInt(document.getElementById('creditDuree').value);
  const motif = document.getElementById('creditMotif').value;
  const garantie = document.getElementById('creditGarantie').value.trim();

  if (!montant || montant <= 0) return toast('Montant invalide','err');
  if (!duree || duree <= 0) return toast('Durée invalide','err');

  openPinModal('🔐 Confirmer la demande', 'Entrez votre PIN personnel pour soumettre cette demande de crédit', async () => {
    const uuid = uuidv4();
    const credit = {
      uuid,
      commercialId: ME.id,
      montant,
      duree,
      motif,
      garantie,
      date: isoDay(),
      statut: 'attente'
    };

    // Écriture locale immédiate — le crédit reste "en attente" jusqu'à
    // approbation par l'administrateur dans le logiciel back-office.
    await idbPut('creditsCollecte', credit);
    await idbPut('syncQueueCredits', { uuid: credit.uuid, tentatives: 0 });

    toast("📩 Demande envoyée — en attente d'approbation par votre superviseur",'ok');
    cyclesSynchronisationCredits();
    goTo('profilScreen');
  });
}

async function cyclesSynchronisationCredits(){
  if (!navigator.onLine) return;
  const queue = await idbGetAll('syncQueueCredits');
  for (const item of queue) {
    const credit = await idbGet('creditsCollecte', item.uuid);
    if (!credit) { await idbDelete('syncQueueCredits', item.uuid); continue; }
    const resp = await gasPostWithResponse({ action: 'upsertCreditCollecte', credit });
    if (resp && resp.ok) {
      credit.synced = true;
      await idbPut('creditsCollecte', credit);
      await idbDelete('syncQueueCredits', item.uuid);
    }
  }
}

// Vérifier périodiquement si un crédit en attente a été approuvé,
// et rafraîchir le solde personnel du collecteur en conséquence.
async function rafraichirSoldeCollecteur(){
  if (!ME || !navigator.onLine) return;
  const remote = await gasGet('nfs_commerciaux');
  if (remote) {
    const moi = remote.find(c => c.id === ME.id);
    if (moi) {
      ME.soldeCollecte = moi.soldeCollecte || 0;
      await idbPut('commercial', ME);
    }
  }
}

// ── VIREMENT COLLECTEUR → MEMBRE (à partir du solde personnel) ──
let virementDestMembre = null;

async function ouvrirVirementClient(){
  document.getElementById('virementDestId').value = '';
  document.getElementById('virementDestName').textContent = '';
  document.getElementById('virementMontant').value = '';
  document.getElementById('virementDisp').textContent = '0';
  document.getElementById('virementMotif').value = '';
  document.getElementById('virementConfirmation').value = '';
  virementDestMembre = null;

  await rafraichirSoldeCollecteur();
  document.getElementById('virementSoldeActuel').textContent = fmt(ME.soldeCollecte||0);

  showScreen('virementScreen');
}

async function lookupVirementDest(){
  const id = document.getElementById('virementDestId').value.trim().toUpperCase();
  if (id.length < 5) { document.getElementById('virementDestName').textContent=''; virementDestMembre=null; return; }

  // Chercher d'abord dans le portefeuille local, sinon interroger le serveur
  let dest = portefeuille.find(m => m.id === id);
  if (!dest && navigator.onLine) {
    const remote = await gasGet('nfs_membres');
    if (remote) dest = remote.find(m => m.id === id);
  }

  if (dest) {
    virementDestMembre = dest;
    document.getElementById('virementDestName').textContent = '✅ ' + dest.nom + ' ' + dest.prenom;
  } else {
    virementDestMembre = null;
    document.getElementById('virementDestName').textContent = '❌ Membre introuvable';
  }
}

async function confirmerVirementClient(){
  const montant = parseFloat(document.getElementById('virementMontant').value);
  const motif = document.getElementById('virementMotif').value.trim() || 'Remise des fonds collectés';
  const confirmation = document.getElementById('virementConfirmation').value.trim();

  if (!montant || montant <= 0) return toast('Montant invalide','err');
  if (!virementDestMembre) return toast('Sélectionnez un bénéficiaire valide','err');
  if (!confirmation) return toast('Code de confirmation requis','err');
  if (montant > parseFloat(ME.soldeCollecte||0)) return toast('Solde personnel insuffisant','err');

  openPinModal('🔐 Confirmer le virement', 'Entrez votre PIN personnel pour exécuter ce virement', async () => {
    const uuid = uuidv4();
    const virement = {
      uuid,
      membreId: virementDestMembre.id,
      type: 'VIREMENT_IN',
      montant,
      compte: 'EP',
      motif,
      commercialId: ME.id,
      signatureClient: confirmation,
      date: isoDay(),
      dateAff: todayFr()
    };

    await idbPut('virementsCollecte', virement);
    await idbPut('syncQueueVirements', { uuid: virement.uuid, tentatives: 0 });

    // Mettre à jour localement : crédit du membre, débit du solde personnel du collecteur
    virementDestMembre.soldeEP = (parseFloat(virementDestMembre.soldeEP)||0) + montant;
    await idbPut('portefeuille', virementDestMembre);

    ME.soldeCollecte = (parseFloat(ME.soldeCollecte)||0) - montant;
    await idbPut('commercial', ME);

    toast('✅ Virement de '+fmt(montant)+' effectué vers '+virementDestMembre.nom,'ok');
    cyclesSynchronisationVirements();
    goTo('profilScreen');
  });
}

async function cyclesSynchronisationVirements(){
  if (!navigator.onLine) return;
  const queue = await idbGetAll('syncQueueVirements');
  for (const item of queue) {
    const virement = await idbGet('virementsCollecte', item.uuid);
    if (!virement) { await idbDelete('syncQueueVirements', item.uuid); continue; }
    const resp = await gasPostWithResponse({ action: 'upsertVirementCollecte', virement });
    if (resp && resp.ok) {
      virement.synced = true;
      await idbPut('virementsCollecte', virement);
      await idbDelete('syncQueueVirements', item.uuid);
    } else if (resp && resp.error) {
      console.warn('Virement refusé par le serveur:', resp.error);
    }
  }
}

async function confirmerCollecte(){
  const montant = parseFloat(document.getElementById('saisieMontant').value);
  const confirmation = document.getElementById('saisieConfirmation').value.trim();

  if (!montant || montant <= 0) return toast('Montant invalide','err');
  if (!confirmation) return toast('Code de confirmation client requis','err');

  const m = portefeuille.find(x => x.id === currentClientId);
  if (currentOpType === 'RETRAIT' && montant > parseFloat(m.soldeEP||0)) {
    return toast('Solde insuffisant pour ce retrait','err');
  }

  openPinModal('🔐 Confirmer la collecte', 'Entrez votre PIN personnel pour valider cette opération', async () => {
    const uuid = uuidv4();
    const soldeAvant = parseFloat(m.soldeEP||0);
    const soldeApres = currentOpType === 'VERSEMENT' ? soldeAvant + montant : soldeAvant - montant;

    const collecte = {
      uuid,
      commercialId: ME.id,
      membreId: currentClientId,
      type: currentOpType,
      montant,
      modePaiement: modePaiementActuel,
      soldeApres,
      signatureClient: confirmation,
      dateCollecte: isoDay(),
      heureCollecte: nowHHMM(),
      statut: 'local'
    };

    // Écriture locale IMMÉDIATE — l'opération est valide dès maintenant,
    // indépendamment de la disponibilité du réseau
    await ajouterCollecteLocale(collecte);

    // Mettre à jour le solde local du membre dans le portefeuille en cache
    m.soldeEP = soldeApres;
    await idbPut('portefeuille', m);

    lastCollecteResult = { collecte, membre: m };

    // Tenter une synchronisation immédiate (best-effort, non bloquant pour l'UX)
    cyclesSynchronisation();

    afficherRecu(collecte, m);
  });
}

// ── REÇU ─────────────────────────────────────────────────────
function afficherRecu(collecte, membre){
  const ref = collecte.uuid.slice(0,8).toUpperCase();
  document.getElementById('recuContent').innerHTML = `
    <div class="receipt-box" style="width:100%;text-align:left">
      <div style="text-align:center;font-weight:700;margin-bottom:6px">NFS CAMEROON</div>
      <div style="text-align:center;font-size:10px;color:var(--muted);margin-bottom:8px">Reçu de collecte terrain</div>
      <hr>
      <div class="line"><span>Référence</span><span>${ref}</span></div>
      <div class="line"><span>Date</span><span>${collecte.dateCollecte} ${collecte.heureCollecte}</span></div>
      <div class="line"><span>Client</span><span>${membre.nom} ${membre.prenom}</span></div>
      <div class="line"><span>N° compte</span><span>${membre.id}</span></div>
      <hr>
      <div class="line"><span>Opération</span><span>${collecte.type==='VERSEMENT'?'Versement':'Retrait'}</span></div>
      <div class="line"><span>Montant</span><span class="fw7">${fmt(collecte.montant)}</span></div>
      <div class="line"><span>Mode</span><span>${collecte.modePaiement}</span></div>
      <hr>
      <div class="line"><span>Solde après</span><span class="fw7">${fmt(collecte.soldeApres)}</span></div>
      <hr>
      <div class="line"><span>Collecteur</span><span>${ME.nom} ${ME.prenom}</span></div>
      <div style="text-align:center;margin-top:8px"><span class="badge-sync ${collecte.statut==='synced'?'synced':'pending'}">${collecte.statut==='synced'?'✅ Synchronisé':'⏳ En attente de sync'}</span></div>
    </div>`;
  showScreen('recuScreen');
}

function imprimerRecu(){
  // Impression Bluetooth nécessite un plugin natif (Capacitor) — à intégrer en phase 2 de l'app Android.
  // En attendant, fallback navigateur standard.
  toast('Impression Bluetooth disponible dans la version Android');
  window.print();
}

async function envoyerSmsRecu(){
  if (!lastCollecteResult) return;
  const { collecte, membre } = lastCollecteResult;
  if (!membre.tel) return toast('Numéro de téléphone du client manquant','err');

  toast('Envoi du SMS au client...');
  const resp = await gasPostWithResponse({
    action: 'sendNotificationEmail', // réutilise la voie email tant que le SMS gateway n'est pas branché
    email: membre.email || '',
    nom: membre.nom, prenom: membre.prenom,
    type: collecte.type === 'VERSEMENT' ? 'DEPOT' : 'RETRAIT',
    details: { montant: fmtN(collecte.montant), compte: 'EP', motif: 'Collecte terrain' },
    ref: collecte.uuid.slice(0,8).toUpperCase()
  });
  if (resp && resp.ok) toast('Confirmation envoyée au client','ok');
  else toast('Envoi différé — sera retenté à la prochaine synchronisation','err');
}

// ── CLÔTURE DE CAISSE ────────────────────────────────────────
async function renderCloture(){
  const collectesJour = await getCollectesDuJour();
  const versements = collectesJour.filter(c => c.type === 'VERSEMENT');
  const retraits = collectesJour.filter(c => c.type === 'RETRAIT');

  const totalVerse = versements.reduce((s,c)=>s+(parseFloat(c.montant)||0),0);
  const totalRetire = retraits.reduce((s,c)=>s+(parseFloat(c.montant)||0),0);
  const especes = collectesJour.filter(c=>c.modePaiement==='CASH');
  const totalEspeces = especes.filter(c=>c.type==='VERSEMENT').reduce((s,c)=>s+(parseFloat(c.montant)||0),0)
                       - especes.filter(c=>c.type==='RETRAIT').reduce((s,c)=>s+(parseFloat(c.montant)||0),0);

  const enAttente = (await idbGetAll('syncQueue')).length;
  const depassePlafond = totalEspeces > (ME.plafondCaisse || 200000);

  document.getElementById('clotureContent').innerHTML = `
    <div style="background:#fff;border-radius:14px;border:1px solid var(--border);padding:16px;margin-bottom:14px">
      <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:12px">Récapitulatif du jour — ${todayFr()}</div>
      <div style="display:flex;justify-content:space-between;padding:6px 0"><span style="font-size:12px;color:var(--muted)">Versements (${versements.length})</span><span class="fw7 text-green">${fmt(totalVerse)}</span></div>
      <div style="display:flex;justify-content:space-between;padding:6px 0"><span style="font-size:12px;color:var(--muted)">Retraits (${retraits.length})</span><span class="fw7 text-red">${fmt(totalRetire)}</span></div>
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-top:1px solid var(--border);margin-top:6px"><span style="font-size:12px;font-weight:700">Net en espèces à remettre</span><span class="fw7" style="color:var(--navy)">${fmt(totalEspeces)}</span></div>
    </div>

    ${depassePlafond ? `
    <div style="background:#FEF2F2;border:1px solid #FCA5A5;border-radius:10px;padding:12px;margin-bottom:14px">
      <div style="font-size:12px;color:var(--red);font-weight:700">⚠️ Plafond de caisse dépassé</div>
      <div style="font-size:11px;color:var(--red);margin-top:3px">Plafond autorisé : ${fmt(ME.plafondCaisse||200000)} — Remise à l'agence obligatoire avant de poursuivre la collecte.</div>
    </div>` : ''}

    ${enAttente > 0 ? `
    <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:10px;padding:12px;margin-bottom:14px">
      <div style="font-size:12px;color:#92400E;font-weight:700">📶 ${enAttente} collecte(s) non encore synchronisée(s)</div>
      <div style="font-size:11px;color:#92400E;margin-top:3px">La clôture sera enregistrée localement et synchronisée dès le retour du réseau.</div>
    </div>` : ''}

    <div class="form-group">
      <label class="form-label">Montant réellement remis (FCFA) *</label>
      <input class="form-input" id="clotureMontantRemis" type="number" placeholder="${totalEspeces}" value="${totalEspeces}">
      <div class="form-hint">Doit correspondre au montant collecté en espèces ci-dessus</div>
    </div>
    <div class="form-group">
      <label class="form-label">Observations (écarts éventuels)</label>
      <input class="form-input" id="clotureObs" placeholder="Optionnel">
    </div>`;
}

async function confirmerCloture(){
  const montantRemis = parseFloat(document.getElementById('clotureMontantRemis').value);
  const obs = document.getElementById('clotureObs').value.trim();
  const collectesJour = await getCollectesDuJour();
  const especes = collectesJour.filter(c=>c.modePaiement==='CASH');
  const totalEspeces = especes.filter(c=>c.type==='VERSEMENT').reduce((s,c)=>s+(parseFloat(c.montant)||0),0)
                       - especes.filter(c=>c.type==='RETRAIT').reduce((s,c)=>s+(parseFloat(c.montant)||0),0);

  if (isNaN(montantRemis)) return toast('Montant remis requis','err');
  const ecart = montantRemis - totalEspeces;

  openPinModal('🔐 Confirmer la clôture', 'Entrez votre PIN pour valider la clôture de caisse', async () => {
    const cloture = {
      commercialId: ME.id,
      date: isoDay(),
      totalCollecte: totalEspeces,
      montantRemis,
      ecart,
      observations: obs,
      nbOperations: collectesJour.length,
      timestamp: new Date().toISOString()
    };
    await idbPut('cloture', cloture);

    // Tenter l'envoi au serveur (non-bloquant)
    gasPostWithResponse({ action: 'upsert', table: 'nfs_clotures', row: cloture });

    if (Math.abs(ecart) > 0) {
      toast('⚠️ Clôture enregistrée avec un écart de ' + fmt(Math.abs(ecart)), 'err');
    } else {
      toast('✅ Caisse clôturée — rapprochement exact', 'ok');
    }
    goHome();
  });
}

// ── PERFORMANCE ──────────────────────────────────────────────
async function renderPerformance(){
  const allCollectes = await idbGetAll('collectes');
  const mesCollectes = allCollectes.filter(c => c.commercialId === ME.id);

  const aujourdhui = mesCollectes.filter(c => c.dateCollecte === isoDay());
  const ceMois = mesCollectes.filter(c => c.dateCollecte && c.dateCollecte.slice(0,7) === isoDay().slice(0,7));

  const totalAujourdhui = aujourdhui.filter(c=>c.type==='VERSEMENT').reduce((s,c)=>s+(parseFloat(c.montant)||0),0);
  const totalMois = ceMois.filter(c=>c.type==='VERSEMENT').reduce((s,c)=>s+(parseFloat(c.montant)||0),0);
  const clientsVisitesMois = new Set(ceMois.map(c=>c.membreId)).size;
  const tauxCollecte = portefeuille.length ? Math.round((clientsVisitesMois / portefeuille.length) * 100) : 0;

  document.getElementById('perfContent').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
      <div style="background:#fff;border-radius:12px;border:1px solid var(--border);padding:14px;text-align:center">
        <div style="font-size:10px;color:var(--muted)">Collecté aujourd'hui</div>
        <div style="font-size:18px;font-weight:800;color:var(--navy);margin-top:4px">${fmt(totalAujourdhui)}</div>
      </div>
      <div style="background:#fff;border-radius:12px;border:1px solid var(--border);padding:14px;text-align:center">
        <div style="font-size:10px;color:var(--muted)">Collecté ce mois</div>
        <div style="font-size:18px;font-weight:800;color:var(--green);margin-top:4px">${fmt(totalMois)}</div>
      </div>
    </div>
    <div style="background:#fff;border-radius:12px;border:1px solid var(--border);padding:16px;margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;margin-bottom:8px">
        <span style="font-size:12px;color:var(--muted)">Taux de couverture du portefeuille (ce mois)</span>
        <span class="fw7">${tauxCollecte}%</span>
      </div>
      <div style="background:#E2E8F0;border-radius:10px;height:8px;overflow:hidden">
        <div style="width:${tauxCollecte}%;height:100%;background:linear-gradient(90deg,var(--blue),var(--green))"></div>
      </div>
      <div style="font-size:11px;color:var(--muted);margin-top:6px">${clientsVisitesMois} / ${portefeuille.length} clients visités ce mois</div>
    </div>
    <div style="background:#fff;border-radius:12px;border:1px solid var(--border);padding:16px">
      <div style="font-size:12px;color:var(--muted);margin-bottom:4px">Opérations totales ce mois</div>
      <div style="font-size:20px;font-weight:800;color:var(--navy)">${ceMois.length}</div>
    </div>`;
}

// ── PROFIL ───────────────────────────────────────────────────
async function renderProfil(){
  await rafraichirSoldeCollecteur();
  const queue = await idbGetAll('syncQueue');
  document.getElementById('profilContent').innerHTML = `
    <div style="background:#fff;border-radius:14px;border:1px solid var(--border);padding:18px;text-align:center;margin-bottom:13px">
      <div style="width:64px;height:64px;background:var(--navy);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:800;color:#fff;margin:0 auto 10px">${(ME.nom||'?')[0]}${(ME.prenom||'?')[0]}</div>
      <div style="font-size:16px;font-weight:800;color:var(--navy)">${ME.nom} ${ME.prenom}</div>
      <div style="font-size:11px;color:var(--muted);margin-top:3px">${ME.id}</div>
    </div>
    <div style="background:linear-gradient(135deg,var(--blue),var(--navy));border-radius:14px;padding:16px;margin-bottom:13px;color:#fff;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,.7);text-transform:uppercase">Solde personnel (crédit collecteur)</div>
      <div style="font-size:24px;font-weight:800;margin-top:4px">${fmt(ME.soldeCollecte||0)}</div>
    </div>
    <div style="background:#fff;border-radius:14px;border:1px solid var(--border);overflow:hidden">
      <div style="display:flex;justify-content:space-between;padding:12px 14px;border-bottom:1px solid #F8FAFC"><span style="font-size:12px;color:var(--muted)">Téléphone</span><span class="fw7 fs11">${ME.tel||'—'}</span></div>
      <div style="display:flex;justify-content:space-between;padding:12px 14px;border-bottom:1px solid #F8FAFC"><span style="font-size:12px;color:var(--muted)">Agence</span><span class="fw7 fs11">${ME.agence||'—'}</span></div>
      <div style="display:flex;justify-content:space-between;padding:12px 14px;border-bottom:1px solid #F8FAFC"><span style="font-size:12px;color:var(--muted)">Zone</span><span class="fw7 fs11">${ME.zone||'—'}</span></div>
      <div style="display:flex;justify-content:space-between;padding:12px 14px"><span style="font-size:12px;color:var(--muted)">Collectes en attente</span><span class="fw7 fs11" style="color:${queue.length?'var(--gold)':'var(--green)'}">${queue.length}</span></div>
    </div>`;
}

// ── MODAL PIN CONFIRMATION ───────────────────────────────────
function openPinModal(title,desc,action){
  pendingAction = action; mPinBuf=''; updateMDots();
  document.getElementById('pinModalTitle').textContent = title || '🔐 Confirmer';
  document.getElementById('pinModalDesc').textContent = desc || 'Entrez votre PIN pour valider';
  document.getElementById('pinModalErr').style.display = 'none';
  document.getElementById('pinConfirmModal').classList.add('open');
}
function closePinModal(){
  document.getElementById('pinConfirmModal').classList.remove('open');
  mPinBuf=''; updateMDots(); pendingAction=null;
}
function mPinKey(k){if(mPinBuf.length>=4)return;mPinBuf+=String(k);updateMDots();if(mPinBuf.length===4)setTimeout(()=>validateMPin(),200);}
function mPinDel(){mPinBuf=mPinBuf.slice(0,-1);updateMDots();}
function updateMDots(){for(let i=0;i<4;i++) document.getElementById('md'+i).classList.toggle('filled',i<mPinBuf.length);}

async function validateMPin(){
  const pin = mPinBuf;
  const mPin = String(ME.pin||'').trim();
  if (pin === mPin) {
    const actionToRun = pendingAction; // capturer AVANT closePinModal (qui annule pendingAction)
    closePinModal();
    if (typeof actionToRun === 'function') {
      try { await actionToRun(); }
      catch(e) { console.error('Erreur action PIN:', e); toast('Une erreur est survenue','err'); }
    }
  } else {
    document.getElementById('pinModalErr').style.display = 'block';
    mPinBuf=''; updateMDots();
  }
}

// ── INITIALISATION ───────────────────────────────────────────
window.addEventListener('load', async () => {
  document.getElementById('loginLogo').src = LOGO_SRC;
  DB = await openDB();

  // Restaurer une session existante si l'app a été fermée puis réouverte
  // (le commercial reste connecté tant qu'il ne se déconnecte pas explicitement)
  const lastSessionId = sessionStorage.getItem('nfs_collecteur_session');
  if (lastSessionId) {
    const commercial = await idbGet('commercial', lastSessionId);
    if (commercial) {
      ME = commercial;
      await chargerPortefeuille();
      goHome();
    }
  }

  // Cycle de synchronisation périodique en arrière-plan
  setInterval(() => {
    if (ME) {
      cyclesSynchronisation();
      cyclesSynchronisationCredits();
      cyclesSynchronisationVirements();
      rafraichirSoldeCollecteur();
    }
  }, 20000);

  setSyncIndicator(navigator.onLine ? 'ok' : 'offline');
});
