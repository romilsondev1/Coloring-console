import { Personalize }  from './modules/controller/personalize.js'; 
import { NewTextBuilder } from './modules/director/newText.js';

const builder = new NewTextBuilder();
const coloring = new Personalize(builder);

export default coloring