import { AGENT_SLUGS } from './agents'

export { AGENT_SLUGS }

export const Q_NAMES = {
  q1: 'Resolution',
  q2: 'Diagnosis',
  q3: 'Efficiency',
  q4: 'Verification',
  q5: 'Escalation',
  q6: 'Expectation Setting',
  q7: 'Communication',
  q8: 'Callback',
  q9: 'Closing the Loop',
  q10: 'Client Appreciation',
  q11: 'Case Notes',
  q12: 'Internal Process',
  q13: 'Business Policy',
  q14: 'Compliance',
}

export const PASS_FAIL_QS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q11']

export const DEFAULT_FILTERS = {
  agent: 'all',
  source: 'all',
  queue: 'all',
  week: 'all',
  resolution: 'all',
  dateFrom: '2026-04-27',
  dateTo: '2026-05-31',
  scoreFilter: 'all',
  criticalOnly: false,
}

export const WEEK_BOUNDARIES = [
  { start: '2026-04-27', end: '2026-05-03' },
  { start: '2026-05-04', end: '2026-05-10' },
  { start: '2026-05-11', end: '2026-05-17' },
  { start: '2026-05-18', end: '2026-05-24' },
  { start: '2026-05-25', end: '2026-05-31' },
]

/**
 * Hero and flagship contact IDs, verified against the generated contact index
 * (public/data/kyndryl_contact_index.json). These are the two multi-contact
 * incidents the dataset actually carries an `incident_id` for - INC-2026-0512
 * (Bongani Dube, four contacts, CSAT 4 -> 2 -> 1 -> 2 while QA holds 93 -> 89)
 * and INC-2026-0398 (Janine Khumalo, four contacts, CSAT 5 -> 4 -> 1 -> 2).
 * Both are the contacts the Executive hero narrative refers to by name.
 */
export const HERO_IDS = [
  'kyn-002451',
  'kyn-002452',
  'kyn-002453',
  'kyn-002454',
]

export const FLAGSHIP_IDS = ['kyn-002455', 'kyn-002456', 'kyn-002457', 'kyn-002458']

export const SORTABLE_FIELDS = [
  'contact_id',
  'agent_name',
  'call_date',
  'call_category',
  'qa_score',
  'contact_sequence',
]

/**
 * Critical-failure quick links on Contact Evidence. Every id, agent name, and
 * category below was checked against the generated contact index - each one
 * resolves to a real contact whose agent and category match its label.
 */
export const CF_QUICK_LINKS = [
  { callId: 'kyn-002451', agent: 'Bongani Dube', label: 'INC-2026-0512 · Ticket status chasing after a stalled resolution' },
  { callId: 'kyn-002455', agent: 'Janine Khumalo', label: 'INC-2026-0398 · Major Incident / SLA Breach Escalation' },
  { callId: 'kyn-001740', agent: 'Lerato Mokoena', label: 'Auto-fail · Onboarding & Tooling / CMDB Integration' },
  { callId: 'kyn-001779', agent: 'Janine Khumalo', label: 'Auto-fail · Contract & Invoice Query Handoff' },
]
