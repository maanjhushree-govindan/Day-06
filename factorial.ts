function factorial (n:number): number {
    if (n<0){
        throw new Error (`Factorial is not defined for negative numbers`);
    }
    else if(n==0 || n==1)
        {
            return 1;
        }
        else{
            let result = 1;
            for (let i = 2; i<=n;i++){
                result*=i;
            }
            return result;
        }
    }

    const num = 16;
    console.log(`factorial of ${num} is: ${factorial(num)}`);