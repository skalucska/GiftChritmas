const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
var solution = "";
switch(id){
    case '21':
        solution = "LABYRINTHE";
        break;
    case '25':
        solution = "CTHULHU";
        break;
    case '28':
        solution = "WATER";
        break;
    case '36':
        solution = "LIVRES";
        break;
    case '78':
        solution = "PULL";
        break;
    case '82':
        solution = "COUTEAU";
        break;
    case '98':
        solution = "COLLANTS";
        break;
    default:
        solution = "PROBLEME";
        console.log("problème d'id");       
}
const maxTries = 6; // Nombre de tentatives maximum
let currentTry = 0;

const grid = document.getElementById("grid");
const wordLength = solution.length; // Longueur du mot

// Initialiser la grille avec des cases dynamiques
grid.style.gridTemplateColumns = `repeat(${wordLength}, 50px)`; // Colonnes dynamiques
for (let i = 0; i < maxTries * wordLength; i++) {
  const input = document.createElement("input");
  input.type = "text";
  input.maxLength = 1; // Une seule lettre par case
  input.className = "cell";
  input.dataset.index = i; // Identifiant unique pour la case
  input.addEventListener("input", focusNext); // Passer à la case suivante automatiquement
  grid.appendChild(input);
}

function focusNext(event) {
  const currentIndex = parseInt(event.target.dataset.index, 10);
  if (event.target.value && currentIndex < maxTries * wordLength - 1) {
    const nextInput = grid.querySelector(`input[data-index="${currentIndex + 1}"]`);
    nextInput.focus();
  }
}

function checkGuess() {
  const start = currentTry * wordLength;
  const inputs = Array.from(grid.querySelectorAll(".cell")).slice(start, start + wordLength);
  const guess = inputs.map(input => input.value.toUpperCase()).join("");

  if (guess.length !== wordLength) {
    alert("Veuillez remplir toutes les cases !");
    return;
  }

  for (let i = 0; i < wordLength; i++) {
    if (guess[i] === solution[i]) {
      inputs[i].classList.add("correct");
    } else if (solution.includes(guess[i])) {
      inputs[i].classList.add("present");
    } else {
      inputs[i].classList.add("wrong");
    }
    inputs[i].disabled = true; // Empêche de modifier après validation
  }

  currentTry++;

  if (guess === solution) {
    alert("Félicitations ! Vous avez trouvé le mot.");
    grid.querySelectorAll("input").forEach(input => (input.disabled = true));
  } else if (currentTry === maxTries) {
    alert(`Dommage ! Le mot était : ${solution}`);
    grid.querySelectorAll("input").forEach(input => (input.disabled = true));
  }
}