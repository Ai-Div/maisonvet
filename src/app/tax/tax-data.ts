// Tax strategy research for Tim / Div Digital. Researched 2026-11-11.
// Illustrative planning math only — not tax advice. Every figure assumes the
// baseline household below; replace with real numbers before acting.

export interface Assumption {
  label: string;
  value: string;
}

export interface Strategy {
  id: string;
  name: string;
  tier: 'Do now' | 'Bigger move' | 'Situational' | 'Avoid';
  annualSavings: string;
  effort: string;
  deadline: string;
  summary: string;
  math: string[];
  watchOuts: string[];
  sources: { label: string; url: string }[];
}

export interface Listing {
  address: string;
  price: string;
  details: string;
  url: string;
}

export const updated = 'November 11, 2026';

export const baseline: Assumption[] = [
  { label: 'Div Digital net profit (before owner pay)', value: '$500,000 (placeholder — send the real 2025 figure)' },
  { label: 'Entity', value: 'S-corp paying Tim a $160,000 salary (assumed; if Div is an LLC/sole prop, see the S-corp row)' },
  { label: 'Spouse', value: 'Self-employed stylist, ~$60,000 net (assumed)' },
  { label: 'Filing', value: 'Married filing jointly, 2 kids (8 and 6), renting in Orange County' },
  { label: 'Tim’s age', value: '45 assumed for retirement-plan limits' },
  { label: 'Staff', value: '3 employees at ~$70,000 each (assumed)' },
  { label: 'Marginal rate used', value: '32% federal + 9.3% California = 41.3% on each extra deductible dollar (35% + 9.3% = 44.3% above ~$512K taxable)' },
];

export const keyNumbers2026: Assumption[] = [
  { label: 'Federal brackets (MFJ, taxable income)', value: '24% from $211,400 · 32% from $403,550 · 35% from $512,450 · 37% from $768,700' },
  { label: 'Standard deduction (MFJ)', value: '$32,200' },
  { label: 'SALT cap', value: '$40,400, cut by 30% of MAGI over $505,000, down to a $10,000 floor at ~$606,000' },
  { label: 'QBI (Sec. 199A) phase-in (MFJ)', value: '$403,500–$553,500. “Consulting” is a specified service; web/software builds generally are not' },
  { label: 'Social Security wage base', value: '$184,500' },
  { label: '401(k)', value: '$24,500 employee deferral; $72,000 total with employer money (+$8,000 catch-up at 50+)' },
  { label: 'HSA (family)', value: '$8,750' },
  { label: 'California', value: '9.3% bracket covers roughly $141K–$721K (MFJ); no QBI deduction, no bonus depreciation' },
  { label: '30-year mortgage', value: '7.18% (Freddie Mac, Nov 5, 2026); investor/DSCR loans ~6.9–8%' },
];

export const strategies: Strategy[] = [
  {
    id: 'retirement',
    name: '401(k) with profit sharing through Div',
    tier: 'Do now',
    annualSavings: '≈ $26,600',
    effort: 'Low — a payroll provider (Gusto, Guideline, etc.) sets it up',
    deadline: 'Salary deferrals must run through 2026 payroll by Dec 31; profit-sharing can be funded until the 2026 return is filed',
    summary:
      'With three employees a solo 401(k) is out, but a small-business 401(k) with a safe-harbor match still lets Tim put away up to $72,000 a year. It is the cleanest, lowest-risk deduction available.',
    math: [
      'Tim defers $24,500 from salary.',
      'Div adds 25% of his $160,000 salary as profit sharing: $40,000.',
      '$64,500 deducted × 41.3% = about $26,600 less tax this year.',
      'Cost: a 3% safe-harbor contribution for staff (3 × $70,000 × 3% = $6,300), which is also deductible and helps retention.',
    ],
    watchOuts: [
      'This defers tax rather than erasing it: withdrawals in retirement are taxed. Roth options trade today’s deduction for tax-free growth.',
      'Profit sharing in an S-corp is a percentage of W-2 salary, so a very low salary shrinks it.',
    ],
    sources: [
      { label: 'IRS 2026 plan limits (DLA Piper summary)', url: 'https://www.dlapiper.com/insights/publications/2025/11/irs-announces-2026-retirement-and-benefit-plan-limits-ssa-announces-cola-adjustment' },
    ],
  },
  {
    id: 'cash-balance',
    name: 'Cash balance (defined benefit) plan on top of the 401(k)',
    tier: 'Bigger move',
    annualSavings: '≈ $52,000 net (after staff and admin costs)',
    effort: 'Medium — needs a pension administrator and actuary; a multi-year commitment',
    deadline: 'Can be adopted for 2026 up to the tax-filing deadline (with extensions)',
    summary:
      'The single biggest legal deduction for a high-earning owner with a small team. Contribution capacity rises with age: roughly $120K at 40, an estimated $150–170K at 45 and ~$200K+ at 50, on top of the 401(k).',
    math: [
      'Contribute $150,000 (age-45 estimate) × 41.3% = about $62,000 less tax.',
      'Staff must get meaningful benefits, typically 5–8% of pay: 3 × $70,000 × 6% = $12,600 (≈ $7,400 after its own deduction).',
      'Administration: roughly $2,000 setup plus $1,300+/yr at Cetera’s published pricing; budget $3,000–5,000/yr all-in for actuarial work.',
      'Net: about $52,000 a year in reduced tax, while building Tim’s own retirement balance.',
    ],
    watchOuts: [
      'Only worth it if profit is reliably high for 3–5+ years; contributions are an annual obligation (they can be adjusted, not skipped at will).',
      'Contribution estimates by age are provider illustrations; an actuary sets the real number.',
    ],
    sources: [
      { label: 'Cash balance limits by age (Carry)', url: 'https://carry.com/learn/cash-balance-plan-contribution-limits' },
      { label: 'Cetera cash balance fee flyer', url: 'https://cetera.com/sites/default/files/2025-03/CRPS-Cash-Balance-Plan-Flyer.pdf' },
    ],
  },
  {
    id: 'ptet',
    name: 'California PTET (pass-through entity elective tax)',
    tier: 'Situational',
    annualSavings: '≈ $0–2,000 at $500K income; ≈ $14,600 at ~$650K',
    effort: 'Low — the CPA elects it on Div’s return',
    deadline: 'June 15 prepayment each year (FTB 3893). Under SB 132 a missed payment now reduces the credit by 12.5% of the shortfall instead of voiding the election',
    summary:
      'Div pays California tax at the entity level, where it is fully deductible federally, instead of Tim paying it personally where the SALT cap limits the deduction. Extended through 2030.',
    math: [
      'At ~$500K household income, California tax is about $38,600, already inside the $40,400 SALT cap, so PTET adds little.',
      'At ~$650K, the SALT cap has fallen to its $10,000 floor. PTET on $450,000 of Div income = $41,850 paid by Div, deducted at 35% ≈ $14,600 federal saving.',
    ],
    watchOuts: [
      'Only S-corps and partnerships can elect; a single-member LLC taxed as a sole prop cannot.',
      'The $40,400 SALT cap reverts to $10,000 after 2029 unless Congress acts, which makes PTET more valuable later.',
    ],
    sources: [
      { label: 'SB 132 extends PTET to 2030 (BDO)', url: 'https://www.bdo.com/insights/tax/california-enacts-single-sales-factor-for-financial-institutions-and-extends-elective-ptet' },
      { label: 'FTB tax news on PTET payments', url: 'https://www.ftb.ca.gov/about-ftb/newsroom/tax-news/2025/12.html' },
    ],
  },
  {
    id: 'kids',
    name: 'Put Zep and Mac on payroll for real work',
    tier: 'Do now',
    annualSavings: '≈ $4,200 via Div (S-corp) · ≈ $8,900 via the spouse’s sole proprietorship',
    effort: 'Low–medium — timesheets, real tasks, market-rate pay, W-2s',
    deadline: 'Wages must be for work done and paid in 2026 to count for 2026',
    summary:
      'Wages paid to your children are deductible to the business and, up to the standard deduction ($16,100 in 2026), tax-free to them. Their earnings can then fund a Roth IRA for each child (up to $7,500 or their earnings).',
    math: [
      '$8,000 each ($16,000) for documented work such as modeling for Div’s marketing and simple content tasks.',
      'Through Div (an S-corp): $16,000 × 41.3% = $6,600 saved, minus $2,450 of payroll tax = about $4,200.',
      'Through the spouse’s sole proprietorship: wages to children under 18 are exempt from FICA, and the deduction also cuts her 15.3% self-employment tax, for about $8,900.',
    ],
    watchOuts: [
      'At ages 6 and 8 the IRS will look hard at “reasonable pay for real work.” Keep pay modest, tasks age-appropriate and every hour logged. The Tax Court has denied wages paid to young children when the work was not real.',
      'The FICA exemption applies only to a sole proprietorship or a partnership owned solely by the parents, not an S-corp.',
    ],
    sources: [
      { label: 'Hiring your children (Kitces)', url: 'https://kitces.com/blog/tax-rules-hiring-children-family-business-flsa-tax-savings-standard-deduction-roth-contribution/' },
      { label: 'Gusto: tax benefits of hiring children', url: 'https://gusto.com/resources/articles/taxes/tax-benefits-hiring-children' },
    ],
  },
  {
    id: 'accountable-plan',
    name: 'Accountable plan: home office, phone and mileage (renters qualify)',
    tier: 'Do now',
    annualSavings: '≈ $3,500',
    effort: 'Low — a one-page written plan plus monthly expense reports',
    deadline: 'Any time; reimburse 2026 costs before year-end',
    summary:
      'You do not need to own your home. Div can reimburse Tim tax-free for the business share of rent and utilities on a space used regularly and exclusively for work, plus phone and mileage.',
    math: [
      'Example: $6,000/month rent, office is 10% of the home = $7,200 a year, plus ~$1,200 utilities and phone = $8,400.',
      '$8,400 deducted by Div and tax-free to Tim × 41.3% ≈ $3,500.',
    ],
    watchOuts: ['The space must be exclusive business use. A guest room that doubles as an office does not qualify.'],
    sources: [{ label: 'IRS Publication 587 (home office)', url: 'https://www.irs.gov/publications/p587' }],
  },
  {
    id: 'str',
    name: 'Real estate without owning your home: a short-term rental + cost segregation',
    tier: 'Bigger move',
    annualSavings: '≈ $53,000 in year one (mostly federal); smaller after',
    effort: 'High — buy a property, self-manage it 100+ hours a year, keep an hours log',
    deadline: 'Must be bought and placed in service (listed for rent) in the tax year; realistic for 2027',
    summary:
      'Rental losses are normally “passive” and cannot offset business income. A short-term rental with an average guest stay of 7 days or less is not treated as a rental activity, so if you materially participate, its paper losses offset Div income. A cost-segregation study front-loads depreciation, and the 2025 tax law restored 100% bonus depreciation permanently for property acquired after Jan 19, 2025.',
    math: [
      'Example: 6888 Sunnyhill Rd, Joshua Tree — permitted STR listed at $569,000 (April 2026).',
      'Cash in: 25% down $142,250 + ~$15,000 closing + ~$6,000 cost-seg study = $163,250.',
      'Building value (80% of price) $455,200; cost seg reclassifies ~30% = $136,560 as 5/7/15-year property, deducted in year one with bonus depreciation.',
      'Operations (assumed): $55,000 gross bookings, $25,000 cleaning/fees/utilities, $6,260 property tax, $3,000 insurance, $32,000 interest (7.5% on $426,750). Cash result: about –$11,300 a year before principal.',
      'Year-one federal tax loss ≈ $159,600 → ≈ $51,000–55,900 federal savings at 32–35%. California allows no bonus depreciation, so its loss is ~$25,500 → ≈ $2,400.',
    ],
    watchOuts: [
      'Material participation is the whole game: 100+ hours AND more than anyone else (cleaners and co-hosts count), or 500+ hours. A full-time property manager breaks it. Rachael could be the participant; spouses’ hours combine.',
      'It defers tax: bonus depreciation is recaptured at ordinary rates when you sell.',
      'Permits: Joshua Tree (unincorporated San Bernardino County) permits must be confirmed with the county before buying. Palm Springs caps permits per neighborhood; Riverside County is tightening rules.',
      'At 7%+ rates the property likely loses cash every month. Buy it because you would want it anyway, not only for the deduction.',
    ],
    sources: [
      { label: 'STR loophole + cost seg guide', url: 'https://www.taxstra.com/real-estate-investors/short-term-rental-loophole' },
      { label: 'Cost segregation study pricing (Dimov Tax)', url: 'https://dimovtax.com/cost-segregation-study-cost/' },
      { label: 'Freddie Mac rate, Nov 5, 2026 (WCAX/AP)', url: 'https://www.wcax.com/2026/11/05/average-us-30-year-mortgage-rate-falls-718-this-week-its-third-straight-decline/' },
    ],
  },
  {
    id: 'scorp',
    name: 'S-corp election (only if Div is not already one)',
    tier: 'Situational',
    annualSavings: '≈ $2,800 direct at $500K profit — but it unlocks PTET',
    effort: 'Low — Form 2553 plus running payroll',
    deadline: 'Form 2553 by March 15, 2027 for the 2027 tax year',
    summary:
      'Paying Tim a reasonable salary and taking the rest as distributions avoids self-employment tax on the distributions. Above the $184,500 Social Security wage base the saving is mostly the 2.9% Medicare portion, so at Div’s profit level the direct win is small. The bigger reason is that only S-corps and partnerships can use California PTET.',
    math: [
      'Sole prop: self-employment tax on $500,000 ≈ $36,300.',
      'S-corp: payroll tax on a $160,000 salary = $24,500.',
      'Gross difference $11,800, minus a smaller deduction for half of SE tax (~$2,400), California’s 1.5% S-corp tax on $340,000 ($5,100) and payroll costs (~$1,500) = about $2,800.',
    ],
    watchOuts: ['Salary must be “reasonable” for the role; too low invites an audit and also shrinks 401(k) profit sharing.'],
    sources: [{ label: 'SSA 2026 wage base (APA)', url: 'https://blogs.payroll.org/pay-news-now/social-security-wage-base-increases-to-184500-for-2026' }],
  },
  {
    id: 'rnd',
    name: 'R&D: expensing and credit for Div’s software and AI work',
    tier: 'Situational',
    annualSavings: '≈ $10,000 per $150K of qualifying wages (credit), plus faster deductions',
    effort: 'Medium — a specialist study documenting experiments and time',
    deadline: 'Claimed on the return; ask the CPA about amending 2022–2024 under the new small-business election',
    summary:
      'The 2025 law restored immediate expensing of domestic research costs (new Sec. 174A). Separately, the Sec. 41 credit can apply to genuinely experimental development, such as Div building its own AI tools or LOCL, if Div owns that work. Client-funded builds usually do not qualify.',
    math: ['Rule of thumb: the federal credit runs ~6–7% of qualifying research spending, so $150,000 of qualifying developer time ≈ $9,750. California has its own credit.'],
    watchOuts: ['The IRS scrutinizes software R&D claims closely; use a reputable firm and contemporaneous documentation.'],
    sources: [{ label: 'Sec. 174A procedural guidance (Crowe)', url: 'https://www.crowe.com/insights/tax-news-highlights/obbba-procedural-guidance-for-research-expenses' }],
  },
  {
    id: 'charity',
    name: 'Charitable giving through a donor-advised fund',
    tier: 'Situational',
    annualSavings: 'Depends on giving; best when “bunched” into one year',
    effort: 'Low',
    deadline: 'Fund by Dec 31',
    summary:
      'From 2026, itemizers only deduct gifts above 0.5% of AGI (about $2,500 at $500K). Putting two or three years of giving into a donor-advised fund in one year clears that floor once; gifting appreciated stock avoids capital-gains tax as well.',
    math: ['Example: $30,000 bunched into a DAF in 2026 at 41.3% ≈ $11,400 saved (if itemizing), versus a fraction of that spread over three years.'],
    watchOuts: ['Only pays if you itemize; PTET moves state tax off your personal return, which makes itemizing harder.'],
    sources: [{ label: '2026 charitable rule changes (CAPTRUST)', url: 'https://www.captrust.com/resources/obbba-charitable-rules-update-for-2026/' }],
  },
  {
    id: 'avoid',
    name: 'What to avoid',
    tier: 'Avoid',
    annualSavings: '—',
    effort: '—',
    deadline: '—',
    summary: 'Promoted shelters cost far more than they save when the IRS disallows them.',
    math: [],
    watchOuts: [
      'Syndicated conservation easements: an IRS listed transaction; deductions are now capped at 2.5× the investment.',
      'Micro-captive insurance pitches: also on the IRS listed/scrutiny lists.',
      'The “Augusta rule” (renting your home to your business 14 days a year): leases normally bar subletting, so renters generally cannot use it.',
      'Passive real estate funds, syndications and REITs: good investments maybe, but their losses do not offset Div’s income.',
      'Oil and gas drilling deals: the deductions are real, but so are dry holes and promoter risk. Only with money you can lose.',
    ],
    sources: [{ label: 'IRS Notice 2017-10 (conservation easements)', url: 'https://www.irs.gov/irb/2017-04_IRB' }],
  },
];

export const strListings: Listing[] = [
  { address: '6888 Sunnyhill Rd, Joshua Tree', price: '$569,000', details: '4 bd / 3 ba dome home + ADU on 1.25 ac; furnished, permitted STR (listed Apr 2026)', url: 'https://www.weichert.com/134803360/' },
  { address: '61786 Desert Air Rd, Joshua Tree', price: '$625,000', details: 'Duplex with STR permit on the property (listed Feb 2026)', url: 'https://www.houzeo.com/homes/61786-desert-air-rd-joshua-tree-ca-92252/hzid_6fed3f87' },
  { address: '60291 La Mirada Trl, Joshua Tree', price: '$739,500', details: '3 bd / 3 ba, furnished and booked as an STR', url: 'https://jamesoutland.net/ca/joshua-tree/60291-la-mirada-trl' },
];

export const neededFromTim: string[] = [
  'Div’s entity type and 2025 net profit (or the 2025 return).',
  'Tim’s current salary, age, and the three staff salaries.',
  'Rachael’s business structure and net income.',
  'Your CPA’s name: everything here should be confirmed by a CPA or EA before acting.',
];

export const thisYearChecklist: string[] = [
  'Before Dec 31: start 401(k) salary deferrals in Div payroll and fund a donor-advised fund if giving.',
  'Before Dec 31: if hiring the boys, start timesheets now and pay 2026 wages for 2026 work.',
  'Before Dec 31: set up the accountable plan and reimburse 2026 home-office, phone and mileage costs.',
  'Before filing 2026: decide on a cash balance plan (can be adopted up to the extended filing deadline).',
  '2027: consider an STR purchase only after confirming the permit and who will provide the hours.',
];
