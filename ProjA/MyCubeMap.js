/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene, scale, texture) {
		super(scene);
    this.initBuffers(scale);

  }
	initBuffers(scale) {
		this.vertices = [ 
    //R    G     B
    0.5*scale,  0.5*scale,  0.5*scale, //0  |  0                            Vértices desenhados da seguinte forma:
    0.5*scale,  0.5*scale, -0.5*scale, //1  |  1                                   5-----------1 
    0.5*scale, -0.5*scale,  0.5*scale, //2  |  2                                  /|          /|
    0.5*scale, -0.5*scale, -0.5*scale, //3  |  3                                 4----------0  |          
   -0.5*scale,  0.5*scale,  0.5*scale, //4  |  4                                 | |        |  |
   -0.5*scale,  0.5*scale, -0.5*scale, //5  |  5                                 | 7--------|--3
   -0.5*scale, -0.5*scale,  0.5*scale, //6  |  6                                 |/         | /
   -0.5*scale, -0.5*scale, -0.5*scale, //7  |  7                                 6----------2

    0.51*scale,  0.5*scale,  0.51*scale, //8  |  0
    0.51*scale,  0.5*scale, -0.51*scale, //9  |  1
    0.5*scale, -0.5*scale,  0.5*scale, //10 |  2
    0.5*scale, -0.5*scale, -0.5*scale, //11 |  3
   -0.51*scale,  0.5*scale,  0.51*scale, //12 |  4
   -0.51*scale,  0.5*scale, -0.51*scale, //13 |  5
   -0.5*scale, -0.5*scale,  0.5*scale, //14 |  6
   -0.5*scale, -0.5*scale, -0.5*scale, //15 |  7

    0.5*scale,  0.5*scale,  0.5*scale, //16 |  0
    0.5*scale,  0.5*scale, -0.5*scale, //17 |  1
    0.5*scale, -0.5*scale,  0.5*scale, //18 |  2
    0.5*scale, -0.5*scale, -0.5*scale, //19 |  3
   -0.5*scale,  0.5*scale,  0.5*scale, //20 |  4
   -0.5*scale,  0.5*scale, -0.5*scale, //21 |  5
   -0.5*scale, -0.5*scale,  0.5*scale, //22 |  6
   -0.5*scale, -0.5*scale, -0.5*scale, //23 |  7

		];
 
		//Counter-clockwise reference of vertices
    this.indices = [
      2, 0, 1, //Positive Red Axis 1st Triangle
      3, 2, 1, //Positive Red Axis 2nd Triangle

      6, 5, 4, //Negative Red Axis 1st Triangle
      6, 7, 5, //Negative Red Axis 2nd Triangle

      13, 9, 8,  //Positive Green Axis 1st Triangle
      8, 12, 13, //Positive Green Axis 2nd Tiangle

      14, 10, 11,  //Negative Green Axis 1st Triangle
      11, 15, 14,  //Negative Green Axis 2nd Triangle

      20, 16, 18, //Positive Blue Axis 1st Triangle
      18, 22, 20, //Positive Blue Axis 2nd Triangle
      
      19, 17, 21, //Negative Blue Axis 1st Triangle
      21, 23, 19  //Negative Blue Axis 2nd Triangle
    ];
    
    this.normals = [
      -1,-1,-1,
      -1,-1,1,
      -1,1,-1,
      -1,1,1,
      1,-1,-1,
      1,-1,1,
      1,1,-1,
      1,1,1,

      -1,-1,-1,
      -1,-1,1,
      -1,1,-1,
      -1,1,1,
      1,-1,-1,
      1,-1,1,
      1,1,-1,
      1,1,1,

      -1,-1,-1,
      -1,-1,1,
      -1,1,-1,
      -1,1,1,
      1,-1,-1,
      1,-1,1,
      1,1,-1,
      1,1,1,

    ];
    var s3 = 1/3;
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

