/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, texture_sides = '-', texture_top = '-', texture_bottom = '-', x = 0, y = 0, z = 0) {
    super(scene);

    this.x = x;
    this.y = y;
    this.z = z;
    this.text_side = false;
    this.text_top = false;
    this.text_bottom = false;    
    
    this.quad = new MyQuad(this.scene, [0, 1, 1, 1, 0, 0, 1, 0]);

    if(texture_sides != "-"){
      this.text_side = true;
      this.materialSide = new CGFappearance(this.scene);
      this.materialSide.setAmbient(1, 1, 1, 1.0);
      this.materialSide.setSpecular(0.0, 0.0, 0.0, 1.0);
      this.materialSide.setDiffuse(0.5, 0.5, 0.5, 1.0);
      this.materialSide.setShininess(10.0);
      this.materialSide.loadTexture(texture_sides);
      this.materialSide.setTextureWrap('REPEAT', 'REPEAT');
    }

    if(texture_top != "-"){
      this.text_top = true;
      this.materialTop = new CGFappearance(this.scene);
      this.materialTop.setAmbient(1, 1, 1, 1.0);
      this.materialTop.setSpecular(0.0, 0.0, 0.0, 1.0);
      this.materialTop.setDiffuse(0.5, 0.5, 0.5, 1.0);
      this.materialTop.setShininess(10.0);
      this.materialTop.loadTexture(texture_top);
      this.materialTop.setTextureWrap('REPEAT', 'REPEAT');
    }

    if(texture_bottom != "-"){
      this.text_bottom = true;
      this.materialBottom = new CGFappearance(this.scene);
      this.materialBottom.setAmbient(1, 1, 1, 1.0);
      this.materialBottom.setSpecular(0.0, 0.0, 0.0, 1.0);
      this.materialBottom.setDiffuse(0.5, 0.5, 0.5, 1.0);
      this.materialBottom.setShininess(10.0);
      this.materialBottom.loadTexture(texture_bottom);
      this.materialBottom.setTextureWrap('REPEAT', 'REPEAT');
    }

  }
  enableNormalViz() {
    this.quad.enableNormalViz();
}
disableNormalViz() {
    this.quad.disableNormalViz();    
}

  display(){

    //Sides of the Cube
    if(this.text_side)
      this.materialSide.apply(); //Change material

    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

    this.scene.pushMatrix();
    this.scene.translate(this.x, this.y, -0.5 + this.z);

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
    if(this.text_top)
      this.materialTop.apply(); //Change material

    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2, 1, 0, 0); //Rotate 90 degrees up
    this.scene.translate(0, 0, 0.5); //Translate forward to set correct position before rotating
    this.quad.display();
    this.scene.popMatrix();

    //Bottom face
    if(this.text_bottom)
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

