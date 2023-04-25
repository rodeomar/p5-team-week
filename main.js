// Define the sketch using instance mode
const sketch = function (p) {

  p.setup = function () {
    p.createCanvas(700, 700);
    p.background(255,255,0);
    
  }

  p.draw = function () {
 
    let x = p.random(700)
    let y = p.random(700)



    for (let i = 0; i < 100; i++) {
        p.rect(x, y, 200, 200)
    }


   

  };
};

// Create a new p5 instance with the sketch and attach it to a container element
let container = document.getElementById("sketch-container");
let myP5 = new p5(sketch, container); 