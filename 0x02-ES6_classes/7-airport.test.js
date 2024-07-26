import Airport from './7-airport.js';

describe('Airport Class', () => {
  test('should create an instance of Airport', () => {
    const airport = new Airport('Los Angeles International', 'LAX');
    expect(airport._name).toBe('Los Angeles International');
    expect(airport._code).toBe('LAX');
    expect(airport.toString()).toBe('[object LAX]');
  });

  test('should return custom string tag using Object.prototype.toString', () => {
    const airport = new Airport('Los Angeles International', 'LAX');
    expect(Object.prototype.toString.call(airport)).toBe('[object LAX]');
  });

  test('should return correct string tag for different airport', () => {
    const airport = new Airport('John F. Kennedy International', 'JFK');
    expect(Object.prototype.toString.call(airport)).toBe('[object JFK]');
  });

  test('should still have correct properties when string tag is checked', () => {
    const airport = new Airport('Chicago O\'Hare International', 'ORD');
    expect(airport._name).toBe('Chicago O\'Hare International');
    expect(airport._code).toBe('ORD');
    expect(Object.prototype.toString.call(airport)).toBe('[object ORD]');
  });
});
