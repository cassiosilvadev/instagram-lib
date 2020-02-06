const URL = 'https://www.instagram.com'

const fetch = require('node-fetch')

module.exports = class Instagram {
   
   getUser(userName) {
        return this.request(userName).then(res => res)
    }

   getStories(userName) {
        return this.request(`stories/${userName}`).then(res => res)
    }

   request(endPoint) {
        return fetch(`${URL}/${endPoint}/?__a=1`)
            .then(res => res.json())
    }
  }
}
