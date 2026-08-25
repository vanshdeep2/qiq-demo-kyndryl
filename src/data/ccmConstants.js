/** This demo uses illustrative, synthetic data - Kyndryl has not shared operational data with QiQ. */
import { MICRO_COACHING_CARDS } from './agents'
import { CRITICAL_FAILURES, FIRST_VS_CONTINUATION, CONTINUATION_CSAT_RECOVERY, TREND as TREND_EXEC, WK_LABELS } from './executiveConstants'
import { formatAht } from '../utils/format'

export { WK_LABELS }
export const COACHING_WEEK_INDEX = 1

export const BEHAVIOUR_PILLAR = {
  clarity_of_communication: { first: 4.3, continuation: 3.7, label: 'Clarity of communication' },
  ownership_of_the_issue: { first: 4.1, continuation: 2.2, label: 'Ownership of the issue' },
  listening_and_responsiveness: { first: 4.2, continuation: 3.0, label: 'Listening and responsiveness' },
  professionalism_and_courtesy: { first: 4.5, continuation: 4.3, label: 'Professionalism and courtesy' },
  empathy_and_acknowledgement: { first: 4.3, continuation: 2.0, label: 'Empathy and acknowledgement' },
  managing_frustration: { first: 4.0, continuation: 2.4, label: 'Managing frustration' },
}

export const COACHING_EFFECT_CONTINUATION_CSAT = CONTINUATION_CSAT_RECOVERY.weekly
export const COACHING_EFFECT_CRITICAL_FAILURES = CRITICAL_FAILURES.weekly

export const MICRO_COACHING_ADOPTION = [
  { id: 'cc1', title: MICRO_COACHING_CARDS[0].title, deployed: 10, takenUp: 7, inProgress: 2, notTouched: 1 },
  { id: 'cc2', title: MICRO_COACHING_CARDS[1].title, deployed: 10, takenUp: 6, inProgress: 3, notTouched: 1 },
  { id: 'cc3', title: MICRO_COACHING_CARDS[2].title, deployed: 10, takenUp: 5, inProgress: 4, notTouched: 1 },
  { id: 'cc4', title: MICRO_COACHING_CARDS[3].title, deployed: 10, takenUp: 6, inProgress: 3, notTouched: 1 },
]

export const CCM_HERO = {
  headline: 'Continuation-cohort CSAT is recovering. Auto-fail QA outcomes have not followed it down yet.',
  body: 'Per-contact QA sat at 87.4% team-wide and barely moved. Underneath it, 295 contacts auto-failed this period, most of them follow-ups on tickets that were already open. Coaching the whole team from week 2 moved continuation-cohort CSAT from 2.4 to 3.6. Auto-fail volume stayed uneven, 52 in week 1, a 66 peak in week 3, 64 by week 5, which is the honest signal that this is a real early result, not a solved problem.',
  firstVsContinuation: FIRST_VS_CONTINUATION,
}

export const COACHING_HEALTH_STATS = [
  { label: 'Micro Coaching cards deployed', value: '4', valueClass: '', sub: 'Per agent, from their own contacts' },
  { label: 'Agents taking up', value: '10/10', valueClass: 'val-amber', sub: 'Team-wide since week 2' },
  { label: 'Auto-fails W5', value: '64', valueClass: 'val-amber', sub: 'Down from 66 peak in week 3, above week 1' },
  { label: 'Continuation QA', value: '87.2%', valueClass: 'val-amber', sub: 'Flat all period, CSAT recovering 2.4 → 3.6' },
]

export const HERO_CHIPS = [
  { text: 'Continuation CSAT 2.4 → 3.6 since coaching', className: 'chip-green', dotColor: '#4ade80' },
  { text: 'Ownership 4.1 → 2.2 on continuation', className: 'chip-red', dotColor: '#fca5a5' },
  { text: 'QA still 87.2% on continuation, auto-fails uneven', className: 'chip-amber', dotColor: '#fbbf24' },
]

export const HERO_STATS = [
  { value: '52 → 64', label: 'Auto-fails across the coaching period, uneven not monotonic' },
  { value: '87.2%', label: 'Continuation QA, flat all period' },
  { value: '2.0', label: 'CSAT vs 4.1 first contact' },
  { value: 'Week 2', label: 'Micro Coaching deployment start' },
  { value: '295', label: 'Auto-fail contacts found by quality mining, full period' },
]

export const QUALITY_SUMMARY = [
  { value: 'Bongani Dube: 87.9% QA · 35 auto-fails', label: 'Highest auto-fail count on the team' },
  { value: 'Lerato Mokoena: 86.4% QA · 34 auto-fails', label: 'Same pattern, same coaching cards' },
  { value: 'Behaviour ownership 2.2', label: 'Biggest pillar gap on continuation' },
  { value: 'Micro Coaching uptake 10/10', label: 'Whole team on incident-first opens since week 2' },
]

export const TREND = {
  aht: TREND_EXEC.aht,
  fcr: TREND_EXEC.fcr,
  csat: COACHING_EFFECT_CONTINUATION_CSAT,
  nps: [7, 8, 8, 9, 9],
  er: TREND_EXEC.esc,
}

export const T1_RESOLUTION = [82, 81, 80, 81, 81]
export const CF_WEEKLY = COACHING_EFFECT_CRITICAL_FAILURES
export const CF_BAR_COLORS = ['#c0392b', '#c0392b', '#c0392b', '#d97706', '#d97706']

export const COACHING_LEDGER_ROWS = [
  { agent: 'Bongani Dube', issue: '35 auto-fails with QA 87.9%', topic: 'Start Where They Left Off', deployed: 'Week 2 - Micro Coaching card 1', outcome: 'Continuation CSAT trending up', badges: [{ text: 'Action Needed', className: 'badge badge-red' }, { text: 'TL action required', className: 'badge badge-tl' }], statusCell: true },
  { agent: 'Lerato Mokoena', issue: '34 auto-fails with QA 86.4%', topic: 'Let the Situation Set the Tone', deployed: 'Week 2 - Micro Coaching card 3', outcome: 'Continuation CSAT trending up', badges: [{ text: 'Action Needed', className: 'badge badge-red' }, { text: 'TL action required', className: 'badge badge-tl' }], statusCell: true },
  { agent: 'Sipho de Villiers', issue: '32 auto-fails with QA 86.2%', topic: 'Name Who Has It and When', deployed: 'Week 2 - Micro Coaching card 2', outcome: 'Improving named owners on close', badges: [{ text: 'Action Needed', className: 'badge badge-red' }, { text: 'TL action required', className: 'badge badge-tl' }], statusCell: true },
  { agent: 'Janine Khumalo', issue: '31 auto-fails with QA 87.5%', topic: 'Start Where They Left Off', deployed: 'Week 2 - Micro Coaching card 1', outcome: 'Uptake started on messaging', badges: [{ text: 'Watch', className: 'badge badge-amber' }] },
  { agent: 'Zanele Zulu', issue: '29 auto-fails, first-contact strong', topic: 'Micro Coaching suite', deployed: 'Week 2', outcome: 'CSAT trending up', badges: [{ text: 'Improving', className: 'badge badge-green' }] },
  { agent: 'Sipho Molefe', issue: 'Lowest auto-fail count on the team', topic: 'Peer coaching source', deployed: 'Week 2', outcome: 'Modelling incident-first opens', badges: [{ text: 'Benchmark', className: 'badge badge-trophy' }] },
]

export const COACHING_LEDGER_SUMMARY = [
  { text: '6 agents in ledger', className: 'summary-chip' },
  { text: '3 action needed', className: 'summary-chip summary-chip-amber' },
  { text: '1 watch', className: 'summary-chip summary-chip-amber' },
  { text: '1 improving', className: 'summary-chip summary-chip-green' },
  { text: '1 benchmark', className: 'summary-chip summary-chip-trophy' },
]

export const PATTERN_CARDS = [
  {
    variant: 'red',
    title: 'Continuation failure invisible to per-contact QA',
    level: 'System level',
    body: 'CSAT 2.0 vs first-contact 4.1 while QA stays near 87%. Scorecards judge tickets in isolation. The ticket trail is the instrument that sees the damage.',
    tags: [
      { text: 'CSAT -2.1', className: 'tag tag-red' },
      { text: 'QA flat', className: 'tag tag-amber' },
      { text: 'Beh -1.9', className: 'tag tag-red' },
    ],
  },
  {
    variant: 'amber',
    title: 'Onboarding & CMDB contacts closed without a route forward',
    level: 'System level',
    body: '28% of Onboarding & Tooling / CMDB contacts close with no resolution path. Internal volume leads external review mentions by 7 days at correlation 0.74.',
    tags: [
      { text: 'ER elevated', className: 'tag tag-amber' },
      { text: '0.74 corr', className: 'tag tag-amber' },
      { text: '7-day lag', className: 'tag tag-amber' },
    ],
  },
  {
    variant: 'amber',
    title: 'Micro Coaching moves CSAT, auto-fails stay uneven',
    level: 'Team level - early result',
    body: 'After week-2 deployment, continuation-cohort CSAT rises every week, 2.4 to 3.6. Auto-fail QA outcomes have not followed the same clean line, 52 → 66 → 64, which is the honest state of this intervention at week 5.',
    tags: [
      { text: 'CSAT +1.2', className: 'tag tag-green' },
      { text: '10/10 uptake', className: 'tag tag-amber' },
    ],
  },
  {
    variant: 'red',
    title: 'Contract & invoice handoff is a process gap, not a behavioural one',
    level: 'System level - not coachable',
    body: '310 avoidable weekly status-chasing contacts on contract and invoice handoffs, crossing 2.4 teams on average. Will not respond to Micro Coaching.',
    tags: [
      { text: '310 avoidable', className: 'tag tag-amber' },
      { text: 'Not coachable', className: 'tag tag-red' },
    ],
  },
]

export const BEST_PRACTICE_CARDS = [
  {
    title: 'Open with the ticket history before the request',
    evidence: 'Evidence: continuation CSAT recovers when agents read history first · QA stays high either way',
    agents: 'Agents: Sipho Molefe modelling · Bongani Dube and Lerato Mokoena coaching focus',
    rec: 'Recommendation: Make incident-first open the default on contact_sequence > 1.',
  },
  {
    title: 'Never close without a named route forward',
    evidence: 'Evidence: Onboarding & CMDB and Major Incident tails spike when closes leave clients without an owner or timeframe',
    agents: 'Agents: Sipho de Villiers coaching in progress',
    rec: 'Recommendation: Require owner + timeframe on every continuation close when a dependency blocks full resolution.',
  },
]

export function getMetricsDrawerSections() {
  return [
    {
      id: 'kpi-csat-drawer',
      label: 'CSAT',
      value: '3.6',
      valueClass: 'val-amber',
      sub: 'Target: 4.3',
      change: '-16.3% vs target',
      changeClass: 'chg-amber',
      series: TREND_EXEC.csat,
      format: 'csat',
      color: '#1a7a4a',
      note: 'Blended CSAT across all contacts. Micro Coaching is recovering the continuation cohort that pulls the blended figure down; the blended figure itself has not turned yet.',
    },
    {
      id: 'kpi-cf-drawer',
      label: 'Auto-Fail Contacts',
      value: '64',
      valueClass: 'val-amber',
      sub: 'Peak: 66 in week 3',
      change: 'Uneven since coaching deployed, not a clean decline',
      changeClass: 'chg-amber',
      series: CRITICAL_FAILURES.weekly,
      format: 'whole',
      color: '#d97706',
      note: 'Leading indicator of coaching impact, alongside continuation CSAT. Has not fallen cleanly yet.',
    },
    {
      id: 'kpi-rcr-drawer',
      label: 'Repeat Contact Rate',
      value: '27.1%',
      valueClass: 'val-red',
      sub: 'Target: 16%',
      change: 'Blended, all contacts',
      changeClass: 'chg-red',
      series: TREND_EXEC.rcr,
      format: 'pct',
      color: '#d97706',
      note: 'Population-wide KPI. Takes longer to turn than continuation CSAT after a cohort-level coaching fix.',
    },
    {
      id: 'kpi-esc-drawer',
      label: 'Escalation Rate',
      value: '11.0%',
      valueClass: 'val-amber',
      sub: 'Target: 6.5%',
      change: 'Major incident and CMDB drag',
      changeClass: 'chg-amber',
      series: TREND_EXEC.esc,
      format: 'pct',
      color: '#c0392b',
      note: 'Onboarding & Tooling / CMDB closures without a route forward keep escalation elevated.',
    },
    {
      id: 'kpi-aht-drawer',
      label: 'Average Handle Time',
      value: formatAht(460),
      valueClass: 'val-amber',
      sub: `Target: ${formatAht(400)}`,
      change: 'Voice + messaging blended',
      changeClass: 'chg-amber',
      series: TREND_EXEC.aht,
      format: 'aht',
      color: '#2a4fa8',
      note: 'First-contact AHT is long. Continuation AHT collapses as agents rush the ticket.',
    },
    {
      id: 'kpi-fcr-drawer',
      label: 'First Contact Resolution',
      value: '64.7%',
      valueClass: 'val-red',
      sub: 'Target: 78%',
      change: 'Trending down across the period',
      changeClass: 'chg-red',
      series: TREND_EXEC.fcr,
      format: 'pct',
      color: '#1a7a4a',
      note: 'Blended FCR. Ticket resolution is not the same as incident resolution.',
    },
    {
      id: 'kpi-transfer-drawer',
      label: 'Transfer Rate',
      value: '16.8%',
      valueClass: 'val-amber',
      sub: 'Target: 11%',
      change: 'Above target',
      changeClass: 'chg-amber',
      series: TREND_EXEC.transfer,
      format: 'pct',
      color: '#d97706',
      note: 'Transfers remain above target across the blended population.',
    },
    {
      id: 'kpi-nps-drawer',
      label: 'NPS',
      value: '9',
      valueClass: 'val-red',
      sub: 'Target: 30',
      change: 'Blended, all contacts',
      changeClass: 'chg-red',
      series: TREND_EXEC.nps,
      format: 'whole',
      color: '#2a4fa8',
      note: 'NPS tracks the same recovery lag as other population-wide experience metrics.',
    },
  ]
}
