window.document.write("Displayed in both console and browser window <br/>");
var countDown = 0;

while(countDown<1){
    countDown = parseInt(window.prompt("What number do you want to start count down from"),10);
    if(countDown<1)
        window.alert("Please enter a positive Integer")
}

window.document.write("Start of count down <br/>");  
window.console.log("Start of count down\n"); 
for(var i=countDown; i>=0;i--){
    window.console.log(String(i)+"\n");
    window.document.write(String(i)+"<br/>");
}