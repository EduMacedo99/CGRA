/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyNest extends CGFobject {
	constructor(scene, n_branches, height) {
    super(scene);
    this.n_branches = n_branches;
    this.height = height;
    
    this.normals = []; 
    this.branch = new MyTreeBranch(this.scene);
    

  }
  display(){
var angle = Math.asin((2*Math.PI*Math.SQRT2)/(this.n_branches));

    for(var i = 0; i < this.n_branches; i++){
        this.scene.pushMatrix();
        this.scene.rotate(angle*i, 0,1,0);
        this.scene.translate(0.5,0,0.5);
        this.branch.display();
        this.scene.popMatrix();
    }

    for(var i = 0; i < this.n_branches; i++){
        this.scene.pushMatrix();
        this.scene.rotate(-angle*i, 0,1,0);
        this.scene.translate(-0.5,0,0.5);
        this.branch.display();
        this.scene.popMatrix();
    }
  }
  enableNormalViz(){
    this.branch.enableNormalViz();
  }
  disableNormalViz(){
    this.branch.disableNormalViz();
  }
} 

