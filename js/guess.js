var answer = parseInt(Math.random() * 100);
		var playerNumber = 1;

		function readInt(){
			var number = document.getElementById("userAnswer").value;
			return parseInt(number);
		}

		function write(text){
			document.getElementById("info").innerHTML = text;
		}

		function hide(id){
			document.getElementById(id).style.display = "none";
		}

		function guess(){

			var userAnswer = readInt();
			if 
				(playerNumber == 1) 
				playerNumber = 2;
			else
				playerNumber = 1;
			if(userAnswer == answer){
				write("Поздравляем! Угадал игрок " + playerNumber);
				hide("button");
				hide("userAnswer");
			} else if(userAnswer == 1000){
				write("Вы вышли из игры <br>Правильный ответ: " + answer);
				hide("button");
				hide("userAnswer");
			} else if(userAnswer > answer){
				write("Вы ввели слишком большое число <br> Попробуйте еще раз. <br>Ходит игрок " + playerNumber +"<br>Для выхода, введите 1000");
			} else if(userAnswer < answer){
				write("Вы ввели слишком маленькое число <br> одит игрок " + playerNumber +"<br>Для выхода, введите 1000");				
			}
		}