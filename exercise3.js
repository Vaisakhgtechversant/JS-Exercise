var data = [
    {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
    {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
    {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648"}
];
data.forEach((obj) => {
    for (let i in obj) {
        if (typeof obj[i] === 'string') {
            obj[i] = obj[i].trim();
        }    
    }
    obj.Name=obj.firstname+obj.lastname
    if(obj.phone.length>=10){
        obj.phone=obj.phone.slice(-10)
    }else(obj.phone.length<10)
    {
        obj.phone=obj.phone.padStart(10,'0')
    }
    if(obj.age>150 || obj.age<0){
        obj.age="NA"
    }
    if (obj.id.length > 3) {
        const maskedId = obj.id.slice(0, -3) + '###';
        obj.id = maskedId;
    }
});

console.log(data);
