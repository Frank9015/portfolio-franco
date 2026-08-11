import React, { useState } from 'react';

export const RegistraAppDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');
  const [webStatus, setWebStatus] = useState<'online' | 'offline'>('online');
  const [mobileStatus, setMobileStatus] = useState<'online' | 'offline'>('offline');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Control & Switcher Bar */}
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
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('web')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              border: activeTab === 'web' ? '1px solid #6366f1' : '1px solid transparent',
              background: activeTab === 'web' ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
              color: activeTab === 'web' ? '#ffffff' : '#94a3b8',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.88rem'
            }}
          >
            👨‍🏫 Web Docente Original (Django · Docker:8002)
          </button>

          <button
            onClick={() => setActiveTab('mobile')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              border: activeTab === 'mobile' ? '1px solid #22d3ee' : '1px solid transparent',
              background: activeTab === 'mobile' ? 'rgba(6, 182, 212, 0.2)' : 'transparent',
              color: activeTab === 'mobile' ? '#22d3ee' : '#94a3b8',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.88rem'
            }}
          >
            📱 App Móvil Alumno (Ionic Original · Docker:8100)
          </button>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {activeTab === 'web' && (
            <span style={{ fontSize: '0.78rem', color: '#a7f3d0', fontFamily: "'Fira Code', monospace" }}>
              🔑 Credenciales Admin: admin / admin123 (o luis / admin123)
            </span>
          )}

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
            href={activeTab === 'web' ? 'http://localhost:8002/' : 'http://localhost:8100/'}
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
            Abrir {activeTab === 'web' ? ':8002' : ':8100'} ↗
          </a>
        </div>
      </div>

      {/* Main View Display */}
      {activeTab === 'web' ? (
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
            src="http://localhost:8002/"
            title="Registra APP Django Original 1:1"
            style={{ width: '100%', height: '100%', border: 'none' }}
            onError={() => setWebStatus('offline')}
          />
        </div>
      ) : (
        /* Mobile View (Smartphone Frame embedding Ionic Container) */
        <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
          <div style={{
            width: '390px',
            height: '760px',
            background: '#000000',
            borderRadius: '44px',
            border: '12px solid #1e293b',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(34, 211, 238, 0.2)',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* Dynamic Island / Camera Notch */}
            <div style={{
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '110px',
              height: '24px',
              background: '#090d16',
              borderRadius: '20px',
              zIndex: 10,
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}></div>

            <iframe
              src="http://localhost:8100/"
              title="Registra APP Ionic Mobile 1:1"
              style={{
                width: '100%',
                height: 'calc(100% - 36px)',
                marginTop: '36px',
                border: 'none',
                background: '#000000'
              }}
              onError={() => setMobileStatus('offline')}
            />
          </div>
        </div>
      )}
    </div>
  );
};
