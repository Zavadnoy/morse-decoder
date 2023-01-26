const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*****':  ' ',    
};
const code_Table = {
    '00':  '',
    '10':  '.',
    '11':  '-',
    '**':  '*',
}

function decode(expr) {
    // write your solution here
    let out = '';
    let morseSymbol = '';
    while (expr.length > 0) {
        morseSymbol = '';
        for (let i = 1; i < 6; i++) {
            morseSymbol = morseSymbol + code_Table[expr.slice(0,2)];
            expr = expr.slice(2);
        }
        out = out + MORSE_TABLE[morseSymbol];
    }
    return (out);
}

module.exports = {
    decode
}