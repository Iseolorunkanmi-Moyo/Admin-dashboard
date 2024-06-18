fetch('/DATABASE/message.json')
.then(res => {
    
    return res.json();

})

.then((objectData) => {

    for (let i = 0; i < objectData.length; i++) {
    
        
    
    }

console.log(objectData)

})

.catch(error => console.log('error'));
