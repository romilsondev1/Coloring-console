import { ContentConsole, TModify } from "../types.js";

export interface Builder {
    reset(): void;

    setColor(name: TModify['color']): void;

    setBg( name: TModify['background']): void;

    setAttribute(name: TModify['attrs']): void;

    setInline(inline: boolean): void;

    setContent(content: ContentConsole['content']) : void;

    getResult(): ContentConsole["content"]
}