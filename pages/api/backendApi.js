import axios from 'axios'

export default axios.create({
  baseURL: 'https://vehicle-api.iamagus.com/v1/'
})
