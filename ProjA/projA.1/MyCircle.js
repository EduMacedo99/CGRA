/**
* MyCircle
* @constructor
*/
class MyCircle extends CGFobject {
    constructor(scene, slices, radius = 0.5) {
        super(scene);
        this.slices = slices;
        this.radius = radius;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){

            this.vertices.push(Math.cos(ang)*this.radius, 0, -Math.sin(ang)*this.radius);
            this.indices.push(i, (i+1) % this.slices, this.slices);
            this.normals.push(0, 1, 0);
            ang+=alphaAng;
        }
        this.vertices.push(0,0,0);
        this.normals.push(0,1,0);


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


