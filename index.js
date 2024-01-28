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
  const shapeColor = await getUserInput('Enter shape color: ');
  const letterColor = await getUserInput('Enter letter color: ');
  const letters = await getUserInput('Enter three letters: ');

  let shape;
  let shapeSize;
  let fontSize;
  let padding = 20; // Adjust the padding as needed

  switch (shapeType.toLowerCase()) {
    case 'triangle':
      shape = new Triangle();
      shapeSize = 150; // Adjust size according to the shape
      fontSize = shapeSize / 3; // Adjust font size based on the shape size
      break;
    case 'circle':
      shape = new Circle();
      shapeSize = 100; // Adjust size according to the shape
      fontSize = shapeSize / 3; // Adjust font size based on the shape size
      break;
    case 'square':
      shape = new Square();
      shapeSize = 200; // Adjust size according to the shape
      fontSize = shapeSize / 3; // Adjust font size based on the shape size
      break;
    default:
      console.log('Invalid shape type');
      return;
  }

  shape.setColor(shapeColor);

  // Calculate the position of the shape and the text
  const centerX = 150; // Width / 2
  const centerY = 100; // Height / 2

  // Generate SVG content based on the chosen shape and letters
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect x="${padding}" y="${padding}" width="${300 - 2 * padding}" height="${200 - 2 * padding}" fill="none" stroke="black" stroke-width="2"/>
      ${shape.render(centerX, centerY, shapeSize)}
      <text x="${centerX}" y="${centerY}" fill="${letterColor}" text-anchor="middle" dominant-baseline="middle" font-size="${fontSize}" font-family="Arial">${letters}</text>
    </svg>
  `;

  // Write SVG content to logo.svg file
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

console.log('Index is running');

createLogo();