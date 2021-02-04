import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput component', () => {
    afterEach(() => cleanup());
    it('renders SearchInput', () => {
        const { asFragment } = render(<SearchInput
            searchInput='my_search_query'
            onChange={jest.fn()}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});
