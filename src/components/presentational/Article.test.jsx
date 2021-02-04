import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
    afterEach(() => cleanup());
    it('renders Article', () => {
        const { asFragment } = render(<Article
            title='New Title'
            author='WSJ'
            description='Inquiring minds...'
            urlToImage='urlToMyImage'
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});
