window.onload = function () {

    let moderButtons = document.querySelectorAll('.moderButton');

    moderButtons.forEach(function (nextVal, index) {
        nextVal.addEventListener('click', function () {
            window.location.href = 'considerAppeal.html';
        })
    });


    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.onclick = function () {
        navigation.classList.toggle('active');
    }


}