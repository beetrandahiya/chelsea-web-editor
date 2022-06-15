

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
        "    new point(100,100+t,'#fff',10);\n" +
        "    new point(200,200,'#fff',10);\n" +
        "    requestAnimationFrame(draw);\n" +
        "    t++;\n" +
        "    }\n" +
        " draw();\n" ;
}

setDefaultJS();

//set event listener
document.getElementById("run-js").addEventListener("click", runJS);

frameRate("#fps");