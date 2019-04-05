/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
	constructor(scene) {
    super(scene);
    
    this.normals = []; 

    this.walls = new MyUnitCubeQuad(this.scene);
    this.roof = new MyPyramid(this.scene, 4, 1, Math.SQRT2/2 +0.4);
    this.columns = new MyPrism(this.scene, 8, 1, 0.19);

  }

  enableNormalViz() {
    this.walls.enableNormalViz();
    this.roof.enableNormalViz();
    this.columns.enableNormalViz();
}
disableNormalViz() {
    this.walls.disableNormalViz();
    this.roof.disableNormalViz();
    this.columns.disableNormalViz();
}

display(){
    
    this.scene.pushMatrix();
    this.scene.scale(3,3,3);

    this.scene.pushMatrix();
    this.scene.translate(0,1,0);
    this.scene.rotate(Math.PI/4,0,1,0);
    this.roof.display();
    this.scene.rotate(Math.PI/4, 0,1,0);
    this.scene.translate(0,-0.5,0);
    this.walls.display();   
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0.6,0,0.6);;
    this.columns.display();
    this.scene.translate(0,0,-1.2);
    this.columns.display();
    this.scene.translate(-1.2,0,0);
    this.columns.display();
    this.scene.translate(0,0,1.2);
    this.columns.display();
    this.scene.popMatrix();

    this.scene.popMatrix();
  }
  enableNormalViz(){
    this.roof.enableNormalViz();
    this.walls.enableNormalViz();
    this.columns.enableNormalViz();
    
  }
  disableNormalViz(){
    this.roof.disableNormalViz();
    this.walls.disableNormalViz();
    this.columns.disableNormalViz();
    
  }
} 

