var request = require('request');
const rootUrl = 'https://api.chucknorris.io/jokes/random';
var catUrl = 'https://api.chucknorris.io/jokes/categories';

module.exports = {
    getJoke,
    renderPage
}

function getJoke(req,res){
    options = {
        url: rootUrl,
        headers: 'great scott'
    }

    request(options, function(err,response, body){
        var jokeData = JSON.parse(body);
        console.log(jokeData)
        res.render('index',{jokeData: jokeData.value}) 
    });
}

function renderPage(req,res,next) {
    request(catUrl, function(err,response,body){
        var categories = JSON.parse(body);
    })
    res.render('index', {jokeData:null})
    console.log(categories)
}