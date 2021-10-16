import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'
import User from 'App/Models/User'

export default class PledgesController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    //create one pledge
    const pledgeAmount: number = request.input('pledgeAmount')
    const projectId = request.input('projectId')
    const userId = request.input('userId')

    let project = await Project.findOrFail(projectId)
    let oldFunds = project.currentFunds
    const newAmount = project.currentFunds + pledgeAmount
    let user = await User.findOrFail(userId)
    await project.related('pledges').attach({
      [user.userId]: {
        pledge_amount: pledgeAmount,
      },
    })
    await project
      .merge({
        currentFunds: newAmount,
      })
      .save()
    return response.json({
      ProjectyouPledged: 'You pledged to this old amount' + oldFunds,
      project,
    })
  }

  public async showbyUserId({ request, response }: HttpContextContract) {
    const projectId = request.input('projectId')
    const userId = request.input('userId')
    const project = await Project.findOrFail(projectId)
    const pledge = await project.related('pledges').pivotQuery().where({ userId: userId })
    return response.json({ Yourpledges: pledge })
  }

  public async show({ request, response, params }: HttpContextContract) {
    const projectId = request.input('projectId')
    const userId = params.id
    const project = await Project.findOrFail(projectId)
    const pledge = await project.related('pledges').pivotQuery().where({ userId: userId })
    return response.json({ Yourpledges: pledge })
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({ request }: HttpContextContract) {
    const projectId = request.input('projectId')
    const pledgeId = request.input('pledgeId')
    const project = await Project.findOrFail(projectId)
    const pledge = await project.related('pledges').pivotQuery().where({ pledge_id: pledgeId })
    let oldFunds = project.currentFunds
    const newAmount = project.currentFunds - pledge[0].pledge_amount

    await project.related('pledges').detach(pledge[0].pledge_id)
  }
}
