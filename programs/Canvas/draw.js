/**
 * Created by zhangpengfei8987 on 16.9.2.
 */
var goal = {
    fillColor : "blue" ,
    strokeColor : "red" ,
    lineWidth : 5 ,
    number : 5 ,
    length : 50
};
$(".can-btn").each(function () {
    $(this).click(function () {
        var data = $(this).attr("data-control");
        console.log(data);
        goal[data]=$(this).find(".content").html();
        console.log(goal);
        canvasObj("canvas",goal);
        /*
        switch (data) {
            case "fillColor" :
                goal.fillColor="red";
                canvasObj("canvas",goal);
                break;
            case "strokeColor" :
                break;
            case "lineWidth" :
                break;
            case "number" :
                break;
            case "length" :
                break;
        }
*/
    });
});
function canvasObj(obj , goal) {
    var canvas = document.getElementById(obj);
    var ctx = canvas.getContext("2d");
    var n = goal.number;
    var l = goal.length;
    ctx.fillStyle = goal.fillColor || "blue";
    ctx.strokeStyle = goal.strokeColor || "blue";
    ctx.lineWidth = goal.lineWidth || 5;
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    ctx.save();
    function Polygon(n , l) {
        this.n = n || 5;
        this.l = l || 50;
        this.arc = Math.PI / 180 * (180 - 180 * (this.n - 2) / this.n);
    }

    Polygon.prototype = {
        drwas : function () {
            ctx.beginPath();
            ctx.translate(this.l , this.l);
            ctx.moveTo(0 , 0);
            for (var i = 0; i < this.n; i++) {
                this.drawPolygon(this.arc , this.l);
            }
            ctx.closePath();
        } ,
        drawPolygon : function (arc , l) {
            ctx.lineTo(l , 0);
            ctx.translate(l , 0);
            ctx.rotate(arc);
        }
    };
    var pol = new Polygon(n , l);
    pol.drwas();
    ctx.restore();
    ctx.stroke();
    ctx.fill();
}
canvasObj("canvas" , goal);
