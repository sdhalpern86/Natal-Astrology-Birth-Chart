'use client';

import { type CSSProperties, useEffect, useState } from 'react';
import {
  areaOrder,
  chartAreas,
  placements,
  type AreaKey,
  type ChartArea,
} from './chart-data';

const nodePositions = [
  { x: 18, y: 50 },
  { x: 72, y: 18 },
  { x: 82, y: 70 },
  { x: 46, y: 84 },
] as const;

function isAreaKey(value: string): value is AreaKey {
  return areaOrder.includes(value as AreaKey);
}

function areaFromHash(): AreaKey | null {
  if (typeof window === 'undefined') return null;
  const value = window.location.hash.replace('#area/', '');
  return isAreaKey(value) ? value : null;
}

function SiteHeader({ activeArea }: { activeArea: ChartArea | null }) {
  return (
    <header className="site-header">
      <a href="#top" className="wordmark" aria-label="Natal Atlas home">
        NATAL <i>ATLAS</i>
      </a>
      <nav className="primary-nav" aria-label="Explore chart areas">
        {areaOrder.map((key) => {
          const area = chartAreas[key];
          return (
            <a
              key={key}
              href={`#area/${key}`}
              aria-current={activeArea?.key === key ? 'page' : undefined}
            >
              {area.name}
            </a>
          );
        })}
      </nav>
      <p>{activeArea ? `${activeArea.number} / 06` : 'Whole Sign houses'}</p>
    </header>
  );
}

function HomeAtlas() {
  return (
    <>
      <section id="top" className="atlas-home">
        <div className="atlas-intro">
          <p className="eyebrow">SETH HALPERN · NATAL CHART · 28 AUG 1986</p>
          <h1>A chart to explore, <span>not finish.</span></h1>
          <p className="lede">
            Start with the whole pattern. Enter any area for the placements, tensions,
            and practical interpretation beneath it.
          </p>
          <div className="birth-data" aria-label="Birth chart details">
            <span>07:45 EDT</span>
            <span>Binghamton, New York</span>
            <span>Virgo rising</span>
          </div>
        </div>

        <div className="atlas-map" aria-label="Six areas of the natal chart">
          <div className="atlas-orbit atlas-orbit-outer" />
          <div className="atlas-orbit atlas-orbit-inner" />
          <svg className="atlas-links" viewBox="0 0 100 100" aria-hidden="true">
            <line x1="50" y1="50" x2="50" y2="5" />
            <line x1="50" y1="50" x2="90" y2="28" />
            <line x1="50" y1="50" x2="90" y2="72" />
            <line x1="50" y1="50" x2="50" y2="95" />
            <line x1="50" y1="50" x2="10" y2="72" />
            <line x1="50" y1="50" x2="10" y2="28" />
          </svg>
          <div className="atlas-core">
            <strong>19°37′</strong>
            <span>Virgo Ascendant</span>
          </div>
          {areaOrder.map((key, index) => {
            const area = chartAreas[key];
            return (
              <a
                key={key}
                href={`#area/${key}`}
                className={`atlas-portal portal-${index + 1} tone-${area.tone}`}
              >
                <span>{area.number}</span>
                <strong>{area.name}</strong>
                <small>{area.homeNote}</small>
              </a>
            );
          })}
        </div>
      </section>

      <section className="atlas-thesis" aria-label="Central chart tensions">
        <p><span>Expansion</span> without inflation</p>
        <p><span>Harmony</span> without avoidance</p>
        <p><span>Stability</span> without stagnation</p>
      </section>

      <section id="placements" className="placement-section">
        <div className="section-heading">
          <span>Chart at a glance</span>
          <h2>Ten placements. Six ways in.</h2>
          <p>The home view stays concise. Each atlas area opens a full reading with interactive chart evidence.</p>
        </div>
        <div className="placement-grid">
          {placements.map(([glyph, name, sign, house]) => (
            <div className="placement" key={name}>
              <span className="placement-glyph">{glyph}</span>
              <div>
                <b>{name}</b>
                <small>{sign}</small>
              </div>
              <em>{house}</em>
            </div>
          ))}
        </div>
      </section>

      <section id="method" className="method-section">
        <div>
          <span className="eyebrow">HOW TO USE THE ATLAS</span>
          <h2>One chart. Multiple valid scales.</h2>
        </div>
        <div className="method-steps">
          <article><b>01</b><h3>Begin with an area</h3><p>Choose the life question that matters now, rather than reading every placement in order.</p></article>
          <article><b>02</b><h3>Inspect the evidence</h3><p>Select any node in the inline map to see the exact placement or aspect behind the interpretation.</p></article>
          <article><b>03</b><h3>Look for integration</h3><p>Each reading separates the core pattern, the friction, and the behavior that helps both sides work together.</p></article>
        </div>
      </section>
    </>
  );
}

function SignalMap({ area }: { area: ChartArea }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedSignal = area.signals[selectedIndex];

  return (
    <div className="signal-explorer">
      <div className="signal-map" aria-label={`Interactive chart evidence for ${area.name}`}>
        <svg viewBox="0 0 100 100" aria-hidden="true">
          {nodePositions.slice(1, area.signals.length).map((position, index) => (
            <line
              key={`${position.x}-${position.y}`}
              x1={nodePositions[0].x}
              y1={nodePositions[0].y}
              x2={position.x}
              y2={position.y}
              className={selectedIndex === 0 || selectedIndex === index + 1 ? 'selected' : ''}
            />
          ))}
          {area.signals.length === 4 && (
            <>
              <line x1={nodePositions[1].x} y1={nodePositions[1].y} x2={nodePositions[2].x} y2={nodePositions[2].y} />
              <line x1={nodePositions[2].x} y1={nodePositions[2].y} x2={nodePositions[3].x} y2={nodePositions[3].y} />
            </>
          )}
        </svg>
        <div className="map-center"><span>{area.number}</span><b>{area.name}</b></div>
        {area.signals.map((signal, index) => {
          const position = nodePositions[index];
          const style = {
            '--node-x': position.x,
            '--node-y': position.y,
          } as CSSProperties;
          return (
            <button
              type="button"
              key={signal.label}
              className={`signal-node ${selectedIndex === index ? 'active' : ''}`}
              style={style}
              onClick={() => setSelectedIndex(index)}
              aria-pressed={selectedIndex === index}
            >
              <span>{signal.glyph}</span>
              <b>{signal.label}</b>
            </button>
          );
        })}
      </div>
      <div className="signal-inspector" aria-live="polite">
        <span className="eyebrow">SELECTED EVIDENCE</span>
        <div className="inspector-title">
          <strong>{selectedSignal.glyph}</strong>
          <div><h3>{selectedSignal.label}</h3><p>{selectedSignal.placement}</p></div>
        </div>
        <b className="aspect-label">{selectedSignal.aspect}</b>
        <p>{selectedSignal.interpretation}</p>
        <div className="signal-count">{String(selectedIndex + 1).padStart(2, '0')} / {String(area.signals.length).padStart(2, '0')}</div>
      </div>
    </div>
  );
}

function HouseCompass({ area }: { area: ChartArea }) {
  return (
    <div className="house-figure">
      <div className="house-ring" aria-label={`Highlighted houses for ${area.name}`}>
        <div className="house-core"><span>HOUSES</span><strong>{area.houses.join(' · ')}</strong></div>
        {Array.from({ length: 12 }, (_, index) => {
          const house = index + 1;
          const style = { '--house-index': index } as CSSProperties;
          return (
            <span key={house} style={style} className={area.houses.includes(house) ? 'active' : ''}>
              {house}
            </span>
          );
        })}
      </div>
      <div className="house-copy">
        <span className="eyebrow">WHERE IT LANDS</span>
        <h3>Houses {area.houses.join(', ')}</h3>
        <p>The highlighted houses show where this pattern becomes concrete. They connect the psychological reading to lived areas of experience.</p>
      </div>
    </div>
  );
}

function PatternFlow({ area }: { area: ChartArea }) {
  return (
    <div className="pattern-flow" aria-label={`${area.name} interpretation flow`}>
      <article>
        <span>01 · Pattern</span>
        <p>{area.pattern}</p>
      </article>
      <i aria-hidden="true">→</i>
      <article>
        <span>02 · Friction</span>
        <p>{area.friction}</p>
      </article>
      <i aria-hidden="true">→</i>
      <article>
        <span>03 · Integration</span>
        <p>{area.integration}</p>
      </article>
    </div>
  );
}

function DetailView({ area }: { area: ChartArea }) {
  const relatedAreas = areaOrder.filter((key) => key !== area.key).slice(0, 3);

  return (
    <article id="top" className={`detail-page tone-${area.tone}`}>
      <section className="detail-hero">
        <aside className="detail-index">
          <a href="#top" className="back-link">← Full atlas</a>
          <span>{area.number} / 06</span>
          <nav aria-label="Chart areas">
            {areaOrder.map((key) => (
              <a key={key} href={`#area/${key}`} aria-current={area.key === key ? 'page' : undefined}>
                <span>{chartAreas[key].number}</span>{chartAreas[key].name}
              </a>
            ))}
          </nav>
        </aside>

        <div className="detail-intro">
          <p className="eyebrow">{area.tag}</p>
          <h1>{area.title}</h1>
          <p>{area.introduction}</p>
          <button
            type="button"
            className="text-link"
            onClick={() => document.getElementById('evidence')?.scrollIntoView({ behavior: 'auto' })}
          >
            Explore the chart evidence ↓
          </button>
        </div>

        <div className="detail-marker" aria-hidden="true">
          <span>{area.number}</span>
          <i />
          <b>{area.name}</b>
        </div>
      </section>

      <section id="evidence" className="evidence-section">
        <div className="section-heading compact">
          <span>Interactive evidence map</span>
          <h2>Select a signal. Read what it changes.</h2>
          <p>Each node is a placement or aspect used in this interpretation.</p>
        </div>
        <SignalMap area={area} />
      </section>

      <section className="reading-section">
        <div className="section-heading compact">
          <span>The full reading</span>
          <h2>Pattern, pressure, response.</h2>
        </div>
        <PatternFlow area={area} />
      </section>

      <section className="house-section">
        <HouseCompass area={area} />
      </section>

      <section className="reflection-section">
        <div className="reflection-column questions">
          <span className="eyebrow">QUESTIONS WORTH ASKING</span>
          {area.questions.map((question, index) => (
            <div key={question}><b>0{index + 1}</b><p>{question}</p></div>
          ))}
        </div>
        <div className="reflection-column practices">
          <span className="eyebrow">WAYS TO WORK WITH IT</span>
          {area.practices.map((practice, index) => (
            <div key={practice.title}>
              <b>0{index + 1}</b>
              <h3>{practice.title}</h3>
              <p>{practice.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="related-section">
        <span className="eyebrow">CONTINUE THROUGH THE CHART</span>
        <div>
          {relatedAreas.map((key) => {
            const related = chartAreas[key];
            return <a key={key} href={`#area/${key}`}><span>{related.number}</span><b>{related.name}</b><small>{related.homeNote}</small></a>;
          })}
        </div>
      </section>
    </article>
  );
}

export default function Home() {
  const [activeKey, setActiveKey] = useState<AreaKey | null>(null);

  useEffect(() => {
    const syncRoute = () => {
      setActiveKey(areaFromHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    syncRoute();
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  const activeArea = activeKey ? chartAreas[activeKey] : null;

  return (
    <main>
      <SiteHeader activeArea={activeArea} />
      <div className="route-view" key={activeArea?.key ?? 'home'}>
        {activeArea ? <DetailView area={activeArea} /> : <HomeAtlas />}
      </div>
      <footer>
        <p>SYMBOLIC INTERPRETATION · NOT A CAUSAL OR SCIENTIFIC CLAIM</p>
        <a href="#top">Back to atlas ↑</a>
      </footer>
    </main>
  );
}
