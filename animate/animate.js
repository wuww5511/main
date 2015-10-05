define([
    '../class.js',
    '../event.js',
    '../util.js'
],function(c,e,u){
    var Animate = c.extend({
        
        _timeId:undefined,
        
        _runningTime:0,//已经执行的时间
        
        _times:0,//已经执行的次数
        
        _init:function(opt){
            this._dps = opt.dps || 10;
        },
        
        start:function(){
            
            var self = this;
            
            this.trigger("start");
            
            function todo(){
                self._onprogressStart();
                self._onprogress();
                self._onprogressEnd();
            }
            
            this._timeId = setInterval(todo,1000/this._dps);
            
            todo();
        },
                                       
        stop:function(){
            this.trigger("stop");
            clearInterval(this._timeId);
        },
        
        _onprogressStart:function(){
            this._runningTime += 1000/this._dps;
            this._times += 1;
        },
        
        _onprogress:function(){},
        _onprogressEnd:function(){}
    });
    
    u.mixin(Animate.prototype,e);
    
    return Animate;
    
});