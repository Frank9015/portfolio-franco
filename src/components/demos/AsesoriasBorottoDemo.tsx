import React, { useState } from 'react';
import { DevToolsInspector, type ApiLog } from './DevToolsInspector';

export const AsesoriasBorottoDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'live' | 'simulator'>('live');
  const [ufValue, setUfValue] = useState<number>(37850);
  const [ufPlan, setUfPlan] = useState<number>(2.5); // UF
  const [emailInput, setEmailInput] = useState<string>('cliente.empresa@ejemplo.com');
  const [generatedToken, setGeneratedToken] = useState<string | null>(null);

  const [logs, setLogs] = useState<ApiLog[]>([
    {
      id: 'log-1',
      timestamp: new Date().toLocaleTimeString(),
      method: 'GET',
      endpoint: '/api/v1/uf-rate',
      status: 200,
      responsePayload: { uf: 37850, fecha: new Date().toISOString().split('T')[0] }
    }
  ]);

  const addLog = (newLog: Omit<ApiLog, 'id' | 'timestamp'>) => {
    const logItem: ApiLog = {
      ...newLog,
      id: 'log-' + Date.now(),
      timestamp: new Date().toLocaleTimeString()
    };
    setLogs(prev => [logItem, ...prev]);
  };

  const handleGenerateReviewToken = () => {
    const token = 'uuid-' + Math.random().toString(36).substring(2, 9) + '-' + Math.random().toString(36).substring(2, 9);
    setGeneratedToken(token);

    addLog({
      method: 'POST',
      endpoint: '/api/v1/reviews/generate-token',
      status: 201,
      requestPayload: { email: emailInput, expiration: '24h' },
      responsePayload: {
        success: true,
        token,
        singleUseUrl: `https://asesoriasborotto.cl/resena?token=${token}`,
        message: 'Token de reseña verificado creado exitosamente.'
      }
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Demo Controls */}
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
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setActiveTab('live')}
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: '6px',
              border: activeTab === 'live' ? '1px solid #10b981' : '1px solid transparent',
              background: activeTab === 'live' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
              color: activeTab === 'live' ? '#34d399' : '#94a3b8',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            🟢 Embed Live (Vercel)
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: '6px',
              border: activeTab === 'simulator' ? '1px solid #6366f1' : '1px solid transparent',
              background: activeTab === 'simulator' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              color: activeTab === 'simulator' ? '#818cf8' : '#94a3b8',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            ⚡ Simulador Anti-Spam (UUID Tokens)
          </button>
        </div>

        <a
          href="https://asesoriasborotto.cl/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '0.8rem',
            color: '#22d3ee',
            textDecoration: 'none',
            fontFamily: "'Fira Code', monospace"
          }}
        >
          Abrir en pestaña nueva ↗
        </a>
      </div>

      {/* Main Sandbox Frame */}
      {activeTab === 'live' ? (
        <div style={{
          position: 'relative',
          width: '100%',
          height: '600px',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: '#060913'
        }}>
          <iframe
            src="https://asesoriasborotto.cl/"
            title="Asesorías Borotto Live Demo"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      ) : (
        <div style={{
          background: '#060913',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {/* Simulator Box 1: UF Calculator */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '1.25rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <h4 style={{ color: '#22d3ee', marginBottom: '0.75rem', fontSize: '1.05rem' }}>🧮 Simulación de Cotización en UF</h4>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.3rem' }}>Plan Seleccionado (UF):</label>
              <select
                value={ufPlan}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setUfPlan(val);
                  addLog({
                    method: 'GET',
                    endpoint: `/api/v1/planes/calcular?uf=${val}`,
                    status: 200,
                    responsePayload: { planUF: val, totalCLP: Math.round(val * ufValue) }
                  });
                }}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  background: '#0a0f1d',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  borderRadius: '6px'
                }}
              >
                <option value={1.5}>Plan Emprendedor (1.5 UF/mes)</option>
                <option value={2.5}>Plan Pyme Pro (2.5 UF/mes)</option>
                <option value={5.0}>Plan Corporativo (5.0 UF/mes)</option>
              </select>
            </div>

            <div style={{
              background: '#0a0f1d',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center',
              fontFamily: "'Fira Code', monospace"
            }}>
              <span style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block' }}>Cálculo estimado en CLP:</span>
              <span style={{ color: '#10b981', fontSize: '1.4rem', fontWeight: 800 }}>
                ${(ufPlan * ufValue).toLocaleString('es-CL')} CLP
              </span>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block', marginTop: '0.2rem' }}>
                (Valor UF actual: ${ufValue.toLocaleString('es-CL')})
              </span>
            </div>
          </div>

          {/* Simulator Box 2: Anti-Spam UUID Review Tokens */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '1.25rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <h4 style={{ color: '#818cf8', marginBottom: '0.75rem', fontSize: '1.05rem' }}>🛡️ Sistema Anti-Spam de Reseñas Verificadas</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
              Los clientes sólo pueden publicar reseñas mediante un token UUID de un solo uso enviado por correo.
            </p>

            <div style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="email.cliente@ejemplo.com"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  background: '#0a0f1d',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  borderRadius: '6px',
                  marginBottom: '0.5rem'
                }}
              />
              <button
                onClick={handleGenerateReviewToken}
                style={{
                  width: '100%',
                  padding: '0.6rem',
                  background: '#6366f1',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Generar Enlace Token UUID
              </button>
            </div>

            {generatedToken && (
              <div style={{
                background: '#0a0f1d',
                padding: '0.75rem',
                borderRadius: '8px',
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.75rem',
                wordBreak: 'break-all'
              }}>
                <span style={{ color: '#38bdf8' }}>Token Generado:</span>
                <div style={{ color: '#a7f3d0', marginTop: '0.2rem' }}>{generatedToken}</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* API DevTools Inspector */}
      <DevToolsInspector logs={logs} onClearLogs={() => setLogs([])} />
    </div>
  );
};
