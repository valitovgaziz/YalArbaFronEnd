window.onload = function () {
    let search_request = function () {
        window.location.replace("pages/searchResult.html");
    };

    let searchForm = document.querySelector('#search_form');
    searchForm.addEventListener(
        "submit",
        search_request
    );

    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.onclick = function () {
        navigation.classList.toggle('active');
    }
}