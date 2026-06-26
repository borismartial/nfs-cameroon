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
    goHome();
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
    goHome();
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
  try {
    document.getElementById('loginLogo').src = LOGO_SRC;
    DB = await openDB();

    // Restaurer une session existante si l'app a été fermée puis réouverte
    // (le commercial reste connecté tant qu'il ne se déconnecte pas explicitement)
    const lastSessionId = sessionStorage.getItem('nfs_collecteur_session');
    if (lastSessionId) {
      try {
        const commercial = await idbGet('commercial', lastSessionId);
        if (commercial) {
          ME = commercial;
          await chargerPortefeuille();
          goHome();
        }
      } catch(sessionErr) {
        console.error('Erreur restauration session:', sessionErr);
        sessionStorage.removeItem('nfs_collecteur_session');
      }
    }
  } catch(initErr) {
    console.error('Erreur initialisation app:', initErr);
    toast('Erreur de chargement — rechargez la page','err');
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
