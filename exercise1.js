//array of values
let array1 = ['apple', 'banana', 'mango'];
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}


//array of objects
let array2=[{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}]
for(let i=0;i<array2.length;i++){
    console.log(array2[i].fruit);
    
}

// objects
let object = { fruit1:'apple',fruit2:'banana',fruit3:'mango'}
for (let i in object) {
    console.log(object[i]);
}
