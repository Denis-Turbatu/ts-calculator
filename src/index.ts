//Importazione di Readline-sync per gli input del utente
import * as readlineSync from 'readline-sync';

// Creazione struttura della funzione
function calculate(num1: number, num2: number, operator: string): number | string {

    switch(operator){
        case '+': 
            
            return num1 + num2;
            
            break;
        case '-': 
            return num1 - num2;
            
            break;
        case '*': 
            return num1 * num2;
            
            break;
        case '/': 
            return num1 / num2;
            
            break;
        default: 
            return "Non hai inserito un operatore valido!";

            break;
    }
}

let numberOne: number = Number(readlineSync.question("Inserisci il primo numero: "));
let signOpereator: string = readlineSync.question("Che operazione vuoi svolgere: ")
let numberTwo: number = Number(readlineSync.question("Inserisci il secondo numero: "));

const result: number | string = calculate(numberOne, numberTwo, signOpereator);
console.log(result);