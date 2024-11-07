const studente = {
  name: 'Nico Gasparro',
  eta: 31,
  Materie: ['Matematica', 'Scienze', 'Filosofia'],
  Indirizzo: {
    strada: 'via padella',
    citta: 'Rimini',
    Stato: 'IT',
    cap: '12345'
  }
};

// Crea le variabili
// nomeStudente , etaStudente ed estrai il suo valore dal nome e dall eta
// scienze ed estrai il suo valore da Materie in seconda posizione
// strada, citta, stato ed estrai il loro valore dall'oggetto Indirizzo

const {name: nomeStudente, eta: etaStudente, Materie, Indirizzo} = studente;
const scienze = Materie[1];
const {strada, citta, Stato} = Indirizzo;

console.log(nomeStudente, etaStudente, scienze, strada, citta, Stato); // Nico Gasparro

console.log(studente.name, studente.eta, studente.Materie[1], studente.Indirizzo.strada, studente.Indirizzo.citta, studente.Indirizzo.Stato);
