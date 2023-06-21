import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './index';


describe('Footer', () => {
    test('renders the copyright information', () => {
        render(<Footer />);
        const copyrightText = screen.getByText(/Tim Maupin, 2023/i);

        expect(copyrightText).toBeInTheDocument();
      });


});