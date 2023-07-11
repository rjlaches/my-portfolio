import React from 'react';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Main from './components/Main';
import Skills from './components/Skills';
import Work from './components/Work';
import Footer from './components/Footer';

function App () {
    return (
        <>
            <Navigation/>
            <Banner/>
            <Main/>
            <Skills/>
            <Work/>
            <Footer/>
        </>
    );
};

export default App;