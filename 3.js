const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) =>{
    if(err){
        console.error(err);
        return
    }

    let sortedData = data.split(/\s/).join('').split('');
    console.log(sortedData)
    let polishStack = [];
    let x = 0;
    let y = 0;

    sortedData.forEach(element => {
        if(Number.isInteger(Number(element))){
            polishStack.push(Number(element));
        }else{
            switch(element){
                case '+':
                    x = polishStack.pop();
                    y = polishStack.pop();
                    polishStack.push(x+y);
                    break;
                case '-':
                    x = polishStack.pop();
                    y = polishStack.pop();
                    polishStack.push(y-x);
                    break;
                case '*':
                    x = polishStack.pop();
                    y = polishStack.pop();
                    polishStack.push(x*y);
                    break;
            }
        }
    })

    fs.writeFile('output.txt', polishStack.toString(), err =>{
        if(err){
            console.error(err);
            return
        }
    })
});