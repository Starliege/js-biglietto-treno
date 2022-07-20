alert("Benvenuto/a! Ordina qui il tuo biglietto!");

let distance = prompt("Quanti chilometri vuoi percorrere?");
let age = prompt("Quanti anni hai?");
let price = distance * 0.21;

if (age <= 0) {
  alert("Chi non è ancora nato non può viaggiare in treno, sorry!");
  location.reload();
}
else if (age < 18) {
  price = price - ((price / 100) * 20);
}
else if (age >= 65 && age < 140) {
  price = price - ((price / 100) * 40);
}
else if (age > 140) {
  alert("Per te abbiamo un treno diverso, molto speciale...");
  location.reload();
}

price = price.toFixed(2);
document.getElementById("prezzo-biglietto").innerHTML = price;