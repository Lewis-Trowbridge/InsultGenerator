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
    let wordsDiv = $("#words")
    // Clear the current words
    wordsDiv.html("");
    if (wordsTotal > 0){
        for (let wordsCount = 0; wordsCount < wordsTotal; wordsCount++){
            wordsDiv.append('<div class="row"><p>' + responseJSON["words"][wordsCount] + '</p></div>');
        }
    }
    else {
        wordsDiv.append('<h2>No words found.</h2>')
    }
}