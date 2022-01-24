import React, { useState } from 'react';

export const UserSignupPage = ({ actions = { postSignup: () => Promise.resolve() } }) => {

    const [displayName, setDisplayName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const onChangeDisplayName = event => {
        const value = event.target.value;
        setDisplayName(value);
    }

    const onChangeUsername = event => {
        const value = event.target.value;
        setUsername(value);
    }

    const onChangePassword = event => {
        const value = event.target.value;
        setPassword(value);
    }

    const onChangePasswordRepeat = event => {
        const value = event.target.value;
        setPasswordRepeat(value);
    }

    const onClickSignUp = () => {
        const user = {
            username,
            displayName,
            password,
        }
        actions.postSignup(user);
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <div>
                <input placeholder="Your display name" value={displayName} onChange={onChangeDisplayName} />
            </div>
            <div>
                <input placeholder="Your username" value={username} onChange={onChangeUsername} />
            </div>
            <div>
                <input placeholder="Your password" type="password" value={password} onChange={onChangePassword} />
            </div>
            <div>
                <input placeholder="Repeat your password" type="password" value={passwordRepeat} onChange={onChangePasswordRepeat} />
            </div>
            <div>
                <button onClick={onClickSignUp}>Sign Up</button>
            </div>
        </div>
    );
}

export default UserSignupPage;