import { Attributes } from "../entities/attributes.js";
import { BgColors } from "../entities/bgcolors.js";
import { Colors } from "../entities/colors.js";
import { NewTextEntity } from "../entities/newText.js";
import { Builder } from "../interface/builder.js";
import { ContentConsole, TModify } from "../types.js";

export class NewTextBuilder implements Builder{
    private result = new NewTextEntity();

    reset(): void {
        this.result = new NewTextEntity();
    }

    setColor(name: TModify["color"]): void {
        const ansi = new Colors().getColor(name);
        this.result.text = `${ansi}${this.result.text}`
        return
    };

    setBg(name : TModify['background']): void {
        const ansi = new BgColors().getBg(name);
        this.result.text = `${ansi}${this.result.text}`;
        return
    }

    setAttribute(names: TModify["attributes"]): void {
        if(!names) return;

        const attr = new Attributes();
        const ansiSeq = names.map( name => attr.getAttribute(name)).join('');

        this.result.text = `${ansiSeq}${this.result.text}`
        return
    };

    setContent(content: ContentConsole["content"]): void {
        this.result.text = `${this.result.text}${content}`
        return;
    };

    setInline(): void {
        this.result.text += '\x1b[0m';
    }

    getResult(): ContentConsole["content"] {
        return this.result.text;
    };

}