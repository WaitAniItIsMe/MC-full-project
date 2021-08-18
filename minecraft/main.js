var canvas =new fabric.Canvas("myCanvas")

var block_width = 30;
var block_height = 30;

player_x = 50;
player_y = 20;

player_image = "";
block_image = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_image = img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(125);
        player_image.set({
            top:player_y,
            left: player_x
        });
        canvas.add(player_image);
    });
}

function block_update(image){
    fabric.Image.fromURL(image, function(img){
        block_image = img;
        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top:player_y,
            left: player_x
        });
        canvas.add(block_image);
    });
}

window.addEventListener("keydown", keyDown)

function keyDown(e){
keyAscii = e.keyCode

if (keyAscii == "66"){
    block_update("brick.jpg")
}
if (keyAscii == "67"){
    block_update("cobblestone.jpg")
}
if (keyAscii == "68"){
    block_update("dirt.png")
}
if (keyAscii == "71"){
    block_update("glowstone.png")

}
if (keyAscii == "76"){
    block_update("leaves.png")

}
if (keyAscii == "78"){
    block_update("netherite.jpg")

}
if (keyAscii == "83"){
    block_update("slime.png")

}
if (keyAscii == "87"){
    block_update("wood.jpg")

}
if (keyAscii == "89"){
    block_update("yellow_wall.jpg")

}

if (e.shiftKey == true && keyAscii == "80"){
    block_width = block_width + 10
    document.getElementById("current_width").innerHTML = block_width
    block_height = block_height + 10
    document.getElementById("current_height").innerHTML = block_height
}
if (e.shiftKey == true && keyAscii == "77"){
    block_width = block_width - 10
    document.getElementById("current_width").innerHTML = block_width
    block_height = block_height - 10
    document.getElementById("current_height").innerHTML = block_height
}

if (keyAscii == "37"){
    left_arrow()

}
if (keyAscii == "38"){
    up_arrow()

}
if (keyAscii == "39"){
    right_arrow()

}
if (keyAscii == "40"){
    down_arrow()

}


}

function left_arrow(){
  if (player_x >= 29){
      player_x = player_x - block_width;
      canvas.remove(player_image) 
      player_update();
  }
    
}
function right_arrow(){
    if (player_x <= 660){
        player_x = player_x + block_width;
        canvas.remove(player_image) 
        player_update();
    }
      
  }
  function up_arrow(){
    if (player_y >= 70){
        player_y = player_y - block_height;
        canvas.remove(player_image) 
        player_update();
    }
      
  }
  function down_arrow(){
    if (player_y <= 660){
        player_y = player_y + block_height;
        canvas.remove(player_image) 
        player_update();
    }
      
  }

