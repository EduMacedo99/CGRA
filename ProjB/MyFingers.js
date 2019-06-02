/**
 * MyFingers
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFingers extends CGFobject {
	constructor(scene) {
    super(scene);
    
    this.normals = []; 
    this.cylinder = new MyCylinder(this.scene, 6,0.50,0.10);
    this.cone = new MyCone(this.scene, 6, false, 0.4,0.10);

  }
  display(){
    this.scene.pushMatrix();
    this.scene.fingerTxt.apply();
    this.cylinder.display();
    this.scene.translate(0,0.50,0);
    this.scene.nailTxt.apply();
    this.cone.display();
    this.scene.popMatrix();
  }
  enableNormalViz(){
    this.branch.enableNormalViz();
  }
  disableNormalViz(){
    this.branch.disableNormalViz();
  }
} 

