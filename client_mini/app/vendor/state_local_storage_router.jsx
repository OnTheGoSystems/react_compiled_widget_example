export default class StateLocalStorageRouter {
  constructor(key) {
    this.key = (key || 'state_view_router_state');
    this.routes = [];
    this.callbacks = [];
    this.defaultRoute = null;
  }

  addRoute(route, view) {
    this.routes.push({route: route, view: view})
  };

  setDefaultRoute(view){
    this.defaultRoute = view;
  };

  currentState(){
    return this.resolve(localStorage.getItem(this.key) || this.defaultRoute);
  };

  resolve(route){
    let currentParts = route.split('/');

    for(let i = 0; i < this.routes.length; i++) {
      let parts = this.routes[i].route.split('/');
      if(parts.length === currentParts.length) {
        let params = { view: this.routes[i].view };
        let valid = true;

        for(let j =0; j < parts.length; j++) {
          let cp = currentParts[j];
          let p = parts[j];
          if(p[0] === ':') {
            params[p.replace(':', '')] = cp;
          } else {
            if(p !== cp) {
              valid = false;
              break
            }
          }
        }
        if(valid) { return params }
      }
    }

    return this.resolve(this.defaultRoute)
  };

  navigate(viewState){
    let path = this.buildPath(viewState);
    localStorage.setItem(this.key, path);
    this.runCallbacks();
  };

  navigateByPath(path){
    this.navigate(this.resolve(path));
  };

  afterNavigate(callback) {
    this.callbacks.push(callback);
  }

  runCallbacks() {
    this.callbacks.forEach((callback) => {
      callback();
    });
  }

  buildPath(viewState) {
    let route = this.routeForView(viewState.view);

    let path = route.route;
    let parts = path.split('/');
    let params = parts.filter(function(e){ return e[0] === ':' }).map(function(e){return e.slice(1) });

    for(let i = 0; i < params.length; i++){
      path = path.replace(':' + params[i], viewState[params[i]])
    }

    return path;
  };

  routeForView(view){
    for(let i = 0; i < this.routes.length; i++) {
      if(this.routes[i].view === view) {
        return this.routes[i]
      }
    }
  };
};
