import React, { Component } from 'react';
import CrwRouter from "../../routing/crw_router";

export default class StateNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.text !== this.state.text) {
      this.setState({
        text: nextProps.text
      });
    }
  }

  render() {
    return (
      <div>
        <h3>Notification</h3>
        <p>
          <button onClick={()=>{ CrwRouter.nav.toDashboard() }}> To Dashboard </button>
        </p>
        <p>
          { this.state.text }
        </p>
      </div>
    );
  }
}