import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'
import User from 'App/Models/User'
import AreaFocus from 'Contracts/Enums/AreaFocus'
import GrantType from 'Contracts/Enums/GrantType'
import ProjectRoleType from 'Contracts/Enums/ProjectRoleType'
import { DateTime } from 'luxon'

export default class ProjectsController {
  public async index({ response }: HttpContextContract) {
    let allProjects: Project[] = await Project.all()
    for await (const project of allProjects) {
      const conver: Object = JSON.parse(project.extraDescriptions)
      project.extraDescriptionsObject = conver
      project.itemisedBudgetArray = JSON.parse(project.itemisedBudget)
    }
    return response.json({ allProjects })
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const projectName: string = request.input('project_name')
    const projectTheme: string = request.input('project_theme')
    const areaFocus: AreaFocus = request.input('area_focus')
    const grantType: GrantType = request.input('grant_type')
    const estimatedCompletion: string = request.input('estimated_completion')
    const fundingGoal: number = request.input('funding_goal')
    const currentFunds: number = request.input('current_funds')
    const createdByUserId: number = request.input('created_by')
    const region: string = request.input('region')
    const rotaryYear: number = request.input('rotary_year')
    const roleType: ProjectRoleType = request.input('role_type')
    const extraDescriptions: any = JSON.stringify(request.input('extra_descriptions'))
    const itemisedBudget: any = JSON.stringify(request.input('itemised_budget'))
    const convertedEstimatedCompletion: DateTime = DateTime.fromFormat(estimatedCompletion, 'D')
    const clubId: number = request.input('club_id')
    const districtId: number = request.input('district_id')

    const newProject = await Project.create({
      projectName: projectName,
      projectTheme: projectTheme,
      grantType: grantType,
      areaFocus: areaFocus,
      estimatedCompletion: convertedEstimatedCompletion,
      fundingGoal: fundingGoal,
      currentFunds: currentFunds,
      createdBy: createdByUserId,
      region: region,
      rotaryYear: rotaryYear,
      extraDescriptions: extraDescriptions,
      itemisedBudget: itemisedBudget,
      clubId: clubId,
      districtId: districtId,
    })
    const user: User = await User.findOrFail(createdByUserId)
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
    newProject.extraDescriptionsObject = JSON.parse(extraDescriptions)
    newProject.itemisedBudgetArray = JSON.parse(itemisedBudget)
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
    const projectId: number = parseInt(params.id)
    const ProjectById: Project = await Project.findOrFail(projectId)
    return response.json({ ProjectById })
  }

  public async showAllProjectsByUser({ request, response }: HttpContextContract) {
    const userId: number = request.input('user_id')
    const user: User = await User.findOrFail(userId)
    const usersProjects: Project[] = []
    const projects: Project[] = await Project.query().select().where({ created_by: user.userId })
    if (!projects.length == false) {
      projects.forEach((element) => {
        usersProjects.push(element)
      })
    }

    return response.json({ usersProjects })
  }
  public async showAllProjectsByClub({ request, response }: HttpContextContract) {
    const clubID: number = request.input('club_id')
    const allMembers: User[] = await User.query().where({ clubId: clubID })
    const projects: any[] = []
    for await (const user of allMembers) {
      const usersProjects: Project[] = await Project.query()
        .select()
        .where({ created_by: user.userId })
      if (!usersProjects.length == false) {
        usersProjects.forEach((element) => {
          element.extraDescriptionsObject = JSON.parse(element.extraDescriptions)
          element.itemisedBudgetArray = JSON.parse(element.itemisedBudget)
          projects.push(element)
        })
      }
    }

    return response.json({ projects })
  }
  public async showAllProjectsByDistrict({ request, response }: HttpContextContract) {
    const districtId: number = request.input('district_Id')
    const allProjects: Project[] = await Project.query().where({ districtId: districtId })
    /* const projects: any[] = []
         for await (const user of allMembers) {
      const usersProjects: Project[] = await Project.query()
        .select()
        .where({ created_by: user.userId })
      if (!usersProjects.length == false) {
        usersProjects.forEach((element) => {
          element.extraDescriptionsObject = JSON.parse(element.extraDescriptions)
          element.itemisedBudgetArray = JSON.parse(element.itemisedBudget)
          projects.push(element)
        })
      }
    } */
    return response.json({ allProjects })
  }
  public async edit({}: HttpContextContract) {}

  public async addUserToProject({ request, response }: HttpContextContract) {
    const projectId: number = request.input('project_id')
    const userId: number = request.input('user_id')
    const roleType: ProjectRoleType = request.input('role_type')

    let user: User = await User.findOrFail(userId)
    const project: Project = await Project.findOrFail(projectId)

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
    const projectName: string = request.input('project_name')
    const projectTheme: string = request.input('project_theme')
    const areaFocus: AreaFocus = request.input('area_focus')
    const grantType: GrantType = request.input('grant_type')
    const estimatedCompletion: string = request.input('estimated_completion')
    const fundingGoal: number = request.input('funding_goal')
    const currentFunds: number = request.input('current_funds')
    const createdByUserId: number = request.input('created_by')
    const region: string = request.input('region')
    const rotaryYear: number = request.input('rotary_year')
    const extraDescriptions: any = JSON.stringify(request.input('extra_descriptions'))
    const itemisedBudget: any = JSON.stringify(request.input('itemised_budget'))
    var convertedEstimatedCompletion: any
    if (estimatedCompletion != null && estimatedCompletion != undefined) {
      convertedEstimatedCompletion = DateTime.fromFormat(estimatedCompletion, 'D')
    } else {
      convertedEstimatedCompletion = undefined
    }

    const clubId: number = request.input('club_id')
    const oldPoject: Project = await Project.findOrFail(params.id)

    const projectToBeUpdated: Project = await Project.findOrFail(params.id)

    const updatedProject: Project = await projectToBeUpdated
      .merge({
        projectName: projectName,
        projectTheme: projectTheme,
        grantType: grantType,
        areaFocus: areaFocus,
        estimatedCompletion: convertedEstimatedCompletion,
        fundingGoal: fundingGoal,
        currentFunds: currentFunds,
        createdBy: createdByUserId,
        region: region,
        rotaryYear: rotaryYear,
        extraDescriptions: extraDescriptions,
        itemisedBudget: itemisedBudget,
        clubId: clubId,
      })
      .save()
    oldPoject.extraDescriptionsObject = JSON.parse(oldPoject.extraDescriptions)
    oldPoject.itemisedBudgetArray = JSON.parse(oldPoject.itemisedBudget)
    updatedProject.extraDescriptionsObject = JSON.parse(extraDescriptions)
    updatedProject.itemisedBudgetArray = JSON.parse(itemisedBudget)
    return response.json({
      updatedProject,
      Hello: 'old file below',
      oldPoject,
    })
  }

  public async destroy({ params, response }: HttpContextContract) {
    const userId: number = parseInt(params.id)
    const oldProject: Project = await Project.findOrFail(userId)
    const projectToBeDeleted: Project = await Project.findOrFail(userId)
    await projectToBeDeleted.related('projectRole').detach()
    await projectToBeDeleted.related('pledges').detach()
    await projectToBeDeleted.delete()
    return response.json({ Deleted: 'old project below', oldProject })
  }
}
