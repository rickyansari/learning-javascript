const axios = require('axios');
let NewsIDs = [9224, 8917, 8952, 8884, 8887, 8869, 8958, 8940, 8908, 9005, 8873, 9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876];

module.exports = {
  concurrentApiCalls: (function getNewsByID(IDs) {
    // It will return and URL

    function gerURL(id) { return `https://hacker-news.firebaseio.com/v0/item/${id}.json?` }
    // It will make API Call and returns promise Object.
    async function fetchData(URL, id) {
      try {
        let apiResponse = await axios.get(URL)
        return { [id]: apiResponse.data.text || '' }
      } catch (error) { return { [id]: '' } }
    }
    // It will return an array of promise Object.
    function fetchCompleteData() {
      return IDs.map((id) => fetchData(gerURL(id), id))
    }
    // Promise.all will wait till all promises are resolved or any one is rejected. 

    return Promise.all(fetchCompleteData()).then(resp => {
      console.log({ success: true, data: resp })
      return { success: true, data: resp }
    }).catch(error => {
      return { success: false }
    })
  })(NewsIDs)
}
