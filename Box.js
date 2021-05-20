class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    this.Visibility = 255;
  }

  display(){

    if((this.body.speed)<5){

    fill(this.color);
    super.display();
    }
    else{
      World.remove(world, this.body);

      push();
      this.Visibility = this.Visibility-5;
      tint(255, this.Visibility);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }

};
