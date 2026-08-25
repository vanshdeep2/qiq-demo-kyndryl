/**
 * Cross-VOC page constants from story-spec.json. Kyndryl is one-sided (B2B) -
 * "client" for the demand side, "ticket" for the transaction, no supply-side
 * content anywhere. This demo uses illustrative, synthetic data - Kyndryl has
 * not shared operational data with QiQ. Storyline 4 (Contract & Invoice Query
 * Handoff) is coachable: false in story-spec.json - nothing below implies
 * Micro Coaching resolved or will resolve it. It stays an open process gap.
 */

/**
 * External review aggregate shown on Executive. Field names are generic
 * (platform / rating / label / reviewCount) so the page component does not
 * have to know which review site a given client is rated on. `ratingScale`
 * is the denominator - Gartner Peer Insights is out of 5, same as Trustpilot,
 * but state it rather than assume it.
 */
export const EXTERNAL_VOC = {
  platform: 'Gartner Peer Insights',
  rating: 4.8,
  ratingScale: 5,
  label: "Customers' Choice (Outsourced Digital Workplace Services)",
  reviewCount: 154,
  source: 'https://www.gartner.com/reviews/market/outsourced-digital-workplace-services/vendor/kyndryl/product/kyndryl-outsourced-digital-workplace-services',
}

export const INTERNAL_VOC_STRIP = [
  {
    id: 'status-chasing',
    title: 'Ticket Status Chasing / Follow-Up',
    theme: 'A ticket stalls after the first update, and the client calls or messages back only to reach a different agent who treats it as a new request',
    volumeNote: 'Ticket Status Chasing / Follow-Up is 18.5% of weekly contacts, the largest single driver',
    workaround: 'Client-side IT contacts opening a duplicate internal ticket with their own tracking number because they no longer trust the original one is being watched.',
    evidence: 'A stalled ticket produces a first contact scoring CSAT 4 and QA 93%, then follow-up contacts from the same client scoring CSAT 1-2 while QA still holds at 89-91%. The scorecard cannot see the second contact is the same unresolved ticket.',
    action: 'Micro Coaching card 1, start where they left off, deployed to the whole team from week 2. Continuation-cohort CSAT has moved every week since, 2.4 to 3.6. Auto-fail QA outcomes have not fallen as cleanly, still uneven at week 5 - a real early result, not a closed case.',
  },
  {
    id: 'onboarding-cmdb',
    title: 'Onboarding & Tooling / CMDB Integration',
    theme: 'New client environments waiting on CMDB implementation and missing tool integrations before onboarding can be marked complete',
    volumeNote: 'Onboarding & Tooling / CMDB Integration is 11.0% of contacts; 28% close with no resolution path',
    workaround: 'Client technical contacts building their own shadow spreadsheet of asset and configuration data because the CMDB integration is not yet live.',
    evidence: '1,034 onboarding/CMDB contacts weekly, with a 41% repeat contact rate on this cohort against 27.1% overall. Escalation rate on this driver is 14%, the second highest in the taxonomy. Internal contact volume on this theme leads external review mentions of the same gap by 7 days at 0.74 correlation.',
    action: 'A CMDB/tooling next-best-action - automated implementation-status updates at each stage - is queued for deployment (see Actions below). This is a process and product gap, not addressed by Micro Coaching.',
  },
  {
    id: 'major-incident',
    title: 'Major Incident / SLA Breach Escalation',
    theme: 'An SLA breach disclosure opens well, then the client follow-up on the same live incident is handled in too routine a register',
    volumeNote: 'Major Incident / SLA Breach Escalation is only 3.0% of contacts, disproportionate severity',
    workaround: 'Client account teams looping in their own Kyndryl account executive directly rather than waiting on a support-channel update during a live Sev-1.',
    evidence: 'inc-2026-0398 opens at CSAT 5 and QA 96%, then drops to CSAT 1-2 once the client follows up on the same live incident and the register does not match the severity. Escalation rate on this driver is 31%, the highest of any category.',
    action: 'Micro Coaching card 3, let the situation set the tone, targets this pattern directly and deployed team-wide from week 2 alongside card 1.',
  },
  {
    id: 'contract-invoice',
    title: 'Contract & Invoice Query Handoff',
    theme: 'A contract or invoice question crosses support, contract, and invoicing teams with no single owner, and the client is left chasing the handoff itself',
    volumeNote: 'Contract & Invoice Query Handoff is 9.5% of contacts; 44% are pure status chasing',
    workaround: 'Client finance contacts cc-ing their Kyndryl account manager on every invoice email as an informal escalation path, because the standard ticket queue has no visible owner.',
    evidence: 'A handoff crosses 2.4 teams on average and adds 4.6 days to resolution versus a single-team ticket. This is a process and ownership gap across support, contract, and invoicing teams, directly evidenced by the back_office_response_lag theme in the external review data.',
    action: 'This is a process gap, not a behavioural one, so it will not respond to Micro Coaching. A named cross-team ownership standard for contract/invoice handoffs is queued for review; it remains open until that ships.',
  },
  {
    id: 'intent',
    title: 'Clients Escalating Past the First Line',
    theme: 'Client technical contacts pushing past a first-line reply to reach someone who can act on infrastructure that keeps their own operations running',
    volumeNote: 'Escalation rate 11.0% blended vs 6.5% target',
    workaround: 'Client operations teams routing a second, informal escalation through their account executive when the support-channel ticket goes quiet.',
    evidence: 'Escalation rate is highest on Major Incident / SLA Breach (31%) and Onboarding & Tooling / CMDB Integration (14%), the two drivers where a client is most exposed to a stalled fix on infrastructure their own business depends on.',
    action: 'Tracked alongside the CMDB and major-incident fixes above. As route-forward closes become standard, escalations driven by dead-end first-line replies are expected to ease.',
  },
]

export const EXTERNAL_VOC_STRIP = [
  {
    id: 'brand',
    title: 'Gartner Peer Insights Brand Standing',
    summary: "Kyndryl holds a Customers' Choice rating of 4.8 on Outsourced Digital Workplace Services (154 reviews), but scores lower and thinner-reviewed on other product lines checked.",
    evidence: '4.8/5 on Outsourced Digital Workplace Services (154 reviews) sits alongside a near-empty public review profile on G2, and a 4.1/5 (31 reviews) score on Managed Network Services against HCLTech at 4.7/5 (97 reviews) in the same category.',
    action: 'No single fix - this is the reason the product-line-specific gaps (Managed Network Services, CMDB/tooling) get pulled into dedicated review rather than judged against the strongest-performing line.',
  },
  {
    id: 'back-office',
    title: 'Back-Office Response Lag',
    summary: 'Recurring theme across review sources: response time from the support, contract, and invoice teams leaves room for improvement.',
    evidence: '"response time from the support team, contract team and invoice team leaves room for improvement" and "tasks take sometimes days or weeks when things could be finalized in matter of hours or max days" (Gartner Peer Insights, Outsourced Digital Workplace Services).',
    action: 'Directly corroborates the Contract & Invoice Query Handoff process gap above - flagged for cross-team process ownership, not coaching.',
  },
  {
    id: 'onboarding-tooling',
    title: 'Onboarding & Tooling Gaps',
    summary: 'Delayed CMDB implementation and missing tool integrations, found within the Managed Network Services review set specifically.',
    evidence: '"delayed CMDB implementation" and "the services delivery platform lags... missing integrations with existing tools" (Gartner Peer Insights, Managed Network Services). Moderate confidence - found within one product line\'s review set, not cross-confirmed on others.',
    action: 'Corroborates the internal Onboarding & Tooling / CMDB Integration signal, which leads this external theme by 7 days at 0.74 correlation.',
  },
  {
    id: 'competitive',
    title: 'Managed Network Services Satisfaction Gap',
    summary: 'Kyndryl already scores behind a named peer on the same product line and the same review platform.',
    evidence: 'Kyndryl 4.1/5 (31 reviews) vs. HCLTech 4.7/5 (97 reviews) on Gartner Peer Insights Managed Network Services - a direct head-to-head comparison, strong confidence.',
    action: 'Not a QA or coaching issue - flagged for the same product-line owners addressing the CMDB/tooling gap, since it is the most likely driver of the satisfaction spread.',
  },
  {
    id: 'security',
    title: 'Data Security Assurance',
    summary: 'A single review mentions wanting stronger assurance that customer data security and integrity is maintained.',
    evidence: '"security and integrity of customer data should be maintained" (G2, single verified review). Weak confidence - not corroborated elsewhere in the review set examined.',
    action: 'Not actioned in this period given weak confidence and single-source mention; included here so it is visible rather than dropped.',
  },
]

/**
 * Issues that show up in both the internal contact data and the external
 * Gartner Peer Insights signal, shown together on Executive as one clickable
 * card. Detail figures trace to storylines / financial estimates in
 * story-spec.json and the Micro Coaching deployment field
 * (coaching.appliedFromWeek).
 */
export const COMBINED_VOC_ISSUES = {
  title: "Issues found in both signals, and what we're doing about them",
  items: [
    {
      id: 'onboarding-cmdb',
      title: 'Onboarding & Tooling / CMDB Integration',
      summary: 'Internal spike leads external mentions by 7 days at 0.74 correlation.',
      internal: '1,034 Onboarding & Tooling / CMDB Integration contacts this week, 28% closed with no resolution path, ownership behaviour scoring 2.2 on continuation. Root cause is delayed CMDB implementation and missing tool integrations.',
      external: 'External mentions of CMDB/tooling gaps rose from 19 to 46 in the same week, 7 days after the internal spike began, and are corroborated by a direct satisfaction-gap comparison against HCLTech on the same product line.',
      action: 'A CMDB/tooling next-best-action is queued for deployment (see Actions). This is a process and product gap - Micro Coaching addresses the continuation-contact tone on these tickets, not the CMDB delay itself.',
      status: 'Process fix queued · not addressed by coaching',
    },
    {
      id: 'continuation',
      title: 'Ticket status chasing follow-ups',
      summary: 'Lowest-scoring group internally; the same friction shows up externally as clients escalating past the first line.',
      internal: 'Continuation-cohort CSAT sat at 2.4 in week 1 against 4.1 on first contact, while QA held at 87-91% throughout, the gap per-contact scoring cannot see. 18.5% of weekly contacts are Ticket Status Chasing / Follow-Up, the largest driver in the taxonomy.',
      external: 'Clients describe response-time frustration when a follow-up on an already-open ticket stalls, read publicly as slow support rather than a specific process gap.',
      action: 'Micro Coaching card 1 (start where they left off) deployed team-wide from week 2. Continuation CSAT moving 2.4 → 3.6. Auto-fail QA outcomes remain uneven - 52 → 66 → 64 across the period - so this is a partial result, not a cleared one.',
      status: 'CSAT recovering · auto-fails still uneven · live team-wide since week 2',
    },
    {
      id: 'contract-invoice',
      title: 'Contract & Invoice Query Handoff',
      summary: 'A process gap, corroborated directly by the external back-office-response-lag theme - explicitly not addressed by coaching.',
      internal: '893 Contract & Invoice Query Handoff contacts weekly, 44% pure status chasing, crossing 2.4 teams on average and adding 4.6 days to resolution. No single team owns the handoff.',
      external: 'External reviews name the same gap directly: "response time from the support team, contract team and invoice team leaves room for improvement."',
      action: 'This is the storyline that keeps the rest of the demo honest: it will not respond to Micro Coaching. A named cross-team ownership standard is queued for review and stays open until it ships.',
      status: 'Open · process fix required · not a coaching item',
    },
  ],
}

export const SIGNAL_RECONCILIATION = [
  {
    title: 'Onboarding & Tooling / CMDB Integration',
    internal: 'Internal spike: 1,034 contacts this week, 28% closed with no resolution path, ownership behaviour 2.2.',
    external: 'External mentions of CMDB/tooling gaps rose from 19 to 46 in the same week.',
    meaning: 'Internal leads external by 7 days at correlation 0.74. The instruments agree; timing differs.',
  },
  {
    title: 'Major Incident / SLA Breach',
    internal: 'Internal volume is low at 3.0% of contacts.',
    external: 'External severity is disproportionate: a Sev-1 disclosure routes straight to the client account executive.',
    meaning: 'A QA sample sized for the average never reaches this tail. Low volume is not low risk.',
  },
  {
    title: 'Contract & invoice handoff',
    internal: 'Internal volume is meaningful at 9.5% of contacts, 44% pure status chasing.',
    external: 'External severity is corroborated directly: the same "back-office response lag" language appears in review text.',
    meaning: 'This is the one signal that agrees on both volume and severity - and the one that will not move with coaching.',
  },
]

export const RISK_REGISTER = [
  {
    risk: 'Continuation failure on high-severity tickets',
    evidence: 'First-contact CSAT 4.1 vs continuation 2.0; QA still 87.2% on continuation',
    confidence: '92%',
    owner: 'CCM + Team Leads',
  },
  {
    risk: 'Onboarding & CMDB contacts closed without a route forward',
    evidence: '28% of Onboarding & Tooling / CMDB contacts closed with no resolution path; external lag 7 days',
    confidence: '88%',
    owner: 'Onboarding / Tooling engineering',
  },
  {
    risk: 'Major incident tail invisible to QA sampling',
    evidence: '3.0% contact share vs 31% escalation rate, the highest of any category',
    confidence: '86%',
    owner: 'Incident engineering + Quality',
  },
  {
    risk: 'Contract & invoice handoff has no single owner',
    evidence: '9.5% of contacts, 44% pure status chasing, 2.4 teams crossed on average - not addressable by coaching',
    confidence: '90%',
    owner: 'Support / Contract / Invoicing process owners',
  },
]

export const ACTION_AGENDA = [
  {
    rank: 1,
    title: 'CMDB/tooling next-best-action',
    detail: 'Automated implementation-status updates so clients stop needing to call in for a manual update.',
    estimateLabel: 'Estimate',
  },
  {
    rank: 2,
    title: 'Keep the four Micro Coaching cards mandatory team-wide',
    detail: 'Start where they left off, name who has it and when, match the register, count the chasing.',
    estimateLabel: null,
  },
  {
    rank: 3,
    title: 'Route-forward standard on Onboarding & CMDB and Major Incident',
    detail: 'No close without a named owner and a timeframe when a dependency blocks full resolution.',
    estimateLabel: null,
  },
  {
    rank: 4,
    title: 'Named cross-team ownership for Contract & Invoice Query Handoff',
    detail: 'Process fix across support, contract, and invoicing teams - explicitly not a coaching fix.',
    estimateLabel: null,
  },
]

export const STORYLINE_3 = {
  correlation: 0.74,
  lagDays: 7,
  internalContacts: 1034,
}

/**
 * Storyline 4 is coachable: false in story-spec.json. No coaching-outcome
 * language appears here or anywhere else this storyline is referenced.
 */
export const STORYLINE_4 = {
  contactsWeekly: 893,
  avoidableContactsWeekly: 310,
  avgDaysAddedToResolution: 4.6,
  handoffsAcrossTeamsAvg: 2.4,
  coachable: false,
}

/**
 * Detail behind each Executive "Actions" card, keyed by id and shown in the
 * centred drill-down modal when a card is clicked. Figures trace to the same
 * driver rows and coaching pack data used elsewhere on the page.
 */
export const ACTION_DETAILS = {
  'decide-scale-coaching': {
    tone: 'red',
    type: 'System',
    chip: 'CSAT 2.4 → 3.6',
    category: 'Decide now',
    title: 'Keep Micro Coaching mandatory for every agent on continuation contacts',
    summary:
      'All ten agents carried auto-fails on the same pattern, so the start-where-they-left-off coaching pack was rolled out team-wide from week 2, not held to the two or three agents who surfaced it first. The decision now is to keep it a standing requirement, not a one-off pilot.',
    rationale:
      'Bongani Dube carried the most auto-fails on the team, with Lerato Mokoena and Sipho de Villiers close behind. All three scored close to the team QA average while CSAT sat well below it on the same contacts. The underlying pattern, treating a follow-up contact as a fresh ticket, showed up across the whole team, so the fix was built team-wide from the start.',
    owner: 'CCM + Team Leads',
    timeline: 'Live team-wide since week 2, this decision is whether it stays a permanent standard',
    impact: 'Continuation-cohort CSAT already 2.4 → 3.6 across the team. Keeping it mandatory is what holds that line as ticket volume grows; auto-fail volume has not followed the same curve yet, which is the reason to keep it running rather than declare it done.',
    kpis: ['CSAT', 'Auto-fail contacts', 'Continuation contacts'],
  },
  'decide-cmdb-route': {
    tone: 'amber',
    type: 'Process',
    chip: '28% closed with no route',
    category: 'Decide now',
    title: 'No Onboarding & CMDB close without a named owner and timeframe',
    summary:
      'Set a process standard: an Onboarding & Tooling / CMDB Integration contact cannot be marked resolved unless the closing note names who owns the next step and by when.',
    rationale:
      '28% of Onboarding & Tooling / CMDB contacts close with no resolution path for the client. Internal mentions of CMDB/tooling gaps lead the same complaint in external reviews by 7 days at 0.74 correlation. A named-owner standard closes that loop before it reaches a public review.',
    owner: 'Onboarding / Tooling engineering',
    timeline: 'Process standard proposed for new closures from week 6, alongside the CMDB/tooling next-best-action',
    impact: 'Expected to reduce the external-review lag on CMDB/tooling complaints and cut the 41% repeat contact rate on this cohort.',
    kpis: ['Escalation rate', 'Repeat contact rate', 'External VOC'],
  },
  'ready-cmdb-nba': {
    tone: 'amber',
    chip: '1,034 contacts/wk',
    category: 'Ready to execute',
    title: 'CMDB/tooling next-best-action for status-chasing contacts',
    summary:
      'Deploy automated implementation-status updates at each stage of a CMDB integration so clients stop needing to call in for a manual update.',
    rationale:
      '1,034 Onboarding & Tooling / CMDB Integration contacts weekly, a meaningful share of which are pure status chases adding no new information. This adds delay to project timelines and drives the 41% repeat contact rate on this cohort.',
    owner: 'Onboarding / Tooling engineering',
    timeline: 'Ready to scope, awaiting go-ahead',
    impact: 'Modelled to reduce avoidable status-chasing volume on this driver and shorten the 7-day lag before the same gap surfaces externally.',
    kpis: ['AHT', 'Repeat contact rate', 'External VOC'],
  },
  'ready-coaching-scale': {
    tone: 'amber',
    chip: 'High',
    category: 'Ready to execute',
    title: 'Extend the route-forward standard to Major Incident closures',
    summary:
      'The same root cause, a follow-up treated as a fresh contact rather than the same live incident, shows up on Major Incident / SLA Breach closures. The register-matching card already in the pack is the next application, paired with a route-forward requirement.',
    rationale:
      'Continuation-contact coaching is live team-wide and moving CSAT. Major Incident / SLA Breach Escalation carries its own version of the same gap at the highest escalation rate in the taxonomy (31%), and it is the highest-severity concentration of the pattern after Ticket Status Chasing.',
    owner: 'CCM + Team Leads',
    timeline: 'Card content follows the same production format already validated on the current pack; ready to build once prioritised',
    impact: 'High expected impact on Major Incident CSAT and the 31% escalation rate on that driver, the measure the current pack does not fully touch.',
    kpis: ['CSAT', 'Escalation rate'],
  },
  'ready-contract-invoice-owner': {
    tone: 'amber',
    chip: '310 avoidable/wk',
    category: 'Ready to execute',
    title: 'Named cross-team ownership for Contract & Invoice Query Handoff',
    summary:
      'Contract & Invoice Query Handoff crosses support, contract, and invoicing teams with no single owner. Assign a named process owner and a standard handoff SLA between the three teams. This is explicitly not a coaching fix - storyline 4 is coachable: false.',
    rationale:
      '44% of these contacts are pure status chasing, a handoff crosses 2.4 teams on average, and resolution takes 4.6 additional days beyond a single-team ticket. The external review data names the same gap directly.',
    owner: 'Support / Contract / Invoicing process owners',
    timeline: 'Can start immediately, no engineering dependency, but requires cross-team process agreement',
    impact: 'Directly addresses the 310 weekly avoidable status-chasing contacts on this driver; will not move CSAT on this category through coaching, only through the process fix.',
    kpis: ['FCR', 'Repeat contact rate', 'External VOC'],
  },
  'watch-auto-fails': {
    tone: 'amber',
    category: 'Watch next week',
    title: 'Auto-fail contacts and continuation CSAT trend',
    summary: 'Confirm auto-fail volume starts to turn down and continuation CSAT keeps climbing now that coaching is standard across the whole team.',
    rationale:
      'CSAT has been recovering since week 2; auto-fail volume has not, 52 → 66 → 64 across the period. The real test is whether auto-fails start following CSAT down as coaching moves from a new habit to routine practice.',
    owner: 'CCM + Team Leads',
    timeline: 'Reviewed weekly',
    impact: 'A turning auto-fail trend here is the leading confirmation that the coaching fix is holding at team-wide scale, not just moving the metric that responds fastest.',
    kpis: ['Auto-fail contacts', 'CSAT'],
  },
  'watch-csat': {
    tone: 'amber',
    category: 'Watch next week',
    title: 'Blended CSAT vs target',
    summary: 'Population-wide CSAT is still below target while the continuation cohort recovers. Expect this gap to close gradually as the fix compounds week over week.',
    rationale:
      'Blended CSAT averages across all 9,400 weekly contacts. Continuation contacts, the ones coaching directly targets, are only 31% of that volume. It is expected to lag the continuation-contact recovery by design - this is the population-level metric that should move as more weeks of coaching accumulate.',
    owner: 'CCM + Team Leads',
    timeline: 'Reviewed weekly, expected to start closing gradually',
    impact: 'Primary population-level success measure for the coaching effort once enough weeks have accumulated.',
    kpis: ['CSAT'],
  },
  'watch-contract-invoice': {
    tone: 'red',
    category: 'Watch next week',
    title: 'Contract & Invoice Query Handoff volume, unresolved by coaching',
    summary: '893 contract/invoice contacts weekly, 310 of them avoidable status chases, stay open until the cross-team ownership fix ships. This is the storyline that keeps the rest of the demo honest.',
    rationale:
      'No coaching intervention touches this driver. Volume is expected to hold flat or rise until a named process owner and handoff SLA are in place.',
    owner: 'Support / Contract / Invoicing process owners',
    timeline: 'Loss compounds weekly until the cross-team ownership fix above is agreed and shipped',
    impact: 'Directly avoidable only by the process fix, not by any coaching or QA intervention.',
    kpis: ['FCR', 'Repeat contact rate'],
  },
}

/**
 * Column order for the Executive "Actions" board. Each column renders every
 * ACTION_DETAILS entry whose `category` matches, in declaration order, so a
 * client with no supply-side action simply has no supply-side card - nothing
 * in the page component names a specific action id.
 */
export const ACTION_BOARD_COLUMNS = ['Decide now', 'Ready to execute', 'Watch next week']
