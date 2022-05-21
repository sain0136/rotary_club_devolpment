/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Drive from '@ioc:Adonis/Core/Drive'
import { extname } from 'path'

import Route from '@ioc:Adonis/Core/Route'
import 'App/Modules/District/routes'
import 'App/Modules/Test/route'
import 'App/Modules/User/routes'
import 'App/Modules/Club/routes'
import 'App/Modules/Url/routes'
import 'App/Modules/Project/routes'
import 'App/Modules/Pledge/routes'
import 'App/Modules/Mail/routes'
Route.get('/', async () => {
  return { hello: 'world' }
})
import { extname } from 'path'
import Route from '@ioc:Adonis/Core/Route'
import Drive from '@ioc:Adonis/Core/Drive'

Route.get('/userImages/local/*', async ({ request, response }) => {
  const location = request.param('*').join('/')
  const { size } = await Drive.getStats(location)
  response.type(extname(location))
  response.header('content-length', size)
  return response.stream(await Drive.getStream(location))
})