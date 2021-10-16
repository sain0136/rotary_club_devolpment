import Route from '@ioc:Adonis/Core/Route'

Route.resource('/pledge/', 'PledgesController')

Route.post('/pledge/user', 'PledgesController.showbyUserId')
