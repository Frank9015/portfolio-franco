import React, { useState } from 'react';

export const CaosNewsDemo: React.FC = () => {
  const [serverStatus, setServerStatus] = useState<'online' | 'offline'>('online');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Control Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#0a0f1d',
        padding: '0.75rem 1.25rem',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: serverStatus === 'online' ? '#10b981' : '#f87171',
            boxShadow: serverStatus === 'online' ? '0 0 10px #10b981' : '0 0 10px #f87171'
          }}></span>
          <span style={{ color: '#f8fafc', fontWeight: 700, fontSize: '0.9rem' }}>
            Servidor Django Original 1:1 (CaosNews · Docker)
          </span>
          <span style={{
            background: 'rgba(99, 102, 241, 0.15)',
            color: '#818cf8',
            padding: '0.15rem 0.6rem',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontFamily: "'Fira Code', monospace"
          }}>
            http://localhost:8001/
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', color: '#a7f3d0', fontFamily: "'Fira Code', monospace" }}>
            🔑 Credenciales Admin: admin / admin123
          </span>

          <span style={{
            fontSize: '0.75rem',
            color: '#cbd5e1',
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '0.2rem 0.5rem',
            borderRadius: '4px',
            fontFamily: "'Fira Code', monospace"
          }}>
            🛡️ Sandbox Efímero (Restaurable)
          </span>

          <a
            href="https://caosnews-demo.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.82rem',
              color: '#22d3ee',
              textDecoration: 'none',
              fontFamily: "'Fira Code', monospace",
              fontWeight: 600
            }}
          >
            Abrir en ventana completa ↗
          </a>
        </div>
      </div>

      {/* 1:1 Live Original Django Iframe */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '650px',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: '#ffffff'
      }}>
        <iframe
          src="https://caosnews-demo.onrender.com/"
          title="CaosNews Django Original 1:1"
          style={{ width: '100%', height: '100%', border: 'none' }}
          onError={() => setServerStatus('offline')}
        />
      </div>
    </div>
  );
};
