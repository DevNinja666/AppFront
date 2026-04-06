import { useEffect } from 'react';
import BookCard from '../components/BookCard';
import { CHILDREN_BOOKS } from '../data/books';

const TIPS = [
  { icon:'📖', title:'Читай каждый день', text:'15 минут чтения в день развивают воображение и словарный запас.' },
  { icon:'🎭', title:'Обсуждай с родителями', text:'Разговор о прочитанном помогает лучше понять героев и мораль.' },
  { icon:'✏️', title:'Веди читательский дневник', text:'Записывай любимые моменты — удивишься, сколько всего запомнишь.' },
  { icon:'🌟', title:'Пробуй разные жанры', text:'Сказки, приключения, научпоп — каждый жанр открывает новый мир.' },
];

export default function ChildrenPage({ onBookClick }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ paddingTop: 68, minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg,#0a3d2b,#1a5c3a,#0f4d2e)',
        padding: '72px 0 58px', position: 'relative', overflow: 'hidden',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: 70, marginBottom: 14 }}>🌈</div>
          <div className="section-label" style={{ marginBottom: 10 }}>Детский уголок</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(30px,5vw,56px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
            Книги для детей
          </h1>
          <p style={{ fontFamily: "'Crimson Text',serif", fontSize: 19, color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '0 auto 30px', lineHeight: 1.7 }}>
            Волшебные истории, любимые герои и захватывающие приключения для читателей от 4 до 14 лет
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🧚 Сказки','🚀 Приключения','🤣 Смешные','💡 Познавательные'].map(t => (
              <span key={t} style={{
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.85)', padding: '7px 18px',
                borderRadius: 100, fontSize: 14, fontWeight: 500,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Age groups */}
      <div style={{ background: 'var(--cream)', padding: '48px 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display',serif", textAlign: 'center', fontSize: 26, fontWeight: 700, color: 'var(--ink)', marginBottom: 26 }}>По возрасту</h2>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { range:'4–6 лет',   emoji:'🐣', bg:'#fff3cd', border:'#f0c040' },
              { range:'7–9 лет',   emoji:'🌱', bg:'#d4edda', border:'#5cb85c' },
              { range:'10–12 лет', emoji:'🔭', bg:'#cce5ff', border:'#4a90d9' },
              { range:'12–14 лет', emoji:'📚', bg:'#f8d7da', border:'#e74c3c' },
            ].map(a => (
              <div key={a.range} style={{
                background: a.bg, border: `2px solid ${a.border}`,
                borderRadius: 14, padding: '18px 28px',
                textAlign: 'center', minWidth: 140, cursor: 'pointer',
                transition: 'transform 0.25s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                <div style={{ fontSize: 36, marginBottom: 8 }}>{a.emoji}</div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{a.range}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Books */}
      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-label">🌟 Коллекция</div>
              <h2 className="section-title">Все детские книги</h2>
            </div>
          </div>
          <div className="books-grid">
            {CHILDREN_BOOKS.map(b => <BookCard key={b.id} book={b} onClick={onBookClick} />)}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-label">💡 Советы</div>
            <h2 className="section-title">Как полюбить чтение</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
            {TIPS.map((t, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 16, padding: '28px 24px',
                boxShadow: 'var(--shadow)', textAlign: 'center',
                transition: 'transform 0.25s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                <div style={{ fontSize: 40, marginBottom: 14 }}>{t.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{t.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--warm-gray)', lineHeight: 1.65 }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For parents */}
      <section className="section" style={{ background: 'var(--ink)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: 50, marginBottom: 14 }}>👨‍👩‍👧‍👦</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,3.5vw,36px)', fontWeight: 800, color: '#fff', marginBottom: 14 }}>Для родителей</h2>
          <p style={{ fontFamily: "'Crimson Text',serif", fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Все книги проверены педагогами. Читайте вместе — это лучший способ воспитать любовь к чтению.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['✅ Безопасный контент','📝 Аннотации для родителей','🎯 Возрастные рекомендации'].map(f => (
              <div key={f} style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: 'rgba(255,255,255,0.8)',
                padding: '10px 20px', borderRadius: 100, fontSize: 14,
              }}>{f}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
