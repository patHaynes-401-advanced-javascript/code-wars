const {
  mask,
  highAndLow,
  findTheNonRepeating,
  accum,
  queueTime
} = require('../lib/code-wars');

describe('code challenges', () => {

  it('returns all but last four numbers in string with #', () => {
    expect(mask('4556364607935616')).toBe('############5616');
    expect(mask('1')).toBe('1');
    expect(mask('11111')).toBe('#1111');
  });

  it('returns highest and lowest numbers', () => {
    expect(highAndLow('1 2 3 4 5')).toBe('5 1');
    expect(highAndLow('1 2 -3 4 5')).toBe('5 -3');
    expect(highAndLow('1 9 3 4 -5')).toBe('9 -5');
  });

  it('returns the first non-repeating number', () => {
    expect(findTheNonRepeating('1212121231212')).toBe('3');
    expect(findTheNonRepeating('43222344347223')).toBe('7');
    expect(findTheNonRepeating('4565464564562554668')).toBe('2');
  });

  it('takes in a string of letters and accumulates them', () => {
    expect(accum('abdhe')).toBe('A-Bb-Ddd-Hhhh-Eeeee');
  });

  it('the function should return an integer, the total time required', () => {
    expect(queueTime([5, 3, 4], 1)).toBe(12);
    expect(queueTime([10, 2, 3, 3], 2)).toBe(10);
  });
});