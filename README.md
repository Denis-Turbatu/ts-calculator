# ISTRUZIONI

## Attenzione
> Nota: Il codice funziona attualmente solo da terminale.

## Prerequisiti:
- Node.js installato
- VSCode con estensione: Live Server (non necessario vista la mancata parte grafica)

## Uso
Per eseguire il codice lanciare i seguenti comandi:

- Installazione delle dipendenze:
    ```node
    npm install
- Compilazione del file TypeScript tramite tsconfig.json:
    ```typescript
    tsc
- Oppure compilazione del file specifico ***(questo è solo a scopo informativo. Entrambi i comandi sono validi per la giusta compilazione)***:
    ```typescript
    tsc ./src/index.ts --outDir ./dist
- Esecuzione del codice JavaScript generato
    ```node
    node ./src/index.js
# CONSEGNA

Esercizio 1: Calcolatrice flessibile

Creare uno script TS per:

    Definire una funzione calculate che accetta due numeri e un operatore (+, -, *, /).
    Utilizzare un'unione di tipi per rappresentare l'operatore.
    Implementare una logica che esegua l'operazione corrispondente all'operatore fornito.
    Gestire i casi di divisione per zero utilizzando un type guard.

Extra: 
    Aggiungere un controllo per verificare se gli input sono effettivamente dei numeri.
    Spostare il programma in un'interfaccia grafica

# INPUT

[X] Creare 3 variabili dentro i paramtri della funzione: numero1, numero2, operatore

# LOGICA

[X] Importare la libreria per supportare gli input dell'utente da terminale
[X] Prendere in input il primo numero
[X] Rimanere in attesa dell'operatore
[X] Rimanere in attesa per il secondo numero
[X] Eseguire l'operazione matemetica
[X] Ritornare il risultato finale
