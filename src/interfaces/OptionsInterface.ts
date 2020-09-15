export interface Options {
    disabled: keyof UserOptions | boolean,
    addOnce: boolean
}

export interface UserOptions {
    disabled?: boolean,
    addOnce?: boolean
}