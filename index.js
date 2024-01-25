const { Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');
const readline = require('readline');

function getUserInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function createLogo() {
  const shapeType = await getUserInput('Enter shape (Triangle, Circle, or Square): ');
  const color = await getUserInput('Enter color: ');

  let shape;

  switch (shapeType.toLowerCase()) {
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.log('Invalid shape type');
      return;
  }

  shape.setColor(color);

  // Generate SVG content based on the chosen shape
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()}
    </svg>
  `;

  // Write SVG content to logo.svg file
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}


console.log('Index is running');

createLogo();