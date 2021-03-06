/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
	constructor(scene) {
    super(scene);
    
    this.scaleFactor = 1;
    this.speedFactor = 1.0;
    
    this.heightVar = 0.0;
    this.ang = 0.0;
    this.wingAng = Math.PI/2;
    this.normals = []; 
    this.speed = 0.0;
    this.x = 0.0;
    this.y = 12.0;
    this.z = 0.0;
    this.t = 0;
    this.invert = false;
    this.pickUp = false;
    
    this.cylinder = new MyCylinder(this.scene, 6, 0.6, 0.25);
    this.coneHead = new MyCone(this.scene, 6, false, 0.4, 0.25);
    this.coneTail = new MyCone(this.scene, 6, false, 0.7, 0.25);
    this.pyramid = new MyPyramid(this.scene, 6, 0.2, 0.25/4);
    this.eyes = new MyPyramid(this.scene, 4, 0.08, 0.1);
    this.wings = new MyWing(this.scene);
    this.legs = new MyLegs(this.scene);
    this.branch = 0;
    this.branch_index = 0;
    
  }
  update(t){
    
    if(this.speed < 0.05) this.speed = 0;
    else this.speed *= 0.9;
    
    if(this.invert){
      this.heightVar -= ((t - this.t) % 1000) / 2000;
      this.wingAng -= (this.speed/15*this.speedFactor + 1) * (((t - this.t) % 1000) / 1000) * Math.PI/2 * this.speedFactor;
      if(this.wingAng <= 0) this.invert = false;
    }
    else{
      this.heightVar += ((t - this.t) % 1000) / 2000;
      this.wingAng += (this.speed/15*this.speedFactor + 1) * (((t - this.t) % 1000) / 1000 ) * Math.PI/2 * this.speedFactor;
      if(this.wingAng >= (Math.PI/2)) this.invert = true;
    }

    this.x += this.speed * Math.sin(this.ang) * ( (t - this.t) % 1000 ) / 1000;
    this.z += this.speed * Math.cos(this.ang) * ( (t - this.t) % 1000 ) / 1000;

    this.checkPos(t);
    
    if(this.pickUp){
      if(this.down){
        if(this.y > 5) this.y -= 7.4 * ( (t - this.t) % 1000 ) / 1000;
        else this.down = false;
      }
      else{
        if(this.y < 11.9) this.y += 7.4 * ( (t - this.t) % 1000 ) / 1000;
        else{
          this.pickUp = false;
          this.y = 12.0;
        }
      }
      if(this.branch == 0)
        this.checkPickUp(t);
      else
        this.checkPutDown(t);
    }

    
    this.t = t;
  }
  reset(){
    this.x = 0.0;
    this.y = 12.0;
    this.z = 0.0;
    this.speed = 0.0;
    this.ang = 0.0;
  }
  turn(v){
    if(v)
      this.ang = (this.ang + this.speedFactor * Math.PI / 12) % (Math.PI*2);
    else 
      this.ang = (this.ang - this.speedFactor * Math.PI / 12) % (Math.PI*2);
  }
  accelarate(v){
    if(v){
      if(this.speed < 15.0*this.speedFactor)
        this.speed += this.speedFactor*5;
    }
    
    else{
      if(this.speed > 0) {
        this.speed -= this.speedFactor;
        if(this.speed < 0)
          this.speed = 0;
      }
    }

  }
  checkPos(t){
    //ang errado
    if(this.x > 30){
      this.x -= this.speed * Math.sin(this.ang) * (t - this.t) / 1000;
      this.ang += Math.PI - 2*(this.ang % (Math.PI/2));
    }
    if(this.x < -30){
      this.x -= this.speed * Math.sin(this.ang) * (t - this.t) / 1000;
      this.ang += 2 * (Math.PI/2 - this.ang % (Math.PI/2));
    }
    if(this.z > 30){
      this.z -= this.speed * Math.cos(this.ang) * (t - this.t) / 1000;
      this.ang += 2 * (Math.PI - this.ang % (Math.PI / 2));
    }
    if(this.z < -30){
      this.z -= this.speed * Math.cos(this.ang) * (t - this.t) / 1000;
      this.ang += 2 * (Math.PI/2 - this.ang % (Math.PI / 2));
    }
  }
  startPickUp(){
    if(this.pickUp) return;
    this.pickUp = true;
    this.down = true;
  }
  checkPickUp(){
    if(this.y > 5) return;

    var x_dif, z_dif;

    x_dif = this.x + 14;
    z_dif = this.z - 0.5;
    if(x_dif > -1.5 && x_dif < 1.5 && z_dif < 1.5 && z_dif > -1.5)
      return;

    for(var i = 0; i < this.scene.n_branches && this.branch == 0; i++){
      x_dif = this.x - this.scene.branches[i].x;
      z_dif = this.z - this.scene.branches[i].z;
      if(x_dif > -2 && x_dif < 2 && z_dif < 2 && z_dif > -2){
        this.branch = this.scene.branches[i];
        this.scene.branches[i] = 0;
        this.branch_index = i;
      }
    }
  }
  checkPutDown(){
    if(this.y > 5 || this.branch == 0) return;
    var x_dif, z_dif;

    x_dif = this.x + 14;
    z_dif = this.z - 0.5;
    if(x_dif > -2 && x_dif < 2 && z_dif < 2 && z_dif > -2){
      this.scene.nest.addBranch(this.branch);
      this.branch = 0;
    }
  }
  display(){
    
    this.scene.pushMatrix();
    
    
    if(this.branch != 0){
      this.branch.ang = this.ang + Math.PI/2;
      this.branch.x = this.x - 0.2 * this.scaleFactor * Math.sin(this.ang) - 0.75 * Math.cos(this.ang);
      this.branch.y = this.y + this.heightVar - 0.3 * this.scaleFactor;
      this.branch.z = this.z + 0.75 * Math.sin(this.ang) + 0.2 * this.scaleFactor * Math.cos(this.ang);
      this.branch.display();
    }

    this.scene.setDefaultAppearance();

    // this.scene.translate(this.x,  this.y, this.z);
    this.scene.translate(this.x, this.heightVar + this.y, this.z);
    this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
    this.scene.rotate(this.ang, 0, 1, 0);

    this.scene.pushMatrix();
    this.scene.translate(0.1,-0.15,0);
    this.scene.scale(0.3,0.3,0.3);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.legs.display();

    this.scene.translate(-0.6, 0, 0);
    this.legs.display();
    this.scene.popMatrix();

    this.scene.rotate(Math.PI / 2, 1, 0, 0);


    this.scene.pushMatrix();
    this.scene.wingTxt.apply();
    this.cylinder.display();
    
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 1,0,0);
    this.coneTail.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    
    this.scene.translate(0,0.6,0);
    this.coneHead.display();

    this.scene.pushMatrix();
    this.scene.eyeTxt.apply();
    this.scene.rotate(-Math.PI/5, 1, 0, 0);
    this.scene.translate(0.05, 0.15, -0.1);
    this.scene.scale(0.5, 0.5, 0.5);
    this.eyes.display();

    this.scene.translate(-0.2, 0, 0);
    this.eyes.display();
    this.scene.popMatrix();
    
    this.scene.translate(0,0.4*0.75,0); 
    this.scene.beakTxt.apply();
    this.pyramid.display();   

    this.scene.popMatrix();

    //wings
    
    this.scene.pushMatrix();
    
    this.scene.translate(0, 0.25,0);
    this.scene.scale(0.5,0.5,0.5);
    this.scene.rotate(-this.wingAng, 0, 1, 0);
    this.wings.display();

    this.scene.scale(-1,1,1);
    this.scene.rotate(-this.wingAng*2, 0, 1, 0);
    this.wings.display();
    
    this.scene.popMatrix();
    
    this.scene.popMatrix();
        
    this.scene.popMatrix();
    
  }
  enableNormalViz() {
  
  }  
  disableNormalViz() {
  
  }  
}   

