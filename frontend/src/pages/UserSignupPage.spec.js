import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { UserSignupPage } from './UserSignupPage';

describe('UserSignupPage', () => {
    describe('Layout', () => {
        it('has header of Sign Up', () => {
            render(<UserSignupPage />);
            const header = screen.getByRole('heading', { level: 1 });
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
        });
    })
    describe('Interactions', () => {
        const changeEvent = content => ({
            target: {
                value: content,
            }
        });

        let button, displayNameInput, usernameInput, passwordInput, passwordRepeat;

        const setupForSubmit = (props) => {
            render(<UserSignupPage {...props} />);

            displayNameInput = screen.getByPlaceholderText('Your display name');
            usernameInput = screen.getByPlaceholderText('Your username');
            passwordInput = screen.getByPlaceholderText('Your password');
            passwordRepeat = screen.getByPlaceholderText('Repeat your password');

            fireEvent.change(displayNameInput, changeEvent('my-display-name'));
            fireEvent.change(usernameInput, changeEvent('my-user-name'));
            fireEvent.change(passwordInput, changeEvent('P4ssword'));
            fireEvent.change(passwordRepeat, changeEvent('P4ssword'));

            button = screen.getByRole('button');
        }

        it('sets the displayName value into state', () => {
            render(<UserSignupPage />);
            const displayNameInput = screen.getByPlaceholderText('Your display name');

            fireEvent.change(displayNameInput, changeEvent('my-display-name'));

            expect(displayNameInput).toHaveValue('my-display-name');
        });
        it('sets the username value into state', () => {
            render(<UserSignupPage />);
            const usernameInput = screen.getByPlaceholderText('Your username');

            fireEvent.change(usernameInput, changeEvent('my-user-name'));

            expect(usernameInput).toHaveValue('my-user-name');
        });
        it('sets the password value into state', () => {
            render(<UserSignupPage />);
            const passwordInput = screen.getByPlaceholderText('Your password');

            fireEvent.change(passwordInput, changeEvent('P4ssword'));

            expect(passwordInput).toHaveValue('P4ssword');
        });
        it('sets the password repeat value into state', () => {
            render(<UserSignupPage />);
            const passwordRepeat = screen.getByPlaceholderText('Repeat your password');

            fireEvent.change(passwordRepeat, changeEvent('P4ssword'));

            expect(passwordRepeat).toHaveValue('P4ssword');
        });
        it('calls postSignup when the fields are valid and the actions are provided in props', () => {
            const actions = {
                postSignup: jest.fn().mockResolvedValueOnce({})
            }

            setupForSubmit({ actions });
            fireEvent.click(button);
            expect(actions.postSignup).toHaveBeenCalledTimes(1);
        });
        it('does not throw exception when clicking the button when actions not provided in props', () => {
            setupForSubmit();
            fireEvent.click(button);
            expect(() => fireEvent.click(button)).not.toThrow();
        });
        it('calls post with user body when the fields are valid', () => {
            const actions = {
                postSignup: jest.fn().mockResolvedValueOnce({})
            }

            setupForSubmit({ actions });
            fireEvent.click(button);
            const expectedUserObject = {
                username: "my-user-name",
                displayName: "my-display-name",
                password: "P4ssword",
            }
            expect(actions.postSignup).toHaveBeenCalledWith(expectedUserObject);
        });
    })
})