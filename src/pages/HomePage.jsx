import { useEffect } from 'react';
import BookCard from '../components/BookCard';
import { POPULAR_BOOKS, GENRES, BOOKS, NEW_BOOKS } from '../data/books';

const HERO_BOOKS = BOOKS.filter(b => b.rating >= 4.8).slice(0, 6);
const GENRE_IMAGES = {
  detective:'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80',
  drama:    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  fantasy:  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
  adventure:'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&q=80',
  romance:  'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400&q=80',
  classic:  'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&q=80',
  horror:   'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&q=80',
  children: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
};
const TESTIMONIALS = [
  { name:'Анна М.', city:'Москва', stars:5, text:'Наконец нашла сайт, где можно найти и классику, и современные новинки. Удобная навигация, красивый дизайн.' },
  { name:'Дмитрий К.', city:'Санкт-Петербург', stars:5, text:'Отличная подборка по всем жанрам. Особенно порадовал детский раздел — сын нашёл всех своих любимых героев.' },
  { name:'Мария С.', city:'Казань', stars:5, text:'Использую для подбора книг по школьной программе. Описания помогают понять, о чём книга.' },
];

export default function HomePage({ navigate, onBookClick }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const featured = BOOKS[20]; // Дюна

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(140deg,#0c0802 0%,#1a1208 45%,#241608 100%)',
        display: 'flex', alignItems: 'center',
        paddingTop: 68, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(201,151,58,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,151,58,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 65% 50%,rgba(201,151,58,0.07) 0%,transparent 60%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '80px 32px' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 72, alignItems: 'center',
          }}>
            {/* Left */}
            <div className="animate-fadeup">
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(201,151,58,0.1)', border: '1px solid rgba(201,151,58,0.3)',
                color: '#e8b84b', padding: '6px 16px', borderRadius: 100,
                fontSize: 13, fontWeight: 500, marginBottom: 24,
              }}>✨ Более 80 книг в каталоге</div>

              <h1 style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: 'clamp(40px,5.5vw,74px)',
                fontWeight: 900, color: '#fff', lineHeight: 1.05, marginBottom: 24,
              }}>
                Открой мир
                <em style={{ display: 'block', fontStyle: 'italic', color: '#e8b84b' }}>
                  великих книг
                </em>
              </h1>

              <p style={{
                fontFamily: "'Crimson Text',serif",
                fontSize: 20, color: 'rgba(255,255,255,0.62)',
                lineHeight: 1.75, marginBottom: 40,
              }}>
                Детективы, классика, фантастика, романы — тысячи историй ждут тебя.
                Читай, сохраняй любимое, открывай новое.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 52 }}>
                <button className="btn btn-primary" style={{ fontSize: 16, padding: '13px 30px' }}
                  onClick={() => navigate('catalog')}>📖 Перейти в каталог</button>
                <button onClick={() => navigate('register')} style={{
                  padding: '13px 30px', fontSize: 16, fontWeight: 500,
                  background: 'transparent', color: 'rgba(255,255,255,0.75)',
                  border: '1.5px solid rgba(255,255,255,0.2)', borderRadius: 9, cursor: 'pointer',
                  fontFamily: "'DM Sans',sans-serif", transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
                >Регистрация</button>
              </div>

              <div style={{ display: 'flex', gap: 40 }}>
                {[['80+','Книг в каталоге'],['8','Жанров'],['∞','Часов чтения']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 700, color: '#e8b84b' }}>{n}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — book mosaic */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
              gap: 14, animation: 'fadeUp 0.9s 0.15s ease both',
            }}>
              {HERO_BOOKS.map((book, i) => (
                <div key={book.id} onClick={() => onBookClick(book)} style={{
                  borderRadius: 10, overflow: 'hidden',
                  aspectRatio: '2/3',
                  boxShadow: '0 8px 28px rgba(0,0,0,0.5)',
                  cursor: 'pointer',
                  transform: i % 2 === 1 ? 'translateY(22px)' : 'none',
                  transition: 'transform 0.35s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = `translateY(${i % 2 === 1 ? 12 : -8}px) scale(1.04)`}
                  onMouseLeave={e => e.currentTarget.style.transform = i % 2 === 1 ? 'translateY(22px)' : 'none'}
                >
                  <img src={book.cover} alt={book.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { e.target.style.display = 'none'; e.target.parentNode.style.background = '#2d4a3e'; }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POPULAR ── */}
      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-label">🔥 Рейтинг читателей</div>
              <h2 className="section-title">Популярные книги</h2>
            </div>
            <button className="section-link" onClick={() => navigate('catalog')}>Все книги →</button>
          </div>
          <div className="books-grid">
            {POPULAR_BOOKS.map(b => <BookCard key={b.id} book={b} onClick={onBookClick} />)}
          </div>
        </div>
      </section>

      {/* ── GENRES ── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-label">📂 Разделы</div>
              <h2 className="section-title">Жанры</h2>
            </div>
            <button className="section-link" onClick={() => navigate('catalog')}>Каталог →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 18 }}>
            {GENRES.map(g => (
              <div key={g.id} className="genre-card" onClick={() => navigate('catalog', g.id)}>
                <img src={GENRE_IMAGES[g.id]} alt={g.label}
                  onError={e => { e.target.style.display = 'none'; e.target.parentNode.style.background = g.color; }}
                />
                <div className="genre-overlay">
                  <div style={{ fontSize: 26, marginBottom: 4 }}>{g.emoji}</div>
                  <div className="genre-name">{g.label}</div>
                  <div className="genre-count">{g.count} книг</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 72, alignItems: 'center' }}>
            <div style={{
              width: 260, borderRadius: 16, overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.65)', aspectRatio: '2/3', flexShrink: 0,
            }}>
              <img src={featured.cover} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#e8b84b', marginBottom: 14 }}>⭐ Книга месяца</div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4.5vw,52px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 10 }}>{featured.title}</h2>
              <p style={{ fontFamily: "'Crimson Text',serif", fontSize: 20, color: 'rgba(255,255,255,0.55)', fontStyle: 'italic', marginBottom: 22 }}>{featured.author}</p>
              <p style={{ fontFamily: "'Crimson Text',serif", fontSize: 19, lineHeight: 1.8, color: 'rgba(255,255,255,0.68)', marginBottom: 34, maxWidth: 580 }}>{featured.description}</p>
              <div style={{ display: 'flex', gap: 36, marginBottom: 34 }}>
                {[['Год',featured.year],['Страниц',featured.pages],['Рейтинг',`${featured.rating}/5`],['Жанр','Фантастика']].map(([l, v]) => (
                  <div key={l}>
                    <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.38)' }}>{l}</div>
                    <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.88)', fontWeight: 600, marginTop: 4 }}>{v}</div>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}
                onClick={() => onBookClick(featured)}>📖 Подробнее</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW BOOKS ── */}
      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-label">🆕 Современная проза</div>
              <h2 className="section-title">Книги нового времени</h2>
            </div>
            <button className="section-link" onClick={() => navigate('catalog')}>Смотреть все →</button>
          </div>
          <div className="books-grid">
            {NEW_BOOKS.map(b => <BookCard key={b.id} book={b} onClick={onBookClick} />)}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="section" style={{ background: 'linear-gradient(135deg,#c9973a,#a0522d)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: 48, marginBottom: 14 }}>📬</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,3.5vw,38px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Не пропусти новинки</h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 18, marginBottom: 34, fontFamily: "'Crimson Text',serif" }}>Подпишись и получай подборки лучших книг каждую неделю</p>
          <div style={{ display: 'flex', gap: 10, maxWidth: 500, margin: '0 auto', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input type="email" placeholder="Твой email..." style={{
              flex: 1, minWidth: 200, padding: '13px 20px', borderRadius: 9,
              border: 'none', fontSize: 15, fontFamily: "'DM Sans',sans-serif", outline: 'none',
            }} />
            <button style={{
              background: 'var(--ink)', color: '#e8b84b', border: 'none', borderRadius: 9,
              padding: '13px 24px', fontSize: 15, fontWeight: 700,
              cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
            }}>Подписаться</button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-label">💬 Отзывы</div>
              <h2 className="section-title">Что говорят читатели</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 22 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, padding: 28, boxShadow: 'var(--shadow)' }}>
                <div style={{ color: '#e8b84b', fontSize: 18, marginBottom: 14 }}>{'★'.repeat(t.stars)}</div>
                <p style={{ fontFamily: "'Crimson Text',serif", fontSize: 17, lineHeight: 1.75, color: 'var(--slate)', fontStyle: 'italic', marginBottom: 20 }}>«{t.text}»</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: 'linear-gradient(135deg,#c9973a,#a0522d)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 700, fontSize: 15,
                  }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--warm-gray)' }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
