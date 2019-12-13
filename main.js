
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



//player Constructor
function Player(name,lastLearnLevel, lastTestLevel, lastScoreLevel,wrongQuestionsArr) {
	this.name = name;
	this.lastLearnLevel;
	this.lastTestLevel;
	this.lastScoreLevel,
	this.wrongQuestionsArr
	
	
}
// make this a toggle with button label Eng>It or It>Eng
var switchLanguage = "English"
// get and ammend from dropdown
var currentLevel = 1
// may need several score variables or an array
var storedScores = []
var currentScore = 0
// on button click, start function
var start = true
// if next is clicked, timer stops
var next = false
//if stop is clicked, program stops
var stop = false
// if clear is clicked, clear everything
// should this be global?
var clear = true
//  if learn = true, testing = false and vice versa
var learn = true
var testing = false
var count = 0
var correctAnswer = ''
var Answer = ""
var wrongAnswers = []
var wrongCount = 0
var rightCount = 0
var userName = ""
//********************************************************


var q = document.querySelector("input")
var qq = document.getElementsByTagName("input")
var z = document.getElementById('Name')
var zz = document.getElementsByClassName("input")[0].value;
console.log(q)
console.log(qq)
console.log(z)
console.log(zz)

/* event listener */
document.getElementsByName("Name")[0].addEventListener('change', doThing);

/* function */
function doThing(){
   console.log('Hi"' + this.value + '"!');
   userName = this.value;
   console.log(this.value)
    console.log(userName)
}



// below we initiate all buttons

//below works with first flexItem
 var items = document.getElementsByClassName('flex-item');
console.log(items)
console.log(items.item(0).innerHTML);
console.log(items[1]);
//items[1].style.backgroundColor = 'red'
//items[1].textContent = 'Hello 2'; 


// INITIALIZE TOP ROW "BUTTONS"
	//FirstRow
	//THIS WORKS. UNCOMMENT LATER
	//PULL VALUES FROM ARRAY OR OBJECT OF STORED DATA
	 var row1 = document.getElementsByClassName('flex-item')
	console.log(row1)
	//row1[1].textContent = num.toString(currentLevel)
	//row1[2].value = num.toString(currentScore)
	row1[1].textContent = "Level " + currentLevel
	console.log(row1[2])
	row1[2].textContent = "Score = " + currentScore  
	
//	INITIALIZE SECOND ROW "BUTTONS"



	 var row2 = document.getElementsByClassName('flex-item2')
	console.log(row2)
	//var userName = document.getElementsByTagName('input')[0].value
	/* var userName = document.querySelector('input');
	document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 13) {
      console.log("entered")
    }
	});  */
	//console.log(userName)
	//userName.value = "cat"
	//row2[0].style.backgroundColor = 'white'
	/* row2[0].addEventListener('click', function() {
		console.log("what");
		console.log(userName);					
	}); */
	
	
	//row2[1].style.backgroundColor = 'green'
	row2[1].addEventListener('click', function() {
		if(row2[1].innerText === "English>Italian") {
		console.log(row2[1].innerText)	
		row2[1].innerText = "Italian>English";
		console.log(row2[1].innerText)
		} 
		 else if(row2[1].innerText === "Italian>English") {
			console.log(row2[1].innerText);
		  (row2[1].innerText = "English>Italian");
		  console.log(row2[1].innerText);
		}					
	});
	
	/* row2[1].addEventListener('click',function()  {
		if( row2.innerText = "English>Italian") {
			row2.innerText = "Italian>English";
		} else if (row2.innerText = "Italian>English"){
			row2.innerText = "English>Italian"
		} 
		
	});*/
	
	/* row2First= row1[0]
	row2First.addEventListener('click', function() {
		console.log("row2First")
	});
	
	row2First= row1[1]
	
	row2First.addEventListener('click', function() {
	console.log("row2Second")
	});
	 */
	row2[2].addEventListener('click', function(){
			row2[2].style.backgroundColor = 'green'
			row2[3].style.backgroundColor = 'lightblue'
			learn = true
			testing = false
			count = 0
		});
		
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
		
		row3[1].addEventListener('click', function(){
			row3[1].style.backgroundColor = 'darkorange'
			row3[1].style.backgroundColor = 'orange'
			next = true
			startUp()
		});
		
		row3[2].addEventListener('click', function(){
			row3[0].style.backgroundColor = 'lightblue'
			row3[1].style.backgroundColor = 'lightblue'
			row3[2].style.backgroundColor = 'lightblue'
			start = false
			stop = true
			next = false
			count = 0
		});
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
	

//Register Responses
	
	var row4 = document.getElementsByClassName('flex-item3')
		row4[0].addEventListener('click', function(){
			//row4[0].style.backgroundColor = 'yellow'
			console.log("clickedBigBox1")
			
		});
		
		row4[1].addEventListener('click', function(){
			var answer = row4[1].innerText;			
			console.log(correctAnswer)
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
		
		row4[2].addEventListener('click', function(){
			//row4[1].style.backgroundColor = 'yellow'
			console.log("clickedBigBox2");
			var answer = row4[1].innerText;
			//currentScore = (100 *((count+1-wrongCount)/count)).toFixed(0)
			//console.log(eval(currentScore))
			//var temp1 = document.getElementsByClassName('flex-item')
			//temp1[2].textContent = "Score = " + currentScore 
			console.log(answer)
			console.log(correctAnswer)
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
			console.log(userName)
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
			console.log(userName)
		}	 
		
			
		console.log(userName)	
	}
	
	
	
	
	
    /* start.addEventListener('click', function() {
	console.log(start)
    items2[0].style.backgroundColor = 'green'
	items[0].style.backgroundColor = 'pink';
	items[1].style.backgroundColor = 'black';
	items[2].style.backgroundColor = 'black'; 
	note below statement, with two assignments actually works
	items[0].innerText = items[1].textContent = PHRASES[0][0][0];
	items[0].innerText = PHRASES[0][0][0];
	setTimeout(saysomething,1500)
		function saysomething()  {
			items[1].style.backgroundColor = 'yellow';
			items[2].style.backgroundColor = 'yellow';
			items[1].textContent = PHRASES[0][1][0];
			items[2].textContent = PHRASES[0][2][0];
		}
	
}); 
  */


//var items6 = document.getElementsByClassName('flex-item9');
//console.log(items6)
//console.log(items6.item(0).textContent);
//console.log(items6[0]);
//items6[1].style.backgroundColor = 'red'
//items6[1].textContent = 'Hello 2'; 

/* console.log(items)
console.log(items.item(0).innerHTML);
console.log(items[1]);
items[1].style.backgroundColor = 'red'
items[1].textContent = PHRASES[0][0][0];
console.log(PHRASES[0][0][0]) */

//var items2 = document.getElementsByClassName('flex-item5');
//items2[0].style.backgroundColor = 'red'

/* var start2  = items2[0]
if(learn === true) {
	var learnOrTest = document.getElementsByClassName('flex-item2')
	learnOrTest[2].style.backgroundColor = 'green'
	learnOrTest[3].style.backgroundColor = 'lightblue'
	console.log("isTrue")
}
    if(testing === true) {
	var learnOrTest = document.getElementsByClassName('flex-item2')
	learnOrTest[3].style.backgroundColor = 'green'
	learnOrTest[2].style.backgroundColor = 'lightblue'
	console.log("isTrue")
}
start2.addEventListener('click', function() {
	//console.log(start)
	items2[0].style.backgroundColor = 'green'
	items[0].style.backgroundColor = 'pink';
	items[1].style.backgroundColor = 'black';
	items[2].style.backgroundColor = 'black';
	//note below statement, with two assignments actually works
	//items[0].innerText = items[1].textContent = PHRASES[0][0][0];
	items[0].innerText = PHRASES[0][0][0];
	setTimeout(saysomething,1500)
		function saysomething()  {
			items[1].style.backgroundColor = 'yellow';
			items[2].style.backgroundColor = 'yellow';
			items[1].textContent = PHRASES[0][1][0];
			items[2].textContent = PHRASES[0][2][0];
		}
	
	
	
	
}); */
/* for(var i = 0; i < items.length-1; i++){
   items[i].style.backgroundColor = '#f4f4f4';
} */


/* var start = document.getElementsByClassName('flex-item5');
console.log(start)
console.log(start.item(0).innerHTML);
console.log(start.item(0)); */

//console.log(document.getElementById('header-title'));

//var items = document.querySelectorAll('flex-item2');
//console.log(items)

 /* firstItem.addEventListener('click', function() {
	console.log(firstItem)
	firstItem.style.backgroundColor = 'yellow';
	
});  */

 //Let's put some text inside a div
//var firstContainer = document.getElementByClassName('flex-container3');
//var firstContainer = document.getElementsByClassName('flex-container3');
//console.log(firstContainer);
//console.log(firstContainer);
//console.log(firstContainer.innerText);
//console.log(firstContainer[2]);
//console.log(PHRASES) 

//var secondContainer = document.querySelector("#flex-container3 .flex-item3").innerText;
//console.log(secondContainer).innerHTML;
//document.querySelector(secondContainer).innerHTML = "Spanglish"




/* function pause(milliseconds) {
		const date = Date.now();
		let currentDate = null;
		do {
		  currentDate = Date.now();
		   } while (currentDate - date < milliseconds);
		}
		 */
//	pause(3000);		