// Define the sketch using instance mode
let sketch = function (p) {


  p.setup = function () {
    p.createCanvas(700, 700); 
  }; 

  p.draw = function () {
    p.background(255, 255, 255);
    p.strokeWeight(5)
    p.rect(200,200,200,200)
    p.rect(500,300,200,200)
    
  };
};

// Create a new p5 instance with the sketch and attach it to a container element
let container = document.getElementById("sketch-container");
let myP5 = new p5(sketch, container); 