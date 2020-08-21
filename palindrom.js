
function checkPalindrome(name) {
    let char = ``;
    for (let i = 0; i < name.length; i ++) {
        let element = name[i];
        char = element + char;
    }
    if (char === name) {
        return `it's palindrome`;
    }
    else {
        return `it's not`;
    }
}
let result = checkPalindrome(`level`);
console.log(result);