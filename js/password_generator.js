    var letters = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", 
    "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "Q", "q", "R", "r", 
    "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", "1", "2", "3", 
    "4", "5", "6", "7", "8", "9","0",];

function readInt(){
    var number = document.getElementById("userAnswer").value;
        return parseInt(number);
}


function getRandomNumber(max){
    return Math.round(Math.random() * max);
}

function write(text){
    document.getElementById("info").innerHTML = text;
}


function generateText(letters, length){

    var pass = "";
    for (var i = 0; i < length; i++){
        var n = getRandomNumber(letters.length - 1);
        pass = pass + letters[n];
    }

    return pass;
}
function generate(){
    var length = readInt();
    var password = generateText(letters, length);
    write(password);
}