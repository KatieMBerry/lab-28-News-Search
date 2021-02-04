import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description, urlToImage }) => (
    <article>
        <h3 style={{ color: '#c13e72' }}>{title}</h3>
        <img src={urlToImage} style={{ width: '400px', height: '300px' }} />
        <h4 style={{ color: '#1ca69d' }}>{author}</h4>
        <p>{description}</p>
    </article>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Article;
