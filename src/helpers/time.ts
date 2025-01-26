export class Time {
  private createdAt = time()
  private updatedAt?: number
  private delay

  constructor(delay = 1) {
    this.delay = delay
  }

  setUpdatedAt(updatedAt = time()) {
    this.updatedAt = updatedAt
  }

  passedDelay() {
    if (this.updatedAt) {
      return time() - this.updatedAt - this.delay > 0
    } else {
      return true
    }
  }
}
