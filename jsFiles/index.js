let search_request = function() {
    window.location.replace("pages/searchResult.html");
};

document.getElementById("search_form").addEventListener("submit", search_request);