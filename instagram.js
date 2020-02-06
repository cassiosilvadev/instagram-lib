const URL = 'https://www.instagram.com'

const fetch = require('node-fetch')

module.exports = class Instagram {
   
   static getUser(userName) {
        return this.request(userName)
    }

   static getStories(userName) {
        return this.request(`stories/${userName}`)
    }

   static request(endPoint) {
        return fetch(`${URL}/${endPoint}/?__a=1`)
            .then(res => res.json())
    }
  }
}
