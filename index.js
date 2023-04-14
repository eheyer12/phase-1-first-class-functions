function receivesAFunction(exercise){
    
    exercise();
}

function returnsANamedFunction() {
    return receivesAFunction;
}


function returnsAnAnonymousFunction() {
    return (() => 1 + 1);
}
