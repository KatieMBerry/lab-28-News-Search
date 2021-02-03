export const getArticles = () => {
    return fetch('https://newsapi.org/v2/everything')
        .then(res => res.json())
}
