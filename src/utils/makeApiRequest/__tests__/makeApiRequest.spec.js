import makeApiRequest from '..';

jest.mock('axios');

describe('util makeApiRequest: ', () => {
  it('should return payload', async () => {
    const payload = await makeApiRequest({
      url: '/search'
    });

    expect(payload).toEqual({ payload: {} });
  });
});
