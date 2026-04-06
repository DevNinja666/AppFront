import { useState } from 'react';
import Navbar           from './components/Navbar';
import Footer           from './components/Footer';
import ScrollToTop      from './components/ScrollToTop';
import HomePage         from './pages/HomePage';
import CatalogPage      from './pages/CatalogPage';
import ChildrenPage     from './pages/ChildrenPage';
import BookDetailPage   from './pages/BookDetailPage';
import AuthPage         from './pages/AuthPage';
import AboutPage        from './pages/AboutPage';
import SearchResultsPage from './pages/SearchResultsPage';

export default function App() {
  const [page,        setPage]        = useState('home');
  const [authMode,    setAuthMode]    = useState('login');
  const [activeBook,  setActiveBook]  = useState(null);
  const [catalogGenre,setCatalogGenre]= useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = (target, param) => {
    window.scrollTo({ top: 0 });
    if (target === 'login' || target === 'register') { setAuthMode(target); setPage('auth'); return; }
    if (target === 'catalog') { setCatalogGenre(param || null); setPage('catalog'); return; }
    setPage(target);
  };

  const handleBookClick = (book) => { setActiveBook(book); setPage('book'); window.scrollTo({ top: 0 }); };
  const handleSearch    = (q)    => { setSearchQuery(q); setPage('search'); };

  return (
    <>
      <Navbar currentPage={page} navigate={navigate} onSearch={handleSearch} />

      {page === 'home'    && <HomePage         navigate={navigate}   onBookClick={handleBookClick} />}
      {page === 'catalog' && <CatalogPage      onBookClick={handleBookClick} initialGenre={catalogGenre} />}
      {page === 'children'&& <ChildrenPage     onBookClick={handleBookClick} />}
      {page === 'book'    && <BookDetailPage   book={activeBook}     navigate={navigate} onBookClick={handleBookClick} />}
      {page === 'auth'    && <AuthPage         mode={authMode}       navigate={navigate} />}
      {page === 'about'   && <AboutPage        navigate={navigate} />}
      {page === 'search'  && <SearchResultsPage query={searchQuery}  onBookClick={handleBookClick} navigate={navigate} />}

      {page !== 'auth' && <Footer navigate={navigate} />}
      <ScrollToTop />
    </>
  );
}
