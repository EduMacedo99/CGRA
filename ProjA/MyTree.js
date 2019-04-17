/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {
  constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture){
    super(scene);

    this.height = trunkHeight;
    this.normals = []; 

    this.coneOut = new MyCone(this.scene, 10, false,  treeTopHeight, treeTopRadius);
    this.cylinder = new MyCylinder(this.scene, 10, trunkHeight + treeTopHeight/4.0, trunkRadius);
    this.coneIn = new MyCone(this.scene, 10, true,  treeTopHeight / 4.0, treeTopRadius);

    this.bark = new CGFappearance(this.scene);
    this.bark.setAmbient(1, 1, 1, 1);
    this.bark.setDiffuse(1, 1, 1, 1);
    this.bark.setSpecular(0.1, 0.1, 0.1, 1);
    this.bark.setShininess(50.0);
    this.bark.loadTexture(trunkTexture);
    this.bark.setTextureWrap('REPEAT', 'REPEAT');


    this.leaves = new CGFappearance(this.scene);
    this.leaves.setAmbient(1, 1, 1, 1);
    this.leaves.setDiffuse(1, 1, 1, 1);
    this.leaves.setSpecular(0.1, 0.1, 0.1, 1);
    this.leaves.setShininess(50.0);
    this.leaves.loadTexture(treeTopTexture);
    this.leaves.setTextureWrap('REPEAT', 'REPEAT');


  }
display(){
    
    this.scene.pushMatrix();
    this.scene.translate(0, this.height, 0);
    this.leaves.apply();
    this.coneOut.display();
    this.coneIn.display();
    this.scene.popMatrix();

    this.bark.apply();
    this.cylinder.display();
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

