import Route from '@ioc:Adonis/Core/Route'

Route.resource('/project/', 'ProjectsController')
Route.post('/project/addUser/', 'ProjectsController.addUserToProject')
Route.post('/project/usersProjects/', 'ProjectsController.showAllProjectsByUser')
Route.post('/project/clubProjects/', 'ProjectsController.showAllProjectsByClub')
Route.post('/project/districtProjects/', 'ProjectsController.showAllProjectsByDistrict')
Route.post('/project/projectAdmins/', 'ProjectsController.showAllAdminsForProject')
Route.post('/project/paginate', 'ProjectsController.paginationIndex')
Route.post('/project/delete', 'ProjectsController.deleteProjectByProjectId')
Route.post('/project/showProjectByIdPost', 'ProjectsController.showProjectByIdPost')
