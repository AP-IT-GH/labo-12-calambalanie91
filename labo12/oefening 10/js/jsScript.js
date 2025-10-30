let text =
  "De winnende lottonummers van deze week: 05,09,13,18,27,44. Proficiat aan alle deelnemers.";
let formattedLottoNummers = text.substring(40, 57);
console.log(formattedLottoNummers.replaceAll(",", "|"));
