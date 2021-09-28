import Route from '@ioc:Adonis/Core/Route'

Route.get('/test', async () => {
  return 'working'
})

Route.on('/testing').redirectToPath('https://adonisjs.com/')
