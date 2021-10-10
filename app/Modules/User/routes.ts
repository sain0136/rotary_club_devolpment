import Route from '@ioc:Adonis/Core/Route'

Route.resource('/user/', 'UsersController')

Route.get('user/:json', 'UsersController.jsonGetById')
