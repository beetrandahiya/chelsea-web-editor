

//run js
function runJS() {
    //stop previous js
    var js_text = document.getElementById("js").value;
    eval(js_text);
}

//set default value for js
function setDefaultJS() {
    document.getElementById("js").value
        = ` elem = document.getElementById('output');
        var t=0;
        setCanvas(elem);
       var points1=[];
       var points2=[];
        function draw(){
            clearCanvas();
       x=WIDTH/2+ (200*cos(t))/(1+sin(t)**2)
       y=HEIGHT/2+ (200*sin(t)*cos(t))/(1+sin(t)**2)
       points1.push([x,y]);
       points2.push([x+50*sin(t),y+50*cos(t)]);
           new point(x+50*sin(t),y+50*cos(t),'#e9d4ff',5);
           new point(x,y,'#f4cfdf',10);
       if(points1.length>200){
       points1.shift()}
       if(points2.length>200){
       points2.shift()}
       new polygon(points1, "#fff", 0, "#f4cfdf", 3, false);
       new polygon(points2, "#fff", 0, "#e9d4ff", 1, false);
           requestAnimationFrame(draw);
           t+=0.01;
           }
        draw();
       `
}

setDefaultJS();

//set event listener
document.getElementById("run-js").addEventListener("click", runJS);

frameRate("#fps");

window.onbeforeunload = function(event)
{
    return confirm("Confirm refresh");
};