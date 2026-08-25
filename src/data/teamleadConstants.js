/** This demo uses illustrative, synthetic data - Kyndryl has not shared operational data with QiQ. */
import { AGENT_METRICS, AGENT_METRIC_ORDER, FLAGGED_AGENT_SLUGS, TEAM_AGGREGATES } from './agentMetrics'

/** This agent's own top-ranked coaching card title, read live off their pack. */
function topCoachingTopic(m) {
  return m.coachingPack.cards[0]?.title || 'Micro Coaching suite'
}

function statusOf(m) {
  if (m.criticalFailures >= 30) return ['Action Needed', 'badge-red']
  if (m.criticalFailures >= 25) return ['Watch', 'badge-amber']
  return ['On Track', 'badge-green']
}

export const TEAM_HEALTH_STATS = [
  { label: 'Team QA Score', value: '87.4', valueClass: 'val-amber', sub: 'Overall QA average · all 2,358 contacts' },
  { label: 'CSAT', value: '2.0', valueClass: 'val-red', sub: 'Vs 4.1 on first contacts' },
  { label: 'Auto-fail contacts', value: '64', valueClass: 'val-amber', sub: 'Week 5 · peaked at 66 in week 3' },
  { label: 'Agents with auto-fails', value: '10/10', valueClass: 'val-amber', sub: 'Pattern is team-wide, not individual' },
]

export const MATRIX_ROWS = AGENT_METRIC_ORDER.map((slug) => {
  const m = AGENT_METRICS[slug]
  const [status, badgeClass] = statusOf(m)
  const delta = m.qaSeries[4] - m.qaSeries[0]
  return {
    slug,
    name: m.name,
    qaW5: m.qaSeries[4],
    qaW1: m.qaSeries[0],
    delta,
    deltaClass: delta > 0.15 ? 'delta-pos' : delta < -0.15 ? 'delta-neg' : 'delta-flat',
    qa: m.qaScore,
    csat: m.continuationCsat,
    behaviour: m.behaviourContinuation.empathy,
    pa: `${m.processAdherencePct.toFixed(0)}%`,
    rr: `${m.resolutionRatePct.toFixed(0)}%`,
    topic: topCoachingTopic(m),
    status,
    badgeClass,
    criticalFailures: m.criticalFailures,
    contradiction: m.criticalFailures >= 30,
  }
}).sort((a, b) => b.criticalFailures - a.criticalFailures || a.csat - b.csat)

export const ALERT_AGENTS = FLAGGED_AGENT_SLUGS.slice(0, 3).map((slug) => {
  const m = AGENT_METRICS[slug]
  const [status, badgeClass] = statusOf(m)
  const top = m.coachingPack.cards[0]
  const second = m.coachingPack.cards[1]
  return {
    slug,
    name: m.name,
    status,
    badgeClass,
    metrics: `${m.criticalFailures} auto-fail contact${m.criticalFailures === 1 ? '' : 's'} · QA ${m.qaScore.toFixed(1)}% · CSAT ${m.continuationCsat.toFixed(2)} · Empathy ${m.empathy.toFixed(2)}`,
    insight: `QA of ${m.qaScore.toFixed(1)}% is close to the team average of ${TEAM_AGGREGATES.qaScore}%, so the scorecard reads clean. ${m.criticalFailures} contact${m.criticalFailures === 1 ? '' : 's'} still auto-failed this period, most on follow-ups to tickets that were already open.`,
    action: `${top?.title || 'Micro Coaching'} is card 1 in the pack.${top?.personalNote ? ` Their numbers: ${top.personalNote}` : ''}${second ? ` ${second.title} follows at rank 2.` : ''} Track auto-fails weekly rather than QA.`,
  }
})

export const COACHING_QUEUE = AGENT_METRIC_ORDER.map((slug) => {
  const m = AGENT_METRICS[slug]
  const cleared = m.criticalFailureSeries[4] < m.criticalFailureSeries[0]
  const [, badgeClass] = statusOf(m)
  const status = m.criticalFailures === 0 ? 'On Track' : cleared ? 'Improving' : 'Watch'
  return {
    agent: m.name,
    topic: topCoachingTopic(m),
    source: `${m.criticalFailures} auto-fail${m.criticalFailures === 1 ? '' : 's'} · CSAT ${m.continuationCsat.toFixed(2)}`,
    deployed: 'Week 2',
    status,
    badgeClass: status === 'On Track' ? 'badge-green' : status === 'Improving' ? 'badge-green' : badgeClass,
    outcome:
      m.criticalFailures === 0
        ? 'No auto-fails this period'
        : cleared
          ? `Auto-fails ${m.criticalFailureSeries.join('·')} · week 5 below week 1`
          : `Auto-fails ${m.criticalFailureSeries.join('·')} · still above week 1`,
  }
}).sort((a, b) => (a.status === 'Watch' ? -1 : 1) - (b.status === 'Watch' ? -1 : 1))

const queueCounts = COACHING_QUEUE.reduce((acc, r) => {
  acc[r.status] = (acc[r.status] || 0) + 1
  return acc
}, {})

export const COACHING_QUEUE_SUMMARY = [
  { text: `${COACHING_QUEUE.length} agents in queue`, className: 'summary-chip' },
  { text: `${queueCounts.Watch || 0} watch`, className: 'summary-chip summary-chip-amber' },
  { text: `${queueCounts.Improving || 0} improving`, className: 'summary-chip summary-chip-green' },
  { text: `${queueCounts['On Track'] || 0} on track`, className: 'summary-chip summary-chip-green' },
]

export const FLAGGED_CALLS = [
  { callId: 'kyn-000142', agent: 'Bongani Dube', date: '2026-05-28', category: 'Ticket Status Chasing / Follow-Up', flagReason: 'Continuation · high QA · CSAT 2', flagClass: 'flag-badge-gap', qaScore: '88', qaClass: 'val-amber' },
  { callId: 'kyn-000167', agent: 'Bongani Dube', date: '2026-05-30', category: 'Ticket Status Chasing / Follow-Up', flagReason: 'Continuation · high QA · CSAT 1', flagClass: 'flag-badge-critical', qaScore: '89', qaClass: 'val-amber' },
  { callId: 'kyn-000203', agent: 'Lerato Mokoena', date: '2026-05-29', category: 'Onboarding & Tooling / CMDB Integration', flagReason: 'Continuation · high QA · CSAT 1', flagClass: 'flag-badge-critical', qaScore: '87', qaClass: 'val-amber' },
  { callId: 'kyn-000241', agent: 'Sipho de Villiers', date: '2026-05-27', category: 'Major Incident / SLA Breach Escalation', flagReason: 'Register mismatch · closed without route', flagClass: 'flag-badge-gap', qaScore: '90', qaClass: 'val-amber' },
]
