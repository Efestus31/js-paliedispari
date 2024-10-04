console.log('test');


/**
 * 0. strumenti da utilizzare
 *      function   
 *      if/else 
 *      prompt
 *      split
 *      reverse
 *      join
 *      let/const
 *      bool
 */

//prompt dall' utente, variabile bool posta a falso
let pali_to_check = prompt("Ciao!, inserisci una parola che secondo te è un palindroma!");
let reite = false;

//function per invertire l'input dato dall'utente

function string_reverse(pal){
    //usiamo split per trasformare la stringa in array
    let split_string = pal.split("");

    //usiamo reverse per invertire l'array appena creato   
    let array_inverso = split_string.reverse();

    //usiamo join per fonderlo di nuovo insieme
    let reverse_string = array_inverso.join("");
    
    //return con stringa invertita e verifico se la parola è palindroma
    return reverse_string === pali_to_check;
}

if(string_reverse(pali_to_check)){
    console.log(`${pali_to_check} è palindroma`);
    
} else{
    console.log(`${pali_to_check} non è palindroma`);
    
}

