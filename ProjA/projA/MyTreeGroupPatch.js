/**
* MyTreeGroupPatch
* @constructor
*/
class MyTreeGroupPatch extends CGFobject {
    constructor(scene, n_trees) {
        super(scene);
        this.trees = [];
        
        for(var i = 0; i < (n_trees*n_trees); i++)
        {
          var random = Math.random();

          var height = 1.5 + 0.25*(random % 15);
          var radius = 0.4 + 0.1*((random >> 12) % 4);

          this.trees.push(new MyTree(this.scene, 10, height, radius, heightRatio, radiusRatio));
        }
      

        this.initGLBuffers();
    }
    display(){

    }
}


