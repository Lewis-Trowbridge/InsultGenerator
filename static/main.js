$("#search-button").click(function () {
    let searchText = $("#search-input").val();
    sendSearchQuery(searchText);
})

function sendSearchQuery(searchText) {
    let searchSettings = getSearchSettings(searchText);
    $.ajax(window.location.href, searchSettings);

}

function getSearchSettings(searchText) {
    return {
        "data":
            {"text": searchText},
        "method": "POST",
        "complete": function (jqXHR, statusText) {
            console.log(jqXHR);
            console.log(statusText);
        }
    }
}