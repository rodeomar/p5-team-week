// Define the sketch using instance mode
const sketch = function (p) {
  let x, y;
  let xSpeed = 5;
  let ySpeed = 5.5;
  let xDirection = 1;
  let yDirection = 1;
  let d = 10;
  let count = 0;

  p.setup = function () {
    p.createCanvas(700, 700); 
    p.x = width/2;
    p.y = height/2;
    p.background(120);
  }

  p.draw = function () {
    x = 
    
  };
};

// Create a new p5 instance with the sketch and attach it to a container element
let container = document.getElementById("sketch-container");
let myP5 = new p5(sketch, container); 