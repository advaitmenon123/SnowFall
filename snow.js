class Snow {
    constructor(x) {
this.body = Matter.Bodies.circle(x,0,50)
Matter.World.add(world,this.body)
this.image = loadImage("snow4.webp")
    }

    display() {
imageMode(CENTER)
image(this.image,this.body.position.x , this.body.position.y, 50, 50)
    }
}

