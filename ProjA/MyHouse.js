/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
	constructor(scene) {
    super(scene);
    
    this.normals = []; 

    this.walls = new MyUnitCubeQuad(this.scene, 'textures/wall_window.jpg', 'textures/wall_window.jpg', 'textures/wall_window.jpg');
    this.front_wall = new MyUnitCubeQuad(this.scene, 'textures/wall_door.jpg', 'textures/wall_window_door.jpg', 'textures/wall_window_door.jpg')
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
  
  this.scene.pushMatrix();

  this.scene.scale(0.7,0.7,0.7);
  this.scene.translate(-15,0,8);

  //walls
  this.scene.pushMatrix();
  this.scene.translate(0,0,3);
  this.scene.scale(30,5,6);
  this.scene.translate(0.5,0.5,0.51);
  this.front_wall.display();
  this.scene.translate(0,0,-4.2);
  this.walls.display();
  this.scene.popMatrix();
  
  this.scene.pushMatrix();
  this.scene.translate(3,0,0);
  this.scene.rotate(Math.PI/2,0,1,0);
  this.scene.scale(30,5,6);
  this.scene.translate(0.3,0.5,0.5);
  this.walls.display();
  this.scene.translate(0,0,4.01);
  this.walls.display();
  this.scene.popMatrix();


  //pilares
  this.scene.pushMatrix();
  this.scene.translate(1.5,0,5);
  this.columns.display();
  this.scene.translate(0,0,-28.5);
  this.columns.display();
  this.scene.translate(27,0,0);
  this.columns.display();
  this.scene.translate(0,0,28.5);
  this.columns.display();
  this.scene.popMatrix();
  
  
  //telhados
  
  this.scene.pushMatrix();

  this.scene.translate(1.5,9.8,5);
  this.scene.scale(4,4,4);
  this.roof.display();
  this.scene.translate(0,0,-7.1);
  this.roof.display();

  this.scene.translate(6.75,0,0);
  this.roof.display();
  this.scene.translate(0,0,7.1);
  this.roof.display();

  this.scene.popMatrix();

//-------------------

  this.scene.pushMatrix();

  this.scene.translate(15,5,2.9);
  this.scene.scale(19.2,5,4);
  this.scene.rotate(Math.PI/4,0,1,0);
  this.roof2.display();

  this.scene.translate(4.4,0,-4.4);
  this.roof2.display();
  
  this.scene.popMatrix();


  this.scene.pushMatrix();
  this.scene.translate(3,5,-10);
  this.scene.scale(4,5,19.2);
  this.scene.rotate(Math.PI/4,0,1,0);
  this.roof2.display();
  
  this.scene.translate(4.22,0,4.22);
  this.roof2.display();
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

