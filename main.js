// Define the sketch using instance mode
let sketch = function (p) {
  let angle = 0;
  let cubeSize = 100;

  p.setup = function () {
    p.createCanvas(700, 700, p.WEBGL); 
  }; 

  p.draw = function () {
    p.background(200);
    p.noStroke(); 
    p.fill(255, 0, 0);
    p.push();
    p.translate(p.width / 2, p.height / 2, -cubeSize);
    p.rotateX(angle);
    p.rotateY(angle * 1.3);
    p.rotateZ(angle * 0.7);
    p.box(cubeSize);
    p.pop();
    angle += 0.03; 
  };
};

// Create a new p5 instance with the sketch and attach it to a container element
let container = document.getElementById("sketch-container");
let myP5 = new p5(sketch, container); 








// NEW SKETCH

// Define a new sketch for a yellow floating 3D triangle

// let sketch2 = function(p) {
//   let angle = 0;
//   let triangleSize = 100;
//   let triangleColor;

//   p.setup = function() {
//     p.createCanvas(700, 700, p.WEBGL);
//     triangleColor = p.color(255, 255, 0);
//   };

//   p.draw = function() {
//     p.background(200);
//     p.noStroke();
//     p.fill(triangleColor);
//     p.push();
//     p.translate(p.width/2, p.height/2, -triangleSize);
//     p.rotateX(angle);
//     p.rotateY(angle*1.3);
//     p.rotateZ(angle*0.7);
//     p.triangle(-triangleSize/2, triangleSize/2, triangleSize/2, triangleSize/2, 0, -triangleSize/2);
//     p.pop();
//     angle += 0.03;
//   };

//   // Set the triangle color based on a parameter passed to the function
//   p.setColor = function(r, g, b) {
//     triangleColor = p.color(r, g, b);
//   };
// };

// // Create a new p5 instance with the second sketch and attach it to a container element
// let container3 = document.getElementById("sketch-container-3");
// let myP5_3 = new p5(sketch2, container3);
// myP5_3.setColor(255, 255, 0); // Set the triangle color to yellow


