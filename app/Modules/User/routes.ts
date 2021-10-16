import Route from '@ioc:Adonis/Core/Route'

Route.resource('/user/', 'UsersController')

Route.post('user/json/', 'UsersController.jsonGetById')
