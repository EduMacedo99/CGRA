/**
* MyTreeRow
* @constructor
*/
class MyTreeRow extends CGFobject {
    constructor(scene, n_trees_in_file, block_width,  max_tree_height, x_init=0, z_init=0) {
      super(scene);
      this.normals = [];
      this.n_trees = n_trees_in_file; 
      this.trees = [];

      var height = 0;
      var radius = 0;
      var heightRatio = 0;
      var radiusRatio = 0;
      this.x = [];
      this.z = [];

      for(var i = 0; i < n_trees_in_file; i++){
          var random = Math.random();

          heightRatio = 0.5 + 0.05*((random * 1000000) % 9);
          radiusRatio = 2 + 0.1 * ((random * 100000) % 11);
          height = max_tree_height - 0.2*((random * 10000) % 7);
          radius = block_width/(2.01*radiusRatio) - ((random * 10) % 7)/ (block_width*radiusRatio);
          this.x.push(x_init + i * block_width + radius*radiusRatio + (block_width/2 - radius*radiusRatio)/(((random * 100) % 9) + 1)); //avoid dividing by 0
          this.z.push(z_init + block_width * (random%3));
          
          this.trees.push(new MyTree(this.scene, height*heightRatio, radius*(1/radiusRatio), height*(1/heightRatio), radius*radiusRatio, 'textures/bark.jpg', 'textures/pine.jpg'));
      }    

    }
    display(){
      for(var i = 0; i < this.n_trees; i++){
        this.scene.pushMatrix();
        this.scene.translate(this.x[i], 0, this.z[i]);
        this.trees[i].display();
        this.scene.popMatrix();
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


