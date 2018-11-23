// @flow

import { plusTwo } from "./util";

export const map = <T, U>(
  array: T[],
  mapper: (elem: T) => U
): U[] => (
  array.map(mapper)
);

export const mapToPlusTwo = (array: number[]): number[] => array.map(plusTwo);
