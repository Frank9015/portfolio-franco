import React, { useState } from 'react';

export interface ApiLog {
  id: string;
  timestamp: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  status: number;
  requestPayload?: any;
  responsePayload: any;
}

interface Props {
  logs: ApiLog[];
  onClearLogs?: () => void;
}

export const DevToolsInspector: React.FC<Props> = ({ logs, onClearLogs }) => {
  const [activeLogId, setActiveLogId] = useState<string | null>(logs[0]?.id || null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const selectedLog = logs.find(l => l.id === activeLogId) || logs[0];

  return (
    <div style={{
      background: '#0a0f1d',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      overflow: 'hidden',
      fontFamily: "'Fira Code', monospace",
      fontSize: '0.82rem',
      marginTop: '1.5rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    }}>
      {/* DevTools Header */}
      <div style={{
        background: '#111827',
        padding: '0.6rem 1rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 8px #10b981'
          }}></span>
          <span style={{ color: '#f8fafc', fontWeight: '600' }}>DevTools Inspector · Network API Log</span>
          <span style={{
            background: 'rgba(99, 102, 241, 0.15)',
            color: '#818cf8',
            padding: '0.15rem 0.5rem',
            borderRadius: '4px',
            fontSize: '0.72rem'
          }}>{logs.length} peticiones</span>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {onClearLogs && (
            <button
              onClick={onClearLogs}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: 'none',
                color: '#94a3b8',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.75rem'
              }}
            >Limpiar</button>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            {isCollapsed ? '▲ Abrir' : '▼ Minimizar'}
          </button>
        </div>
      </div>

      {/* DevTools Body */}
      {!isCollapsed && (
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', minHeight: '200px', maxHeight: '320px' }}>
          {/* Requests Sidebar */}
          <div style={{
            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
            overflowY: 'auto',
            background: '#080c18'
          }}>
            {logs.length === 0 ? (
              <div style={{ padding: '1rem', color: '#64748b', textAlign: 'center' }}>
                Ejecuta acciones en el demo para ver peticiones API...
              </div>
            ) : (
              logs.map((log) => {
                const isSelected = selectedLog?.id === log.id;
                const methodColor = log.method === 'GET' ? '#38bdf8' : log.method === 'POST' ? '#4ade80' : log.method === 'PUT' ? '#facc15' : '#f87171';
                
                return (
                  <div
                    key={log.id}
                    onClick={() => setActiveLogId(log.id)}
                    style={{
                      padding: '0.5rem 0.75rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                      cursor: 'pointer',
                      background: isSelected ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                      borderLeft: isSelected ? '3px solid #6366f1' : '3px solid transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: '0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
                      <span style={{ color: methodColor, fontWeight: '700', fontSize: '0.75rem', minWidth: '38px' }}>
                        {log.method}
                      </span>
                      <span style={{ color: '#cbd5e1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {log.endpoint}
                      </span>
                    </div>
                    <span style={{ color: log.status < 300 ? '#4ade80' : '#f87171', fontSize: '0.72rem' }}>
                      {log.status}
                    </span>
                  </div>
                );
              })
            )}
          </div>

          {/* Log Detail Inspector */}
          <div style={{ padding: '0.85rem', overflowY: 'auto', background: '#0a0f1d' }}>
            {selectedLog ? (
              <div>
                <div style={{ marginBottom: '0.6rem', color: '#94a3b8', fontSize: '0.75rem' }}>
                  <strong style={{ color: '#f8fafc' }}>{selectedLog.method}</strong> {selectedLog.endpoint}
                  <span style={{ marginLeft: '1rem', color: '#10b981' }}>Status: {selectedLog.status} OK</span>
                  <span style={{ marginLeft: '1rem', color: '#64748b' }}>{selectedLog.timestamp}</span>
                </div>

                {selectedLog.requestPayload && (
                  <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{ color: '#38bdf8', marginBottom: '0.2rem', fontSize: '0.75rem' }}>▼ Request Payload</div>
                    <pre style={{
                      background: '#060913',
                      padding: '0.5rem',
                      borderRadius: '6px',
                      color: '#a7f3d0',
                      fontSize: '0.75rem',
                      overflowX: 'auto'
                    }}>
                      {JSON.stringify(selectedLog.requestPayload, null, 2)}
                    </pre>
                  </div>
                )}

                <div>
                  <div style={{ color: '#4ade80', marginBottom: '0.2rem', fontSize: '0.75rem' }}>▼ Response Payload (JSON)</div>
                  <pre style={{
                    background: '#060913',
                    padding: '0.5rem',
                    borderRadius: '6px',
                    color: '#cbd5e1',
                    fontSize: '0.75rem',
                    overflowX: 'auto'
                  }}>
                    {JSON.stringify(selectedLog.responsePayload, null, 2)}
                  </pre>
                </div>
              </div>
            ) : (
              <div style={{ color: '#64748b', textAlign: 'center', paddingTop: '2rem' }}>
                Selecciona una petición de la lista.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
