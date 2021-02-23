//1. CONSTANT
	//Cell Boxes
	const card1 = "a";
	const card2 = "a";
	const card3 = "b";
	const card4 = "b";
	const card5 = "c";
	const card6 = "c";
	const card7 = "d";
	const card8 = "d";
	const card9 = "e";
	const card10 = "e";
	const card11 = "f";
	const card12 = "f";

//2. VARIABLES
	//Cell Boxes
		// let userSelection = "";
		// let userSelection1 = card1;
		// let userSelection2 = card2;
		// let userSelection3 = card3;
		// let userSelection4 = card4;
		// let userSelection5 = card5;
		// let userSelection6 = card6;
		// let userSelection7 = card7;
		// let userSelection8 = card8;
		// let userSelection9 = card9;
		// let userSelection10 = card10;
		// let userSelection11 = card11;
		// let userSelection12 = card12;

	//Flipping Variables
		let prevCard = "";
		let prevCell = null;
	 

	//Card Matches
		// let cardsFlipped = 0;
	




// let time = 60;
// let clicks = 0;
// Let score = 0;
// let numOfCards = 12;

//3. ELEMENT REFERENCES	
	//Cell Boxes
	let c1 = document.getElementById("cell1");
	let c2 = document.getElementById("cell2");
	let c3 = document.getElementById("cell3");
	let c4 = document.getElementById("cell4");
	let c5 = document.getElementById("cell5");
	let c6 = document.getElementById("cell6");
	let c7 = document.getElementById("cell7");
	let c8 = document.getElementById("cell8");
	let c9 = document.getElementById("cell9");
	let c10 = document.getElementById("cell10");
	let c11 = document.getElementById("cell11");
	let c12 = document.getElementById("cell12");



	//Filliping Element References




// let timeLeft = document.getElementById("countDown");

// let score = document.getElementById("scoreKeeper");
// let reset = document.getElementById("resetButton");


//4. EVENT LISTENERS
	//Cell Boxes
	c1.addEventListener("click", selectOneWasClicked);
	c2.addEventListener("click", selectTwoWasClicked);
	c3.addEventListener("click", selectThreeWasClicked);
	c4.addEventListener("click", selectFourWasClicked);
	c5.addEventListener("click", selectFiveWasClicked);
	c6.addEventListener("click", selectSixWasClicked);
	c7.addEventListener("click", selectSevenWasClicked);
	c8.addEventListener("click", selectEightWasClicked);
	c9.addEventListener("click", selectNineWasClicked);
	c10.addEventListener("click", selectTenWasClicked);
	c11.addEventListener("click", selectElevenWasClicked);
	c12.addEventListener("click", selectTwelveWasClicked);


	//Flipping Event Listeners
	



// timeLeft.addEventListener("click", whenFirstCardIsClicked)


//5. FUNCTIONS

	//CELL 1 FUNCTION
function selectOneWasClicked() {
    c1.innerHTML = "A"; //selecting the innerHTML for Cell 1 and changing it to "A"
    if (prevCard ==="A" || prevCard === "") { //This line is telling us if previous card equals to "1" OR if previous card is blank, nothing happens
    }
    else {
        setTimeout(function() {
			c1.innerHTML = "X"; //or else, if c1's innerHTML does not match, it will flip back to an X
			prevCell.innerHTML = "X"; //it will also set previous cell to "x" which is the back of the card, if it is not a match
		}, 1000) //This timer is for the card function to flip back it doesn't match
    }
    	setTimeout(function() {
			prevCard = "A"; //We are setting the previous card to A
			prevCell = c1; //We are setting the previous Cell to c1, which is where this sell is, which contant the letter "A" 
		}, 1100)//This timer is setting the previous card letter 
}


	//CELL 2 FUNCTION

function selectTwoWasClicked() {
    c2.innerHTML = "A";
    if(prevCard ==="A" || prevCard === "") {
    }
    else {
        setTimeout(function() {
			c2.innerHTML = "X";
			prevCell.innerHTML = "X";
		}, 1000)
    }
    setTimeout(function(){
		prevCard = "A";
    	prevCell = c2;
	}, 1100)
}



	//CELL 3 FUNCTION

function selectThreeWasClicked() {
    c3.innerHTML = "B";
    if(prevCard ==="B" || prevCard === "") {
    }
    else {
        setTimeout(function() {
			c3.innerHTML = "X";
			prevCell.innerHTML = "X";
		}, 1000) 
	}   
		setTimeout(function() {
			prevCard = "B";
			prevCell = c3;
		}, 1100)
}

	//CELL 4 FUNCTION


function selectFourWasClicked() {
	c4.innerHTML = "B";
	if (prevCard === "B" || prevCard === "") {
	} 
	else {
		setTimeout(function () {
			c4.innerHTML = "X";
			prevCell.innerHTML = "X";
		}, 1000);
	}
	setTimeout(function() {
		prevCard ="B";
		prevCell = c4;
	}, 1100)
}

	//CELL 5 FUNCTION


function selectFiveWasClicked(){
	c5.innerHTML = "C"
	if (prevCard === "C" || prevCard == "") {
	}
	else {
		setTimeout(function () {
			c5.innerHTML = "X";
			prevCell.innerHTML = "X";
		}, 1000);
	}
	setTimeout(function(){
		prevCard = "C";
		prevCell = c5;
	}, 1100)
}

	//CELL 6 FUNCTION

function selectSixWasClicked() {
	c6.innerHTML = "C"
	if (prevCard === "C" || prevCard === ""){
	}
	else {
		setTimeout(function(){
			c6.innerHTML = "X";
			prevCell.innerHTML = "X";
		}, 1000)
	}
	setTimeout(function(){
		prevCard = "C";
		prevCell = c6;
	}, 1100)
}

	//CELL 7 FUNCTION

function selectSevenWasClicked() {
	c7.innerHTML = "D"
	if (prevCard === "D" || prevCard === ""){
	}
	else {
		setTimeout(function(){
		c7.innerHTML = "X";
		prevCell.innerHTML = "X";
		}, 1000)
	}
	setTimeout(function(){
		prevCard = "D";
		prevCell = c7
	}, 1100)
}

	//CELL 8 FUNCTION

function selectEightWasClicked() {
	c8.innerHTML = "D"
	if (prevCard === "D" || prevCard ===""){
	}
	else {
		setTimeout(function(){
			c8.innerHTML = "X";
			prevCell.innerHTML = "X";
		}, 1000)
	}
	setTimeout(function(){
		prevCard = "D";
		prevCell = c8;
	}, 1100)
}


	//CELL 9 FUNCTION

function selectNineWasClicked() {
	c9.innerHTML = "E"
	if (prevCard === "E" || prevCard ==""){
	}
	else {
		setTimeout(function(){
			c9.innerHTML = "X";
			prevCell.innerHTML = "X";
		}, 1000)
	}
	setTimeout(function(){
		prevCard = "E";
		prevCell = c9
	}, 1100)
}


	//CELL 10 FUNCTION

function selectTenWasClicked() {
	c10.innerHTML = "E"
	if (prevCard === "E" || prevCard === ""){
	}
	else {
		setTimeout(function(){
			c10.innerHTML = "X" ;
			prevCell.innerHTML = "X";
		}, 1000)
	}
	setTimeout(function(){
		prevCard = "E";
		prevCell = c10;
	}, 1100)
} 


	//CELL 11 FUNCTION

function selectElevenWasClicked() {
	c11.innerHTML = "F"
	if (prevCard === "F" || prevCard === ""){
	}
	else {
		setTimeout(function(){
			c11.innerHTML = "X";
			prevCell.innerHTML = "X";
		}, 1000)
	}
	setTimeout(function(){
		prevCard = "F";
		prevCell = c11;
	}, 1100)
}


	//CELL 12 FUNCTION

function selectTwelveWasClicked() {
	c12.innerHTML = "F"
	if (prevCard === "F" || prevCard ===""){
	}
	else {
		setTimeout(function(){
			c12.innerHTML = "X";
			prevCell.innerHTML = "X";
		}, 1000)
	}
	setTimeout(function(){
		prevCard = "F";
		prevCell = c12;
	})
}










// we are going to add an event listener click, so each time you click a card, it will flip over

// if two cards with the same letter is selected, it will be a match and it will stay flipped open and add 1 point to the total score
// but if the card doesn't match it will flip right back


// time will start when the first card is clicked

// if you don't match it by the minute mark, you will receive an alert saying "you lost/please try again"



// CONSTANT

// const card1 = "a";
// const card2 = "a";
// const card3 = "b";
// const card4 = "b";

// Define required variables used to track the state of the game

// Let score = 0;
// numOfCards = 12;

// when the game starts there is no user selection
// letUserSelection = "" for the beginning of the game

// userSelection1 = card1
// userSelection2 = card2
// countDownTime = 1:00


// Reference all cell's and do even listeners (DOM)


//FUNCTIONS

// flip()
	// everytime a card is clicked, the specific card you clicked will flip
		// use get Element, event listener, then referencing the DOM
	// maximum number of 2 flips per turn 

// checkMatch ()
// 1. check if the 2 cards matches
// 	a. if the 2 cards match, it will stay opened
// 	b. if the 2 cards do not match, it will flip back

	
// timer()
// 1. Once you click on the first card, the timer will begin to coutndown
// 2. Once the timer reaches "0" an alert will pop up saying "time is up" 
// 	a. alert()
// 3. if you beat the game before the timer is done, the time will stop. 

// reset()
// 1. Reset the game whether you are finished or not. once it resets timer will go back to 1 minute and all cards will be flipped back

// score()
// every time a pair of cards is matched, it will add 1 point