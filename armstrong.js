function checkArmstrong(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let multiply = num[i] ** num.length;
        sum = sum + multiply;
    }
    return sum;
}
let result = checkArmstrong(`371`)
console.log(result);
