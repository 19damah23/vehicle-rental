import axios from 'axios'

export default axios.create({
  baseURL: 'http://13.229.122.192:8000/v1/'
})
