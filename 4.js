const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err,data) =>{
    if(err){
        console.error(err);
        return;
    }

    let wagonQuantity = data.split('\n')[0];
    let wagonSequence = data.split('\n')[1].split(' ');
    let result = '';
    let deadEnd = [];
    let check = 1;

    wagonSequence.forEach(element => {
        deadEnd.push(+element);
        while(deadEnd.at(-1) === check){
            deadEnd.pop();
            check++;
        }
        
    });
    
    if(!deadEnd[0]){result = 'YES';}
    else{result = 'NO';}

    fs.writeFile('output.txt', result.toString(), err =>{
        if(err){
            console.error(err);
            return;
        }
    } )
})