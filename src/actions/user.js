import actions from '@enums/actions'

const createUser = payload => ({
  type: actions.USERS.CREATE_USER,
  payload
})

export {
  createUser
}