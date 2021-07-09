import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    test('Button should have props content', () => {
        render(<Button backColor="lightblue" text="button" />);
        const button = screen.getByTestId("Button");

        expect(button).toBeInTheDocument();
        expect(button.style.backgroundColor).toBe('lightblue');
        expect(button.innerHTML).toBe('button');


    })
});