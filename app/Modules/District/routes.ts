import Route from '@ioc:Adonis/Core/Route'

Route.resource('/district/', 'DistrictsController')

Route.get('/district/di/:id', async ({ params }) => {
  return { message: `You provided an id of ${params.id}` }
}).where('id', Route.matchers.number())
