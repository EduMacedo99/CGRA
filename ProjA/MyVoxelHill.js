/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
	constructor(scene, levels) {
    super(scene);
    this.levels = levels;

    this.cubes = [];
    this.cube_num = 0;

    for(var i = 0; i < this.levels; i++){
      var sideSize = 2*i +1;

      for(var k = 0; k < sideSize; k++){
          this.cubes.push(new MyUnitCubeQuad(this.scene, 'textures/grass.jpg', 'textures/grass.jpg', 'textures/grass.jpg', -i+ k,this.levels-i,-i));
      }
      for(var k = 1; k < sideSize; k++){
          this.cubes.push(new MyUnitCubeQuad(this.scene, 'textures/grass.jpg', 'textures/grass.jpg', 'textures/grass.jpg', -i,this.levels-i,-i + k));
          this.cubes.push(new MyUnitCubeQuad(this.scene, 'textures/grass.jpg', 'textures/grass.jpg', 'textures/grass.jpg', i,this.levels-i,-i + k));
      }
      for(var k = 1; k < (sideSize - 1); k++){
          this.cubes.push(new MyUnitCubeQuad(this.scene, 'textures/grass.jpg', 'textures/grass.jpg', 'textures/grass.jpg', -i+ k,this.levels-i,i));
      }
      this.cube_num += 4*sideSize - 4;
    }    
    this.cube_num++; //first cube
  
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

    for(var i = 0; i < this.cube_num; i++)
      this.cubes[i].display();
    
    

  }
}

