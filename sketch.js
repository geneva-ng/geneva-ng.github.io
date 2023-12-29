// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    // background(252, 248, 240);
    
    let centerX = width / 2;
    let centerY = height / 2;
    
    // ELEMENT DIMENSIONS
    let flowerRadius = 90;
    let petalLength = 70;
    let leafLength = 160;
    let seedRadius = 5;
  
    // TIME
    let hours = hour(); 
    let minutes = minute();
    let seconds = second();
  
    // PRINT MINUTE() TO CONSOLE
    console.log(minutes);
  
    // MAP TIME TO COUNTS
    let leafCount = map(hours, 0, 23, 0, 24);
    let petalCount = map(minutes, 0, 59, 0, 60);
    let seedCount = map(seconds, 0, 59, 0, 60);
  
    // DRAW LEAVES 
    fill(59, 73, 6); 
    drawCircularObjects(centerX, centerY, flowerRadius, leafCount, leafLength, 70, false, true, 24);
  
    // DRAW PETALS 
    fill(238, 184, 0); 
    drawCircularObjects(centerX, centerY, flowerRadius + 32, petalCount, petalLength, 20, true, false, 60);
  
    // DRAW BROWN CENTER
    fill(56, 16, 4); 
    ellipse(centerX, centerY, flowerRadius * 2, flowerRadius * 2);
  
    // DRAW SEEDS 
    fill(113, 72, 38); 
    drawCircularObjects(centerX, centerY, flowerRadius - 5, seedCount, seedRadius, seedRadius, false, false, 60);
  }
  
  function drawCircularObjects(centerX, centerY, radius, count, objectSize, objectLength, isPetal, isLeaf, maxCount) {
    
    // SET UP ROTATION/REPETITION DETAILS
    for (let i = 0; i < count; i++) {
      let angle = TWO_PI / maxCount * i - HALF_PI; 
      let x = centerX + cos(angle) * radius;
      let y = centerY + sin(angle) * radius;
  
      push();
      translate(x, y);
      rotate(angle + HALF_PI);
      
      if (isLeaf) {
        
        // LEAF STYLING
        stroke(32, 27, 0);
        strokeWeight(0.5);
        ellipse(0, 0, objectLength, objectSize);
        
      } else if (isPetal) {
        
          //PETAL STYLING
          strokeWeight(0.5);
          stroke(217, 131, 12)
          ellipse(0, 0, objectLength, objectSize);
        
          //PETAL LINE STYLING
          line(0, -objectSize / 2, 0, objectSize / 2);
        
      } else {
        
        // SEED STYLING 
        noStroke();
        ellipse(0, 0, objectSize, objectSize);
      }
      pop();
    }
  }
