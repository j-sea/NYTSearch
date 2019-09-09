
function grabNYTimesArticles(searchQuery, numberOfRecords, beginDate, endDate){
    console.log('grabbing new york times articles');

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchQuery + "begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=v9ZuAGpf5SLtPeFaivEQF3WEYT4taWAx";

    $.ajax({
        url: queryURL,
    }).then(function(response){
        console.log(response);
    });
}

