import { IGeneralPersonalize } from "../interface/generalPersonalize.js";
import { ContentConsole } from "../types.js";

export class black implements IGeneralPersonalize {

    private ansi = '\x1b[30m';
    private reset = '\x1b[0m';

    execute(value: ContentConsole): ContentConsole["content"] {
        return `${this.ansi}${value}${this.reset}`
    }
}