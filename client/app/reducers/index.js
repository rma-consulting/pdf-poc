import { combineReducers } from 'redux'
import profiles from './profiles'
import profile from './profiles/profile'
import practices from './practices'
import practice from './practices/practice'
import skills from './skills'
import skill from './skills/skill'
import users from './users'
import user from './users/user'

const reducers = combineReducers({
  profiles,
  profile,
  practices,
  practice,
  skills,
  skill,
  users,
  user
})

export default reducers
