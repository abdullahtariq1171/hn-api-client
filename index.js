const fetch = require('isomorphic-fetch');

const fetchApiJSON = uri => fetch(`https://hacker-news.firebaseio.com/${uri}.json`).then(r => r.json())

const DEFAULTS = {version: 'v0', onlyIds: false, fetchSubmitted: false, fetchKids: false}

const fetchItems = (ids, version) =>
  Promise.all(ids.map(id => fetchApiJSON(`${version}/item/${id}`)))

function storiesCurry(apiPath) {
  return opts => {
    const {version, onlyIds} = Object.assign({}, DEFAULTS, opts)

    return fetchApiJSON(`${version}${apiPath}`)
      .then(async ids => {
        return onlyIds ? ids : await Promise.all(ids.slice(0, 5).map(id => fetchApiJSON(`${version}/item/${id}`)))
      })
  }
}

function entityCurry(entityType) {
  return (id, opts) => {
    const {version, fetchKids, fetchSubmitted} = Object.assign({}, DEFAULTS, opts)

    return fetchApiJSON(`${version}/${entityType}/${id}`).then(async entity => {
      if(!fetchKids && !fetchSubmitted) return entity;

      if(fetchKids && entityType === 'item') {
        entity.kids = await fetchItems(entity.kids, version)
      } else if (fetchSubmitted && entityType === 'user') {
        entity.submitted = await fetchItems(entity.submitted, version)
      }
      return entity
    })
  }
}

module.exports = {
  getItem: entityCurry('item'),
  getUser: entityCurry('user'),
  getTopStories: storiesCurry('/topstories'),
  getNewStories: storiesCurry('/newstories'),
  getBestStories: storiesCurry('/beststories'),
  getAskStories: storiesCurry('/askstories'),
  getShowStories: storiesCurry('/showstories'),
  getJobStories: storiesCurry('/jobstories'),
  getMaxItemID: ({version: v} = DEFAULTS) => fetchApiJSON(`${v}/maxitem`),
  getUpdates: ({version: v} = DEFAULTS) => fetchApiJSON(`${v}/updates`),
}
