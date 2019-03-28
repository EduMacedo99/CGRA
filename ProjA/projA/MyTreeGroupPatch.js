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
        
        for(var i = 0; i < n_trees_in_file; i++){
          for(var j = 0; j < n_trees_in_file; j++){
            var random = Math.random();
  
            var height = max_tree_height - 0.2*(random % 9);
            var radius = block_width/2 - ((random >> 12) % 10)/ block_width;
            var heightRatio = 0.5 + 0.05*((random >> 6) % 9);
            var radiusRatio = 2.5 + 0.1 * ((random >> 3) % 11);

            var x = x_init + i * block_width + radius + ((random >> 5) % 15)/(block_width/2 - radius);
            var z = z_init + j * block_width + radius + ((random >> 10) % 15)/(block_width/2 - radius);
            
            this.trees.push(new MyTree(this.scene, 10, height, radius, heightRatio, radiusRatio, x, 0, z));
          }
        }

    }
    display(){
      for(var i = 0; i < this.n_trees; i++)
        this.trees[i].display();
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


