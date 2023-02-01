import {getPrefix} from "./functions/GetPathPrefix";

window.onload = function () {
    let search_request = function () {
        window.location.replace("pages/searchResult.html");
    };

    document.querySelector('#search_form')
        .addEventListener('submit', search_request);

    document.querySelector('#search_button')
        .addEventListener('click', search_request);

    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.onclick = function () {
        navigation.classList.toggle('active');
    }

    document.querySelector('.index_page .middle .search')
        .innerHTML = '<form action="' + getPrefix() + 'HTML/searchResult.html" id="search_form">\n' +
        '                <label for="search_input">Введите вид желаемого отдыха</label>\n' +
        '                <input id="search_input"\n' +
        '                       type="text"\n' +
        '                       autofocus\n' +
        '                       placeholder=".   .   .">\n' +
        '            </form>';


}