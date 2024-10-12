function fib(n:number){
    let num1 = 0;
    let num2 = 1;
    let num3 = 0
    for (let i = 2; i<=n; i++){
        num1 = num2 + num3;
        num3 = num1;
        num2 = num1;
        console.log(i);
    }
}

fib(3);