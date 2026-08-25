/**
 * Content-writer output for Kyndryl (qiq-content-writer stage 4).
 * Numeric fields (volume, aht/fcr/csat/qa series, behaviour pillars, critical
 * failures) are copied directly from clients/kyndryl/contacts/agent_metrics.json,
 * the qiq-dataset-builder output - not authored here. qaSeries and firstQa are
 * the two fields agent_metrics.json does not carry per-agent; qaSeries is
 * derived deterministically from each agent's own ahtSeries (not randomised),
 * and firstQa is each agent's continuationQa plus the team-wide first/continuation
 * QA gap from story-spec.json (91.5 - 87.2 = 4.3 pts). See open items in the
 * stage-4 handover note for why these two are inferred rather than sourced.
 *
 * coachingPack cards follow the Micro Coaching card contract: title,
 * personalNote (this agent's own numbers), positiveOpening (omitted where not
 * supported or on short cards), coachingFocus, practicalGuidance ("sounds
 * like: ..."), miniChallenge, encouragingClose (omitted on short cards).
 * say_unspoken is dropped from the topic rotation (one-sided client, per
 * story-spec.coaching.topics) - every pack below draws from the remaining
 * four topics only. No agent-facing string references any internal
 * ticket reference, call recording, quality metric, or system name.
 */

export const WK_LABELS = ["W1", "W2", "W3", "W4", "W5"]
export const COACHING_WEEK_INDEX = 1

export const AGENT_METRICS = {
  "bongani-dube": {
    "name": "Bongani Dube",
    "slug": "bongani-dube",
    "role": "Service Desk Analyst",
    "team": "Thandeka Nkosi",
    "volume": 237,
    "firstContacts": 165,
    "continuationContacts": 72,
    "ahtSeconds": 393,
    "ahtSeries": [
      428,
      385,
      378,
      367,
      416
    ],
    "fcrPct": 86.5,
    "fcrSeries": [
      76.1,
      87.0,
      95.2,
      82.5,
      94.7
    ],
    "csat": 3.48,
    "csatSeries": [
      3.67,
      3.35,
      3.31,
      3.51,
      3.58
    ],
    "firstCsat": 4.12,
    "continuationCsat": 2.01,
    "qaScore": 87.9,
    "qaSeries": [
      88.2,
      87.8,
      87.8,
      87.7,
      88.1
    ],
    "processAdherencePct": 97.5,
    "resolutionRatePct": 86.5,
    "firstQa": 91.8,
    "continuationQa": 87.5,
    "criticalFailures": 35,
    "criticalFailureSeries": [
      9,
      8,
      7,
      6,
      5
    ],
    "empathy": 3.52,
    "behaviourFirst": {
      "clarity": 4.26,
      "ownership": 4.05,
      "listening": 4.08,
      "professionalism": 4.4,
      "empathy": 4.22,
      "managing_frustration": 4.07
    },
    "behaviourContinuation": {
      "clarity": 3.7,
      "ownership": 2.23,
      "listening": 2.93,
      "professionalism": 4.16,
      "empathy": 1.93,
      "managing_frustration": 2.41
    },
    "coachingPack": {
      "packId": "pack-20260525-7794",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 237 contacts, starting with 65 follow-up contacts opened like a new ticket mostly on Ticket Status Chasing / Follow-Up and Change Request / Standard Service Request.",
      "packReason": "Built from your own contacts this period, 98 across these four patterns, where a small change in how you opened or closed would have made the ticket easier for the client.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 225,
      "packWordCount": 585,
      "cards": [
        {
          "cardId": "CARD-BONGANI-DUBE-1",
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off · Ticket Status Chasing / Follow-Up",
          "personalNote": "65 of your 72 follow-up contacts this period (90.3%) mostly on Ticket Status Chasing / Follow-Up and Change Request / Standard Service Request.",
          "positiveOpening": "First-contact tickets are going well for you — clients come away from those with a clear next step.",
          "coachingFocus": "When a client is following up on a ticket that's already open, say what you can see has happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \"I can see this ticket has been open since Tuesday and you're following up on where the CMDB fix landed — let me pick it up from there.\" It tells the client the history came with them, so they are not re-explaining the issue.",
          "miniChallenge": "On your next three follow-up contacts, open with what you can already see before your first question.",
          "encouragingClose": "One line at the start does most of the work here. The rest of the ticket gets easier.",
          "wordCount": 158,
          "estimatedDurationSeconds": 61,
          "_severity": "high",
          "_metric": "65 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-BONGANI-DUBE-2",
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeat_contact_rate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "situation_led",
          "title": "Name Who Has It and When · Change Request / Standard Service Request",
          "personalNote": "17 of your contacts that closed without a next step this period mostly on Change Request / Standard Service Request and Access & Identity Management.",
          "positiveOpening": "Sometimes a ticket genuinely can't move until another team acts — that's fine, the contact still has to end somewhere.",
          "coachingFocus": "When you can't resolve something yourself, name who has it and when the client will hear back before you close.",
          "practicalGuidance": "Sounds like: \"This sits with the CMDB integration team. They work tickets in order of submission and you'll get an update by Thursday. If nothing lands by then, come back to me directly.\" No name and no date is the main reason a client follows up again.",
          "miniChallenge": "On your next three contacts you can't close yourself, name the team and a date before you end the ticket.",
          "encouragingClose": "You can't always give the resolution. You can always give them something to hold onto.",
          "wordCount": 160,
          "estimatedDurationSeconds": 62,
          "_severity": "high",
          "_metric": "17 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-BONGANI-DUBE-3",
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Situation Set the Tone · Onboarding & Tooling / CMDB Integration",
          "personalNote": "5 of your contacts on serious incidents this period mostly on Onboarding & Tooling / CMDB Integration and Major Incident / SLA Breach Escalation.",
          "positiveOpening": "Professionalism on your first contacts holds up well even under pressure — this is about tone matching, not accuracy.",
          "coachingFocus": "When the situation is serious — an SLA breach, a major incident — keep that in your tone even if the question sounds routine.",
          "practicalGuidance": "Sounds like: \"I know this started with a Sev-1 disclosure, so let me be clear about exactly where it stands.\" Calm wording from the client does not mean the situation is calm.",
          "miniChallenge": "On your next two contacts tied to a major incident or SLA breach, name the situation once before you give the status.",
          "encouragingClose": "Matching the situation, not just the sentence, is what makes a client feel taken seriously.",
          "wordCount": 149,
          "estimatedDurationSeconds": 57,
          "_severity": "high",
          "_metric": "5 contacts flagged for let the situation set the tone"
        },
        {
          "cardId": "CARD-BONGANI-DUBE-4",
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing · Ticket Status Chasing / Follow-Up",
          "personalNote": "11 of your contacts this period were from a client who had already been in touch about the same ticket, mostly on Ticket Status Chasing / Follow-Up and Security & Compliance Inquiry.",
          "positiveOpening": null,
          "coachingFocus": "When a client says they've already called or messaged about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \"You're right, this is your third time reaching out on this one — thanks for staying on it.\" Naming the repeat costs one sentence and changes how the rest of the ticket lands.",
          "miniChallenge": "On your next two contacts where the client mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "wordCount": 118,
          "estimatedDurationSeconds": 45,
          "_severity": "medium",
          "_metric": "11 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "janine-khumalo": {
    "name": "Janine Khumalo",
    "slug": "janine-khumalo",
    "role": "Service Desk Analyst",
    "team": "Thandeka Nkosi",
    "volume": 240,
    "firstContacts": 164,
    "continuationContacts": 76,
    "ahtSeconds": 406,
    "ahtSeries": [
      464,
      379,
      378,
      410,
      385
    ],
    "fcrPct": 87.1,
    "fcrSeries": [
      85.2,
      91.1,
      89.4,
      88.5,
      81.0
    ],
    "csat": 3.42,
    "csatSeries": [
      3.69,
      3.24,
      3.34,
      3.46,
      3.33
    ],
    "firstCsat": 4.09,
    "continuationCsat": 1.99,
    "qaScore": 87.5,
    "qaSeries": [
      88.0,
      87.3,
      87.3,
      87.5,
      87.3
    ],
    "processAdherencePct": 95.0,
    "resolutionRatePct": 87.1,
    "firstQa": 91.3,
    "continuationQa": 87.0,
    "criticalFailures": 31,
    "criticalFailureSeries": [
      3,
      7,
      7,
      5,
      9
    ],
    "empathy": 3.55,
    "behaviourFirst": {
      "clarity": 4.23,
      "ownership": 4.15,
      "listening": 4.12,
      "professionalism": 4.4,
      "empathy": 4.23,
      "managing_frustration": 3.99
    },
    "behaviourContinuation": {
      "clarity": 3.58,
      "ownership": 2.21,
      "listening": 2.99,
      "professionalism": 4.16,
      "empathy": 2.08,
      "managing_frustration": 2.46
    },
    "coachingPack": {
      "packId": "pack-20260525-8577",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 240 contacts, starting with 66 follow-up contacts opened like a new ticket mostly on Ticket Status Chasing / Follow-Up and Major Incident / SLA Breach Escalation.",
      "packReason": "Built from your own contacts this period, 112 across these four patterns, where a small change in how you opened or closed would have made the ticket easier for the client.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 227,
      "packWordCount": 589,
      "cards": [
        {
          "cardId": "CARD-JANINE-KHUMALO-1",
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off · Ticket Status Chasing / Follow-Up",
          "personalNote": "66 of your 76 follow-up contacts this period (86.8%) mostly on Ticket Status Chasing / Follow-Up and Major Incident / SLA Breach Escalation.",
          "positiveOpening": "First-contact tickets are going well for you — clients come away from those with a clear next step.",
          "coachingFocus": "When a client is following up on a ticket that's already open, say what you can see has happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \"I can see this ticket has been open since Tuesday and you're following up on where the CMDB fix landed — let me pick it up from there.\" It tells the client the history came with them, so they are not re-explaining the issue.",
          "miniChallenge": "On your next three follow-up contacts, open with what you can already see before your first question.",
          "encouragingClose": "One line at the start does most of the work here. The rest of the ticket gets easier.",
          "wordCount": 158,
          "estimatedDurationSeconds": 61,
          "_severity": "high",
          "_metric": "66 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-JANINE-KHUMALO-2",
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeat_contact_rate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "situation_led",
          "title": "Name Who Has It and When · Major Incident / SLA Breach Escalation",
          "personalNote": "20 of your contacts that closed without a next step this period mostly on Major Incident / SLA Breach Escalation and Ticket Status Chasing / Follow-Up.",
          "positiveOpening": "Sometimes a ticket genuinely can't move until another team acts — that's fine, the contact still has to end somewhere.",
          "coachingFocus": "When you can't resolve something yourself, name who has it and when the client will hear back before you close.",
          "practicalGuidance": "Sounds like: \"This sits with the CMDB integration team. They work tickets in order of submission and you'll get an update by Thursday. If nothing lands by then, come back to me directly.\" No name and no date is the main reason a client follows up again.",
          "miniChallenge": "On your next three contacts you can't close yourself, name the team and a date before you end the ticket.",
          "encouragingClose": "You can't always give the resolution. You can always give them something to hold onto.",
          "wordCount": 161,
          "estimatedDurationSeconds": 62,
          "_severity": "high",
          "_metric": "20 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-JANINE-KHUMALO-3",
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Situation Set the Tone · Major Incident / SLA Breach Escalation",
          "personalNote": "15 of your contacts on serious incidents this period mostly on Major Incident / SLA Breach Escalation and Onboarding & Tooling / CMDB Integration.",
          "positiveOpening": "Professionalism on your first contacts holds up well even under pressure — this is about tone matching, not accuracy.",
          "coachingFocus": "When the situation is serious — an SLA breach, a major incident — keep that in your tone even if the question sounds routine.",
          "practicalGuidance": "Sounds like: \"I know this started with a Sev-1 disclosure, so let me be clear about exactly where it stands.\" Calm wording from the client does not mean the situation is calm.",
          "miniChallenge": "On your next two contacts tied to a major incident or SLA breach, name the situation once before you give the status.",
          "encouragingClose": "Matching the situation, not just the sentence, is what makes a client feel taken seriously.",
          "wordCount": 149,
          "estimatedDurationSeconds": 57,
          "_severity": "high",
          "_metric": "15 contacts flagged for let the situation set the tone"
        },
        {
          "cardId": "CARD-JANINE-KHUMALO-4",
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing · Major Incident / SLA Breach Escalation",
          "personalNote": "11 of your contacts this period were from a client who had already been in touch about the same ticket, mostly on Major Incident / SLA Breach Escalation and Ticket Status Chasing / Follow-Up.",
          "positiveOpening": null,
          "coachingFocus": "When a client says they've already called or messaged about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \"You're right, this is your third time reaching out on this one — thanks for staying on it.\" Naming the repeat costs one sentence and changes how the rest of the ticket lands.",
          "miniChallenge": "On your next two contacts where the client mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "wordCount": 121,
          "estimatedDurationSeconds": 47,
          "_severity": "medium",
          "_metric": "11 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "janine-pretorius": {
    "name": "Janine Pretorius",
    "slug": "janine-pretorius",
    "role": "Service Desk Analyst",
    "team": "Thandeka Nkosi",
    "volume": 220,
    "firstContacts": 157,
    "continuationContacts": 63,
    "ahtSeconds": 405,
    "ahtSeries": [
      392,
      408,
      416,
      392,
      413
    ],
    "fcrPct": 85.5,
    "fcrSeries": [
      78.9,
      87.3,
      84.6,
      88.1,
      87.0
    ],
    "csat": 3.51,
    "csatSeries": [
      3.71,
      3.58,
      3.59,
      3.29,
      3.39
    ],
    "firstCsat": 4.13,
    "continuationCsat": 1.97,
    "qaScore": 87.5,
    "qaSeries": [
      87.4,
      87.5,
      87.6,
      87.4,
      87.6
    ],
    "processAdherencePct": 92.7,
    "resolutionRatePct": 85.5,
    "firstQa": 90.2,
    "continuationQa": 85.9,
    "criticalFailures": 25,
    "criticalFailureSeries": [
      3,
      5,
      3,
      9,
      5
    ],
    "empathy": 3.58,
    "behaviourFirst": {
      "clarity": 4.28,
      "ownership": 4.08,
      "listening": 4.15,
      "professionalism": 4.32,
      "empathy": 4.22,
      "managing_frustration": 3.91
    },
    "behaviourContinuation": {
      "clarity": 3.57,
      "ownership": 2.17,
      "listening": 2.91,
      "professionalism": 4.3,
      "empathy": 1.96,
      "managing_frustration": 2.41
    },
    "coachingPack": {
      "packId": "pack-20260525-2402",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 220 contacts, starting with 59 follow-up contacts opened like a new ticket mostly on Change Request / Standard Service Request and Ticket Status Chasing / Follow-Up.",
      "packReason": "Built from your own contacts this period, 98 across these four patterns, where a small change in how you opened or closed would have made the ticket easier for the client.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 225,
      "packWordCount": 586,
      "cards": [
        {
          "cardId": "CARD-JANINE-PRETORIUS-1",
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off · Change Request / Standard Service Request",
          "personalNote": "59 of your 63 follow-up contacts this period (93.7%) mostly on Change Request / Standard Service Request and Ticket Status Chasing / Follow-Up.",
          "positiveOpening": "First-contact tickets are going well for you — clients come away from those with a clear next step.",
          "coachingFocus": "When a client is following up on a ticket that's already open, say what you can see has happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \"I can see this ticket has been open since Tuesday and you're following up on where the CMDB fix landed — let me pick it up from there.\" It tells the client the history came with them, so they are not re-explaining the issue.",
          "miniChallenge": "On your next three follow-up contacts, open with what you can already see before your first question.",
          "encouragingClose": "One line at the start does most of the work here. The rest of the ticket gets easier.",
          "wordCount": 159,
          "estimatedDurationSeconds": 61,
          "_severity": "high",
          "_metric": "59 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-JANINE-PRETORIUS-2",
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeat_contact_rate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "situation_led",
          "title": "Name Who Has It and When · Onboarding & Tooling / CMDB Integration",
          "personalNote": "15 of your contacts that closed without a next step this period mostly on Onboarding & Tooling / CMDB Integration and Other / Miscellaneous.",
          "positiveOpening": "Sometimes a ticket genuinely can't move until another team acts — that's fine, the contact still has to end somewhere.",
          "coachingFocus": "When you can't resolve something yourself, name who has it and when the client will hear back before you close.",
          "practicalGuidance": "Sounds like: \"This sits with the CMDB integration team. They work tickets in order of submission and you'll get an update by Thursday. If nothing lands by then, come back to me directly.\" No name and no date is the main reason a client follows up again.",
          "miniChallenge": "On your next three contacts you can't close yourself, name the team and a date before you end the ticket.",
          "encouragingClose": "You can't always give the resolution. You can always give them something to hold onto.",
          "wordCount": 159,
          "estimatedDurationSeconds": 61,
          "_severity": "high",
          "_metric": "15 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-JANINE-PRETORIUS-3",
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Situation Set the Tone · Onboarding & Tooling / CMDB Integration",
          "personalNote": "10 of your contacts on serious incidents this period mostly on Onboarding & Tooling / CMDB Integration and Major Incident / SLA Breach Escalation.",
          "positiveOpening": "Professionalism on your first contacts holds up well even under pressure — this is about tone matching, not accuracy.",
          "coachingFocus": "When the situation is serious — an SLA breach, a major incident — keep that in your tone even if the question sounds routine.",
          "practicalGuidance": "Sounds like: \"I know this started with a Sev-1 disclosure, so let me be clear about exactly where it stands.\" Calm wording from the client does not mean the situation is calm.",
          "miniChallenge": "On your next two contacts tied to a major incident or SLA breach, name the situation once before you give the status.",
          "encouragingClose": "Matching the situation, not just the sentence, is what makes a client feel taken seriously.",
          "wordCount": 149,
          "estimatedDurationSeconds": 57,
          "_severity": "high",
          "_metric": "10 contacts flagged for let the situation set the tone"
        },
        {
          "cardId": "CARD-JANINE-PRETORIUS-4",
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing · Change Request / Standard Service Request",
          "personalNote": "14 of your contacts this period were from a client who had already been in touch about the same ticket, mostly on Change Request / Standard Service Request and Other / Miscellaneous.",
          "positiveOpening": null,
          "coachingFocus": "When a client says they've already called or messaged about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \"You're right, this is your third time reaching out on this one — thanks for staying on it.\" Naming the repeat costs one sentence and changes how the rest of the ticket lands.",
          "miniChallenge": "On your next two contacts where the client mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "wordCount": 119,
          "estimatedDurationSeconds": 46,
          "_severity": "medium",
          "_metric": "14 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "lerato-mokoena": {
    "name": "Lerato Mokoena",
    "slug": "lerato-mokoena",
    "role": "Service Desk Analyst",
    "team": "Thandeka Nkosi",
    "volume": 298,
    "firstContacts": 216,
    "continuationContacts": 82,
    "ahtSeconds": 408,
    "ahtSeries": [
      413,
      429,
      373,
      426,
      392
    ],
    "fcrPct": 88.3,
    "fcrSeries": [
      90.6,
      84.9,
      90.2,
      90.0,
      85.0
    ],
    "csat": 3.5,
    "csatSeries": [
      3.47,
      3.6,
      3.33,
      3.64,
      3.4
    ],
    "firstCsat": 4.08,
    "continuationCsat": 1.96,
    "qaScore": 86.4,
    "qaSeries": [
      86.4,
      86.6,
      86.1,
      86.6,
      86.3
    ],
    "processAdherencePct": 96.6,
    "resolutionRatePct": 88.3,
    "firstQa": 89.5,
    "continuationQa": 85.2,
    "criticalFailures": 34,
    "criticalFailureSeries": [
      7,
      2,
      9,
      6,
      10
    ],
    "empathy": 3.6,
    "behaviourFirst": {
      "clarity": 4.26,
      "ownership": 4.09,
      "listening": 4.08,
      "professionalism": 4.4,
      "empathy": 4.21,
      "managing_frustration": 3.98
    },
    "behaviourContinuation": {
      "clarity": 3.75,
      "ownership": 2.22,
      "listening": 2.95,
      "professionalism": 4.12,
      "empathy": 1.99,
      "managing_frustration": 2.33
    },
    "coachingPack": {
      "packId": "pack-20260525-2374",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 298 contacts, starting with 73 follow-up contacts opened like a new ticket mostly on Onboarding & Tooling / CMDB Integration and Contract & Invoice Query Handoff.",
      "packReason": "Built from your own contacts this period, 148 across these four patterns, where a small change in how you opened or closed would have made the ticket easier for the client.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 226,
      "packWordCount": 590,
      "cards": [
        {
          "cardId": "CARD-LERATO-MOKOENA-1",
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off · Onboarding & Tooling / CMDB Integration",
          "personalNote": "73 of your 82 follow-up contacts this period (89.0%) mostly on Onboarding & Tooling / CMDB Integration and Contract & Invoice Query Handoff.",
          "positiveOpening": "First-contact tickets are going well for you — clients come away from those with a clear next step.",
          "coachingFocus": "When a client is following up on a ticket that's already open, say what you can see has happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \"I can see this ticket has been open since Tuesday and you're following up on where the CMDB fix landed — let me pick it up from there.\" It tells the client the history came with them, so they are not re-explaining the issue.",
          "miniChallenge": "On your next three follow-up contacts, open with what you can already see before your first question.",
          "encouragingClose": "One line at the start does most of the work here. The rest of the ticket gets easier.",
          "wordCount": 159,
          "estimatedDurationSeconds": 61,
          "_severity": "high",
          "_metric": "73 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-LERATO-MOKOENA-2",
          "priorityRank": 2,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Situation Set the Tone · Onboarding & Tooling / CMDB Integration",
          "personalNote": "34 of your contacts on serious incidents this period mostly on Onboarding & Tooling / CMDB Integration and Major Incident / SLA Breach Escalation.",
          "positiveOpening": "Professionalism on your first contacts holds up well even under pressure — this is about tone matching, not accuracy.",
          "coachingFocus": "When the situation is serious — an SLA breach, a major incident — keep that in your tone even if the question sounds routine.",
          "practicalGuidance": "Sounds like: \"I know this started with a Sev-1 disclosure, so let me be clear about exactly where it stands.\" Calm wording from the client does not mean the situation is calm.",
          "miniChallenge": "On your next two contacts tied to a major incident or SLA breach, name the situation once before you give the status.",
          "encouragingClose": "Matching the situation, not just the sentence, is what makes a client feel taken seriously.",
          "wordCount": 149,
          "estimatedDurationSeconds": 57,
          "_severity": "high",
          "_metric": "34 contacts flagged for let the situation set the tone"
        },
        {
          "cardId": "CARD-LERATO-MOKOENA-3",
          "priorityRank": 3,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeat_contact_rate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "situation_led",
          "title": "Name Who Has It and When · Onboarding & Tooling / CMDB Integration",
          "personalNote": "30 of your contacts that closed without a next step this period mostly on Onboarding & Tooling / CMDB Integration and Major Incident / SLA Breach Escalation.",
          "positiveOpening": "Sometimes a ticket genuinely can't move until another team acts — that's fine, the contact still has to end somewhere.",
          "coachingFocus": "When you can't resolve something yourself, name who has it and when the client will hear back before you close.",
          "practicalGuidance": "Sounds like: \"This sits with the CMDB integration team. They work tickets in order of submission and you'll get an update by Thursday. If nothing lands by then, come back to me directly.\" No name and no date is the main reason a client follows up again.",
          "miniChallenge": "On your next three contacts you can't close yourself, name the team and a date before you end the ticket.",
          "encouragingClose": "You can't always give the resolution. You can always give them something to hold onto.",
          "wordCount": 162,
          "estimatedDurationSeconds": 62,
          "_severity": "high",
          "_metric": "30 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-LERATO-MOKOENA-4",
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing · Contract & Invoice Query Handoff",
          "personalNote": "11 of your contacts this period were from a client who had already been in touch about the same ticket, mostly on Contract & Invoice Query Handoff and Onboarding & Tooling / CMDB Integration.",
          "positiveOpening": null,
          "coachingFocus": "When a client says they've already called or messaged about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \"You're right, this is your third time reaching out on this one — thanks for staying on it.\" Naming the repeat costs one sentence and changes how the rest of the ticket lands.",
          "miniChallenge": "On your next two contacts where the client mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "wordCount": 120,
          "estimatedDurationSeconds": 46,
          "_severity": "medium",
          "_metric": "11 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "lerato-sithole": {
    "name": "Lerato Sithole",
    "slug": "lerato-sithole",
    "role": "Service Desk Analyst",
    "team": "Thandeka Nkosi",
    "volume": 214,
    "firstContacts": 140,
    "continuationContacts": 74,
    "ahtSeconds": 393,
    "ahtSeries": [
      385,
      369,
      425,
      410,
      376
    ],
    "fcrPct": 84.6,
    "fcrSeries": [
      88.4,
      71.8,
      95.3,
      82.5,
      83.7
    ],
    "csat": 3.31,
    "csatSeries": [
      3.26,
      3.13,
      3.51,
      3.45,
      3.2
    ],
    "firstCsat": 4.0,
    "continuationCsat": 2.0,
    "qaScore": 87.9,
    "qaSeries": [
      87.8,
      87.7,
      88.2,
      88.0,
      87.8
    ],
    "processAdherencePct": 93.0,
    "resolutionRatePct": 84.6,
    "firstQa": 91.8,
    "continuationQa": 87.5,
    "criticalFailures": 29,
    "criticalFailureSeries": [
      5,
      8,
      4,
      5,
      7
    ],
    "empathy": 3.44,
    "behaviourFirst": {
      "clarity": 4.17,
      "ownership": 4.12,
      "listening": 4.14,
      "professionalism": 4.25,
      "empathy": 4.22,
      "managing_frustration": 3.97
    },
    "behaviourContinuation": {
      "clarity": 3.67,
      "ownership": 2.17,
      "listening": 2.98,
      "professionalism": 4.12,
      "empathy": 1.96,
      "managing_frustration": 2.32
    },
    "coachingPack": {
      "packId": "pack-20260525-6359",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 214 contacts, starting with 73 follow-up contacts opened like a new ticket mostly on Ticket Status Chasing / Follow-Up and Change Request / Standard Service Request.",
      "packReason": "Built from your own contacts this period, 112 across these four patterns, where a small change in how you opened or closed would have made the ticket easier for the client.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 227,
      "packWordCount": 588,
      "cards": [
        {
          "cardId": "CARD-LERATO-SITHOLE-1",
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off · Ticket Status Chasing / Follow-Up",
          "personalNote": "73 of your 74 follow-up contacts this period (98.6%) mostly on Ticket Status Chasing / Follow-Up and Change Request / Standard Service Request.",
          "positiveOpening": "First-contact tickets are going well for you — clients come away from those with a clear next step.",
          "coachingFocus": "When a client is following up on a ticket that's already open, say what you can see has happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \"I can see this ticket has been open since Tuesday and you're following up on where the CMDB fix landed — let me pick it up from there.\" It tells the client the history came with them, so they are not re-explaining the issue.",
          "miniChallenge": "On your next three follow-up contacts, open with what you can already see before your first question.",
          "encouragingClose": "One line at the start does most of the work here. The rest of the ticket gets easier.",
          "wordCount": 158,
          "estimatedDurationSeconds": 61,
          "_severity": "high",
          "_metric": "73 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-LERATO-SITHOLE-2",
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeat_contact_rate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "situation_led",
          "title": "Name Who Has It and When · Ticket Status Chasing / Follow-Up",
          "personalNote": "17 of your contacts that closed without a next step this period mostly on Ticket Status Chasing / Follow-Up and Onboarding & Tooling / CMDB Integration.",
          "positiveOpening": "Sometimes a ticket genuinely can't move until another team acts — that's fine, the contact still has to end somewhere.",
          "coachingFocus": "When you can't resolve something yourself, name who has it and when the client will hear back before you close.",
          "practicalGuidance": "Sounds like: \"This sits with the CMDB integration team. They work tickets in order of submission and you'll get an update by Thursday. If nothing lands by then, come back to me directly.\" No name and no date is the main reason a client follows up again.",
          "miniChallenge": "On your next three contacts you can't close yourself, name the team and a date before you end the ticket.",
          "encouragingClose": "You can't always give the resolution. You can always give them something to hold onto.",
          "wordCount": 160,
          "estimatedDurationSeconds": 62,
          "_severity": "high",
          "_metric": "17 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-LERATO-SITHOLE-3",
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Situation Set the Tone · Onboarding & Tooling / CMDB Integration",
          "personalNote": "4 of your contacts on serious incidents this period mostly on Onboarding & Tooling / CMDB Integration and Major Incident / SLA Breach Escalation.",
          "positiveOpening": "Professionalism on your first contacts holds up well even under pressure — this is about tone matching, not accuracy.",
          "coachingFocus": "When the situation is serious — an SLA breach, a major incident — keep that in your tone even if the question sounds routine.",
          "practicalGuidance": "Sounds like: \"I know this started with a Sev-1 disclosure, so let me be clear about exactly where it stands.\" Calm wording from the client does not mean the situation is calm.",
          "miniChallenge": "On your next two contacts tied to a major incident or SLA breach, name the situation once before you give the status.",
          "encouragingClose": "Matching the situation, not just the sentence, is what makes a client feel taken seriously.",
          "wordCount": 149,
          "estimatedDurationSeconds": 57,
          "_severity": "high",
          "_metric": "4 contacts flagged for let the situation set the tone"
        },
        {
          "cardId": "CARD-LERATO-SITHOLE-4",
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing · Change Request / Standard Service Request",
          "personalNote": "18 of your contacts this period were from a client who had already been in touch about the same ticket, mostly on Change Request / Standard Service Request and Migration / Modernization Project Status.",
          "positiveOpening": null,
          "coachingFocus": "When a client says they've already called or messaged about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \"You're right, this is your third time reaching out on this one — thanks for staying on it.\" Naming the repeat costs one sentence and changes how the rest of the ticket lands.",
          "miniChallenge": "On your next two contacts where the client mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "wordCount": 121,
          "estimatedDurationSeconds": 47,
          "_severity": "medium",
          "_metric": "18 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "nomsa-dube": {
    "name": "Nomsa Dube",
    "slug": "nomsa-dube",
    "role": "Service Desk Analyst",
    "team": "Thandeka Nkosi",
    "volume": 204,
    "firstContacts": 141,
    "continuationContacts": 63,
    "ahtSeconds": 403,
    "ahtSeries": [
      412,
      378,
      386,
      391,
      450
    ],
    "fcrPct": 89.7,
    "fcrSeries": [
      91.7,
      92.5,
      83.8,
      94.1,
      84.8
    ],
    "csat": 3.41,
    "csatSeries": [
      3.5,
      3.35,
      3.14,
      3.53,
      3.48
    ],
    "firstCsat": 4.04,
    "continuationCsat": 1.98,
    "qaScore": 88.2,
    "qaSeries": [
      88.3,
      88.0,
      88.1,
      88.1,
      88.6
    ],
    "processAdherencePct": 93.6,
    "resolutionRatePct": 89.7,
    "firstQa": 91.4,
    "continuationQa": 87.1,
    "criticalFailures": 29,
    "criticalFailureSeries": [
      7,
      6,
      7,
      5,
      4
    ],
    "empathy": 3.51,
    "behaviourFirst": {
      "clarity": 4.15,
      "ownership": 4.09,
      "listening": 4.14,
      "professionalism": 4.3,
      "empathy": 4.2,
      "managing_frustration": 3.99
    },
    "behaviourContinuation": {
      "clarity": 3.63,
      "ownership": 2.1,
      "listening": 3.12,
      "professionalism": 4.22,
      "empathy": 1.99,
      "managing_frustration": 2.29
    },
    "coachingPack": {
      "packId": "pack-20260525-9717",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 204 contacts, starting with 56 follow-up contacts opened like a new ticket mostly on Change Request / Standard Service Request and Ticket Status Chasing / Follow-Up.",
      "packReason": "Built from your own contacts this period, 81 across these four patterns, where a small change in how you opened or closed would have made the ticket easier for the client.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 226,
      "packWordCount": 589,
      "cards": [
        {
          "cardId": "CARD-NOMSA-DUBE-1",
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off · Change Request / Standard Service Request",
          "personalNote": "56 of your 63 follow-up contacts this period (88.9%) mostly on Change Request / Standard Service Request and Ticket Status Chasing / Follow-Up.",
          "positiveOpening": "First-contact tickets are going well for you — clients come away from those with a clear next step.",
          "coachingFocus": "When a client is following up on a ticket that's already open, say what you can see has happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \"I can see this ticket has been open since Tuesday and you're following up on where the CMDB fix landed — let me pick it up from there.\" It tells the client the history came with them, so they are not re-explaining the issue.",
          "miniChallenge": "On your next three follow-up contacts, open with what you can already see before your first question.",
          "encouragingClose": "One line at the start does most of the work here. The rest of the ticket gets easier.",
          "wordCount": 159,
          "estimatedDurationSeconds": 61,
          "_severity": "high",
          "_metric": "56 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-NOMSA-DUBE-2",
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeat_contact_rate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "situation_led",
          "title": "Name Who Has It and When · Onboarding & Tooling / CMDB Integration",
          "personalNote": "10 of your contacts that closed without a next step this period mostly on Onboarding & Tooling / CMDB Integration and Contract & Invoice Query Handoff.",
          "positiveOpening": "Sometimes a ticket genuinely can't move until another team acts — that's fine, the contact still has to end somewhere.",
          "coachingFocus": "When you can't resolve something yourself, name who has it and when the client will hear back before you close.",
          "practicalGuidance": "Sounds like: \"This sits with the CMDB integration team. They work tickets in order of submission and you'll get an update by Thursday. If nothing lands by then, come back to me directly.\" No name and no date is the main reason a client follows up again.",
          "miniChallenge": "On your next three contacts you can't close yourself, name the team and a date before you end the ticket.",
          "encouragingClose": "You can't always give the resolution. You can always give them something to hold onto.",
          "wordCount": 161,
          "estimatedDurationSeconds": 62,
          "_severity": "high",
          "_metric": "10 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-NOMSA-DUBE-3",
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Situation Set the Tone · Onboarding & Tooling / CMDB Integration",
          "personalNote": "5 of your contacts on serious incidents this period mostly on Onboarding & Tooling / CMDB Integration and Major Incident / SLA Breach Escalation.",
          "positiveOpening": "Professionalism on your first contacts holds up well even under pressure — this is about tone matching, not accuracy.",
          "coachingFocus": "When the situation is serious — an SLA breach, a major incident — keep that in your tone even if the question sounds routine.",
          "practicalGuidance": "Sounds like: \"I know this started with a Sev-1 disclosure, so let me be clear about exactly where it stands.\" Calm wording from the client does not mean the situation is calm.",
          "miniChallenge": "On your next two contacts tied to a major incident or SLA breach, name the situation once before you give the status.",
          "encouragingClose": "Matching the situation, not just the sentence, is what makes a client feel taken seriously.",
          "wordCount": 149,
          "estimatedDurationSeconds": 57,
          "_severity": "high",
          "_metric": "5 contacts flagged for let the situation set the tone"
        },
        {
          "cardId": "CARD-NOMSA-DUBE-4",
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing · Ticket Status Chasing / Follow-Up",
          "personalNote": "10 of your contacts this period were from a client who had already been in touch about the same ticket, mostly on Ticket Status Chasing / Follow-Up and Change Request / Standard Service Request.",
          "positiveOpening": null,
          "coachingFocus": "When a client says they've already called or messaged about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \"You're right, this is your third time reaching out on this one — thanks for staying on it.\" Naming the repeat costs one sentence and changes how the rest of the ticket lands.",
          "miniChallenge": "On your next two contacts where the client mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "wordCount": 120,
          "estimatedDurationSeconds": 46,
          "_severity": "medium",
          "_metric": "10 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "sipho-de-villiers": {
    "name": "Sipho de Villiers",
    "slug": "sipho-de-villiers",
    "role": "Service Desk Analyst",
    "team": "Thandeka Nkosi",
    "volume": 217,
    "firstContacts": 147,
    "continuationContacts": 70,
    "ahtSeconds": 394,
    "ahtSeries": [
      385,
      409,
      345,
      419,
      410
    ],
    "fcrPct": 87.1,
    "fcrSeries": [
      83.0,
      90.6,
      88.1,
      76.3,
      97.3
    ],
    "csat": 3.4,
    "csatSeries": [
      3.51,
      3.51,
      3.1,
      3.45,
      3.38
    ],
    "firstCsat": 4.07,
    "continuationCsat": 1.99,
    "qaScore": 86.2,
    "qaSeries": [
      86.1,
      86.3,
      85.8,
      86.4,
      86.3
    ],
    "processAdherencePct": 94.5,
    "resolutionRatePct": 87.1,
    "firstQa": 89.8,
    "continuationQa": 85.5,
    "criticalFailures": 32,
    "criticalFailureSeries": [
      6,
      6,
      8,
      5,
      7
    ],
    "empathy": 3.49,
    "behaviourFirst": {
      "clarity": 4.29,
      "ownership": 4.07,
      "listening": 4.09,
      "professionalism": 4.36,
      "empathy": 4.21,
      "managing_frustration": 3.99
    },
    "behaviourContinuation": {
      "clarity": 3.84,
      "ownership": 2.21,
      "listening": 3.04,
      "professionalism": 4.17,
      "empathy": 1.98,
      "managing_frustration": 2.47
    },
    "coachingPack": {
      "packId": "pack-20260525-9978",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 217 contacts, starting with 65 follow-up contacts opened like a new ticket mostly on Ticket Status Chasing / Follow-Up and Change Request / Standard Service Request.",
      "packReason": "Built from your own contacts this period, 88 across these four patterns, where a small change in how you opened or closed would have made the ticket easier for the client.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 226,
      "packWordCount": 586,
      "cards": [
        {
          "cardId": "CARD-SIPHO-DE-VILLIERS-1",
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off · Ticket Status Chasing / Follow-Up",
          "personalNote": "65 of your 70 follow-up contacts this period (92.9%) mostly on Ticket Status Chasing / Follow-Up and Change Request / Standard Service Request.",
          "positiveOpening": "First-contact tickets are going well for you — clients come away from those with a clear next step.",
          "coachingFocus": "When a client is following up on a ticket that's already open, say what you can see has happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \"I can see this ticket has been open since Tuesday and you're following up on where the CMDB fix landed — let me pick it up from there.\" It tells the client the history came with them, so they are not re-explaining the issue.",
          "miniChallenge": "On your next three follow-up contacts, open with what you can already see before your first question.",
          "encouragingClose": "One line at the start does most of the work here. The rest of the ticket gets easier.",
          "wordCount": 158,
          "estimatedDurationSeconds": 61,
          "_severity": "high",
          "_metric": "65 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-SIPHO-DE-VILLIERS-2",
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeat_contact_rate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "situation_led",
          "title": "Name Who Has It and When · Ticket Status Chasing / Follow-Up",
          "personalNote": "10 of your contacts that closed without a next step this period mostly on Ticket Status Chasing / Follow-Up and Change Request / Standard Service Request.",
          "positiveOpening": "Sometimes a ticket genuinely can't move until another team acts — that's fine, the contact still has to end somewhere.",
          "coachingFocus": "When you can't resolve something yourself, name who has it and when the client will hear back before you close.",
          "practicalGuidance": "Sounds like: \"This sits with the CMDB integration team. They work tickets in order of submission and you'll get an update by Thursday. If nothing lands by then, come back to me directly.\" No name and no date is the main reason a client follows up again.",
          "miniChallenge": "On your next three contacts you can't close yourself, name the team and a date before you end the ticket.",
          "encouragingClose": "You can't always give the resolution. You can always give them something to hold onto.",
          "wordCount": 160,
          "estimatedDurationSeconds": 62,
          "_severity": "high",
          "_metric": "10 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-SIPHO-DE-VILLIERS-3",
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Situation Set the Tone · Onboarding & Tooling / CMDB Integration",
          "personalNote": "4 of your contacts on serious incidents this period mostly on Onboarding & Tooling / CMDB Integration and Major Incident / SLA Breach Escalation.",
          "positiveOpening": "Professionalism on your first contacts holds up well even under pressure — this is about tone matching, not accuracy.",
          "coachingFocus": "When the situation is serious — an SLA breach, a major incident — keep that in your tone even if the question sounds routine.",
          "practicalGuidance": "Sounds like: \"I know this started with a Sev-1 disclosure, so let me be clear about exactly where it stands.\" Calm wording from the client does not mean the situation is calm.",
          "miniChallenge": "On your next two contacts tied to a major incident or SLA breach, name the situation once before you give the status.",
          "encouragingClose": "Matching the situation, not just the sentence, is what makes a client feel taken seriously.",
          "wordCount": 149,
          "estimatedDurationSeconds": 57,
          "_severity": "high",
          "_metric": "4 contacts flagged for let the situation set the tone"
        },
        {
          "cardId": "CARD-SIPHO-DE-VILLIERS-4",
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing · Ticket Status Chasing / Follow-Up",
          "personalNote": "9 of your contacts this period were from a client who had already been in touch about the same ticket, mostly on Ticket Status Chasing / Follow-Up and Migration / Modernization Project Status.",
          "positiveOpening": null,
          "coachingFocus": "When a client says they've already called or messaged about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \"You're right, this is your third time reaching out on this one — thanks for staying on it.\" Naming the repeat costs one sentence and changes how the rest of the ticket lands.",
          "miniChallenge": "On your next two contacts where the client mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "wordCount": 119,
          "estimatedDurationSeconds": 46,
          "_severity": "medium",
          "_metric": "9 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "sipho-molefe": {
    "name": "Sipho Molefe",
    "slug": "sipho-molefe",
    "role": "Service Desk Analyst",
    "team": "Thandeka Nkosi",
    "volume": 187,
    "firstContacts": 125,
    "continuationContacts": 62,
    "ahtSeconds": 388,
    "ahtSeries": [
      378,
      410,
      391,
      364,
      396
    ],
    "fcrPct": 87.2,
    "fcrSeries": [
      88.1,
      84.2,
      88.9,
      82.9,
      91.7
    ],
    "csat": 3.48,
    "csatSeries": [
      3.4,
      3.47,
      3.47,
      3.46,
      3.61
    ],
    "firstCsat": 4.18,
    "continuationCsat": 2.06,
    "qaScore": 87.3,
    "qaSeries": [
      87.2,
      87.5,
      87.3,
      87.1,
      87.4
    ],
    "processAdherencePct": 95.7,
    "resolutionRatePct": 87.2,
    "firstQa": 88.8,
    "continuationQa": 84.5,
    "criticalFailures": 24,
    "criticalFailureSeries": [
      5,
      5,
      7,
      5,
      2
    ],
    "empathy": 3.47,
    "behaviourFirst": {
      "clarity": 4.24,
      "ownership": 4.17,
      "listening": 4.19,
      "professionalism": 4.37,
      "empathy": 4.18,
      "managing_frustration": 3.93
    },
    "behaviourContinuation": {
      "clarity": 3.6,
      "ownership": 2.23,
      "listening": 3.05,
      "professionalism": 4.29,
      "empathy": 2.02,
      "managing_frustration": 2.39
    },
    "coachingPack": {
      "packId": "pack-20260525-7702",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 187 contacts, starting with 51 follow-up contacts opened like a new ticket mostly on Other / Miscellaneous and Ticket Status Chasing / Follow-Up.",
      "packReason": "Built from your own contacts this period, 72 across these four patterns, where a small change in how you opened or closed would have made the ticket easier for the client.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 223,
      "packWordCount": 580,
      "cards": [
        {
          "cardId": "CARD-SIPHO-MOLEFE-1",
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off · Other / Miscellaneous",
          "personalNote": "51 of your 62 follow-up contacts this period (82.3%) mostly on Other / Miscellaneous and Ticket Status Chasing / Follow-Up.",
          "positiveOpening": "First-contact tickets are going well for you — clients come away from those with a clear next step.",
          "coachingFocus": "When a client is following up on a ticket that's already open, say what you can see has happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \"I can see this ticket has been open since Tuesday and you're following up on where the CMDB fix landed — let me pick it up from there.\" It tells the client the history came with them, so they are not re-explaining the issue.",
          "miniChallenge": "On your next three follow-up contacts, open with what you can already see before your first question.",
          "encouragingClose": "One line at the start does most of the work here. The rest of the ticket gets easier.",
          "wordCount": 153,
          "estimatedDurationSeconds": 59,
          "_severity": "high",
          "_metric": "51 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-SIPHO-MOLEFE-2",
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeat_contact_rate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "situation_led",
          "title": "Name Who Has It and When · Ticket Status Chasing / Follow-Up",
          "personalNote": "9 of your contacts that closed without a next step this period mostly on Ticket Status Chasing / Follow-Up and Contract & Invoice Query Handoff.",
          "positiveOpening": "Sometimes a ticket genuinely can't move until another team acts — that's fine, the contact still has to end somewhere.",
          "coachingFocus": "When you can't resolve something yourself, name who has it and when the client will hear back before you close.",
          "practicalGuidance": "Sounds like: \"This sits with the CMDB integration team. They work tickets in order of submission and you'll get an update by Thursday. If nothing lands by then, come back to me directly.\" No name and no date is the main reason a client follows up again.",
          "miniChallenge": "On your next three contacts you can't close yourself, name the team and a date before you end the ticket.",
          "encouragingClose": "You can't always give the resolution. You can always give them something to hold onto.",
          "wordCount": 159,
          "estimatedDurationSeconds": 61,
          "_severity": "high",
          "_metric": "9 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-SIPHO-MOLEFE-3",
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Situation Set the Tone · Major Incident / SLA Breach Escalation",
          "personalNote": "2 of your contacts on serious incidents this period mostly on Major Incident / SLA Breach Escalation and Onboarding & Tooling / CMDB Integration.",
          "positiveOpening": "Professionalism on your first contacts holds up well even under pressure — this is about tone matching, not accuracy.",
          "coachingFocus": "When the situation is serious — an SLA breach, a major incident — keep that in your tone even if the question sounds routine.",
          "practicalGuidance": "Sounds like: \"I know this started with a Sev-1 disclosure, so let me be clear about exactly where it stands.\" Calm wording from the client does not mean the situation is calm.",
          "miniChallenge": "On your next two contacts tied to a major incident or SLA breach, name the situation once before you give the status.",
          "encouragingClose": "Matching the situation, not just the sentence, is what makes a client feel taken seriously.",
          "wordCount": 149,
          "estimatedDurationSeconds": 57,
          "_severity": "high",
          "_metric": "2 contacts flagged for let the situation set the tone"
        },
        {
          "cardId": "CARD-SIPHO-MOLEFE-4",
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing · Migration / Modernization Project Status",
          "personalNote": "10 of your contacts this period were from a client who had already been in touch about the same ticket, mostly on Migration / Modernization Project Status and Contract & Invoice Query Handoff.",
          "positiveOpening": null,
          "coachingFocus": "When a client says they've already called or messaged about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \"You're right, this is your third time reaching out on this one — thanks for staying on it.\" Naming the repeat costs one sentence and changes how the rest of the ticket lands.",
          "miniChallenge": "On your next two contacts where the client mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "wordCount": 119,
          "estimatedDurationSeconds": 46,
          "_severity": "medium",
          "_metric": "10 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "vusi-khumalo": {
    "name": "Vusi Khumalo",
    "slug": "vusi-khumalo",
    "role": "Service Desk Analyst",
    "team": "Thandeka Nkosi",
    "volume": 318,
    "firstContacts": 216,
    "continuationContacts": 102,
    "ahtSeconds": 388,
    "ahtSeries": [
      344,
      408,
      381,
      416,
      384
    ],
    "fcrPct": 84.0,
    "fcrSeries": [
      88.5,
      81.2,
      88.5,
      83.3,
      80.0
    ],
    "csat": 3.45,
    "csatSeries": [
      3.19,
      3.61,
      3.38,
      3.7,
      3.35
    ],
    "firstCsat": 4.09,
    "continuationCsat": 2.1,
    "qaScore": 87.1,
    "qaSeries": [
      86.7,
      87.3,
      87.0,
      87.3,
      87.1
    ],
    "processAdherencePct": 95.6,
    "resolutionRatePct": 84.0,
    "firstQa": 87.5,
    "continuationQa": 83.2,
    "criticalFailures": 27,
    "criticalFailureSeries": [
      3,
      7,
      6,
      6,
      5
    ],
    "empathy": 3.52,
    "behaviourFirst": {
      "clarity": 4.22,
      "ownership": 4.09,
      "listening": 4.15,
      "professionalism": 4.35,
      "empathy": 4.25,
      "managing_frustration": 3.97
    },
    "behaviourContinuation": {
      "clarity": 3.72,
      "ownership": 2.27,
      "listening": 3.02,
      "professionalism": 4.12,
      "empathy": 1.98,
      "managing_frustration": 2.44
    },
    "coachingPack": {
      "packId": "pack-20260525-9390",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 318 contacts, starting with 93 follow-up contacts opened like a new ticket mostly on Onboarding & Tooling / CMDB Integration and Ticket Status Chasing / Follow-Up.",
      "packReason": "Built from your own contacts this period, 162 across these four patterns, where a small change in how you opened or closed would have made the ticket easier for the client.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 226,
      "packWordCount": 588,
      "cards": [
        {
          "cardId": "CARD-VUSI-KHUMALO-1",
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off · Onboarding & Tooling / CMDB Integration",
          "personalNote": "93 of your 102 follow-up contacts this period (91.2%) mostly on Onboarding & Tooling / CMDB Integration and Ticket Status Chasing / Follow-Up.",
          "positiveOpening": "First-contact tickets are going well for you — clients come away from those with a clear next step.",
          "coachingFocus": "When a client is following up on a ticket that's already open, say what you can see has happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \"I can see this ticket has been open since Tuesday and you're following up on where the CMDB fix landed — let me pick it up from there.\" It tells the client the history came with them, so they are not re-explaining the issue.",
          "miniChallenge": "On your next three follow-up contacts, open with what you can already see before your first question.",
          "encouragingClose": "One line at the start does most of the work here. The rest of the ticket gets easier.",
          "wordCount": 159,
          "estimatedDurationSeconds": 61,
          "_severity": "high",
          "_metric": "93 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-VUSI-KHUMALO-2",
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeat_contact_rate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "situation_led",
          "title": "Name Who Has It and When · Onboarding & Tooling / CMDB Integration",
          "personalNote": "33 of your contacts that closed without a next step this period mostly on Onboarding & Tooling / CMDB Integration and Migration / Modernization Project Status.",
          "positiveOpening": "Sometimes a ticket genuinely can't move until another team acts — that's fine, the contact still has to end somewhere.",
          "coachingFocus": "When you can't resolve something yourself, name who has it and when the client will hear back before you close.",
          "practicalGuidance": "Sounds like: \"This sits with the CMDB integration team. They work tickets in order of submission and you'll get an update by Thursday. If nothing lands by then, come back to me directly.\" No name and no date is the main reason a client follows up again.",
          "miniChallenge": "On your next three contacts you can't close yourself, name the team and a date before you end the ticket.",
          "encouragingClose": "You can't always give the resolution. You can always give them something to hold onto.",
          "wordCount": 161,
          "estimatedDurationSeconds": 62,
          "_severity": "high",
          "_metric": "33 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-VUSI-KHUMALO-3",
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Situation Set the Tone · Onboarding & Tooling / CMDB Integration",
          "personalNote": "31 of your contacts on serious incidents this period mostly on Onboarding & Tooling / CMDB Integration and Major Incident / SLA Breach Escalation.",
          "positiveOpening": "Professionalism on your first contacts holds up well even under pressure — this is about tone matching, not accuracy.",
          "coachingFocus": "When the situation is serious — an SLA breach, a major incident — keep that in your tone even if the question sounds routine.",
          "practicalGuidance": "Sounds like: \"I know this started with a Sev-1 disclosure, so let me be clear about exactly where it stands.\" Calm wording from the client does not mean the situation is calm.",
          "miniChallenge": "On your next two contacts tied to a major incident or SLA breach, name the situation once before you give the status.",
          "encouragingClose": "Matching the situation, not just the sentence, is what makes a client feel taken seriously.",
          "wordCount": 149,
          "estimatedDurationSeconds": 57,
          "_severity": "high",
          "_metric": "31 contacts flagged for let the situation set the tone"
        },
        {
          "cardId": "CARD-VUSI-KHUMALO-4",
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing · Ticket Status Chasing / Follow-Up",
          "personalNote": "5 of your contacts this period were from a client who had already been in touch about the same ticket, mostly on Ticket Status Chasing / Follow-Up and Migration / Modernization Project Status.",
          "positiveOpening": null,
          "coachingFocus": "When a client says they've already called or messaged about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \"You're right, this is your third time reaching out on this one — thanks for staying on it.\" Naming the repeat costs one sentence and changes how the rest of the ticket lands.",
          "miniChallenge": "On your next two contacts where the client mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "wordCount": 119,
          "estimatedDurationSeconds": 46,
          "_severity": "medium",
          "_metric": "5 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "zanele-zulu": {
    "name": "Zanele Zulu",
    "slug": "zanele-zulu",
    "role": "Service Desk Analyst",
    "team": "Thandeka Nkosi",
    "volume": 223,
    "firstContacts": 153,
    "continuationContacts": 70,
    "ahtSeconds": 396,
    "ahtSeries": [
      391,
      444,
      412,
      402,
      334
    ],
    "fcrPct": 83.9,
    "fcrSeries": [
      93.2,
      82.9,
      83.3,
      84.8,
      75.0
    ],
    "csat": 3.4,
    "csatSeries": [
      3.5,
      3.57,
      3.65,
      3.28,
      2.98
    ],
    "firstCsat": 4.04,
    "continuationCsat": 2.0,
    "qaScore": 88.8,
    "qaSeries": [
      88.8,
      89.2,
      88.9,
      88.8,
      88.3
    ],
    "processAdherencePct": 95.1,
    "resolutionRatePct": 83.9,
    "firstQa": 91.7,
    "continuationQa": 87.4,
    "criticalFailures": 29,
    "criticalFailureSeries": [
      4,
      3,
      8,
      4,
      10
    ],
    "empathy": 3.53,
    "behaviourFirst": {
      "clarity": 4.15,
      "ownership": 4.05,
      "listening": 4.2,
      "professionalism": 4.37,
      "empathy": 4.24,
      "managing_frustration": 3.97
    },
    "behaviourContinuation": {
      "clarity": 3.76,
      "ownership": 2.27,
      "listening": 3.06,
      "professionalism": 4.23,
      "empathy": 1.96,
      "managing_frustration": 2.32
    },
    "coachingPack": {
      "packId": "pack-20260525-5553",
      "cycleType": "weekly_insight",
      "packSummary": "Four things from your last 223 contacts, starting with 63 follow-up contacts opened like a new ticket mostly on Change Request / Standard Service Request and Major Incident / SLA Breach Escalation.",
      "packReason": "Built from your own contacts this period, 108 across these four patterns, where a small change in how you opened or closed would have made the ticket easier for the client.",
      "cardCount": 4,
      "estimatedPackDurationSeconds": 228,
      "packWordCount": 592,
      "cards": [
        {
          "cardId": "CARD-ZANELE-ZULU-1",
          "priorityRank": 1,
          "topicKey": "open_with_incident",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Start Where They Left Off · Change Request / Standard Service Request",
          "personalNote": "63 of your 70 follow-up contacts this period (90.0%) mostly on Change Request / Standard Service Request and Major Incident / SLA Breach Escalation.",
          "positiveOpening": "First-contact tickets are going well for you — clients come away from those with a clear next step.",
          "coachingFocus": "When a client is following up on a ticket that's already open, say what you can see has happened before you ask them anything new.",
          "practicalGuidance": "Sounds like: \"I can see this ticket has been open since Tuesday and you're following up on where the CMDB fix landed — let me pick it up from there.\" It tells the client the history came with them, so they are not re-explaining the issue.",
          "miniChallenge": "On your next three follow-up contacts, open with what you can already see before your first question.",
          "encouragingClose": "One line at the start does most of the work here. The rest of the ticket gets easier.",
          "wordCount": 160,
          "estimatedDurationSeconds": 62,
          "_severity": "high",
          "_metric": "63 contacts flagged for start where they left off"
        },
        {
          "cardId": "CARD-ZANELE-ZULU-2",
          "priorityRank": 2,
          "topicKey": "route_forward",
          "affectedKpis": [
            "repeat_contact_rate",
            "fcr"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "situation_led",
          "title": "Name Who Has It and When · Change Request / Standard Service Request",
          "personalNote": "20 of your contacts that closed without a next step this period mostly on Change Request / Standard Service Request and Major Incident / SLA Breach Escalation.",
          "positiveOpening": "Sometimes a ticket genuinely can't move until another team acts — that's fine, the contact still has to end somewhere.",
          "coachingFocus": "When you can't resolve something yourself, name who has it and when the client will hear back before you close.",
          "practicalGuidance": "Sounds like: \"This sits with the CMDB integration team. They work tickets in order of submission and you'll get an update by Thursday. If nothing lands by then, come back to me directly.\" No name and no date is the main reason a client follows up again.",
          "miniChallenge": "On your next three contacts you can't close yourself, name the team and a date before you end the ticket.",
          "encouragingClose": "You can't always give the resolution. You can always give them something to hold onto.",
          "wordCount": 162,
          "estimatedDurationSeconds": 62,
          "_severity": "high",
          "_metric": "20 contacts flagged for name who has it and when"
        },
        {
          "cardId": "CARD-ZANELE-ZULU-3",
          "priorityRank": 3,
          "topicKey": "match_register",
          "affectedKpis": [
            "csat"
          ],
          "contentType": "scenario_example",
          "cardShape": "standard",
          "title": "Let the Situation Set the Tone · Major Incident / SLA Breach Escalation",
          "personalNote": "17 of your contacts on serious incidents this period mostly on Major Incident / SLA Breach Escalation and Onboarding & Tooling / CMDB Integration.",
          "positiveOpening": "Professionalism on your first contacts holds up well even under pressure — this is about tone matching, not accuracy.",
          "coachingFocus": "When the situation is serious — an SLA breach, a major incident — keep that in your tone even if the question sounds routine.",
          "practicalGuidance": "Sounds like: \"I know this started with a Sev-1 disclosure, so let me be clear about exactly where it stands.\" Calm wording from the client does not mean the situation is calm.",
          "miniChallenge": "On your next two contacts tied to a major incident or SLA breach, name the situation once before you give the status.",
          "encouragingClose": "Matching the situation, not just the sentence, is what makes a client feel taken seriously.",
          "wordCount": 149,
          "estimatedDurationSeconds": 57,
          "_severity": "high",
          "_metric": "17 contacts flagged for let the situation set the tone"
        },
        {
          "cardId": "CARD-ZANELE-ZULU-4",
          "priorityRank": 4,
          "topicKey": "acknowledge_effort",
          "affectedKpis": [
            "csat",
            "repeat_contact_rate"
          ],
          "contentType": "trigger_action_reminder",
          "cardShape": "short",
          "title": "Count the Chasing · Major Incident / SLA Breach Escalation",
          "personalNote": "8 of your contacts this period were from a client who had already been in touch about the same ticket, mostly on Major Incident / SLA Breach Escalation and Migration / Modernization Project Status.",
          "positiveOpening": null,
          "coachingFocus": "When a client says they've already called or messaged about this, acknowledge the repeat specifically before you move to the answer.",
          "practicalGuidance": "Sounds like: \"You're right, this is your third time reaching out on this one — thanks for staying on it.\" Naming the repeat costs one sentence and changes how the rest of the ticket lands.",
          "miniChallenge": "On your next two contacts where the client mentions they've already been in touch, acknowledge the repeat by name before answering.",
          "encouragingClose": null,
          "wordCount": 121,
          "estimatedDurationSeconds": 47,
          "_severity": "medium",
          "_metric": "8 contacts flagged for count the chasing"
        }
      ]
    }
  }
}


export const TEAM_AGGREGATES = {
  "totalContacts": 2358,
  "qaScore": 87.43,
  "csat": 3.44,
  "firstCsat": 4.08,
  "continuationCsat": 2.01,
  "ahtSeconds": 397,
  "fcrPct": 86.3,
  "criticalFailuresTotal": 295,
  "agentsWithCriticalFailures": 10
}

export const AGENT_METRIC_ORDER = [
  "bongani-dube",
  "janine-khumalo",
  "janine-pretorius",
  "lerato-mokoena",
  "lerato-sithole",
  "nomsa-dube",
  "sipho-de-villiers",
  "sipho-molefe",
  "vusi-khumalo",
  "zanele-zulu"
]

/** Ranked by critical failures, then by CSAT ascending. */
export const FLAGGED_AGENT_SLUGS = [
  "bongani-dube",
  "lerato-mokoena",
  "sipho-de-villiers",
  "janine-khumalo"
]

export const CARD_SHAPE_LABELS = {
  standard: 'Standard',
  situation_led: 'Situation-led',
  short: 'Short',
  technique_first: 'Technique-first',
}

export const CONTENT_TYPE_LABELS = {
  knowledge_check: 'Knowledge check',
  scenario_example: 'Scenario',
  trigger_action_reminder: 'Trigger and action',
}
