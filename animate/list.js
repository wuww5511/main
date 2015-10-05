define([
    'class.js',
    'util.js',
    'event.js'
],function(c,u,e){
    
    var List = c.extend({
        
        _init:function(){
            this._list = [];
        },
        //@param {Finate}
        add:function(animate){
            
            this._list.push(animate);
            
            var self = this;
            
            animate.on('end',function(){
                if(self._list.length == 0){
                    self.trigger("end");
                    return;
                }
                self._execOne();
            });
            
            return this;
        },
        
        _execOne:function(){
            var animate = this._list.shift();
            if(!animate) return;
            animate.start();
        },
        
        start:function(){
            this._execOne();
        }
        
    });
    
    u.mixin(List.prototype,e);
    
    return List;
});