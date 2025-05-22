import { black } from "../entities/black.js";
import { Blue } from "../entities/blue.js";
import { Green } from "../entities/green.js";
import { Red } from "../entities/red.js";
import { Yellow } from "../entities/yellow.js";
import { ContentConsole, TModify } from "../types.js";

export class Personalize {
    
    modify(modify: TModify ,value: ContentConsole): ContentConsole['content'] {
        const orchestrator = {
            red: () => new Red(),
            black: () => new black(),
            blue: () => new Blue(),
            green: () => new Green(),
            yellow: () => new Yellow(),
        };

        const constructor = orchestrator[modify]();

        return constructor.execute(value);
    }
}