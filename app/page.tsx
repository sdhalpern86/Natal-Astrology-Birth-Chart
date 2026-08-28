'use client';

import { useState } from 'react';

const axes = [
  { glyph: '☽', name: 'Moon', detail: '17° Gemini · 10H', className: 'moon' },
  { glyph: '♃', name: 'Jupiter', detail: '19° Pisces · 7H', className: 'jupiter' },
  { glyph: '♅', name: 'Uranus', detail: '18° Sagittarius · 4H', className: 'uranus' },
];

const placements = [
  ['☉', 'Sun', '04° Virgo', '1st'],
  ['☽', 'Moon', '17° Gemini', '10th'],
  ['☿', 'Mercury', '26° Leo', '12th'],
  ['♀', 'Venus', '20° Libra', '2nd'],
  ['♂', 'Mars', '13° Capricorn', '5th'],
  ['♃', 'Jupiter', '19° Pisces', '7th'],
  ['♄', 'Saturn', '03° Sagittarius', '4th'],
  ['♅', 'Uranus', '18° Sagittarius', '4th'],
  ['♆', 'Neptune', '03° Capricorn', '5th'],
  ['♇', 'Pluto', '05° Scorpio', '3rd'],
];

const kept = [
  'Venus in Libra: fairness, taste, relational intelligence',
  'Moon in Gemini: mental movement and conversation',
  'Mars in Capricorn: deliberate desire and follow-through',
  'Pisces Descendant: idealization needs a reality check',
  'Gemini Midheaven: communication and adaptive work',
];

const discarded = [
  '“Triple Virgo”',
  'Sun in the 12th house',
  'Mercury in Virgo',
  'Saturn in Pisces',
  'Venus in Leo',
  'Literal karma, past-life, or quantum claims',
];

export default function Home() {
  const [focus, setFocus] = useState('jupiter');

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="wordmark">SETH / NATAL</a>
        <nav aria-label="Page sections">
          <a href="#love">Love</a>
          <a href="#work">Work</a>
          <a href="#audit">Audit</a>
        </nav>
        <p>Corrected chart · Whole Sign houses</p>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">28 AUG 1986 · 07:45 EDT · BINGHAMTON</p>
          <h1>Your chart is built around <span>relationship as catalyst.</span></h1>
          <p className="lede">Not a search for someone sufficiently “soulful.” A lifelong practice of keeping freedom, candor, and movement alive inside commitment.</p>
        </div>

        <div className="chart-stage" aria-label="The chart's central mutable T-square">
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-inner" />
          <div className="crosshair crosshair-x" />
          <div className="crosshair crosshair-y" />
          <div className="core">
            <b>19°</b>
            <span>VIRGO ASC</span>
          </div>
          {axes.map((item) => (
            <button
              key={item.name}
              type="button"
              className={`planet ${item.className} ${focus === item.className ? 'active' : ''}`}
              onClick={() => setFocus(item.className)}
              aria-pressed={focus === item.className}
            >
              <span>{item.glyph}</span>
              <b>{item.name}</b>
              <small>{item.detail}</small>
            </button>
          ))}
          <p className={`signal signal-${focus}`}>
            {focus === 'jupiter' && 'PARTNERSHIP MAGNIFIES EVERYTHING'}
            {focus === 'moon' && 'THE MIND NEEDS MOVEMENT'}
            {focus === 'uranus' && 'HOME MUST LEAVE ROOM FOR FREEDOM'}
          </p>
        </div>
      </section>

      <section className="thesis-strip">
        <p><span>Expansion</span> without inflation</p>
        <p><span>Harmony</span> without avoidance</p>
        <p><span>Stability</span> without stagnation</p>
      </section>

      <section className="placements" aria-labelledby="placements-heading">
        <div className="section-index">
          <span>01</span>
          <p id="placements-heading">Corrected placements</p>
        </div>
        <div className="placement-grid">
          {placements.map(([glyph, name, sign, house]) => (
            <div className="placement" key={name}>
              <span className="placement-glyph">{glyph}</span>
              <div><b>{name}</b><small>{sign}</small></div>
              <em>{house}</em>
            </div>
          ))}
        </div>
      </section>

      <section id="love" className="story-section">
        <div className="section-index">
          <span>02</span>
          <p>Relationship architecture</p>
        </div>
        <div className="story-heading">
          <p className="eyebrow">THE DOMINANT SIGNAL</p>
          <h2>Partnership is an amplifier, <span>not a destination.</span></h2>
        </div>
        <div className="exact-aspect">
          <div className="exact-value"><strong>0°01′</strong><span>Jupiter opposite Ascendant</span></div>
          <p>Jupiter is virtually exact on your Pisces Descendant, the partnership point. Partners can enlarge opportunity, meaning, imagination, and confidence. They can also enlarge projection, overpromising, and misplaced faith.</p>
        </div>
        <div className="love-grid">
          <article>
            <p className="eyebrow">WHAT COMES EASILY</p>
            <h3>Grace, attraction, equilibrium.</h3>
            <p>Venus in Libra in the 2nd house makes partnership, beauty, diplomacy, and mutual benefit instinctive. Moon trine Venus adds social warmth and emotional readability.</p>
            <p className="risk"><span>Risk</span> Preserving a beautiful arrangement after it stops being honest.</p>
          </article>
          <article>
            <p className="eyebrow">WHAT KEEPS IT ALIVE</p>
            <h3>Space, surprise, intellectual motion.</h3>
            <p>Moon opposite Uranus needs novelty and autonomy. Venus sextile Uranus is attracted to originality. A secure bond must still leave both people independently interesting.</p>
            <p className="risk"><span>Risk</span> Mistaking intensity or sudden change for proof of incompatibility.</p>
          </article>
          <article>
            <p className="eyebrow">HOW DESIRE MOVES</p>
            <h3>Slow build, real investment.</h3>
            <p>Mars exalted in Capricorn in the 5th pursues romance with intent. Competence, consistency, ambition, and demonstrated effort are more compelling than performance alone.</p>
            <p className="risk"><span>Risk</span> Managing romance like a project or making affection feel earned.</p>
          </article>
        </div>
        <blockquote>“Do not confuse a beautifully balanced arrangement with genuine intimacy.”</blockquote>
      </section>

      <section className="growth-section">
        <div className="growth-axis">
          <div>
            <span>FAMILIAR</span>
            <b>Venus + South Node</b>
            <p>Libra · 2nd house</p>
          </div>
          <div className="axis-line"><i /></div>
          <div>
            <span>GROWTH</span>
            <b>North Node</b>
            <p>Aries · 8th house</p>
          </div>
        </div>
        <p className="growth-copy">You already know how to accommodate. Growth comes from revealing the potentially disruptive truth, especially around desire, trust, money, power, and dependency.</p>
      </section>

      <section id="work" className="story-section work-section">
        <div className="section-index">
          <span>03</span>
          <p>Public work, private mind</p>
        </div>
        <div className="work-layout">
          <div className="career-number">
            <strong>0°37′</strong>
            <p>Moon conjunct Midheaven</p>
          </div>
          <div className="career-copy">
            <h2>Your career must <span>move with your mind.</span></h2>
            <p>The Gemini Moon sits almost exactly on the Midheaven, the public and vocational point. Communication, teaching, interpretation, strategy, media, synthesis, and multi-domain work are the clearest through-line.</p>
            <p>Moon opposite Uranus makes pivots structural. A changing career is not evidence that the previous path was wrong. The container must keep evolving with your curiosity.</p>
          </div>
        </div>
        <div className="call-graph" aria-label="Career interpretation flow">
          <div><span>INPUT</span><b>Complexity</b></div>
          <i>→</i>
          <div><span>PRIVATE ENGINE</span><b>Mercury in Leo · 12H</b></div>
          <i>→</i>
          <div><span>PUBLIC OUTPUT</span><b>Clarity with conviction</b></div>
        </div>
      </section>

      <section className="pressure-section">
        <div>
          <p className="eyebrow">THE INNER PRESSURE</p>
          <h2>Sun square Saturn</h2>
        </div>
        <p>An internal authority keeps asking whether you have done enough or earned the right to take up space. The useful form is rigor. The costly form is self-surveillance.</p>
        <p>Sun trine Neptune and sextile Pluto add imagination and depth. The gift is turning subtle, chaotic material into something useful.</p>
      </section>

      <section id="audit" className="audit-section">
        <div className="section-index">
          <span>04</span>
          <p>Prior reading audit</p>
        </div>
        <div className="audit-heading">
          <h2>Keep the pattern recognition. <span>Discard the bad coordinates.</span></h2>
          <p>The earlier document mixed house systems and contradicted itself. These are the claims worth retaining and the ones that should not shape your interpretation.</p>
        </div>
        <div className="audit-grid">
          <div>
            <h3>KEEP</h3>
            {kept.map((item) => <p key={item}><span>✓</span>{item}</p>)}
          </div>
          <div>
            <h3>DISCARD</h3>
            {discarded.map((item) => <p key={item}><span>×</span>{item}</p>)}
          </div>
        </div>
      </section>

      <footer>
        <p>SYMBOLIC READING · NOT A CAUSAL OR SCIENTIFIC CLAIM</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
