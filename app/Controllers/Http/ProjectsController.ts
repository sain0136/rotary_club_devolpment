import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'
import User from 'App/Models/User'
import GrantType from 'Contracts/Enums/GrantType'
import ProjectRoleType from 'Contracts/Enums/ProjectRoleType'

export default class ProjectsController {
  public async index({ response }: HttpContextContract) {
    const allProjects = await Project.all()
    return response.json({ allProjects })
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const projectName = request.input('project_name')
    const projectTheme = request.input('project_theme')
    const grantType: GrantType = request.input('grant_type')
    const pdfLabel = request.input('pdf_label')
    const fundingGoal = request.input('funding_goal')
    const currentFunds = request.input('current_funds')
    const createdByUserId = request.input('created_by')
    const region = request.input('region')
    const rotaryYear = request.input('rotary_year')
    const roleType: ProjectRoleType = request.input('role_type')

    const newProject = await Project.create({
      projectName: projectName,
      projectTheme: projectTheme,
      grantType: grantType,
      pdfLabel: pdfLabel,
      fundingGoal: fundingGoal,
      currentFunds: currentFunds,
      createdBy: createdByUserId,
      region: region,
      rotaryYear: rotaryYear,
    })
    let user = await User.findOrFail(createdByUserId)
    await newProject.related('projectRole').attach({
      [user.userId]: {
        role: roleType,
      },
    })
    const roleTitle = async (roleType: number) => {
      return ProjectRoleType[roleType]
    }

    const grantTitle = async (grantType: number) => {
      return GrantType[grantType]
    }

    return response.json({
      created: 'new project',
      newProject,
      details:
        'Created by ' +
        user.firstname +
        ' ' +
        user.lastname +
        ' whose role is: ' +
        (await roleTitle(roleType)) +
        ' --->This project grant type is ' +
        (await grantTitle(grantType)),
    })
  }

  public async show({ params, response }: HttpContextContract) {
    const ProjectById = await Project.findOrFail(params.id)
    return response.json({ ProjectById })
  }

  public async showAllProjectsByUser({ params, response }: HttpContextContract) {
    const ProjectsById = await Project.findOrFail(params.id)
    return response.json({ ProjectsById })
  }

  public async edit({}: HttpContextContract) {}

  public async addUserToProject({ request, response }: HttpContextContract) {
    const projectId = request.input('project_id')
    const userId = request.input('user_id')
    const roleType: ProjectRoleType = request.input('role_type')

    let user = await User.findOrFail(userId)
    const project = await Project.findOrFail(projectId)

    await project.related('projectRole').attach({
      [user.userId]: {
        role: roleType,
      },
    })
    const roleTitle = async (roleType: number) => {
      return ProjectRoleType[roleType]
    }
    return response.json({
      addedTo: 'new this project',
      project,
      details:
        'Added' +
        user.firstname +
        ' ' +
        user.lastname +
        ' whose role is: ' +
        (await roleTitle(roleType)),
    })
  }

  public async update({ params, request, response }: HttpContextContract) {
    const projectName = request.input('project_name')
    const projectTheme = request.input('project_theme')
    const grantType: GrantType = request.input('grant_type')
    const pdfLabel = request.input('pdf_label')
    const fundingGoal = request.input('funding_goal')
    const currentFunds = request.input('current_funds')
    const createdByUserId = request.input('created_by')
    const region = request.input('region')
    const rotaryYear = request.input('rotary_year')

    const projectToBeUpdated = await Project.findOrFail(params.id)

    const updatedProject = await projectToBeUpdated
      .merge({
        projectName: projectName,
        projectTheme: projectTheme,
        grantType: grantType,
        pdfLabel: pdfLabel,
        fundingGoal: fundingGoal,
        currentFunds: currentFunds,
        createdBy: createdByUserId,
        region: region,
        rotaryYear: rotaryYear,
      })
      .save()
    return response.json({ updatedProject, Hello: 'old file below', projectToBeUpdated })
  }

  public async destroy({ params, response }: HttpContextContract) {
    let oldProject = await Project.findOrFail(params.id)
    const projectToBeDeleted = await Project.findOrFail(params.id)
    await projectToBeDeleted.related('projectRole').detach()
    await projectToBeDeleted.related('pledges').detach()
    await projectToBeDeleted.delete()
    return response.json({ Deleted: 'old project below', oldProject })
  }
}
