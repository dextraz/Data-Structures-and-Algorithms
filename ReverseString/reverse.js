// Version 1
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

// Version 2
function reverse(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

// Version 3
function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}