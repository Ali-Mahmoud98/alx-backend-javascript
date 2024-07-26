import SkyHighBuilding from './6-sky_high.js';

describe('SkyHighBuilding Class', () => {
  test('should create an instance of SkyHighBuilding', () => {
    const skyHighBuilding = new SkyHighBuilding(3000, 50);
    expect(skyHighBuilding.sqft).toBe(3000);
    expect(skyHighBuilding.floors).toBe(50);
  });

  test('should return correct evacuation warning message', () => {
    const skyHighBuilding = new SkyHighBuilding(3000, 50);
    expect(skyHighBuilding.evacuationWarningMessage()).toBe('Evacuate slowly the 50 floors');
  });

  test('should allow updating floors property', () => {
    const skyHighBuilding = new SkyHighBuilding(3000, 50);
    skyHighBuilding.floors = 60;
    expect(skyHighBuilding.floors).toBe(60);
    expect(skyHighBuilding.evacuationWarningMessage()).toBe('Evacuate slowly the 60 floors');
  });

  test('should inherit from Building and allow updating sqft property', () => {
    const skyHighBuilding = new SkyHighBuilding(3000, 50);
    skyHighBuilding.sqft = 3500;
    expect(skyHighBuilding.sqft).toBe(3500);
  });
});
