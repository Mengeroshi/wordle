/* eslint-disable no-console */
const fs = require('fs');

// Read the names from the TXT file
fs.readFile('words.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  const names = data
    .trim()
    .split('\n')
    .filter((name) => name.length === 5);

  const jsCode = `const namesArray = ${JSON.stringify(
    names,
    null,
    2,
  )};\n\nmodule.exports = namesArray;\n`;
  fs.writeFile('names.js', jsCode, (error) => {
    if (error) {
      console.error('Error writing the file:', err);
    } else {
      console.log('Names transformed and saved to names.js');
    }
  });
});
