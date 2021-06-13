import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

SignIn.propTypes = {

};

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    signInSuccessUrl: '/photos',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
};

function SignIn(props) {
    return (
        <div>
            <div className="text-center">
                <h2>Login Form</h2>

                <p>or login with social accounts</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        </div>
    );
}

export default SignIn;