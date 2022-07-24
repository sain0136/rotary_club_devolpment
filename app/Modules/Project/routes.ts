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
Route.post('/project/projectsForApproval', 'ProjectsController.showAllProjectsForApproval')
Route.post('/project/filter', 'ProjectsController.paginationFilter')

Route.post('/project/updateById', 'ProjectsController.updateById')
Route.post('/project/imageUpload', 'ProjectsController.imageUpload')
Route.post('/project/projectStatus', 'ProjectsController.updateProjectStatus')
