import React from 'react';
import { render } from '@testing-library/react';
import Bio from './BioComponent';

it('renders Bio component', () => {
    const {container} = render(<Bio />)

    expect(container).toMatchSnapshot();
});