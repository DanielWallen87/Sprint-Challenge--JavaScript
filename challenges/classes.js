// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(attrs) {
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume = function() {
        return this.length * this.width * this.height;
    }
    area = function() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }

  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid2.volume()); // 100
console.log(cuboid2.area()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(attrs) {
        super(attrs, CuboidMaker2); 
    }
    cubeVolume = function() {
        return this.length * this.length * this.length;
    }
    cubeArea = function() {
        return 6 * (this.length * this.length); // this may be wrong but Google search info was like a foreign language
    }
}

const cube = new CubeMaker({
    length: 6,
    width: 4,
    height: 4
});

console.log(cube.cubeVolume());
console.log(cube.cubeArea()); // lol both equations gave the same result. Oh, well. One is enough for stretch, so woot!