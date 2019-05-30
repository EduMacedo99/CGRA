/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
  constructor() {
    super();
  }
  init(application) {
      // call CGFinterface init
      super.init(application);
      // init GUI. For more information on the methods, check:
      // http://workshop.chromeexperiments.com/examples/gui
      this.gui = new dat.GUI();
      
      var obj = this;

      this.gui.add(this.scene.bird, 'scaleFactor', 0.3, 5.0).name('Scale');
      this.gui.add(this.scene.bird, 'speedFactor', 0.5, 3.0).name('Speed');
      this.gui.add(this.scene, 'thirdPerson').name('Third Person Mode');
      this.gui.add(this.scene, 'fix').name('Fix Camera');


      this.initKeys();

      return true;
  }
  initKeys() {
    // create reference from the scene to the GUI
    this.scene.gui=this;
    // disable the processKeyboard function
    this.processKeyboard=function(){};
    // create a named array to store which keys are being pressed
    this.activeKeys={};
  }
  processKeyDown(event) {
    // called when a key is pressed down
    // mark it as active in the array
    this.activeKeys[event.code]=true;
  };
  processKeyUp(event) {
    // called when a key is released, mark it as inactive in the array
    this.activeKeys[event.code]=false;
  };
  isKeyPressed(keyCode) {
    // returns true if a key is marked as pressed, false otherwise
    return this.activeKeys[keyCode] || false;
  }
            
}