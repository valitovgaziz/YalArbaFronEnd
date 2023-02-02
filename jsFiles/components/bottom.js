let prefix = '';
let atributePath = document.body.getAttribute('path');
if (atributePath === 'relative') {
    prefix = '../'
} else if (atributePath === 'relativeInclude2') {
    prefix = '../../'
}

document.querySelector('.bottom')
    .innerHTML = '' +
    '<div class="bottom">\n' +
    '  <div id="about_ass">\n' +
    '    <a href="' + prefix + 'HTML/about.html">\n' +
    '      <p>О нас</p>\n' +
    '    </a>\n' +
    '  </div>\n' +
    '  <div>\n' +
    '    <a href="' + prefix + 'HTML/vacation.html">\n' +
    '      <p>Вакансии</p>\n' +
    '    </a>\n' +
    '  </div>\n' +
    '  <div>\n' +
    '    <a href="' + prefix + 'HTML/requisites.html">\n' +
    '      <p>Реквизиты</p>\n' +
    '    </a>\n' +
    '  </div>\n' +
    '  <div>\n' +
    '    <a href="' + prefix + 'HTML/contacts.html">\n' +
    '      <p>Контакты</p>\n' +
    '    </a>\n' +
    '  </div>\n' +
    '</div>';