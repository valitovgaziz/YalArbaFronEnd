window.onload = function () {

    let editButtons = document.querySelectorAll('.editButton');


    editButtons.forEach(function (nextVal, index, nodes) {
        nextVal.addEventListener('click', function () {
            let modalDialog = document.querySelector('.dialog');
            modalDialog.showModal();
        });
    });

    document.querySelector('.deleteButton')
        .addEventListener('click', function () {
            document.querySelector('.dialog')
                .close();
        });

    document.querySelector('.verifyButton')
        .addEventListener('click', function () {
            document.querySelector('.dialog')
                .close();
        });

    document.querySelector('.banButton')
        .addEventListener('click', function () {
            document.querySelector('.dialog')
                .close();
        });

    document.querySelector('.unBanButton')
        .addEventListener('click', function () {
            document.querySelector('.dialog')
                .close();
        });

    document.querySelector('.cancel')
        .addEventListener('click', function () {
            document.querySelector('.dialog')
                .close();
        });

}