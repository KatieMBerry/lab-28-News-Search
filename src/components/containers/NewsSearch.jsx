import React, { Component } from 'react';
import { getArticles } from '../../services/newsApi';
import ArticleList from '../../components/presentational/ArticleList';
import SearchInput from '../../components/presentational/SearchInput'

export default class NewsSearch extends Component {
    state = {
        articles: [],
        loading: true,
        searchInput: ''
    }

    // componentDidMount() {
    //     getArticles()
    //         .then(articles => this.setState({ articles }))
    //         .then(() => this.setState({ loading: false }));
    // }

    fetchArticles = () => {
        getArticles(this.state.search).then((articles) =>
            this.setState({ articles })
        );
    };

    handleChange = ({ target }) => {
        this.setState({ search: target.value }, () => {
            this.fetchArticles();
        });
        // target.value.trim() && getArticles(target.value)
        //     .then(articles => this.setState({ articles }));
    };

    render() {
        const { articles, loading } = this.state;

        return (
            <>
                <SearchInput
                    onChange={this.handleChange} />
                {!loading ? <ArticleList articles={articles} />
                    : <h1>Loading...</h1>
                }
            </>
        );
    }
}
