import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ searchInput, onChange }) => (
    <>
        <input
            id="searchInput"
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={onChange} />
    </>
);

SearchInput.propTypes = {
    searchInput: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default SearchInput;
