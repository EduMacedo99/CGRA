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

        this.gui.add(this.scene, 'displayAxis').name("Display axis");
        this.gui.add(this.scene, 'displayNormals').name("Display normals");
        this.gui.add(this.scene, 'textures').name("Textures");
        this.gui.add(this.scene, 'displayGrass').name("Display Grass");
        this.gui.add(this.scene, 'displaySkybox').name("Display Skybox");
        this.gui.add(this.scene, 'toggleNight').name("Toggle Night");
        this.gui.add(this.scene, 'toggleFire').name("Toggle Fire");

        
        this.gui.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');

        return true;
    }
}