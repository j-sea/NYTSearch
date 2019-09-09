


function grabNYTimesArticles(searchQuery, numberOfRecords, beginDate, endDate){
    console.log('grabbing new york times articles');
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchQuery + "&begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=v9ZuAGpf5SLtPeFaivEQF3WEYT4taWAx";
    
    var results;
    
    $.ajax({
        url: queryURL,
    }).then(function(data){
        results = data.response.docs;

        if (numberOfRecords <= 10) {
            for (var i = numberOfRecords; i < results.length; i++) {
                results.pop();
            }

            $('#search-results').text(JSON.stringify(results));
        }
    });

    return results;
}

$('#search-button').on('click', function(){
    var searchQueryToUse = 'cat';

    var records = grabNYTimesArticles(searchQueryToUse, 10, '20190101', '20190909');
});