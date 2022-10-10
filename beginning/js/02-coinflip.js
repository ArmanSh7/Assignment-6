coinFlip  = Math.round(Math.random()*10+1);  
var userChoice;
var reTry;
window.document.write("Numbers between 1-5 are assigned as Heads.  Numbers between 6-10 are assigned as Tails!<br/>");

do{
    userChoice = window.prompt("Please choose one option between Heads and Tails.");
    userChoice = String(userChoice). toUpperCase();

    if(userChoice !== "HEADS" && userChoice !== "TAILS"){
        reTry = parseInt(window.prompt("Wrong input. Please enter 1 if you want to enter your choice again.Otherwise, press any other key to quit<br/>"),10);
    }
    else{
        reTry = 0;
    }
}while(reTry == 1);

let testUserLUCK = ()=>{
    
    window.document.write(" Coin Flip number is "+coinFlip + "<br/>");

    if(coinFlip<6 && userChoice == "HEADS"){
        window.document.write("The flip was heads and you chose heads...you win!");
    
    }
    else if(coinFlip<6 && userChoice === "TAILS"){
        window.document.write("The flip was heads but you chose tails...you lose!");
        
    }
    else if(coinFlip>5 && userChoice === "HEADS"){
        window.document.write("The flip was tails but you chose heads...you lose!");
        
    }
    else if(coinFlip>5 && userChoice == "TAILS"){
        window.document.write("The flip was tails and you chose tails...you win!");       
    }
}

testUserLUCK();