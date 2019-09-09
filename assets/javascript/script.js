


function grabNYTimesArticles(searchQuery, numberOfRecords, beginDate, endDate){
    console.log('grabbing new york times articles');
    
    var queryURL;
    if (beginDate !== '' && endDate !== '') {

        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchQuery + "&begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=v9ZuAGpf5SLtPeFaivEQF3WEYT4taWAx";
    }
    else if (beginDate !== '') {
        
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchQuery + "&begin_date=" + beginDate + "&api-key=v9ZuAGpf5SLtPeFaivEQF3WEYT4taWAx";
    }
    else if (endDate !== '') {
        
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchQuery + "&end_date=" + endDate + "&api-key=v9ZuAGpf5SLtPeFaivEQF3WEYT4taWAx";
    }
    else {
        
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchQuery + "&api-key=v9ZuAGpf5SLtPeFaivEQF3WEYT4taWAx";
    }
    
    $.ajax({
        url: queryURL,
    }).then(function(data){
        results = data.response.docs;

        if (numberOfRecords <= 10) {
            for (var i = numberOfRecords; i < results.length; i++) {
                results.pop();
            }

            $('#results').text(JSON.stringify(results));
        }
    });
}

$('#searchButton').on('click', function(event){
    event.preventDefault();

    var searchQueryToUse = $('#searchInput').val();
    var startYear = $('#startYear').val();
    var endYear = $('#endYear').val();

    grabNYTimesArticles(searchQueryToUse, 10, startYear, endYear);
});

$('#clearButton').on('click', function(){
    $("#clearButton").empty();
})