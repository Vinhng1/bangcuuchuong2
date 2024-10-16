// hien thi 20 so dau tien cua fibonaci
// let F = 0, F0 = 0, F1 = 0;
// let fibonacci = "";
// for ( let i = 0; i < 20 ; i++ ) {
//     if (i == 0) {
//         F = 1
//         F1 = 1
//         fibonacci += F+ ""
//     } else {
//         F = F0 + F1
//         F0 = F1
//         F1 = F
//         fibonacci += F+ ""
//         console.log(i+ " = " +F)
//     }
//     document.write(fibonacci);
// }
function fibonacci(n) {
    let a = [0, 1];
    for (let i = 2; i < n; i++) {
        a[i] = a[i - 1] + a[i - 2];
    }
    return a;
}
console.log(fibonacci(20).join(','));
