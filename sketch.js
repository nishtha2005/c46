var bgi,bl=70;
var gameState="fight";

function preload(){
    bgi = loadImage("images/bg.jpeg")
    pci= loadImage("images/shooter_1.png")
    pc2 = loadImage("images/shooter_3.png")
    npci= loadImage("images/zombie.png")
    h1=loadImage("images/heart_1.png")
    h2=loadImage("images/heart_2.png")
    h3=loadImage("images/heart_3.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    pc = createSprite(displayWidth/2-500,displayHeight/2,30,50)
    pc.addImage(pci);
    pc.scale=0.3
    pc.setCollider("rectangle",0,0,250,450)
    npg=new Group();
    blg=new Group();
  h=createSprite(displayWidth-100,50,20,20)
  h.addImage(h1)
  h.scale=0.5
  h.visible=0;
  h4=createSprite(displayWidth-100,50,20,20)
  h4.addImage(h2)
  h4.scale=0.5
  h4.visible=0;
  h5=createSprite(displayWidth-150,50,20,20)
  h5.addImage(h3)
  h5.scale=0.5
}
function draw(){
    background(0)
    background(bgi);
    

        if(keyDown("UP_ARROW")){
            pc.y-=4
        }
        if(keyDown("DOWN_ARROW")){
            pc.y+=4;
        }
        if(keyDown("LEFT_ARROW")){
            pc.x-=4
        }
        if(keyDown("RIGHT_ARROW")){
            pc.x+=4
        }
        spawnZombie();
        if(keyWentDown(32)){
         pc.addImage(pc2);
         bl=createSprite(displayWidth-950,pc.y+10,5,5)
         bl.velocityX=6;
         blg.add(bl);
         pc.depth=bl.depth;
         pc.depth=pc.depth+2;
         bl=bl-1;
        }
        else if(keyWentUp(32)){
            pc.addImage(pci)
        }
        for(var i=0; i<npg.length;i++){
            if(npg[i].isTouching(blg)){
            npg[i].destroy();
            blg.destroyEach()
            }
            }
        if(npg.isTouching(pc)){
            h5.visible=0;
            h4.visible=1;
        }
    
   

   
   
    drawSprites();

    
}
function spawnZombie(){
    if(frameCount%200===0){
    npc=createSprite(random(500,900),random(100,500));
    npc.addImage(npci)
    npc.velocityX=-2;
    npc.scale=0.15;
    npc.debug=true
    npc.setCollider("rectangle",0,0,400,1000)
    npc.lifetime=500;
    npg.add(npc)
}
}