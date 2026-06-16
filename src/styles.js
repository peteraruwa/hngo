/* ============================================================
   Global stylesheet — same visual language as the source site,
   with extra motion layered in (fire-divider flicker, gradient
   shimmer, ambient glow pulses, slow globe spin, icon float).
   ============================================================ */
export const CSS = `
  :root{
    --ink:#0a0502; --ink-2:#130a05; --ink-3:#1b0f07;
    --ember:#ff6a18; --flame:#ff9a3c; --gold:#f5b53f; --gold-soft:#ffd98a;
    --crimson:#c81e3a; --ash:#c4b3a4; --ash-dim:#8c7c6e;
    --line:rgba(245,181,63,.16); --line-soft:rgba(245,181,63,.10);
    --cream:#f7efe6; --maxw:1180px; --ease:cubic-bezier(.22,1,.36,1);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  .hn-root{
    background:var(--ink); color:var(--ash);
    font-family:'Inter',system-ui,sans-serif; line-height:1.7;
    -webkit-font-smoothing:antialiased; overflow-x:hidden;
  }
  .hn-root *::selection{background:rgba(255,106,24,.32);color:#fff}
  .hn-root a{color:inherit;text-decoration:none}
  .hn-root img{display:block;max-width:100%}

  .eyebrow{font-family:'Cinzel',serif;font-weight:600;font-size:.72rem;letter-spacing:.38em;text-transform:uppercase;color:var(--ember);display:inline-flex;align-items:center;gap:.85em}
  .eyebrow::before{content:"";width:34px;height:1px;background:linear-gradient(90deg,transparent,var(--gold))}
  .eyebrow.center{justify-content:center}
  .eyebrow.center::after{content:"";width:34px;height:1px;background:linear-gradient(90deg,var(--gold),transparent)}
  h2.head{font-family:'Fraunces',serif;font-weight:600;font-size:clamp(2.1rem,4.6vw,3.5rem);line-height:1.08;color:var(--cream);letter-spacing:-.01em;margin:.55rem 0 0}
  .head .lit{
    background:linear-gradient(120deg,var(--gold-soft),var(--ember),var(--gold-soft));
    background-size:220% auto; -webkit-background-clip:text;background-clip:text;color:transparent;
    animation:shimmer 7s ease-in-out infinite;
  }
  .lede{font-size:1.075rem;color:var(--ash);max-width:62ch}
  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 clamp(1.25rem,4vw,2.5rem)}
  section{padding:clamp(4.75rem,9vw,8rem) 0;position:relative}
  .alt{background:var(--ink-2)}

  /* ---------- fire-tongue divider (replaces the old triple meridian lines) ---------- */
  .fire-divider{display:flex;align-items:center;justify-content:center;width:100%;max-width:var(--maxw);margin:0 auto;padding:clamp(1.5rem,4vw,2.6rem) clamp(1.25rem,4vw,2.5rem)}
  .fd-line{flex:1 1 auto;height:1px;background:linear-gradient(90deg,transparent,var(--gold) 55%,transparent);min-width:24px}
  .fd-flames{display:flex;align-items:flex-end;gap:.4rem;margin:0 1.15rem;flex:none}
  .fd-flame{width:13px;height:20px;animation:flicker 2.7s ease-in-out infinite;transform-origin:50% 100%}
  .fd-flame svg{width:100%;height:100%;display:block;filter:drop-shadow(0 0 6px rgba(255,106,24,.55))}
  .fd-flame:nth-child(1){animation-delay:-.15s}
  .fd-flame:nth-child(1) svg{color:var(--gold);height:78%}
  .fd-flame:nth-child(2){animation-delay:-.75s}
  .fd-flame:nth-child(2) svg{color:var(--ember);height:92%}
  .fd-flame:nth-child(3){animation-delay:-1.35s}
  .fd-flame:nth-child(3) svg{color:var(--gold-soft);height:100%}
  .fd-flame:nth-child(4){animation-delay:-1.95s}
  .fd-flame:nth-child(4) svg{color:var(--ember);height:92%}
  .fd-flame:nth-child(5){animation-delay:-2.55s}
  .fd-flame:nth-child(5) svg{color:var(--gold);height:78%}
  @keyframes flicker{
    0%,100%{transform:scaleY(1) scaleX(1) rotate(0deg);opacity:.82}
    22%{transform:scaleY(1.1) scaleX(.93) rotate(-3deg);opacity:1}
    48%{transform:scaleY(.9) scaleX(1.07) rotate(3deg);opacity:.68}
    74%{transform:scaleY(1.06) scaleX(.96) rotate(-2deg);opacity:1}
  }
  @keyframes shimmer{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}

  /* ---------- buttons ---------- */
  .btn{display:inline-flex;align-items:center;gap:.6em;font-weight:600;font-size:.95rem;letter-spacing:.01em;padding:.92em 1.7em;border-radius:999px;cursor:pointer;border:1px solid transparent;transition:transform .35s var(--ease), box-shadow .35s var(--ease), background .3s, color .3s;white-space:nowrap;background:none;font-family:inherit}
  .btn-fire{background:linear-gradient(135deg,var(--ember),var(--gold));color:#1a0c02;box-shadow:0 8px 30px -10px rgba(255,106,24,.6);animation:pulseGlow 3.4s ease-in-out infinite}
  .btn-fire:hover{transform:translateY(-2px);box-shadow:0 14px 38px -10px rgba(255,106,24,.75)}
  @keyframes pulseGlow{0%,100%{box-shadow:0 8px 30px -10px rgba(255,106,24,.55)}50%{box-shadow:0 10px 42px -6px rgba(255,106,24,.85)}}
  .btn-ghost{border-color:var(--line);color:var(--cream);background:rgba(255,255,255,.012)}
  .btn-ghost:hover{border-color:var(--gold);color:var(--gold-soft);transform:translateY(-2px)}
  .btn .ico{width:18px;height:18px;display:inline-block}

  /* ---------- navbar ---------- */
  header.nav{position:sticky;top:0;z-index:60;background:rgba(10,5,2,.72);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--line-soft)}
  .nav-in{display:flex;align-items:center;justify-content:space-between;height:74px}
  .brand{display:flex;align-items:center;gap:.7rem}
  .brand img{width:42px;height:42px;filter:drop-shadow(0 0 10px rgba(255,106,24,.45))}
  .brand b{font-family:'Cinzel',serif;font-weight:700;color:var(--cream);font-size:1.02rem;letter-spacing:.04em;line-height:1}
  .brand span{display:block;font-family:'Inter';font-weight:500;font-size:.62rem;letter-spacing:.32em;text-transform:uppercase;color:var(--ember);margin-top:3px}
  .nav-links{display:flex;align-items:center;gap:2.1rem}
  .nav-links a{font-size:.86rem;font-weight:500;color:var(--ash);letter-spacing:.02em;position:relative;padding:.2em 0}
  .nav-links a::after{content:"";position:absolute;left:0;bottom:-3px;width:0;height:1px;background:var(--gold);transition:width .3s var(--ease)}
  .nav-links a:hover{color:var(--cream)}
  .nav-links a:hover::after{width:100%}
  .nav-right{display:flex;align-items:center;gap:1.4rem}
  .burger{display:none;background:none;border:0;cursor:pointer;width:30px;height:24px;position:relative}
  .burger span{position:absolute;left:0;width:100%;height:2px;background:var(--gold);border-radius:2px;transition:.3s var(--ease)}
  .burger span:nth-child(1){top:2px}
  .burger span:nth-child(2){top:11px}
  .burger span:nth-child(3){top:20px}
  .burger.open span:nth-child(1){top:11px;transform:rotate(45deg)}
  .burger.open span:nth-child(2){opacity:0}
  .burger.open span:nth-child(3){top:11px;transform:rotate(-45deg)}
  .mobile-menu{display:none;flex-direction:column;gap:.2rem;background:var(--ink-2);border-bottom:1px solid var(--line-soft);padding:.5rem clamp(1.25rem,4vw,2.5rem) 1.4rem}
  .mobile-menu.show{display:flex}
  .mobile-menu a{padding:.85rem .2rem;border-bottom:1px solid var(--line-soft);color:var(--ash);font-weight:500}
  .mobile-menu a:last-of-type{border:0}
  .mobile-menu .btn{margin-top:1rem;justify-content:center}

  /* ---------- hero ---------- */
  .hero{position:relative;min-height:calc(100vh - 74px);display:flex;align-items:center;padding:clamp(3rem,8vh,7rem) 0;isolation:isolate;overflow:hidden}
  .hn-ember-canvas{position:absolute;inset:0;z-index:-2;width:100%;height:100%}
  .hero-glow{position:absolute;inset:0;z-index:-3;background:radial-gradient(120% 90% at 50% 118%, rgba(255,106,24,.55), rgba(200,30,58,.16) 32%, transparent 60%),radial-gradient(80% 60% at 78% -10%, rgba(245,181,63,.10), transparent 55%),var(--ink)}
  .hero-globe{position:absolute;z-index:-2;right:-12%;top:50%;width:min(720px,80vw);aspect-ratio:1;opacity:.10;color:var(--gold);pointer-events:none;animation:globespin 130s linear infinite}
  @keyframes globespin{from{transform:translateY(-50%) rotate(0deg)}to{transform:translateY(-50%) rotate(360deg)}}
  .hero-in{max-width:880px}
  .tag-loc{display:inline-flex;align-items:center;gap:.6em;font-size:.72rem;letter-spacing:.26em;text-transform:uppercase;color:var(--gold);border:1px solid var(--line);border-radius:999px;padding:.5em 1.05em;margin-bottom:1.7rem;background:rgba(245,181,63,.05)}
  .tag-loc i{width:6px;height:6px;border-radius:50%;background:var(--ember);box-shadow:0 0 10px var(--ember);display:inline-block;animation:pulse 2.4s infinite}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
  h1.hero-title{font-family:'Cinzel',serif;font-weight:700;font-size:clamp(2.5rem,7.2vw,5.6rem);line-height:1.04;letter-spacing:.005em;color:var(--cream);text-shadow:0 2px 40px rgba(255,106,24,.18)}
  h1.hero-title .fire{display:inline-block;background:linear-gradient(180deg,var(--gold-soft) 0%,var(--gold) 38%,var(--ember) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:0 0 50px rgba(255,106,24,.4)}
  .hero-sub{margin-top:1.6rem;font-size:1.14rem;max-width:54ch;color:var(--ash)}
  .hero-cta{margin-top:2.4rem;display:flex;gap:1rem;flex-wrap:wrap}
  .scripture-rail{margin-top:3.2rem;padding-left:1.1rem;border-left:2px solid var(--ember);font-family:'Fraunces',serif;font-style:italic;font-size:1.05rem;color:var(--gold-soft);max-width:48ch}
  .scripture-rail cite{display:block;font-style:normal;font-family:'Inter';font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--ash-dim);margin-top:.5rem}

  /* ---------- pillars ---------- */
  .pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:3rem}
  .pillar{background:linear-gradient(180deg,rgba(255,255,255,.022),rgba(255,255,255,0));border:1px solid var(--line);border-radius:18px;padding:2rem 1.7rem;transition:transform .4s var(--ease),border-color .4s,box-shadow .4s;position:relative;overflow:hidden}
  .pillar::after{content:"";position:absolute;inset:0;background:radial-gradient(120% 80% at 50% 0%,rgba(255,106,24,.07),transparent 60%);opacity:0;transition:opacity .4s}
  .pillar:hover{transform:translateY(-5px);border-color:rgba(245,181,63,.4);box-shadow:0 24px 50px -28px rgba(255,106,24,.4)}
  .pillar:hover::after{opacity:1}
  .p-ico{width:48px;height:48px;border-radius:12px;display:grid;place-items:center;background:rgba(255,106,24,.10);border:1px solid var(--line);color:var(--gold);margin-bottom:1.2rem;animation:iconFloat 4.2s ease-in-out infinite}
  .pillar:nth-child(2) .p-ico{animation-delay:-1.4s}
  .pillar:nth-child(3) .p-ico{animation-delay:-2.8s}
  @keyframes iconFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
  .p-ico svg{width:24px;height:24px}
  .pillar h3{font-family:'Fraunces',serif;font-weight:600;font-size:1.32rem;color:var(--cream);margin-bottom:.5rem}
  .pillar p{font-size:.96rem;color:var(--ash)}

  /* ---------- vision/mission ---------- */
  .vm-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(2rem,5vw,4.5rem);align-items:start}
  .vm-quote{font-family:'Fraunces',serif;font-weight:500;font-size:clamp(1.6rem,3vw,2.5rem);line-height:1.28;color:var(--cream);position:relative;padding-left:1.4rem;border-left:3px solid var(--ember)}
  .vm-quote em{font-style:italic;color:var(--gold-soft)}
  .vm-cards{display:flex;flex-direction:column;gap:1.1rem}
  .vm-card{border:1px solid var(--line);border-radius:14px;padding:1.5rem 1.4rem;background:rgba(255,255,255,.015);transition:border-color .4s,transform .4s var(--ease)}
  .vm-card:hover{border-color:rgba(245,181,63,.4);transform:translateY(-3px)}
  .vm-card .k{font-family:'Cinzel',serif;font-size:.72rem;letter-spacing:.28em;text-transform:uppercase;color:var(--ember);margin-bottom:.5rem}
  .vm-card h4{font-family:'Fraunces',serif;font-weight:600;color:var(--cream);font-size:1.15rem;margin-bottom:.35rem}
  .vm-card p{font-size:.93rem}

  /* ---------- founder ---------- */
  .founder-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:clamp(2rem,5vw,4.5rem);align-items:center}
  .portrait{position:relative}
  .portrait-frame{position:relative;border-radius:230px 230px 22px 22px;overflow:hidden;border:1px solid rgba(245,181,63,.35);box-shadow:0 40px 90px -40px rgba(255,106,24,.55), inset 0 0 0 1px rgba(0,0,0,.4)}
  .portrait-frame::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(122,12,8,.45) 100%),radial-gradient(70% 50% at 50% 0%,rgba(245,181,63,.12),transparent 60%);mix-blend-mode:multiply;pointer-events:none}
  .portrait-frame img{width:100%;height:100%;object-fit:cover}
  .portrait-glow{position:absolute;inset:-12% -8% -8%;z-index:-1;background:radial-gradient(60% 55% at 50% 60%,rgba(255,106,24,.35),transparent 70%);filter:blur(10px);animation:breathe 5s ease-in-out infinite}
  @keyframes breathe{0%,100%{opacity:.65;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}
  .cred-chip{position:absolute;bottom:18px;left:50%;transform:translateX(-50%);background:rgba(10,5,2,.82);backdrop-filter:blur(8px);border:1px solid var(--line);border-radius:999px;padding:.5em 1.1em;font-family:'Cinzel',serif;font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold-soft);white-space:nowrap}
  .f-name{font-family:'Fraunces',serif;font-weight:600;font-size:clamp(1.9rem,3.4vw,2.7rem);color:var(--cream);line-height:1.1;margin:.5rem 0 .2rem}
  .f-role{color:var(--ember);font-weight:500;font-size:.95rem;letter-spacing:.02em;margin-bottom:1.3rem}
  .f-bio p{margin-bottom:1rem;color:var(--ash)}
  .f-bio strong{color:var(--cream);font-weight:600}
  .cred-list{list-style:none;margin:1.4rem 0 0;display:grid;gap:.7rem}
  .cred-list li{display:flex;gap:.8rem;align-items:flex-start;font-size:.95rem;color:var(--ash)}
  .cred-list li svg{flex:none;width:18px;height:18px;color:var(--gold);margin-top:3px}
  .f-tags{display:flex;gap:.6rem;flex-wrap:wrap;margin-top:1.5rem}
  .f-tags span{font-size:.74rem;letter-spacing:.08em;color:var(--gold-soft);border:1px solid var(--line);border-radius:999px;padding:.4em .95em;background:rgba(245,181,63,.04)}

  /* ---------- arms ---------- */
  .arms{display:grid;gap:1.1rem;margin-top:3rem}
  .arm{display:grid;grid-template-columns:auto 1fr auto;gap:1.6rem;align-items:center;border:1px solid var(--line);border-radius:18px;padding:1.8rem 2rem;background:rgba(255,255,255,.014);transition:border-color .4s,background .4s,transform .4s var(--ease)}
  .arm:hover{border-color:rgba(245,181,63,.38);background:rgba(255,106,24,.04);transform:translateX(4px)}
  .arm .num{font-family:'Cinzel',serif;font-weight:700;font-size:1.5rem;color:var(--ember);width:54px;text-align:center;opacity:.9}
  .arm h3{font-family:'Fraunces',serif;font-weight:600;font-size:1.4rem;color:var(--cream);margin-bottom:.3rem}
  .arm p{font-size:.96rem;color:var(--ash);max-width:60ch}
  .arm .arm-ico{width:46px;height:46px;color:var(--gold);opacity:.85}
  .arm .arm-ico svg{width:100%;height:100%}

  /* ---------- medical ---------- */
  .med-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,5vw,4rem);align-items:center}
  .med-services{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2rem}
  .med-card{border:1px solid var(--line);border-radius:14px;padding:1.4rem;background:rgba(255,255,255,.015);transition:.4s var(--ease)}
  .med-card:hover{border-color:rgba(245,181,63,.4);transform:translateY(-3px)}
  .med-card .mi{width:40px;height:40px;border-radius:10px;display:grid;place-items:center;background:rgba(200,30,58,.12);color:var(--flame);margin-bottom:.85rem}
  .med-card .mi svg{width:22px;height:22px}
  .med-card h4{font-family:'Fraunces',serif;font-weight:600;color:var(--cream);font-size:1.08rem;margin-bottom:.3rem}
  .med-card p{font-size:.88rem}
  .med-art{position:relative;border-radius:20px;overflow:hidden;border:1px solid var(--line);min-height:420px;background:radial-gradient(90% 70% at 30% 20%,rgba(255,106,24,.22),transparent 60%),radial-gradient(80% 80% at 80% 90%,rgba(200,30,58,.28),transparent 60%),linear-gradient(160deg,#1b0f07,#0a0502);display:grid;place-items:center;text-align:center;padding:2.5rem}
  .med-art .cross{width:96px;height:96px;color:var(--gold);filter:drop-shadow(0 0 30px rgba(255,106,24,.5));margin-bottom:1.4rem;animation:iconFloat 5s ease-in-out infinite}
  .med-art blockquote{font-family:'Fraunces',serif;font-style:italic;font-size:1.5rem;color:var(--cream);line-height:1.35;max-width:24ch}
  .med-art cite{display:block;margin-top:1rem;font-family:'Inter';font-style:normal;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)}

  /* ---------- media ---------- */
  .media-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:3rem}
  .media-card{border:1px solid var(--line);border-radius:18px;overflow:hidden;background:rgba(255,255,255,.015);transition:.4s var(--ease)}
  .media-card:hover{transform:translateY(-5px);border-color:rgba(245,181,63,.4);box-shadow:0 24px 50px -30px rgba(255,106,24,.4)}
  .media-thumb{position:relative;aspect-ratio:16/10;display:grid;place-items:center;background:linear-gradient(150deg,#21130a,#0a0502);overflow:hidden}
  .media-thumb::before{content:"";position:absolute;inset:0;background:radial-gradient(70% 80% at 50% 30%,rgba(255,106,24,.20),transparent 65%)}
  .play{width:58px;height:58px;border-radius:50%;display:grid;place-items:center;background:rgba(255,106,24,.16);border:1px solid var(--gold);color:var(--gold-soft);position:relative;z-index:1;transition:.3s}
  .media-card:hover .play{background:var(--ember);color:#1a0c02;transform:scale(1.06)}
  .play svg{width:22px;height:22px;margin-left:3px}
  .media-meta{padding:1.3rem 1.4rem}
  .media-meta .series{font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:var(--ember);margin-bottom:.5rem;font-weight:600}
  .media-meta h4{font-family:'Fraunces',serif;font-weight:600;color:var(--cream);font-size:1.15rem;margin-bottom:.35rem}
  .media-meta p{font-size:.85rem;color:var(--ash-dim)}

  /* ---------- events ---------- */
  .events{display:grid;gap:1rem;margin-top:3rem}
  .event{display:grid;grid-template-columns:auto 1fr auto;gap:1.8rem;align-items:center;border:1px solid var(--line);border-radius:16px;padding:1.5rem 1.9rem;background:rgba(255,255,255,.014);transition:.4s var(--ease)}
  .event:hover{border-color:rgba(245,181,63,.4);background:rgba(255,106,24,.035)}
  .date-chip{text-align:center;border:1px solid var(--line);border-radius:12px;padding:.7rem 1rem;min-width:78px;background:rgba(245,181,63,.05)}
  .date-chip .m{font-family:'Cinzel',serif;font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:var(--ember)}
  .date-chip .d{font-family:'Fraunces',serif;font-weight:600;font-size:1.7rem;color:var(--cream);line-height:1}
  .event h4{font-family:'Fraunces',serif;font-weight:600;color:var(--cream);font-size:1.25rem;margin-bottom:.25rem}
  .event .loc{font-size:.86rem;color:var(--ash-dim);display:flex;align-items:center;gap:.45em}
  .event .loc svg{width:14px;height:14px;color:var(--gold)}
  .ev-type{font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--gold-soft);border:1px solid var(--line);border-radius:999px;padding:.4em .9em;white-space:nowrap}

  /* ---------- testimonies ---------- */
  .testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:3rem}
  .testi{border:1px solid var(--line);border-radius:18px;padding:2rem 1.8rem;background:linear-gradient(180deg,rgba(255,255,255,.022),transparent);position:relative;transition:transform .4s var(--ease),border-color .4s}
  .testi:hover{transform:translateY(-4px);border-color:rgba(245,181,63,.35)}
  .testi .mark{font-family:'Fraunces',serif;font-size:3.4rem;line-height:.6;color:var(--ember);opacity:.5;margin-bottom:.6rem}
  .testi p{font-family:'Fraunces',serif;font-style:italic;font-size:1.12rem;color:var(--cream);line-height:1.45;margin-bottom:1.3rem}
  .testi .who{display:flex;align-items:center;gap:.7rem}
  .testi .who i{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--ember),var(--crimson));display:grid;place-items:center;font-style:normal;font-weight:700;color:#1a0c02;font-size:.9rem}
  .testi .who b{color:var(--cream);font-size:.88rem;font-weight:600;display:block}
  .testi .who small{color:var(--ash-dim);font-size:.76rem}

  /* ---------- give ---------- */
  .give{position:relative;overflow:hidden}
  .give-bg{position:absolute;inset:0;z-index:0;background:radial-gradient(80% 100% at 50% 120%,rgba(255,106,24,.4),transparent 55%),radial-gradient(60% 80% at 15% 0%,rgba(200,30,58,.22),transparent 60%),var(--ink-2)}
  .give-in{position:relative;z-index:1;text-align:center;max-width:760px;margin:0 auto}
  .give-tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1rem;margin:3rem 0 2.4rem;text-align:left}
  .tier{border:1px solid var(--line);border-radius:18px;padding:1.8rem 1.6rem;background:rgba(10,5,2,.5);backdrop-filter:blur(6px);transition:.4s var(--ease)}
  .tier:hover{border-color:rgba(245,181,63,.45);transform:translateY(-4px)}
  .tier .ti{width:44px;height:44px;border-radius:11px;display:grid;place-items:center;background:rgba(255,106,24,.12);color:var(--gold);margin-bottom:1rem}
  .tier .ti svg{width:23px;height:23px}
  .tier h4{font-family:'Fraunces',serif;font-weight:600;color:var(--cream);font-size:1.18rem;margin-bottom:.4rem}
  .tier p{font-size:.9rem;color:var(--ash)}

  /* ---------- contact ---------- */
  .contact-grid{display:grid;grid-template-columns:1fr 1.05fr;gap:clamp(2rem,5vw,4.5rem);align-items:start}
  .ci-list{display:grid;gap:1.3rem;margin-top:2rem}
  .ci{display:flex;gap:1rem;align-items:flex-start}
  .ci .cii{width:44px;height:44px;flex:none;border-radius:11px;display:grid;place-items:center;background:rgba(255,106,24,.10);border:1px solid var(--line);color:var(--gold)}
  .ci .cii svg{width:21px;height:21px}
  .ci .k{font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--ember);margin-bottom:.2rem}
  .ci .v{color:var(--cream);font-size:1rem}
  .socials{display:flex;gap:.8rem;margin-top:2rem}
  .socials a{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;border:1px solid var(--line);color:var(--ash);transition:.3s}
  .socials a:hover{color:var(--gold-soft);border-color:var(--gold);transform:translateY(-3px)}
  .socials a svg{width:19px;height:19px}
  form.prayer{border:1px solid var(--line);border-radius:20px;padding:clamp(1.6rem,3vw,2.4rem);background:rgba(255,255,255,.015)}
  form.prayer h3{font-family:'Fraunces',serif;font-weight:600;color:var(--cream);font-size:1.4rem;margin-bottom:.4rem}
  form.prayer .sub{font-size:.9rem;color:var(--ash);margin-bottom:1.6rem}
  .field{margin-bottom:1.1rem}
  .field label{display:block;font-size:.78rem;letter-spacing:.06em;text-transform:uppercase;color:var(--gold-soft);margin-bottom:.5rem;font-weight:500}
  .field input,.field textarea,.field select{width:100%;background:rgba(10,5,2,.6);border:1px solid var(--line);border-radius:11px;padding:.85em 1em;color:var(--cream);font-family:inherit;font-size:.95rem;transition:.3s}
  .field textarea{resize:vertical;min-height:120px}
  .field input::placeholder,.field textarea::placeholder{color:#6b5d51}
  .field input:focus,.field textarea:focus,.field select:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px rgba(245,181,63,.12)}
  form.prayer .btn{width:100%;justify-content:center;margin-top:.4rem}
  .form-note{display:none;margin-top:1rem;padding:.9rem 1.1rem;border-radius:11px;background:rgba(255,106,24,.10);border:1px solid var(--line);color:var(--gold-soft);font-size:.9rem}
  .form-note.show{display:block}

  /* ---------- footer ---------- */
  footer.site{background:var(--ink-2);border-top:1px solid var(--line-soft);padding:clamp(3rem,6vw,4.5rem) 0 2rem}
  .foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:2.5rem;margin-bottom:3rem}
  .foot-brand .brand{margin-bottom:1.1rem}
  .foot-brand p{font-size:.92rem;color:var(--ash);max-width:38ch}
  .foot-scripture{font-family:'Fraunces',serif;font-style:italic;color:var(--gold-soft);margin-top:1.3rem;font-size:1rem;max-width:34ch}
  .foot-col h5{font-family:'Cinzel',serif;font-size:.74rem;letter-spacing:.24em;text-transform:uppercase;color:var(--ember);margin-bottom:1.1rem}
  .foot-col a{display:block;font-size:.9rem;color:var(--ash);padding:.32rem 0;transition:.25s}
  .foot-col a:hover{color:var(--gold-soft);padding-left:4px}
  .foot-bottom{border-top:1px solid var(--line-soft);padding-top:1.6rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
  .foot-bottom p{font-size:.82rem;color:var(--ash-dim)}
  .foot-bottom .tag{font-family:'Cinzel',serif;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)}

  /* ---------- reveal animation ---------- */
  .reveal{opacity:0;transform:translateY(22px);transition:opacity .8s var(--ease),transform .8s var(--ease)}
  .reveal.in{opacity:1;transform:none}

  /* ---------- responsive ---------- */
  @media(max-width:980px){
    .nav-links{display:none}
    .nav-right .btn-fire{display:none}
    .burger{display:block}
    .vm-grid,.founder-grid,.med-grid,.contact-grid{grid-template-columns:1fr}
    .founder-grid{gap:2.5rem}
    .portrait{max-width:380px;margin:0 auto}
    .pillars,.media-grid,.testi-grid,.give-tiers,.med-services{grid-template-columns:1fr 1fr}
    .foot-grid{grid-template-columns:1fr 1fr}
  }
  @media(max-width:640px){
    .pillars,.media-grid,.testi-grid,.give-tiers,.med-services,.foot-grid{grid-template-columns:1fr}
    .arm{grid-template-columns:auto 1fr;gap:1rem;padding:1.4rem 1.3rem}
    .arm .arm-ico{display:none}
    .event{grid-template-columns:auto 1fr;gap:1.1rem;padding:1.3rem}
    .event .ev-type{display:none}
    .hero-cta{flex-direction:column;align-items:stretch}
    .hero-cta .btn{justify-content:center}
    .foot-bottom{flex-direction:column;align-items:flex-start}
    .portrait-frame{border-radius:170px 170px 18px 18px}
  }
  @media(prefers-reduced-motion:reduce){
    .hn-root *{scroll-behavior:auto}
    .reveal{opacity:1;transform:none;transition:none}
    .tag-loc i,.fd-flame,.head .lit,.btn-fire,.hero-globe,.p-ico,.med-art .cross,.portrait-glow{animation:none}
  }

  /* ---- Gallery ---- */
  .gallery-photos{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem;margin-top:2rem}
  .gallery-photo-wrap{position:relative;border-radius:12px;overflow:hidden;aspect-ratio:4/3;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)}
  .gallery-photo{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s}
  .gallery-photo-wrap:hover .gallery-photo{transform:scale(1.04)}
  .gallery-photo-placeholder{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.6rem;color:var(--ash-dim);font-size:.8rem;text-align:center;padding:1rem}
  .gallery-photo-wrap:not(.gallery-photo-missing) .gallery-photo-placeholder{display:none}
  .gallery-videos{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem}
  .gallery-vid-card{position:relative;border-radius:12px;overflow:hidden;cursor:pointer;background:#0a0a0a;border:1px solid rgba(255,255,255,.08)}
  .gallery-vid-card:hover .gallery-vid-overlay{opacity:1}
  .gallery-vid-thumb{width:100%;aspect-ratio:16/9;object-fit:cover;display:block}
  .gallery-vid-overlay{position:absolute;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;opacity:.7;transition:opacity .25s}
  .gallery-play-btn{width:56px;height:56px;border-radius:50%;background:var(--ember);display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 0 24px rgba(255,106,24,.7)}
  .gallery-vid-label{padding:.6rem .8rem;font-size:.8rem;color:var(--ash-dim);background:rgba(0,0,0,.4)}
  .gallery-overlay{position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:1000;display:flex;align-items:center;justify-content:center;padding:1rem}
  .gallery-modal{position:relative;background:#111;border-radius:14px;padding:1.4rem;max-width:860px;width:100%;border:1px solid rgba(255,255,255,.1)}
  .gallery-close{position:absolute;top:.8rem;right:.8rem;background:rgba(255,255,255,.08);border:none;color:#fff;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center}
  .gallery-video-full{width:100%;border-radius:8px;max-height:70vh}
  .gallery-video-label{margin-top:.6rem;font-size:.85rem;color:var(--ash-dim)}
  /* ---- Donate modal ---- */
  .donate-modal{position:relative;background:#111;border-radius:14px;padding:2rem;max-width:460px;width:100%;border:1px solid rgba(255,255,255,.1);max-height:90vh;overflow-y:auto}
  .donate-modal h3{font-family:"Cinzel",serif;color:var(--cream);font-size:1.2rem;margin-bottom:.4rem}
  .amount-chips{display:flex;gap:.6rem;flex-wrap:wrap;margin-top:.4rem}
  .amount-chip{padding:.45em 1em;border-radius:20px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.05);color:var(--cream);font-size:.9rem;cursor:pointer;transition:background .2s,border-color .2s}
  .amount-chip.active,.amount-chip:hover{background:var(--ember);border-color:var(--ember);color:#fff}
`;

/* ============================================================
   Small reusable bits
