let conditionalPromise = new Promise ((resolve,reject) => {

    if(Math.random()>0.5){
        
        resolve(`Resolved Successfully`);
    }
    else{
        reject(`Rejected`)
    }
})

conditionalPromise
    .then(result => {
        console.log(`Resolved Successfully`);
    })
    .catch(error => {
        console.log(`Rejected` + error);
    })