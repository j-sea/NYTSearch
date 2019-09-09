var queryString = "hurricane"

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + queryString + "&api-key=v9ZuAGpf5SLtPeFaivEQF3WEYT4taWAx"


function grabNYTimesArticles(searchQuery, numberOfRecords, beginDate, endDate){
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=v9ZuAGpf5SLtPeFaivEQF3WEYT4taWAx"
    
$.ajax({
        url: queryURL,
    }).then(function(response){
        console.log(response);
    })
}

