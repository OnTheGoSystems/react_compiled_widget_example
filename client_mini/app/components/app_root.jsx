import React, { Component } from 'react';
import CrwRouter from "../routing/crw_router";

export default class AppRoot extends Component {
  constructor(props) {
    super(props);

    this.state  = {
      viewState: CrwRouter.currentState()
    };

    CrwRouter.afterNavigate(()=>{
      this.setState({
        viewState: CrwRouter.currentState()
      })
    });
  }

  containerStyle() {
    return {
      margin: '20px',
      background: 'rgb(201, 255, 157)',
      color: '#14631b',
      padding: '20px',
    }
  }

  render() {
    const V = this.state.viewState.view;

    return (
      <div className={`app_root_container`} style={this.containerStyle()}>
        <h1>Compiled react widget</h1>
        { <V {...this.state.viewState} /> }
      </div>
    );
  }
}
