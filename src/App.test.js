// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SamouraiPrivacy title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SamouraiPrivacy/i);
    expect(titleElement).toBeInTheDocument();
});
