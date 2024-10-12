function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    else if (n == 0 || n == 1) {
        return 1;
    }
    else {
        var result = 1;
        for (var i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
var num = 16;
console.log("factorial of ".concat(num, " is: ").concat(factorial(num)));
