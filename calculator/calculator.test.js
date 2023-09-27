import calculator from "./calculator";

test('Checks if calculator has add features', () => {
    expect(calculator()).toHaveProperty("add");
});

test('Checks if calculator has subtract features', () => {
    expect(calculator()).toHaveProperty("subtract");
});

test('Checks if calculator has multiply features', () => {
    expect(calculator()).toHaveProperty("multiply");
});

test('Checks if calculator has divide features', () => {
    expect(calculator()).toHaveProperty("divide");
});

test('Checks if calculator adds correctly', () => {
    expect(calculator().add(23, 244)).toBe(267);
});

test('Checks if calculator subtracts correctly', () => {
    expect(calculator().subtract(300, 244)).toBe(56);
});

test('Checks if calculator multiplies correctly', () => {
    expect(calculator().multiply(11, 11)).toBe(121);
});

test('Checks if calculator divides correctly', () => {
    expect(calculator().divide(125, 5)).toBe(25);
});