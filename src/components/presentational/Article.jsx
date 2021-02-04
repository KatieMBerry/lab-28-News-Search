import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description, urlToImage }) => (
    <article>
        <h3>{title}</h3>
        <img src={urlToImage} />
        <h4>{author}</h4>
        <p>{description}</p>
    </article>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string.isRequired
};

export default Article;
