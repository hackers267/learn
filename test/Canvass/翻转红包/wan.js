/**
 * Created by pf.zhang on 16.8.31.
 */
var canvaswidth = window.innerWidth;
var canvasheight = window.innerHeight;
var canvas = document.getElementById("canvas");
var cxt = canvas.getContext("2d");
var image = new Image();
var clippingRegion = {x : 400 , y : 200 , r : 50};
var radius = 50;
canvas.height = canvasheight;
canvas.width = canvaswidth;
image.src = "bg2.jpg";
var leftMargin = (image.width - canvas.width)/2;
var topMargin = (image.height - canvas.height)/2;
image.onload = function () {
    initCanvas()
};
function initCanvas() {
    var theleft=leftMargin<0?-leftMargin:0;
    var thetop=topMargin<0?-topMargin:0;
    $("#blur").css({"width" : canvaswidth,"height" : canvasheight});
    $("#img-blur").css({"width" : image.width,"height" : image.height,"top":String(-topMargin)+"px","left":String(-leftMargin)+"px"});
    console.log(canvaswidth);
    console.log(canvasheight);
    clippingRegion = {
        x : Math.random() * (canvas.width - 2 * radius+2*theleft) + radius ,
        y : Math.random() * (canvas.height - 2 * radius+2*thetop) + radius , r : radius
    };
    draw(image , clippingRegion)
}
function draw(image , clippingRegion) {
    cxt.clearRect(0 , 0 , canvaswidth , canvasheight);
    cxt.save();
    setClippingRegion(clippingRegion);
    cxt.drawImage(image , leftMargin , topMargin,canvaswidth,canvasheight,0,0,canvaswidth,canvasheight);
    cxt.restore();
}
function setClippingRegion(clippingRegion) {
    cxt.beginPath();
    cxt.arc(clippingRegion.x , clippingRegion.y , clippingRegion.r , 0 , Math.PI * 2 , false);
    cxt.clip();
}
function show() {
    var showC = setInterval(function () {
        clippingRegion.r += 10;
        if (clippingRegion.r > (canvas.height + canvas.width)) {
            clearInterval(showC);
        }
        draw(image , clippingRegion);
    } , 30)
}
function reset() {
    initCanvas();
}