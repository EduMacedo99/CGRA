/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, texture_sides, texture_top, texture_bottom) {
    super(scene);
    
    this.quad = new MyQuad(this.scene, [0, 1, 1, 1, 0, 0, 1, 0]);

    this.materialSide = new CGFappearance(this.scene);
    this.materialSide.setAmbient(0.5, 0.5, 0.5, 1.0);
    this.materialSide.setDiffuse(0.8, 0.8, 0.8, 1.0);
    this.materialSide.setSpecular(0.2, 0.2, 0.2, 1.0);
    this.materialSide.setShininess(50.0);
    this.materialSide.loadTexture(texture_sides);
    this.materialSide.setTextureWrap('REPEAT', 'REPEAT');

    this.materialTop = new CGFappearance(this.scene);
    this.materialTop.setAmbient(1, 1, 1, 1.0);
    this.materialTop.setDiffuse(0.8, 0.8, 0.8, 1.0);
    this.materialTop.setSpecular(0.2, 0.2, 0.2, 1.0);
    this.materialTop.setShininess(50.0);
    this.materialTop.loadTexture(texture_top);
    this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

    this.materialBottom = new CGFappearance(this.scene);
    this.materialBottom.setAmbient(1, 1, 1, 1.0);
    this.materialBottom.setDiffuse(0.8, 0.8, 0.8, 1.0);
    this.materialBottom.setSpecular(0.2, 0.2, 0.2, 1.0);
    this.materialBottom.setShininess(50.0);
    this.materialBottom.loadTexture(texture_bottom);
    this.materialBottom.setTextureWrap('REPEAT', 'REPEAT');

  }
  enableNormalViz() {
    this.quad.enableNormalViz();
}
disableNormalViz() {
    this.quad.disableNormalViz();    
}

  display(){

    //Sides of the Cube
    this.materialSide.apply(); //Change material

    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

    this.scene.pushMatrix();
    this.scene.translate(0, 0, -0.5);

    //Front face
    this.scene.pushMatrix();
    this.scene.translate(0, 0, 0.5); 
    this.quad.display();
    this.scene.popMatrix();
    
    //Back face
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.scene.translate(0, 0, 0.5); //Translate forward to set correct position before rotating
    this.quad.display();
    this.scene.popMatrix();

    //Left face
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 0, 1, 0);
    this.scene.translate(0, 0, 0.5); //Translate forward to set correct position before rotating
    this.quad.display();
    this.scene.popMatrix();
    
    //Right face
    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2, 0, 1, 0);
    this.scene.translate(0, 0, 0.5); //Translate forward to set correct position before rotating
    this.quad.display();
    this.scene.popMatrix();

    //Top face
    this.materialTop.apply(); //Change material

    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2, 1, 0, 0); //Rotate 90 degrees up
    this.scene.translate(0, 0, 0.5); //Translate forward to set correct position before rotating
    this.quad.display();
    this.scene.popMatrix();

    //Bottom face
    this.materialBottom.apply(); //Change material

    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 1, 0, 0); //Rotate 90 degrees up
    this.scene.translate(0, 0, 0.5); //Translate forward to set correct position before rotating
    this.quad.display();
    this.scene.popMatrix();
  
    this.scene.popMatrix();


  }
}

