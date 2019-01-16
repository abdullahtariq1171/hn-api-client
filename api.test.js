const hnApi = require('./index');

test('getItem() returns Item', async () => {
  const item = await hnApi.getItem(8863);
  expect(item.id).toBe(8863);
});

test('getUser() returns User', async () => {
  const user = await hnApi.getUser('jl');
  expect(user.id).toBe('jl');
});

test('getMaxItemID() returns number', async () => {
  const maxId = await hnApi.getMaxItemID();
  expect(maxId).toBeTruthy();
});

test('get<stories>()', async () => {
  expect(await hnApi.getTopStories()).toBeInstanceOf(Array);
  expect(await hnApi.getNewStories()).toBeInstanceOf(Array);
  expect(await hnApi.getBestStories()).toBeInstanceOf(Array);
  expect(await hnApi.getAskStories()).toBeInstanceOf(Array);
  expect(await hnApi.getShowStories()).toBeInstanceOf(Array);
  expect(await hnApi.getJobStories()).toBeInstanceOf(Array);
});

test('getUpdates', async () => {
  expect(
    (await hnApi.getUpdates()).items
  ).toBeInstanceOf(Array);
});
