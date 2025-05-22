import { ContentConsole } from "../types.js";

export interface IGeneralPersonalize {
    execute(value: ContentConsole) : ContentConsole["content"];
}