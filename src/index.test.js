const { add, subtract } = require('./index');

describe('Math functions', () => {
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 20)).toBe(30);
    });

    it('should handle negative numbers', () => {
      expect(add(-1, 1)).toBe(0);
      expect(add(-5, -3)).toBe(-8);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(20, 10)).toBe(10);
    });

    it('should handle negative numbers', () => {
      expect(subtract(-1, 1)).toBe(-2);
      expect(subtract(-5, -3)).toBe(-2);
    });
  });
}); 