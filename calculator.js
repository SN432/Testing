
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b
}
function div(a,b){
    if(a !== 0 ){
        return a/b;
    }
    else{
        return "Cant divide by 0";
    }
}

sum(2,4);
sub(1,5)
div(10.2)
mul(3,3)
div(0,2)