// @flow

import { map, mapToPlusTwo } from '../mapper';

let mockPlusTwo: JestMockFn<[number], number>;

jest.mock('../util', () => {
  mockPlusTwo = jest.fn();
  return {
    plusTwo: mockPlusTwo
  }
});

describe('mapper', () => {
  beforeEach(() => {
    mockPlusTwo.mockClear()
  });

  describe('map', () => {
    test('should return new array using mapper function', () => {
      const array = [1, 2, 3];
      const mapper = jest.fn(elem => elem);

      const actual = map(array, mapper);

      expect(actual).not.toBe(array);
      expect(actual).toEqual(array)
    });

    test('should use mapper function for mapping', () => {
      const array = [1, 2, 3];
      const mapper = jest.fn(elem => elem);

      map(array, mapper);

      expect(mapper).toHaveBeenCalledTimes(array.length);

      expect(mapper).toHaveBeenCalledWith(array[0], 0, array);
      expect(mapper).toHaveBeenCalledWith(array[1], 1, array);
      expect(mapper).toHaveBeenCalledWith(array[2], 2, array);

      expect(mapper).toHaveBeenNthCalledWith(
        array.length,
        expect.anything(),
        expect.anything(),
        array
      );
    })
  });

  describe('mapToPlusTwo', () => {
    xtest('should return new array with values plus two', () => {
      const array = [1, 2, 3];

      const actual = mapToPlusTwo(array);
      const expected = [3, 4, 5];

      expect(actual).not.toBe(array);
      expect(actual).toEqual(expected)
    });

    test('should return new array using plusTwo util 2', () => {
      const array = [1, 2, 3];

      mapToPlusTwo(array);

      expect(mockPlusTwo).toHaveBeenCalledTimes(array.length);

      expect(mockPlusTwo).toHaveBeenCalledWith(array[0], 0, array);
      expect(mockPlusTwo).toHaveBeenCalledWith(array[1], 1, array);
      expect(mockPlusTwo).toHaveBeenCalledWith(array[2], 2, array);

      expect(mockPlusTwo).toHaveBeenNthCalledWith(
        array.length,
        expect.anything(),
        expect.anything(),
        array
      );
    });

    test('should return new array with values plus three', async () => {
      jest
        .resetModules()
        .doMock('../util', () => ({
          plusTwo: x => x + 3
        }));

      const { mapToPlusTwo } = await import('../mapper');

      const array = [1, 2, 3];

      const actual = mapToPlusTwo(array);
      const expected = [4, 5, 6];

      expect(actual).not.toBe(array);
      expect(actual).toEqual(expected)
    });

  });
});
