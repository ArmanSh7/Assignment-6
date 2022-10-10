window.document.write("Displayed in both console and browser window <br/>");
//Console window
var triangle ="";
for(var i=1; i<7;i++){
    trianglePattern ="";
    for(var j=1; j<=i;j++){
        trianglePattern += "#";
    }
    triangle += trianglePattern + "\n";
}

window.console.log(triangle);
//Browser window
for(var i=1; i<7;i++){
    var triangle ="";
    for(var j=1; j<=i;j++){
        window.document.write("#");
    }
    window.document.write("<br/>");
}