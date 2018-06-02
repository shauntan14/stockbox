var request = require('request');

const apiKey = "52PXKBBCIVXWCBOV";
const alphavantageRequestUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MU&outputsize=compact&apikey=" + apiKey
const timeSeriesDaily = "Time Series (Daily)";

const statistics = {
    open : "1. open",
    high : "2. high",
    low : "3. low",
    close : "4. close",
    volume : "5. volume"
};

request(alphavantageRequestUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body); 
    var stockHistory = JSON.parse(body)[timeSeriesDaily];
    for (var date in stockHistory)
    {
        var dailyPrice = stockHistory[date];
        console.log(dailyMetrics);
    }
  }
})