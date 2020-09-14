import Detector from './helper/Detector.js'
import ClassMutator from './helper/ClassMutator.js'

let $cosElements: Array<any> = [];

let options: Record<string, boolean|string|number> = {
    disabled: false
}

// COS Initialization
const init = () => {
    if(options.disabled) return
    // Get COS Elements
    $cosElements = Detector()

    // Event Listeners
        // Scroll
    window.addEventListener("scroll", () => {ClassMutator($cosElements)})
        // Window Resize
    window.addEventListener('resize', refresh)
        // Orientation Change
    window.addEventListener('orientationchange', refresh)
}

// Refresh COS
const refresh = (): void => {
    if(options.disabled) return

    // disable()
    // init()
}

// Disabling COS
const disable = (): void => {
    // window.removeEventListener("scroll", ClassMutator($cosElements))
    window.removeEventListener('resize', refresh)
    window.removeEventListener('orientationchange', refresh)
}

init()