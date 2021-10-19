import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'
import User from 'App/Models/User'

export default class PledgesController {
  public async index({ response }: HttpContextContract) {
    const allProjects: Project[] = await Project.all()
    for (const project of allProjects) {
      const pledges: object[] = await project
        .related('pledges')
        .pivotQuery()
        .select()
        .where({ project_id: project.projectId })
      project.pledgesAssociated = pledges
    }

    return response.json({ allProjects })
  }

  public async showOneProjectWithPledges({ request, response }: HttpContextContract) {
    const projectId: number = request.input('project_id')
    const project: Project = await Project.findOrFail(projectId)

    const pledges: object[] = await project
      .related('pledges')
      .pivotQuery()
      .select()
      .where({ project_id: project.projectId })
    project.pledgesAssociated = pledges

    return response.json({ project })
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    //create one pledge
    const pledgeAmount: number = request.input('pledge_amount')
    const projectId: number = request.input('project_id')
    const userId: number = request.input('user_id')

    const project: Project = await Project.findOrFail(projectId)
    const oldFunds: number = project.currentFunds
    const newAmount: number = project.currentFunds + pledgeAmount
    const user: User = await User.findOrFail(userId)
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
      ProjectyouPledged: 'You pledged to this old amount' + oldFunds + ' to this project:',
      project,
    })
  }

  public async showPledgesByProjectIdByUserId({ request, response }: HttpContextContract) {
    const projectId: number = request.input('project_id')
    const userId: number = request.input('user_id')
    const project: Project = await Project.findOrFail(projectId)
    const pledge: object[] = await project.related('pledges').pivotQuery().where({ userId: userId })
    return response.json({ Yourpledges: pledge })
  }

  public async show({ request, response, params }: HttpContextContract) {
    const projectId: number = request.input('project_id')
    const userId: number = params.id
    const project: Project = await Project.findOrFail(projectId)
    const pledge: object[] = await project.related('pledges').pivotQuery().where({ userId: userId })
    return response.json({ Yourpledges: pledge })
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({ request, response }: HttpContextContract) {
    const projectId: number = request.input('project_id')
    const pledgeId: number = request.input('pledge_id')
    const project: Project = await Project.findOrFail(projectId)
    const pledge: {} = await project
      .related('pledges')
      .pivotQuery()
      .select()
      .where({ pledge_id: pledgeId })
    const oldFunds: number = project.currentFunds
    const newAmount: number = oldFunds - pledge[0].pledge_amount
    await project
      .merge({
        currentFunds: newAmount,
      })
      .save()
    await project.related('pledges').pivotQuery().where({ pledge_id: pledgeId }).del()

    return response.json({ pledge })
  }
}
