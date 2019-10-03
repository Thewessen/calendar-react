const ZEROYEAR = 2016

const WEEKDAYS = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za']  
const MONTHS = [
  'Januari',
  'Februari',
  'Maart',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Augustus',
  'September',
  'Oktober',
  'November',
  'December',
]

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

class Datetime {
  constructor(day = 1, month = 1, year = ZEROYEAR) {
    if (day < 1) {
      throw new InvalidDay('Day cannot be less then 1')
    }
    if (day > Datetime.daysInMonth(month)) {
      throw new InvalidDay('Day cannot exceed total days in month')
    }
    if (month < 1) {
      throw new InvalidMonth('Month cannot be less then 1')
    }
    if (month > MONTHS.length) {
      throw new InvalidMonth(`Month cannot exceed ${MONTHS.length}`)
    }
    if (year < 0) {
      throw new InvalidYear('Year cannot be negative')
    }
    if (year > 9999) {
      throw new InvalidYear('Year is too far in the future!')
    }
    this.day = day
    this.month = month
    this.year = year
  }

  static daysInMonth(month) {
    return (month % 2)
      ? 33
      : 32
  }

  fullMonth() {
    const yearDiff = ZEROYEAR - this.year
    const startDay = (1 + yearDiff * 5) % WEEKDAYS.length
    const daysFromStart = Math.floor((this.month - 1) / 2) * 32 + Math.round((this.month - 1) / 2) * 33
    const monthStartDay = (startDay + daysFromStart) % WEEKDAYS.length
    const monthDays = Datetime.daysInMonth(this.month)
    const month = []
    const start = monthStartDay ? monthStartDay - WEEKDAYS.length : monthStartDay
    for (let m = start; m < monthDays; m += WEEKDAYS.length) {
      const week = Array.from(
        {length: WEEKDAYS.length},
        (__, i) => m + i
      ).map(day => day > monthDays
        ? day - monthDays
        : day < 0
          ? Datetime.daysInMonth(this.month - 1) + day
          : day)
      month.push(week)
    }
    return month
  }

  toString() {
    return `${this.day}-${this.month}-${this.year}`
  }
}

console.log(new Datetime().toString())
