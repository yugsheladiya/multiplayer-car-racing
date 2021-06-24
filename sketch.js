var databaseball;
var database,position;

function setup(){
    createCanvas(500,500);
    databaseball = createSprite(250,250,10,10);
    databaseball.shapeColor = "cyan";
    database = firebase.database();
    var databaseballposition = database.ref("ball/position");
   // databaseballposition.on("value",readPosition,showError);

}

function draw(){
    background("black");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();

}

function changePosition(x,y){
    databaseball.x = databaseball.x + x;
    databaseball.y = databaseball.y + y;
}
function readPosition(data){
    position = data.val();
    databaseball.X = position.X;
    databaseball.Y = position.Y;
}
function writePosition(x,y){
    database.ref("ball/position").set({
        "x": position.x+x,
        "y": position.y+y
    })
}
function showError(){
    console.log("error");
}