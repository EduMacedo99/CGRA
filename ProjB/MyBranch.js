/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {
	constructor(scene) {
    super(scene);
    
    this.normals = []; 

    this.branch = new MyCylinder(this.scene, 10);

  }
  display(){
    this.branch.display();
  }
  enableNormalViz(){
    this.branch.enableNormalViz();
  }
  disableNormalViz(){
    this.branch.disableNormalViz();
  }
} 

