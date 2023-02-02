window.onload = function () {


    document.querySelector('.introButton').onclick = function () {
        window.location.href = '../HTML/accountPage.html';
    }

    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.onclick = function () {
        navigation.classList.toggle('active');
    }

}