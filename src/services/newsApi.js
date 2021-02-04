export const getArticles = (searchInput) => {
    return fetch(`https://newsapi.org/v2/everything?q=dogs&apiKey=56b02d0bc0a0430ab5492112f4e7fe17`)
        .then(res => res.json())
        .then(json => json.articles);
}
