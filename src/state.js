import Datetime from './Datetime'

const initialState = new Datetime(3, 10, 2019)

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DAY': {
      try {
        return new Datetime(action.value, state.month, state.year)
      } catch (e) {
        return state
      }
    }
    case 'INC_MONTH': {
      try {
        const month = state.month + 1
        return new Datetime(
          state.day,
          month === 13 ? 1 : month,
          state.year
        )
      } catch (e) {
        return state
      }
    }
    case 'DEC_MONTH': {
      const month = state.month - 1
      try {
        return new Datetime(
          state.day,
          month < 1 ? month + 12 : month,
          state.year
        )
      } catch (e) {
        return state
      }
    }
    case 'INC_YEAR': {
      try {
        return new Datetime(state.day, state.month, state.year + 1)
      } catch (e) {
        return state
      }
    }
    case 'DEC_YEAR': {
      try {
        return new Datetime(state.day, state.month, state.year - 1)
      } catch (e) {
        return state
      }
    }
    default: {
      return state
    }
  }
}

export {
  initialState,
  reducer
}
