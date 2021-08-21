const handOptions = {
    "rock": "images/Rock.png",
    "paper": "images/Paper.png",
    "scissors": "images/Scissors.png"
}

const victory = new Audio('music/VICTORY SOUND EFFECT.mp3');
const lose = new Audio('music/You Lose.mp3');
const tie = new Audio('music/tie.mp3');

let SCORE = 0;

const pickUserHand = (hand) => {
    console.log(hand)
    // Hide the Current page
    let hands = document.querySelector('.hands');
    hands.style.display = 'none';
    // Show the next page with the hand u picked!!!
    let contest = document.querySelector('.contest');
    contest.style.display = 'flex'

    // Set the User Pick..
    document.getElementById('userPickImage').src = handOptions[hand];

    let cpHand = pickComputerHand();
    referee(hand, cpHand);
}

const pickComputerHand = () => {
    let hands = ['rock', 'paper', 'scissors']
    // Here I have used math.random , so that it can choose the index between 0 and 1.
    // And i have multiplied it by 3 so that it can choose between these 3 .
    // And math.floor helps to do that. EG:- 0.3*3 = 0.9 ,but math.floor will make it 0
    // So that it can choose between index[0,1,2]......
    let cpHand = hands[Math.floor(Math.random() * 3)]

    // Set the Computer Pick..
    document.getElementById('computerPickImage').src = handOptions[cpHand];
    return cpHand;
}

const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
        lose.play();
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
        victory.play();
    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
        tie.play();
    }
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
        victory.play();
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
        lose.play();
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
        tie.play();
    }
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
        tie.play();
        lose.play();
    }
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
        lose.play();
    }
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
        victory.play();
    }
};

const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector('.score h1').innerText = score;
}
