import { RequiredSkill } from '../required-skill.model'

export class DanceMove {
  public name: string
  public description: string
  public imageVideoPath: string
  public requiredSkills: RequiredSkill[]

  constructor(
    name: string,
    desc: string,
    imgVidPath: string,
    requiredSkills: RequiredSkill[],
  ) {
    this.name = name
    this.description = desc
    this.imageVideoPath = imgVidPath
    this.requiredSkills = requiredSkills
  }
}
