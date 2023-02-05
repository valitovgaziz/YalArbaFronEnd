window.onload = function () {

    document.querySelector('.editButton')
        .addEventListener('click', function () {
            document.querySelector('.dialog')
                .showModal();
        });

    document.querySelector('.deleteButton')
        .addEventListener('click', function () {
            document.querySelector('.dialog')
                .close();
        })

    document.querySelector('.verifyButton')
        .addEventListener('click', function () {
            document.querySelector('.dialog')
                .close();
        })

}