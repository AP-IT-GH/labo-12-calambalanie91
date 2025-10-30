let email = "calamba.lanie@ap.be";
let index = email.indexOf("@");
let namePart = email.substring(index, 0);
let nameEmail = namePart.replace(".", " ").toLocaleUpperCase;
console.log(`De eigenaar van ${email} is ${nameEmail}`);
