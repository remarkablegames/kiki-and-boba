class Multiplier {
  value = 1

  set(multiplier: number) {
    this.value *= multiplier
  }

  reset() {
    this.value = 1
  }
}

export const multiplier = new Multiplier()
