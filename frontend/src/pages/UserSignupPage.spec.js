import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { UserSignupPage } from './UserSignupPage';

describe('UserSignupPage', () => {
    describe('Layout', () => {
        it('has header of Sign Up', () => {
            render(<UserSignupPage />);
            const header = screen.getByRole('heading', { level: 1});
            expect(header).toHaveTextContent('Sign Up');
        });
        it('has input for display name', () => {
            render(<UserSignupPage />);
            const displayNameInput = screen.getByPlaceholderText('Your display name');
            expect(displayNameInput).toBeInTheDocument();
        });
        it('has input for username', () => {
            render(<UserSignupPage />);
            const usernameInput = screen.getByPlaceholderText('Your username');
            expect(usernameInput).toBeInTheDocument();
        });
        it('has input for password', () => {
            render(<UserSignupPage />);
            const passwordInput = screen.getByPlaceholderText('Your password');
            expect(passwordInput).toBeInTheDocument();
        });
        it('has password type for password input', () => {
            render(<UserSignupPage />);
            const passwordInput = screen.getByPlaceholderText('Your password');
            expect(passwordInput.type).toBe('password');
        });
        it('has input for password repeat', () => {
            render(<UserSignupPage />);
            const passwordRepeat = screen.getByPlaceholderText('Repeat your password');
            expect(passwordRepeat).toBeInTheDocument();
        });
        it('has password type for password repeat input', () => {
            render(<UserSignupPage />);
            const passwordRepeat = screen.getByPlaceholderText('Your password');
            expect(passwordRepeat.type).toBe('password');
        });
        it('has submit button', () => {
            render(<UserSignupPage />);
            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
        })
    })
})