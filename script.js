
// --- Elenco immagini (1..31) ---
const photos = [
  "images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg",
  "images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg",
  "images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg","images/15.jpg",
  "images/16.jpg","images/17.jpg","images/18.jpg","images/19.jpg","images/20.jpg",
  "images/21.jpg","images/22.jpg","images/23.jpg","images/24.jpg","images/25.jpg",
  "images/26.jpg","images/27.jpg","images/28.jpg","images/29.jpg","images/30.jpg",
  "images/31.jpg"
];

// --- Frasi inline (puoi spostarle in quotes.json in futuro) ---
const quotes = [
  "L’amicizia è la casa che ti porti dietro: ovunque vai, sai che c’è una luce accesa per te.",
  "Con te le piccole cose diventano ricordi grandi.",
  "Grazie per i messaggi semplici che mi hanno tenuto insieme nei giorni complicati.",
  "Se inciampo, tu non ridi: mi prendi per mano e mi aiuti a camminare meglio.",
  "La distanza misura i chilometri, non il bene che ci vogliamo.",
  "Le risate con te hanno il suono di una cura.",
  "Non prometti di esserci sempre: ci sei davvero, e basta.",
  "Ci sono persone che ti ascoltano; tu mi capisci.",
  "Amico è chi ti vede fragile e ti chiama forte senza far rumore.",
  "Con te il tempo ha più spazio."
];

// --- Riferimenti DOM ---
const img = document.getElementById("photo");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const quoteEl = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuote");

// --- Stato ---
let idx = 0;

// --- Funzioni ---
function showPhoto(i){
  if (!img) return;
  img.style.opacity = 0;
  setTimeout(()=>{
    const safeIndex = (i % photos.length + photos.length) % photos.length;
    img.src = photos[safeIndex];
    img.style.opacity = 1;
  }, 120);
}

function randomQuote(){
  if (!quotes.length || !quoteEl) return;

  const q = quotes[Math.floor(Math.random() * quotes.length)];

  // fade-out
  quoteEl.classList.add("is-fading");

  setTimeout(() => {
    quoteEl.textContent = q;
    // fade-in
    quoteEl.classList.remove("is-fading");
  }, 180);
}


function quoteOfTheDay(){
  if (!quotes.length || !quoteEl) return;

  const d = new Date();
  const seed = d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate();
  const q = quotes[seed % quotes.length];

  quoteEl.classList.add("is-fading");
  setTimeout(() => {
    quoteEl.textContent = q;
    quoteEl.classList.remove("is-fading");
  }, 180);
}


// --- Eventi ---
prevBtn?.addEventListener("click", ()=>{ idx = (idx - 1 + photos.length) % photos.length; showPhoto(idx); });
nextBtn?.addEventListener("click", ()=>{ idx = (idx + 1) % photos.length; showPhoto(idx); });
newQuoteBtn?.addEventListener("click", randomQuote);

// --- Init (lo script ha defer, quindi il DOM è pronto) ---
(function init(){
  showPhoto(idx);
  quoteOfTheDay(); // oppure randomQuote();
})();
``
