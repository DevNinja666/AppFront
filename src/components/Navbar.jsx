import { useState, useEffect } from 'react';

export default function Navbar({ currentPage, navigate, onSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) { onSearch(query.trim()); setSearchOpen(false); setQuery(''); }
  };

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: scrolled ? 'rgba(20,13,5,0.99)' : 'rgba(20,13,5,0.94)',
    backdropFilter: 'blur(14px)',
    borderBottom: '1px solid rgba(201,151,58,0.2)',
    boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.35)' : 'none',
    transition: 'all 0.3s ease',
  };

  const links = [
    { id: 'home',     label: 'Главная' },
    { id: 'catalog',  label: 'Каталог' },
    { id: 'children', label: 'Детям' },
    { id: 'about',    label: 'О нас' },
  ];

  return (
    <nav style={navStyle}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 32px',
        height: 68, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 24,
      }}>
        {/* Logo */}
        <button onClick={() => navigate('home')} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0,
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 8,
            background: 'linear-gradient(135deg,#c9973a,#a0522d)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
          }}>📚</div>
          <span style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 21, fontWeight: 700, color: '#fff',
          }}>Book<span style={{ color: '#e8b84b' }}>Haven</span></span>
        </button>

        {/* Desktop links */}
        <ul style={{ display: 'flex', listStyle: 'none', gap: 2, margin: 0 }}>
          {links.map(l => (
            <li key={l.id}>
              <button onClick={() => navigate(l.id)} style={{
                background: 'none', border: 'none',
                padding: '8px 16px', borderRadius: 7,
                color: currentPage === l.id ? '#e8b84b' : 'rgba(255,255,255,0.7)',
                fontSize: 14, fontWeight: 500, cursor: 'pointer',
                fontFamily: "'DM Sans',sans-serif",
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { if (currentPage !== l.id) e.currentTarget.style.color = '#e8b84b'; }}
                onMouseLeave={e => { if (currentPage !== l.id) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              >{l.label}</button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => setSearchOpen(s => !s)} style={{
            background: 'none', border: 'none', fontSize: 17,
            cursor: 'pointer', padding: '7px 10px', borderRadius: 7,
            color: 'rgba(255,255,255,0.7)', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'none'}
          >🔍</button>
          <button onClick={() => navigate('login')} style={{
            padding: '8px 18px', borderRadius: 8, fontSize: 14, fontWeight: 600,
            background: 'transparent', border: '1.5px solid rgba(201,151,58,0.55)',
            color: '#e8b84b', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,151,58,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >Войти</button>
          <button onClick={() => navigate('register')} style={{
            padding: '8px 18px', borderRadius: 8, fontSize: 14, fontWeight: 600,
            background: 'linear-gradient(135deg,#c9973a,#a0522d)',
            color: '#fff', border: 'none', cursor: 'pointer',
            fontFamily: "'DM Sans',sans-serif",
            boxShadow: '0 2px 12px rgba(201,151,58,0.35)',
            transition: 'all 0.25s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >Регистрация</button>
          {/* Burger */}
          <button onClick={() => setMenuOpen(m => !m)} style={{
            display: 'none', background: 'none', border: 'none',
            color: '#fff', fontSize: 22, cursor: 'pointer', padding: 6,
          }} id="burger">{menuOpen ? '✕' : '☰'}</button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <form onSubmit={handleSearch} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '12px 32px',
          borderTop: '1px solid rgba(201,151,58,0.15)',
          background: 'rgba(20,13,5,0.99)',
          animation: 'fadeUp 0.25s ease',
        }}>
          <input
            autoFocus type="text" value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Поиск книг, авторов, жанров..."
            style={{
              flex: 1, padding: '10px 18px', borderRadius: 9,
              border: '1.5px solid rgba(201,151,58,0.3)',
              background: 'rgba(255,255,255,0.07)', color: '#fff',
              fontSize: 15, fontFamily: "'DM Sans',sans-serif", outline: 'none',
            }}
            onFocus={e => e.target.style.borderColor = '#c9973a'}
            onBlur={e => e.target.style.borderColor = 'rgba(201,151,58,0.3)'}
          />
          <button type="submit" className="btn btn-primary" style={{ padding: '10px 22px' }}>Найти</button>
          <button type="button" onClick={() => setSearchOpen(false)} style={{
            background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)',
            fontSize: 20, cursor: 'pointer', lineHeight: 1,
          }}>✕</button>
        </form>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          display: 'flex', flexDirection: 'column',
          padding: '10px 16px 18px',
          borderTop: '1px solid rgba(201,151,58,0.15)',
          gap: 4,
        }}>
          {[...links,
            { id: 'login',    label: '🔑 Войти' },
            { id: 'register', label: '✨ Регистрация' },
          ].map(l => (
            <button key={l.id} onClick={() => { navigate(l.id); setMenuOpen(false); }} style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)',
              textAlign: 'left', padding: '12px 16px', borderRadius: 8,
              fontSize: 15, fontFamily: "'DM Sans',sans-serif", cursor: 'pointer',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,151,58,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >{l.label}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          #burger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
