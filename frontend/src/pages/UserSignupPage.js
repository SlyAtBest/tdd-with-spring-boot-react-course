import React, { useState } from 'react';

export const UserSignupPage = ({ actions = { postSignup: () => Promise.resolve() } }) => {

    const [displayName, setDisplayName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [pendingApiCall, setPendingApiCall] = useState(false);

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

    const onClickSignUp = async () => {
        const user = {
            username,
            displayName,
            password,
        }
        setPendingApiCall(true);
        try {
            await actions.postSignup(user);
            setPendingApiCall(false);
        } catch(error) {
            setPendingApiCall(false);
        }
    }

    return (
        <div className="container">
            <h1 className="text-center">Sign Up</h1>
            <div className="col-12 mb-3">
                <label>Display Name</label>
                <input className="form-control" placeholder="Your display name" value={displayName} onChange={onChangeDisplayName} />
            </div>
            <div className="col-12 mb-3">
                <label>Username</label>
                <input className="form-control" placeholder="Your username" value={username} onChange={onChangeUsername} />
            </div>
            <div className="col-12 mb-3">
                <label>Password</label>
                <input className="form-control" placeholder="Your password" type="password" value={password} onChange={onChangePassword} />
            </div>
            <div className="col-12 mb-3">
                <label>Password Repeat</label>
                <input className="form-control" placeholder="Repeat your password" type="password" value={passwordRepeat} onChange={onChangePasswordRepeat} />
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={onClickSignUp} disabled={pendingApiCall}>
                    {pendingApiCall && (<div className="spinner-border text-light spinner-border-sm me-1" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>)}
                    Sign Up</button>
            </div>
        </div>
    );
}

export default UserSignupPage;