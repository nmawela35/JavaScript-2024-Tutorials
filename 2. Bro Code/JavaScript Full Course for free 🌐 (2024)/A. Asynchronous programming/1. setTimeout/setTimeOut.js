/* -Promise- an object that manages asynchronous operations e.g fetching a file, querying
-a database
-Do the ff chores in order */

function walkDog(callback){

    setTimeout(() => {
        console.log("You walk the dog");
        callback();
    }, 1500);
}

function cleanKitchen(callback) {
    setTimeout(() =>{
        console.log('You cleaned the kitchen');
        callback();
    }, 2500);
}

function takeOutTrash(callback){ 
    setTimeout(() =>{
        console.log("You take out the trash");
        callback();
    } ,500)
   
}

walkDog(() =>{
    cleanKitchen(() =>{
        takeOutTrash(() => console.log("You finished all the chores"));
    });
});

/* walkDog();
cleanKitchen();
takeOutTrash()
 */