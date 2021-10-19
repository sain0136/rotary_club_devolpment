import Route from '@ioc:Adonis/Core/Route'

Route.resource('/url/', 'UrlsController')
Route.post('/allUrls/', 'UrlsController.getAllUrls')
