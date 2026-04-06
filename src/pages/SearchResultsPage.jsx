import { useEffect } from 'react';
import { BOOKS, GENRES } from '../data/books';

const TEAM = [
  { name:'Александр Петров', role:'Основатель & CEO',    emoji:'👨‍💼' },
  { name:'Мария Иванова',    role:'Главный редактор',    emoji:'👩‍💻' },
  { name:'Дмитрий Соколов',  role:'Куратор контента',    emoji:'📚' },
  { name:'Анна Смирнова',    role:'UX Дизайнер',         emoji:'🎨' },
];
const VALUES = [
  { icon:'📚', title:'Доступность',  text:'Тысячи книг бесплатно и без ограничений для каждого читателя.' },
  { icon:'🌍', title:'Разнообразие', text:'Книги разных эпох, культур, жанров — от античности до наших дней.' },
  { icon:'🔒', title:'Безопасность', text:'Проверенный контент и защита данных наших пользователей.' },
  { icon:'❤️', title:'Сообщество',   text:'Объединяем читателей по всему миру общей любовью к книгам.' },
];

export default function AboutPage({ navigate }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ paddingTop: 68, minHeight: '100vh', background: 'var(--parchment)' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(140deg,#0c0802,#1a1208)', padding: '70px 0 58px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%,rgba(201,151,58,0.07) 0%,transparent 70%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 62, marginBottom: 14 }}>📚</div>
          <div className="section-label" style={{ marginBottom: 10 }}>О проекте</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(30px,5vw,54px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
            О <span style={{ color: '#e8b84b' }}>BookHaven</span>
          </h1>
          <p style={{ fontFamily: "'Crimson Text',serif", fontSize: 19, color: 'rgba(255,255,255,0.65)', maxWidth: 550, margin: '0 auto', lineHeight: 1.75 }}>
            Мы создаём лучшее место для книголюбов — огромная коллекция, удобная навигация и живое сообщество читателей.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: 'var(--cream)', padding: '52px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 22 }}>
            {[[`${BOOKS.length}+`,'Книг','📖'],['8','Жанров','🗂️'],['50K+','Читателей','👥'],['4.9','Рейтинг','⭐']].map(([n, l, e]) => (
              <div key={l} style={{ background: '#fff', borderRadius: 16, padding: 26, textAlign: 'center', boxShadow: 'var(--shadow)' }}>
                <div style={{ fontSize: 34, marginBottom: 8 }}>{e}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 900, color: '#c9973a' }}>{n}</div>
                <div style={{ fontSize: 13, color: 'var(--warm-gray)', marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div className="section-label">🎯 Миссия</div>
              <h2 className="section-title" style={{ marginBottom: 20 }}>Книги доступны каждому</h2>
              <p style={{ fontFamily: "'Crimson Text',serif", fontSize: 18, lineHeight: 1.85, color: 'var(--slate)', marginBottom: 18 }}>
                BookHaven основан с простой целью — сделать чтение доступным для всех. Мы верим, что каждый человек заслуживает возможности читать великие книги.
              </p>
              <p style={{ fontFamily: "'Crimson Text',serif", fontSize: 18, lineHeight: 1.85, color: 'var(--slate)' }}>
                С 2020 года мы собираем лучшие произведения мировой литературы. Сегодня нас читают тысячи людей по всей России и СНГ.
              </p>
            </div>
            <div style={{ background: 'linear-gradient(135deg,var(--ink),#2a1a08)', borderRadius: 20, padding: '44px 38px' }}>
              <div style={{ fontSize: 38, marginBottom: 18 }}>💬</div>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontStyle: 'italic', lineHeight: 1.65, color: 'rgba(255,255,255,0.88)', marginBottom: 22 }}>
                «Читатель живёт тысячи жизней, прежде чем умереть. Тот, кто никогда не читает, проживает только одну.»
              </p>
              <div style={{ fontSize: 14, color: '#e8b84b' }}>— Джордж Р. Р. Мартин</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-label">💎 Принципы</div>
            <h2 className="section-title">Наши ценности</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
            {VALUES.map((v, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '30px 24px', boxShadow: 'var(--shadow)', textAlign: 'center', transition: 'transform 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                <div style={{ fontSize: 42, marginBottom: 14 }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--warm-gray)', lineHeight: 1.65 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-label">👥 Команда</div>
            <h2 className="section-title">Кто мы</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 20 }}>
            {TEAM.map((m, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '30px 22px', textAlign: 'center', boxShadow: 'var(--shadow)', transition: 'transform 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'linear-gradient(135deg,#c9973a,#a0522d)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, margin: '0 auto 16px' }}>{m.emoji}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 700, marginBottom: 5 }}>{m.name}</h3>
                <p style={{ fontSize: 13, color: 'var(--warm-gray)' }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg,#c9973a,#a0522d)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,4vw,40px)', fontWeight: 900, color: '#fff', marginBottom: 14 }}>Присоединяйтесь к нам</h2>
          <p style={{ fontFamily: "'Crimson Text',serif", fontSize: 18, color: 'rgba(255,255,255,0.82)', marginBottom: 32, maxWidth: 460, margin: '0 auto 32px' }}>Тысячи читателей уже с нами. Создайте аккаунт и откройте весь каталог.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn" style={{ background: 'var(--ink)', color: '#e8b84b', fontSize: 15, padding: '13px 28px' }} onClick={() => navigate('register')}>✨ Регистрация</button>
            <button className="btn" style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.4)', color: '#fff', fontSize: 15, padding: '13px 28px' }} onClick={() => navigate('catalog')}>📖 Каталог</button>
          </div>
        </div>
      </section>
    </div>
  );
}
