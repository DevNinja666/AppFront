export default function Footer({ navigate }) {
  const col = (color, text) => ({ color, fontSize: 14, cursor: 'pointer',
    background: 'none', border: 'none', fontFamily: "'DM Sans',sans-serif",
    padding: 0, transition: 'color 0.2s', display: 'block', marginBottom: 10 });

  return (
    <footer style={{ background: '#1a1208', color: 'rgba(255,255,255,0.6)', padding: '60px 0 32px' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: 48, marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: 'linear-gradient(135deg,#c9973a,#a0522d)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17,
              }}>📚</div>
              <span style={{
                fontFamily: "'Playfair Display',serif", fontSize: 19, fontWeight: 700, color: '#fff',
              }}>Book<span style={{ color: '#e8b84b' }}>Haven</span></span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 230 }}>
              Ваша цифровая библиотека. Тысячи книг по всем жанрам для читателей любого возраста.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {['📘','📷','🐦','▶️'].map((ic, i) => (
                <button key={i} style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  fontSize: 15, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,151,58,0.22)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
                >{ic}</button>
              ))}
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 18 }}>Жанры</h4>
            {['Детективы','Драма','Фантастика','Приключения','Романтика','Классика','Ужасы','Детские'].map(g => (
              <button key={g} onClick={() => navigate('catalog')}
                style={{ ...col(), color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#e8b84b'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >{g}</button>
            ))}
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 18 }}>Разделы</h4>
            {[['Главная','home'],['Каталог','catalog'],['Детям','children'],['О нас','about'],['Войти','login'],['Регистрация','register']].map(([l,p]) => (
              <button key={l} onClick={() => navigate(p)}
                style={{ ...col(), color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#e8b84b'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >{l}</button>
            ))}
          </div>

          {/* Contacts */}
          <div>
            <h4 style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 18 }}>Контакты</h4>
            {[['✉️','info@bookhaven.ru'],['📞','+7 (123) 456-78-90'],['📍','Москва, Россия'],['⏰','Пн–Пт 9:00–18:00']].map(([ic, t]) => (
              <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 14 }}>{ic}</span>
                <span style={{ fontSize: 14 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 26,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontSize: 13 }}>© 2024 BookHaven. Все права защищены.</span>
          <div style={{ display: 'flex', gap: 22 }}>
            {['Конфиденциальность','Условия','Карта сайта'].map(t => (
              <button key={t} style={{
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.38)',
                fontSize: 13, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
                transition: 'color 0.2s', padding: 0,
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#e8b84b'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
              >{t}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
