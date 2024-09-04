
function walkDog() {

    return new Promise((resolve, reject) =>{
        setTimeout(() => {

        const dogWalked = true;

        dogWalked? resolve('You walked the dog'): 
                    reject("You didn't take out the dog")
        }, 1500);
    })
}
 
function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() =>{

            const kitchenCleaned = false
            
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

 async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You finished all the chores");
    }
    catch(error){
        console.error(error);
    }



 }

 doChores();