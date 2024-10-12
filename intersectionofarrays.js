let new_arr = (arr1, arr2) => {
    let arrintersection = [];

    for (i=0;i<=arr1.length;i++){
        for (j=0;j<=arr2.length;j++){
            if(arr1[i]==arr2[j]) {
                arrintersection.push(arr1[i])
            }
        }       
    }
    return arrintersection;
}

let arr1 =[20,22,24,26,28,30];
let arr2 = [20,21,22,23,24,25,26];

console.log(new_arr(arr1,arr2));