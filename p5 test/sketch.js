var rule;

function setup() {

  createCanvas(1425, 786) 
  angleMode(DEGREES)

  s1 = createSlider(1, 10, 5, 1).position(980, 340)
  //p1 = createP("Participation").position(950, 210).style('background','#FFFAFA')
  s2 = createSlider(2, 10, 5, 1).position(980, 420)
  //p2 = createP("Casualties").position(950, 310).style('background','#FFFAFA')
  s3 = createSlider(3, 30, 3, 1).position(980, 500)
  //p3 = createP("Arrests").position(950, 410).style('background','#FFFAFA')
  s4 = createSlider(50, 300, 100, 20).position(980, 580)
  //p4 = createP("Missing people").position(950, 510).style('background','#FFFAFA')
  s5 = createSlider(50, 300, 150, 20).position(980, 660)
  //p55 = createP("Economic impact").position(950, 610).style('background','#FFFAFA')
  
  
  s6 = createSlider(0.1, 1, 0.1, 0.1).position(1200, 340)
  //p6 = createP("Time").position(1150, 210).style('background','#FFFAFA')
  s7 = createSlider(0, 255, 250).position(1200, 420)
  //p7 = createP("Red").position(1150,310).style('background','#FFFAFA')
  s8 = createSlider(0, 255, 250).position(1200, 500)
  //p8 = createP("Yellow").position(1150,410).style('background','#FFFAFA')
  s9 = createSlider(0, 255, 250).position(1200, 580)
  //p9 = createP("Blue").position(1150, 510).style('background','#FFFAFA')
  
  //p10 = createP("Background color").position(1150, 610).style('background','#FFFAFA')
  
  // Create BG the slider
  color_slider = 
  rSlider = createSlider(0, 255, 240);
  rSlider.position(1200, 660);
  gSlider = createSlider(0, 255, 220);
  gSlider.position(1200, 680);
  bSlider = createSlider(0, 255, 210);
  bSlider.position(1200, 700);


  //vase
  pg = createGraphics(1366, 768)

  //line
  pg2 = createGraphics(1366, 768)

  //water
  pg3 = createGraphics(1366, 768)

  //name
  //createInput("Type your revolution").style('background','#696969').position(100,100)
}


function draw() {

  // Get the value of the slider
  // using . value() fuction
  
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  col = color_slider.value();
  background(r, g, b);

  text('', rSlider.x * 1.5 + rSlider.width, 35);
  text('', gSlider.x * 1.5 + gSlider.width, 65);
  text('', bSlider.x * 1.5 + bSlider.width, 95);
  
  //motion title
  if(mouseX > 450){
  textSize(40)
  textStyle(BOLDITALIC)
  fill(255, 255, 255)
  text("Set Off", 50, 100)
  text("Your own", 50, 150)
  text("Revolution", 50,200)

  }
  
  //little title
  textSize(16)
  textStyle(BOLD)
  fill(255, 255, 255)
  text("LOOK TIPS", 50, 480)
  text("PARTICIPATION", 980, 320)
  text("CAUALTIES", 980, 400)
  text("ARRESTS", 980, 480)
  text("MISSING PEOPLE", 980, 560)
  text("ECONOMIC IMPACT", 980, 640)
  text("TIME", 1200 , 320)
  text("RED", 1200, 400)
  text("YELLOW", 1200, 480)
  text("BLUE", 1200, 560)
  text("BACK GROUND(RGB)",1200,640)
  
  
  if(mouseY > 450)
  if(mouseX < 200) {
  image(rule, width/ 30, height/ 1.5, 380, 200)
  }

  //vase
  pg. background (0, 0, 0, 0)
  pg. fill (255, 217, 230, 2)
  pg. stroke ('#FBFBFA')
  pg. strokeWeight(2)
  pg. quad(710, 520, 610, 530, 580, 720, 730, 720)
  //pg. rect (400, 400, 100, 300, 5, 25)
  image (pg, 0, 0)


  //line
  pg2. background (0, 0, 0, 0)
  pg2. fill (0, 0, 0, 0)
  pg2. stroke (204, 250, 217, 50)
  pg2. strokeWeight(3)
  pg2. line (670, 680, 660, 400)
  image (pg2, 0, 0)

  //water
  pg3. background (0, 0, 0, 0)
  pg3. fill (176, 224, 230, 10)
  pg3. stroke ('#FBFBFA')
  pg3. strokeWeight(0)
  pg3. quad(707, 570, 613, 570, 590, 710, 722, 710)
  image (pg3, 0, 0)

  //flowre
  translate(width / 2.2, height / 2.5)
  noFill()
  strokeWeight(2)

  for (var n = 0; n < s1.value() ; n++) {
    stroke(150 + n * 15, 100 + n * 5, 50)
    beginShape()
    stroke(255, 255, 255, 50)
    fill(s9.value(), s7.value(), s8.value(), 70)

    for (var i = 0; i < 360; i+= s3.value()) {
        var rad = map(sin(i *s2.value() + frameCount),
         -1, 1 , s4.value(), s5.value())

        var x = rad * cos(i)
        var y = rad * sin(i)
        vertex(x,y)
    }
   endShape(CLOSE)
   rotate(frameCount * s6. value())
 
  }

  
  fill (210, 140, 100, 60)
  noStroke()
  ellipse(0, 0 ,140 , 140)

  fill (210, 140, 100, 60)
  noStroke()
  ellipse(0, 0 ,120 , 120)

  fill (210, 140, 100, 60)
  noStroke()
  ellipse(0, 0 ,100 , 100)

}

//preload_rule

function preload(){
 rule = loadImage("fr-01-05.png")
}
//close preload_rule

