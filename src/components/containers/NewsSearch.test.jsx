import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';

describe('NewsSearch component', () => {
    it('changes the article list displayed via search input', () => {
        render(<NewsSearch />);
        const searchInput = screen.getByPlaceholderText('Search');
        userEvent.type(searchInput, 'dogs')
    });
});
