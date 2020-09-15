import Detector from './helper/Detector.js'
import ClassMutator from './helper/ClassMutator.js'

import { Options, UserOptions } from './interfaces/optionsInterface'

let $cosElements: Array<any> = [];

// default options
let options: Options = {
    disabled: false,
    addOnce: true
}

// COS Initialization
const init = (userOptions?: UserOptions) => {
    if(options.disabled) return

    // Set options
    if(userOptions) {
        Object.keys(userOptions).forEach(key => {
            options[key]
        })
    }

    // Get COS Elements
    $cosElements = Detector()

    // Event Listeners
        // Scroll
    window.addEventListener("scroll", () => { ClassMutator($cosElements) })
        // Window Resize
    window.addEventListener('resize', ()=>{ refresh() })
        // Orientation Change
    window.addEventListener('orientationchange', refresh)
        // Page Loaded
    document.addEventListener('DOMContentLoaded', _=>{ refresh() })
}

// Refresh COS
const refresh = (): void => {
    if(options.disabled) return

    disable()
    init()
    ClassMutator($cosElements)
}

// Disabling COS
const disable = (): void => {
    window.removeEventListener("scroll", () => {ClassMutator($cosElements)})
    window.removeEventListener('resize', refresh)
    window.removeEventListener('orientationchange', refresh)
}

init()

export {
    options
};