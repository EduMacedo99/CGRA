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

  }
  display(){
    this.scene.pushMatrix();

    this.scene.pushMatrix();

    this.scene.translate(0.05,-0.05,0.05);
    this.scene.rotate(-Math.PI/9, 1,0,0);
    this.scene.rotate(Math.PI/9, 0,0,1);
    this.cylinder.display();

    this.scene.popMatrix();


    this.scene.rotate(Math.PI/2, 1,0,0);
    this.fingers.display();
    this.scene.rotate(-Math.PI/4, 0,0,1);
    this.fingers.display();
    this.scene.rotate(-Math.PI/4, 0,0,1);
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

