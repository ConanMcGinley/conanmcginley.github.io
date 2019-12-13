// DataInitialization
//Starting with 2 arrays
//first array, PHRASES, is used for learning mode
//second array, TEST_NOUNS is used for testing.

const PHRASES = [
[["How are you?"],["Come stai?"],["CO-may STY"]],
[["How are they?"],["Come state?"],["CO-may STY"]],
[["How are they not?"],["Come state?"],["CO-may STY"]],
];

/* [["How are you?"],["Come stai?"],["CO-may STY"],],
[["How are they?"],["Come state?"],["CO-may STY"],],
[["How are they not?"],["Come state?"],["CO-may STY"],],
];
 [["How are you today?"],["Come stai oggi"],["CO-may STY oh-JEE"],]


]; 
 */
 
//********************************************************
const TEST_NOUNS = [
[["arm"],["braccio"],["dente"],[]],
[["back"],["schiena"],["coscia"],[]],
[["cheeks"],["guance"],["piede"],[]],
[["chest"],["petto"],["faccia"],[]],
[["chin"],["mento"],["schiena"],[]],
[["ear"],["orecchio"],["petto"],[]],
[["elbow"],["gomito"],["orecchio"],[]],
[["eye"],["occhio"],["capelli"],[]],
[["face"],["faccia"],["mano"],[]],
[["finger"],["dito"],["labbro"],[]],
[["fingers"],["dita"],["naso"],[]],
[["foot"],["piede"],["stomaco"],[]],
[["hair"],["capelli"],["coscia"],[]],
[["hand"],["mano"],["gola"],[]],
[["head"],["testa"],["pollice"],[]],
[["heart"],["cuore"],["lingua"],[]],
[["knee"],["ginocchio"],["pollice"],[]],
[["leg"],["gamba"],["dita"],[]],
[["lip"],["labbro"],["mento"],[]],
[["mouth"],["bocca"],["occhio"],[]],
[["neck"],["collo"],["mano"],[]],
[["nose"],["naso"],["petto"],[]],
[["shoulder"],["spalla"],["cuore"],[]],

];

//********************************************************
//Initialize Variables

// toggles which language is displayed first
var switchLanguage = "English"
// displays current level
var currentLevel = 1
// storage for player scores
var storedScores = []
//current player score
var currentScore = 0
// on button click start, start = true
var start = true
// if next is clicked, timer stops
var next = false
//if stop is clicked, program stops
var stop = false
// clear all on reset
var clear = true
//  if learn = true, testing = false and vice versa
var learn = true
var testing = false
//counting questions asked
var count = 0
//keep track of correct answers
var correctAnswer = ''
//store correct answer
var answer = ""
//array collecting wrongAnswers for review
var wrongAnswers = []
//count wrong answers
var wrongCount = 0
//store userName
var userName = ""
var rightCount = 0

//********************************************************
//player Constructor
function Player(name,lastLearnLevel, lastTestLevel, lastScoreLevel,wrongQuestionsArr) {
	this.name = name;
	this.lastLearnLevel;
	this.lastTestLevel;
	this.lastScoreLevel,
	this.wrongQuestionsArr
}
//********************************************************

//event listener for userName
document.getElementsByName("Name")[0].addEventListener('change', getPlayerName);

/* function */
function getPlayerName(){ 
   console.log('Hi "' + this.value + '"!');
   userName = this.value;
   console.log(this.value)   
}
//********************************************************
//intialize first row, level and score
var row1 = document.getElementsByClassName('flex-item')
	row1[1].textContent = "Level " + currentLevel
	row1[2].textContent = "Score = " + currentScore  
	
//********************************************************
//initialize second row, user,ENG>IT, Learn mode, Test mode

//initialize english to italian, italian to english toggle button
var row2 = document.getElementsByClassName('flex-item2')
	row2[1].addEventListener('click', function() {
		if(row2[1].innerText === "English>Italian") {
			console.log(row2[1].innerText)	
			row2[1].innerText = "Italian>English";
			console.log(row2[1].innerText)
		} 
		 else if(row2[1].innerText === "Italian>English") {
			console.log(row2[1].innerText);
		  (	row2[1].innerText = "English>Italian");
			console.log(row2[1].innerText);
		}					
	});

//initialize learn button, starts learning mode
	row2[2].addEventListener('click', function(){
		row2[2].style.backgroundColor = 'green'
		row2[3].style.backgroundColor = 'lightblue'
		learn = true
		testing = false
		count = 0
	});

//initialize testing buttom, starts testing mode
	row2[3].addEventListener('click', function(){
		row2[3].style.backgroundColor = 'green'
		row2[2].style.backgroundColor = 'lightblue'
		var changebox2 = document.getElementsByClassName('flex-item3');
		changebox2[1].innerText = "Answer1"
		changebox2[2].innerText = "Answer2"
		testing = true
		learn = false
		count = 0
		});
		
		
//********************************************************
//initialize 3rd row of buttons

//initialize start button. starts learning or testing
var row3 = document.getElementsByClassName('flex-item5')
		row3[0].addEventListener('click', function(){
		row3[0].style.backgroundColor = 'green'
		row3[1].style.backgroundColor = 'orange'
		row3[2].style.backgroundColor = 'red'
		start = true
		stop = false
		count = 0
		startUp()
		});
		
//initialize next button. player chooses next prompt
	row3[1].addEventListener('click', function(){
		row3[1].style.backgroundColor = 'darkorange'
		row3[1].style.backgroundColor = 'orange'
		next = true
		startUp()
		});

//initialize stop button		
	row3[2].addEventListener('click', function(){
		row3[0].style.backgroundColor = 'lightblue'
		row3[1].style.backgroundColor = 'lightblue'
		row3[2].style.backgroundColor = 'lightblue'
		start = false
		stop = true
		next = false
		count = 0
		});
//initialize reset button		
		row3[2].addEventListener('click', function(){
			row3[0].style.backgroundColor = 'lightblue'
			row3[1].style.backgroundColor = 'lightblue'
			row3[2].style.backgroundColor = 'lightblue'
			start = false
			stop = true
			next = false
			count = 0
			currentScore = 0
		});
//********************************************************	

//get player responses


//add event listener to first "card". currently does nothing
var row4 = document.getElementsByClassName('flex-item3')	
	row4[0].addEventListener('click', function(){		
	});
	
//add event listener to second card. records response
// and determines whether answer is correct or not	
	row4[1].addEventListener('click', function(){				
			var answer = row4[1].innerText;	
			if (answer == correctAnswer) {
				rightCount++;
				console.log(rightCount)				
				score = (100 * (rightCount/(rightCount + wrongCount))).toFixed(0);
				console.log(score)
			}else if (answer !== correctAnswer) {
				wrongCount++;
				wrongAnswers.push(answer);
				score = (100 * (rightCount/(rightCount + wrongCount))).toFixed(0);
				console.log(score)
			}
			var temp1 = document.getElementsByClassName('flex-item')
			temp1[2].textContent = "Score = " + score 
			console.log(score)
			console.log(rightCount)
			console.log(wrongCount)
		});
	
//add event listener to third card. records response
// and determines whether answer is correct or not			
		
		row4[2].addEventListener('click', function(){				
			var answer = row4[1].innerText;	
			if (answer == correctAnswer) {
				rightCount++;
				console.log(rightCount)				
				score = (100 * (rightCount/(rightCount + wrongCount))).toFixed(0);
				console.log(score)
			}else if (answer !== correctAnswer) {
				wrongCount++;
				wrongAnswers.push(answer);
				score = (100 * (rightCount/(rightCount + wrongCount))).toFixed(0);
				console.log(score)
			}
			var temp1 = document.getElementsByClassName('flex-item')
			temp1[2].textContent = "Score = " + score 
			console.log(score)
			console.log(rightCount)
			console.log(wrongCount)
		});
		


//this function controls the display of questions and answers for both testing and learning		
		function startUp() {
			
	    if(learn === true) {
		testing = false
		row4 = document.getElementsByClassName('flex-item3')
		row4[0].style.backgroundColor = 'white'
		row4[1].style.backgroundColor = 'black'
		row4[2].style.backgroundColor = 'black'
		row4[0].textContent = PHRASES[count][0][0];
		row4[1].textContent = PHRASES[count][1][0];
		row4[2].textContent = PHRASES[count][2][0];
		setTimeout(answers,1000)
			function answers()  {
				row4[1].style.backgroundColor = 'white';
				row4[2].style.backgroundColor = 'white';
				
			}
			console.log(PHRASES[count][0][0]);
			console.log(PHRASES[count][1][0]);
			count++;
			console.log(count)
		}	 
		
			
			
	
	
	 if(testing === true) {
		learn = false
		row4 = document.getElementsByClassName('flex-item3')
		row4[0].style.backgroundColor = 'white'
		row4[1].style.backgroundColor = 'black'
		row4[2].style.backgroundColor = 'black'
		var rand = (Math.ceil(Math.random() * 2));
		console.log(rand)
		if (rand == 1) {
			var other = 2;
			console.log(other)
		}else{
			var other = 1;
			console.log(other)
		}
		
		
		console.log(rand)
		row4[0].textContent = TEST_NOUNS[count][0][0];
		row4[1].textContent = TEST_NOUNS[count][rand][0];
		row4[2].textContent = TEST_NOUNS[count][other][0];
		correctAnswer = TEST_NOUNS[count][1][0];
		setTimeout(answers,1000)
			function answers()  {
				row4[1].style.backgroundColor = 'white';
				row4[2].style.backgroundColor = 'white';
				
			}
			console.log(TEST_NOUNS[count][1][0]);
			console.log(TEST_NOUNS[count][2][0]);
			count++;
			console.log(count)
		}	 
	}
