import SampleRequest from "../services/requests/sample_request";
import { MicroStore } from "@tarvit/micro_store";

class SampleStore {
  constructor() {
    this.state = {
      data: {
        values: [],
        loaded: false,
      }
    }
  }

  getValues() {
    return this.state.data.values;
  }

  isLoaded() {
    return this.state.data.loaded;
  }

  loadValues(page = 0) {
    const req = SampleRequest.load(page);
    req.then((response)=> {
      const json = JSON.parse(response);
      setValues(json.data.values)
    });
  }

  setValues(values) {
    this.trigger(`values.loaded`);
    this.state.data.values = values;
    this.state.data.loaded = true;
  }

  bindValuesLoaded(key, callback) {
    this.bind(`values.loaded`, key, callback);
  }

  unbindValuesLoaded(key) {
    this.unbind(`values.loaded`, key);
  }
}

MicroStore.mixin(SampleStore);

SampleStore.instance = new SampleStore();
global.SampleStore = SampleStore;

export default SampleStore;
