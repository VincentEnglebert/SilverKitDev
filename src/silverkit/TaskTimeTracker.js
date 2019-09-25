// eslint-disable-next-line no-unused-vars
class SilverKitTaskTimeTracker {
  constructor(taskName) {
    this.taskName = taskName;
  }

  start() {
    this.startedAt = Date.now();
  }

  stop() {
    this.stoppedAt = Date.now();
  }

  getElapsedTime() {
    return this.stoppedAt - this.startedAt;
  }
}
