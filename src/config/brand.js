/**
 * The vocabulary layer. Every string in template code that names a side of
 * the client's business, a transaction, or the brand itself reads from here
 * — never hardcoded in a component. This is what makes "swap data only"
 * true: point this file (and the rest of clients/<name>/content) at a new
 * client and nothing in src/components or src/pages needs to change.
 *
 * Per the QiQ demo factory pipeline, qiq-content-writer generates a
 * client-specific version of this file from story-spec.json's `brand`
 * block (see spec/story-spec.schema.md).
 *
 * Currently wired to: Kyndryl (one-sided / B2B managed services).
 *
 * ── Two-sided marketplace example (Rover, the previous default) ────────
 *   BRAND            = { name: 'Rover', logoPath: '/rover-logo.jpg', logoAlt: 'Rover' }
 *   MARKETPLACE_TYPE = 'two-sided'
 *   NOUNS            = { demandSide: 'pet parent', demandSidePlural: 'pet parents',
 *                        supplySide: 'sitter',     supplySidePlural: 'sitters',
 *                        transaction: 'booking', currency: 'GBP',
 *                        currencySymbol: '£', locale: 'en-GB' }
 *   CONTACT_INDEX_PATH = '/data/rover_contact_index.json'
 * Both marketplace types are live code paths — see IS_TWO_SIDED below.
 */

export const BRAND = {
  name: 'Kyndryl',
  logoPath: '/kyndryl-logo.jpg',
  logoAlt: 'Kyndryl',
}

/**
 * 'two-sided' — the client runs a marketplace with a demand side and a
 *   supply side (Rover: pet parents and sitters). LTV is modelled and
 *   rendered for both sides.
 * 'one-sided' — the client has a single customer population (Kyndryl:
 *   enterprise clients). Every supply-side LTV panel, legend, assumption
 *   field and copy line is *not rendered at all* — it is not zeroed, it
 *   does not exist in the DOM.
 */
export const MARKETPLACE_TYPE = 'one-sided' // 'two-sided' | 'one-sided'

/** Single source of truth for the branch. Import this, don't re-compare strings. */
export const IS_TWO_SIDED = MARKETPLACE_TYPE === 'two-sided'

export const NOUNS = {
  demandSide: 'client',
  demandSidePlural: 'clients',
  // Supply-side nouns are null for a one-sided client. Nothing should read
  // them without checking IS_TWO_SIDED first; NOUNS_CAP guards the cap()
  // call so a stray read renders '' rather than throwing.
  supplySide: null,
  supplySidePlural: null,
  transaction: 'ticket',
  transactionPlural: 'tickets',
  currency: 'USD',
  currencySymbol: '$',
  locale: 'en-US',
}

/** Path of the Contact Search light index in public/. Per client, because the
 * shard generator emits `<client>_contact_index.json`. */
export const CONTACT_INDEX_PATH = '/data/kyndryl_contact_index.json'

/** Capitalised variants, since labels and headings need Title Case but the
 * base nouns read more naturally lowercase in prose. */
export const NOUNS_CAP = {
  demandSide: cap(NOUNS.demandSide),
  demandSidePlural: cap(NOUNS.demandSidePlural),
  supplySide: cap(NOUNS.supplySide),
  supplySidePlural: cap(NOUNS.supplySidePlural),
  transaction: cap(NOUNS.transaction),
}

function cap(s) {
  if (!s) return ''
  return s.replace(/\b\w/g, (c) => c.toUpperCase())
}
