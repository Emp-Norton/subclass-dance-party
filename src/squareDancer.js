var SquareDancer = class SquareDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    //inherit Dancer's properties and methods
    super(top, left, timeBetweenSteps);
    //set class of DOM node
    this.$node.addClass('squareDancer');
    //create step counter
    this.stepCount = 0;
  }

  step() {
    //call Dancer's step
    super.step();
    //perform one step of dance
    this.dance();
  }
  
  dance () {
    //perform different move for each step
    switch (this.stepCount) {
    case 0:
      //move dancer 50px right
      this.$node.animate({'left': '+=50px'});
      //advance count by one
      this.stepCount = 1;
      break;
    case 1:
      //move dancer 50px down
      this.$node.animate({'top': '+=50px'});
      //advance count by one
      this.stepCount = 2;
      break;
    case 2:
      //move dancer 50px left
      this.$node.animate({'left': '-=50px'});
      //advance count by one
      this.stepCount = 3;
      break;
    case 3:
      //move dancer 50px up
      this.$node.animate({'top': '-=50px'});
      //advance count by one
      this.stepCount = 0;
      break;
    }
  }
};