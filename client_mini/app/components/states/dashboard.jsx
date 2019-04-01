import React, { Component } from 'react';
import CrwRouter from "../../routing/crw_router";
import OrganizationStore from "../../stores/jobs_store";

export default class StateDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: OrganizationStore.instance.getJobs(),
      loaded: OrganizationStore.instance.isLoaded(),
      text: props.text
    };
  }

  componentWillMount() {
    OrganizationStore.instance.bindJobsLoaded(`dashboard`, () => {
      this.setState({
        jobs: OrganizationStore.instance.getJobs(),
        loaded: OrganizationStore.instance.isLoaded()
      })
    });
  }

  componentWillUnmount() {
    OrganizationStore.instance.unbindJobsLoaded(`dashboard`);
  }

  componentDidMount() {
    OrganizationStore.instance.loadJobs();
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