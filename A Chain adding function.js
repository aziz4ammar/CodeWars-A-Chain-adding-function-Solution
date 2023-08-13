function add(n){
    function monad(m){return add(n+m)}
    monad.valueOf = function valueOf(){return n};
    return monad;
    }