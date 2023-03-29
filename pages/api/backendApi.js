import axios from 'axios'

export default axios.create({
  baseURL: 'http://vehicle-api.iamagus.com/v1/'
})
