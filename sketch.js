var hero1 , hero2
var block1, block2, block3, block4, block5, block6, block7, block8, 
block9, block10, block11
var monster, monster2
var ground, background
function preload() {
//preload the images here
 hero = loadImage("Superhero-01.png")
 hero2 = loadImage("Superhero-02.png")
 monster = loadImage("Monster-01.png")
 monster2 = loadImage("Monster-02.png")
 background = loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  block1 = new block(300,250,10,10)
  block2 = new block(350,250,10,10)
  block3 = new block(400,250,10,10)
  block4 = new block(450,250,10,10)
  block5 = new block(500,250,10,10)
  block6 = new block(550,250,10,10)
  block7 = new block(300,260.10,10)
  block8 = new block(350,260,10,10)
  block9 = new block(400,260,10,10)
  block10 = new block(450,260,10,10)
  block11 = new block(500,260,10,10)

  hero1 = new hero(400,150,50,10)
  hero2 = new hero(400,150,50,10)

  monster = new monster(350,300,30,30)
  monster2 = new monster(350,300,30,30)

}

function draw() {
  background(0);

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()

  hero1.display()
  hero2.display()
  
  monster.display()
  monster2.display()


}