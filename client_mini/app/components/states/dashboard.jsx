import React, { Component } from 'react';
import CrwRouter from "../../routing/crw_router";
import SampleStore from "../../stores/sample_store";

export default class StateDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: SampleStore.instance.getValues(),
      loaded: SampleStore.instance.isLoaded(),
      text: props.text
    };
  }

  componentWillMount() {
    SampleStore.instance.bindValuesLoaded(`dashboard`, () => {
      this.setState({
        values: SampleStore.instance.getValues(),
        loaded: SampleStore.instance.isLoaded()
      })
    });
  }

  componentWillUnmount() {
    SampleStore.instance.unbindValuesLoaded(`dashboard`);
  }

  componentDidMount() {
    SampleStore.instance.loadValues();
  }

  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <p>
          <button onClick={()=>{ CrwRouter.nav.toNotification('Sample number = ' + Math.random()) }}>
            To Notification View
          </button>
        </p>
      </div>
    );
  }
}