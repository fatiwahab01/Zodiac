

// From Jest Documentation: https://jestjs.io/docs/using-matchers 
// test('two plus two is four', () => {
//  expect(2 + 2).toBe(4);
// });
import { zodiacPositiveFlow, zodiacNegativeFlow } from '../logic.js';

test('Sep 29 returns Zodiac sign: Libra (positive flow)', () => {
  expect(zodiacPositiveFlow(9, 29)).toBe('Libra');
});


test('Oct 13 returns Zodiac sign: Unknown (negative flow)', () => {
  expect(zodiacNegativeFlow(1, 13)).toBe('Unknown');
});
