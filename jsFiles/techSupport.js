window.onload = function () {

    document.querySelector('#submitAppealButton')
        .addEventListener('click', function () {
            document.querySelector('.techSupportDialog').showModal();
    });


    document.querySelector('#sendAppealButton')
        .addEventListener('click', function () {
            window.location.href = '../index.html';
            alert("Обращение отправлено!")
        })

}