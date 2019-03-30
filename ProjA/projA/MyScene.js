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
        this.enableTextures(true);

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.pyramid = new MyPyramid(this, 4, 5, 2);
        this.prism = new MyPrism(this, 5, 5, 2);
        this.cylinder = new MyCylinder(this, 10, 5, 1);
        this.tree = new MyTree(this, 10, 2.5, 0.6, 0.7, 3);
        this.cone = new MyCone(this, 10, false, 5, 2);
        this.treeGroupPatch = new MyTreeGroupPatch(this, 3, 5, 3, 0, 0);
        this.treeRow = new MyTreeRow(this, 5, 5, 3, 0, 0);
        this.plane = new MyQuad(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayNormals = false;
        this.displayGrass = true;
        this.selectedObject = 5;
        this.objects = [this.pyramid, this.prism, this.cone, this.cylinder, this.tree, this.treeRow, this.treeGroupPatch];

        // Labels and ID's for object selection on MyInterface
        this.objectIDs = { 'Pyramid': 0, 'Prism': 1, 'Cone': 2, 'Cylinder': 3, 'Tree': 4, 'Tree Row': 5, 'Tree Group Patch': 6 };
        


        //Materials
        this.grass = new CGFappearance(this);
        this.grass.setAmbient(0.5, 0.5, 0.5, 1);
        this.grass.setDiffuse(1, 1, 1, 1);
        this.grass.setSpecular(0, 0, 0, 1);
        this.grass.setShininess(10.0);
        this.grass.loadTexture('textures/grass.jpg');
        this.grass.setTextureWrap('REPEAT', 'REPEAT');
      
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(25, 50, 25), vec3.fromValues(5, 0, 5));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
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

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        if (this.displayNormals)
            this.objects[this.selectedObject].enableNormalViz();
        else
            this.objects[this.selectedObject].disableNormalViz();

        this.objects[this.selectedObject].display();

        if(this.displayGrass){
          this.pushMatrix();
          this.scale(25, 1, 25);
          this.rotate(-Math.PI/2, 1, 0, 0);
          this.translate(-0.5, -0.5, 0);
          this.grass.apply();
          this.plane.display();
          //
          this.translate(1, 0, 0);
          this.plane.display();
          this.translate(0, 1, 0);
          this.plane.display();
          this.translate(-1, 0, 0);
          this.plane.display();
          //
          this.popMatrix();
        }



        // ---- END Primitive drawing section
    }
}