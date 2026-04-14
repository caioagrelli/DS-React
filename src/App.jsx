import { useState } from 'react'
import './App.css'


import fotoUrl from './assets/foto.jpg'
const FOTO = fotoUrl

const t = {
  pt: {
    sobre: 'Sobre',
    experiencia: 'Experiência',
    cursos: 'Cursos',
    contato: 'Contato',
    subtitulo: 'Graduando em Engenharia da Computação no',
    bio: `Graduando em Engenharia da Computação no Centro de Informática (CIn) da UFPE e desenvolvedor no Ministério Público de Pernambuco (MPPE) Foco em construir sistemas estruturados, eficientes e escaláveis, unindo uma base teórica sólida com experiência prática em aplicações reais. Atualmente desenvolvendo o SIPAT, um sistema de gerenciamento de estoque para o MPPE. Minha stack principal inclui C e Python, com desenvolvimento de sistemas backend em Django, explorando conceitos como arquitetura de sistemas, algoritmos e otimização de performance.`,
    secSobre: '// sobre',
    secHabilidades: '// habilidades',
    secExperiencia: '// experiência',
    secCursos: '// cursos & certificados',
    fotoHint: 'adicione sua foto',
    role1: 'Engenheiro de Software',
    local1: 'Ministério Público',
    badge1: 'Atual',
    desc1: 'Desenvolvimento e manutenção de sistemas internos com foco em automação e eficiência operacional para o setor público.',
    role2: 'Graduando em Engenharia da Computação',
    local2: 'Centro de Informática · UFPE',
    badge2: 'Em curso',
    verMais: 'ver mais →',
    verCert: 'ver certificado →',
    cursosPlaceholder: 'Depois eu coloco :)',
    feito: 'feito com React + Vite',
  },

  en: {
    sobre: 'About',
    experiencia: 'Experience',
    cursos: 'Courses',
    contato: 'Contact',
    subtitulo: 'Computer Engineering student at',
    bio: `Computer Engineering student at the Center of Informatics (CIn) at UFPE and developer at the Public Prosecutor's Office of Pernambuco (MPPE). I focus on building structured, efficient, and scalable systems, combining strong theoretical foundations with practical experience in real-world applications. Currently developing CIPAT, an inventory management system for the MPPE. My main stack includes C and Python, developing backend systems with Django while exploring deeper concepts such as system architecture, algorithms, and performance optimization.`,
    secSobre: '// about',
    secHabilidades: '// skills',
    secExperiencia: '// experience',
    secCursos: '// courses & certificates',
    fotoHint: 'add your photo',
    role1: 'Software Engineer',
    local1: 'Public Ministry',
    badge1: 'Current',
    desc1: 'Development and maintenance of internal systems focused on automation and operational efficiency for the public sector.',
    role2: 'Computer Engineering Student',
    local2: 'Center of Informatics · UFPE',
    badge2: 'Ongoing',
    verMais: 'see more →',
    verCert: 'view certificate →',
    cursosPlaceholder: 'I\'ll add this later :)',
    feito: 'built with React + Vite',
  },
}

const skills = [
  { name: 'Python',     icon: 'devicon-python-plain'    },
  { name: 'C',          icon: 'devicon-c-plain'          },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'Django',     icon: 'devicon-django-plain'     },
  { name: 'Bootstrap',  icon: 'devicon-bootstrap-plain'  },
  { name: 'Git',  icon: 'devicon-git-plain'  },
  { name: 'Linux',  icon: 'devicon-linux-plain'  },
]

const socials = [
  { name: 'GitHub',    url: 'https://github.com/caioagrelli'      },
  { name: 'LinkedIn',  url: 'https://linkedin.com/in/caiooagrelli'  },
  { name: 'Instagram', url: 'https://instagram.com/caiooagrelli'    },
]

const cursos = [
  // { titulo: 'Nome do Curso', emissor: 'Plataforma', ano: '2024', url: '#' },
]

function App() {
  const [lang, setLang] = useState('pt')
  const tx = t[lang]

  return (
    <div className="portfolio">

      <nav className="nav">
        <span className="nav-logo">{'/<'}</span>
        <div className="nav-links">
          <a href="#sobre">{tx.sobre}</a>
          <a href="#experiencia">{tx.experiencia}</a>
          <a href="#cursos">{tx.cursos}</a>
          <a href="#contato">{tx.contato}</a>
        </div>
          <div className="lang-toggle">
            <button
              className={`lang-btn ${lang === 'pt' ? 'lang-active' : ''}`}
              onClick={() => setLang('pt')}
              title="Português"
            >
              <span className="fi fi-br"></span>
            </button>
            <button
              className={`lang-btn ${lang === 'en' ? 'lang-active' : ''}`}
              onClick={() => setLang('en')}
              title="English"
            >
              <span className="fi fi-us"></span>
            </button>
          </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Caio<br />Agrelli</h1>
            <p className="hero-desc">
              {tx.subtitulo}<br />
              <span className="hero-ufpe">Centro de Informática · UFPE  {'{'}2025 - 2030{'}'}</span>
            </p>
            <div className="hero-ctas">
              {socials.map(s => (
                <a key={s.name} href={s.url} className="cta-btn" target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-photo-wrap">
            {FOTO ? (
              <img src={FOTO} alt="Caio Agrelli" className="hero-photo" />
            ) : (
              <div className="hero-photo-placeholder">
                <span className="photo-initials">CA</span>
                <p className="photo-hint">{tx.fotoHint}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section" id="sobre">
        <div className="section-label">{tx.secSobre}</div>
        <p className="bio-text">{tx.bio}</p>
        <div className="section-sublabel">{tx.secHabilidades}</div>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <i className={`${skill.icon} colored skill-icon`}></i>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="experiencia">
        <div className="section-label">{tx.secExperiencia}</div>

        <div className="exp-card">
          <div className="exp-header">
            <div>
              <h3 className="exp-role">{tx.role1}</h3>
              <p className="exp-company">{tx.local1}</p>
            </div>
            <span className="exp-badge">{tx.badge1}</span>
          </div>
          <p className="exp-desc">{tx.desc1}</p>
          <div className="exp-stack">
            {['Django', 'Python', 'Bootstrap'].map(t => (
              <span key={t} className="exp-tag">{t}</span>
            ))}
          </div>
          <span className="ver-mais">{tx.verMais}</span>
        </div>

        <div className="exp-card">
          <div className="exp-header">
            <div>
              <h3 className="exp-role">{tx.role2}</h3>
              <p className="exp-company">{tx.local2}</p>
            </div>
            <span className="exp-badge">{tx.badge2}</span>
          </div>
          <span className="ver-mais">{tx.verMais}</span>
        </div>
      </section>

      <section className="section" id="cursos">
        <div className="section-label">{tx.secCursos}</div>
        <div className="cursos-grid">
          {cursos.length === 0 ? (
            <div className="cursos-placeholder">
              <span className="placeholder-icon">{ }</span>
              <p>{tx.cursosPlaceholder}</p>
            </div>
          ) : (
            cursos.map((c, i) => (
              <a key={i} href={c.url} className="curso-card" target="_blank" rel="noopener noreferrer">
                <div className="curso-top">
                  <h3 className="curso-titulo">{c.titulo}</h3>
                  <span className="curso-ano">{c.ano}</span>
                </div>
                <p className="curso-emissor">{c.emissor}</p>
                <span className="ver-mais">{tx.verCert}</span>
              </a>
            ))
          )}
        </div>
      </section>

      <footer className="footer" id="contato">
        <p className="footer-name">Caio Agrelli</p>
        <div className="footer-socials">
          {socials.map(s => (
            <a key={s.name} href={s.url} className="footer-link" target="_blank" rel="noopener noreferrer">
              {s.name}
            </a>
          ))}
        </div>
        <p className="footer-copy">© 2026 · {tx.feito}</p>
      </footer>

    </div>
  )
}

export default App