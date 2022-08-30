import './App.css';
import React, { Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartProvider from './store/CartProvider';
import PizzaProvider from './store/PizzaProvider';
import DarkModeProvider from './store/DarkModeProvider';
import { Route, Redirect, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <PizzaProvider>
      <DarkModeProvider>
        <CartProvider>
          <Header />
          <Suspense fallback={<div className="d-flex justify-content-center">
            <div className="spinner-border text-light m-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          }>
            <Switch>
              <Route path='/home'>
                <Home />
              </Route>
              <Route path='/' exact>
                <Redirect to='/home' />
              </Route>
              <Route path='/about-us'>
                <AboutUs />
              </Route>
              <Route path='/*'>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
          <Footer />
        </CartProvider>
      </DarkModeProvider>
    </PizzaProvider>
  );
}

export default App;
