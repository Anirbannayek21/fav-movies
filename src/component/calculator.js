const add=(a,b)=>{
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

const mul = (a,b) => {
    return a*b;
}

const div = (a,b) => {
    let num = a/b;
    return num.toFixed(2);
}

export {add , sub , mul , div};