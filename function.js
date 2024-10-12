//Task 01

const { error } = require("console");

function userProfile(name){
    console.log(`Hello` + ` `+ name);
}

userProfile("Maanjhushree Govindan");

//Task 02

function double (num){
    console.log (num*2);
}

double (2);

// Task 03
setTimeout(function(){
    console.log(`This message is delayed by 2000 secs`);
},2000)

//Task 04
function getUserData(callback){
    setTimeout(()=> {
        const user = {
            name: "Maanjhushree",
            age: "29"
        };

        callback(user);
    },3000);
}

getUserData((user)=>{
console.log(`Name: ${user.name}`, `Age: ${user.age}`)
});