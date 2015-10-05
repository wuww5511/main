define([
    './animate.js'
],function(A){
    var Finate = A.extend({
        
        _init:function(opt){
            this._super(opt);
            this._totalTime = opt.totalTime;
        },
        
        _onprogressEnd:function(){
            this._super();
            if(this._runningTime >= this._totalTime){
                this.stop();
                this.trigger("end");
            }
                
        }
        
    });
    
    return Finate;
});