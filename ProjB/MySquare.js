/**
 * MySquare
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySquare extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0,	//0
			0.5, -0.5, 0,	//1
			-0.5, 0.5, 0,	//2
            0.5, 0.5, 0,	//3
            
            -0.5, -0.5, 0,	//4
			0.5, -0.5, 0,	//5
			-0.5, 0.5, 0,	//6
            0.5, 0.5, 0		//7

		];

		this.indices = [
			0, 1, 2,
            1, 3, 2,
            6, 5, 4,
            6, 7, 5,
		];
    
    this.normals = [
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,
      0, 0, -1,
      0, 0, -1,
      0, 0, -1,
      0, 0, -1
    ];


    this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
} 

