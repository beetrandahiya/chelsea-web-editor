

//run js
function runJS() {
    var js_text = document.getElementById("js").value;
    eval(js_text);
}

//set default value for js
function setDefaultJS() {
    document.getElementById("js").value
        = "elem=document.getElementById('output');\n" +
        "setCanvas(elem);\n" +
        "function draw() {\n" +
        "    clearCanvas();\n" +
        " };\n" +
        "draw();\n" +
        "";
}

setDefaultJS();

//set event listener
document.getElementById("run-js").addEventListener("click", runJS);