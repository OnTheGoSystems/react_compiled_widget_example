import HttpService from "../http_service";
import CompiledReactWidget from "root/compiled_react_widget";

export default class OrganizationsRequest {
  static load(page) {
    // TODO: replace with real ajax api method
    return HttpService.get(`${CompiledReactWidget.host}/widget/fetch.json`, { page: page })
  }
}

global.Organizations = OrganizationsRequest;
