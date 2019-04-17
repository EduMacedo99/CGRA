/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
	constructor(scene, levels, texture) {
    super(scene);
    this.levels = levels;
    this.cube_num = 1;
    for(var i = 0; i < this.levels; i++)
      this.cube_num += 2*i +1*4 - 4;

    this.cube = new MyUnitCube(this.scene);  

    this.material = new CGFappearance(this.scene);
    this.material.setAmbient(0.4, 0.4, 0.4, 1);
    this.material.setDiffuse(1, 1, 1, 1);
    this.material.setSpecular(0, 0, 0, 1);
    this.material.setShininess(10.0);
    this.material.loadTexture(texture);
    this.material.setTextureWrap('REPEAT', 'REPEAT');

  }
  enableNormalViz() {
    for(var i = 0; i < this.cube_num; i++)
      this.cube.enableNormalViz();
    
  }
  disableNormalViz() {
    for(var i = 0; i < this.cube_num; i++)
      this.cube.disableNormalViz();
  }
  display(){
    this.material.apply();
    for(var i = 0; i < this.levels; i++){
      var sideSize = 2*i +1;

      for(var k = 0; k < sideSize; k++){
        this.scene.pushMatrix();
        this.scene.translate(-i+ k,this.levels-i,-i);
        this.cube.display();
        this.scene.popMatrix();
      }
      for(var k = 1; k < sideSize; k++){
        this.scene.pushMatrix();
        this.scene.translate(-i,this.levels-i,-i + k);
        this.cube.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(i,this.levels-i,-i + k);
        this.cube.display();
        this.scene.popMatrix();
      }
      for(var k = 1; k < (sideSize - 1); k++){
        this.scene.pushMatrix();
        this.scene.translate(-i+ k,this.levels-i,i);
        this.cube.display();
        this.scene.popMatrix();
      }
    }    
  }
}

