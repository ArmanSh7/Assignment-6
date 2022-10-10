window.document.write("Displayed in both console and browser window <br/>");
for(var i=1; i<=100;i++){
    if(i%3 == 0 && i %5 ==0){
        window.console.log("Marco! Polo!\n");
        window.document.write("Marco! Polo!<br/>");
    }
    else if(i%3 == 0){
        window.console.log("Marco!\n");
        window.document.write("Marco!<br/>");
    }
    else if(i%5 == 0){
        window.console.log("Polo!\n");
        window.document.write("Polo!<br/>");
    }
    else{
        window.console.log(String(i)+"\n");
        window.document.write(String(i)+"<br/>");
    }  
}