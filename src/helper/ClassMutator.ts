import { options } from '../index.js'

export default ($cosElements: Array<HTMLElement>): void => {
    $cosElements.forEach(e => {
        const className: string = e.dataset.cos!;
        const bounding = e.getBoundingClientRect();
        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            e.classList.add(className);
        } else {
            if(!options.addOnce) {
                e.classList.remove(className);
            }
        }
    })
}