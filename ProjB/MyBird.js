/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
	constructor(scene) {
    super(scene);
    
    this.heightVar = 0.0;
    this.wingAng = 0.0;
    this.normals = []; 
    this.speed = 0.0;

    this.cylinder = new MyCylinder(this.scene, 6, 0.6, 0.25);
    this.coneHead = new MyCone(this.scene, 6, false, 0.4, 0.25);
    this.coneTail = new MyCone(this.scene, 6, false, 0.7, 0.25);
    this.pyramid = new MyPyramid(this.scene, 6, 0.2, 0.25/4);
    this.eyes = new MyPyramid(this.scene, 4, 0.08, 0.1);
    this.wings = new MyWing(this.scene);
    
  }
    update(t){
      this.heightVar = Math.sin((t / 50) * Math.PI/2);
      this.speed *= 0.9;
      this.wingAng = (this.speed + 1) * Math.sin((t/50) * Math.PI/2);
    }
   
  
    enableNormalViz() {

}
    

    disableNormalViz() {

}

display(){

    this.scene.pushMatrix();
    this.scene.translate(0, this.heightVar, 0);
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

    
    






    this.scene.popMatrix();


  }


} 

