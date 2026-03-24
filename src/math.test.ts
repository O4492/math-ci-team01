import { describe, it, expect } from 'vitest';
import {
  add,
  subtract,
  multiply,
  divide,
  factorial,
  power,
  average,
  clamp,
  quadratic,
} from './math';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('handles negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });
});

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(3, 7)).toBe(21);
  });
  it('returns zero when multiplied by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });
  it('returns null for division by zero', () => {
    expect(divide(10, 0)).toBeNull();
  });
});

describe('factorial', () => {
  it('computes factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });
  it('returns 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });
  it('returns null for negative input', () => {
    expect(factorial(-3)).toBeNull();
  });
});

describe('power', () => {
  it('finds the power of a number 2 to the exponent 3', () => {
    expect(power(2, 3)).toBe(8);
  });
  it('returns 1 for an exponent of 0', () => {
    expect(power(5, 0)).toBe(1);
  });
});

describe('average', () => {
  it('returns the average of an array', () => {
    expect(average([2, 4, 6])).toBe(4);
  });
  it('returns null for an empty array', () => {
    expect(average([])).toBeNull();
  });
});

describe('clamp', () => {
  it('returns value when within range', () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });

  it('returns min when value is below min', () => {
    expect(clamp(-3, 0, 100)).toBe(0);
  });

  it('returns max when value is above max', () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });
});

describe('quadratic', () => {
  it('Returns the real roots of a positive discriminant', () => {
    expect(quadratic(1, -5, 6)).toEqual([3, 2]);
  });
  it('Returns null if the discriminant is negative', () => {
    expect(quadratic(1, 2, 3)).toBeNull();
  });
  it('Returns one real root for discriminant zero', () => {
    expect(quadratic(1, -4, 4)).toEqual([2, 2]);
  });
});
