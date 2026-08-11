import React, { useState } from 'react';

export interface ERDTable {
  name: string;
  columns: { name: string; type: string; key?: 'PK' | 'FK'; description?: string }[];
}

export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  parameters?: string;
  response: string;
}

interface Props {
  projectTitle: string;
  architectureDescription: string;
  erdTables: ERDTable[];
  apiEndpoints: ApiEndpoint[];
  retrospective: {
    challenge: string;
    juniorMistake: string;
    modernRefactor: string;
  };
}

export const ProjectTechnicalDocs: React.FC<Props> = ({
  projectTitle,
  architectureDescription,
  erdTables,
  apiEndpoints,
  retrospective
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'erd' | 'api' | 'retro'>('architecture');

  const lowerTitle = projectTitle.toLowerCase();

  return (
    <div style={{
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      padding: '2rem',
      marginTop: '2rem',
      color: '#f8fafc'
    }}>
      {/* Header & Tabs Nav */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        paddingBottom: '1rem'
      }}>
        <div>
          <span style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.8rem',
            color: '#22d3ee',
            background: 'rgba(6, 182, 212, 0.1)',
            padding: '0.2rem 0.6rem',
            borderRadius: '4px',
            border: '1px solid rgba(6, 182, 212, 0.3)'
          }}>
            Technical Specification
          </span>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '0.4rem' }}>
            Documentación Técnica · {projectTitle}
          </h3>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('architecture')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: activeTab === 'architecture' ? '1px solid #6366f1' : '1px solid rgba(255,255,255,0.08)',
              background: activeTab === 'architecture' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255,255,255,0.03)',
              color: activeTab === 'architecture' ? '#ffffff' : '#94a3b8',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.88rem'
            }}
          >
            🏗️ Arquitectura del Sistema
          </button>

          <button
            onClick={() => setActiveTab('erd')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: activeTab === 'erd' ? '1px solid #6366f1' : '1px solid rgba(255,255,255,0.08)',
              background: activeTab === 'erd' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255,255,255,0.03)',
              color: activeTab === 'erd' ? '#ffffff' : '#94a3b8',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.88rem'
            }}
          >
            🗄️ Modelo ERD (BD)
          </button>

          <button
            onClick={() => setActiveTab('api')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: activeTab === 'api' ? '1px solid #6366f1' : '1px solid rgba(255,255,255,0.08)',
              background: activeTab === 'api' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255,255,255,0.03)',
              color: activeTab === 'api' ? '#ffffff' : '#94a3b8',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.88rem'
            }}
          >
            📡 Endpoints REST
          </button>

          <button
            onClick={() => setActiveTab('retro')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: activeTab === 'retro' ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.08)',
              background: activeTab === 'retro' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.03)',
              color: activeTab === 'retro' ? '#34d399' : '#94a3b8',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.88rem'
            }}
          >
            🧠 Retrospectiva & Growth
          </button>
        </div>
      </div>

      {/* Tab 1: Visual Architecture Diagram */}
      {activeTab === 'architecture' && (
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#22d3ee' }}>Visión General de la Arquitectura</h4>
          <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1rem' }}>
            {architectureDescription}
          </p>

          {/* Visual Architecture Box (GitHub Mermaid Style Visual Diagram) */}
          <div style={{
            background: '#090d16',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            <div style={{
              fontSize: '0.75rem',
              fontFamily: "'Fira Code', monospace",
              color: '#818cf8',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              alignSelf: 'flex-start'
            }}>
              Diagrama de Bloques & Flujo de Datos
            </div>

            {/* Asesorías Borotto Visual Diagram */}
            {lowerTitle.includes('asesor') && (
              <>
                <div style={nodeBoxStyle('#6366f1')}>
                  <span style={iconStyle}>💻</span>
                  <div>
                    <strong style={nodeTitleStyle}>Cliente / Navegador Web</strong>
                    <div style={nodeSubtitleStyle}>HTML5 · Vanilla CSS · JavaScript (Astro SSR)</div>
                  </div>
                </div>

                <div style={arrowStyle}>↓ HTTP Requests / Rendered SSR Page</div>

                <div style={nodeBoxStyle('#06b6d4')}>
                  <span style={iconStyle}>⚡</span>
                  <div>
                    <strong style={nodeTitleStyle}>Astro v6 SSR / Node.js Engine</strong>
                    <div style={nodeSubtitleStyle}>Vercel Serverless Functions</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', width: '100%', marginTop: '0.5rem' }}>
                  <div style={subNodeBoxStyle('#10b981')}>
                    <span style={iconStyle}>🗄️</span>
                    <div>
                      <strong style={subNodeTitleStyle}>PostgreSQL Database</strong>
                      <div style={nodeSubtitleStyle}>Prisma ORM (Vercel Postgres)</div>
                    </div>
                  </div>

                  <div style={subNodeBoxStyle('#f59e0b')}>
                    <span style={iconStyle}>🔑</span>
                    <div>
                      <strong style={subNodeTitleStyle}>Sistema Anti-Spam Reseñas</strong>
                      <div style={nodeSubtitleStyle}>Tokens UUID de un solo uso</div>
                    </div>
                  </div>

                  <div style={subNodeBoxStyle('#ec4899')}>
                    <span style={iconStyle}>🔐</span>
                    <div>
                      <strong style={subNodeTitleStyle}>Panel Admin /admin</strong>
                      <div style={nodeSubtitleStyle}>Gestor CMS de Servicios & Planes</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* InventPro Visual Diagram */}
            {lowerTitle.includes('inventpro') && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%' }}>
                  <div style={nodeBoxStyle('#6366f1')}>
                    <span style={iconStyle}>💻</span>
                    <div>
                      <strong style={nodeTitleStyle}>Web Gerencia (React 19)</strong>
                      <div style={nodeSubtitleStyle}>Consola Admin & Stock (Vite)</div>
                    </div>
                  </div>

                  <div style={nodeBoxStyle('#ec4899')}>
                    <span style={iconStyle}>📱</span>
                    <div>
                      <strong style={nodeTitleStyle}>App Bodeguero (Expo Móvil)</strong>
                      <div style={nodeSubtitleStyle}>Control Móvil en Bodega</div>
                    </div>
                  </div>
                </div>

                <div style={arrowStyle}>↓ REST API JSON Call + JWT Auth Bearer Token</div>

                <div style={nodeBoxStyle('#06b6d4')}>
                  <span style={iconStyle}>🚀</span>
                  <div>
                    <strong style={nodeTitleStyle}>Backend Node.js & Express REST API</strong>
                    <div style={nodeSubtitleStyle}>Zod Validations · Helmet · Winston Logging</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', marginTop: '0.5rem' }}>
                  <div style={subNodeBoxStyle('#10b981')}>
                    <span style={iconStyle}>🗄️</span>
                    <div>
                      <strong style={subNodeTitleStyle}>PostgreSQL 16 Engine</strong>
                      <div style={nodeSubtitleStyle}>Sequelize ORM (Schema inventpro_user)</div>
                    </div>
                  </div>

                  <div style={subNodeBoxStyle('#8b5cf6')}>
                    <span style={iconStyle}>📑</span>
                    <div>
                      <strong style={subNodeTitleStyle}>Swagger OpenAPI Console</strong>
                      <div style={nodeSubtitleStyle}>Documentación REST /api-docs/</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Registra APP Visual Diagram */}
            {lowerTitle.includes('registra') && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%' }}>
                  <div style={nodeBoxStyle('#6366f1')}>
                    <span style={iconStyle}>💻</span>
                    <div>
                      <strong style={nodeTitleStyle}>Web Docente (Django Web)</strong>
                      <div style={nodeSubtitleStyle}>Apertura de Clase & Monitoreo</div>
                    </div>
                  </div>

                  <div style={nodeBoxStyle('#38bdf8')}>
                    <span style={iconStyle}>📱</span>
                    <div>
                      <strong style={nodeTitleStyle}>App Alumno (Ionic Mobile)</strong>
                      <div style={nodeSubtitleStyle}>Escáner QR & Asistencia</div>
                    </div>
                  </div>
                </div>

                <div style={arrowStyle}>↓ HTTP Requests & REST API JSON</div>

                <div style={nodeBoxStyle('#06b6d4')}>
                  <span style={iconStyle}>🐍</span>
                  <div>
                    <strong style={nodeTitleStyle}>Servidor Django 4.1 & REST Framework</strong>
                    <div style={nodeSubtitleStyle}>Python 3.11 · X_FRAME_OPTIONS ALLOWALL</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', marginTop: '0.5rem' }}>
                  <div style={subNodeBoxStyle('#f59e0b')}>
                    <span style={iconStyle}>🔲</span>
                    <div>
                      <strong style={subNodeTitleStyle}>Pillow QR Engine</strong>
                      <div style={nodeSubtitleStyle}>Generación Dinámica de Código QR</div>
                    </div>
                  </div>

                  <div style={subNodeBoxStyle('#10b981')}>
                    <span style={iconStyle}>🗄️</span>
                    <div>
                      <strong style={subNodeTitleStyle}>Base de Datos SQLite3</strong>
                      <div style={nodeSubtitleStyle}>Django ORM (Cursos, Alumnos, Clases)</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* CaosNews Visual Diagram */}
            {lowerTitle.includes('caos') && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%' }}>
                  <div style={nodeBoxStyle('#6366f1')}>
                    <span style={iconStyle}>🌐</span>
                    <div>
                      <strong style={nodeTitleStyle}>Lector / Público General</strong>
                      <div style={nodeSubtitleStyle}>Portada por Categorías</div>
                    </div>
                  </div>

                  <div style={nodeBoxStyle('#f59e0b')}>
                    <span style={iconStyle}>✍️</span>
                    <div>
                      <strong style={nodeTitleStyle}>Periodistas & Editores</strong>
                      <div style={nodeSubtitleStyle}>Redacción & Aprobación Editorial</div>
                    </div>
                  </div>
                </div>

                <div style={arrowStyle}>↓ HTTP Requests & Auth Session Cookie</div>

                <div style={nodeBoxStyle('#06b6d4')}>
                  <span style={iconStyle}>📰</span>
                  <div>
                    <strong style={nodeTitleStyle}>Servidor MVT Django 4.2</strong>
                    <div style={nodeSubtitleStyle}>Control de Acceso basado en Roles (RBAC)</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', marginTop: '0.5rem' }}>
                  <div style={subNodeBoxStyle('#10b981')}>
                    <span style={iconStyle}>🗄️</span>
                    <div>
                      <strong style={subNodeTitleStyle}>Base de Datos Relacional</strong>
                      <div style={nodeSubtitleStyle}>SQLite3 / Oracle 19c Engine</div>
                    </div>
                  </div>

                  <div style={subNodeBoxStyle('#ec4899')}>
                    <span style={iconStyle}>🖼️</span>
                    <div>
                      <strong style={subNodeTitleStyle}>Almacenamiento Media</strong>
                      <div style={nodeSubtitleStyle}>Directorio /media/ Fotografías</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: ERD Diagram */}
      {activeTab === 'erd' && (
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#22d3ee' }}>Esquema Relacional de Base de Datos (ERD)</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {erdTables.map((table, idx) => (
              <div key={idx} style={{
                background: '#060913',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: 'rgba(99, 102, 241, 0.2)',
                  padding: '0.6rem 1rem',
                  borderBottom: '1px solid rgba(99, 102, 241, 0.3)',
                  fontWeight: 700,
                  fontFamily: "'Fira Code', monospace",
                  color: '#818cf8',
                  fontSize: '0.9rem'
                }}>
                  📊 Tabla: {table.name}
                </div>
                <div style={{ padding: '0.75rem' }}>
                  <table style={{ width: '100%', fontSize: '0.8rem', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ color: '#64748b', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <th style={{ padding: '0.3rem' }}>Key</th>
                        <th style={{ padding: '0.3rem' }}>Columna</th>
                        <th style={{ padding: '0.3rem' }}>Tipo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.columns.map((col, cIdx) => (
                        <tr key={cIdx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                          <td style={{ padding: '0.35rem 0.3rem' }}>
                            {col.key === 'PK' && <span style={{ color: '#facc15', fontWeight: '700' }}>PK</span>}
                            {col.key === 'FK' && <span style={{ color: '#38bdf8', fontWeight: '700' }}>FK</span>}
                          </td>
                          <td style={{ padding: '0.35rem 0.3rem', color: '#f8fafc', fontWeight: 600 }}>{col.name}</td>
                          <td style={{ padding: '0.35rem 0.3rem', color: '#a7f3d0', fontFamily: "'Fira Code', monospace" }}>{col.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: OpenAPI Endpoints */}
      {activeTab === 'api' && (
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#22d3ee' }}>Especificación de Endpoints REST (OpenAPI / Swagger)</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {apiEndpoints.map((ep, idx) => {
              const methodBg = ep.method === 'GET' ? 'rgba(56, 189, 248, 0.15)' : ep.method === 'POST' ? 'rgba(74, 222, 128, 0.15)' : ep.method === 'PUT' ? 'rgba(250, 204, 21, 0.15)' : 'rgba(248, 113, 113, 0.15)';
              const methodColor = ep.method === 'GET' ? '#38bdf8' : ep.method === 'POST' ? '#4ade80' : ep.method === 'PUT' ? '#facc15' : '#f87171';

              return (
                <div key={idx} style={{
                  background: '#060913',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{
                      background: methodBg,
                      color: methodColor,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      fontFamily: "'Fira Code', monospace",
                      fontWeight: 700,
                      fontSize: '0.8rem'
                    }}>
                      {ep.method}
                    </span>
                    <code style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.92rem' }}>{ep.path}</code>
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '0.5rem' }}>{ep.description}</p>
                  
                  {ep.parameters && (
                    <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: "'Fira Code', monospace" }}>
                      Params/Body: <span style={{ color: '#cbd5e1' }}>{ep.parameters}</span>
                    </div>
                  )}

                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: "'Fira Code', monospace", marginTop: '0.2rem' }}>
                    Response 200: <span style={{ color: '#a7f3d0' }}>{ep.response}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 4: Engineering Retrospective */}
      {activeTab === 'retro' && (
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#34d399' }}>Retrospectiva de Ingeniería (Senior Growth Mindset)</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              borderRadius: '10px',
              padding: '1.25rem'
            }}>
              <h5 style={{ color: '#fca5a5', fontSize: '1rem', marginBottom: '0.4rem' }}>⚡ Desafío Complejo Enfrentado</h5>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>{retrospective.challenge}</p>
            </div>

            <div style={{
              background: 'rgba(250, 204, 21, 0.08)',
              border: '1px solid rgba(250, 204, 21, 0.25)',
              borderRadius: '10px',
              padding: '1.25rem'
            }}>
              <h5 style={{ color: '#fde047', fontSize: '1rem', marginBottom: '0.4rem' }}>🔍 Deuda Técnica / "Error de Novato" Identificado</h5>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>{retrospective.juniorMistake}</p>
            </div>

            <div style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: '10px',
              padding: '1.25rem'
            }}>
              <h5 style={{ color: '#34d399', fontSize: '1rem', marginBottom: '0.4rem' }}>🚀 ¿Cómo lo refactorizaría hoy con mi conocimiento actual?</h5>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>{retrospective.modernRefactor}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Diagram Helpers & Styles
const nodeBoxStyle = (borderColor: string): React.CSSProperties => ({
  width: '100%',
  padding: '1rem 1.25rem',
  background: 'rgba(15, 23, 42, 0.9)',
  border: `1.5px solid ${borderColor}`,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  boxShadow: `0 4px 20px ${borderColor}22`
});

const subNodeBoxStyle = (borderColor: string): React.CSSProperties => ({
  padding: '0.85rem 1rem',
  background: 'rgba(15, 23, 42, 0.8)',
  border: `1px solid ${borderColor}`,
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem'
});

const iconStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  flexShrink: 0
};

const nodeTitleStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.98rem',
  color: '#f8fafc',
  fontWeight: 700
};

const subNodeTitleStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.88rem',
  color: '#f8fafc',
  fontWeight: 600
};

const nodeSubtitleStyle: React.CSSProperties = {
  fontSize: '0.78rem',
  color: '#94a3b8',
  fontFamily: "'Fira Code', monospace",
  marginTop: '0.15rem'
};

const arrowStyle: React.CSSProperties = {
  color: '#a7f3d0',
  fontFamily: "'Fira Code', monospace",
  fontSize: '0.82rem',
  fontWeight: 700,
  padding: '0.2rem 0.6rem',
  background: 'rgba(16, 185, 129, 0.1)',
  borderRadius: '20px',
  border: '1px solid rgba(16, 185, 129, 0.3)'
};
