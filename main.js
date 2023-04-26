
const sketch = function (p) {

  p.setup = function () {
    p.createCanvas(700, 700);
    p.background(0,0,0);
    p.noStroke(); // Disable stroke for shapes
    
  }

  p.draw = function () {
 
    let x = p.random(900)
    let y = p.random(900)
    let colorX = p.map(x, 0, p.width, 0, 255);
    let colorY = p.map(y, 0, p.height, 0, 255);

    // Set random fill color
    p.fill(p.random(255), p.random(255), p.random(255)); 

    // Draw random shape
    p.beginShape();
    p.vertex(x + p.random(-20, 20), y + p.random(-20, 20));
    p.vertex(x + p.random(-20, 20), y + p.random(-20, 20));
    p.vertex(x + p.random(-20, 20), y + p.random(-20, 20));
    p.vertex(x + p.random(-20, 20), y + p.random(-20, 20));
    p.endShape(p.CLOSE);

    // Check if the shape has been formed to a basketball
    if (p.frameCount >= 1000000) {
      p.noLoop(); // Stop the sketch after 100 frames
    }
  };
};

let container = document.getElementById("sketch-container");
let myP5 = new p5(sketch, container);




// const sketch = function (p) {

//   p.setup = function () {
//     p.createCanvas(700, 700);
//     p.background(0,0,0);
//     p.noStroke(); // Disable stroke for shapes
    
//   }

//   p.draw = function () {
 
//     let x = p.random(700)
//     let y = p.random(700)
//     let colorX = p.map(x, 0, p.width, 0, 255);
//     let colorY = p.map(y, 0, p.height, 0, 255);

//     // Set random fill color
//     p.fill(p.random(255), p.random(255), p.random(255)); 

//     // Draw random shape
//     p.beginShape();
//     p.vertex(x + p.random(-40, 20), y + p.random(-40, 20));
//     p.vertex(x + p.random(-40, 20), y + p.random(-40, 20));
//     p.vertex(x + p.random(-40, 20), y + p.random(-40, 20));
//     p.vertex(x + p.random(-40, 20), y + p.random(-40, 20));
//     p.endShape(p.CLOSE);

//   };
// };

// let container = document.getElementById("sketch-container");
// let myP5 = new p5(sketch, container);














// const sketch = function (p) {

//   p.setup = function () {
//     p.createCanvas(700, 700);
//     p.background(0,0,0);
//   }

//   p.draw = function () {
//     let x = p.random(800)
//     let y = p.random(800)

//     for (let i = 0; i < 100; i++) {
//       p.fill(p.random(255), p.random(255), p.random(255)); // Set random fill color
//       p.rect(x, y, 200, 200); // Draw rectangle
//     }
//   };
// };

// let container = document.getElementById("sketch-container");
// let myP5 = new p5(sketch, container);
