let startsaldo = 100000;
let rente = 0.02;
let looptijd = 7;
let eindsaldo = startsaldo * Math.pow(1 + rente, looptijd);
console.log(
  `Op een periode van ${looptijd} jaar stijgt je bezit van ${startsaldo} naar ${eindsaldo.toFixed()}.`
);
console.log(`Dit met een rentevoet van ${rente}`);
