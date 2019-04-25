/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.display();
	}
  display(){
    
    //Lower Right triangle  
    this.scene.pushMatrix();
    this.scene.translate(0, -2*Math.SQRT2, 0);
    this.scene.rotate((90*Math.PI)/180, 0, 0, 1);
    this.scene.triangle.display();        
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
    this.scene.diamond.display();
    this.scene.popMatrix();

    //Top Right Parallelogram
    this.scene.pushMatrix();
    this.scene.translate(Math.SQRT2, 0, 0);
    this.scene.rotate((-135*Math.PI)/180, 0, 0, 1);
    this.scene.scale(-1, 1, 1);
    this.scene.parallelogram.display();
    this.scene.popMatrix();

    //Middle Triangles
    //Left
    this.scene.pushMatrix();
    this.scene.translate(-Math.SQRT2,-Math.SQRT2, 0);
    this.scene.rotate(-(45*Math.PI)/180, 0, 0, 1);
    this.scene.bigTriangle.display();
    this.scene.popMatrix();
    //Right
    this.scene.pushMatrix();
    this.scene.translate(Math.SQRT2,-Math.SQRT2, 0);
    this.scene.rotate((45*Math.PI)/180, 0, 0, 1);
    this.scene.bigTriangle.display();
    this.scene.popMatrix();

    //Top Left Triangle
    this.scene.pushMatrix();
    this.scene.translate(-Math.SQRT2-1,Math.SQRT2, 0);
    this.scene.smallTriangle.display();
    this.scene.popMatrix();

    //Bottom Left Triangle
    this.scene.pushMatrix();
    this.scene.translate(-1,-2*Math.SQRT2, 0);
    this.scene.smallTriangle.display();
    this.scene.popMatrix();
  }
}

