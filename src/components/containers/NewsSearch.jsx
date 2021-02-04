import React, { Component } from 'react';
import { getArticles } from '../../services/newsApi';
import ArticleList from '../../components/presentational/ArticleList';
import SearchInput from '../../components/presentational/SearchInput'

export default class NewsSearch extends Component {
    state = {
        articles: [],
        loading: true,
        searchInput: 'headline'
    }

    componentDidMount() {//will take in searchInput
        getArticles()
            .then(articles => this.setState({ articles }));
    }

    handleChange = ({ target }) => {
        this.setState({ searchInput: target.value });
    }

    render() {
        const { articles, loading, searchInput } = this.state;
        console.log(articles);
        return (
            <>
                {/* <SearchInput
                    searchInput={searchInput} /> */}
                <ArticleList articles={articles} />
            </>
        );
    }
}
