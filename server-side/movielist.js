const axios = require('axios')
const KEY = '931634857e01440b860e75fdccc372b5'
const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&language=en-US&page=1`

options = {
        method: 'GET',
        url: BASE_URL,
        
        
}

module.exports = {
        getUpcoming: () => axios(options).catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        })
}