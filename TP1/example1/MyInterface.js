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

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Axis');

        //Checkbox element in GUI for triangle
        this.gui.add(this.scene, 'displayTriangle').name('Triangle');

        //Checkbox element in GUI for small triangle
        this.gui.add(this.scene, 'displaySmallTriangle').name('Small Triangle');

        //Checkbox element in GUI for big triangle
        this.gui.add(this.scene, 'displayBigTriangle').name('Big Triangle');

        //Checkbox element in GUI for diamond
        this.gui.add(this.scene, 'displayDiamond').name('Diamond');
        
        //Checkbox element in GUI for parallelogram
        this.gui.add(this.scene, 'displayParallelogram').name('Parallelogram');

        //Checkbox element in GUI for tangram
        this.gui.add(this.scene, 'displayTangram').name('Tangram');

        //Checkbox element in GUI for unit cube
        this.gui.add(this.scene, 'displayUnitCube').name('Unit Cube');

        //Checkbox element in GUI for unit cube
        this.gui.add(this.scene, 'displayTangramUnitCube').name('Tangram + Cube');


        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}