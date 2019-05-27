/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
	constructor(scene) {
    super(scene);
    
    this.normals = []; 

    this.leaf = new MyDiamond(this.scene);
  }
  display(){
    this.leaf.display();
  }
  enableNormalViz(){
    this.leaf.enableNormalViz();
  }
  disableNormalViz(){
    this.leaf.disableNormalViz();
  }
} 

