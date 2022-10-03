import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import TopNav from './components/TopNav';

import MainView from './views/MainView';
import AboutView from './views/AboutView';
import AccessoriesView from './views/AccessoriesView';
import BusinessView from './views/BusinessView';
import NewsView from './views/NewsView';
import ShoesView from './views/ShoesView';
import TermsView from './views/TermsView';
import ClothesView from './views/ClothesView';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Navbar />

      <Routes>
        <Route path='/' element={ <MainView /> } />
        <Route path='/kläder' element={ <ClothesView /> } />
        <Route path='/nyheter' element={ <NewsView /> } />
        <Route path='/om-oss' element={ <AboutView /> } />
        <Route path='/accessoarer' element={ <AccessoriesView /> } />
        <Route path='/business' element={ <BusinessView /> } />
        <Route path='/skor' element={ <ShoesView /> } />
        <Route path='/frakt' element={ <TermsView /> } />
      </Routes>
    </div>
  );
}

export default App;