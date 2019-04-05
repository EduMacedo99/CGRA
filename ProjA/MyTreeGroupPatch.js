/**
* MyTreeGroupPatch
* @constructor
*/
class MyTreeGroupPatch extends CGFobject {
    constructor(scene, n_trees_in_file, block_width, max_tree_height, x_init=0, z_init=0) {
        super(scene);
        this.normals = [];
        this.n_trees = n_trees_in_file*n_trees_in_file; 
        this.trees = [];

        var height = 0;
        var radius = 0;
        var heightRatio = 0;
        var radiusRatio = 0;
        var x = 0;
        var z = 0;

        for(var i = 0; i < n_trees_in_file; i++){
          for(var j = 0; j < n_trees_in_file; j++){
            var random = Math.random();
  
            heightRatio = 0.5 + 0.05*((random * 1000000) % 9);
            radiusRatio = 2 + 0.1 * ((random * 100000) % 11);
            height = max_tree_height - 0.2*((random * 10000) % 7);
            radius = block_width/(2.01*radiusRatio) - ((random * 10) % 7)/ (block_width*radiusRatio);
            x = x_init + i * block_width + radius*radiusRatio + (block_width/2 - radius*radiusRatio)/(((random * 100) % 9) + 1); //avoid dividing by 0
            z = z_init + j * block_width + radius*radiusRatio + (block_width/2 - radius*radiusRatio)/(((random * 1000) % 9) + 1);
            
            this.trees.push(new MyTree(this.scene, 10, height, radius, heightRatio, radiusRatio, x, 0, z));
          }
        }    

    }
    display(){
      for(var i = 0; i < this.n_trees; i++){
        this.trees[i].display();
      }
    }
    enableNormalViz(){
      for(var i = 0; i < this.n_trees; i++)
        this.trees[i].enableNormalViz();
    }
    disableNormalViz(){
      for(var i = 0; i < this.n_trees; i++)
        this.trees[i].disableNormalViz();
    }
  
}


