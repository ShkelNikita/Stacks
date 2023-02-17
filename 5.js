const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err,data)=>{
    if(err){
        console.error(err);
        return;
    }

    let cityQuantity = data.split('\r\n')[0];
    let cityLivingCost = data.split('\r\n')[1].split(' ');
    let transitionalStack = [];
    let result = [];
    
    for(let i = 0; i < cityQuantity; i++){
        if(transitionalStack.at(-1)){
            while(cityLivingCost[i] < +transitionalStack.at(-1)[0]){
                result[transitionalStack.at(-1)[1]] = i;
                transitionalStack.pop();
                if(!transitionalStack.at(-1)){break}
            }
        }
        transitionalStack.push([cityLivingCost[i],i])
    }

    if(transitionalStack.length > 0){
        transitionalStack.forEach(element =>{
            result[element[1]] = -1;
        })
    }

    result = result.join(' ');


    fs.writeFile('output.txt', result.toString(), err =>{
        if(err){
            console.error(err);
            return;
        }
    })
})