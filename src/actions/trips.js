import actions from '@enums/actions'

const initialize = payload => ({
  type: actions.TRIPS.INIT,
  payload
});

const createNewTrip = payload => ({
  type: actions.TRIPS.NEW_TRIP,
  payload
});

const updateTrip = (index, payload) => ({
  type: actions.TRIPS.UPDATE_TRIP,
  index,
  payload
});

export {
  initialize,
  createNewTrip,
  updateTrip
}