// // A java code for convert feet to mile-

// function feetToMile(num) {
//     if(num > 0) {
//         const converter = num / 5280;
//         return converter;
//     }
//     else {
//         warning = `Your number is invalied`
//         return warning;
//     }
// }
// let result = feetToMile(-50280);
// console.log(result, `mile`);



// // calculate wood to make some chair,table & bed-

// function woodCalculator(chair, table, bed) {
//     let woodForChair = chair * 1;
//     let woodForTable = table * 3;
//     let woodForBed = bed * 5;
//     const totalWood = woodForChair + woodForTable + woodForBed;
//     return totalWood;
// }
// let resultForGood = woodCalculator(1, 4, 1);
// console.log(`Quntity of wood:`, resultForGood, `f^3`);



// // calculate bricks to make building-

// function brickCalculator(floor) {
//     if(floor <= 10 && floor > 0) {
//         bricks1 = 15000 * floor; // 1000 bricks need for per feet.
//         return bricks1;
//     }
//     else if(floor > 10 && floor <= 20) {
//         bricks2 = (12000 * floor) + 30000; // 30000 bricks is need more for first 10 floor.
//         return bricks2;
//     }
//     else if(floor > 20) {
//         // 50000 & 20000 bricks is need more for first 10 & 11 to 20 floor
//         bricks3 = (10000 * floor) + 70000;
//         return bricks3;
//     }
//     else {
//         warning = `value is wrong`
//         return warning;
//     }
// }

// let result = brickCalculator(28);
// console.log(`Requered bricks:`, result);




function tinyFriends(names) {
    let tiny = names[0];
    let smaller = names[0].length;
    for(let i = 0; i < names.length; i ++) {
        let element = names[i];
        let elementLength = names[i].length;
        if(elementLength < smaller) {
            tiny = element;
        }
    }
    return tiny;
}
let name = [`kalajyfium`, `mansur`, `alif`, `jalal`, `rifadul`];
let result = tinyFriends(name);
console.log(`smallest name:`, result);