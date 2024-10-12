let n = 5;
function sumofValues(n){
    let num = 0;
    for(let i=1;i<=n;i++){
        num+=i;
        console.log(`${i} + ${num}`);
    }
    return num;
}

sumofValues(5);