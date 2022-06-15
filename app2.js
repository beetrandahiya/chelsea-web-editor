/*
 elem = document.getElementById('output');
 var t=0;
 setCanvas(elem);
 function draw(){
     clearCanvas();
    for(i=0;i<1;i+=0.05){
var c = lerpHex("#efda4f","#b22075",i);
new point(50+400*i+10,HEIGHT/2+50*sin(5*i+t/50),c,10);}
    requestAnimationFrame(draw);
    t++;
    }
 draw();
 */

 const fs=require('fs');
 function runJS(){
    //stop previous js
    let file_string=fs.readFileSync('script.js').toString();

    file_string= document.getElementById("js").value;

    fs.writeFileSync('script.js',file_string);
 }

 function setDefaultJS() {
    document.getElementById("js").value
        = " elem = document.getElementById('output');\n" +
        " var t=0;\n" +
        " setCanvas(elem);\n" +
        " function draw(){\n" +
        "     clearCanvas();\n" +
        "     for(i=0;i<1;i+=0.05){ \n" +
        "   var c = lerpHex('#efda4f','#b22075',i);\n" +
        "    new point(50+400*i+10,HEIGHT/2+50*sin(5*i+t/50),c,10);\n" +
        "    }\n" +
        "    requestAnimationFrame(draw);\n" +
        "    t++;\n" +
        "    }\n" +
        " draw();\n" ;
}

setDefaultJS();

//set event listener
document.getElementById("run-js").addEventListener("click", runJS);

frameRate("#fps");