// ════════════════════════════════════════════════════════════
// NFS CAMEROON — Application Collecteur Terrain
// Architecture offline-first avec IndexedDB + synchronisation GAS
// ════════════════════════════════════════════════════════════

const LOGO_SRC = "data:image/png;base64,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";
const GAS_URL = "https://script.google.com/macros/s/AKfycbyPYGW2r0HJL3ao_c7hKT553YyTFFa3pGD-vTKdkWulL4dX-lkyuUgaPtE7_FmOzzs/exec";
// Solde minimum obligatoire et non retirable sur le compte Épargne (EP) de chaque membre
const SOLDE_MIN_EPARGNE = 5000;
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

        // Notification SMS au membre — uniquement à la première confirmation
        // serveur réussie, jamais en cas de doublon déjà synchronisé
        if (!resp.duplicate) {
          gasPostWithResponse({
            action: 'sendNotificationSMS',
            membreId: collecte.membreId,
            type: collecte.type === 'VERSEMENT' ? 'DEPOT' : 'RETRAIT',
            montant: collecte.montant,
            infos: { nouveauSolde: collecte.soldeApres }
          });
        }
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
      // Prompt 8 : premier PIN reçu à l'inscription = générique — on force sa
      // modification à la première connexion, exactement comme dans l'appli
      // membre (mécanisme pinAChanger déjà en place côté backend/createCommercial).
      if(ME.pinAChanger===true || ME.pinAChanger==='true'){
        document.getElementById('forcePinNouv').value='';
        document.getElementById('forcePinConf').value='';
        document.getElementById('forcePinErr').style.display='none';
        document.getElementById('forcePinModal').classList.add('open');
        return;
      }
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

// ── CHANGEMENT DE PIN OBLIGATOIRE (première connexion) — Prompt 8 ──────
async function validerForcePinChangeCollecteur(){
  const nouv = document.getElementById('forcePinNouv').value.trim();
  const conf = document.getElementById('forcePinConf').value.trim();
  const err = document.getElementById('forcePinErr');
  if(nouv.length!==4 || !/^\d+$/.test(nouv)){ err.textContent='Le PIN doit être 4 chiffres'; err.style.display='block'; return; }
  if(nouv!==conf){ err.textContent='Les PINs ne correspondent pas'; err.style.display='block'; return; }

  ME.pin = nouv;
  ME.pinAChanger = false;
  await idbPut('commercial', ME);

  // Répercuter côté serveur (best-effort — si hors-ligne, le prochain rafraîchissement
  // du portefeuille en ligne re-synchronisera ; le PIN reste valide localement entre-temps)
  try{ await gasPostWithResponse({ action:'upsert', table:'nfs_commerciaux', row: ME }); }catch(e){}

  document.getElementById('forcePinModal').classList.remove('open');
  toast('PIN défini avec succès','ok');
  await chargerPortefeuille();
  goHome();
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
// ── IDENTIFIER UN MEMBRE PAR TÉLÉPHONE (hors portefeuille) — Prompt 7 ──
// Contrairement à filtrerRecherche() qui ne cherche que dans le portefeuille
// assigné, cette fonction interroge l'ensemble des membres pour permettre au
// collecteur de vérifier l'identité de n'importe quel membre sur le terrain
// (nom, numéro matricule, types de comptes), sans pouvoir faire d'opération
// financière dessus s'il n'est pas dans son portefeuille.
async function identifierMembreParTel(){
  const telRaw = document.getElementById('lookupTelInput').value.trim();
  const resultEl = document.getElementById('lookupTelResult');
  if(!telRaw){ resultEl.innerHTML = ''; return; }
  const telNorm = telRaw.replace(/\D/g,'');

  resultEl.innerHTML = '<div style="text-align:center;padding:10px;color:var(--muted);font-size:12px">Recherche en cours...</div>';

  if(!navigator.onLine){
    resultEl.innerHTML = '<div style="text-align:center;padding:10px;color:var(--red);font-size:12px">Connexion requise pour identifier un membre hors de votre portefeuille</div>';
    return;
  }

  try{
    const membres = await gasGet('nfs_membres');
    if(!membres || !Array.isArray(membres)){
      resultEl.innerHTML = '<div style="text-align:center;padding:10px;color:var(--red);font-size:12px">Erreur réseau — réessayez</div>';
      return;
    }
    const trouve = membres.find(m => String(m.tel||'').replace(/\D/g,'').endsWith(telNorm.slice(-9)));
    if(!trouve){
      resultEl.innerHTML = '<div style="text-align:center;padding:10px;color:var(--muted);font-size:12px">Aucun membre trouvé avec ce numéro</div>';
      return;
    }
    const produits = trouve.produits || 'Épargne';
    resultEl.innerHTML = `
      <div style="background:#F8FAFC;border:1px solid var(--border);border-radius:10px;padding:12px;display:flex;align-items:center;gap:12px">
        <div style="width:44px;height:44px;border-radius:50%;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;flex-shrink:0">${(trouve.nom||'?')[0]}${(trouve.prenom||'?')[0]}</div>
        <div>
          <div style="font-size:14px;font-weight:700;color:var(--navy)">${trouve.nom} ${trouve.prenom}</div>
          <div style="font-size:11px;color:var(--blue);font-weight:600">${trouve.id}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px">Comptes : ${produits}</div>
        </div>
      </div>`;
  }catch(e){
    console.error('Erreur identifierMembreParTel:', e);
    resultEl.innerHTML = '<div style="text-align:center;padding:10px;color:var(--red);font-size:12px">Erreur technique — réessayez</div>';
  }
}

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
  if (!el) return;
  const sousMinimum = currentOpType === 'RETRAIT' && soldeApres < SOLDE_MIN_EPARGNE;
  el.innerHTML = `Solde après opération : <b style="color:${sousMinimum?'var(--red)':soldeApres<0?'var(--red)':'var(--navy)'}">${fmt(soldeApres)}</b>`
    + (sousMinimum ? `<br><span style="color:var(--red);font-size:11px">⚠️ Le solde Épargne minimum de ${fmt(SOLDE_MIN_EPARGNE)} doit être conservé — retrait maximum : ${fmt(Math.max(0, soldeActuel - SOLDE_MIN_EPARGNE))}</span>` : '');
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
  // Solde minimum obligatoire et non retirable sur le compte Épargne (EP)
  if (currentOpType === 'RETRAIT' && (parseFloat(m.soldeEP||0) - montant) < SOLDE_MIN_EPARGNE) {
    const maxRetirable = Math.max(0, parseFloat(m.soldeEP||0) - SOLDE_MIN_EPARGNE);
    return toast('❌ Un minimum de '+fmt(SOLDE_MIN_EPARGNE)+' doit rester sur le compte Épargne — retrait maximum : '+fmt(maxRetirable),'err');
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
