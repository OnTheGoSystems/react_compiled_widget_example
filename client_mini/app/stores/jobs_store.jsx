import OrganizationsRequest from "../services/requests/organizations_request";
import KeyEvent from "../vendor/key_event";

class OrganizationStore {
  constructor() {
    this.state = {
      data: {
        jobs: [],
        loaded: false,
      }
    }
  }

  getJobs() {
    return this.state.data.jobs;
  }

  isLoaded() {
    return this.state.data.loaded;
  }

  loadJobs(page = 0) {
    const req = OrganizationsRequest.load(page);
    req.then((response)=> {
      const json = JSON.parse(response);
      this.state.data.loaded = true;
      this.state.data.jobs = json.data.jobs;
    });
  }

  setJobs(jobs) {
    this.trigger(`jobs.loaded`);
    this.state.data.jobs = jobs;
    this.state.data.loaded = true;
  }

  bindJobsLoaded(key, callback) {
    this.bind(`jobs.loaded`, key, callback);
  }

  unbindJobsLoaded(key) {
    this.unbind(`jobs.loaded`, key);
  }
}

KeyEvent.mixin(OrganizationStore);

OrganizationStore.instance = new OrganizationStore();
global.OrganizationStore = OrganizationStore;

export default OrganizationStore;
