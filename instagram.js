const URL = 'https://www.instagram.com'

const fetch = require('node-fetch')

module.exports = class Instagram {
   
   getUser(userName) {
        return this.request(userName)
    }

   getStories(userName) {
        return this.request(`stories/${userName}`)
    }

   request(endPoint) {
        return fetch(`${URL}/${endPoint}/?__a=1`)
            .then(res => res.json())
    }
  }
}
