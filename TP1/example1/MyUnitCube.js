/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [ 
    //  R     G     B
			 0.5,  0.5,  0.5, //0
       0.5,  0.5, -0.5, //1
       0.5, -0.5,  0.5, //2
			 0.5, -0.5, -0.5, //3
      -0.5,  0.5,  0.5, //4
      -0.5,  0.5, -0.5, //5
      -0.5, -0.5,  0.5, //6
      -0.5, -0.5, -0.5  //7

		];
 
		//Counter-clockwise reference of vertices
    this.indices = [
      1, 0, 2, //Positive Red Axis 1st Triangle
      1, 2, 3, //Positive Red Axis 2nd Triangle

      4, 5, 6, //Negative Red Axis 1st Triangle
      5, 7, 6, //Negative Red Axis 2nd Triangle

      0, 1, 5, //Positive Green Axis 1st Triangle
      5, 4, 0, //Positive Green Axis 2nd Tiangle

      3, 2, 6, //Negative Green Axis 1st Triangle
      6, 7, 3, //Negative Green Axis 2nd Triangle

      2, 0, 4, //Positive Blue Axis 1st Triangle
      4, 6, 2, //Positive Blue Axis 2nd Triangle
      
      5, 1, 3, //Negative Blue Axis 1st Triangle
      3, 7, 5  //Negative Blue Axis 2nd Triangle
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

