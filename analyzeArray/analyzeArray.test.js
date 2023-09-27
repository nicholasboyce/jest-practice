import analyzeArray from "./analyzeArray";

test('Checks if analyzeArray has average property', () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty("average");
});

test('Checks if analyzeArray has min property', () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty("min");
});

test('Checks if analyzeArray has max property', () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty("max");
});

test('Checks if analyzeArray has length property', () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty("length");
});

test('Checks if analyzeArray averages correctly', () => {
    expect(analyzeArray([1, 2, 3]).average).toBe(2);
});

test('Checks if analyzeArray mins correctly', () => {
    expect(analyzeArray([1, 2, 3]).min).toBe(1);
});

test('Checks if analyzeArray maxes correctly', () => {
    expect(analyzeArray([1, 2, 3]).max).toBe(3);
});

test('Checks if analyzeArray calculates length correctly', () => {
    expect(analyzeArray([1, 2, 3]).length).toBe(3);
});