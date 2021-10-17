import Route from '@ioc:Adonis/Core/Route'

Route.resource('/project/', 'ProjectsController')
Route.post('/project/addUser/', 'ProjectsController.addUserToProject')
