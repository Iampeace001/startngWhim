import '../styles/header-popovers.css';

type Section = 'games' | 'tournament' | 'creators' | 'docs';
const sections = {
  games: { label: 'Games', href: '#games', caption: 'Find your next favourite' },
  tournament: { label: 'Tournament', href: 'https://start.ng/tournament', caption: 'Play for the podium' },
  creators: { label: 'Creators', href: '#creators', caption: 'Made by imagination' },
  docs: { label: 'Docs', href: 'https://start.ng/docs', caption: 'A little know-how' },
};

function GamesScene() {
  return <svg viewBox="0 0 170 120" fill="none">
    <ellipse cx="85" cy="105" rx="50" ry="5" fill="#292a23" opacity=".09" />
    <g className="nav-gamepad"><path d="M53 35H117Q127 35 131 50L140 81Q143 99 127 92L106 76H64L43 92Q27 99 30 81L39 50Q43 35 53 35Z" fill="#d8fd71" stroke="#292a23" strokeWidth="3" />
      <path d="M58 49V68M48 59H68" stroke="#292a23" strokeWidth="5" strokeLinecap="round" />
      <circle className="nav-game-button" cx="111" cy="51" r="5" fill="#ed9876" stroke="#292a23" strokeWidth="2" /><circle className="nav-game-button second" cx="122" cy="64" r="5" fill="#94c3de" stroke="#292a23" strokeWidth="2" />
      <path d="M77 57h4m9 0h4M80 66q5 5 10 0" stroke="#292a23" strokeWidth="2.5" strokeLinecap="round" />
    </g>
    <path className="nav-game-cable" d="M85 35V24Q85 10 101 12Q115 14 119 5" stroke="#292a23" strokeWidth="2.5" strokeLinecap="round" />
    <g className="nav-pixel pixel-one" fill="#8ea743"><path d="M23 29h7v7h-7zM20 32h13v2H20z" /></g><path className="nav-pixel pixel-two" d="M140 25v10m-5-5h10" stroke="#8ea743" strokeWidth="2" strokeLinecap="round" />
  </svg>;
}

function CreatorsScene() {
  return <svg viewBox="0 0 170 120" fill="none">
    <ellipse cx="85" cy="109" rx="54" ry="4" fill="#292a23" opacity=".09" />
    <path d="M94 28L82 108M116 28L131 108" stroke="#807a61" strokeWidth="4" strokeLinecap="round" />
    <rect x="76" y="25" width="64" height="70" rx="5" fill="#fffefa" stroke="#292a23" strokeWidth="2.5" />
    <path className="nav-paint-stroke" d="M88 77Q90 40 106 48Q128 54 126 74Q110 85 96 69" stroke="#d8fd71" strokeWidth="10" strokeLinecap="round" />
    <path d="M93 33h30" stroke="#e4e2d6" strokeWidth="2" strokeLinecap="round" />
    <path d="M33 76Q48 63 62 77L65 103H30Z" fill="#d8fd71" stroke="#292a23" strokeWidth="2.5" />
    <path d="M43 61V73q5 6 10 0V60" fill="#8b5033" />
    <ellipse cx="47" cy="47" rx="18" ry="21" fill="#a86845" stroke="#292a23" strokeWidth="2.5" />
    <path d="M29 42Q26 24 41 24Q48 16 57 25Q70 27 64 44L58 36Q46 42 40 34Z" fill="#292a23" />
    <path d="M39 46h2m13 0h2M42 57q5 4 10-1" stroke="#292a23" strokeWidth="2.5" strokeLinecap="round" />
    <g className="nav-paint-arm"><path d="M60 79L74 85L92 65" stroke="#a86845" strokeWidth="8" strokeLinecap="round" /><path d="M89 68L104 47" stroke="#292a23" strokeWidth="3" strokeLinecap="round" /><path d="M103 48l5-7" stroke="#ed9876" strokeWidth="5" strokeLinecap="round" /></g>
    <ellipse cx="29" cy="92" rx="13" ry="9" fill="#dbc38c" stroke="#292a23" strokeWidth="2" transform="rotate(-20 29 92)" /><circle cx="23" cy="89" r="3" fill="#ed9876" /><circle cx="31" cy="88" r="3" fill="#94c3de" /><circle cx="35" cy="94" r="3" fill="#93ad48" />
    <path className="nav-creator-spark" d="M149 17v10m-5-5h10" stroke="#8ea743" strokeWidth="2" strokeLinecap="round" />
  </svg>;
}

function TournamentScene() {
  return <svg viewBox="0 0 170 120" fill="none">
    <ellipse cx="85" cy="108" rx="43" ry="4" fill="#292a23" opacity=".09" />
    <g className="nav-trophy">
      <path d="M57 30H39V41Q39 61 61 61M113 30H131V41Q131 61 109 61" stroke="#292a23" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M57 30H39V41Q39 61 61 61M113 30H131V41Q131 61 109 61" stroke="#dfbf60" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M57 23H113L108 57Q105 75 85 78Q65 75 62 57Z" fill="#d8fd71" stroke="#292a23" strokeWidth="3" strokeLinejoin="round" />
      <path d="M69 29L72 54Q73 62 78 64" stroke="#f7ffde" strokeWidth="4" strokeLinecap="round" />
      <path d="M85 78V94M66 102L70 94H100L104 102Z" stroke="#292a23" strokeWidth="3" strokeLinejoin="round" fill="#dfbf60" />
      <path d="M85 38l4 8 9 1-6.5 6 1.5 9-8-4-8 4 1.5-9-6.5-6 9-1Z" fill="#dfbf60" stroke="#292a23" strokeWidth="1.5" strokeLinejoin="round" />
    </g>
    <g className="nav-trophy-glint" stroke="#8ea743" strokeWidth="2" strokeLinecap="round"><path d="M116 10v10m-5-5h10" /></g>
    <path className="nav-confetti confetti-one" d="M27 19l4 7M141 77l5-4" stroke="#ed9876" strokeWidth="4" strokeLinecap="round" />
    <path className="nav-confetti confetti-two" d="M138 19l-4 7M31 76l-5-4" stroke="#94c3de" strokeWidth="4" strokeLinecap="round" />
  </svg>;
}

function DocsScene() {
  return <svg viewBox="0 0 170 120" fill="none">
    <ellipse cx="85" cy="109" rx="52" ry="4" fill="#292a23" opacity=".09" />
    <path d="M28 38Q56 26 85 40Q114 26 142 38V100Q112 88 85 103Q56 88 28 100Z" fill="#d8fd71" stroke="#292a23" strokeWidth="3" strokeLinejoin="round" />
    <path d="M34 29Q61 22 85 36Q109 22 136 29V91Q108 84 85 98Q61 84 34 91Z" fill="#fffefa" stroke="#292a23" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M85 36V98" stroke="#292a23" strokeWidth="2" />
    <g stroke="#a5aa98" strokeWidth="3" strokeLinecap="round"><path d="M45 44l26 4M45 56l26 4M45 68l21 3M99 47l26-4M99 59l26-4M99 71l21-3" /></g>
    <g className="nav-book-page"><path d="M85 36Q105 13 128 18V80Q105 80 85 98Z" fill="#edf7d8" stroke="#292a23" strokeWidth="2" /><path d="M98 39l18-7M98 51l18-7M98 63l12-5" stroke="#8ea743" strokeWidth="2.5" strokeLinecap="round" /></g>
    <path className="nav-doc-bookmark" d="M53 27V51l6-4 6 5V29" fill="#ed9876" stroke="#292a23" strokeWidth="2" strokeLinejoin="round" />
    <path className="nav-doc-spark" d="M148 13v10m-5-5h10M23 16v6m-3-3h6" stroke="#8ea743" strokeWidth="2" strokeLinecap="round" />
  </svg>;
}

export function HeaderLink({ section }: { section: Section }) {
  const item = sections[section];
  return <a href={item.href} className={`header-pop-link header-pop-${section}`}>
    {item.label}
    <span className="header-pop-scene" aria-hidden="true">
      {section === 'games' ? <GamesScene /> : section === 'tournament' ? <TournamentScene /> : section === 'creators' ? <CreatorsScene /> : <DocsScene />}
      <span className="header-pop-caption">{item.caption}</span>
    </span>
  </a>;
}
