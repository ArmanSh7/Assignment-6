window.document.write("Displayed in both console and browser window <br/>");
var coinFlip;
do{
    coinFlip  = Math.round(Math.random());  
    if(coinFlip==0){
        window.document.write("Generated number is "+String(coinFlip) +"-Heads<br/>");  
        window.console.log("Generated number is "+String(coinFlip) +"-Heads\n");
    }
    else if(coinFlip ==1){
        window.document.write("Generated number is "+String(coinFlip) +"-Tails<br/>");  
        window.console.log("Generated number is "+String(coinFlip) +"-Tails\n"); 
    }
    
}
while(coinFlip !=1);