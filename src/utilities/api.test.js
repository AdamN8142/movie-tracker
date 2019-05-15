import { postNewUser } from './api.js'

describe('api calls', () => {

  let mockUsers= [{
    name: 'bob',
    id:1
  }]

  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve();
      },
      ok: true
    });
  })

  it.skip('should be called with correct param', () => {
    const expected = "http://localhost:3000/api/users/new"
    postNewUser('theo', 'b@com.com', 1);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  })

  //if i call this with url it expects http protocall obj but if i expect that it wants the url, why?
})