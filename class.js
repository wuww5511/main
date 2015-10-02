/**
 *实现类的继承
 *使用样例
 *var C1 = F.extend({
 *        _init:function(a){
 *            this._super(a);
 *       }
 *    });
 *
 *  var C2 = C1.extend({
 *         _init:function(a,b){
 *           this._super(a);
 *        }
 *    });
 *
 */

function F(){
    
}

F.prototype._init = function(){};

F.prototype._super = function(){
    
    var caller = arguments.callee.caller;
    
    var pro = this;
    
    var constructor = this.constructor;
    
    function getName(pro){
        for(var i in pro){
            if(pro[i] === caller){
                return i;
            }
        }
        return false;
    }
    
    var name;
    
    while(constructor){
        name = getName(constructor.prototype);
        if(name) break;
        constructor = constructor._super;
    }
    
    if(constructor._super){
        var fn = constructor._super.prototype[name];
        if(fn)
            fn.apply(this,arguments);
    }
};

F.extend = function(o){
    
    function Sub(){
        this._init.apply(this,arguments);
    }
    
    Sub.extend = F.extend;
    
    Sub._super = this;
    
    Sub.prototype = Object.create(Sub._super.prototype);
    
    Sub.prototype.constructor = Sub;
    
    for(var i in o){
        Sub.prototype[i] = o[i];
    }
    
    return Sub;
    
};