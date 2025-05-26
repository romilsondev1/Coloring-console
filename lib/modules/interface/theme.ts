import { ContentConsole, TModify } from "../types.js";

export interface IThemeManager {
    
    addTheme(name:string, config: TModify) : void ;
    
    applyTheme(name: string, value:string, inline: boolean) : ContentConsole['content'];
}