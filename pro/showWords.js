define([
    'animate/finate.js'
],function(F){
    var Word = F.extend({
        _init:function(interval,str,wrapper){
            var 
                opt = {
                    dps:1000/interval,
                    totalTime:str.length*interval
                };
            
            this._super(opt);
            
            this._interval = interval;
            
            this._wrapper = wrapper;
            
            this._e = document.createElement('div');
            
            this._str = str;
            
            var self = this;
            
            this.on('start',function(){
                self._wrapper.appendChild(self._e);
            });
        },
        
        _onprogress:function(){
            
            this._super();
            
            this._e.innerHTML = this._e.innerHTML + this._str[this._times-1];
        }
    });
    return Word;
});