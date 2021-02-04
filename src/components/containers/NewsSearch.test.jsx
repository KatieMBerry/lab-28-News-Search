require('dotenv').config();
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';


describe('NewsSearch component', () => {
    it('changes the article list displayed via search input', () => {
        render(<NewsSearch />);

        const search = screen.getByPlaceholderText('Search');
        userEvent.type(search, 'dogs');

        return waitFor(() => {
            expect(screen.getByTestId('display')).not.toBeEmptyDOMElement();
        });
    });
});
