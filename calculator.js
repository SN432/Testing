
function sum(a,b){
    sum = a+b;
    return console.log(sum) ;
}

function sub(a,b){
    return console.log(a-b);
}
function div(a,b){
    if(a === 0 ){
        return console.log("can not be divided by zero");
    }
    else{
        return console.log(a/b);
    }
}
function mul(a,b){
    return console.log(a*b);
}

sum(3,5)
sub(1,5)
mul(3,3)
div(10,2)
div(0,3)


