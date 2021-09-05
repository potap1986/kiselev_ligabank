import React from 'react';
import './app.scss';
import Header from '../header/header';
import Intro from '../intro/intro';
import Converter from '../converter/converter';
import History from '../history/history';
import Footer from '../footer/footer';

function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <Intro />
        <Converter />
        <History />
      </main>
      <Footer />
    </>
  );
}

export default App;
