import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Club from 'App/Models/Club'
import Project from 'App/Models/Project'
import User from 'App/Models/User'
import GrantType from 'Contracts/Enums/GrantType'
import ProjectRoleType from 'Contracts/Enums/ProjectRoleType'
import { DateTime } from 'luxon'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import ProjectStatus from 'Contracts/Enums/ProjectStatus'
import Drive from '@ioc:Adonis/Core/Drive'

export default class ProjectsController {
  public async index({ response }: HttpContextContract) {
    let allProjects: Project[] = await Project.all()

    for await (const project of allProjects) {
      project.extraDescriptionsObject = JSON.parse(project.extraDescriptions)
      project.itemisedBudgetArray = JSON.parse(project.itemisedBudget)
      project.areaFocusObject = JSON.parse(project.areaFocus)
      project.hostclubInformationObject = JSON.parse(project.hostclubInformation)
    }

    return response.json({ allProjects })
  }

  public async paginationIndex({ request, response }: HttpContextContract) {
    const districtBoolean: number = request.input('district_boolean')
    const id: number = request.input('id')
    const currentPage: number = request.input('current_page')
    const limit: number = request.input('limit')
    if (districtBoolean) {
      const projects: ModelPaginatorContract<Project> = await Project.query()
        .select('*')
        .where({ districtId: id })
        .paginate(currentPage, limit)
      let typeCastProjects = projects as unknown as Project[]
      for await (const project of typeCastProjects) {
        project.areaFocusObject = JSON.parse(project.areaFocus)
      }
      return response.json({ projects })
    } else {
      const projects: ModelPaginatorContract<Project> = await Project.query()
        .select('*')
        .where({ clubId: id })
        .paginate(currentPage, limit)
      let typeCastProjects = projects as unknown as Project[]
      for await (const project of typeCastProjects) {
        project.areaFocusObject = JSON.parse(project.areaFocus)
      }
      return response.json({ projects })
    }
  }

  public async create({}: HttpContextContract) {}

  public async imageUpload({ request, response }: HttpContextContract) {
    const projectImage = request.file('project_image')
    let name: any = JSON.parse(request.input('name'))
    if (!projectImage) {
      return response.json({ error: 'error' })
    }

    await projectImage.moveToDisk('local')
    const fileName = projectImage.fileName
    const theUrl = await Drive.getUrl(String('local/' + fileName))

    return response.json({
      name: fileName,
      url: 'http://74.208.135.85' + theUrl,
      postname: name.name,
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const projectName: string = request.input('project_name')
    const projectTheme: string = request.input('project_theme')
    const grantType: GrantType = request.input('grant_type')
    const startDate: string = request.input('start_date')
    const estimatedCompletion: string = request.input('estimated_completion')

    const region: string = request.input('region')
    const rotaryYear: number = request.input('rotary_year')
    const projectStatus: string = request.input('project_status')
    const country: string = request.input('country')

    const areaFocus: any = request.input('area_focus')

    const extraDescriptions: any = request.input('extra_descriptions')
    const hostclubInformation: any = request.input('hostclub_information')

    const intialSponsorClubContribution: number = request.input('intial_sponsor_club_contribution')
    const coOperatingOrganisationContribution: number = request.input(
      'co_operating_organisation_contribution'
    )
    const districtSimplifiedGrantRequest: number = request.input(
      'district_simplified_grant_request'
    )
    const districtMatchingGrantRequest: number = request.input('district_matching_grant_request')
    const fundingGoal: number = request.input('funding_goal')
    const currentFunds: number = request.input('current_funds')
    const anticipatedFunding: number = request.input('anticipated_funding')

    const itemisedBudget: any = request.input('itemised_budget')

    let projectImage = request.file('image')
    let imageLink: string = ''
    if (projectImage) {
      await projectImage.moveToDisk('local')
      const fileName = projectImage.fileName
      const theUrl = await Drive.getUrl(String('local/' + fileName))
      imageLink = 'http://74.208.135.85' + theUrl
    }

    const roleType: ProjectRoleType = request.input('role_type')
    const createdByUserId: number = request.input('created_by')
    const clubId: number = request.input('club_id')
    let districtId: number = request.input('district_id')

    const convertedEstimatedCompletion: DateTime = DateTime.fromFormat(estimatedCompletion, 'D')

    if (grantType == 1) {
      if (districtId == null || districtId == undefined || districtId < 1) {
        const club: Club[] = await Club.query().where({ club_id: clubId })
        districtId = club[0].districtId
      }

      let newProject = await Project.create({
        projectName: projectName,
        projectTheme: projectTheme,
        grantType: GrantType[grantType],
        areaFocus: areaFocus,
        estimatedCompletion: convertedEstimatedCompletion,
        fundingGoal: fundingGoal,
        anticipatedFunding: anticipatedFunding,
        createdBy: createdByUserId,
        region: region,
        rotaryYear: rotaryYear,
        clubId: clubId,
        country: country,
        districtId: districtId,
        projectStatus: ProjectStatus[projectStatus],
        imageLink: imageLink,
      })
      const user: User = await User.findOrFail(createdByUserId)
      await newProject.related('projectRole').attach({
        [user.userId]: {
          role: roleType,
        },
      })
      if (
        newProject.anticipatedFunding == newProject.fundingGoal &&
        newProject.projectStatus == 'Looking for funding'
      ) {
        await newProject
          .merge({
            projectStatus: ProjectStatus[2],
          })
          .save()
      }
      const roleTitle = ProjectRoleType[roleType]

      newProject['projectRoleTitle'] = roleTitle

      return response.json({
        created: 'a new project',
        newProject,
        details:
          'Created by ' +
          user.firstname +
          ' ' +
          user.lastname +
          ' whose role is: ' +
          roleTitle +
          ' --->This project grant type is ' +
          newProject.grantType,
      })
    } else if (grantType == 2) {
      const convertedStartDate: DateTime = DateTime.fromFormat(startDate, 'D')
      if (districtId == null || districtId == undefined || districtId < 1) {
        const club: Club[] = await Club.query().where({ club_id: clubId })
        districtId = club[0].districtId
      }

      const newProject = await Project.create({
        grantType: GrantType[grantType],
        projectStatus: ProjectStatus[projectStatus],
        rotaryYear: rotaryYear,

        projectName: projectName,
        projectTheme: projectTheme,
        country: country,
        region: region,
        startDate: convertedStartDate,
        estimatedCompletion: convertedEstimatedCompletion,

        areaFocus: areaFocus,

        extraDescriptions: extraDescriptions,

        itemisedBudget: itemisedBudget,

        intialSponsorClubContribution: intialSponsorClubContribution,
        coOperatingOrganisationContribution: coOperatingOrganisationContribution,
        districtSimplifiedGrantRequest: districtSimplifiedGrantRequest,

        anticipatedFunding: anticipatedFunding,
        fundingGoal: fundingGoal,
        currentFunds: currentFunds,

        imageLink: imageLink,

        createdBy: createdByUserId,
        clubId: clubId,
        districtId: districtId,
      })
      const user: User = await User.findOrFail(createdByUserId)
      await newProject.related('projectRole').attach({
        [user.userId]: {
          role: roleType,
        },
      })
      if (
        newProject.anticipatedFunding == newProject.fundingGoal &&
        newProject.projectStatus == 'Looking for funding'
      ) {
        await newProject
          .merge({
            projectStatus: ProjectStatus[2],
          })
          .save()
      }
      const roleTitle = ProjectRoleType[roleType]
      newProject['projectRoleTitle'] = roleTitle

      newProject.extraDescriptionsObject = JSON.parse(extraDescriptions)
      newProject.itemisedBudgetArray = JSON.parse(itemisedBudget)
      newProject.areaFocusObject = JSON.parse(areaFocus)
      return response.json({
        newProject,
        details:
          'Created by ' +
          user.firstname +
          ' ' +
          user.lastname +
          ' whose role is: ' +
          roleTitle +
          ' --->This project grant type is ' +
          newProject.grantType,
      })
    } else if (grantType == 3) {
      const convertedStartDate: DateTime = DateTime.fromFormat(startDate, 'D')
      if (districtId == null || districtId == undefined || districtId < 1) {
        const club: Club[] = await Club.query().where({ club_id: clubId })
        districtId = club[0].districtId
      }
      const newProject = await Project.create({
        grantType: GrantType[grantType],
        projectStatus: ProjectStatus[projectStatus],
        rotaryYear: rotaryYear,

        projectName: projectName,
        projectTheme: projectTheme,
        country: country,
        region: region,
        startDate: convertedStartDate,
        estimatedCompletion: convertedEstimatedCompletion,

        areaFocus: areaFocus,

        extraDescriptions: extraDescriptions,
        hostclubInformation: hostclubInformation,

        itemisedBudget: itemisedBudget,

        intialSponsorClubContribution: intialSponsorClubContribution,
        coOperatingOrganisationContribution: coOperatingOrganisationContribution,
        districtMatchingGrantRequest: districtMatchingGrantRequest,

        anticipatedFunding: anticipatedFunding,
        fundingGoal: fundingGoal,
        currentFunds: currentFunds,

        imageLink: imageLink,

        createdBy: createdByUserId,
        clubId: clubId,
        districtId: districtId,
      })
      const user: User = await User.findOrFail(createdByUserId)
      await newProject.related('projectRole').attach({
        [user.userId]: {
          role: roleType,
        },
      })
      if (
        newProject.anticipatedFunding == newProject.fundingGoal &&
        newProject.projectStatus == 'Looking for funding'
      ) {
        await newProject
          .merge({
            projectStatus: ProjectStatus[2],
          })
          .save()
      }
      const roleTitle = ProjectRoleType[roleType]
      newProject['projectRoleTitle'] = roleTitle

      newProject.extraDescriptionsObject = JSON.parse(extraDescriptions)
      newProject.itemisedBudgetArray = JSON.parse(itemisedBudget)
      newProject.areaFocusObject = JSON.parse(areaFocus)
      newProject.hostclubInformationObject = JSON.parse(hostclubInformation)
      return response.json({
        newProject,
        details:
          'Created by ' +
          user.firstname +
          ' ' +
          user.lastname +
          ' whose role is: ' +
          roleTitle +
          ' --->This project grant type is ' +
          newProject.grantType,
      })
    } else {
      return response.json('no')
    }
  }

  public async show({ params, response }: HttpContextContract) {
    const projectId: number = parseInt(params.id)
    const ProjectById: Project = await Project.findOrFail(projectId)
    const projectAdmins: any[] = await ProjectById.related('projectRole')
      .pivotQuery()
      .where({ project_id: projectId })
    return response.json({ ProjectById, projectPermited: projectAdmins })
  }
  public async showProjectByIdPost({ request, response }: HttpContextContract) {
    const projectId: number = request.input('project_id')
    const ProjectById: Project = await Project.findOrFail(projectId)
    ProjectById.extraDescriptionsObject = JSON.parse(ProjectById.extraDescriptions)
    ProjectById.itemisedBudgetArray = JSON.parse(ProjectById.itemisedBudget)
    ProjectById.areaFocusObject = JSON.parse(ProjectById.areaFocus)
    ProjectById.hostclubInformationObject = JSON.parse(ProjectById.hostclubInformation)

    const projectAdmins: any[] = await ProjectById.related('projectRole')
      .pivotQuery()
      .where({ project_id: projectId })
    return response.json({ ProjectById, projectPermited: projectAdmins })
  }

  public async showAllProjectsByUser({ request, response }: HttpContextContract) {
    const userId: number = request.input('user_id')
    const user: User = await User.findOrFail(userId)
    const projects: Project[] = await Project.query().select().where({ created_by: user.userId })
    if (projects.length > 0) {
      for await (const project of projects) {
        project.extraDescriptionsObject = JSON.parse(project.extraDescriptions)
        project.itemisedBudgetArray = JSON.parse(project.itemisedBudget)
        project.areaFocusObject = JSON.parse(project.areaFocus)
        project.hostclubInformationObject = JSON.parse(project.hostclubInformation)
      }
    }
    return response.json({ projects })
  }
  public async showAllProjectsByClub({ request, response }: HttpContextContract) {
    const clubID: number = request.input('club_id')
    const allMembers: User[] = await User.query().where({ clubId: clubID })
    const projects: any[] = []
    for await (const user of allMembers) {
      const usersProjects: Project[] = await Project.query()
        .select()
        .where({ created_by: user.userId })
      if (usersProjects.length != 0) {
        for await (const project of usersProjects) {
          project.extraDescriptionsObject = JSON.parse(project.extraDescriptions)
          project.itemisedBudgetArray = JSON.parse(project.itemisedBudget)
          project.areaFocusObject = JSON.parse(project.areaFocus)
          project.hostclubInformationObject = JSON.parse(project.hostclubInformation)
        }
      }
    }

    return response.json({ projects })
  }
  public async showAllProjectsByDistrict({ request, response }: HttpContextContract) {
    const districtId: number = request.input('district_id')
    const allProjects: Project[] = await Project.query().where({ districtId: districtId })
    for await (const project of allProjects) {
      project.extraDescriptionsObject = JSON.parse(project.extraDescriptions)
      project.itemisedBudgetArray = JSON.parse(project.itemisedBudget)
      project.areaFocusObject = JSON.parse(project.areaFocus)
      project.hostclubInformationObject = JSON.parse(project.hostclubInformation)
    }
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
  public async showAllAdminsForProject({ request, response }: HttpContextContract) {
    const projectId: number = request.input('project_id')
    let project: Project = await Project.findOrFail(projectId)
    const projectAdmins: any[] = await project
      .related('projectRole')
      .pivotQuery()
      .where({ project_id: projectId })
    return response.json({ projectPermited: projectAdmins })
  }
  public async update({}: HttpContextContract) {}

  public async updateProjectStatus({ request, response }: HttpContextContract) {
    const projectId: number = request.input('project_id')
    const projectStatus: string = request.input('project_status')

    const projectToBeUpdated: Project = await Project.findOrFail(projectId)

    await projectToBeUpdated
      .merge({
        projectStatus: ProjectStatus[projectStatus],
      })
      .save()
  }

  public async updateById({ request, response }: HttpContextContract) {
    const projectId: number = request.input('project_id')

    const projectName: string = request.input('project_name')
    const projectTheme: string = request.input('project_theme')
    const grantType: GrantType = request.input('grant_type')
    const startDate: string = request.input('start_date')
    const estimatedCompletion: string = request.input('estimated_completion')

    const region: string = request.input('region')
    const rotaryYear: number = request.input('rotary_year')
    const projectStatus: string = request.input('project_status')
    const country: string = request.input('country')

    const areaFocus: any = request.input('area_focus')

    const extraDescriptions: any = request.input('extra_descriptions')
    const hostclubInformation: any = request.input('hostclub_information')

    const intialSponsorClubContribution: number = request.input('intial_sponsor_club_contribution')
    const coOperatingOrganisationContribution: number = request.input(
      'co_operating_organisation_contribution'
    )
    const districtSimplifiedGrantRequest: number = request.input(
      'district_simplified_grant_request'
    )
    const districtMatchingGrantRequest: number = request.input('district_matching_grant_request')
    const fundingGoal: number = request.input('funding_goal')
    const currentFunds: number = request.input('current_funds')
    const anticipatedFunding: number = request.input('anticipated_funding')

    const itemisedBudget: any = request.input('itemised_budget')
    const oldImageLink: any = request.input('image_link')

    let projectImage = request.file('image')
    let imageLink: string = ''
    if (projectImage) {
      await projectImage.moveToDisk('local')
      const fileName = projectImage.fileName
      const theUrl = await Drive.getUrl(String('local/' + fileName))
      imageLink = 'http://74.208.135.85' + theUrl
    } else {
      imageLink = oldImageLink
    }

    const convertedEstimatedCompletion: DateTime = DateTime.fromFormat(estimatedCompletion, 'D')

    const oldProject: Project = await Project.findOrFail(projectId)

    const projectToBeUpdated: Project = await Project.findOrFail(projectId)
    if (grantType == 1) {
      let updatedProject: Project = await projectToBeUpdated
        .merge({
          projectName: projectName,
          projectTheme: projectTheme,
          grantType: GrantType[grantType],
          areaFocus: areaFocus,
          estimatedCompletion: convertedEstimatedCompletion,
          fundingGoal: fundingGoal,
          currentFunds: currentFunds,
          anticipatedFunding: anticipatedFunding,
          region: region,
          country: country,
          imageLink: imageLink,
        })
        .save()
      if (
        updatedProject.anticipatedFunding == updatedProject.fundingGoal &&
        updatedProject.projectStatus == 'Looking for funding'
      ) {
        await updatedProject
          .merge({
            projectStatus: ProjectStatus[2],
          })
          .save()
      }
      return response.json({
        updatedProject,
        Hello: 'old file below',
        oldPoject: oldProject,
      })
    } else if (grantType == 2) {
      const convertedStartDate: DateTime = DateTime.fromFormat(startDate, 'D')

      let updatedProject: Project = await projectToBeUpdated
        .merge({
          projectStatus: ProjectStatus[projectStatus],
          rotaryYear: rotaryYear,

          projectName: projectName,
          projectTheme: projectTheme,
          country: country,
          region: region,
          startDate: convertedStartDate,
          estimatedCompletion: convertedEstimatedCompletion,

          areaFocus: areaFocus,

          extraDescriptions: extraDescriptions,

          itemisedBudget: itemisedBudget,
          intialSponsorClubContribution: intialSponsorClubContribution,
          coOperatingOrganisationContribution: coOperatingOrganisationContribution,
          districtSimplifiedGrantRequest: districtSimplifiedGrantRequest,

          anticipatedFunding: anticipatedFunding,
          fundingGoal: fundingGoal,
          currentFunds: currentFunds,

          imageLink: imageLink,
        })
        .save()
      oldProject.extraDescriptionsObject = JSON.parse(oldProject.extraDescriptions)
      oldProject.itemisedBudgetArray = JSON.parse(oldProject.itemisedBudget)
      oldProject.areaFocusObject = JSON.parse(oldProject.areaFocus)

      updatedProject.extraDescriptionsObject = JSON.parse(extraDescriptions)
      updatedProject.itemisedBudgetArray = JSON.parse(itemisedBudget)
      updatedProject.areaFocusObject = JSON.parse(updatedProject.areaFocus)

      if (
        updatedProject.anticipatedFunding == updatedProject.fundingGoal &&
        updatedProject.projectStatus == 'Looking for funding'
      ) {
        await updatedProject
          .merge({
            projectStatus: ProjectStatus[2],
          })
          .save()
      }
      return response.json({
        updatedProject,
        Hello: 'old file below',
        oldPoject: oldProject,
      })
    } else if (grantType == 3) {
      const convertedStartDate: DateTime = DateTime.fromFormat(startDate, 'D')

      let updatedProject: Project = await projectToBeUpdated
        .merge({
          projectStatus: ProjectStatus[projectStatus],
          rotaryYear: rotaryYear,

          projectName: projectName,
          projectTheme: projectTheme,
          country: country,
          region: region,
          startDate: convertedStartDate,
          estimatedCompletion: convertedEstimatedCompletion,

          areaFocus: areaFocus,
          hostclubInformation: hostclubInformation,
          extraDescriptions: extraDescriptions,

          itemisedBudget: itemisedBudget,

          intialSponsorClubContribution: intialSponsorClubContribution,
          coOperatingOrganisationContribution: coOperatingOrganisationContribution,
          districtMatchingGrantRequest: districtMatchingGrantRequest,

          anticipatedFunding: anticipatedFunding,
          fundingGoal: fundingGoal,
          currentFunds: currentFunds,

          imageLink: imageLink,
        })
        .save()
      oldProject.extraDescriptionsObject = JSON.parse(oldProject.extraDescriptions)
      oldProject.itemisedBudgetArray = JSON.parse(oldProject.itemisedBudget)
      oldProject.areaFocusObject = JSON.parse(oldProject.areaFocus)
      oldProject.hostclubInformationObject = JSON.parse(oldProject.hostclubInformation)

      updatedProject.extraDescriptionsObject = JSON.parse(extraDescriptions)
      updatedProject.itemisedBudgetArray = JSON.parse(itemisedBudget)
      updatedProject.areaFocusObject = JSON.parse(areaFocus)
      updatedProject.hostclubInformationObject = JSON.parse(hostclubInformation)
      if (
        updatedProject.anticipatedFunding == updatedProject.fundingGoal &&
        updatedProject.projectStatus == 'Looking for funding'
      ) {
        await updatedProject
          .merge({
            projectStatus: ProjectStatus[2],
          })
          .save()
      }
      return response.json({
        updatedProject,
        Hello: 'old file below',
        oldPoject: oldProject,
      })
    } else {
      return response.json('error')
    }
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

  public async deleteProjectByProjectId({ request, response }: HttpContextContract) {
    const projectId: number = request.input('project_id')
    const oldProject: Project = await Project.findOrFail(projectId)
    const projectToBeDeleted: Project = await Project.findOrFail(projectId)
    await projectToBeDeleted.related('projectRole').detach()
    await projectToBeDeleted.related('pledges').detach()
    await projectToBeDeleted.delete()
    return response.json({ Deleted: 'old project below', oldProject })
  }
}
