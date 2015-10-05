define([],function(p){
    
    p.mixin = function(target,o){
        for(var i in o){
            target[i] = o[i];
        }
    };
    
    return p;
    
});