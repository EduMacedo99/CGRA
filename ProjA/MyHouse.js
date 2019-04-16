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
    this.front_wall = new MyUnitCubeQuad(this.scene, 'textures/wall_door.jpg', 'textures/wall_door.jpg', 'textures/wall_door.jpg');
    this.roof = new MyPyramid(this.scene, 4, 1, Math.SQRT2/2 +0.4);
    this.columns = new MyPrism(this.scene, 8, 10, 2.5);
    this.roof2 = new MyPyramid(this.scene, 4, 0.4, Math.SQRT2/2 +0.4);
    this.circle = new MyCircle(this.scene, 4, Math.SQRT2/2 +0.4);
    
    var txtcoords = [];
    for(var i = 0; i < 4; i++){
        txtcoords.push(0.5, 0.5);
        txtcoords.push(0, 1);
        txtcoords.push(1, 1);
    }

    this.roof2.updateTexCoords(txtcoords);


    this.columns_tex = new CGFappearance(this.scene);
    this.columns_tex.setAmbient(0.5, 0.5, 0.5, 1.0);
    this.columns_tex.setDiffuse(0.8, 0.8, 0.8, 1.0);
    this.columns_tex.setSpecular(0.2, 0.2, 0.2, 1.0);
    this.columns_tex.setShininess(50.0);
    this.columns_tex.loadTexture('textures/wall_column.jpg');
    this.columns_tex.setTextureWrap('REPEAT', 'REPEAT');


    this.roof_tex = new CGFappearance(this.scene);
    this.roof_tex.setAmbient(0.5, 0.5, 0.5, 1.0);
    this.roof_tex.setDiffuse(0.8, 0.8, 0.8, 1.0);
    this.roof_tex.setSpecular(0.2, 0.2, 0.2, 1.0);
    this.roof_tex.setShininess(50.0);
    this.roof_tex.loadTexture('textures/roof.jpg');
    this.roof_tex.setTextureWrap('REPEAT', 'REPEAT');

    this.roof2_tex = new CGFappearance(this.scene);
    this.roof2_tex.setAmbient(0.5, 0.5, 0.5, 1.0);
    this.roof2_tex.setDiffuse(0.8, 0.8, 0.8, 1.0);
    this.roof2_tex.setSpecular(0.2, 0.2, 0.2, 1.0);
    this.roof2_tex.setShininess(50.0);
    this.roof2_tex.loadTexture('textures/roof_2.jpg');
    this.roof2_tex.setTextureWrap('REPEAT', 'REPEAT');

    this.roof_under = new CGFappearance(this.scene);
    this.roof_under.setAmbient(0.5, 0.5, 0.5, 1.0);
    this.roof_under.setDiffuse(0.8, 0.8, 0.8, 1.0);
    this.roof_under.setSpecular(0.2, 0.2, 0.2, 1.0);
    this.roof_under.setShininess(50.0);
    this.roof_under.loadTexture('textures/wall_under.jpg');
    this.roof_under.setTextureWrap('REPEAT', 'REPEAT');

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
  this.scene.translate(0,0,-10.2);
  this.columns.display();
  this.scene.translate(-10.2,0,0);
  this.columns.display();
  this.scene.translate(0,0,10.2);
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
  this.columns_tex.apply();

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

  this.roof_tex.apply();
  
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

  //de baixo dos telhados
  this.roof_under.apply();
  
  this.scene.pushMatrix();
  this.scene.rotate(Math.PI, 1, 0, 0);
  
  this.scene.translate(1.5,-9.8,23.4);
  this.scene.scale(4,1,4);
  this.circle.display();
  this.scene.translate(0,0,-7.1);
  this.circle.display();

  this.scene.translate(6.75,0,0);
  this.circle.display();
  this.scene.translate(0,0,7.1);
  this.circle.display();

  this.scene.popMatrix();

//-------------------
  this.roof2_tex.apply();

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
    this.walls.enableNormalViz();
    this.front_wall.enableNormalViz();
    this.roof.enableNormalViz();
    this.columns.enableNormalViz(); 
    this.roof2.enableNormalViz();
    this.circle.enableNormalViz();

  }
  disableNormalViz(){
    this.walls.disableNormalViz();
    this.front_wall.disableNormalViz();
    this.roof.disableNormalViz();
    this.columns.disableNormalViz(); 
    this.roof2.disableNormalViz();
    this.circle.disableNormalViz();
  }
} 

