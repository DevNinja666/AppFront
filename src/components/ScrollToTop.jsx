import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const h = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Наверх"
      style={{
        position: 'fixed', bottom: 32, right: 32,
        width: 50, height: 50, borderRadius: '50%',
        background: 'linear-gradient(135deg,#c9973a,#a0522d)',
        color: '#fff', border: 'none', fontSize: 22,
        cursor: 'pointer', zIndex: 9000,
        boxShadow: '0 4px 20px rgba(201,151,58,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)',
        pointerEvents: visible ? 'all' : 'none',
        transition: 'all 0.3s ease',
      }}
    >↑</button>
  );
}
