const hnApi = require('./index');

test('getItem() returns Item', async () => {
  const item = await hnApi.getItem(8863);
  expect(item.id).toBe(8863);
});

test('getItem() with {fetchKids: true}', async () => {
  const item = await hnApi.getItem(8863, {fetchKids: true});
  expect(item.kids[0]).toBeInstanceOf(Object);
});

test('getUser() returns User', async () => {
  const user = await hnApi.getUser('Malfunction92', {fetchSubmitted: true});
  expect(user.id).toBe('Malfunction92');
}, 25000);

test('getMaxItemID() returns number', async () => {
  const maxId = await hnApi.getMaxItemID();
  expect(maxId).toBeTruthy();
});

test('get<stories>()', async () => {
  const topStories = await hnApi.getTopStories();

  expect(topStories).toBeInstanceOf(Array);
  expect(topStories[0]).toBeInstanceOf(Object);

  // expect(await hnApi.getNewStories()).toBeInstanceOf(Array);
  // expect(await hnApi.getBestStories()).toBeInstanceOf(Array);
  // expect(await hnApi.getAskStories()).toBeInstanceOf(Array);
  // expect(await hnApi.getShowStories()).toBeInstanceOf(Array);
  // expect(await hnApi.getJobStories()).toBeInstanceOf(Array);
});

test('getUpdates', async () => {
  expect(
    (await hnApi.getUpdates()).items
  ).toBeInstanceOf(Array);
});
