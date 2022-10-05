/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/

// INPUT
const userName = prompt("Quale è il tuo nome?");
console.log(userName);

const userSecondName = prompt("Quale è il tuo cognome?");
console.log(userSecondName);

const userColor = prompt("Quale è il tuo colore preferito?");
console.log(userColor);


// ELABORAZIONE

const userPw = userName + userSecondName + userColor + "21";
console.log(userPw);

// OUTPUT

document.getElementById("user-password").innerHTML = "La tua password è: " + userPw;