import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
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
      project.extraDescriptionsObject = JSON.parse(project.extraDescriptions)
      project.itemisedBudgetArray = JSON.parse(project.itemisedBudget)
    }

    return response.json({ allProjects })
  }

  public async showOneProjectWithPledges({ request, response }: HttpContextContract) {
    const projectId: number = request.input('project_id')
    const project: Project = await Project.findOrFail(projectId)

    const pledges: any[] = await project
      .related('pledges')
      .pivotQuery()
      .select()
      .where({ project_id: project.projectId })
    for await (const pledge of pledges) {
      if (pledge.user_id !== 1) {
        const user: User = await User.findOrFail(pledge.user_id)
        pledge.firstname = user.firstname
        pledge.lastname = user.lastname
        pledge.phone = user.phone
        pledge.email = user.email
      }
    }
    project.pledgesAssociated = pledges

    project.extraDescriptionsObject = JSON.parse(project.extraDescriptions)
    project.itemisedBudgetArray = JSON.parse(project.itemisedBudget)

    return response.json({ project })
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    //create one pledge
    const pledgeAmount: number = request.input('pledge_amount')
    const projectId: number = request.input('project_id')
    const userId: number = request.input('user_id')
    const firstname: string = request.input('firstname')
    const lastname: string = request.input('lastname')
    const phone: string = request.input('phone')
    const email: string = request.input('email')

    const project: Project = await Project.findOrFail(projectId)
    project.extraDescriptionsObject = JSON.parse(project.extraDescriptions)
    project.itemisedBudgetArray = JSON.parse(project.itemisedBudget)

    const oldFunds: number = project.currentFunds
    const newAmount: number = project.currentFunds + pledgeAmount
    const user: User = await User.findOrFail(userId)
    await project.related('pledges').attach({
      [user.userId]: {
        pledge_amount: pledgeAmount,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
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

  public async showAllPledgesByUser({ request, response }: HttpContextContract) {
    const userId: number = request.input('user_id')
    const user: User = await User.findOrFail(userId)
    const pledge: object[] = await Database.query().from('pledge').where({ user_id: user.userId })
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
