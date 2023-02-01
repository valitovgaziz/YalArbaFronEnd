let getPrefix = function () {
    let prefix = '';
    let atributePath = document.body.getAttribute('path');
    if (atributePath === 'relative') {
        prefix = '../'
    } else if (atributePath === 'relativeInclude2') {
        prefix = '../../'
    }
    return prefix;
}


export {getPrefix};