import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import Header from './components/Header';
import productApi from 'api/productApi';
import SignIn from 'features/Auth/pages/SignIn';
// import { Button } from 'bootstrap';
import firebase from 'firebase';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

// Configure Firebase.
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN
};
firebase.initializeApp(config);


function App() {
    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const params = {
                    _page: 1, _limit: 10
                }

                console.log('Params: ', params);
                const response = await productApi.getAll(params);
                console.log('Response: ', response);
            }
            catch (error) {
                console.log('Failed to fetch product list: ', error)
            }
        }

        fetchProductList();
    }, []);

    // Handle firebase auth changed
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
            if (!user) {
                // user logs out, handle something here
                console.log('User is not login');
                return;
            }

            // console.log('Logged in user', user.displayName);
            const token = await user.getIdToken();
            // console.log('Logged in user token: ', token);

            localStorage.setItem('firebaseui::rememberedAccounts', token);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Header />

                    <Switch>
                        <Redirect exact from='/' to='/photos' />

                        <Route path="/photos" component={Photo} />
                        <Route path="/sign-in" component={SignIn} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
