function fib(n) {
    var num1 = 0;
    var num2 = 1;
    var num3 = 0;
    for (var i = 2; i <= n; i++) {
        num1 = num2 + num3;
        num3 = num1;
        num2 = num1;
        console.log(i);
    }
}
fib(3);
