const amountToPay = 454;
const amountGave = 500;
const numberOf50s = Math.ceil(amountToPay / 50);
const change = amountGave - amountToPay;
console.log(`Te betalen bedrag is ${amountToPay}`);
console.log(`Je hebt ${numberOf50s} van 50 nodig.`);
console.log(`je wisselgeld is dan ${change}`);
