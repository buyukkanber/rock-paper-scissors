let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const action_p = document.querySelector(".action > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
// console.log(getCompChoice());

function weAreTheWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	if (letter === "s") return "Scissors";
}

function win(user, comp) {
	const	user_div = document.getElementById(user);
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${weAreTheWord(user)} beats ${weAreTheWord(comp)}. You Win!`;  //ES6 version 
	action_p.innerHTML = `You picked ${weAreTheWord(user)} and Comp picked ${weAreTheWord(comp)}`;  
	user_div.classList.add('green-glow');
	setTimeout(function() { user_div.classList.remove('green-glow')}, 290)
}

function lose(user, comp) {
	const	user_div = document.getElementById(user);
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = weAreTheWord(comp) + " beats " + weAreTheWord(user) + ". You Lose!"; //ES5 version
	action_p.innerHTML = `You picked ${weAreTheWord(user)} and Comp picked ${weAreTheWord(comp)}`;  
	user_div.classList.add('red-glow');
	setTimeout(function() { user_div.classList.remove('red-glow')}, 290)
}

function draw(user, comp) {
	const	user_div = document.getElementById(user);
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `A Draw!`;
	action_p.innerHTML = `You picked ${weAreTheWord(user)} and Comp picked ${weAreTheWord(comp)} too!`;
	user_div.classList.add('gray-glow');
	setTimeout(function() { user_div.classList.remove('gray-glow')}, 290)
}


function game(userChoice) {
	const compChoice =getCompChoice();
	switch (userChoice + compChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, compChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice, compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);
			break;
	}
}
game("c");

function main(){
	rock_div.addEventListener('click', function() {
		// console.log("you clicked on rock");
		game("r")
	})
	paper_div.addEventListener('click', function() {
		// console.log("you clicked on paper");
		game("p")
	})
	scissors_div.addEventListener('click', function() {
		// console.log("you clicked on scissors the vulcan");
		game("s")

	})
} 

main();