import caesarCipher from "./caesarCipher";

test('Shift z to a (wrapping)', () => {
    expect(caesarCipher("z", 1)).toBe("a");
});

test('Shift z to b (wrapping)', () => {
    expect(caesarCipher("z", 2)).toBe("b");
});

test('Shift Z to A (keeping the same case)', () => {
    expect(caesarCipher("Z", 1)).toBe("A");
});

test('Leave punctuation the same', () => {
    expect(caesarCipher("?", 1)).toBe("?");
});

test('Accepts multiple characters', () => {
    expect(caesarCipher("za", 1)).toBe("ab");
});

test('Accepts different case characters', () => {
    expect(caesarCipher("aBc", 3)).toBe("dEf");
});

test('Accepts negative shift', () => {
    expect(caesarCipher("dEf", -3)).toBe("aBc");
});
