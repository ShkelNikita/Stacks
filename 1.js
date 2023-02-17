const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) =>{
    if(err){
        console.error(err);
        return
    }

    let commands = data.split('\r\n');
    let result = '';
    let stack = [];

    for(let i = 0; i < commands.length; i++){
        if(commands[i] === 'exit'){
            result += 'bye';
            break; 
        }
        switch(commands[i]){
            case `push ${commands[i].slice(5)}`:
                stack.push(commands[i].slice(5));
                result += 'ok\r\n';
                break;
            case 'pop':
                if(stack[0]){
                    result += stack.pop()+'\r\n';
                }else{result += 'error\r\n';}
                break;
            case 'back':
                if(stack[0]){
                    result += stack.at(-1)+'\r\n';
                }else{result += 'error\r\n';}
                break;     
            case 'size':
                result += stack.length + '\r\n'; 
                break
            case 'clear':
                stack = [];
                result += 'ok\r\n';
                break 
        }
    };

    fs.writeFile('output.txt', result.toString(), err =>{
        if(err){
            console.error(err);
            return
        }
    })
});
