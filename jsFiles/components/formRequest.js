alert("asdf")
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

document.querySelector('.index_page .middle .search')
    .innerHTML = '<form action="' + getPrefix() + 'HTML/searchResult.html" id="search_form">\n' +
    '                <label for="search_input">Введите вид желаемого отдыха</label>\n' +
    '                <input id="search_input"\n' +
    '                       type="text"\n' +
    '                       autofocus\n' +
    '                       placeholder=".   .   .">\n' +
    '            </form>';

