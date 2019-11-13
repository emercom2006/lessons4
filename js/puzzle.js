var score = 0;

		function checkAnswer(inputId, answers){
			var userAnswer = document.getElementById(inputId).value;
			userAnswer = userAnswer.toLowerCase();
			for(var i = 0; i < answers.length; i++){
				if(userAnswer == answers[i]){
					score++;
					break;
				}
			}
		}
		
		function checkAnswers() {

			checkAnswer("userAnswer1", ["девять","9"]);
			checkAnswer("userAnswer2", ["четыре", "4"]);
			checkAnswer("userAnswer3", ["единица", "1"]);

			alert("Вы отгадали " + score + " загадок");

		}