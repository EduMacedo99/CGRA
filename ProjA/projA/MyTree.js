/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {
	constructor(scene, slices, height = 2, radius = 0.5, topTrunkHeightRatio = 1, topTrunkRadiusRatio = 1.5) {
    super(scene);

    this.height = height*topTrunkHeightRatio;
    this.normals = []; 

    this.cone = new MyCone(this.scene, slices,  height*(1/topTrunkHeightRatio), radius*topTrunkRadiusRatio);
    this.cylinder = new MyCylinder(this.scene, slices, height*topTrunkHeightRatio, radius);
    this.circle = new MyCircle(this.scene, slices, radius*topTrunkRadiusRatio);

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
    
    this.scene.pushMatrix();
    this.scene.translate(0, this.height, 0);
    this.leaves.apply();
    this.cone.display();
    this.scene.rotate(Math.PI, 1, 0, 0);
    this.circle.display();
    this.scene.popMatrix();
    this.bark.apply();
    this.cylinder.display();

  }
  enableNormalViz(){
    this.cone.enableNormalViz();
    this.cylinder.enableNormalViz();
    this.circle.enableNormalViz();
  }
  disableNormalViz(){
    this.cone.disableNormalViz();
    this.cylinder.disableNormalViz();
    this.circle.disableNormalViz();
  }
} 

