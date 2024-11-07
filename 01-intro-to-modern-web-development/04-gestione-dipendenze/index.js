import { addDays, getDay, minutesToHours } from 'date-fns';

const initialDate = new Date(2014, 8, 1);
const result = addDays(initialDate, 0);
console.log(result.toLocaleDateString());


// Giorni della settimana da 0 a 6 (0 = domenica, 6 = sabato)
const date = new Date(2012, 1, 25);
const dayOfWeek = getDay(date);

console.log(dayOfWeek);


// Esempio di utilizzo
const minutes1 = 120;
const result1 = minutesToHours(minutes1);
console.log(`120 minuti equivalgono a ${result1} ore.`); // Dovrebbe stampare "2"

const minutes2 = 179;
const result2 = minutesToHours(minutes2);
console.log(`179 minuti equivalgono a ${result2} ore.`); // Approssima per difetto a "2"
