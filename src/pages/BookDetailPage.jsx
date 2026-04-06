import { useState, useEffect } from 'react';
import { BOOKS, GENRES } from '../data/books';

const GC = { detective:['#1a2a3a','#2c3e50'], drama:['#2a0a10','#7c1d2e'], fantasy:['#0a1a2a','#1a3a5c'], adventure:['#0a1a0a','#2d4a3e'], romance:['#2a0a2a','#5c2d4a'], classic:['#1a1204','#4a3a1a'], horror:['#080a10','#1a1a2e'], children:['#0a1a0a','#1a5c2d'] };

export default function BookDetailPage({ book, navigate, onBookClick }) {
  const [imgErr, setImgErr] = useState(false);
  const [fav,    setFav]    = useState(false);
  useEffect(() => { window.scrollTo(0, 0); setImgErr(false); }, [book?.id]);
  if (!book) return null;

  const genre   = GENRES.find(g => g.id === book.genre);
  const related = BOOKS.filter(b => b.genre === book.genre && b.id !== book.id).slice(0, 5);
  const [c1, c2] = GC[book.genre] || ['#111','#333'];

  return (
    <div style={{ paddingTop: 68, minHeight: '100vh', background: 'var(--parchment)' }}>
      {/* Back */}
      <div style={{ background: 'var(--ink)', padding: '14px 0' }}>
        <div className="container">
          <button onClick={() => navigate('catalog')} style={{
            background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)',
            fontSize: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
            display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#e8b84b'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >← Вернуться в каталог</button>
        </div>
      </div>

      {/* Main */}
      <div style={{ background: `linear-gradient(140deg,${c1},${c2})`, padding: '56px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 56, alignItems: 'flex-start' }}>
            {/* Cover */}
            <div style={{ width: 250, borderRadius: 14, overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.65)', aspectRatio: '2/3', flexShrink: 0 }}>
              {!imgErr
                ? <img src={book.cover} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={() => setImgErr(true)} />
                : <div style={{ width: '100%', height: '100%', background: `linear-gradient(160deg,${c1},${c2})`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 16, color: 'rgba(255,255,255,0.9)', marginBottom: 12 }}>{book.title}</div>
                    <div style={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{book.author}</div>
                  </div>
              }
            </div>

            {/* Info */}
            <div>
              {book.badge && <span style={{ display: 'inline-block', background: '#c9973a', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 5, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14 }}>{book.badge}</span>}
              <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(24px,4vw,50px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 10 }}>{book.title}</h1>
              <p style={{ fontFamily: "'Crimson Text',serif", fontSize: 21, color: 'rgba(255,255,255,0.58)', fontStyle: 'italic', marginBottom: 20 }}>{book.author}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 26 }}>
                <span style={{ color: '#f0c040', fontSize: 22 }}>{'★'.repeat(Math.round(book.rating))}{'☆'.repeat(5-Math.round(book.rating))}</span>
                <span style={{ color: '#e8b84b', fontWeight: 700, fontSize: 18 }}>{book.rating}</span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14 }}>/5.0</span>
              </div>
              {/* Meta */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(130px,1fr))', gap: 16, marginBottom: 30 }}>
                {[['Год',book.year > 0 ? book.year : `~${Math.abs(book.year)} до н.э.`],['Страниц',book.pages],['Жанр',genre?.label||book.genre],['Язык','Русский']].map(([l,v]) => (
                  <div key={l} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 10, padding: '13px 15px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.38)', marginBottom: 5 }}>{l}</div>
                    <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              {/* Tags */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
                {book.tags.map(t => (
                  <span key={t} style={{ background: 'rgba(201,151,58,0.15)', border: '1px solid rgba(201,151,58,0.3)', color: '#e8b84b', padding: '5px 14px', borderRadius: 100, fontSize: 13 }}>{t}</span>
                ))}
              </div>
              {/* Actions */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="btn btn-primary" style={{ fontSize: 15, padding: '12px 26px' }}>📖 Читать онлайн</button>
                <button onClick={() => setFav(f => !f)} style={{
                  padding: '12px 26px', borderRadius: 9, fontSize: 15, fontWeight: 600,
                  background: fav ? 'rgba(201,151,58,0.2)' : 'rgba(255,255,255,0.08)',
                  border: `1.5px solid ${fav ? '#c9973a' : 'rgba(255,255,255,0.2)'}`,
                  color: fav ? '#e8b84b' : 'rgba(255,255,255,0.8)',
                  cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", transition: 'all 0.25s',
                }}>{fav ? '❤️ В избранном' : '🤍 В избранное'}</button>
                <button style={{
                  padding: '12px 18px', borderRadius: 9, fontSize: 15, fontWeight: 600,
                  background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.8)', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
                }}>⬇️ Скачать</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div style={{ background: '#fff', padding: '52px 0' }}>
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <div className="section-label">📝 О книге</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 700, color: 'var(--ink)', marginBottom: 18 }}>Описание</h2>
            <p style={{ fontFamily: "'Crimson Text',serif", fontSize: 20, lineHeight: 1.85, color: 'var(--slate)' }}>{book.description}</p>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="section" style={{ background: 'var(--parchment)' }}>
          <div className="container">
            <div className="section-header">
              <div>
                <div className="section-label">{genre?.emoji} {genre?.label}</div>
                <h2 className="section-title">Похожие книги</h2>
              </div>
              <button className="section-link" onClick={() => navigate('catalog', book.genre)}>Все в жанре →</button>
            </div>
            <div className="books-grid">
              {related.map(b => (
                <div key={b.id} className="book-card" onClick={() => onBookClick(b)}>
                  <div className="book-cover">
                    {b.badge && <span className="book-badge">{b.badge}</span>}
                    <img src={b.cover} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.style.display = 'none'; e.target.parentNode.style.background = c1; }}
                    />
                  </div>
                  <div className="book-info">
                    <div className="book-title">{b.title}</div>
                    <div className="book-author">{b.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
