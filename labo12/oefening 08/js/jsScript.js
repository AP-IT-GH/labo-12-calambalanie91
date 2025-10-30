let huidige_uur = 14;
let uur_toevoegen = 33;
console.log(`Het is nu ${huidige_uur}:00 uur.`);
console.log(
  `Over ${uur_toevoegen} is het ${(huidige_uur + uur_toevoegen) % 24} uur`
);

