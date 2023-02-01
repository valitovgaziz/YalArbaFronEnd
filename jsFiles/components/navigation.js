
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

document.querySelector('.navigation')
    .innerHTML = '<div class="userBX">\n' +
    '                <div class="imgUser">\n' +
    '                    <img src="' + getPrefix() + 'images/profile.png" alt="Photo">\n' +
    '                </div>\n' +
    '                <p class="userName">Имя (логин)</p>\n' +
    '            </div>\n' +
    '            <div class="menuToggle"></div>\n' +
    '            <div class="main_menu">\n' +
    '                <ul class="menu_ul">\n' +
    '                    <li><a href="' + getPrefix() + 'HTML/accountPage.html">\n' +
    '                        <ion-icon name="person-outline"></ion-icon>\n' +
    '                        Аккаунт\n' +
    '                    </a></li>\n' +
    '                    <li><a href="#">\n' +
    '                        <ion-icon name="log-in-outline"></ion-icon>\n' +
    '                        Войти\n' +
    '                    </a></li>\n' +
    '                    <li><a href="#">\n' +
    '                        <ion-icon name="person-add-outline"></ion-icon>\n' +
    '                        Регистрация\n' +
    '                    </a></li>\n' +
    '                    <li><a href="#">\n' +
    '                        <ion-icon name="help-outline"></ion-icon>\n' +
    '                        Написать в тех поддержку\n' +
    '                    </a></li>\n' +
    '                    <li><a href="#">\n' +
    '                        <ion-icon name="log-out-outline"></ion-icon>\n' +
    '                        Выйти\n' +
    '                    </a></li>\n' +
    '                </ul>\n' +
    '            </div>';