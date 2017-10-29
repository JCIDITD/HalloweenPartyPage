function whichButton(event){
  promptStuff()
}
function promptStuff(){
    input = prompt("PASSWORD:","ENTER THE PASSWORD");
    if (input == "Correct"){
        alert("HINT WORDS!");
    }else{
        alert("THERE IS NO ESCAPE");
    }
}
