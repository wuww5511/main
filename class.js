define([],function(){
    /**
     *实现类的继承
     *使用样例
     *var C1 = F.extend({
     *        _init:function(a){
     *            this._super();
     *            doWith(a);        
     *       }
     *    });
     *
     *  var C2 = C1.extend({
     *         _init:function(a,b){
     *           this._super(a);
     *           doWith(b);
     *        }
     *    });
     *
     */

    function F(){

    }

    F.prototype._init = function(){};
    
    F.prototype.__tag = 0;

    F.prototype._super = function(){

        var caller = arguments.callee.caller;

        var constructor = this.constructor;

        //在指定原型中查找调用_super的方法
        function getName(pro){
            for(var i in pro){
                if(pro[i] === caller){
                    return i;
                }
            }
            return false;
        }

        var name;

        //首先在当前构造函数的原型中查找，如未找到，继续在父构造函数的原型中查找。找到后，记录包含该方法的构造函数
        while(constructor){
            name = getName(constructor.prototype);
            if(name) break;
            constructor = constructor._super;
        }

        
        var fn = constructor._super.prototype[name];
        
        while(fn===caller){
            constructor = constructor._super;
            fn = constructor._super.prototype[name];
        }
        
        fn.apply(this,arguments);
        
    };

    F.extend = function(o){

        function Sub(){
            this._init.apply(this,arguments);
        }

        Sub.extend = F.extend;

        Sub._super = this;

        Sub.prototype = Object.create(Sub._super.prototype);
        
        Sub.prototype.__tag ++;

        Sub.prototype.constructor = Sub;

        for(var i in o){
            Sub.prototype[i] = o[i];
        }

        return Sub;
    };
    
    return F;
});