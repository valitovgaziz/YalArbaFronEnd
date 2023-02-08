window.onload = function () {

    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.onclick = function () {
        navigation.classList.toggle('active');
    }

    let dialog = document.querySelector('.dialog');
    let fitBackButton = document.querySelector('.fitBackButton');
    let sendFitbackButton = document.querySelector('#sendFitBackButton');

    fitBackButton.addEventListener('click', function () {
        dialog.showModal();
    })

    sendFitbackButton.addEventListener('click', function () {
        alert("Ваш отзыв сохранен и появиться после модерации.");
        dialog.close();
    })


    document.querySelector('.toAllFitBack').addEventListener(
        'click',
        function () {
            window.location.href = 'fitBackPage.html';
        }
    );



}