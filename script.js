
// Immagini: metti i tuoi file in /images e aggiorna l’elenco

// Elenco immagini in /images, ordine sequenziale
const photos = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/16.jpg",
  "images/17.jpg",
  "images/18.jpg",
  "images/19.jpg",
  "images/20.jpg",
  "images/21.jpg",
  "images/22.jpg",
  "images/23.jpg",
  "images/24.jpg",
  "images/25.jpg",
  "images/26.jpg",
  "images/27.jpg",
  "images/28.jpg",
  "images/29.jpg",
  "images/30.jpg",
  "images/31.jpg"
];


// Frasi: puoi anche caricarle da quotes.json via fetch
const quotes = [
  "L’amicizia è la casa che ti porti dietro: ovunque vai, sai che c’è una luce accesa per te.",
  "Con te le piccole cose diventano ricordi grandi.",
  "Grazie per i messaggi semplici che mi hanno tenuto insieme nei giorni complicati.",
  "Se inciampo, tu non ridi: mi prendi per mano e mi aiuti a camminare meglio.",
  "La distanza misura i chilometri, non il bene che ci vogliamo.",
  "Le risate con te hanno il suono di una cura."
  // …continua con il dataset completo
];

let idx = 0;
const img = document.getElementById("photo");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const quoteEl = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuote");

// Mostra foto corrente
function showPhoto(i){
  img.style.opacity = 0;
  setTimeout(()=>{
    img.src = photos[i % photos.length];
    img.style.opacity = 1;
  }, 150);
}

// Frase casuale
function randomQuote(){
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = q;
}

// Frase del giorno (opzionale, seed per data)
function quoteOfTheDay(){
  const d = new Date();
  const seed = d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate();
  const q = quotes[seed % quotes.length];
  quoteEl.textContent = q;
}

prevBtn.addEventListener("click", ()=>{ idx = (idx - 1 + photos.length) % photos.length; showPhoto(idx); });
nextBtn.addEventListener("click", ()=>{ idx = (idx + 1) % photos.length; showPhoto(idx); });
newQuoteBtn.addEventListener("click", randomQuote);

// Avvio
showPhoto(idx);
// Usa una delle due logiche:
quote
