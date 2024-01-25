class Triangle {
    constructor() {
      // Initialize any necessary properties
      this.color = "black"; // Default color
    }
  
    setColor(color) {
      // Set the color of the triangle
      this.color = color;
    }
  
    render() {
      // Return the SVG string based on the color
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle {
    constructor() {
      // Initialize any necessary properties
      this.color = "black"; // Default color
    }
  
    setColor(color) {
      // Set the color of the circle
      this.color = color;
    }
  
    render() {
      // Return the SVG string based on the color
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Square {
    constructor() {
      // Initialize any necessary properties
      this.color = "black"; // Default color
    }
  
    setColor(color) {
      // Set the color of the square
      this.color = color;
    }
  
    render() {
      // Return the SVG string based on the color
      return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  
  
  // Export an object containing all three classes
  module.exports = { Triangle, Circle, Square };