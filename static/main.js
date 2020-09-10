$("#search-button").click(function () {
    let searchText = $("#search-input").val();
    sendSearchQuery(searchText);
})

function sendSearchQuery(searchText) {
    let searchSettings = getSearchSettings(searchText);
    $.ajax(window.location.href+"search", searchSettings);

}

function getSearchSettings(searchText) {
    return {
        "data":
            {"text": searchText},
        "complete": function (jqXHR, statusText) {
            console.log(jqXHR);
            console.log(statusText);
        }
    }
}