window.onload = function () {

    let radioButton = document.querySelector('label[type=radio]');

    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.onclick = function () {
        navigation.classList.toggle('active');
    }

}