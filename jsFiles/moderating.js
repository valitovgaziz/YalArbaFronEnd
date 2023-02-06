window.onload = function () {

    let moderButtons = document.querySelectorAll('.moderButton');

    moderButtons.forEach(function (nextVal, index) {
        nextVal.addEventListener('click', function () {
            window.location.href = 'considerAppeal.html';
        })
    });



}