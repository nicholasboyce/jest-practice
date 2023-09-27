import capitalize from './capitalize';

test('Checks if f becomes F', () => {
  expect(capitalize('f')).toBe('F');
});

test('Checks if g becomes G', () => {
  expect(capitalize('g')).toBe('G');
});

test('Checks if skippitypop becomes Skippitypop', () => {
  expect(capitalize('skippitypop')).toBe('Skippitypop');
});


test('Checks if G stays G', () => {
    expect(capitalize('G')).toBe('G');
});