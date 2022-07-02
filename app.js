

//run js
function runJS() {
    //stop previous js
    var js_text = document.getElementById("js").value;
    eval(js_text);
}

//set default value for js
function setDefaultJS() {
    document.getElementById("js").value
        = " elem = document.getElementById('output');\n" +
        " var t=0;\n" +
        " setCanvas(elem);\n" +
        " function draw(){\n" +
        "     clearCanvas();\n" +
        "    new point(200+100*sin(t),200+100*cos(t),'#e9d4ff',10);\n" +
        "    new point(200,200,'#f4cfdf',20);\n" +
        "    requestAnimationFrame(draw);\n" +
        "    t+=0.1;\n" +
        "    }\n" +
        " draw();\n" ;
}

setDefaultJS();

//set event listener
document.getElementById("run-js").addEventListener("click", runJS);

frameRate("#fps");