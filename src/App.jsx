import React from 'react';
import {
  ArrowRight, Heart, CalendarDays, Bell, Flower2, Menu, X, Play,
  ShieldCheck, Sparkles, Smartphone, Check, Clock3, ChartNoAxesCombined
} from 'lucide-react';
import Button from './components/Button';

const features = [
  { icon: CalendarDays, title: 'Ciclo inteligente', text: 'Visualize seu ciclo e acompanhe previsões com base no seu histórico.' },
  { icon: Flower2, title: 'Fases do ciclo', text: 'Entenda as etapas do ciclo e conheça melhor as mudanças do seu corpo.' },
  { icon: Bell, title: 'Lembretes personalizados', text: 'Receba lembretes para acompanhar datas importantes e sua rotina.' },
  { icon: Heart, title: 'Autocuidado', text: 'Encontre sugestões de cuidado e bem-estar para cada momento.' },
];

function Logo() {
  return <a className="brand" href="#inicio" aria-label="Ela+ - início">
    <span className="brand-mark"><Flower2 size={35} strokeWidth={1.8} /></span>
    <span>Ela<span className="plus">+</span></span>
  </a>;
}

function PhoneMockup() {
  return <div className="phone-scene" aria-label="Prévia ilustrativa do aplicativo Ela+">
    <div className="glow-orb" />
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-status"><span>9:41</span><span>● ● ▰</span></div>
      <div className="phone-header"><span className="mini-logo"><Flower2 size={20}/> Ela+</span><span className="settings-dot">⚙</span></div>
      <div className="hello">Olá, Ana <span>🌸</span></div>
      <div className="cycle-card">
        <div><small>Seu ciclo hoje</small><strong>Dia 12</strong><em>Fase folicular</em></div>
        <div className="cycle-ring"><CalendarDays size={25}/></div>
      </div>
      <div className="phase-track">
        <div className="phase-line"><i/><i/><i/><i/></div>
        <div className="phase-labels"><span>Menstrual</span><span>Folicular</span><span>Ovulatória</span><span>Lútea</span></div>
      </div>
      <div className="tip-card"><span className="tip-icon">✦</span><div><b>Dica de hoje</b><p>Reserve um momento para você.</p></div><ArrowRight size={17}/></div>
      <div className="phone-tabs"><span>⌂<small>Início</small></span><span>▥<small>Histórico</small></span><span>♧<small>Lembretes</small></span><span>♡<small>Cuidados</small></span></div>
    </div>
    <div className="floating-card prediction"><span className="float-icon"><CalendarDays size={24}/></span><div><small>Próxima menstruação</small><b>em 16 dias</b></div></div>
    <div className="floating-card reminder"><span className="lotus">❀</span><b>Dica de hoje</b><p>Respeite seu ritmo e cuide de você.</p><Heart size={20}/></div>
    <div className="leaf leaf-one">❧</div><div className="leaf leaf-two">❧</div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell" id="inicio">
    <header className="header">
      <div className="container nav-wrap">
        <Logo />
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#funcionalidades" onClick={closeMenu}>Funcionalidades</a>
          <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
          <a href="#privacidade" onClick={closeMenu}>Privacidade</a>
        </nav>
        <Button 
          href="#conheca"
          iconLeft={Smartphone}
          
          className="nav-cta"
        >
          Conheça o app
        </Button>
      </div>
    </header>

    <main>
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><Heart size={16}/> CUIDADO QUE ACOMPANHA VOCÊ</div>
          <h1>Conheça seu ciclo.<br/><span>Cuide de você.</span></h1>
          <p className="hero-description">Acompanhe as fases do seu ciclo menstrual, receba lembretes e descubra formas de cuidar do seu bem-estar em cada fase.</p>
          <div className="hero-actions">
            <Button
              href="#conheca"
              iconLeft={Smartphone}
              iconRight={ArrowRight}
              variant="primary"
              className="btn btn-primary"
            >Descubra o Ela+</Button>

            <Button 
              className="btn btn-outline" 
              href="#funcionalidades"
              iconLeft={Play}
            >Ver funcionalidades</Button>
          </div>
          <div className="hero-note"><span/>Seu ciclo, no seu ritmo. Mais informação, mais cuidado.<span/></div>
        </div>
        <PhoneMockup />
      </section>

      <section className="feature-strip container" id="funcionalidades">
        {features.map(({icon: Icon, title, text}) => <article className="feature-card" key={title}>
          <div className="feature-icon"><Icon size={27}/></div>
          <div><h3>{title}</h3><p>{text}</p></div>
        </article>)}
      </section>

      <section className="intro-section" id="como-funciona">
        <div className="container intro-inner">
          <div className="section-kicker"><Sparkles size={16}/> UM MOMENTO PARA VOCÊ</div>
          <h2>Um jeito mais leve de<br/><span>entender seu corpo.</span></h2>
          <p>Informação e cuidado para acompanhar cada fase, com mais consciência e tranquilidade.</p>
          <div className="steps">
            <article><span>01</span><div><h3>Registre</h3><p>Adicione as informações do seu ciclo.</p></div></article>
            <article><span>02</span><div><h3>Acompanhe</h3><p>Consulte o calendário e as fases do ciclo.</p></div></article>
            <article><span>03</span><div><h3>Cuide de você</h3><p>Use lembretes e conteúdos como apoio à sua rotina.</p></div></article>
          </div>
        </div>
      </section>

      <section className="care-section container" id="privacidade">
        <div className="care-art"><div className="care-circle"><Heart size={76} strokeWidth={1.2}/><span>+</span></div><div className="sparkle s1">✦</div><div className="sparkle s2">✧</div></div>
        <div className="care-copy">
          <div className="section-kicker"><ShieldCheck size={16}/> CUIDADO E CONFIANÇA</div>
          <h2>Seu bem-estar merece atenção.</h2>
          <p>O Ela+ foi pensado para apoiar você no acompanhamento do ciclo e na organização da rotina de autocuidado.</p>
          <div className="care-points"><span><Check size={16}/> Acompanhamento em um só lugar</span><span><Check size={16}/> Lembretes para sua rotina</span><span><Check size={16}/> Informação para conhecer seu ciclo</span></div>
        </div>
      </section>

      <section className="final-cta" id="conheca">
        <div className="container final-inner">
          <div className="final-flower"><Flower2 size={38}/></div>
          <h2>Seu ciclo. Seu tempo. <span>Seu cuidado.</span></h2>
          <p>Conheça o Ela+ e dê mais espaço ao autocuidado na sua rotina.</p>
          <Button 
            className="button button-light" 
            href="https://github.com/Saullo-Programador/App_ElaMais" 
            target="_blank" 
            rel="noreferrer"
          >
            Conheça o projeto <ArrowRight size={18}/>
          </Button>
          <small>O Ela+ é uma ferramenta de acompanhamento e informação, não substitui orientação profissional de saúde.</small>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="container footer-inner"><Logo/><p>Feito com carinho para acompanhar você. <Heart size={14} fill="currentColor"/></p><span>© {new Date().getFullYear()} Ela+. Todos os direitos reservados.</span></div></footer>
  </div>;
}

export default App;