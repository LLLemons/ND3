import axios from 'axios'

const host = 'http://localhost:3001/'

const apiServices = {
  getPosts(url) {
    return axios.get(host+url)
  },
  postPosts(url, data){
    return axios.post(host+url,data)
  }
}

export default apiServices