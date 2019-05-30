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
        //this.initCameras();
        this.initLights();
        this.updatePeriod = 25;

        // Background color
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
        this.tree = new MyLSPlant(this);
        this.lightning = new MyLightning(this);
        this.n_trees = 4;
        this.tree_axioms = []; //Vector for tree axioms
        this.branches = [];
        this.n_branches = 6;
        this.nest = new MyNest(this, 20, 4);
        this.house = new MyHouse(this);
        this.skyBox = new MyCubeMap(this, 60);
        this.legs = new MyLegs(this);
        
        for(var i = 0; i < this.n_trees; i++){ //get vector values
          this.tree_axioms.push(this.tree.axiom);
          this.tree.axiom = "X";
          this.tree.iterate();
        }

        for(var i = 0; i < this.n_branches; i++){
          var rand = Math.random();
          this.branches.push(new MyTreeBranch(this, (rand * 100) % 10, 9 - (rand * 10000) % 18, 4.7));
        }

        //Objects connected to MyInterface
        this.thirdPerson = false;
        this.fix = function (){
          var norm2 = Math.sqrt(20*20+32*32);
          this.camera.direction = vec4.fromValues(Math.sin(this.bird.ang)*32/norm2, -20/norm2, Math.cos(this.bird.ang)*32/norm2, 0);
        };

        //Shaders
        this.terrainShader = new CGFshader(this.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.terrainShader.setUniformsValues({ uSampler2: 1, uSampler3: 2, normScale: 60.0 });
    
        this.initCameras();
        this.initMaterials();
    }
    initMaterials(){
        this.terrainMap = new CGFtexture(this, "images/heightmap2.jpg");
        this.terrainAlt = new CGFtexture(this, "images/altimetry.png");
        this.terrain = new CGFtexture(this, "images/terrain.jpg");
        this.terrainAp = new CGFappearance(this);
        this.terrainAp.setTexture(this.terrain);
        this.terrainAp.setTextureWrap('WRAP', 'WRAP');    

        this.branchTxt = new CGFappearance(this);
        this.branchTxt.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.branchTxt.setDiffuse(.8, .8, .8, 1.0);
        this.branchTxt.setSpecular(0, 0, 0, 1.0);
        this.branchTxt.setShininess(10.0);
        this.branchTxt.loadTexture('images/branch.jpg');
        this.branchTxt.setTextureWrap('REPEAT', 'REPEAT');    
    
        this.branchEndTxt = new CGFappearance(this);
        this.branchEndTxt.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.branchEndTxt.setDiffuse(.8, .8, .8, 1.0);
        this.branchEndTxt.setSpecular(0, 0, 0, 1.0);
        this.branchEndTxt.setShininess(10.0);
        this.branchEndTxt.loadTexture('images/wood_end.jpg');
        this.branchEndTxt.setTextureWrap('REPEAT', 'REPEAT');    
    
        this.leavesTxt = new CGFappearance(this);
        this.leavesTxt.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.leavesTxt.setDiffuse(.8, .8, .8, 1.0);
        this.leavesTxt.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.leavesTxt.setShininess(10.0);
        this.leavesTxt.loadTexture('images/leaves.jpg');
        this.leavesTxt.setTextureWrap('REPEAT', 'REPEAT');    
    
        this.lightningTxt = new CGFappearance(this);
        this.lightningTxt.setAmbient(1, 1, 1, 1.0);
        this.lightningTxt.setSpecular(1, 1, 1, 1.0);
        this.lightningTxt.setDiffuse(1, 1, 1, 1.0);
        this.lightningTxt.setShininess(150.0);
    
        this.skyboxTxt = new CGFappearance(this);
        this.skyboxTxt.setAmbient(1, 1, 1, 1);
        this.skyboxTxt.setDiffuse(1, 1, 1, 1);
        this.skyboxTxt.setSpecular(0, 0, 0, 1);
        this.skyboxTxt.setShininess(150.0);
        this.skyboxTxt.loadTexture('images/skybox_night.png');
        this.skyboxTxt.setTextureWrap('REPEAT', 'REPEAT');    
    }
    initLights() {
        this.lights[0].setPosition(30, 35, 0, 1);
        this.lights[0].setDiffuse(0.5, 0.5, 0.7, 1.0);
        this.lights[0].setAmbient(0.4, 0.4, 0.6, 1);
        this.lights[0].setSpecular(0.5, 0.5, 0.7, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
      // this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(2, 20, 2), vec3.fromValues(this.bird.x, this.bird.y, this.bird.z));
      this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(40, 80, 40), vec3.fromValues(0, 0, 0));
      this.cameraBird = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(40, 80, 40), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    checkKeys(t) {
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
      if (this.gui.isKeyPressed("KeyP")) {
        text+=" P ";
        keysPressed=true;
        this.bird.startPickUp();
      }
      if (this.gui.isKeyPressed("KeyL")) {
        text+=" L ";
        keysPressed=true;
        this.lightning.startAnimation(t);
      }
      if (keysPressed)
        console.log(text);
    }
    update(t){
      this.checkKeys(t);
      this.bird.update(t);
      this.lightning.update(t);
    }
    display() {
      if(this.thirdPerson){ //third person settings
        this.camera.setPosition([this.bird.x - 32 * Math.sin(this.bird.ang), this.bird.y+20, this.bird.z - 32*Math.cos(this.bird.ang)]);
        this.camera.setTarget([this.bird.x, this.bird.y, this.bird.z]);
      }
      else

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
        // this.legs.display();
        this.pushMatrix();
        this.translate(-14,4.7,0.5);
        this.nest.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-6.5,4.5,12);
        this.scale(0.25,0.25,0.25);
        this.rotate(Math.PI, 0,1,0);
        this.house.display();
        this.popMatrix();

        this.lightning.display();
        
        this.pushMatrix();
        this.translate(-17, 4, -12)
        for(var i = 0; i < this.n_trees; i++){
          this.tree.axiom = this.tree_axioms[i];
          this.tree.display();
          this.translate(0, 0, 4);
        }
        this.popMatrix();

        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);

        this.setActiveShader(this.terrainShader);
        this.terrainAp.apply();
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.plane.display();
        this.popMatrix();
        this.setActiveShader(this.defaultShader);

        for(var i = 0; i < this.n_branches; i++){
          if(this.branches[i] != 0)
            this.branches[i].display();
        }

        this.pushMatrix();
        this.translate(0, 29.1, 0);
        this.skyboxTxt.apply();
        this.skyBox.display();
        this.popMatrix();
        // ---- END Primitive drawing section
    }
}