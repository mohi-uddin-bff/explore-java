// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ........ is a `Fibonacci` pattern.
// Here is difference type of java code to solve this fibonacci pattern:-



    // type-1: for loop-
        // function fibonacci(nth) {
        //     let basisNumber = [0, 1];
        //     for(let i = 2; i<=nth; i++) {
        //         basisNumber [i] = basisNumber [i - 1] + basisNumber [i - 2];
        //     }
        //     return basisNumber;
        // }
        // let result = fibonacci(12);
        // console.log(result);


    // type-2: while loop-
        // function fibonacci(nth) {
        //     let basisNumber = [0, 1];
        //     let i = 2;
        //     while(i<=nth) {
        //         basisNumber [i] = basisNumber [i - 1] + basisNumber [i - 2];
        //         i++;
        //     }
        //     return basisNumber;
        // }
        // let result = fibonacci(12);
        // console.log(result);


    // type-3: Recursive (only nth elemenet)-
        // function fibonacci(n) {
        //     if(n == 0) {
        //         return 0;
        //     }
        //     else if(n == 1) {
        //         return 1;
        //     }
        //     else {
        //         return fibonacci(n - 1) + fibonacci(n - 2);
        //     }
        // }
        // let result = fibonacci(12);
        // console.log(result);



    // type-4: Recursive (nth array)-
        // function fibonacci(n) {
        //     if(n == 0) {
        //         return [0];
        //     }
        //     else if(n == 1) {
        //         return [0, 1];
        //     }
        //     else {
        //         let basisElement = fibonacci(n - 1);
        //         let nextElement = basisElement[n - 1] + basisElement[n - 2];
        //         basisElement.push(nextElement);
        //         return basisElement;
        //     }
        // }
        // let result = fibonacci(12);
        // console.log(result);