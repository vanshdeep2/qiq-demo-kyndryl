/**
 * Sourced from clients/kyndryl/story-spec.json. Population, KPI, driver, and
 * financial figures are direct field lookups from the spec or the
 * qiq-dataset-builder output (agent_metrics.json / contact_extract.json) -
 * nothing here is a second, independently-authored number. Weekly trend
 * shapes for aht/fcr/escalation/transfer/nps are illustrative interpolations
 * that end exactly on the current blended KPI value from story-spec.json;
 * csat and repeat-contact-rate weekly shapes are copied directly from
 * story-spec.kpis.fiveWeekTrend. This demo uses illustrative, synthetic data -
 * Kyndryl has not shared operational data with QiQ.
 */

export const LIVE_LABEL = 'Live · 5-week window'
export const CALLS_PILL = '47,000 contacts analysed'
export const EXTRACT_NOTE =
  'Contact Evidence carries a 2,358-record working extract of the 47,000-contact population.'

export const PERIOD_LABEL = '27 Apr - 31 May 2026'
export const WK_LABELS = ['27 Apr-3 May', '4-10 May', '11-17 May', '18-24 May', '25-31 May']
export const WK5 = WK_LABELS

export const POPULATION = {
  weeklyTotal: 9400,
  weeks: 5,
  estimatedPopulation: 47000,
  extractSize: 2358,
  voiceShare: 34.0,
  messagingShare: 66.0,
  firstContacts: 6486,
  continuationContacts: 2914,
  continuationShare: 31.0,
}

export const KPIS = {
  aht: { voice: 610, messaging: 340, blended: 460, target: 400 },
  fcr: { voice: 68.0, messaging: 62.4, blended: 64.7, target: 78.0 },
  escalation: { voice: 14.2, messaging: 9.1, blended: 11.0, target: 6.5 },
  csat: { voice: 3.8, messaging: 3.5, blended: 3.6, target: 4.3 },
  nps: { voice: 12, messaging: 6, blended: 9, target: 30 },
  rcr: { voice: 24.0, messaging: 29.1, blended: 27.1, target: 16.0 },
  transfer: { voice: 21.3, messaging: 14.0, blended: 16.8, target: 11.0 },
}

/** Aliases for healthScore.js (component contract). */
export const ACTUAL_AHT = KPIS.aht.blended
export const FCR = KPIS.fcr.blended
export const ESC_RATE = KPIS.escalation.blended
export const TR_RATE = KPIS.transfer.blended
export const RCR_RATE = KPIS.rcr.blended
export const ER_TARGET = KPIS.escalation.target
export const TR_TARGET = KPIS.transfer.target
export const RCR_TARGET = KPIS.rcr.target
export const CSAT = KPIS.csat.blended

export const DEFAULTS = {
  targetAht: KPIS.aht.target,
  costPerMin: 0.35,
  escMultiplier: 1.5,
  weeklyCalls: POPULATION.weeklyTotal,
}

/**
 * Blended CSAT slides gently across the period (story-spec.kpis.fiveWeekTrend.csat).
 * Do not draw a recovery curve here: population-level CSAT has not turned yet.
 * The metric that does respond to coaching so far is the continuation-cohort
 * CSAT curve (see COACHING_EFFECT_CSAT in ccmConstants, sourced from
 * story-spec.coaching.effectSeriesCsat).
 */
export const FIVE_WEEK_TREND = {
  weeks: WK_LABELS,
  csat: [3.9, 3.8, 3.7, 3.6, 3.6],
  rcr: [23.5, 24.8, 26.1, 26.9, 27.1],
  // Illustrative interpolation ending on KPIS.escalation.blended (11.0) - not a
  // separately sourced weekly figure, story-spec only carries the current value.
  escalation: [8.6, 9.3, 9.9, 10.5, 11.0],
}

/**
 * aht, fcr, transfer and nps below are illustrative interpolations that end
 * exactly on the current blended KPI value from story-spec.json, so week 5
 * always reconciles. They are not separately sourced weekly figures.
 */
export const TREND = {
  csat: FIVE_WEEK_TREND.csat,
  rcr: FIVE_WEEK_TREND.rcr,
  esc: FIVE_WEEK_TREND.escalation,
  aht: [430, 440, 448, 455, 460],
  fcr: [68.5, 67.2, 66.5, 65.4, 64.7],
  transfer: [14.9, 15.6, 16.0, 16.5, 16.8],
  nps: [13, 12, 11, 10, 9],
}

/**
 * The Micro Coaching intervention story. Deployed from week 2
 * (story-spec.coaching.appliedFromWeek), the same field every module reads.
 * CSAT on the coached cohort is the metric that has started to move; the
 * blended, population-wide KPIs above take longer to turn, which is expected
 * for a 47,000-contact/week population.
 */
export const COACHING_WEEK_INDEX = 1 // week 2, 0-indexed

/**
 * Team-wide critical/auto-fail QA outcomes, summed by week across all ten
 * agents in agentMetrics.js (criticalFailureSeries). Unlike a clean
 * post-coaching decline, this period's series is uneven, week 3 is the worst
 * week, not week 1, and week 5 is still above week 1. That unevenness is the
 * honest finding: CSAT on the coached cohort is recovering (see
 * coaching.effectSeriesCsat) while auto-fail volume has not yet followed it
 * down. Reported as-is, not smoothed into a success curve.
 */
export const CRITICAL_FAILURES = {
  weekly: [52, 57, 66, 56, 64],
  totalThisPeriod: 295,
  currentWeek: 64,
  peakWeek: 66,
  category:
    'Auto-fail outcomes concentrated on ticket-status-chasing follow-ups opened as new tickets, onboarding/CMDB continuation contacts, and major-incident disclosures closed without a named route forward',
}

/**
 * Continuation-cohort CSAT since coaching started, copied directly from
 * story-spec.coaching.effectSeriesCsat - not computed here.
 */
export const CONTINUATION_CSAT_RECOVERY = {
  weekly: [2.4, 2.6, 2.9, 3.3, 3.6],
  startValue: 2.4,
  currentValue: 3.6,
}

/** story-spec.firstVsContinuation.qaScorecardPct, direct field lookup, no computation. */
export const CONTINUATION_QA_WEEKLY = [87.2, 87.2, 87.2, 87.2, 87.2]

/**
 * Real figure from story-spec.storylines[0].stats: Ticket Status Chasing /
 * Follow-Up is 18.5% of weekly volume, the single largest driver.
 */
export const EMPATHY_GAP_STAT = {
  category: 'Ticket Status Chasing / Follow-Up',
  categoryVolume: 1739,
  affectedCount: 713, // 41% repeat-contact rate on the CMDB/onboarding cohort applied to this category's volume (storylines[2].stats), illustrative not separately sourced
  affectedSharePct: 41.0,
}

/** story-spec.firstVsContinuation, direct field lookup, no computation. */
export const FIRST_VS_CONTINUATION = {
  csat: { first: 4.1, continuation: 2.0 },
  ahtSeconds: { first: 480, continuation: 210 },
  behaviourScore: { first: 4.2, continuation: 2.6 },
  qaScorecardPct: { first: 91.5, continuation: 87.2 },
  processAdherencePct: { first: 96, continuation: 92 },
  resolutionRatePct: { first: 89, continuation: 81 },
}

/**
 * Population-level QA-outcome-by-CSAT-band matrix. Rows are illustrative
 * distributions consistent with story-spec's first/continuation resolution
 * and process-adherence percentages, and sum to POPULATION.weeklyTotal
 * (9,400). Not a directly sourced field - flagged as an inference in the
 * stage-4 handover note.
 */
export const QUALITY_OUTCOME_MATRIX = {
  overallQaAveragePct: 88.9,
  rows: [
    { label: 'Followed + Resolved', high: 4380, med: 1340, low: 1290 },
    { label: 'Followed + Not Resolved', high: 260, med: 560, low: 780 },
    { label: 'Not Followed + Resolved', high: 210, med: 160, low: 110 },
    { label: 'Not Followed + Not Resolved', high: 30, med: 70, low: 210 },
  ],
  headlineCell: {
    label: 'Followed + Resolved + Low CSAT',
    contacts: 1290,
    shareOfTotalPct: 13.7,
    continuationShareOfCellPct: 66,
    qaAveragePct: 87.2,
  },
}

export const FINANCIAL_ESTIMATES = {
  demandSideLtv: 3280000,
  cohortHitWeekly: 30,
  churnUpliftPct: 9,
  // Computed at render/build time from the inputs above (30 x $3.28M x 9% x 5 weeks),
  // never hardcoded as a second number. cohortHitWeekly is distinct accounts
  // per week (~0.65% of the ~4,600-account base), corrected from 560 after the
  // stage-6 audit - see story-spec.json `_note`.
}

export const OVERALL_QA_PCT = 87.4

export const PERIOD_WEEKS = 5
export const REPEAT_CONTACTS = 2914
export const UNNECESSARY_ESCALATIONS = Math.round(POPULATION.weeklyTotal * (ESC_RATE / 100))
export const CONTRACT_INVOICE_CONTACTS = 893
export const AVOIDABLE_STATUS_CHASING_WEEKLY = 310

/**
 * Weekly taxonomy from story-spec.json drivers. subDrivers is only present
 * for Onboarding & Tooling / CMDB Integration because that is the only
 * driver story-spec.json breaks down to a second level; the other eight rows
 * are left without a subDrivers array rather than inventing one.
 */
export const DRIVER_ROWS = [
  { name: 'Ticket Status Chasing / Follow-Up', volume: 1739, share: 18.5, fcr: 61, aht: 260, esc: 9 },
  { name: 'Change Request / Standard Service Request', volume: 1504, share: 16.0, fcr: 79, aht: 380, esc: 5 },
  { name: 'Access & Identity Management', volume: 1269, share: 13.5, fcr: 84, aht: 220, esc: 3 },
  {
    name: 'Onboarding & Tooling / CMDB Integration', volume: 1034, share: 11.0, fcr: 60, aht: 470, esc: 14,
    subDrivers: [
      { name: 'CMDB implementation delay', volume: 380, share: 36.7, signal: 'Primary driver' },
      { name: 'Missing tool integration', volume: 320, share: 30.9, signal: 'Primary driver' },
      { name: 'Onboarding status query', volume: 220, share: 21.3, signal: 'Primary driver' },
      { name: 'Reporting gap escalation', volume: 114, share: 11.0, signal: 'Primary driver' },
    ],
  },
  { name: 'Migration / Modernization Project Status', volume: 987, share: 10.5, fcr: 70, aht: 410, esc: 8 },
  { name: 'Contract & Invoice Query Handoff', volume: 893, share: 9.5, fcr: 52, aht: 300, esc: 13 },
  { name: 'Security & Compliance Inquiry', volume: 752, share: 8.0, fcr: 74, aht: 390, esc: 7 },
  { name: 'Major Incident / SLA Breach Escalation', volume: 282, share: 3.0, fcr: 58, aht: 980, esc: 31 },
  { name: 'Other / Miscellaneous', volume: 940, share: 10.0, fcr: 76, aht: 240, esc: 4 },
]

export const CROSS_KPI_PATTERNS = [
  {
    label: 'Cross-KPI Pattern 1',
    headline: 'Ticket status chasing: follow-up contacts pass QA and collapse CSAT',
    body: 'First-contact CSAT 4.1 vs continuation 2.0 while QA barely moves, 91.5% to 87.2%. Per-contact scorecards cannot see the ticket trail.',
    rootCause:
      'Quality mining flagged a behavioural gap rather than a process one: agents handling follow-up contacts on a stalled resolution were procedurally correct but showed no acknowledgement of the ticket history. inc-2026-0512 shows the pattern directly - a first contact scoring CSAT 4 and QA 93%, then three follow-up messaging and voice contacts from the same client scoring CSAT 1-2 while QA still held at 89-91%. Micro Coaching card 1, open with the incident not the ticket, was deployed from week 2. Auto-fail QA outcomes have not fallen cleanly since, 52 in week 1 rising to a 66 peak in week 3 before easing to 64 by week 5, but CSAT on the coached cohort has moved every week, 2.4 to 3.6. That is the honest read: an early, real signal, not yet a resolved problem.',
    trend: {
      title: 'Continuation-cohort CSAT · 5-week',
      weeks: WK_LABELS,
      data: [2.4, 2.6, 2.9, 3.3, 3.6],
      color: '#2a4fa8',
      coachingWeekIndex: 1,
    },
    driversTable: {
      columns: ['Signal', 'Detail'],
      rows: [
        { a: 'Largest driver', b: 'Ticket Status Chasing / Follow-Up · 18.5% of weekly volume, 1,739 contacts' },
        { a: 'Coaching deployed', b: 'Week 2, card 1 (open with the incident) to all ten agents' },
        { a: 'Auto-fail outcomes', b: '52 → 66 → 64 across the period, uneven, not yet a clean decline' },
      ],
    },
  },
  {
    label: 'Cross-KPI Pattern 2',
    headline: 'Major incident escalation: passes QA, then CSAT falls off a cliff',
    body: 'Only 3.0% of contacts, but a Sev-1 SLA-breach disclosure collapses CSAT to 1-2 and routes straight to the client account executive - disproportionate damage relative to volume.',
    rootCause:
      'inc-2026-0398 opened well: the first two voice contacts disclosing and updating on the SLA breach scored CSAT 5 and 4 with QA 94-96%. The third contact, a messaging follow-up from the same client, scored CSAT 1 with QA still at 88%, and a fourth voice contact scored CSAT 2. This is a register-matching gap, not a process failure - the update itself was accurate, but a routine-sounding follow-up on a live Sev-1 was handled in a routine tone. At roughly 3% of contacts, a QA sample sized for the average will never carry enough volume from this tail to see it reliably.',
    trend: {
      title: 'Major incident CSAT · contact sequence',
      weeks: ['Contact 1', 'Contact 2', 'Contact 3', 'Contact 4'],
      data: [5, 4, 1, 2],
      color: '#c0392b',
    },
    driversTable: {
      columns: ['Contact', 'Detail'],
      rows: [
        { a: 'Contact 1 · SLA breach disclosed', b: 'CSAT 5 · QA 96% · voice' },
        { a: 'Contact 2 · status update', b: 'CSAT 4 · QA 94% · voice' },
        { a: 'Contact 3 · client follows up', b: 'CSAT 1 · QA 88% · messaging' },
        { a: 'Contact 4 · second follow-up', b: 'CSAT 2 · QA 90% · voice' },
      ],
    },
  },
  {
    label: 'Cross-KPI Pattern 3',
    headline: 'Onboarding & CMDB delays: internal signal leads external mentions by 7 days',
    body: 'Internal volume spikes first (correlation 0.74). External review mentions of CMDB and tooling integration gaps follow a week later.',
    rootCause:
      'Onboarding & Tooling / CMDB Integration is 11.0% of weekly volume. 28% of these contacts close with no resolution path offered, and repeat contact rate on this cohort is 41% against a 27.1% overall average - clients calling back because the CMDB implementation is still not done. The same theme, delayed CMDB implementation and missing tool integrations, is corroborated externally: Kyndryl already scores 4.1/5 (31 reviews) against HCLTech 4.7/5 (97 reviews) on Gartner Peer Insights Managed Network Services, the same product line. External buyers are already rating Kyndryl behind this specific peer on this exact category.',
    trend: {
      title: 'External CMDB/tooling mentions · this week vs prior',
      weeks: ['Prior week', 'This week'],
      data: [19, 46],
      color: '#c0392b',
    },
    driversTable: {
      columns: ['Signal', 'Detail'],
      rows: [
        { a: 'Internal', b: '28% closed with no resolution path · 41% repeat contact rate on this cohort' },
        { a: 'External mentions', b: '46 this week, up from 19 the week prior' },
        { a: 'Correlation and lag', b: '0.74 correlation · external mentions lag the internal spike by 7 days' },
      ],
    },
  },
  {
    label: 'Cross-KPI Pattern 4',
    headline: 'Contract & invoice handoff: a process gap, not a behavioural one',
    body: '893 contract/invoice contacts weekly; 310 are avoidable status chases created by a cross-team handoff, not by agent behaviour.',
    rootCause:
      'This is a process and ownership gap across support, contract, and invoicing teams, directly evidenced by the back_office_response_lag theme in the external review data ("response time from the support team, contract team and invoice team leaves room for improvement"). 44% of these contacts are pure status chasing, a handoff crosses 2.4 teams on average, and resolution takes 4.6 additional days beyond a single-team ticket. It will not respond to Micro Coaching - this is the storyline that keeps the rest of the demo honest, and it stays open here, not folded into a coaching win.',
    trend: {
      title: 'Contract & invoice handoff · weekly volume',
      weeks: WK_LABELS,
      data: [860, 875, 890, 905, 893],
      color: '#d97706',
    },
    driversTable: {
      columns: ['Item', 'Detail'],
      rows: [
        { a: 'Root cause', b: 'No single owner across support, contract, and invoicing teams' },
        { a: 'Avoidable volume', b: '310 weekly status-chasing contacts, 44% of this driver' },
        { a: 'Owner', b: 'Process and cross-team ownership, not agent behaviour - not a coaching fix' },
      ],
    },
  },
]

export const HERO_CHIPS = [
  {
    text: 'CSAT 2.0 on follow-up vs 4.1 first contact',
    className: 'chip-red',
    dotColor: '#fca5a5',
  },
  {
    text: 'QA still 87.2% on follow-up contacts',
    className: 'chip-amber',
    dotColor: '#fbbf24',
  },
  {
    text: 'Team QA averages 87.4% - looks healthy',
    className: 'chip-green',
    dotColor: '#4ade80',
  },
]

/**
 * Briefing header + hero narrative. This is exactly the content
 * qiq-content-writer generates per client (see qiq-story-architect's Step 5,
 * "hero narrative arc"). This demo uses illustrative, synthetic data.
 */
export const BRIEFING_TITLE = 'Kyndryl Intelligence Briefing'

export const HERO_CONTENT = {
  subtitleSuffix: 'Quality scoring said this period was fine. It was not, and this is where the two views separate.',
  eyebrow: 'QiQ Weekly Intelligence · Week 5 of 5',
  headline: "Ticket status chasing is Kyndryl's biggest contact driver, and the follow-up is where it breaks down.",
  paragraphs: [
    "Ticket Status Chasing / Follow-Up is the single largest driver in the contact data at 18.5% of weekly volume - a client calling back on a resolution that stalled, not a new issue. The first contact handles the update fine. The problem shows up on the second contact, when a different agent picks it up and treats it as a new question rather than the same unresolved ticket. inc-2026-0512 shows this directly: CSAT 4 on the first contact, then 2, 1, and 2 on three follow-ups while QA barely moves, 93% down to 89%.",
    "Micro Coaching, built around opening every follow-up contact with the ticket history rather than a blank page, deployed from week 2. CSAT on the coached cohort has moved every week since, 2.4 to 3.6. Auto-fail QA outcomes have not followed the same clean line - 52 in week 1, a 66 peak in week 3, easing to 64 by week 5 - so this is a real early result, not a closed case. Contract & Invoice Query Handoff (9.5% of volume) is a separate, process-level gap that Micro Coaching will not touch; it stays open below.",
  ],
  /**
   * The one-line "what actually moved" summary under the hero narrative.
   * Client-specific because which measure is the honest headline differs per
   * client - here CSAT is the mover and auto-fails are the caveat, which is
   * the opposite of a clean success curve.
   */
  wow:
    'Continuation-cohort CSAT 2.4 → 3.6 since coaching · continuation QA held flat at 87.2% throughout · auto-fail contacts 52 → 66 → 64, still above where they started',
  /**
   * The "how to read these charts" note above the KPI grid. Names the
   * population size and sets expectations for what four weeks of coaching on
   * a specific cohort should look like at this stage.
   */
  readingNote:
    'Micro Coaching deployed in week 2, marked on every chart below. Continuation-cohort CSAT responds directly to coaching and has climbed every week since. Auto-fail contacts have not followed the same line - they peaked in week 3 and are still above week 1. The rest are blended, population-wide KPIs across all 9,400 weekly contacts; they are flat or still deteriorating, which is what four weeks of coaching on a specific agent cohort should look like at this stage. Judge the intervention on continuation CSAT now, and on auto-fails and repeat contact rate next quarter.',
}

/**
 * Per-tile labels and framing for the Operations Snapshot KPI grid. Kept in
 * data because the honest one-line read on a metric is client-specific - a
 * template component must never assert "down every week" on a series that
 * is not.
 */
export const KPI_TILE_META = {
  csat: { label: 'CSAT', colour: 'amber' },
  criticalFailures: {
    label: 'Auto-fail contacts',
    target: 'Peak: 66 in week 3',
    changeText: 'W1 52 → W3 peak 66 → W5 64. Uneven, still above week 1',
    varianceDirection: 'down',
    colour: 'amber',
    drillLabel: 'View auto-fail contacts →',
  },
  rcr: { label: 'Repeat contact rate', changeText: 'Blended, all contacts', colour: 'red' },
  escalation: {
    label: 'Escalation rate',
    changeText: 'Major incident and CMDB drag',
    colour: 'amber',
  },
  aht: { label: 'AHT', changeText: 'Voice + messaging blended', colour: 'green' },
  // Labelled "first contact" deliberately: this is the share of contacts
  // resolved on the FIRST attempt with no repeat. It is a different measure
  // from Quality Diagnostics' "Call Resolution Rate", which is the share of
  // contacts resolved eventually. Both are correct and they do not agree by
  // design - see qualityConstants.METRIC_CARD_NOTES.
  fcr: {
    label: 'First contact resolution',
    changeText: 'Resolved on first attempt, no repeat · cross-team dependency drag',
    colour: 'red',
  },
  transfer: { label: 'Transfer rate', changeText: 'Above target', colour: 'amber' },
  nps: { label: 'NPS', changeText: 'Blended, all contacts', colour: 'amber' },
}

/**
 * Root-cause analysis + performance drivers per KPI, shown in the metric
 * drill-down modal. Narrative content only - colours, targets, and trend
 * data stay structural (sourced from KPIS/TREND above).
 */
export const METRIC_ROOT_CAUSE = {
  csat: {
    rootCause:
      'Blended CSAT is being pulled down by follow-up contacts on Ticket Status Chasing and Onboarding & Tooling / CMDB Integration. Clients reaching a second agent on the same stalled ticket rate the experience 2.0 on average, against 4.1 on the first contact, because the agent has no visibility into what already happened.',
    drivers: [
      { a: 'Ticket Status Chasing / Follow-Up', b: 'Continuation contacts scoring 2.0 CSAT vs 4.1 on first contact' },
      { a: 'Onboarding & Tooling / CMDB Integration', b: '28% of contacts closed with no resolution path for the client' },
      { a: 'Micro Coaching', b: 'Continuation-cohort CSAT 2.4 → 3.6 since week 2 · auto-fails still uneven' },
    ],
  },
  rcr: {
    rootCause:
      'Contacts that pass every scorecard question and still leave the client unresolved come back within the week. The repeat is concentrated in Ticket Status Chasing and Onboarding & Tooling, where the first contact resolves the ticket but not the underlying delay.',
    drivers: [
      { a: 'Ticket Status Chasing / Follow-Up', b: 'Largest single driver at 18.5% of weekly volume' },
      { a: 'Onboarding & Tooling / CMDB Integration', b: '41% repeat contact rate on this cohort vs 27.1% overall' },
      { a: 'Major Incident / SLA Breach', b: 'Smaller volume, highest escalation rate at 31%' },
    ],
  },
  escalation: {
    rootCause:
      'Escalations concentrate on Major Incident / SLA Breach disclosures (31% escalation rate) and Onboarding & Tooling / CMDB Integration, where clients push past first-line replies once a delay has already dragged past what was communicated.',
    drivers: [
      { a: 'Major Incident / SLA Breach Escalation', b: '31% escalation rate, the highest of any category' },
      { a: 'Onboarding & Tooling / CMDB Integration', b: '14% escalation rate, second highest' },
      { a: 'Contract & Invoice Query Handoff', b: '13% escalation rate, a process gap not a behavioural one' },
    ],
  },
  aht: {
    rootCause:
      'Handle time runs longest where agents have to manually piece together what already happened on a ticket, rather than resolve a clean, self-contained request. Major incident and onboarding/CMDB contacts carry the heaviest load.',
    drivers: [
      { a: 'Major Incident / SLA Breach Escalation', b: 'Highest AHT driver, avg 980s' },
      { a: 'Onboarding & Tooling / CMDB Integration', b: 'avg 470s' },
      { a: 'Migration / Modernization Project Status', b: 'avg 410s' },
    ],
  },
  fcr: {
    rootCause:
      'FCR drops hardest in categories where the agent needs information or a decision from another team before they can close the loop with the client on the first attempt.',
    drivers: [
      { a: 'Contract & Invoice Query Handoff', b: '52% FCR, crosses 2.4 teams on average before resolving' },
      { a: 'Major Incident / SLA Breach Escalation', b: '58% FCR, depends on engineering root-cause timelines' },
      { a: 'Onboarding & Tooling / CMDB Integration', b: '60% FCR, depends on CMDB implementation status' },
    ],
  },
  transfer: {
    rootCause:
      'Transfers cluster where the first agent cannot action the request themselves - CMDB implementation, contract terms, and major incident engineering all sit with specialist teams rather than the frontline.',
    drivers: [
      { a: 'Onboarding & Tooling / CMDB Integration', b: 'Routed to CMDB/tooling implementation team' },
      { a: 'Contract & Invoice Query Handoff', b: 'Routed across support, contract, and invoicing teams' },
      { a: 'Major Incident / SLA Breach Escalation', b: 'Routed to incident engineering' },
    ],
  },
  nps: {
    rootCause:
      'Detractors concentrate around the same two patterns driving CSAT down: follow-up contacts handled with no ticket-history acknowledgement, and Onboarding & Tooling / CMDB closures with no path forward.',
    drivers: [
      { a: 'Continuation contacts', b: 'Lowest-scoring group at 2.0 CSAT, direct target of Micro Coaching' },
      { a: 'Onboarding & Tooling / CMDB Integration', b: '28% closed with no route forward, a recurring detractor theme' },
      { a: 'Contract & Invoice Query Handoff', b: 'Process gap, not addressed by coaching, stays a detractor source' },
    ],
  },
}
