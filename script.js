let userName = document.querySelector("#userName");
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");
let qn1Button = document.querySelector(".qn1Button");
let qn2Button = document.querySelector(".qn2Button");
let qn3Button = document.querySelector(".qn3Button");
let question = document.querySelector("#question");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let iterationNumber = 0;
let qnChoice = "";
let score = 0;

let questionList = [
    "Qn1: In which NZ city is the sky tower?",
    "Qn2: Which is the closest planet to the sun?",
    "Qn3: What is a baby goat called?"
]

let aAnswer = ["Dunedin", "Venus", "Tadpole"]
let bAnswer = ["Christchurch", "Mercury", "Joey"]
let cAnswer = ["Dunedin", "Jupiter", "Kid"]
let dAnswer = ["Auckland", "Earth", "Chick"]


quiz.style.display = "none";
qn1Button.style.display = "none";
qn2Button.style.display = "none";
qn3Button.style.display = "none";

function reset() {
    answerA.style.backgroundColor = "rgb(62, 166, 201)";
    answerB.style.backgroundColor = "rgb(62, 166, 201)";
    answerC.style.backgroundColor = "rgb(62, 166, 201)";
    answerD.style.backgroundColor = "rgb(62, 166, 201)";

    question.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = aAnswer[iterationNumber];
    answerB.innerHTML = bAnswer[iterationNumber];
    answerC.innerHTML = cAnswer[iterationNumber];
    answerD.innerHTML = dAnswer[iterationNumber];
}        


function greeting() {
    headerText.innerHTML = ""
    greetingInput.style.display = "none"
    quiz.style.display = "block"
    qn1Button.style.display = "block"
    question.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = aAnswer[iterationNumber];
    answerB.innerHTML = bAnswer[iterationNumber];
    answerC.innerHTML = cAnswer[iterationNumber];
    answerD.innerHTML = dAnswer[iterationNumber];            
}

function afunction() {
    answerA.style.backgroundColor = "red";
    answerB.style.backgroundColor = "lightblue";
    answerC.style.backgroundColor = "lightblue";
    answerD.style.backgroundColor = "lightblue";
    qnChoice = "a";
}


function bfunction() {
    answerA.style.backgroundColor = "lightblue";
    answerB.style.backgroundColor = "red";
    answerC.style.backgroundColor = "lightblue";
    answerD.style.backgroundColor = "lightblue";
    qnChoice = "b";
}


function cfunction() {
    answerA.style.backgroundColor = "lightblue";
    answerB.style.backgroundColor = "lightblue";
    answerC.style.backgroundColor = "red";
    answerD.style.backgroundColor = "lightblue";
    qnChoice = "c";
}


function dfunction() {
    answerA.style.backgroundColor = "lightblue";
    answerB.style.backgroundColor = "lightblue";
    answerC.style.backgroundColor = "lightblue";
    answerD.style.backgroundColor = "red";
    qnChoice = "d";
}

function submitQn1() {
    if (qnChoice == "d") {
        score += 1;
    }
    qn1Button.style.display = "none";
    qn2Button.style.display = "block"
    iterationNumber += 1;
    
    reset();
}


function submitQn2() {
    if (qnChoice == "b") {
        score += 1;
    }
    qn2Button.style.display = "none";
    qn3Button.style.display = "block";
    iterationNumber += 1;
    
    reset();  
}

function submitQn3() {
    if (qnChoice == "c") {
        score += 1;
    }
    iterationNumber += 1;
    headerText.innerHTML = "You Scored " + score;
    quiz.style.display = "none";

    reset();
}
