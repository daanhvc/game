var rij = 0;
var vakjes = [];
var index = 0;

function setup() {
 canvas = createCanvas(451,451);
 canvas.parent('processing');
 background('coral');
 fill('white');
}

function draw() {
 for (var rij = 0; rij < 450; rij += 50) {
    for (var kolom = 0; kolom < 450; kolom += 50) {
      vakjes.push([kolom, rij]);
      if (kolom === 300 && rij === 150) {
        fill('orange');
      } else {
        fill('white');
      }
      rect(kolom, rij, 50, 50);
      index++;
    }
 }
 
 // De coördinaten van het gekleurde vakje
 var gekleurdVakje = vakjes[index-1]; // We moeten 1 aftrekken van de index omdat de array bijwerkt voor de volgende iteratie
 console.log('Gekleurd vakje: ' + gekleurdVakje);
 
 // De rij en kolom van het gekleurde vakje
 var kolom = gekleurdVakje[0];
 var rij = gekleurdVakje[1];
 console.log('Rij: ' + rij + ', Kolom: ' + kolom);
}