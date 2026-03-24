export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number | null {
  if (b == 0) return null;
  return a / b;
}

export function factorial(n: number): number | null {
  if (n < 0 || !Number.isInteger(n)) return null;
  if (n <= 0) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function power(base: number, exponent: number): number {
  if (exponent == 0) return 1;
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

export function average(numbers: number[]): number | null {
  if (numbers.length === 0) return null;
  let sum: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export function quadratic(a: number, b: number, c: number): number[] | null {
  const discriminant: number = b * b - 4 * a * c;
  if (discriminant < 0) return null;
  const answer_1 = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
  const answer_2 = (-1 * b - Math.sqrt(discriminant)) / (2 * a);
  return [answer_1, answer_2];
}
