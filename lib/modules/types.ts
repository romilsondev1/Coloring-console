export interface ContentConsole {
    content: string
}

export type TModify = {

    color:
    'red' |
    'blue' |
    'green' |
    'black' |
    'yellow' |
    'green' |
    'black' |
    'magenta' |
    'cyan' |
    'white' |
    'light-gray' |
    'light-red' |
    'light-green' |
    'light-yellow' |
    'light-blue' |
    'light-magenta' |
    'light-cyan' |
    'light-white',

    background?:
    'bg-black' |
    'bg-red' |
    'bg-green' |
    'bg-yellow' |
    'bg-blue' |
    'bg-magenta' |
    'bg-cyan' |
    'bg-white' |
    'bg-light-gray' |
    'bg-light-red' |
    'bg-light-green' |
    'bg-light-yellow' |
    'bg-light-blue' |
    'bg-light-magenta' |
    'bg-light-cyan' |
    'bg-light-white',

    attributes?: ['bold' | 'underline' | 'blink']

}