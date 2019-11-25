const {
  greeting,
  speaker,
  addValues,
  addNumbers,
  removeOne,
  removeElements,
  removeWithForEach,
  removeWithAnon,
  createList,
  fizzBuzz
} = require('../for-each/for-each');


describe('testing for each code challenges', () => {

  it('should change to uppercase', () => {
    expect(greeting('hello Bootcamp 2 students!')).toBe('HELLO BOOTCAMP 2 STUDENTS!');
  });

  it('should callback a function', () => {
    expect(speaker('hello Bootcamp 2 students!', greeting)).toBe('HELLO BOOTCAMP 2 STUDENTS!');
  });

  it('It should add the number 8 to the array', () => {
    const arr = [];
    const result = addNumbers(8, arr, 5, addValues);
    expect(result).toEqual([8, 8, 8, 8, 8]);
  });

  it('It should remove three elements from the array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = removeElements(array, removeOne);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('It should remove three elements from the array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = removeWithForEach(array, removeOne);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('It should remove three elements from the array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = removeWithAnon(array);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });


  it('It should only add the available items to the list', () => {
    const inventory = [
      { name: 'apples', available: true },
      { name: 'pears', available: true },
      { name: 'oranges', available: false },
      { name: 'bananas', available: true },
      { name: 'blueberries', available: false }
    ];
    const available = createList(inventory);
    expect(available).toEqual(['apples', 'pears', 'bananas']);
  });


  it('It should print out messages or numbers according to fizz buzz rules', () => {
    const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const outputs = fizzBuzz(inputs);
    expect(outputs).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
  });

});
