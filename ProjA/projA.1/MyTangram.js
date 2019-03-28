/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
    super(scene);
    
    this.normals = []; 

    this.diamond = new MyDiamond(this.scene);
    this.smallTriangle1 = new MySmallTriangle(this.scene);
    this.smallTriangle2 = new MySmallTriangle(this.scene);
    this.bigTriangle1 = new MyBigTriangle(this.scene);
    this.bigTriangle2 = new MyBigTriangle(this.scene);
    this.parallelogram = new MyParallelogram(this.scene);
    this.triangle = new MyTriangle(this.scene);

    this.materialTangram = new CGFappearance(this.scene);
    this.materialTangram.setAmbient(1, 1, 1, 1.0);
    this.materialTangram.setDiffuse(0.5, 0.5, 0.5, 1.0);
    this.materialTangram.setSpecular(1, 1, 1, 1.0);
    this.materialTangram.setShininess(50.0);
    this.materialTangram.loadTexture('images/tangram.png');
    this.materialTangram.setTextureWrap('REPEAT', 'REPEAT');

    this.bigTriangle2.texCoords = [
      1, 0,
      0.5, 0.5,
      1, 1,

      1, 0,
      0.5, 0.5,
      1, 1
      
    ];
    this.bigTriangle2.updateTexCoordsGLBuffers();
    
    this.smallTriangle2.texCoords = [
      0.25, 0.75,
      0.5, 0.5,
      0.75, 0.75,

      0.25, 0.75,
      0.5, 0.5,
      0.75, 0.75
      
    ];
		this.smallTriangle2.updateTexCoordsGLBuffers();
  }
display(){
    
    this.materialTangram.apply();


    //Lower Right triangle  
    this.scene.pushMatrix();
    this.scene.translate(0, -2*Math.SQRT2, 0);
    this.scene.rotate((90*Math.PI)/180, 0, 0, 1);
    this.triangle.display();        
    this.scene.popMatrix();

    //Top Left Square
    this.scene.pushMatrix();
    //translate 
    var trans = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      -3*Math.SQRT2/2, Math.SQRT2/2, 0, 1
    ];
    this.scene.multMatrix(trans);
    //rotate 45 degrees
    var rot = [
      Math.cos((45*Math.PI)/180), Math.sin((45*Math.PI)/180), 0, 0,
      -Math.sin((45*Math.PI)/180), Math.cos((45*Math.PI)/180), 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];
    this.scene.multMatrix(rot);
    //display
    this.materialTangram.apply(); //Custom Material
    this.diamond.display();
    this.scene.popMatrix();

    //Top Right Parallelogram
    this.scene.pushMatrix();
    this.scene.translate(Math.SQRT2, 0, 0);
    this.scene.rotate((-135*Math.PI)/180, 0, 0, 1);
    this.scene.scale(-1, 1, 1);
    this.materialTangram.apply();
    this.parallelogram.display();
    this.scene.popMatrix();

    //Middle Triangles
    //Left
    this.scene.pushMatrix();
    this.scene.translate(-Math.SQRT2,-Math.SQRT2, 0);
    this.scene.rotate(-(45*Math.PI)/180, 0, 0, 1);
    this.materialTangram.apply();
    this.bigTriangle1.display();
    this.scene.popMatrix();
    //Right
    this.scene.pushMatrix();
    this.scene.translate(Math.SQRT2,-Math.SQRT2, 0);
    this.scene.rotate((45*Math.PI)/180, 0, 0, 1);
    this.materialTangram.apply();
    this.bigTriangle2.display();
    this.scene.popMatrix();

    //Top Left Triangle
    this.scene.pushMatrix();
    this.scene.translate(-Math.SQRT2-1,Math.SQRT2, 0);
    this.materialTangram.apply();
    this.smallTriangle1.display();
    this.scene.popMatrix();

    //Bottom Left Triangle
    this.scene.pushMatrix();
    this.scene.translate(-1,-2*Math.SQRT2, 0);
    this.materialTangram.apply();
    this.smallTriangle2.display();
    this.scene.popMatrix();

  }
  enableNormalViz(){
    this.triangle.enableNormalViz();
    this.parallelogram.enableNormalViz();
    this.bigTriangle.enableNormalViz();
    this.smallTriangle1.enableNormalViz();
    this.smallTriangle2.enableNormalViz();
    this.diamond.enableNormalViz();
  }
  disableNormalViz(){
    this.triangle.disableNormalViz();
    this.parallelogram.disableNormalViz();
    this.bigTriangle.disableNormalViz();
    this.smallTriangle1.disableNormalViz();
    this.smallTriangle2.disableNormalViz();
    this.diamond.disableNormalViz();
  }
} 

