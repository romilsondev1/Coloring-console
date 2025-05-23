import { Builder } from "../interface/builder.js";
import { ContentConsole, TModify } from "../types.js";

export class Personalize {

    constructor(private builder: Builder){};
    
    create(modify: TModify , value: ContentConsole['content'], inline: boolean): ContentConsole['content'] {
        this.builder.reset();
        this.builder.setColor(modify.color);
        this.builder.setBg(modify.background);
        this.builder.setAttribute(modify.attributes);

        this.builder.setContent(value);
        this.builder.setInline(inline);
        return this.builder.getResult();;
    }
}