$("#search-button").click(function () {
    let searchText = $("#search-input").val();
    sendSearchQuery(searchText);
})

$("#search-input").on("input keydown click", function () {
    let searchInput = $("#search-input");
    let startIndex = searchInput[0].selectionStart;
    let endIndex = searchInput[0].selectionEnd;
    let wholeText = searchInput.val();
    // If they are the same, target the word
    if (startIndex === endIndex){
        while (wholeText[startIndex-1] !== " " && startIndex > 0){
            startIndex--;
        }
        while (wholeText[endIndex] !== " " && endIndex <= wholeText.length-1){
            endIndex++;
        }
    }
    $("#search-text-display").text(wholeText.substring(startIndex, endIndex));
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
    let wordsDiv = $("#words");
    let originalWord = responseJSON["original"];
    // Clear the current words
    wordsDiv.html("");
    if (wordsTotal > 0){
        for (let wordsCount = 0; wordsCount < wordsTotal; wordsCount++){
            let stringWord = responseJSON["words"][wordsCount];
            let htmlWord = '<span class="match-words">' + stringWord.substring(0, originalWord.length) + '</span>'
                + stringWord.substring(originalWord.length);
            wordsDiv.append('<div class="row"><p>' + htmlWord + '</p></div>');
        }
    }
    else {
        wordsDiv.append('<h2>No words found.</h2>')
    }
}