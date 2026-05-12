//1) Quali sono i tipi primitivi principali in TypeScript?

//1) String
//2) Number
//3) Boolean
//4) Null
//5) Undefined
//6) Quando lo si utilizza Ts libera dal vincolo del tipo di variabile

//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

let mioNome: string = "Biagio";
let miaEtà: number = 25;
let studioTypescript: boolean = true;

//3) Tipizza il parametro della seguente funzione:

const greet = (name: string) => {
  return "Ciao " + name;
};

//4) Specifica il tipo di ritorno della seguente funzione:

const sum = (a: number, b: number): number => {
  return a + b;
};

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const aggiungiIVA = function (prezzoSenzaIva: number): number {
  return prezzoSenzaIva + prezzoSenzaIva * 0.22;
};

//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concatena = function(string1:string, string2:string):number{
    return string1 + string2
}