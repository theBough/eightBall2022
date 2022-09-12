/*
Press is going to repeat the question, and then give a 
random answer.
*/
function press(){
  //asking for a space of memory
  var theirQ;
  //filling the variable, with whatever was in the textBox
  theirQ = document.getElementById("question").value
  document.getElementById("question").value = ""
  document.getElementById("answer").innerHTML = theirQ
}//end press
