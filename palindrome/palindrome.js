// Version 1
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}


// Version 2
function palindrome(str) {
    const reversed = str
        .split('')
        .reverse()
        .join('');

    return str === reversed;
}