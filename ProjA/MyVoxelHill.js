/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
	constructor(scene, levels) {
    super(scene);
    this.levels = levels;
    this.cube_num = 0;

    this.cube = new MyUnitCubeQuad(this.scene, 'textures/grass.jpg', 'textures/grass.jpg', 'textures/grass.jpg');  
  }
  enableNormalViz() {
    for(var i = 0; i < this.cube_num; i++)
      this.cubes[i].enableNormalViz();
    
  }
  disableNormalViz() {
    for(var i = 0; i < this.cube_num; i++)
      this.cubes[i].disableNormalViz();
  }
  display(){

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
      this.cube_num += 4*sideSize - 4;
    }    
    this.cube_num++; //first cube

  }
}

