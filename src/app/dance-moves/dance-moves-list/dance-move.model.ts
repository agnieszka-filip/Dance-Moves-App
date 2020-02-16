export class DanceMove {
    public name: string;
    public description: string;
    public imageVideoPath: string;

    constructor (name: string, desc: string, imgVidPath: string) {
        this.name = name;
        this.description = desc;
        this.imageVideoPath = imgVidPath;
    }
}