console.log("Dette er en enkel teller");

let teller = 0;

function skrivUt() {
    teller++;
    console.log("+1"); 
}
function total() {
    console.log("Totalen er: " + teller);
}
function senk() {
    teller--;
    console.log("-1");
}