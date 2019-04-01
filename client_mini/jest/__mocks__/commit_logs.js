export default class CommitLogs {
  static exec(rows) {
    return new Promise((resolve, _reject) => {
      process.nextTick(() =>
        resolve({success: true})
      );
    });
  }
}
