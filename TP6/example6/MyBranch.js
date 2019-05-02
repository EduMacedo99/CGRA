/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {
	constructor(scene) {
    super(scene);
    
    this.normals = []; 

    this.branch = new MyCylinder(this.scene, 4);

    var color = this.scene.hexToRgbA('#8B4513');
    this.materialBrown = new CGFappearance(this.scene);
    this.materialBrown.setAmbient(color[0], color[1], color[2], 1.0);
    this.materialBrown.setDiffuse(color[0], color[1], color[2], 1.0);
    this.materialBrown.setSpecular(0, 0, 0, 1.0);
    this.materialBrown.setShininess(10.0);
  }
  display(){
    this.materialBrown.apply();
    this.branch.display();
  }
  enableNormalViz(){
    this.branch.enableNormalViz();
  }
  disableNormalViz(){
    this.branch.disableNormalViz();
  }
} 

