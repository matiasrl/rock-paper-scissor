/*
    Definicion de variables, para no estar llamando los doc en cada funcion.
*/
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_div = document.querySelector(".result > p");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("r");
const scissor_div = document.getElementById("s");
const paper_div = document.getElementById("p");

/*
    La funcion computerChoice nos sirve para asignar un valor a la computadora,
    en este caso tenemos 3 opciones, las cuales selecciona al azar, cada vez que el usuario
    selecciona una opción.
*/
function computerChoice(){
    const choice = ["p","r","s"];
    const random = Math.floor((Math.random() * 3));
    console.log(random);
    return choice[random];
}

/*
    La funcion win nos permite mostrar el score que lleva cada jugador en el html,
    de este modo si la computadora o usuario gana, se va sumando de a uno sus puntos.
*/
function win(result, compChoice, userChoice) {
    if (result == "user") {
        userScore++;
        userScore_span.innerHTML = userScore; //cambia el score que se muestra en la pantalla del html (propiedad inner)
        result_div.innerHTML = convertWord(userChoice) + " beats " + convertWord(compChoice) +  ". You win!";
    }else if (result == "comp") {
        compScore++;
        compScore_span.innerHTML = compScore;
        result_div.innerHTML = convertWord(compChoice) + " beats " + convertWord(userChoice) +  ". Computer win!";
    }else{
        result_div.innerHTML = convertWord(compChoice) + " is the same as " + convertWord(userChoice) +  ". Nobody lose!";
    }
}


/*
    La función whoWins no hace la validación de quien gana en el juego,
    según una serie de opciones. Una vez validada la opción se ejecuta
    una funcion llamada win.
*/
function whoWins(userChoice){
    const compChoice = computerChoice(); 

    switch (userChoice + compChoice) {
        case "pr":
        case "sp":
        case "rs":
            win("user", compChoice, userChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            win("comp", compChoice, userChoice);
            break;
        default:
            win("nobody", compChoice, userChoice);
            break;
    }
}

//Se llama a la funcion main.
main();

/*
    La funcion main se ejecuta al hacer click a una de las opciones. 
    Dependiendo de la opción se llama a la funcion whoWins, pasando por
    parametros el valor que tiene cada opción.
*/
function main(){
    rock_div.addEventListener('click', () => whoWins("r"));
    
    scissor_div.addEventListener('click', () => whoWins("s"));
    
    paper_div.addEventListener('click', () => whoWins("p"));
}

function convertWord(word){
    if (word == "p") {
        return "Paper";
    }else if(word == "s") {
        return "Scissor";
    }else{
        return "Rock";
    }
}

//test
