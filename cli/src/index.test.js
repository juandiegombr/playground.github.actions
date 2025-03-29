const { execSync } = require('child_process');

describe('CLI Tool', () => {
  it('should execute hello command with default name', () => {
    const output = execSync('node src/index.js hello').toString().trim();
    expect(output).toBe('Hello, World!');
  });

  it('should execute hello command with custom name', () => {
    const output = execSync('node src/index.js hello John').toString().trim();
    expect(output).toBe('Hello, John!');
  });
});