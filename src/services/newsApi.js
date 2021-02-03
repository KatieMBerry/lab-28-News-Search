export const getArticles = (params) => {
    return fetch(`https://newsapi.org/v2/everything?q=${params}`)
        .then(res => res.json())
}
