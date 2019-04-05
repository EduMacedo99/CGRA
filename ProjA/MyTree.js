/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {
	constructor(scene, slices, height = 2, radius = 0.5, topTrunkHeightRatio = 1, topTrunkRadiusRatio = 1.5, x = 0, y = 0, z = 0) {
    super(scene);

    this.height = height*topTrunkHeightRatio;
    this.normals = []; 
    this.x = x;
    this.y = y;
    this.z = z;

    this.coneOut = new MyCone(this.scene, slices, false,  height*(1/topTrunkHeightRatio), radius*topTrunkRadiusRatio);
    this.cylinder = new MyCylinder(this.scene, slices, 6*height*topTrunkHeightRatio/4, radius);
    this.coneIn = new MyCone(this.scene, slices, true,  height*(1/topTrunkHeightRatio)/4, radius*topTrunkRadiusRatio);

    this.bark = new CGFappearance(this.scene);
    this.bark.setAmbient(1, 1, 1, 1);
    this.bark.setDiffuse(1, 1, 1, 1);
    this.bark.setSpecular(0.1, 0.1, 0.1, 1);
    this.bark.setShininess(50.0);
    this.bark.loadTexture('textures/bark.jpg');
    this.bark.setTextureWrap('REPEAT', 'REPEAT');


    this.leaves = new CGFappearance(this.scene);
    this.leaves.setAmbient(1, 1, 1, 1);
    this.leaves.setDiffuse(1, 1, 1, 1);
    this.leaves.setSpecular(0.1, 0.1, 0.1, 1);
    this.leaves.setShininess(50.0);
    this.leaves.loadTexture('textures/pine.jpg');
    this.leaves.setTextureWrap('REPEAT', 'REPEAT');

  }
display(){
    
    this.scene.translate(this.x, this.y, this.z);
    this.scene.pushMatrix();
    this.scene.translate(0, this.height, 0);
    this.leaves.apply();
    this.coneOut.display();
    this.coneIn.display();
    this.scene.popMatrix();

    this.bark.apply();
    this.cylinder.display();
    this.scene.translate(-this.x, -this.y, -this.z);

  }
  enableNormalViz(){
    this.coneOut.enableNormalViz();
    this.cylinder.enableNormalViz();
    this.coneIn.enableNormalViz();
  }
  disableNormalViz(){
    this.coneOut.disableNormalViz();
    this.cylinder.disableNormalViz();
    this.coneIn.disableNormalViz();
  }
} 
