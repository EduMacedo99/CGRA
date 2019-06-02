/**
 * MyWing
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyWing extends CGFobject {
	constructor(scene) {
    super(scene);
    
    this.wingAng = 0;
    this.normals = []; 

    this.plane = new MySquare(this.scene);
    this.smalltri = new MyTriangle(this.scene);
    
    
  }
    
   
  
    enableNormalViz() {

}
    

    disableNormalViz() {

}

display(){

    this.scene.pushMatrix();
    this.scene.wingTxt.apply();

    this.scene.rotate(Math.PI/4, 0, 1, 0);
    this.scene.translate(Math.cos(Math.PI/6)/2, 0, - Math.sin(Math.PI/6)/2);

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/6, 0, 1, 0);
    this.plane.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate( 0.5 +  Math.cos(Math.PI/6)/2, 0, -Math.sin(Math.PI/6)/2);
    this.plane.display();

    
    this.scene.translate(1,0,0);
    
    this.scene.scale(0.5, 0.5, 1);
    this.smalltri.display();

    this.scene.popMatrix();


    this.scene.popMatrix();


  }


} 

