/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
	constructor(scene, levels) {
    super(scene);
    this.levels = levels;

    
    this.cube = new MyUnitCubeQuad(this.scene);
    
    }
    enableNormalViz() {
        this.cube.enableNormalViz();
    }
    disableNormalViz() {
        this.cube.disableNormalViz();    
    }
  display(){

    this.scene.pushMatrix();
    
    for(var i = 0; i < this.levels; i++){
        var sideSize = 2*i +1;

        for(var k = 0; k < sideSize; k++){
            this.scene.pushMatrix();
            this.scene.translate(-i+ k,this.levels-i,-i);
            this.cube.display();
            this.scene.popMatrix();
        }

        for(var k = 0; k < sideSize; k++){
            this.scene.pushMatrix();
            this.scene.translate(-i,this.levels-i,-i + k);
            this.cube.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(i,this.levels-i,-i + k);
            this.cube.display();
            this.scene.popMatrix();
        }

        for(var k = 0; k < sideSize; k++){
            this.scene.pushMatrix();
            this.scene.translate(-i+ k,this.levels-i,i);
            this.cube.display();
            this.scene.popMatrix();
        }

    }

  }
}

