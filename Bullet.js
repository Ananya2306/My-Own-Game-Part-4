class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.color = "black";
        this.velocityY = random(0,20); 
        this.velocityX = random(20,0);
    }

moveYd(){
    this.y = this.y+this.velocityY;
}

moveXr(){
    this.x = this.x+this.velocityX;
}
moveYu(){
    this.y = this.y-this.velocityY;
}

moveXl(){
    this.x = this.x-this.velocityX;
}
    display(){
       
        fill(this.color);
        rect(this.x,this.y,this.width,this.height);
    }
}