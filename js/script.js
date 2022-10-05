/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/

// INPUT
const userName = prompt("Quale è il tuo nome?");
console.log(userName);

const userLastName = prompt("Quale è il tuo cognome?");
console.log(userLastName);

const userColor = prompt("Quale è il tuo colore preferito?");
console.log(userColor);


// ELABORAZIONE

const userPw = userName + userLastName + userColor + "21";
console.log(userPw);

// OUTPUT

document.getElementById("user-password").innerHTML = "La tua password è: " + userPw;