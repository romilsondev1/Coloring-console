import { TModify } from "../types.js";

export class Theme {
    private name : string;
    private config: TModify;

    constructor(name : string , config: TModify){
        this.name = name;
        this.config = config
    }

    getName(): string{
        return  this.name
    };

    getConfig(): TModify{
        return this.config
    }
}