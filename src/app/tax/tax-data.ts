// Tax strategy research for Tim / Div Digital. Researched 2026-11-11, re-based to a
// $300K household on 2026-11-11. Illustrative planning math only — not tax advice.
// Every savings figure is a full before/after recalculation of the baseline below
// (federal income tax, self-employment/payroll tax, California tax and CA entity fees),
// not a marginal-rate shortcut. Recompute rather than hand-editing totals.

export interface Assumption {
  label: string;
  value: string;
}

export interface Strategy {
  id: string;
  name: string;
  tier: 'Do now' | 'Next year' | 'Situational' | 'Avoid';
  annualSavings: string; // headline figure, e.g. '≈ $10,800'
  savingsNote?: string; // short qualifier under the figure
  savingsBreakdown?: { label: string; amount: string }[]; // other scenarios
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

export const headline =
  'On the $300K baseline, the household owes about $82,500 in 2026 taxes. The “Do now” package (401(k)s, the boys on payroll, home office, HSA) cuts that by about $22,100 a year. Adding an S-corp election in 2027 raises the total to about $30,100–33,900 a year, bringing the bill to roughly $49,000–52,000.';

export const baseline: Assumption[] = [
  { label: 'Household income', value: '$300,000: Div Digital LLC net profit $270,000 + Rachael’s salon $30,000 (of which ~$6,000 is reported tips)' },
  { label: 'Entity', value: 'Div Digital LLC taxed as a sole proprietorship (Schedule C); staff assumed to be contractors' },
  { label: 'Filing', value: 'Married filing jointly, Zep (8) and Mac (6), renting in Orange County; standard deduction' },
  { label: '2026 tax on the baseline', value: '≈ $82,500: federal income tax $28,100 (after the $4,400 child tax credit and full 20% QBI deduction) + self-employment tax $34,600 + California income tax $16,600 + California LLC tax and fee $3,300' },
  { label: 'Marginal rate on Div profit', value: 'Roughly 30%: 22% federal (cut to ~17.6% by the QBI deduction) + 9.3% California + ~3.5% Medicare self-employment tax' },
];

export const keyNumbers2026: Assumption[] = [
  { label: 'Federal brackets (MFJ, taxable income)', value: '12% from $24,800 · 22% from $100,800 · 24% from $211,400 · 32% from $403,550' },
  { label: 'Standard deduction (MFJ)', value: 'Federal $32,200 · California $11,800' },
  { label: 'QBI deduction (Sec. 199A)', value: 'Full 20% below $403,500 taxable income (MFJ) — you are well below it, so the “consulting” limits do not bite' },
  { label: 'Child tax credit', value: '$2,200 per child' },
  { label: 'Social Security wage base', value: '$184,500 (12.4% stops above this; 2.9% Medicare does not)' },
  { label: 'Tips deduction (new, 2025–2028)', value: 'Up to $25,000 of reported tips for qualifying occupations, incl. hair stylists; phases out above $300,000 MAGI. Federal only — California does not conform' },
  { label: 'Retirement', value: '401(k) $24,500 deferral, $72,000 total with employer money · HSA family $8,750 (California taxes HSAs)' },
  { label: '30-year mortgage', value: '7.18% (Freddie Mac, Nov 5, 2026); investor/DSCR loans ~6.9–8%' },
];

export const strategies: Strategy[] = [
  {
    id: 'solo-401k',
    name: 'Solo 401(k) for Tim (and Rachael)',
    tier: 'Do now',
    annualSavings: '≈ $10,800',
    savingsNote: 'a year, putting $40K into Tim’s solo 401(k)',
    savingsBreakdown: [
      { label: 'Tim at the $72K max', amount: '≈ $19,400' },
      { label: 'Plus Rachael at $10K', amount: '+ $2,700' },
    ],
    effort: 'Low — open at Fidelity, Schwab or Vanguard (no fee) and fund from the business',
    deadline: 'Open the plan by Dec 31 to make 2026 employee deferrals; employer contributions can be made until the 2026 return is filed',
    summary:
      'The single best move at your income. As a sole proprietor Tim can contribute both as “employee” (up to $24,500) and as “employer” (up to 20% of net self-employment earnings), up to $72,000. Rachael can open her own for the salon.',
    math: [
      'Tim contributes $24,500 + $15,500 = $40,000: total tax falls from $82,520 to $71,760, a $10,760 saving (federal income tax –$7,040, California –$3,720).',
      'Maxing at $72,000 saves $19,370. Every dollar is still yours, invested.',
      'Rachael puts $10,000 of salon profit into her own solo 401(k): another $2,690.',
    ],
    watchOuts: [
      'A solo 401(k) is only allowed if Div has no eligible W-2 employees. If the staff are employees, use a small-business 401(k) that covers them instead.',
      'It defers tax rather than erasing it. A Roth deferral skips today’s deduction in exchange for tax-free withdrawals; at a 22% bracket that is worth weighing.',
      'Retirement contributions don’t reduce self-employment tax.',
    ],
    sources: [{ label: 'IRS 2026 plan limits (DLA Piper summary)', url: 'https://www.dlapiper.com/insights/publications/2025/11/irs-announces-2026-retirement-and-benefit-plan-limits-ssa-announces-cola-adjustment' }],
  },
  {
    id: 'kids',
    name: 'Put Zep and Mac on Div’s payroll',
    tier: 'Do now',
    annualSavings: '≈ $4,800',
    savingsNote: 'a year; more if it funds Roth IRAs for them',
    effort: 'Low–medium — real tasks, timesheets, market-rate pay, a W-2 for each',
    deadline: 'Wages must be for 2026 work and paid in 2026',
    summary:
      'While Div is an LLC taxed as a sole proprietorship, wages to your children under 18 are exempt from Social Security and Medicare. Div deducts the pay; each boy owes $0 tax on earnings below the $16,100 standard deduction. Their earnings can fund a Roth IRA (up to $7,500 or what they earned).',
    math: [
      'Pay each boy $8,000 ($16,000 total) for documented work, such as appearing in Div’s marketing photos/videos, simple content tasks, or office help.',
      'Household tax falls from $82,520 to $77,710: $4,810 saved. The boys owe $0 federal and $0 California.',
      'If Div later becomes an S-corp, their wages owe payroll tax and the saving drops to about $2,500. Paying them through Rachael’s salon (a sole proprietorship) keeps it payroll-tax-free.',
    ],
    watchOuts: [
      'At 6 and 8 the IRS will look hard at “reasonable pay for real work.” Keep pay modest, the work real and age-appropriate, and log every hour. The Tax Court has denied deductions for young children’s wages when the work wasn’t genuine.',
      'Pay has to actually go to them (for example, into an account in their name or a Roth IRA), not back to the household budget.',
    ],
    sources: [
      { label: 'Hiring your children (Kitces)', url: 'https://kitces.com/blog/tax-rules-hiring-children-family-business-flsa-tax-savings-standard-deduction-roth-contribution/' },
      { label: 'Gusto: tax benefits of hiring children', url: 'https://gusto.com/resources/articles/taxes/tax-benefits-hiring-children' },
    ],
  },
  {
    id: 'home-office',
    name: 'Home office deduction (yes, renters qualify)',
    tier: 'Do now',
    annualSavings: '≈ $2,300',
    savingsNote: 'a year',
    effort: 'Low — Form 8829 with the tax return; measure the room',
    deadline: 'Claimed on the 2026 return',
    summary:
      'You do not need to own your home. The business share of rent and utilities on a space used regularly and exclusively for Div is deductible, plus the business share of your phone.',
    math: [
      'Example: $5,500/month rent and the office is 10% of the home: $6,600 a year, plus ~$600 utilities and ~$600 phone = $7,800.',
      'Household tax falls from $82,520 to $80,180: $2,340 saved. That includes a little self-employment tax, because it lowers Div’s profit.',
    ],
    watchOuts: ['The space must be used only for business. A guest room that doubles as an office does not qualify.'],
    sources: [{ label: 'IRS Publication 587 (home office)', url: 'https://www.irs.gov/publications/p587' }],
  },
  {
    id: 'hsa',
    name: 'HSA with a high-deductible health plan',
    tier: 'Do now',
    annualSavings: '≈ $1,500',
    savingsNote: 'a year, federal only',
    effort: 'Low — pick an HSA-eligible plan at open enrollment',
    deadline: 'Open enrollment for 2027; contributions for 2026 allowed until April 15, 2027 if already HSA-eligible',
    summary:
      'Contributions are deductible, growth is tax-free, and withdrawals for medical costs are tax-free. It is a strong long-term account if the family is healthy enough for a high-deductible plan.',
    math: ['$8,750 family contribution: household tax falls by $1,540. California taxes HSAs, so the saving is federal only.'],
    watchOuts: ['Only worth it if a high-deductible plan suits the family’s health costs.'],
    sources: [{ label: '2026 HSA limits (PSCA)', url: 'https://www.psca.org/news/psca-news/2025/11/irs-announces-2026-401k-contribution-limits/' }],
  },
  {
    id: 'tips',
    name: 'Claim the new tips deduction for Rachael’s salon',
    tier: 'Do now',
    annualSavings: '≈ $1,050',
    savingsNote: 'on $6,000 of tips; scales with her tips',
    effort: 'Low — keep tips documented (card-processor reports, 1099-K, a tip log)',
    deadline: 'Claimed on the 2026 return; the deduction runs 2025–2028',
    summary:
      'The 2025 tax law lets workers in tipped occupations, including self-employed hair stylists, deduct up to $25,000 of reported tips. It phases out above $300,000 of joint income, and your baseline sits just under that line. The 401(k)s above help keep you below it.',
    math: [
      '$6,000 of reported tips: federal tax falls by $1,056. Already included in the baseline, so make sure your preparer claims it.',
      'Also check 2025: it applies for that year too.',
    ],
    watchOuts: [
      'Federal only; California does not conform. Payroll and self-employment taxes still apply to tips.',
      'Tips must be documented; cash tips need a contemporaneous log.',
    ],
    sources: [
      { label: 'Tips deduction for California service workers', url: 'https://www.countrytaxcalc.com/tax-guides/usa/no-tax-on-tips-california-2026/' },
      { label: 'Phase-out details', url: 'https://www.countrytaxcalc.com/tax-guides/usa/no-tax-on-tips-phase-out-2026/' },
    ],
  },
  {
    id: 'scorp',
    name: 'Elect S-corp status for Div Digital LLC',
    tier: 'Next year',
    annualSavings: '≈ $8,700',
    savingsNote: 'a year on its own',
    effort: 'Medium — Form 2553, payroll for Tim, a separate 1120-S return',
    deadline: 'File Form 2553 by March 15, 2027 to start with the 2027 tax year',
    summary:
      'Div keeps its LLC; it just elects to be taxed as an S-corp. Tim takes a reasonable salary (taxed for payroll) and the rest of the profit as distributions, which skip self-employment tax. At $270,000 of profit this is now clearly worth it.',
    math: [
      'Salary $110,000, the rest as distributions. Payroll and self-employment tax fall from $34,590 to $21,350.',
      'Offsets: a smaller QBI deduction (wages don’t count as QBI), California’s 1.5% S-corp tax replacing the LLC fee, 1.3% California SDI on the salary, and ~$2,700 for payroll and the extra return.',
      'Net: household tax falls from $82,520 to $73,810, a saving of $8,710 a year.',
      'Combined with the “Do now” package: about $30,100 a year saved, or $33,900 if the boys are paid through the salon instead of Div.',
    ],
    watchOuts: [
      'The salary must be reasonable for the work. Too low invites an audit, and it also caps 401(k) employer contributions (25% of salary).',
      'An S-corp ends the payroll-tax exemption for the boys’ wages from Div.',
    ],
    sources: [{ label: 'SSA 2026 wage base (APA)', url: 'https://blogs.payroll.org/pay-news-now/social-security-wage-base-increases-to-184500-for-2026' }],
  },
  {
    id: 'str',
    name: 'Real estate without owning your home: a short-term rental + cost segregation',
    tier: 'Situational',
    annualSavings: '≈ $18,500',
    savingsNote: 'in year one',
    savingsBreakdown: [
      { label: 'Cash in', amount: '≈ $102,500' },
      { label: 'Cash flow', amount: 'Likely negative' },
    ],
    effort: 'High — buy, furnish and self-manage a rental 100+ hours a year, keep an hours log',
    deadline: 'Only counts in the year the property is bought and listed for rent',
    summary:
      'Normally rental losses can’t offset business income. A short-term rental with average stays of 7 days or less escapes that rule if you materially participate, and a cost-segregation study plus 100% bonus depreciation (restored permanently in 2025) creates a large first-year paper loss. At your income it works, but it is a weaker tax play than the 401(k): buy it only if you want the property anyway.',
    math: [
      'Example: 66355 Coyote Valley Rd, Joshua Tree, a home on 2.27 acres listed at $350,000 that already runs as a short-term rental.',
      'Cash in: 25% down $87,500 + ~$10,000 closing + ~$5,000 cost-seg study = $102,500.',
      'Building value $280,000; cost segregation moves ~30% ($84,000) into first-year bonus depreciation. With assumed $40,000 bookings, the property runs about –$4,000 a year in cash at 7.5% interest.',
      'Year-one loss ≈ $97,000 federal (≈ $15,000 for California, which allows no bonus depreciation). Household tax falls from $82,520 to $64,050: $18,470.',
    ],
    watchOuts: [
      'Material participation is the whole game: 100+ hours and more than anyone else (cleaners count), or 500+ hours. Rachael’s hours count too.',
      'Bonus depreciation is recaptured when you sell, so this mostly defers tax.',
      'San Bernardino County permits for Joshua Tree must be confirmed before buying; Palm Springs caps permits by neighborhood.',
    ],
    sources: [
      { label: '66355 Coyote Valley Rd listing', url: 'https://www.landsearch.com/properties/66355-coyote-valley-rd-joshua-tree-ca-92252/5458650' },
      { label: 'STR loophole + cost seg guide', url: 'https://www.taxstra.com/real-estate-investors/short-term-rental-loophole' },
      { label: 'Freddie Mac rate, Nov 5, 2026 (WCAX/AP)', url: 'https://www.wcax.com/2026/11/05/average-us-30-year-mortgage-rate-falls-718-this-week-its-third-straight-decline/' },
    ],
  },
  {
    id: 'charity',
    name: 'New charitable deduction for non-itemizers',
    tier: 'Situational',
    annualSavings: '≈ $350',
    savingsNote: 'on $2,000 of cash gifts',
    effort: 'Low',
    deadline: 'Cash gifts to charities (not donor-advised funds) by Dec 31',
    summary: 'Starting in 2026, couples who take the standard deduction can still deduct up to $2,000 of cash gifts to charity.',
    math: ['$2,000 given: household tax falls by $352.'],
    watchOuts: ['Gifts to donor-advised funds don’t count for this deduction.'],
    sources: [{ label: '2026 charitable rule changes (CAPTRUST)', url: 'https://www.captrust.com/resources/obbba-charitable-rules-update-for-2026/' }],
  },
  {
    id: 'later',
    name: 'Worth revisiting as income grows',
    tier: 'Situational',
    annualSavings: '—',
    effort: '—',
    deadline: '—',
    summary: 'Not useful at $300,000, but these become valuable as Div grows.',
    math: [],
    watchOuts: [
      'Cash balance pension plan: allows six-figure deductible contributions, worth it once profit is reliably above ~$400K.',
      'California PTET: only helps when your state tax exceeds the SALT cap, which doesn’t happen while you take the standard deduction.',
      'R&D credit: possible if Div develops its own software or AI products (client-funded work usually doesn’t qualify).',
    ],
    sources: [{ label: 'SB 132 extends PTET to 2030 (BDO)', url: 'https://www.bdo.com/insights/tax/california-enacts-single-sales-factor-for-financial-institutions-and-extends-elective-ptet' }],
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
      'Syndicated conservation easements and micro-captive insurance: IRS listed transactions.',
      'The “Augusta rule” (renting your home to your business): leases normally bar subletting, so renters generally can’t use it.',
      'Passive real estate funds, syndications and REITs: their losses don’t offset Div’s income.',
      'Buying things just for the write-off (e.g. a heavy SUV): a deduction worth ~30 cents on the dollar is still a 70-cent cost.',
    ],
    sources: [{ label: 'IRS Notice 2017-10 (conservation easements)', url: 'https://www.irs.gov/irb/2017-04_IRB' }],
  },
];

export const strListings: Listing[] = [
  { address: '66355 Coyote Valley Rd, Joshua Tree', price: '$350,000', details: 'Home on 2.27 acres, currently operating as a short-term rental', url: 'https://www.landsearch.com/properties/66355-coyote-valley-rd-joshua-tree-ca-92252/5458650' },
  { address: '6888 Sunnyhill Rd, Joshua Tree', price: '$569,000', details: '4 bd / 3 ba dome home + ADU on 1.25 ac; furnished, permitted STR (listed Apr 2026)', url: 'https://www.weichert.com/134803360/' },
  { address: '61786 Desert Air Rd, Joshua Tree', price: '$625,000', details: 'Duplex with STR permit on the property (listed Feb 2026)', url: 'https://www.houzeo.com/homes/61786-desert-air-rd-joshua-tree-ca-92252/hzid_6fed3f87' },
];

export const neededFromTim: string[] = [
  'Is Div’s staff on W-2 payroll or paid as contractors? (Decides solo 401(k) vs. a plan covering staff.)',
  'Rachael’s actual salon profit and reported tips for 2025 and 2026.',
  'Div’s gross receipts (sets the California LLC fee) and whether Div is single-member or owned with Rachael.',
  'Your CPA’s name: everything here should be confirmed by a CPA or EA before acting.',
];

export const thisYearChecklist: string[] = [
  'By Dec 31: open solo 401(k)s for Tim and Rachael and make 2026 employee deferrals.',
  'By Dec 31: if hiring the boys, start timesheets now and pay 2026 wages for 2026 work.',
  'By Dec 31: give any planned charity in cash (up to $2,000 deductible without itemizing).',
  'With the 2026 return: claim the home office and Rachael’s tips deduction, and finish 401(k) employer contributions.',
  'By March 15, 2027: file Form 2553 if electing S-corp for 2027.',
];
