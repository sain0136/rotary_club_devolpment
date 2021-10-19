import Route from '@ioc:Adonis/Core/Route'

Route.resource('/club/', 'ClubsController')
Route.post('/clubmembers/', 'ClubsController.getAllClubMembers')
