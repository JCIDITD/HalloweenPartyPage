function whichButton(event){
  promptStuff()
}

function promptStuff(){
    input = prompt("PASSWORD:","ENTER THE PASSWORD");
    if (input == "Correct"){
        alert("HINT WORDS!");
    else if (input == "") { // change to switch if more than 4 possible outcomes
      alert("");  // out put hint text
    }else{
        alert("THERE IS NO ESCAPE");
    }
}
