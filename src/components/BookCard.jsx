import { useState } from 'react';

const GENRE_COLORS = {
  detective: ['#1a2a3a','#2c3e50'],
  drama:     ['#2a0a10','#7c1d2e'],
  fantasy:   ['#0a1a2a','#1a3a5c'],
  adventure: ['#0a1a0a','#2d4a3e'],
  romance:   ['#2a0a2a','#5c2d4a'],
  classic:   ['#1a1204','#4a3a1a'],
  horror:    ['#080a10','#1a1a2e'],
  children:  ['#0a1a0a','#1a5c2d'],
};

export default function BookCard({ book, onClick }) {
  const [err, setErr] = useState(false);
  const [c1, c2] = GENRE_COLORS[book.genre] || ['#1a1a1a','#333'];

  return (
    <div className="book-card" onClick={() => onClick(book)}>
      <div className="book-cover">
        {book.badge && <span className="book-badge">{book.badge}</span>}
        {!err ? (
          <img src={book.cover} alt={book.title} loading="lazy" onError={() => setErr(true)} />
        ) : (
          <div className="book-cover-placeholder"
            style={{ background: `linear-gradient(160deg,${c1},${c2})` }}>
            <div style={{
              fontFamily: "'Playfair Display',serif", fontWeight: 700,
              fontSize: 13, color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.3, textAlign: 'center', marginBottom: 10,
            }}>{book.title}</div>
            <div style={{
              fontFamily: "'Crimson Text',serif", fontStyle: 'italic',
              fontSize: 11, color: 'rgba(255,255,255,0.5)',
            }}>{book.author}</div>
          </div>
        )}
      </div>
      <div className="book-info">
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
        <div className="book-rating">
          {'★'.repeat(Math.round(book.rating))}{'☆'.repeat(5 - Math.round(book.rating))}
          <span style={{ color: '#9e8e7e', fontWeight: 400, marginLeft: 4 }}>{book.rating}</span>
        </div>
      </div>
    </div>
  );
}
