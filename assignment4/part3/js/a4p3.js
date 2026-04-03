/* 
    Name: Ambar Cerino
    File: a4p3.js
    Date: 03 April, 2026
    Description: assignment 4 part 3 javascript 
*/

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}

//Modeling a ball
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  // Drawing the ball
  draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    //Updating the ball's data
    update() {
        if (this.x + this.size >= width) {
            this.velX = -this.velX
        }
        if (this.x + this.size <= 0) {
            this.velX = -this.velX
        }
        if (this.y + this.size >= height) {
            this.velY = -this.velY
        }
        if (this.y + this.size <= 0) {
            this.velY = -this.velY
        }
        this.x += this.velX;
        this.y += this.velY;
    }
}
