const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) =>{
    if(err){
        console.error(err);
        return
    }

    let parentheses = data.split('');
    let stack = [];
    let openParentheses = ['(','[','{'];
    let closedParentheses = [')',']','}'];
    let result = '';

    for(i = 0 ; i < parentheses.length; i++){
        if(openParentheses.includes(parentheses[i])){
            stack.push(parentheses[i]);
        }
        if(closedParentheses.includes(parentheses[i])){
            if(openParentheses.indexOf(stack.at(-1)) === closedParentheses.indexOf(parentheses[i])){
                stack.pop();
            }else{result = 'no';}
        }
    }

    if(stack.length > 0){
        result = 'no';
    }else{
        if(result !== 'no'){result = 'yes';}
    }

    fs.writeFile('output.txt', result.toString(), err =>{
        if(err){
            console.error(err);
            return
        }
    })
});
