/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
    super(scene);
    
    this.quad = new MyQuad(this.scene);

    this.materialSide = new CGFappearance(this.scene);
    this.materialSide.setAmbient(1, 1, 1, 1.0);
    this.materialSide.setSpecular(0.0, 0.0, 0.0, 1.0);
    this.materialSide.setDiffuse(0.5, 0.5, 0.5, 1.0);
    this.materialSide.setShininess(10.0);
    this.materialSide.loadTexture('images/mineSide.png');
    this.materialSide.setTextureWrap('REPEAT', 'REPEAT');

    this.materialTop = new CGFappearance(this.scene);
    this.materialTop.setAmbient(1, 1, 1, 1.0);
    this.materialTop.setSpecular(0.0, 0.0, 0.0, 1.0);
    this.materialTop.setDiffuse(0.5, 0.5, 0.5, 1.0);
    this.materialTop.setShininess(10.0);
    this.materialTop.loadTexture('images/mineTop.png');
    this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

    this.materialBottom = new CGFappearance(this.scene);
    this.materialBottom.setAmbient(1, 1, 1, 1.0);
    this.materialBottom.setSpecular(0.0, 0.0, 0.0, 1.0);
    this.materialBottom.setDiffuse(0.5, 0.5, 0.5, 1.0);
    this.materialBottom.setShininess(10.0);
    this.materialBottom.loadTexture('images/mineBottom.png');
    this.materialBottom.setTextureWrap('REPEAT', 'REPEAT');

	}
  display(){

    //Sides of the Cube
    this.materialSide.apply(); //Change material

    if (this.scene.textFilter) //true: NEAREST mode enabled, false: LINEAR mode enabled
      this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    else
      this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);


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

    if (this.scene.textFilter)
      this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    else
      this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);

    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2, 1, 0, 0); //Rotate 90 degrees up
    this.scene.translate(0, 0, 0.5); //Translate forward to set correct position before rotating
    this.quad.display();
    this.scene.popMatrix();

    //Bottom face
    this.materialBottom.apply(); //Change material

    if (this.scene.textFilter)
      this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    else
      this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 1, 0, 0); //Rotate 90 degrees up
    this.scene.translate(0, 0, 0.5); //Translate forward to set correct position before rotating
    this.quad.display();
    this.scene.popMatrix();
    
    this.scene.translate(0, 0, -0.5);


  }
}

