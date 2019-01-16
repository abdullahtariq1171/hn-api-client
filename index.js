const fetch = require('isomorphic-fetch');

const API_PREFIX = `https://hacker-news.firebaseio.com`

const fetchJSON = url => fetch(url).then(res => res.json())

const defaults = {
  version: 'v0'
}

function storiesCurry(apiPath) {
  return function({version} = defaults) {
    return fetchJSON(`${API_PREFIX}/${version}/${apiPath}.json`)
  }
}

module.exports = {
  getItem: (id, {version: v} = defaults) => fetchJSON(`${API_PREFIX}/${v}/item/${id}.json`),

  getUser: (id, {version: v} = defaults) => fetchJSON(`${API_PREFIX}/${v}/user/${id}.json`),

  getMaxItemID: ({version: v} = defaults) => fetchJSON(`${API_PREFIX}/${v}/maxitem.json`),

  getTopStories: ({version: v} = defaults) => fetchJSON(`${API_PREFIX}/${v}/topstories.json`),

  getNewStories: ({version: v} = defaults) => fetchJSON(`${API_PREFIX}/${v}/newstories.json`),

  getBestStories: ({version: v} = defaults) => fetchJSON(`${API_PREFIX}/${v}/beststories.json`),

  getAskStories: ({version: v} = defaults) => fetchJSON(`${API_PREFIX}/${v}/askstories.json`),

  getShowStories: ({version: v} = defaults) => fetchJSON(`${API_PREFIX}/${v}/showstories.json`),

  getJobStories: ({version: v} = defaults) => fetchJSON(`${API_PREFIX}/${v}/jobstories.json`),

  getUpdates: ({version: v} = defaults) => fetchJSON(`${API_PREFIX}/${v}/updates.json`),
}
