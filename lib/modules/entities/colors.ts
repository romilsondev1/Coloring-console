import { TModify } from "../types.js"

export class Colors {
    private colors: { name: string, value: string }[]

    constructor() {
        this.colors = [
            { name: 'default', value: '\x1b[39m' },
            { name: 'red', value: '\x1b[31m' },
            { name: 'blue', value: '\x1b[34m' },
            { name: 'yellow', value: '\x1b[33m' },
            { name: 'green', value: '\x1b[32m' },
            { name: 'black', value: '\x1b[30m' },
            { name: 'magenta', value: '\x1b[35m' },
            { name: 'cyan', value: '\x1b[36m' },
            { name: 'white', value: '\x1b[37m' },
            { name: 'light-gray', value: '\x1b[90m'},
            { name: 'light-red', value: '\x1b[91m'},
            { name: 'light-green', value: '\x1b[92m'},
            { name: 'light-yellow', value: '\x1b[93m'},
            { name: 'light-blue', value: '\x1b[94m'},
            { name: 'light-magenta', value: '\x1b[95m'},
            { name: 'light-cyan', value: '\x1b[96m'},
            { name: 'light-white', value: '\x1b[97m'}
        ]
    };

    getColor(name: TModify['color']): string {
        return this.colors.find(color => color.name === name)?.value || '';
    };
}