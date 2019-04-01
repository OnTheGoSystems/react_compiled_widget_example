import HttpService from "../http_service";
import CompiledReactWidget from "root/compiled_react_widget";

export default class CommitLogsRequest {
  static exec(rows) {
    HttpService.post(`${CompiledReactWidget.host}/widget/logs.json`, rows)
  }
}
