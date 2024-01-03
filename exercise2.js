(function()  
{  
console.log("Loading User Details...");   
})(); 
const greet=()=>{
    let greetingMesage="Hello";
    return (fname,lname)=>{
        greetingMesage+=""+fname+""+lname;
        console.log(greetingMesage);
    }
}
const result=greet()
result("vaisakh","g")