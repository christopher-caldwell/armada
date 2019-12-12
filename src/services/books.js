import client from './client.js'

export default {
  async save({identifier, bookInfo}) {
    const { data } = (await client.post('/book', { identifier, ...bookInfo }))
    return data
  },
  async findAllForUser({ identifier }){
    const { data } = await client.get('/books', {
      params: {
        identifier
      }
    })
    return data
  }
}
