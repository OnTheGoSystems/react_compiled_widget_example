import CommitLogs from "../../services/requests/commit_logs_request";

export default class LoggerCommiter {
  commit(rows) {
    CommitLogs.exec(rows);
  }
}
