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
    this.smallTriangle = new MySmallTriangle(this.scene);
    this.bigTriangle = new MyBigTriangle(this.scene);
    this.parallelogram = new MyParallelogram(this.scene);
    this.triangle = new MyTriangle(this.scene);

    this.materialPurple = new CGFappearance(this.scene);
    var color = this.scene.hexToRgbA('#800080');
    this.materialPurple.setAmbient(color[0], color[1], color[2], 1.0);
    this.materialPurple.setSpecular(color[0], color[1], color[2], 1.0);
    this.materialPurple.setDiffuse(0, 0, 0, 1.0);
    this.materialPurple.setShininess(10.0);

    this.materialOrange = new CGFappearance(this.scene);
    color = this.scene.hexToRgbA('#ffa500');
    this.materialOrange.setAmbient(color[0], color[1], color[2], 1.0);
    this.materialOrange.setSpecular(color[0], color[1], color[2], 1.0);
    this.materialOrange.setDiffuse(0, 0, 0, 1.0);
    this.materialOrange.setShininess(10.0);
  
    this.materialBlue = new CGFappearance(this.scene);
    color = this.scene.hexToRgbA('#1e90ff');
    this.materialBlue.setAmbient(color[0], color[1], color[2], 1.0);
    this.materialBlue.setSpecular(color[0], color[1], color[2], 1.0);
    this.materialBlue.setDiffuse(0, 0, 0, 1.0);
    this.materialBlue.setShininess(10.0);
  
    this.materialGreen = new CGFappearance(this.scene);
    color = this.scene.hexToRgbA('#00ff00');
    this.materialGreen.setAmbient(color[0], color[1], color[2], 1.0);
    this.materialGreen.setSpecular(color[0], color[1], color[2], 1.0);
    this.materialGreen.setDiffuse(0, 0, 0, 1.0);
    this.materialGreen.setShininess(10.0);
  
    this.materialRed = new CGFappearance(this.scene);
    color = this.scene.hexToRgbA('#ff0000');
    this.materialRed.setAmbient(color[0], color[1], color[2], 1.0);
    this.materialRed.setSpecular(color[0], color[1], color[2], 1.0);
    this.materialRed.setDiffuse(0, 0, 0, 1.0);
    this.materialRed.setShininess(10.0);
  
    this.materialPink = new CGFappearance(this.scene);
    color = this.scene.hexToRgbA('#ffb6c1');
    this.materialPink.setAmbient(color[0], color[1], color[2], 1.0);
    this.materialPink.setSpecular(color[0], color[1], color[2], 1.0);
    this.materialPink.setDiffuse(0, 0, 0, 1.0);
    this.materialPink.setShininess(10.0);
  

    this.materialYellow = new CGFappearance(this.scene);
    color = this.scene.hexToRgbA('#ffff00');
    this.materialYellow.setAmbient(color[0], color[1], color[2], 1.0);
    this.materialYellow.setSpecular(color[0], color[1], color[2], 1.0);
    this.materialYellow.setDiffuse(0, 0, 0, 1.0);
    this.materialYellow.setShininess(10.0);

    this.display();
  }
display(){
    
    //Lower Right triangle  
    this.scene.pushMatrix();
    this.scene.translate(0, -2*Math.SQRT2, 0);
    this.scene.rotate((90*Math.PI)/180, 0, 0, 1);
    this.materialPink.apply();
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
    //this.materialGreen.apply();
    this.scene.materials[4].apply(); //Custom Material
    this.diamond.display();
    this.scene.popMatrix();

    //Top Right Parallelogram
    this.scene.pushMatrix();
    this.scene.translate(Math.SQRT2, 0, 0);
    this.scene.rotate((-135*Math.PI)/180, 0, 0, 1);
    this.scene.scale(-1, 1, 1);
    this.materialYellow.apply();
    this.parallelogram.display();
    this.scene.popMatrix();

    //Middle Triangles
    //Left
    this.scene.pushMatrix();
    this.scene.translate(-Math.SQRT2,-Math.SQRT2, 0);
    this.scene.rotate(-(45*Math.PI)/180, 0, 0, 1);
    this.materialBlue.apply();
    this.bigTriangle.display();
    this.scene.popMatrix();
    //Right
    this.scene.pushMatrix();
    this.scene.translate(Math.SQRT2,-Math.SQRT2, 0);
    this.scene.rotate((45*Math.PI)/180, 0, 0, 1);
    this.materialOrange.apply();
    this.bigTriangle.display();
    this.scene.popMatrix();

    //Top Left Triangle
    this.scene.pushMatrix();
    this.scene.translate(-Math.SQRT2-1,Math.SQRT2, 0);
    this.materialPurple.apply();
    this.smallTriangle.display();
    this.scene.popMatrix();

    //Bottom Left Triangle
    this.scene.pushMatrix();
    this.scene.translate(-1,-2*Math.SQRT2, 0);
    this.materialRed.apply();
    this.smallTriangle.display();
    this.scene.popMatrix();

    this.scene.materials[this.scene.selectedMaterial].apply();
  }
  enableNormalViz(){
    this.triangle.enableNormalViz();
    this.parallelogram.enableNormalViz();
    this.bigTriangle.enableNormalViz();
    this.smallTriangle.enableNormalViz();
    this.diamond.enableNormalViz();
  }
  disableNormalViz(){
    this.triangle.disableNormalViz();
    this.parallelogram.disableNormalViz();
    this.bigTriangle.disableNormalViz();
    this.smallTriangle.disableNormalViz();
    this.diamond.disableNormalViz();
  }
} 

