const { Triangle, Circle, Square } = require('./shapes');

test('Triangle should render correctly with the specified color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('Circle should render correctly with the specified color', () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
  });

  test('Square should render correctly with the specified color', () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="green" />');
  });