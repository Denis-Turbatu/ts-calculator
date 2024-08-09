"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importazione di Readline-sync per gli input del utente
var readlineSync = require("readline-sync");
// Creazione struttura della funzione
function calculate(num1, num2, operator) {
    switch (operator) {
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
var numberOne = Number(readlineSync.question("Inserisci il primo numero: "));
var signOpereator = readlineSync.question("Che operazione vuoi svolgere: ");
var numberTwo = Number(readlineSync.question("Inserisci il secondo numero: "));
calculate(numberOne, numberTwo, signOpereator);
