define([
    'class.js',
    'util.js',
    'event.js'
],function(c,u,e){
    
    var State = c.extend({
        _init:function(){
            //记录所有的状态
            this._states = {};
            //记录当前的状态
            this.state = undefined;
        },
        to:function(state){
            if(this._states[state]){
                
                if(this._states[this.state]){
                    if(this._states[this.state].onend)
                        this._states[this.state].onend.call(null);
                }
                
                this.state = state;
                
                if(this._states[state].onstart) 
                    this._states[state].onstart.call(null);
                
            }
            return this;
        },
        add:function(state,opt){
            
            if(!this._states[state])
                this._states[state] = {};
            
            u.mixin(this._states[state],opt);
            
            return this;
        }
    });
    
    u.mixin(State.prototype,e);
});