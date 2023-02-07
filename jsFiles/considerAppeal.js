window.onload = function () {


    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.onclick = function () {
        navigation.classList.toggle('active');
    }

    let sendButton = document.querySelector('#responseSendButton');

    sendButton.addEventListener('click', function () {
        alert('Your message sent.')
        window.location.href = '../HTML/moderatingPage.html';
    })

}