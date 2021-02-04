const fetch = require("node-fetch");

export const getArticles = (searchInput = 'food') => {
    return fetch(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${process.env.NEWS_API_KEY}`)
        .then(res => res.json())
        .then(json => json.articles);
}
