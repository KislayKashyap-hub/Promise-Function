function initPromises() {

    promise1.then(function (result) {
        console.log(result); //Output : Completed
    }).catch(function (error) {
        console.log(error); //if isDbOperationCompleted=FALSE //Output : Not Completed
    });
}

var promise1 = new Promise(function (resolve, reject) {
    isDbOperationCompleted = true;
    //write code to perform some database operations
    //isDbOperationCompleted = true;

    if (isDbOperationCompleted) {
        resolve('Completed');
    } else {
        reject('Not completed');
    }
});

//ES6
//A promise represents the result of the asynchronous function. 

//consider above code for a sample promise assume like doing DB Operation as asynchronously, 
//In that promise Object arguments as two function resolve and reject,
//whenever we execute that promise using .then() and .catch() as callback function In order to get resolve or reject values

