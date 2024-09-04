
function walkDog() {

    return new Promise((resolve, reject) =>{
        setTimeout(() => {

        const dogWalked = true;

        dogWalked? resolve('You walked the dog'): 
                    reject("You didn't clean the kitchen")
        },1500);
    })
}
 
function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() =>{

            const kitchenCleaned = true
            
            kitchenCleaned ? resolve("You cleaned the kitchen"):
                            reject("You didn't clean the kitchen")
        } ,2500);
    });
}

function takeOutTrash() {

    return new Promise((resolve,reject) =>{
        setTimeout(() =>{

            const trashTakenOut = true;
            trashTakenOut ? resolve(" You took out the trash"):
                            reject("You didn't took out trash")
        },500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})   
         .then(value => 
            {
                console.log(value); 
                console.log("You finished all chores")
            })
            .catch(error => console.log(error))

