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
        this.updatePeriod = 50;

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(this.updatePeriod);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.bird = new MyBird(this);
        this.wing = new MyWing(this);

        //Objects connected to MyInterface
        this.scaleFactor = 1;

        //Shaders
        this.terrainShader = new CGFshader(this.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.terrainShader.setUniformsValues({ uSampler2: 1 });
        this.terrainShader.setUniformsValues({ uSampler3: 2 });
        this.terrainShader.setUniformsValues({ normScale: 60.0 });
    
        this.initMaterials();
    }
    initMaterials(){
        this.terrainMap = new CGFtexture(this, "images/heightmap2.jpg");
        this.terrainAlt = new CGFtexture(this, "images/altimetry.png");
        this.terrain = new CGFtexture(this, "images/terrain.jpg");
        this.terrainAp = new CGFappearance(this);
        this.terrainAp.setTexture(this.terrain);
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        // this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(5, 0, 5), vec3.fromValues(0, 0, 0));
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    checkKeys() {
      var text="Keys pressed: ";
      var keysPressed=false;

      // Check for key codes e.g. in https://keycode.info/
      if (this.gui.isKeyPressed("KeyW")) {
        text+=" W ";
        keysPressed=true;
        this.bird.accelarate(true);
      }
      if (this.gui.isKeyPressed("KeyS")) {
        text+=" S ";
        keysPressed=true;
        this.bird.accelarate(false);
      }
      if (this.gui.isKeyPressed("KeyA")) {
        text+=" A ";
        keysPressed=true;
        this.bird.turn(true);
      }
      if (this.gui.isKeyPressed("KeyD")) {
        text+=" D ";
        keysPressed=true;
        this.bird.turn(false);
      }
      if (this.gui.isKeyPressed("KeyR")) {
        text+=" R ";
        keysPressed=true;
        this.bird.reset();
      }
      if (keysPressed)
        console.log(text);
    }
    update(t){
      this.checkKeys();
      this.bird.update(t);
    }

    display() {
      this.terrainAlt.bind(1);
      this.terrainMap.bind(2);
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
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        
        this.bird.display();
        
        this.setActiveShader(this.terrainShader);
        this.terrainAp.apply();
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.plane.display();
        this.popMatrix();
        this.setActiveShader(this.defaultShader);

        // ---- END Primitive drawing section
    }
}