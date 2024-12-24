const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
var defis1;
var defis2;
var defis3;
var defis4;
var defis5;
var defis6;
var defis7;

var solution = "";
switch(id){
    case '21':
        defis1 = document.getElementById("defis1")
        defis2 = document.getElementById("defis2")
        defis3 = document.getElementById("defis3")
        defis4 = document.getElementById("defis4")
        defis5 = document.getElementById("defis5")
        defis6 = document.getElementById("defis6")
        defis7 = document.getElementById("defis7")
        defis1.style.display = "none";
        defis2.style.display = "none";
        defis3.style.display = "none";
        defis4.style.display = "none";
        defis5.style.display = "none";
        defis6.style.display = "block";
        defis7.style.display = "none";
        break;
    case '25':
        defis1 = document.getElementById("defis1")
        defis2 = document.getElementById("defis2")
        defis3 = document.getElementById("defis3")
        defis4 = document.getElementById("defis4")
        defis5 = document.getElementById("defis5")
        defis6 = document.getElementById("defis6")
        defis7 = document.getElementById("defis7")
        defis1.style.display = "none";
        defis2.style.display = "block";
        defis3.style.display = "none";
        defis4.style.display = "none";
        defis5.style.display = "none";
        defis6.style.display = "none";
        defis7.style.display = "none";
        break;
    case '28':
        defis1 = document.getElementById("defis1")
        defis2 = document.getElementById("defis2")
        defis3 = document.getElementById("defis3")
        defis4 = document.getElementById("defis4")
        defis5 = document.getElementById("defis5")
        defis6 = document.getElementById("defis6")
        defis7 = document.getElementById("defis7")
        defis1.style.display = "none";
        defis2.style.display = "none";
        defis3.style.display = "block";
        defis4.style.display = "none";
        defis5.style.display = "none";
        defis6.style.display = "none";
        defis7.style.display = "none";
        break;
    case '36':
        defis1 = document.getElementById("defis1")
        defis2 = document.getElementById("defis2")
        defis3 = document.getElementById("defis3")
        defis4 = document.getElementById("defis4")
        defis5 = document.getElementById("defis5")
        defis6 = document.getElementById("defis6")
        defis7 = document.getElementById("defis7")
        defis1.style.display = "none";
        defis2.style.display = "none";
        defis3.style.display = "none";
        defis4.style.display = "none";
        defis5.style.display = "none";
        defis6.style.display = "none";
        defis7.style.display = "block";
        break;
    case '78':
        defis1 = document.getElementById("defis1")
        defis2 = document.getElementById("defis2")
        defis3 = document.getElementById("defis3")
        defis4 = document.getElementById("defis4")
        defis5 = document.getElementById("defis5")
        defis6 = document.getElementById("defis6")
        defis7 = document.getElementById("defis7")
        defis1.style.display = "none";
        defis2.style.display = "none";
        defis3.style.display = "none";
        defis4.style.display = "block";
        defis5.style.display = "none";
        defis6.style.display = "none";
        defis7.style.display = "none";
        break;
    case '82':
        defis1 = document.getElementById("defis1")
        defis2 = document.getElementById("defis2")
        defis3 = document.getElementById("defis3")
        defis4 = document.getElementById("defis4")
        defis5 = document.getElementById("defis5")
        defis6 = document.getElementById("defis6")
        defis7 = document.getElementById("defis7")
        defis1.style.display = "none";
        defis2.style.display = "none";
        defis3.style.display = "none";
        defis4.style.display = "none";
        defis5.style.display = "block";
        defis6.style.display = "none";
        defis7.style.display = "none";
        break;
    case '98':
        defis1 = document.getElementById("defis1")
        defis2 = document.getElementById("defis2")
        defis3 = document.getElementById("defis3")
        defis4 = document.getElementById("defis4")
        defis5 = document.getElementById("defis5")
        defis6 = document.getElementById("defis6")
        defis7 = document.getElementById("defis7")
        defis1.style.display = "block";
        defis2.style.display = "none";
        defis3.style.display = "none";
        defis4.style.display = "none";
        defis5.style.display = "none";
        defis6.style.display = "none";
        defis7.style.display = "none";
        break;
    default:
        console.log("problème d'id");       
}


function checkAnswer1() {
    // Calcul de la réponse correcte
    const pereNoel = 1;
    const rennes = 6;
    const lutins = rennes * 3; // Chaque renne transporte 3 lutins
    const lucioles = rennes * 2; // Chaque renne transporte 2 lucioles
    const total = pereNoel + rennes + lutins + lucioles;

    // Récupérer la réponse utilisateur
    const userAnswer = parseInt(document.getElementById("answer1").value, 10);
    const resultElement = document.getElementById("result1");

    // Vérifier si la réponse est correcte
    if (isNaN(userAnswer)) {
      resultElement.textContent = "Veuillez entrer un nombre valide.";
      resultElement.style.color = "red";
    } else if (userAnswer === total) {
      resultElement.textContent = "Bravo ! Vous avez trouvé la bonne réponse : 37 êtres vivants.";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = `Mauvaise réponse.`;
      resultElement.style.color = "red";
    }
  }

  function checkAnswer2() {
    const correctAnswer = "décembre"; // La solution correcte est décembre
    const userAnswer = document.getElementById("answer2").value.trim().toLowerCase();
    const resultElement = document.getElementById("result2");

    // Vérifier la réponse de l'utilisateur
    if (userAnswer === correctAnswer || userAnswer === "decembre") {
      resultElement.textContent = "Bravo ! Vous avez trouvé la bonne réponse : décembre.";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Mauvaise réponse.";
      resultElement.style.color = "red";
    }
  }

  function checkAnswer3() {
    const correctAnswer = "2"; // La solution correcte est le choix numéro 2
    const userAnswer = document.getElementById("answer3").value.trim();
    const resultElement = document.getElementById("result3");

    // Vérifier la réponse de l'utilisateur
    if (userAnswer === correctAnswer || userAnswer.toLowerCase() === "deux" || userAnswer.toLowerCase() === "2") {
      resultElement.textContent = "Bravo ! Vous avez trouvé la bonne réponse : Choisir l'option 2, l'ours brun est en hibernation.";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Mauvaise réponse";
      resultElement.style.color = "red";
    }
  }

  function checkAnswer4() {
    const correctAnswer = "cadeau"; // La solution correcte est "cadeau"
    const userAnswer = document.getElementById("answer4").value.trim().toLowerCase();
    const resultElement = document.getElementById("result4");

    // Vérifier la réponse de l'utilisateur
    if (userAnswer === correctAnswer || userAnswer === "Kdo") {
      resultElement.textContent = "Bravo ! Vous avez trouvé la bonne réponse : cadeau.";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Mauvaise réponse.";
      resultElement.style.color = "red";
    }
  }

  function checkAnswer5() {
    const correctAnswer = "guy relande"; // La solution correcte est "Guy Relande"
    const userAnswer = document.getElementById("answer5").value.trim().toLowerCase();
    const resultElement = document.getElementById("result5");

    // Vérifier la réponse de l'utilisateur
    if (userAnswer === correctAnswer || userAnswer === "guirlande") {
      resultElement.textContent = "Bravo ! Vous avez trouvé la bonne réponse : Guy Relande.";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Mauvaise réponse.";
      resultElement.style.color = "red";
    }
  }

  function checkAnswer6() {
    const correctAnswer = "des chocolats"; // La solution correcte est "des chocolats"
    const userAnswer = document.getElementById("answer6").value.trim().toLowerCase();
    const resultElement = document.getElementById("result6");

    // Vérifier la réponse de l'utilisateur
    if (userAnswer === correctAnswer || userAnswer === "chocolats") {
      resultElement.textContent = "Bravo ! Vous avez trouvé la bonne réponse : des chocolats.";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Mauvaise réponse.";
      resultElement.style.color = "red";
    }
  }

  function checkAnswer7() {
    const correctAnswer = "laponie"; // La solution correcte est "Laponie"
    const userAnswer = document.getElementById("answer7").value.trim().toLowerCase();
    const resultElement = document.getElementById("result7");

    // Vérifier la réponse de l'utilisateur
    if (userAnswer === correctAnswer) {
      resultElement.textContent = "Bravo ! Vous avez trouvé la bonne réponse : Laponie.";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Mauvaise réponse.";
      resultElement.style.color = "red";
    }
  }