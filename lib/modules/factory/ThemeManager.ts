import { Personalize } from "../controller/personalize.js";
import { NewTextBuilder } from "../director/newText.js";
import { Theme } from "../entities/theme.js";
import { IThemeManager } from "../interface/theme.js";
import { ContentConsole, TModify } from "../types.js";

export class ThemeManager implements IThemeManager {
    private static instance: ThemeManager;
    private themes = new Map<string, TModify>();
    private builder = new NewTextBuilder();
    private personalize = new Personalize(this.builder);

    private constructor(){}

    static getInstance() : ThemeManager {
        if( !ThemeManager.instance ){
            ThemeManager.instance = new ThemeManager();
        }
        return ThemeManager.instance;
    }

    addTheme(name: string, config: TModify): void {
        const newTheme = new Theme(name, config);
        this.themes.set(newTheme.getName(), newTheme.getConfig());
        return;
    };

    applyTheme(name: string, value: string, inline: boolean): ContentConsole['content'] {
        const theme = this.themes.get(name);
        if(!theme) throw new Error(`Theme ${name} if not found.`)
        return this.personalize.create(theme, value, inline)
    };

    deleteTheme(name:string){
       this.themes.delete(name);
    }

}
