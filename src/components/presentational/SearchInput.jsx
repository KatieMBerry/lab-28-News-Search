import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ searchInput, onChange }) => (
    <>
        <label htmlFor="searchInput">Search</label>
        <input
            type="text"
            value={searchInput}
            onChange={onChange} />
    </>
);

SearchInput.propTypes = {
    searchInput: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchInput;
