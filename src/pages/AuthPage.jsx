import { useState, useEffect } from 'react';

export default function AuthPage({ mode, navigate }) {
  const [form, setForm] = useState({ name:'', email:'', password:'', confirm:'' });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const isLogin = mode === 'login';
  useEffect(() => { window.scrollTo(0, 0); setDone(false); setErrors({}); }, [mode]);

  const set = (k, v) => { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: '' })); };

  const validate = () => {
    const e = {};
    if (!isLogin && !form.name.trim()) e.name = 'Введите имя';
    if (!form.email.includes('@')) e.email = 'Некорректный email';
    if (form.password.length < 6) e.password = 'Минимум 6 символов';
    if (!isLogin && form.password !== form.confirm) e.confirm = 'Пароли не совпадают';
    setErrors(e);
    return !Object.keys(e).length;
  };

  const inp = (key) => ({
    width: '100%', padding: '12px 15px', borderRadius: 10, fontSize: 15,
    border: `1.5px solid ${errors[key] ? '#e74c3c' : 'rgba(201,151,58,0.28)'}`,
    fontFamily: "'DM Sans',sans-serif", background: '#fafafa', outline: 'none',
    marginTop: 5, transition: 'border-color 0.2s',
  });

  if (done) return (
    <div style={{ paddingTop: 68, minHeight: '100vh', background: 'var(--parchment)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 20, padding: '56px 44px', boxShadow: 'var(--shadow-hover)', textAlign: 'center', maxWidth: 420 }}>
        <div style={{ fontSize: 62, marginBottom: 18 }}>🎉</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 800, marginBottom: 10 }}>{isLogin ? 'Добро пожаловать!' : 'Аккаунт создан!'}</h2>
        <p style={{ color: 'var(--warm-gray)', fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>{isLogin ? `Рады видеть вас снова!` : `Регистрация прошла успешно!`}</p>
        <button className="btn btn-primary" style={{ width: '100%', fontSize: 16, padding: 14 }} onClick={() => navigate('home')}>На главную</button>
      </div>
    </div>
  );

  return (
    <div style={{
      paddingTop: 68, minHeight: '100vh',
      background: 'linear-gradient(135deg,#0c0802,#1a1208)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 16px',
    }}>
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'linear-gradient(rgba(201,151,58,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,151,58,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 450, background: '#fff', borderRadius: 20, padding: '50px 42px', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 34 }}>
          <div style={{ width: 58, height: 58, background: 'linear-gradient(135deg,#c9973a,#a0522d)', borderRadius: 13, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 27, marginBottom: 14 }}>📚</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 800, color: 'var(--ink)', marginBottom: 5 }}>{isLogin ? 'Вход в аккаунт' : 'Регистрация'}</h1>
          <p style={{ fontSize: 13, color: 'var(--warm-gray)' }}>{isLogin ? 'Войдите, чтобы читать любимые книги' : 'Создайте аккаунт — это бесплатно'}</p>
        </div>

        {/* Social */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 26 }}>
          {[['🇬','Google'],['📘','VK']].map(([ic, l]) => (
            <button key={l} style={{ flex: 1, padding: 11, border: '1.5px solid var(--border)', borderRadius: 10, background: '#fff', cursor: 'pointer', fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--cream)'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}
            >{ic} {l}</button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22, color: 'var(--warm-gray)', fontSize: 13 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />или через email<div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {/* Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {!isLogin && (
            <div>
              <label style={{ fontSize: 13, fontWeight: 600 }}>Имя</label>
              <input type="text" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Ваше имя" style={inp('name')}
                onFocus={e => e.target.style.borderColor = '#c9973a'} onBlur={e => e.target.style.borderColor = errors.name ? '#e74c3c' : 'rgba(201,151,58,0.28)'} />
              {errors.name && <div style={{ color: '#e74c3c', fontSize: 12, marginTop: 3 }}>{errors.name}</div>}
            </div>
          )}
          <div>
            <label style={{ fontSize: 13, fontWeight: 600 }}>Email</label>
            <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" style={inp('email')}
              onFocus={e => e.target.style.borderColor = '#c9973a'} onBlur={e => e.target.style.borderColor = errors.email ? '#e74c3c' : 'rgba(201,151,58,0.28)'} />
            {errors.email && <div style={{ color: '#e74c3c', fontSize: 12, marginTop: 3 }}>{errors.email}</div>}
          </div>
          <div>
            <label style={{ fontSize: 13, fontWeight: 600 }}>Пароль</label>
            <input type="password" value={form.password} onChange={e => set('password', e.target.value)} placeholder="Минимум 6 символов" style={inp('password')}
              onFocus={e => e.target.style.borderColor = '#c9973a'} onBlur={e => e.target.style.borderColor = errors.password ? '#e74c3c' : 'rgba(201,151,58,0.28)'} />
            {errors.password && <div style={{ color: '#e74c3c', fontSize: 12, marginTop: 3 }}>{errors.password}</div>}
          </div>
          {!isLogin && (
            <div>
              <label style={{ fontSize: 13, fontWeight: 600 }}>Повтор пароля</label>
              <input type="password" value={form.confirm} onChange={e => set('confirm', e.target.value)} placeholder="Ещё раз..." style={inp('confirm')}
                onFocus={e => e.target.style.borderColor = '#c9973a'} onBlur={e => e.target.style.borderColor = errors.confirm ? '#e74c3c' : 'rgba(201,151,58,0.28)'} />
              {errors.confirm && <div style={{ color: '#e74c3c', fontSize: 12, marginTop: 3 }}>{errors.confirm}</div>}
            </div>
          )}
          {isLogin && (
            <div style={{ textAlign: 'right', marginTop: -6 }}>
              <button style={{ background: 'none', border: 'none', color: 'var(--gold)', fontSize: 13, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>Забыли пароль?</button>
            </div>
          )}
          <button className="btn btn-primary" style={{ width: '100%', fontSize: 16, padding: 14, marginTop: 4 }} onClick={() => validate() && setDone(true)}>
            {isLogin ? '→ Войти' : '✨ Создать аккаунт'}
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: 'var(--warm-gray)' }}>
          {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
          <button onClick={() => navigate(isLogin ? 'register' : 'login')} style={{ background: 'none', border: 'none', color: 'var(--gold)', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
            {isLogin ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </div>
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', color: 'var(--warm-gray)', fontSize: 13, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>← На главную</button>
        </div>
      </div>
    </div>
  );
}
