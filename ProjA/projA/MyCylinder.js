/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject {
    constructor(scene, slices, height = 1, radius = 0.5) {
        super(scene);
        this.slices = slices;
        this.height = height;
        this.radius = radius;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;
        var max = this.slices*2;



        for(var i = 0; i < max; i+=2){

          this.vertices.push(Math.cos(ang)*this.radius, 0, -Math.sin(ang)*this.radius);
          this.vertices.push(Math.cos(ang)*this.radius, this.height, -Math.sin(ang)*this.radius);
          this.indices.push(i % max, (i+2) % max, (i+1) % max);
          this.indices.push((i+1) % max, (i+2) % max, (i+3) % max);
          this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
          this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
          this.texCoords.push(i/max, 0);
          this.texCoords.push(i/max, 1);
          ang+=alphaAng;
        }
        
        this.vertices.push(Math.cos(alphaAng)*this.radius, 0, -Math.sin(alphaAng)*this.radius);
        this.vertices.push(Math.cos(alphaAng)*this.radius, this.height, -Math.sin(alphaAng)*this.radius);
        this.texCoords.push(max, 0);
        this.texCoords.push(max, 1);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


