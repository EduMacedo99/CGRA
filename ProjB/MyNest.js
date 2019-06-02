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
    this.branches = [];
    this.branch = new MyTreeBranch(this.scene);
    

  }
  addBranch(branch){
    branch.x = Math.random() - 0.5;
    branch.y = 0.2;
    branch.z = Math.random() - 0.5;
    this.branches.push(branch);
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

    for(var i = 0; i < this.branches.length; i++){
      this.branches[i].display();
    }
  }
  enableNormalViz(){
    this.branch.enableNormalViz();
  }
  disableNormalViz(){
    this.branch.disableNormalViz();
  }
} 

