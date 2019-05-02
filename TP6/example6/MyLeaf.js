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

    var color = this.scene.hexToRgbA('#32CD32');
    this.materialGreen = new CGFappearance(this.scene);
    this.materialGreen.setAmbient(color[0], color[1], color[2], 1.0);
    this.materialGreen.setDiffuse(color[0], color[1], color[2], 1.0);
    this.materialGreen.setSpecular(0, 0, 0, 1.0);
    this.materialGreen.setShininess(10.0);
  }
  display(){
    this.materialGreen.apply();
    this.leaf.display();
  }
  enableNormalViz(){
    this.leaf.enableNormalViz();
  }
  disableNormalViz(){
    this.leaf.disableNormalViz();
  }
} 

