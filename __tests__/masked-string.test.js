const { 
  mask, 
  highAndLow 
} = require('../lib/masked-string');


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
});