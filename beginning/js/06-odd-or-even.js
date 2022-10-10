window.document.write("Displayed in both console and browser window <br/>");
for(var i=0; i<=15;i++){
    var res = i%2 == 0? i+" is even":i+" is odd";
    window.console.log(res+"\n");
    window.document.write(res+"<br/>");
}