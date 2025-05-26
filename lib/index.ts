import { Personalize }  from './modules/controller/personalize.js'; 
import { NewTextBuilder } from './modules/director/newText.js';
import { ThemeManager } from './modules/factory/ThemeManager.js';

const builder = new NewTextBuilder();
const coloring = new Personalize(builder);
const theme = ThemeManager.getInstance();

export {
    coloring,
    theme
}