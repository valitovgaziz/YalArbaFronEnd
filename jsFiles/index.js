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
}