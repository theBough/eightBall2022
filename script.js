//I will fill an array with responses
var responses = [
  "That's a hard no",
  "Positively yes",
  "Ask again",
  "I am affraid not",
  "That's a YESSSSSS!"
]
/*
Press is going to repeat the question, and then give a 
random answer.
*/
function press(){
  //asking for a space of memory
  var theirQ;
  var rndNum;
  //the number at the end is max value of the 
  //random number
  rndNum = Math.random() * responses.length;
  rndNum = Math.floor(rndNum)
  //filling the variable, with whatever was in the textBox
  theirQ = document.getElementById("question").value
  document.getElementById("question").value = ""
  document.getElementById("answer").innerHTML = ">>"+theirQ+ "</br>"+responses[rndNum]
}//end press
