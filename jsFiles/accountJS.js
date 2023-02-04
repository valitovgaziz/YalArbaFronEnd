window.onload = function () {

    let dialog = document.querySelector('.dialog');
    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');

    dialog.visibility = 'hidden';

    menuToggle.onclick = function () {
        navigation.classList.toggle('active');
    }

    document.querySelector('.editButton')
        .addEventListener('click', function() {
            window.location.href = 'addObjectPage.html';
        });

    document.querySelector('.deleteButton')


        .addEventListener('click', function () {

            dialog.showModal();

        });

    document.querySelector('#dialogDeleteButton')
        .addEventListener('click', function () {
            dialog.setAttribute('display', 'none');
            dialog.setAttribute('visibility', 'hidden');
            dialog.close();

        });

}