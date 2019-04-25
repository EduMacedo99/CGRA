/**
 * MySmallTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySmallTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
      0, 1, 0,  //1
      1, 0, 0,  //2
			-1, 0, 0,	//3
      0, 1, 0,  //4
      1, 0, 0   //5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
      0, 2, 1,
      4, 5, 3
    ]; 

    this.normals = [
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,
      0, 0, -1,
      0, 0, -1,
      0, 0, -1
    ];

    this.primitiveType = this.scene.gl.TRIANGLES;
    
		this.initGLBuffers();
	}
}

