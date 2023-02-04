window.onload = function () {

    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.onclick = function () {
        navigation.classList.toggle('active');
    }

    document.querySelector('.editButton')
        .addEventListener('click', function() {
            window.location.href = 'addObjectPage.html';
        });

    document.querySelector('.deleteButton')
        .addEventListener('click', function () {
            let deleteButton = document.querySelector('.deleteSubForm');

            alert(deleteButton.getAttribute('visibility'));

            deleteButton.setAttribute('visibility', 'visible');

            deleteButton.visibility = 'visible';
        });

}