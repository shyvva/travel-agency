import { formatTime } from './formatTime';
import { promoPrice } from './promoPrice';

describe('utils', () => {
  describe('formatTime', () => {

    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });
  });
  it('should return null if arg is not a number', () => {
    expect(formatTime('abc')).toBe(null);
    expect(formatTime(() => { })).toBe(null);
  });
  it('should return null if arg is lower than zero', () => {
    expect(formatTime(-1)).toBe(null);
    expect(formatTime(-2)).toBe(null);
  });
  it('should return time in hh:mm:ss if arg is proper', () => {
    expect(formatTime(122)).toBe('00:02:02');
    expect(formatTime(3793)).toBe('01:03:13');
    expect(formatTime(120)).toBe('00:02:00');
    expect(formatTime(3604)).toBe('01:00:04');
  });

  describe('promoPrice', () => {

    it('should return null if there is no arg', () => {
      expect(promoPrice()).toBe(null);
    });
    it('should return null if at least one of the args is not a number', () => {
      expect(promoPrice(3, '2')).toBe(null);
      expect(promoPrice(3, () => {})).toBe(null);
      expect(promoPrice('3', () => {})).toBe(null);
      expect(promoPrice(3, [1,'2'])).toBe(null);
    });
    it('should return null if discount is equal to or higher than 50%', () => {
      expect(promoPrice(3, 50)).toBe(null);
      expect(promoPrice(3, 55)).toBe(null);
    });
    it('should return null if at least one of the args is negative', () => {
      expect(promoPrice(-3, 30)).toBe(null);
      expect(promoPrice(3, -20)).toBe(null);
    });
    it('should return correct value', () => {
      expect(promoPrice(100, 30)).toBe(70);
      expect(promoPrice(500, 20)).toBe(400);
    });
  });
});
