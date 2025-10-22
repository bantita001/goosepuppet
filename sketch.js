var handpose;
var video;
var hands = [];
var g

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  g = createGraphics(width, height)
  video = createCapture(VIDEO);
  video.size(width, height);

  handPose.detectStart(video, gotHands);

  video.hide();

  strokeJoin(ROUND);
}

function gotHands(results) {
  hands = results;
}

function draw() {
  clear();
//   turn on camera
  // image(video, 0, 0, width, height);
  
 
  fill(109, 198, 201);
  background(207, 209, 26)
  rect(0,0,width, 280)
  
  //sun
    fill (226, 191, 38)
    noStroke();
    ellipse (50,50,50,50)
  
  drawKeypoints();
  
}

function drawKeypoints() {
  image(g, 0,0,width,height)
  for (let i = 0; i < hands.length; i += 1) {
    var hand = hands[i];
    var points = hand.keypoints;
    // console.log(points)
    
    // ellipse (points[0].x, points[0].y, 100,100)
    

//body
    fill (255,255,255)
    beginShape()
    vertex (points[0].x, points[0].y,)
    vertex (points[1].x, points[1].y,)
    vertex (points[2].x, points[2].y,)
    vertex (points[5].x, points[5].y,)
    vertex (points[9].x, points[9].y,)
    vertex (points[13].x, points[13].y,)
    vertex (points[17].x, points[17].y,)
    endShape()
    
//wings
    fill (255,255,255)
    stroke (255,255,255)
    strokeWeight(30)
    beginShape()
    vertex (points[2].x, points[2].y,)
    vertex (points[4].x, points[4].y,)
    vertex (points[8].x, points[8].y,)
    vertex (points[5].x, points[5].y,)
    vertex (points[2].x, points[2].y,)
    endShape()
    
    fill (255,255,255)
    stroke (255,255,255)
    strokeWeight(30)
    beginShape()
    vertex (points[13].x, points[13].y,)
    vertex (points[16].x, points[16].y,)
    vertex (points[20].x, points[20].y,)
    vertex (points[17].x, points[17].y,)
    vertex (points[13].x, points[13].y,)
    endShape()
    
//neck  
    fill (255,255,255)
    stroke (255,255,255)
    strokeWeight(30)
    beginShape()
    vertex (points[9].x, points[9].y,)
    vertex (points[10].x, points[10].y,)
    vertex (points[11].x, points[11].y,)
    vertex (points[12].x, points[12].y,)
    endShape()
    
//head
    fill (255,255,255)
    strokeWeight(10)
    ellipse (points[12].x, points[12].y,50,50)
    
// feces
    g.fill (92, 87, 62)
    g.noStroke();
    g.ellipse (points[0].x, points[0].y,20,20)
    
//beak
    fill (244, 172, 50)
    var a = points[12]
    triangle (a.x-20,a.y-15,
              a.x+20,a.y-15,
              a.x,a.y+15)
// eyes
    fill (0,0,0)
    noStroke();
    ellipse (points[12].x-15, points[12].y-10,10,10)
   
    fill (0,0,0)
    noStroke();
    ellipse (points[12].x+15, points[12].y-10,10,10)
    
    
//     green dots
    for (let j = 0; j < hand.keypoints.length; j += 1) {
      var keypoint = hand.keypoints[j];
      // console.log (points)
      // fill(0, 255, 0);
      // fill(points[0].x, points[0].y,50,50)
      // noStroke();
      // ellipse(points[0].x, points[0].y, 10, 10);
      // fill(0)
      // text(j, keypoint.x, keypoint.y)
      
      // if(dist(points[0].x,points[0].y,points[0].x,points[0].y)>300)
    
    }   
  }
}
