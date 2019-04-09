import React, { Component } from 'react';
import MyRouter from "../routing/my_router";

export default class AppRoot extends Component {
  constructor(props) {
    super(props);

    this.state  = {
      viewState: MyRouter.currentState()
    };

    MyRouter.afterNavigate(()=>{
      this.setState({
        viewState: MyRouter.currentState()
      })
    });
  }

  render() {
    const V = this.state.viewState.view;

    return (
      <div className={`app_root_container`}>
        <h1>Compiled react widget</h1>
        { <V {...this.state.viewState} /> }
      </div>
    );
  }
}
