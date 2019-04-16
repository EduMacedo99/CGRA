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
    //R    G     B
    0.5,  0.5,  0.5, //0  |  0                            Vértices desenhados da seguinte forma:
    0.5,  0.5, -0.5, //1  |  1                                   5-----------1 
    0.5, -0.5,  0.5, //2  |  2                                  /|          /|
    0.5, -0.5, -0.5, //3  |  3                                 4----------0  |          
   -0.5,  0.5,  0.5, //4  |  4                                 | |        |  |
   -0.5,  0.5, -0.5, //5  |  5                                 | 7--------|--3
   -0.5, -0.5,  0.5, //6  |  6                                 |/         | /
   -0.5, -0.5, -0.5, //7  |  7                                 6----------2

    0.5,  0.5,  0.5, //8  |  0
    0.5,  0.5, -0.5, //9  |  1
    0.5, -0.5,  0.5, //10 |  2
    0.5, -0.5, -0.5, //11 |  3
   -0.5,  0.5,  0.5, //12 |  4
   -0.5,  0.5, -0.5, //13 |  5
   -0.5, -0.5,  0.5, //14 |  6
   -0.5, -0.5, -0.5, //15 |  7

    0.5,  0.5,  0.5, //16 |  0
    0.5,  0.5, -0.5, //17 |  1
    0.5, -0.5,  0.5, //18 |  2
    0.5, -0.5, -0.5, //19 |  3
   -0.5,  0.5,  0.5, //20 |  4
   -0.5,  0.5, -0.5, //21 |  5
   -0.5, -0.5,  0.5, //22 |  6
   -0.5, -0.5, -0.5, //23 |  7

		];
 
		//Counter-clockwise reference of vertices
    this.indices = [
      1, 0, 2, //Positive Red Axis 1st Triangle
      1, 2, 3, //Positive Red Axis 2nd Triangle

      4, 5, 6, //Negative Red Axis 1st Triangle
      5, 7, 6, //Negative Red Axis 2nd Triangle

      8, 9, 13,  //Positive Green Axis 1st Triangle
      13, 12, 8, //Positive Green Axis 2nd Tiangle

      11, 10, 14,  //Negative Green Axis 1st Triangle
      14, 15, 11,  //Negative Green Axis 2nd Triangle

      18, 16, 20, //Positive Blue Axis 1st Triangle
      20, 22, 18, //Positive Blue Axis 2nd Triangle
      
      21, 17, 19, //Negative Blue Axis 1st Triangle
      19, 23, 21  //Negative Blue Axis 2nd Triangle
    ];
    
    this.normals = [
      1,0,0,
      1,0,0,
      1,0,0,
      1,0,0,
      -1,0,0,
      -1,0,0,
      -1,0,0,
      -1,0,0,

      0,1,0,
      0,1,0,
      0,-1,0,
      0,-1,0,
      0,1,0,
      0,1,0,
      0,-1,0,
      0,-1,0,

      0,0,1,
      0,0,-1,
      0,0,1,
      0,0,-1,
      0,0,1,
      0,0,-1,
      0,0,1,
      0,0,-1

    ];

    var s3 = 1.0/3.0;
    this.texCoords = [
      1, s3+0.003,
      0.75, s3+0.003,
      1, s3*2+0.002,
      0.75, s3*2+0.002,
      0.25, s3+0.002,
      0.5, s3+0.002,
      0.25, s3*2+0.002,
      0.5, s3*2+0.002,

      1, s3, //0
      0.75, s3, //1
      1, s3*2, //2
      0.75, s3*2, //3
      1, 0, //4
      0.75, 0, //5
      1, 1, //6
      0.75, 1, // 7

      0, s3+0.002,
      0.75, s3+0.002,
      0, s3*2+0.002,
      0.75, s3*2+0.002,
      0.25, s3+0.002,
      0.5, s3+0.002,
      0.25, s3*2+0.002,
      0.5, s3*2+0.002
    ];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

