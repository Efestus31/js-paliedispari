""/**
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 *  Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
 */

//input utente e numeri casuali della cpu
let div = prompt("scrivi pari o dispari")
let user_num = Number(prompt("ciao!, inserisci un numero da 1 a 5"));

let sum = 0;
//function numero casuale
function random_num(){
    return Math.floor(Math.random()* 5) + 1;
}

//function per sommare i numeri inseriti
function num_sum(){
    let cpu_num = random_num();
    sum = user_num + cpu_num;
    return {sum, cpu_num}
}

//function per stabilire se il numero sia pari
function is_even(){
    return num % 2 === 0;
}

// log in console dei risultati finora
