import Route from '@ioc:Adonis/Core/Route'
import ProjectsController from 'App/Controllers/Http/ProjectsController'

Route.resource('/project/', 'ProjectsController')
Route.post('/project/addUser/', 'ProjectsController.addUserToProject')
