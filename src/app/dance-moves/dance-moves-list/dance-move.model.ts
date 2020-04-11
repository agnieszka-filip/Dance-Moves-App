export class DanceMove {
    public name: string;
    public description: string;
    public imageVideoPath: string;
    public requiredSkills: any;

    constructor (name: string, desc: string, imgVidPath: string, requiredSkills: any) {
        this.name = name;
        this.description = desc;
        this.imageVideoPath = imgVidPath;
        this.requiredSkills = requiredSkills;
    }
}