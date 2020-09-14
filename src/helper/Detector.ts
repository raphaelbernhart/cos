export default (): Array<any> => {
    const nodes = document.querySelectorAll('.cos');
    let elements: any = []
    nodes.forEach(e => {elements.push(e)})
    return elements
}