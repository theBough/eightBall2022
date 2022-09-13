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
  rndNum = Math.random() * 7;
  rndNum = Math.floor(rndNum)
  //filling the variable, with whatever was in the textBox
  theirQ = document.getElementById("question").value
  document.getElementById("question").value = ""
  document.getElementById("answer").innerHTML = theirQ + rndNum
}//end press
