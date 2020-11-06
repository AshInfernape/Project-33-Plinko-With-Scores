  Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var gameState = 0;  
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;
var score5 = 0;
var score6 = 0;
var score7 = 0;
var score8 = 0;
var score9 = 0;
var score10 = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  textSize(15)
  text("50"+score1,10,530);
  textSize(15)
  text("50"+score2,90,530);
  textSize(15)
  text("50"+score3,170,530);
  textSize(15)
  text("50"+score4,250,530);
  textSize(15)
  text("50"+score5,330,530);
  textSize(15)
  text("50"+score6,410,530);
  textSize(15)
  text("50"+score7,490,530);
  textSize(15)
  text("50"+score8,570,530);
  textSize(15)
  text("50"+score9,650,530);
  textSize(15)
  text("50"+score10,730,530);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
    
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null){
     particle.display();
     if(particle.body.position.y > 480){
       if(particle.body.position.x < 300){
         score = score+500;
         particle=null;
         if(count>=5) gameState ="end"
       }
       if(particle!=null){
         particle.display();
         if(particle.body.position.y > 480){
           if(particle.body.position.x > 301 && particle.body.position.x < 600){
             score= score+500;
             particle = null;
             if(count>=5) gameState = "end";
           }
         }
       }
       if(particle!=null){
         particle.display();
         if(particle.body.position.y >480){
          if(particle.body.position.x > 601 && particle.body.position.x < 900){
            score = score+500;
            particle = null;
            if(count>=5)gameState = "end";
          }
         }
       }

     }
   }
   //mousePressed();
}

function mousePressed(){
if(gameState!=="end"){
  score++;
  particle = new Particle(mouseX,10,10,10);
}
}