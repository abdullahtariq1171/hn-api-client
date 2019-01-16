# hn-api-client [![npm](https://img.shields.io/npm/v/hn-api-client.svg?maxAge=3600)](https://www.npmjs.com/package/hn-api-client)
A isomorphic api client for [Hacker News API](https://github.com/HackerNews/API)

## Installation

```yarn i hn-api-client```  
or  
```npm i hn-api-client```

## Usage

```js
const hnApiClient = require('hn-api-client')

```

### .getItem(id)
```js
await hnApiClient.getItem(8863);

/*{ 
  by: 'dhouston',
  descendants: 71,
  id: 8863,
  kids: [...],
  title: 'My YC app: Dropbox - Throw away your USB drive',
  type: 'story',
  ...
}*/

```

[Sample Output](https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty)

<br/> 

### .getUser(id)
```js
await hnApiClient.getUser('Malfunction92');

/*{
  created: 1451669897,
  id: 'Malfunction92',
  karma: 34,
  submitted: [ 10867439, 10822491, ... ]
 }*/

```
[Sample Output](https://hacker-news.firebaseio.com/v0/user/jl.json?print=pretty)

<br/> 

### .getMaxItemID(id)
```js
await hnApiClient.getMaxItemID();

/*18920326*/

``` 
[Sample Output](https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty)

<br/> 

### .getTopStories()
```js
await hnApiClient.getTopStories();

/*[
  {by: 'dankohn1', id: 18912321, kids: [18920127, 18919744, ...], score: 179,  ... }, 
  {by: 'vbezhenar', id: 18919543, kids: [18920212, 18919663, ...], score: 22,  ... },
  ...
]*/

/* To get only ids of stories: */
await hnApiClient.getTopStories({onlyIds: true});

/*[
  18912321,
  18919543]
 */

You can use the following similar methods 
await hnApi.getNewStories()
await hnApi.getBestStories()
await hnApi.getAskStories()
await hnApi.getShowStories()
await hnApi.getJobStories()
```

### .getUpdates()
```js
await hnApiClient.getUpdates();


/* {
  items: [18919919, 18916487, 18920263, ...],
  users: ["blopeur", "sascha_sl", "doppp", ...]
*/

```
[Sample Output](https://hacker-news.firebaseio.com/v0/updates.json?print=pretty)





