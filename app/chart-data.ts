export const areaOrder = [
  'self',
  'relationships',
  'work',
  'inner-world',
  'creativity',
  'growth',
] as const;

export type AreaKey = (typeof areaOrder)[number];

type AreaTone = 'acid' | 'blue' | 'violet' | 'pink' | 'orange' | 'cyan';

export type ChartSignal = {
  glyph: string;
  label: string;
  placement: string;
  aspect: string;
  interpretation: string;
};

export type ChartArea = {
  key: AreaKey;
  number: string;
  name: string;
  tag: string;
  tone: AreaTone;
  homeNote: string;
  title: string;
  introduction: string;
  pattern: string;
  friction: string;
  integration: string;
  houses: readonly number[];
  signals: readonly ChartSignal[];
  questions: readonly string[];
  practices: readonly { title: string; copy: string }[];
};

export const chartAreas = {
  self: {
    key: 'self',
    number: '01',
    name: 'Self',
    tag: 'Identity and expression',
    tone: 'acid',
    homeNote: 'Visible precision, private authorship.',
    title: 'Precision with a private source of fire.',
    introduction:
      'Virgo rising and the Sun in the 1st house make competence visible. Seth tends to enter a situation by reading it closely, finding the friction, and improving the system. Mercury in the 12th keeps the boldest thinking backstage until it is ready.',
    pattern:
      'Identity forms through discernment, usefulness, and self-direction. The chart does not describe a passive observer. It describes someone who becomes more himself by making complexity workable.',
    friction:
      'Sun square Saturn can turn a high standard into an internal permission system. The useful form is rigor. The costly form is waiting to feel unquestionably qualified before occupying space.',
    integration:
      'The strongest expression combines Virgo craft with Leo authorship: prepare deeply, state the point clearly, and let completed work carry more authority than self-surveillance.',
    houses: [1, 12, 4],
    signals: [
      {
        glyph: '☉',
        label: 'Sun in Virgo',
        placement: '04°52′ · 1st house',
        aspect: 'Identity anchor',
        interpretation:
          'The Sun in the 1st makes the solar principle visible. Precision, improvement, and personal agency are central to how Seth meets the world.',
      },
      {
        glyph: '□',
        label: 'Sun square Saturn',
        placement: 'Orb 1°27′',
        aspect: 'Constructive pressure',
        interpretation:
          'Saturn tests confidence through standards and delay. Over time, this can become durable authority, provided the test does not become endless.',
      },
      {
        glyph: '△',
        label: 'Sun trine Neptune',
        placement: 'Orb 1°45′',
        aspect: 'Imaginative support',
        interpretation:
          'Neptune adds symbolic sensitivity and pattern recognition. It softens Virgo literalism and helps subtle material become useful form.',
      },
      {
        glyph: '⚹',
        label: 'Sun sextile Pluto',
        placement: 'Orb 0°12′',
        aspect: 'Depth and recovery',
        interpretation:
          'Pluto gives the identity unusual tolerance for intensity. Seth can investigate what others avoid and reorganize around what he finds.',
      },
    ],
    questions: [
      'Is the current standard improving the work, or delaying exposure?',
      'What idea is already ready enough to be stated plainly?',
      'Where can sensitivity become a concrete decision or system?',
    ],
    practices: [
      { title: 'Ship a complete unit', copy: 'Use completion, not certainty, as the threshold for public expression.' },
      { title: 'Name the private thesis', copy: 'Write the strongest opinion before adapting it for the room.' },
      { title: 'Separate rigor from punishment', copy: 'Keep the useful standard and remove the ritual of self-disqualification.' },
    ],
  },
  relationships: {
    key: 'relationships',
    number: '02',
    name: 'Relationships',
    tag: 'Bonding and autonomy',
    tone: 'pink',
    homeNote: 'Expansion meets the need for space.',
    title: 'Partnership expands the world, then tests its freedom.',
    introduction:
      'Jupiter sits almost exactly on the Pisces Descendant, making partnership one of the chart’s largest amplifiers. Venus in Libra seeks reciprocity and quality. The Moon–Uranus–Jupiter tension adds emotional speed, possibility, and a strong requirement for autonomy.',
    pattern:
      'Relationships can enlarge opportunity, meaning, imagination, and confidence. Seth is built to learn through other people, especially those who bring a wider world or a different frame.',
    friction:
      'Excitement, generosity, and projection can arrive together. Moon opposite Uranus needs room to move, while Moon square Jupiter can make a feeling seem larger and more conclusive than it is.',
    integration:
      'The durable bond holds tenderness and independence at the same time. Consistency is the test that chemistry cannot perform, and direct truth is more intimate than elegant accommodation.',
    houses: [7, 2, 4, 10],
    signals: [
      {
        glyph: '♃',
        label: 'Jupiter on the Descendant',
        placement: '19°36′ Pisces · 7th house',
        aspect: 'Opposes Ascendant by 0°01′',
        interpretation:
          'Partnership is a high-volume channel. Other people can bring real growth, but hope and projection need evidence before they become promises.',
      },
      {
        glyph: '♀',
        label: 'Venus in Libra',
        placement: '20°54′ · 2nd house',
        aspect: 'Dignified Venus',
        interpretation:
          'Venus in its own sign values grace, mutuality, taste, and fair exchange. In the 2nd house, shared values matter as much as attraction.',
      },
      {
        glyph: '☽',
        label: 'Moon opposite Uranus',
        placement: 'Orb 0°34′',
        aspect: 'Freedom tension',
        interpretation:
          'Emotional life needs novelty and breathable space. Sudden shifts can be a signal that the relationship container became too rigid.',
      },
      {
        glyph: '□',
        label: 'Moon square Jupiter',
        placement: 'Orb 1°49′',
        aspect: 'Emotional amplification',
        interpretation:
          'Feelings expand quickly and can carry a persuasive future story. Time helps separate genuine abundance from temporary scale.',
      },
    ],
    questions: [
      'What remains true after the emotional volume returns to normal?',
      'Does this bond make room for two independently interesting people?',
      'Is harmony supporting intimacy, or protecting the arrangement?',
    ],
    practices: [
      { title: 'Use time as evidence', copy: 'Let consistency confirm what intensity proposes.' },
      { title: 'Design explicit space', copy: 'Make autonomy part of the bond before either person needs to escape for it.' },
      { title: 'Say the inelegant truth', copy: 'Choose direct disclosure over a beautiful but incomplete equilibrium.' },
    ],
  },
  work: {
    key: 'work',
    number: '03',
    name: 'Work and calling',
    tag: 'Visibility and contribution',
    tone: 'blue',
    homeNote: 'A public mind with a private engine.',
    title: 'The calling must move at the speed of the mind.',
    introduction:
      'The Gemini Moon is nearly exact on the Midheaven, the public and vocational point. Communication, interpretation, teaching, strategy, and multi-domain work are central. Mercury in Leo in the 12th describes the private studio where the point of view becomes strong enough to publish.',
    pattern:
      'Seth’s public value comes from translating complexity while conditions are still moving. The role is less about guarding one fixed specialty and more about finding the structure that helps other people see.',
    friction:
      'Moon opposite Uranus makes pivots structural. A stable title can become a trap if the work stops evolving. Public responsiveness can also consume the protected time that original thinking needs.',
    integration:
      'The best work rhythm alternates private synthesis with visible communication. A changing career is not evidence that the previous path failed. The container has to evolve with the curiosity.',
    houses: [10, 12, 1, 4],
    signals: [
      {
        glyph: '☽',
        label: 'Moon on the Midheaven',
        placement: '17°47′ Gemini · 10th house',
        aspect: 'Conjunction orb 0°37′',
        interpretation:
          'The public role is responsive, communicative, and visible. Work must offer intellectual movement and contact with changing human needs.',
      },
      {
        glyph: '☿',
        label: 'Mercury in Leo',
        placement: '26°44′ · 12th house',
        aspect: 'Private authorship',
        interpretation:
          'The mind develops its boldest position away from the room. Solitude is not withdrawal here. It is part of the production system.',
      },
      {
        glyph: '☍',
        label: 'Moon opposite Uranus',
        placement: 'Orb 0°34′',
        aspect: 'Career volatility',
        interpretation:
          'Reinvention is built into the public path. Work becomes brittle when it cannot absorb experimentation, independence, or a sudden new direction.',
      },
      {
        glyph: '☉',
        label: 'Sun in the 1st',
        placement: '04°52′ Virgo',
        aspect: 'Personal signature',
        interpretation:
          'The work is strongest when Seth’s own method is visible: observe closely, improve the system, and make the result usable.',
      },
    ],
    questions: [
      'Does the current role reward translation, synthesis, and movement?',
      'What protected backstage does the next public contribution require?',
      'Is a career change an escape, or the next honest container?',
    ],
    practices: [
      { title: 'Protect the studio', copy: 'Reserve time where the private argument can form before public response begins.' },
      { title: 'Publish in iterations', copy: 'Use formats that can evolve instead of waiting for a final identity.' },
      { title: 'Track the through-line', copy: 'Measure continuity by the problem solved, not by title or industry.' },
    ],
  },
  'inner-world': {
    key: 'inner-world',
    number: '04',
    name: 'Inner world',
    tag: 'Roots and private mind',
    tone: 'violet',
    homeNote: 'Structure and freedom share the same room.',
    title: 'Security needs structure, but it cannot become confinement.',
    introduction:
      'Saturn and Uranus both occupy the 4th house of home, roots, and private foundations. One builds the frame; the other tests every inherited rule. Mercury in the 12th adds a substantial interior workspace that needs privacy without isolation.',
    pattern:
      'Home is an active design problem rather than a passive refuge. Seth needs a base with real standards, clear ownership, and enough flexibility to keep growth from feeling like betrayal.',
    friction:
      'Control and abrupt reinvention can alternate. Thoughts held privately for too long gather pressure, and a stable structure can be rejected only after it has become intolerable.',
    integration:
      'Flexible structure is the answer: clear agreements, protected solitude, and visible exits. Difficult information works best when spoken early, while it is still information rather than rupture.',
    houses: [4, 12, 10],
    signals: [
      {
        glyph: '♄',
        label: 'Saturn in Sagittarius',
        placement: '03°25′ · 4th house',
        aspect: 'Foundation and duty',
        interpretation:
          'The private base carries weight. Security grows through structures that are chosen consciously, not inherited without examination.',
      },
      {
        glyph: '♅',
        label: 'Uranus in Sagittarius',
        placement: '18°21′ · 4th house',
        aspect: 'Freedom at the root',
        interpretation:
          'Home must allow reinvention, movement, and intellectual independence. A fixed domestic script is unlikely to remain comfortable.',
      },
      {
        glyph: '☿',
        label: 'Mercury in the 12th',
        placement: '26°44′ Leo',
        aspect: 'Private processing',
        interpretation:
          'Thinking needs seclusion and control over timing. The risk is not privacy itself, but waiting until a thought becomes too charged to share cleanly.',
      },
      {
        glyph: '☍',
        label: 'Moon opposite Uranus',
        placement: '4th–10th house axis',
        aspect: 'Private–public polarity',
        interpretation:
          'Changes in public direction affect the private base, and changes at home alter public momentum. The two systems cannot be managed separately.',
      },
    ],
    questions: [
      'Which structure supports freedom, and which one merely delays change?',
      'What private thought would become easier if said earlier?',
      'Does the current home base restore curiosity or contain it?',
    ],
    practices: [
      { title: 'Build visible exits', copy: 'Define how an agreement can change before anyone needs to break it.' },
      { title: 'Externalize the private mind', copy: 'Use notes, voice, or one trusted person before pressure turns into rupture.' },
      { title: 'Stabilize the base', copy: 'Make home support the next experiment rather than compete with it.' },
    ],
  },
  creativity: {
    key: 'creativity',
    number: '05',
    name: 'Desire and creativity',
    tag: 'Making and attraction',
    tone: 'orange',
    homeNote: 'Imagination becomes credible through craft.',
    title: 'Desire becomes trustworthy when imagination takes form.',
    introduction:
      'Mars is exalted in Capricorn in the 5th house, joining Neptune in the same creative field. The combination is imaginative but not weightless. It wants fantasy, attraction, play, and invention to become something built, tested, and consequential.',
    pattern:
      'Creative force is disciplined, strategic, and sensuous. Seth is energized by an ambitious experiment, especially when the result can become durable rather than remaining a mood.',
    friction:
      'Neptune can let the imagined version outrun the available evidence. Capricorn can then overcorrect through control, turning play into production management and affection into something that feels earned.',
    integration:
      'Constraint should be the launchpad, not the cage. Keep surprise alive long enough to discover the work, then use patience and craft to finish it.',
    houses: [5, 2, 1],
    signals: [
      {
        glyph: '♂',
        label: 'Mars in Capricorn',
        placement: '13°11′ · 5th house',
        aspect: 'Exalted Mars',
        interpretation:
          'Desire acts through commitment, competence, and demonstrated effort. The creative drive becomes stronger when there is something real to build.',
      },
      {
        glyph: '♆',
        label: 'Neptune in Capricorn',
        placement: '03°07′ · 5th house',
        aspect: 'Imagination in form',
        interpretation:
          'Fantasy and symbolism enter the house of play and romance. Capricorn asks the vision to survive structure without losing its atmosphere.',
      },
      {
        glyph: '⚹',
        label: 'Venus sextile Uranus',
        placement: 'Orb 2°33′',
        aspect: 'Attraction to difference',
        interpretation:
          'Originality, surprise, and an independent point of view create attraction. Repetition needs conscious variation to stay alive.',
      },
      {
        glyph: '△',
        label: 'Sun trine Neptune',
        placement: 'Orb 1°45′',
        aspect: 'Creative permeability',
        interpretation:
          'Identity and imagination cooperate. Seth can translate an intuitive or symbolic impression into a precise, personal form.',
      },
    ],
    questions: [
      'What constraint would make the current idea more generative?',
      'Is control protecting quality, or preventing play?',
      'What has enough evidence to move from fantasy into commitment?',
    ],
    practices: [
      { title: 'Prototype the atmosphere', copy: 'Make a small version that tests the feeling before building the full system.' },
      { title: 'Schedule unfinished play', copy: 'Create without a deliverable long enough for surprise to appear.' },
      { title: 'Finish with discipline', copy: 'Once the discovery is real, let craft carry it across the line.' },
    ],
  },
  growth: {
    key: 'growth',
    number: '06',
    name: 'Growth and tension',
    tag: 'The developmental edge',
    tone: 'cyan',
    homeNote: 'From elegant self-containment to direct risk.',
    title: 'Growth begins where equilibrium stops protecting the truth.',
    introduction:
      'The nodal axis runs from Libra in the 2nd house to Aries in the 8th. The familiar territory is self-owned value, diplomacy, and equilibrium. The developmental pull is toward direct participation in shared risk, intimacy, power, and consequence.',
    pattern:
      'Seth already knows how to make an arrangement workable and how to preserve personal resources. Venus near the South Node makes taste, accommodation, and relational intelligence highly available.',
    friction:
      'Keeping peace can delay the confrontation that would create real movement. Independence can also become insulation when vulnerability feels like debt or loss of control.',
    integration:
      'The growth move is direct speech inside meaningful entanglement: name the desire, identify the risk, clarify what is shared, and remain present for the answer.',
    houses: [2, 8, 12],
    signals: [
      {
        glyph: '☋',
        label: 'South Node in Libra',
        placement: '22°03′ · 2nd house',
        aspect: 'Familiar competence',
        interpretation:
          'Balance, self-possession, and fair exchange are practiced strengths. They become limiting only when they prevent disruptive truth.',
      },
      {
        glyph: '☊',
        label: 'North Node in Aries',
        placement: '22°03′ · 8th house',
        aspect: 'Developmental direction',
        interpretation:
          'Growth asks for initiative inside shared territory: intimacy, dependency, joint resources, power, and transformation.',
      },
      {
        glyph: '♀',
        label: 'Venus conjunct South Node',
        placement: 'Orb 1°09′',
        aspect: 'The elegant default',
        interpretation:
          'Charm, diplomacy, and aesthetic coherence are deeply familiar. The risk is preserving what looks balanced after it stops being alive.',
      },
      {
        glyph: '△',
        label: 'Mercury trine North Node',
        placement: 'Orb 4°41′',
        aspect: 'Language as a bridge',
        interpretation:
          'Direct, authored speech can move the chart toward its developmental edge. Naming the difficult thing is itself a growth mechanism.',
      },
    ],
    questions: [
      'What truth would disturb the balance but improve the relationship?',
      'Where is self-sufficiency preventing a necessary shared risk?',
      'What must be named before trust can become concrete?',
    ],
    practices: [
      { title: 'State the stake', copy: 'Say what matters before negotiating how to keep the peace.' },
      { title: 'Define the shared field', copy: 'Clarify ownership, dependency, power, and consequence instead of implying them.' },
      { title: 'Stay for the response', copy: 'Directness becomes intimacy only when the other person’s answer can alter the plan.' },
    ],
  },
} satisfies Record<AreaKey, ChartArea>;

export const placements = [
  ['☉', 'Sun', '04°52′ Virgo', '1st'],
  ['☽', 'Moon', '17°47′ Gemini', '10th'],
  ['☿', 'Mercury', '26°44′ Leo', '12th'],
  ['♀', 'Venus', '20°54′ Libra', '2nd'],
  ['♂', 'Mars', '13°11′ Capricorn', '5th'],
  ['♃', 'Jupiter', '19°36′ Pisces', '7th'],
  ['♄', 'Saturn', '03°25′ Sagittarius', '4th'],
  ['♅', 'Uranus', '18°21′ Sagittarius', '4th'],
  ['♆', 'Neptune', '03°07′ Capricorn', '5th'],
  ['♇', 'Pluto', '05°04′ Scorpio', '3rd'],
] as const;
