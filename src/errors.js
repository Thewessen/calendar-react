class InvalidDay extends Error {
  constructor(message = '') {
    super(message)
    this.name = 'InvalidDay'
  }
}

class InvalidMonth extends Error {
  constructor(message = '') {
    super(message)
    this.name = 'InvalidMonth'
  }
}

class InvalidYear extends Error {
  constructor(message = '') {
    super(message)
    this.name = 'InvalidYear'
  }
}

export {
  InvalidDay,
  InvalidMonth,
  InvalidYear
}
