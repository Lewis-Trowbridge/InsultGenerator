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
        "complete": placeSearchData
    }
}

function placeSearchData(jqXHR, statusText) {
    let responseJSON = jqXHR.responseJSON;
    let wordsTotal = responseJSON["words"].length;
    if (wordsTotal > 0){
        let wordsDiv = $("#words")
        for (let wordsCount = 0; wordsCount < wordsTotal; wordsCount++){
            wordsDiv.append('<div class="row"><p>' + responseJSON["words"][wordsCount] + '</p></div>');
        }
    }
}