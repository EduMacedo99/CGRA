/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
 
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.triangle = new MyTriangle(this);
        this.smallTriangle = new MySmallTriangle(this);
        this.bigTriangle = new MyBigTriangle(this);
        this.diamond = new MyDiamond(this);
        this.parallelogram = new MyParallelogram(this);
        this.tangram = new MyTangram(this);
        this.unitCube = new MyUnitCube(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayTriangle = false;
        this.displaySmallTriangle = false;
        this.displayBigTriangle = false;
        this.displayDiamond = false;
        this.displayParallelogram = false;
        this.displayTangram = false;
        this.displayUnitCube = false;
        this.displayTangramUnitCube = true; //Display figure from exercise 3.5
        this.scaleFactor = 1;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
        this.setEmission(0.0 , 0.0 , 0.0 , 1.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);


        // ---- BEGIN Primitive drawing section

        if (this.displayTangramUnitCube){ //Exercise 3.5
          this.rotate(-Math.PI/2, 0, 1, 0);
          this.scale(8, 1, 8);
          this.translate(0.5, -0.5, -0.5); //Place Cube in Origin
          this.unitCube.display();
          this.translate(-0.5, 0.5, 0.5);  //Center Tangram
          this.scale(0.125, 1, 0.125);
          this.translate(Math.SQRT2*2, 0.01 , -10*Math.SQRT2/4);  //Center Tangram
          this.rotate((Math.PI)/2, 0, 1, 0); //Rotate to YZ
          this.rotate(-(Math.PI)/2, 1, 0, 0); //Rotate to XZ     
          this.tangram.display(); 
          this.rotate((Math.PI)/2, 1, 0, 0);
          this.rotate(-(Math.PI)/2, 0, 1, 0);   
          this.translate(-0.5+Math.SQRT2, -1, -0.5);   
          this.rotate(Math.PI/2, 0, 1, 0); 
        }   
        if (this.displayTriangle)
              this.triangle.display();        
        if (this.displayDiamond)
          this.diamond.display();
        if (this.displayParallelogram)
              this.parallelogram.display();
        if (this.displayBigTriangle)
              this.bigTriangle.display();
        if (this.displayBigTriangle)
              this.bigTriangle.display();
        if (this.displaySmallTriangle)
              this.smallTriangle.display();
        if (this.displayUnitCube)
              this.unitCube.display();
        if (this.displayTangram)
              this.tangram.display(); 
        // ---- END Primitive drawing section
    }
}