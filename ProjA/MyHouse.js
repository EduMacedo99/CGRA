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
    this.columns = new MyPrism(this.scene, 20, 10, 2.5);
    this.roof2 = new MyPyramid(this.scene, 4, 0.4, Math.SQRT2/2 +0.4);
     

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
  /*
  this.scene.pushMatrix();
  this.scene.scale(7,5.3,7);
  this.scene.pushMatrix();
  this.scene.translate(0,1,0);
  this.scene.rotate(Math.PI/4,0,1,0);
  this.roof.display();
  this.scene.rotate(Math.PI/4, 0,1,0);
  this.scene.translate(0,-0.5,0);
  this.walls.display();   
  tis.scene.popMatrix();
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
  this.scene.pushMatrix();
  
  this.scene.translate(0.5,0,0);
  this.scene.rotate(Math.PI/4,0,1,0);
  this.balcony.display();
  this.scene.popMatrix();
  this.scene.popMatrix();*/
  
  //walls
  this.scene.pushMatrix();
  
  this.scene.scale(30,5,6);
  this.scene.translate(0.5,0.5,0.5);
  this.walls.display();
  this.scene.popMatrix();
  this.scene.pushMatrix();
  this.scene.rotate(Math.PI/2,0,1,0);
  this.scene.scale(20,5,6);
  this.scene.translate(0.5,0.5,0.5);
  this.walls.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.translate(0,0,-20);
  this.scene.scale(30,5,6);
  this.scene.translate(0.5,0.5,0.5);
  this.walls.display();
  this.scene.popMatrix();
  this.scene.pushMatrix();
  this.scene.translate(24,0,0);
  this.scene.rotate(Math.PI/2,0,1,0);
  this.scene.scale(20,5,6);
  this.scene.translate(0.5,0.5,0.5);
  this.walls.display();
  this.scene.popMatrix();



  //pilares
  this.scene.pushMatrix();
  this.scene.translate(1.5,0,5);
  this.columns.display();
  this.scene.translate(0,0,-24);
  this.columns.display();
  this.scene.translate(27,0,0);
  this.columns.display();
  this.scene.translate(0,0,24);
  this.columns.display();
  this.scene.popMatrix();
  
  
  //telhados
  this.scene.pushMatrix();

    
  this.scene.translate(1.5,9.8,5);
  this.scene.scale(4,4,4);
  this.roof.display();
  this.scene.translate(0,0,-6);
  this.roof.display();

  this.scene.translate(27/4,0,0);
  this.roof.display();
  this.scene.translate(0,0,6);
  this.roof.display();
  this.scene.popMatrix();

//-------------------

  this.scene.pushMatrix();

  this.scene.translate(15,5,3);
  this.scene.scale(19.2,5,4);
  this.scene.rotate(Math.PI/4,0,1,0);
  this.roof2.display();

  this.scene.translate(3.6,0,-3.6);
  this.roof2.display();
  
  this.scene.popMatrix();


  this.scene.pushMatrix();

  
  this.scene.translate(0.75,0,0);
  this.scene.rotate(Math.PI/4,0,1,0);
  this.roof2.display();






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

