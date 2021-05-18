mouseEvent="empty";
var last_position_of_x;
var last_position_of_y;

canvas= document.getElementById("project_can");
ctx=canvas.getContext("2d");
color="black";
ctx.lineWidth="1";
radius="40";


canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mousemove", my_mousemove);
canvas.addEventListener("mouseup", my_mouseup);

function my_mousedown(){
    color=document.getElementById("c_i").value;
    width=document.getElementById("w_i").value;
    radius=document.getElementById("r_i").value;
    mouseEvent="mouseDown";
}

function my_mousemove(e){
    current_position_of_mouse_x= e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.lineWidth=width;
        ctx.strokeStyle=color;
        console.log("last_position_of_x", "last_position_of_y");
        console.log(last_position_of_x+ " " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("current_position_of_mouse_x", "current_position_of_mouse_y");
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}

function my_mouseup(e){
    mouseEvent="mouseup";
}
