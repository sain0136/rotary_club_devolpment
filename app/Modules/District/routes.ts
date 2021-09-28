import Route from '@ioc:Adonis/Core/Route'

Route.post('/district', async () => {
  return { message: 'created a district!' }
})

Route.get('/district/:id', async ({ params }) => {
  return { message: `You provided an id of ${params.id}` }
}).where('id', Route.matchers.number())
