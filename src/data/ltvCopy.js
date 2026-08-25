/**
 * Kyndryl is a one-sided (B2B) client - no supply-side rows exist anywhere in
 * this file. Client LTV is grounded in story-spec.json's financial model:
 * $3.28M average annual revenue per client relationship (FY2026 revenue
 * $15.09B / ~4,600 disclosed customers), used as the LTV-equivalent input.
 * Totals are computed at render/build time from story-spec.financial, never
 * hardcoded as a second number.
 */

export const LTV_DEFAULT_ASSUMPTION_TEXT =
  'Client LTV of $3.28M is a modelled per-relationship value for the Kyndryl book (FY2026 revenue $15.09B divided by roughly 4,600 disclosed customers). Continuation-failure risk uses 30 distinct client relationships per week newly showing the status-chasing pattern - about 0.65% of the ~4,600-account base - with a 9% churn uplift on that cohort. Micro Coaching value protected is modelled on the same 30-relationship cohort at a 50% protection rate over the four coaching weeks (weeks 2-5). The 50% is a deliberately conservative modelling assumption, not a Kyndryl-sourced figure - it reflects that the auto-fail trend in this period has not yet improved cleanly, so only half the at-risk cohort is credited as protected. All totals are computed live from these assumptions. Change a number and Recalculate to see them move. All figures are estimates, and this demo is illustrative - Kyndryl has not shared operational data with QiQ.'

export const RISK_LINES = [
  {
    key: 'periodDemandRiskPrimary',
    title: 'Continuation failure',
    label: '30 client relationships/week · 9% churn uplift · client LTV $3.28M · 5 weeks',
    description:
      'Client relationships hit by a continuation failure this week carry elevated churn risk. Per-contact QA still passes while CSAT collapses after the first contact. Figure shown for the current 5-week reporting window.',
    legendLabel: 'Continuation failure',
    dotColor: '#c0392b',
  },
  {
    key: 'periodDemandRiskSecondary',
    title: 'Major incident tail',
    label: 'Low volume (3.0% of contacts) · disproportionate severity · 5 weeks',
    description:
      'Major Incident / SLA Breach Escalation is a small share of contacts, but a mishandled disclosure routes straight to the client account executive. A QA sample sized for the average never reaches this tail. Figure shown for the current 5-week reporting window.',
    legendLabel: 'Major incident tail',
    dotColor: '#d9534f',
  },
  {
    key: 'periodDemandRiskTertiary',
    title: 'Onboarding & CMDB integration',
    label: '1,034 contacts weekly · 28% closed with no route · 5 weeks',
    description:
      'Onboarding & Tooling / CMDB Integration contacts closed without a resolution path drive client distrust and, per the external-review correlation, later public mentions of the same gap. Figure shown for the current 5-week reporting window.',
    legendLabel: 'Onboarding & CMDB integration',
    dotColor: '#e8806f',
  },
]

/** Combined at-risk lines for the single risk card / drawer. Client-side only - Kyndryl is one-sided. */
export const AT_RISK_LINES = RISK_LINES.map((line) => ({ ...line, valueClass: line.valueClass ?? 'val-red' }))

/** Colour key for the at-risk donut. Single side - Kyndryl has no supply-side equivalent. */
export const AT_RISK_SIDE_LEGEND = [{ label: 'Client LTV', color: '#c0392b' }]

/**
 * Micro Coaching USD slices that sum to periodProtected (same relative weights
 * as the at-risk donut). Estimate of value protected by the continuation-
 * cohort CSAT recovery so far (2.4 → 3.6 since week 2); this is a partial,
 * early result, not a cleared risk - the auto-fail count has not followed the
 * same clean line (see executiveConstants.CRITICAL_FAILURES).
 */
export const COACHING_VALUE_LINES = [
  {
    key: 'periodDemandProtectedPrimary',
    title: 'Continuation failure',
    label: 'Share of 5-week value protected from continuation-failure churn',
    description:
      'Largest share of Micro Coaching value protected in the current 5-week window. Mirrors the continuation-failure weight used on the at-risk donut. Estimate, partial result - auto-fail volume has not fallen to zero.',
    legendLabel: 'Continuation failure',
    dotColor: '#1a7a4a',
    format: 'usd',
  },
  {
    key: 'periodDemandProtectedSecondary',
    title: 'Major incident tail',
    label: '12% of base protected value (same weight as at-risk) · 5 weeks',
    description:
      'Value protected on major-incident-related continuation risk after coaching in the current 5-week window. Estimate, presentation split of the period total.',
    legendLabel: 'Major incident tail',
    dotColor: '#228b5a',
    format: 'usd',
  },
  {
    key: 'periodDemandProtectedTertiary',
    title: 'Onboarding & CMDB integration',
    label: '10% of base protected value (same weight as at-risk) · 5 weeks',
    description:
      'Value protected on onboarding/CMDB-related continuation risk after coaching in the current 5-week window. Estimate, presentation split of the period total. Onboarding & Tooling delays themselves remain a process/product gap - coaching addresses the continuation-contact tone, not the CMDB delay itself.',
    legendLabel: 'Onboarding & CMDB integration',
    dotColor: '#4ade80',
    format: 'usd',
  },
]

/**
 * Section / panel headings and the assumption inputs. These live here rather
 * than in component code because they are client vocabulary and client
 * numbers - the LTV components read them, they never hardcode them.
 */
export const LTV_SECTION_TITLE = 'Client LTV Impact Analysis · 5-Week Period'
export const AT_RISK_TITLE = 'Client LTV at risk'
export const AT_RISK_RISK_SUBTITLE =
  'Modelled exposure in the current 5-week window from continuation failure on client relationships. Kyndryl is a one-sided (B2B) book - there is no supply-side population, so no supply-side exposure is modelled or shown. Estimate.'

/**
 * Assumption inputs behind every figure on the LTV cards. Editable at runtime
 * through "View / edit assumptions" on Executive.
 *
 * demandSideLtv / cohortHitWeekly / churnUpliftPct come from
 * story-spec.json's `financial` block (3280000 / 30 / 9).
 *
 * cohortHitWeekly is 30 distinct accounts per week, ~0.65% of Kyndryl's
 * ~4,600-account base. It was 560 until the stage-6 audit: 560 was Rover's
 * consumer-marketplace ratio, which on a finite enterprise book produced an
 * annualised risk larger than Kyndryl's entire revenue. See story-spec.json's
 * `_note` for the correction.
 *
 * coachingCohortWeekly is set to the same 30-relationship cohort the risk
 * model uses - deliberately not a wider invented population.
 * coachingProtectionPct is 50%, lowered from the template's 70% default by
 * explicit user decision: Kyndryl's auto-fail trend has not improved cleanly
 * (52 -> 66 peak -> 64), so crediting 70% protection would overstate the
 * result. It is a modelling assumption, NOT a Kyndryl-sourced figure, and the
 * in-app assumption text says so.
 *
 * NOTE: no supplySideLtv / supplyAbandoningWeekly keys - this is a one-sided
 * client and the model omits the supply term entirely.
 */
export const LTV_ASSUMPTION_DEFAULTS = {
  demandSideLtv: 3280000,
  cohortHitWeekly: 30,
  churnUpliftPct: 9,
  coachingCohortWeekly: 30,
  coachingProtectionPct: 50,
}

/** Field list for the assumptions modal. Demand-side only. */
export const LTV_ASSUMPTION_FIELDS = [
  { id: 'demandSideLtv', label: 'Client LTV ($)', step: 10000 },
  { id: 'cohortHitWeekly', label: 'Client relationships hit by continuation failure / week', step: 1 },
  { id: 'churnUpliftPct', label: 'Churn uplift on cohort (%)', step: 0.5 },
  { id: 'coachingCohortWeekly', label: 'Client relationships reached by coaching / week', step: 1 },
  { id: 'coachingProtectionPct', label: 'Micro Coaching protection rate (%)', step: 1 },
]
