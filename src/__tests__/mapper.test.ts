const plusTwoMock = jest.fn();
// jest.doMock('../util', () => ({
//     plusTwo: plusTwoMock,
// }));

import {map, mapToPlusTwo} from '../mapper';

import {plusTwo} from "../util";
// import Mock = jest.Mock;

describe('mapper', () => {
    beforeEach(() => {
        // (plusTwo as Mock).mockClear()
        // jest.clearAllMocks()
        plusTwoMock.mockClear()
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
        test('should return new array with values plus two', () => {
            // jest
            //     .resetModules()
            //     .dontMock('../util');
            //
            // const {mapToPlusTwo} = await import('../mapper');
            const array = [1, 2, 3];

            const actual = mapToPlusTwo(array);
            const expected = [3, 4, 5];

            expect(actual).not.toBe(array);
            expect(actual).toEqual(expected)
        });

        xtest('should return new array using plusTwo util', () => {
            const array = [1, 2, 3];

            mapToPlusTwo(array);

            expect(plusTwo).toHaveBeenCalledTimes(array.length);

            expect(plusTwo).toHaveBeenCalledWith(array[0], 0, array);
            expect(plusTwo).toHaveBeenCalledWith(array[1], 1, array);
            expect(plusTwo).toHaveBeenCalledWith(array[2], 2, array);

            expect(plusTwo).toHaveBeenNthCalledWith(
                array.length,
                expect.anything(),
                expect.anything(),
                array
            );
        });

        xtest('should return new array using plusTwo util 2', () => {
            const array = [1, 2, 3];

            mapToPlusTwo(array);

            expect(plusTwoMock).toHaveBeenCalledTimes(array.length);

            expect(plusTwoMock).toHaveBeenCalledWith(array[0], 0, array);
            expect(plusTwoMock).toHaveBeenCalledWith(array[1], 1, array);
            expect(plusTwoMock).toHaveBeenCalledWith(array[2], 2, array);

            expect(plusTwoMock).toHaveBeenNthCalledWith(
                array.length,
                expect.anything(),
                expect.anything(),
                array
            );
        });

        describe('plusTwo mocking', () => {
            const plusTwoMock = jest.fn();
            jest
                .resetModules()
                .doMock('../util', () => ({
                    plusTwo: plusTwoMock,
                }));

            beforeEach(() => {
                plusTwoMock.mockClear()
            });

            test('should return new array using plusTwo util 3', async () => {
                const {mapToPlusTwo} = await import('../mapper');

                const array = [1, 2, 3];

                mapToPlusTwo(array);

                expect(plusTwoMock).toHaveBeenCalledTimes(array.length);

                expect(plusTwoMock).toHaveBeenCalledWith(array[0], 0, array);
                expect(plusTwoMock).toHaveBeenCalledWith(array[1], 1, array);
                expect(plusTwoMock).toHaveBeenCalledWith(array[2], 2, array);

                expect(plusTwoMock).toHaveBeenNthCalledWith(
                    array.length,
                    expect.anything(),
                    expect.anything(),
                    array
                );
            });

            test('should return new array using plusTwo util 4', async () => {
                const {mapToPlusTwo} = await import('../mapper');

                const array = [1, 2, 3];

                mapToPlusTwo(array);

                expect(plusTwoMock).toHaveBeenCalledTimes(array.length);

                expect(plusTwoMock).toHaveBeenCalledWith(array[0], 0, array);
                expect(plusTwoMock).toHaveBeenCalledWith(array[1], 1, array);
                expect(plusTwoMock).toHaveBeenCalledWith(array[2], 2, array);

                expect(plusTwoMock).toHaveBeenNthCalledWith(
                    array.length,
                    expect.anything(),
                    expect.anything(),
                    array
                );
            });

        });

        xtest('should return new array with values plus three', async () => {
            jest
                .resetModules()
                .mock('../util');

            const {mapToPlusTwo} = await import('../mapper');

            const array = [1, 2, 3];

            const actual = mapToPlusTwo(array);
            const expected = [4, 5, 6];

            expect(actual).not.toBe(array);
            expect(actual).toEqual(expected)
        });

    });
});
