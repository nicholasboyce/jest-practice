import reverseString from "./reverseString";

test('Checks if Blimp becomes pmilB', () => {
    expect(reverseString("Blimp")).toBe("pmilB");
});

test('Checks if racecar becomes racecar', () => {
    expect(reverseString("racecar")).toBe("racecar");
});

test('Checks if fred becomes derf', () => {
    expect(reverseString("fred")).toBe("derf");
});