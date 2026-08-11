import React, { useState } from 'react';

export const InventProDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'bodeguero' | 'prototype' | 'api'>('web');
  const [serverStatus, setServerStatus] = useState<'online' | 'offline'>('online');

  const tabs = [
    { id: 'web' as const, label: 'Web Gerencia (React)', port: 8003, url: 'http://localhost:8003/', desc: 'Panel Admin & Stock' },
    { id: 'bodeguero' as const, label: 'App Bodeguero (Expo)', port: 8005, url: 'http://localhost:8005/', desc: 'Control Móvil Bodega' },
    { id: 'prototype' as const, label: 'Prototipo HTML', port: 8004, url: 'http://localhost:8004/login.html', desc: 'Vista HTML/CSS/JS' },
    { id: 'api' as const, label: 'Backend REST API', port: 3001, url: 'http://localhost:3001/api-docs', desc: 'Node.js Express + Swagger' },
  ];

  const currentTab = tabs.find(t => t.id === activeTab)!;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Tab Selector */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        background: '#0a0f1d',
        padding: '0.5rem',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        flexWrap: 'wrap',
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              background: activeTab === tab.id
                ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                : 'transparent',
              color: activeTab === tab.id ? '#fff' : 'rgba(255,255,255,0.5)',
              fontWeight: activeTab === tab.id ? 700 : 400,
              fontSize: '0.85rem',
              transition: 'all 0.2s ease',
              minWidth: '140px',
            }}
          >
            {tab.label}
            <span style={{
              display: 'block',
              fontSize: '0.7rem',
              fontWeight: 400,
              opacity: 0.7,
              marginTop: '2px'
            }}>{tab.desc}</span>
          </button>
        ))}
      </div>

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
            InventPro — {currentTab.desc} (Docker 1:1)
          </span>
          <span style={{
            background: 'rgba(99, 102, 241, 0.15)',
            color: '#818cf8',
            padding: '0.15rem 0.6rem',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontFamily: "'Fira Code', monospace"
          }}>
            localhost:{currentTab.port}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {activeTab === 'web' && (
            <span style={{ fontSize: '0.75rem', color: '#a7f3d0', fontFamily: "'Fira Code', monospace" }}>
              Credenciales Admin: admin@inventpro.cl / Admin123$
            </span>
          )}
          {activeTab === 'bodeguero' && (
            <span style={{ fontSize: '0.75rem', color: '#fed7aa', fontFamily: "'Fira Code', monospace" }}>
              Credenciales Bodeguero: bodeguero@inventpro.cl / Admin123$
            </span>
          )}
          {activeTab === 'prototype' && (
            <span style={{ fontSize: '0.75rem', color: '#bfdbfe', fontFamily: "'Fira Code', monospace" }}>
              Login Prototipo: admin@inventpro.cl / Admin123$
            </span>
          )}
          <a
            href={currentTab.url}
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

      {/* Iframe Frame */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '650px',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: '#060913'
      }}>
        <iframe
          key={activeTab}
          src={currentTab.url}
          title={`InventPro ${currentTab.label}`}
          style={{ width: '100%', height: '100%', border: 'none' }}
          onError={() => setServerStatus('offline')}
        />
      </div>

      {/* Stack Architecture Info */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '0.75rem',
      }}>
        {[
          { icon: '💻', label: 'Web Gerencia', value: 'React 19 + Vite + Tailwind', port: '8003' },
          { icon: '📱', label: 'App Bodeguero', value: 'Expo (React Native) Web', port: '8005' },
          { icon: '⚙️', label: 'Backend REST API', value: 'Node.js Express + Sequelize', port: '3001' },
          { icon: '🗄️', label: 'Database', value: 'PostgreSQL 16 (Docker)', port: '5433' },
        ].map(item => (
          <div key={item.label} style={{
            background: '#0a0f1d',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '10px',
            padding: '0.75rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>{item.label}</div>
              <div style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.85rem' }}>{item.value}</div>
              <div style={{ color: '#818cf8', fontSize: '0.7rem', fontFamily: "'Fira Code', monospace" }}>
                Port :{item.port}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
