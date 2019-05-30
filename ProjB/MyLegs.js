/**
 * MyLegs
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLegs extends CGFobject {
	constructor(scene, n_branches, height) {
    super(scene);
    
    this.normals = []; 
    this.cylinder = new MyCylinder(this.scene, 6,0.65,0.10);
    this.fingers = new MyFingers(this.scene);
    this.ang = -Math.PI/9;

  }
  display(){
    this.scene.pushMatrix();

    this.scene.pushMatrix();

    this.scene.rotate(this.ang, 1,0,0);
    this.scene.translate(0.0,-.65,0.05);
    this.cylinder.display();


    this.scene.popMatrix();

    this.scene.translate(0.0,-.5, 0.23);

    this.scene.rotate(Math.PI/2, 1,0,0);
    this.fingers.display();
    this.scene.rotate(-Math.PI/8, 0,0,1);
    this.fingers.display();
    this.scene.rotate(2*Math.PI/8, 0,0,1);
    this.fingers.display();



    this.scene.popMatrix();
  }
  enableNormalViz(){
    this.branch.enableNormalViz();
  }
  disableNormalViz(){
    this.branch.disableNormalViz();
  }
} 

