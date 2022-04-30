import { hexToRGB } from './helpers';

describe('helpers', () => {
  it('should return a rgb color', () => {
    expect(hexToRGB('#ff0000')).toBe('rgb(255, 0, 0)');
    expect(hexToRGB('#ff0000', 0.5)).toBe('rgba(255, 0, 0, 0.5)');
  });
});
