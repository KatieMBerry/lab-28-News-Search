import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch component', () => {
    it('changes the article list displayed via search input', () => {
        render(<NewsSearch />);
        const display = screen.getByTestId('dislpay');
        const searchInputText = screen.getByLabelText('Search');
        fireEvent.change(searchInputText, {
            target: {
                value: 'doggie search'
            }
        });
    });
});
