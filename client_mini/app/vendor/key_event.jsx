let KeyEvent	= function(){};

KeyEvent.prototype	= {
  bind: function(event, key, action){
    this._events = this._events || {};
    this._events[event] = this._events[event]	|| {};
    this._events[event][key] = action;
  },
  unbind: function(event, key){
    this._events = this._events || {};
    if(event in this._events === false)	return;
    delete this._events[event][key];
  },
  unbindAll: function(){
    this._events = {}
  },
  trigger: function(event){
    this._events = this._events || {};
    if(event in this._events === false)	return;
    const entries = Object.entries(this._events[event]);

    for(let i = 0; i < entries.length; i++){
      entries[i][1].apply(this, Array.prototype.slice.call(arguments, 1));
    }
  }
};

KeyEvent.mixin	= function(destObject){
  let props	= ['bind', 'unbind', 'trigger', 'unbindAll'];
  for(let i = 0; i < props.length; i ++){
    if(typeof destObject === 'function'){
      destObject.prototype[props[i]]	= KeyEvent.prototype[props[i]];
    } else {
      destObject[props[i]] = KeyEvent.prototype[props[i]];
    }
  }
  return destObject;
};

export default KeyEvent;