import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { BOOKS, GENRES } from '../data/books';

const SORT_OPTIONS = [
  { value:'rating', label:'⭐ По рейтингу' },
  { value:'year',   label:'📅 По году' },
  { value:'title',  label:'🔤 По алфавиту' },
  { value:'pages',  label:'📄 По объёму' },
];
const PER_PAGE = 20;

export default function CatalogPage({ onBookClick, initialGenre }) {
  const [genre,  setGenre]  = useState(initialGenre || 'all');
  const [sort,   setSort]   = useState('rating');
  const [search, setSearch] = useState('');
  const [page,   setPage]   = useState(1);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => { if (initialGenre) setGenre(initialGenre); }, [initialGenre]);
  useEffect(() => { setPage(1); }, [genre, sort, search]);

  const filtered = BOOKS
    .filter(b => genre === 'all' || b.genre === genre)
    .filter(b => {
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return b.title.toLowerCase().includes(q) ||
             b.author.toLowerCase().includes(q) ||
             b.tags.some(t => t.toLowerCase().includes(q));
    })
    .sort((a, b) => {
      if (sort === 'rating') return b.rating - a.rating;
      if (sort === 'year')   return b.year - a.year;
      if (sort === 'title')  return a.title.localeCompare(b.title, 'ru');
      if (sort === 'pages')  return b.pages - a.pages;
      return 0;
    });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goPage = (p) => { setPage(p); window.scrollTo({ top: 300, behavior: 'smooth' }); };

  return (
    <div style={{ paddingTop: 68, minHeight: '100vh', background: 'var(--parchment)' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(140deg,#0c0802,#1a1208)', padding: '60px 0 46px' }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 10 }}>📖 Вся коллекция</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(30px,5vw,54px)', fontWeight: 900, color: '#fff', marginBottom: 12 }}>Каталог книг</h1>
          <p style={{ fontFamily: "'Crimson Text',serif", fontSize: 18, color: 'rgba(255,255,255,0.52)' }}>{BOOKS.length} книг · {GENRES.length} жанров</p>
        </div>
      </div>

      <div className="container" style={{ padding: '38px 32px' }}>
        {/* Toolbar */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 28, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 220, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', fontSize: 15, pointerEvents: 'none' }}>🔍</span>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Поиск по названию, автору..."
              style={{
                width: '100%', padding: '11px 14px 11px 40px', borderRadius: 10,
                border: '1.5px solid var(--border)', background: '#fff', fontSize: 14,
                fontFamily: "'DM Sans',sans-serif", outline: 'none', transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = '#c9973a'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
          <select value={sort} onChange={e => setSort(e.target.value)} style={{
            padding: '11px 16px', borderRadius: 10, border: '1.5px solid var(--border)',
            background: '#fff', fontSize: 14, fontFamily: "'DM Sans',sans-serif",
            cursor: 'pointer', outline: 'none',
          }}>
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <span style={{ fontSize: 13, color: 'var(--warm-gray)', whiteSpace: 'nowrap' }}>
            Найдено: <strong>{filtered.length}</strong>
          </span>
        </div>

        {/* Genre chips */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 34 }}>
          <button className={`chip ${genre === 'all' ? 'active' : ''}`} onClick={() => setGenre('all')}>
            🌐 Все ({BOOKS.length})
          </button>
          {GENRES.map(g => (
            <button key={g.id} className={`chip ${genre === g.id ? 'active' : ''}`} onClick={() => setGenre(g.id)}>
              {g.emoji} {g.label} ({g.count})
            </button>
          ))}
        </div>

        {/* Books */}
        {paginated.length > 0 ? (
          <div className="books-grid">
            {paginated.map(b => <BookCard key={b.id} book={b} onClick={onBookClick} />)}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <div style={{ fontSize: 60, marginBottom: 14 }}>📭</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, marginBottom: 8 }}>Ничего не найдено</h3>
            <p style={{ color: 'var(--warm-gray)' }}>Попробуйте другой запрос или жанр</p>
            <button className="btn btn-primary" style={{ marginTop: 22 }}
              onClick={() => { setSearch(''); setGenre('all'); }}>Сбросить фильтры</button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 50, flexWrap: 'wrap', alignItems: 'center' }}>
            <button disabled={page === 1} onClick={() => goPage(page - 1)} style={{
              padding: '9px 18px', borderRadius: 8, border: '1.5px solid var(--border)',
              background: '#fff', cursor: page === 1 ? 'not-allowed' : 'pointer',
              opacity: page === 1 ? 0.4 : 1, fontSize: 14, fontFamily: "'DM Sans',sans-serif",
            }}>← Назад</button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
              .reduce((acc, p, idx, arr) => {
                if (idx > 0 && arr[idx - 1] !== p - 1) acc.push('...');
                acc.push(p);
                return acc;
              }, [])
              .map((p, i) => p === '...'
                ? <span key={`e${i}`} style={{ padding: '9px 6px', color: 'var(--warm-gray)' }}>…</span>
                : <button key={p} onClick={() => goPage(p)} style={{
                    padding: '9px 16px', borderRadius: 8,
                    border: `1.5px solid ${p === page ? '#c9973a' : 'var(--border)'}`,
                    background: p === page ? 'linear-gradient(135deg,#c9973a,#a0522d)' : '#fff',
                    color: p === page ? '#fff' : 'var(--ink)',
                    cursor: 'pointer', fontWeight: p === page ? 700 : 400,
                    fontSize: 14, fontFamily: "'DM Sans',sans-serif",
                  }}>{p}</button>
              )}

            <button disabled={page === totalPages} onClick={() => goPage(page + 1)} style={{
              padding: '9px 18px', borderRadius: 8, border: '1.5px solid var(--border)',
              background: '#fff', cursor: page === totalPages ? 'not-allowed' : 'pointer',
              opacity: page === totalPages ? 0.4 : 1, fontSize: 14, fontFamily: "'DM Sans',sans-serif",
            }}>Вперёд →</button>
          </div>
        )}
      </div>
    </div>
  );
}
