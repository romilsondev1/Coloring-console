import { TModify } from "../types.js";

export class BgColors {
    private bg: { name: string, value: string }[]

    constructor() {
        this.bg = [
            // Background colors
            { name: 'bg-black', value: '\x1b[40m' },
            { name: 'bg-red', value: '\x1b[41m' },
            { name: 'bg-green', value: '\x1b[42m' },
            { name: 'bg-yellow', value: '\x1b[43m' },
            { name: 'bg-blue', value: '\x1b[44m' },
            { name: 'bg-magenta', value: '\x1b[45m' },
            { name: 'bg-cyan', value: '\x1b[46m' },
            { name: 'bg-white', value: '\x1b[47m' },

            // Bright background
            { name: 'bg-bright-black', value: '\x1b[100m' },
            { name: 'bg-bright-red', value: '\x1b[101m' },
            { name: 'bg-bright-green', value: '\x1b[102m' },
            { name: 'bg-bright-yellow', value: '\x1b[103m' },
            { name: 'bg-bright-blue', value: '\x1b[104m' },
            { name: 'bg-bright-magenta', value: '\x1b[105m' },
            { name: 'bg-bright-cyan', value: '\x1b[106m' },
            { name: 'bg-bright-white', value: '\x1b[107m' },
        ]
    };

    getBg(name: TModify['background']): string {
        return this.bg.find(color => color.name === name)?.value || '';
    };
}