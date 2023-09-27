export default function caesarCipher(string, shift) {

    const lowerCase = "a".charCodeAt(0); // 97
    const upperCase = "A".charCodeAt(0); // 65


    function isLetter(char){
        const code = char.charCodeAt(0);
        if ((code < upperCase) || (code > lowerCase + 25) || ((code > upperCase + 25) && (code < lowerCase))) {
            return false;
        }
        return true;
    }

    function shiftChar(char) {
        if (char.charCodeAt(0) < lowerCase) { // then it's an uppercase letter
            return ((char.charCodeAt(0) - upperCase + shift) % 26) + upperCase;
        } 
        return ((char.charCodeAt(0) - lowerCase + shift) % 26) + lowerCase;
    } 

    function transform(str) {

        const crypt = [];

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < str.length; i++) {

            const char = str.charAt(i);
            let shiftedCharCode;

            if (isLetter(char)) {
                shiftedCharCode = shiftChar(char);
            } else {
                shiftedCharCode = char.charCodeAt(0);
            }

            crypt.push(String.fromCharCode(shiftedCharCode))
        }

        const final = crypt.join("");

        return final;
    }

    return transform(string);
}

caesarCipher("z", 1);