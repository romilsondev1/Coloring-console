import { TModify } from "../types.js";

export class Attributes {
    private attributes: {name:string, value:string}[];

    constructor(){
        this.attributes = [
            { name: 'bold', value: '\x1b[1m'},
            { name: 'underline', value: '\x1b[4m'},
            { name: 'blink', value: '\x1b[5m'}
        ]
    };

    getAttribute(name: string){
        return this.attributes.find(attribute => attribute.name === name)?.value || '';
    }
}