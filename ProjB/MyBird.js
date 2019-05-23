/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
	constructor(scene) {
    super(scene);
    
    this.heightVar = 0.0;
    this.ang = 0.0;
    this.wingAng = 0.0;
    this.normals = []; 
    this.speed = 0.0;
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;

    this.cylinder = new MyCylinder(this.scene, 6, 0.6, 0.25);
    this.coneHead = new MyCone(this.scene, 6, false, 0.4, 0.25);
    this.coneTail = new MyCone(this.scene, 6, false, 0.7, 0.25);
    this.pyramid = new MyPyramid(this.scene, 6, 0.2, 0.25/4);
    this.eyes = new MyPyramid(this.scene, 4, 0.08, 0.1);
    this.wings = new MyWing(this.scene);
    
  }
  update(t){
    this.heightVar = Math.sin((t / 200) * Math.PI/2)/2;
    this.speed *= 0.9;
    this.wingAng = Math.sin((t/200) * (-this.speed - 1) * Math.PI/2);

    this.x += this.speed * Math.sin(this.ang);
    this.z += this.speed * Math.cos(this.ang);
  }
  turn(v){
    if(v)
      this.ang += Math.PI / 12;
    else 
      this.ang -= Math.PI / 12;
  }
  accelarate(v){
    if(v)
      if(this.speed < 3.0)
        this.speed += 1;
    
    else
      if(this.speed > 0) {
        this.speed -= 1;
        if(this.speed < 0)
          this.speed = 0;
      }
  }
  
  enableNormalViz() {

  }
    

  disableNormalViz() {

  }

  display(){

    this.scene.pushMatrix();

    this.scene.translate(this.x, this.heightVar, this.z);
    this.scene.rotate(this.ang, 0, 1, 0);
    this.scene.rotate(Math.PI / 2, 1, 0, 0);

    this.scene.pushMatrix();
    this.cylinder.display();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 1,0,0);
    this.coneTail.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();

    this.scene.translate(0,0.6,0);
    this.coneHead.display();

    this.scene.translate(0,0.4*0.75,0); 
    this.pyramid.display();   

    this.scene.popMatrix();

    //wings
    
    this.scene.pushMatrix();

    this.scene.translate(0, 0.25,0);
    this.scene.scale(0.5,0.5,0.5);
    this.scene.rotate(this.wingAng, 0, 1, 0);
    this.wings.display();

    this.scene.scale(-1,1,1);
    this.scene.rotate(this.wingAng*2, 0, 1, 0);
    this.wings.display();

    this.scene.popMatrix();

    this.scene.popMatrix();


    this.scene.popMatrix();

  }


} 

