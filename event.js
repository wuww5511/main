define([],function(){
    var event = {
        on:function(event,fn){
            if(!this._events) this._events = {};
            if(!this._events[event]) this._events[event] = [];
            this._events[event].push(fn);
            return this;
        },
        trigger:function(event){
            var args = [].slice.call(arguments,1);
            var arr = this._events && this._events[event];
            if(arr){
                for(var i = 0;i<arr.length;i++){
                    arr[i].apply(null,args);
                }
            }
            return this;
        },
        off:function(event,fn){
            var arr = this._events && this._events[event];
            if(arr){
                for(var i = 0;i<arr.length;i++){
                    if(arr[i] === fn){
                        break;
                    }
                }
                arr.splice(i,1);
            }
            return this;
        }
    };
    return event;
});