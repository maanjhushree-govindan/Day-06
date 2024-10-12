let sumofIndicies = function (){
 let nums = [2,4,7,8, 11,14];
 let target = 18;
 for (let i=0; i<=nums.length;i++){
    for(let j=0; j<=nums.length;j++){
        if (nums[i]+nums[j]===target){
            console.log("Target Equals: ".concat(nums[i], " + ").concat(nums[j], " with the index values of (").concat(nums.indexOf(nums[i]), ",").concat(nums.indexOf(nums[j]), ")"));

        }
    }    
 }
    
}

sumofIndicies();