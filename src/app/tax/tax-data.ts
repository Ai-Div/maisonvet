// Tax strategy research for Tim / Div Digital. Researched 2026-11-11, re-based to a
// $300K household and to Div's actual S-corp status (IRS CP261, effective 2024-01-01)
// on 2026-11-11. Model: scripts/tax-model.py. Illustrative planning math only — not tax advice.
// Every savings figure is a full before/after recalculation of the baseline below
// (federal income tax, payroll and self-employment tax, California tax, CA S-corp tax and SDI),
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
  'Div has been taxed as an S-corp since January 1, 2024. On the $300K baseline, with Tim taking an assumed $110,000 salary, the household owes about $74,600 in 2026 taxes. The “Do now” package (both 401(k)s, the boys on the salon’s payroll, an accountable plan for the home office, an HSA and California’s PTET) cuts that by about $29,000 a year, to roughly $45,600. If the family’s health premiums aren’t already on Tim’s W-2, fixing that saves about $6,400 more.';

export const baseline: Assumption[] = [
  { label: 'Household income', value: '$300,000: Div Digital profit $270,000 before Tim’s salary + Rachael’s salon $30,000 (of which ~$6,000 is reported tips)' },
  { label: 'Entity', value: 'Div Digital LLC taxed as an S-corp since Jan 1, 2024 (IRS notice CP261). Tim assumed to be the only shareholder, on a $110,000 W-2 salary with the rest taken as distributions. Staff assumed to be contractors' },
  { label: 'Filing', value: 'Married filing jointly, Zep (8) and Mac (6), renting in Orange County; standard deduction' },
  { label: '2026 tax on the baseline', value: '≈ $74,600: federal income tax $32,400 (after the $4,400 child tax credit and full 20% QBI deduction) + payroll tax on Tim’s salary $17,100 + Rachael’s self-employment tax $4,200 + California income tax $17,100 + California 1.5% S-corp tax $2,300 + California SDI $1,400' },
  { label: 'Marginal rate on Div profit', value: 'Roughly 30%: 24% federal (cut to ~19% by the QBI deduction) + 9.3% California + 1.5% California S-corp tax. Distributions skip payroll tax; salary does not' },
];

export const keyNumbers2026: Assumption[] = [
  { label: 'Federal brackets (MFJ, taxable income)', value: '12% from $24,800 · 22% from $100,800 · 24% from $211,400 · 32% from $403,550' },
  { label: 'Standard deduction (MFJ)', value: 'Federal $32,200 · California $11,800' },
  { label: 'QBI deduction (Sec. 199A)', value: 'Full 20% below $403,500 taxable income (MFJ) — you are well below it, so the “consulting” limits do not bite' },
  { label: 'Child tax credit', value: '$2,200 per child' },
  { label: 'California S-corp taxes', value: '1.5% franchise tax on net income ($800 minimum) · optional 9.3% PTET, credited back against personal California tax · 1.3% SDI on salary' },
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
    annualSavings: '≈ $12,100',
    savingsNote: 'a year, putting $40K into Tim’s solo 401(k)',
    savingsBreakdown: [
      { label: 'Tim at the $52K max for his salary', amount: '≈ $15,600' },
      { label: 'Plus Rachael at $10K', amount: '+ $2,800' },
    ],
    effort: 'Low — Div opens the plan at Fidelity, Schwab or Vanguard (no fee); deferrals run through payroll',
    deadline: 'Tim’s 2026 deferrals must come out of 2026 paychecks, so the plan has to exist before the final December payroll. Div’s employer share can be paid until the 1120-S is filed',
    summary:
      'The single best move at your income. Because Div is an S-corp, Tim contributes from his W-2 salary: up to $24,500 as “employee”, plus up to 25% of his salary as Div’s “employer” contribution. On a $110,000 salary that caps out at $52,000. Rachael can open her own for the salon.',
    math: [
      'Tim defers $24,500 and Div adds $15,500 = $40,000: total tax falls from $74,620 to $62,480, a $12,150 saving (federal income tax –$8,190, California –$3,720, CA S-corp tax –$230).',
      'Maxing at $52,000 ($24,500 + 25% × $110,000) saves $15,550. Every dollar is still yours, invested.',
      'Reaching the $72,000 overall limit would need a $190,000 salary, and the extra payroll tax costs more than it saves.',
      'Rachael puts $10,000 of salon profit into her own solo 401(k): another $2,770.',
    ],
    watchOuts: [
      'A solo 401(k) is only allowed if Div has no eligible W-2 employees. If the staff are employees, use a small-business 401(k) that covers them instead.',
      'If Div already sponsors a plan, use it; don’t open a second one.',
      'It defers tax rather than erasing it. A Roth deferral skips today’s deduction in exchange for tax-free withdrawals; at a 24% bracket that is worth weighing.',
    ],
    sources: [{ label: 'IRS 2026 plan limits (DLA Piper summary)', url: 'https://www.dlapiper.com/insights/publications/2025/11/irs-announces-2026-retirement-and-benefit-plan-limits-ssa-announces-cola-adjustment' }],
  },
  {
    id: 'kids',
    name: 'Put Zep and Mac on the salon’s payroll',
    tier: 'Do now',
    annualSavings: '≈ $6,300',
    savingsNote: 'a year paid through the salon; more if it funds Roth IRAs for them',
    savingsBreakdown: [{ label: 'Paid through Div instead', amount: '≈ $2,100' }],
    effort: 'Low–medium — real tasks, timesheets, market-rate pay, a W-2 for each',
    deadline: 'Wages must be for 2026 work and paid in 2026',
    summary:
      'Wages a parent’s sole proprietorship pays to children under 18 are exempt from Social Security, Medicare and federal unemployment tax. Div is an S-corp, so that exemption doesn’t apply there, but Rachael’s salon is a sole proprietorship. The salon deducts the pay; each boy owes $0 tax on earnings below the $16,100 standard deduction. Their earnings can fund a Roth IRA (up to $7,500 or what they earned).',
    math: [
      'The salon pays each boy $8,000 ($16,000 total) for documented work, such as appearing in the salon’s social media photos and videos, folding towels, or restocking.',
      'Household tax falls from $74,620 to $68,290: $6,340 saved. That includes ~$2,260 of Rachael’s self-employment tax. The boys owe $0 federal and $0 California.',
      'The same $16,000 paid by Div saves only $2,120, because the S-corp owes payroll tax on the boys’ wages.',
    ],
    watchOuts: [
      'At 6 and 8 the IRS will look hard at “reasonable pay for real work.” Keep pay modest, the work real and age-appropriate, and log every hour. The Tax Court has denied deductions for young children’s wages when the work wasn’t genuine.',
      '$16,000 is over half of the salon’s assumed $30,000 profit. Size the pay to work the salon really needs.',
      'Pay has to actually go to them (for example, into an account in their name or a Roth IRA), not back to the household budget.',
    ],
    sources: [
      { label: 'Hiring your children (Kitces)', url: 'https://kitces.com/blog/tax-rules-hiring-children-family-business-flsa-tax-savings-standard-deduction-roth-contribution/' },
      { label: 'Gusto: tax benefits of hiring children', url: 'https://gusto.com/resources/articles/taxes/tax-benefits-hiring-children' },
    ],
  },
  {
    id: 'health',
    name: 'Run the family’s health premiums through Div’s payroll',
    tier: 'Do now',
    annualSavings: '≈ $6,900',
    savingsNote: 'a year, if not already done (on $24K of premiums)',
    effort: 'Low — Div pays or reimburses the premiums; payroll adds them to Tim’s W-2',
    deadline: 'Before the final 2026 payroll, so the premiums land on the 2026 W-2',
    summary:
      'An S-corp owner can only deduct the family’s health insurance if Div pays or reimburses the premiums and reports them on Tim’s W-2. Tim then deducts them on the 1040. They count as wages for income tax but not for payroll tax, so the net effect is a full deduction. Paid personally and kept off the W-2, they aren’t deductible at all.',
    math: [
      'Assumed $2,000/month for family coverage = $24,000 a year.',
      'Run through Div: household tax falls from $74,620 to $67,730, a $6,890 saving. On top of the full “Do now” package it adds about $6,400.',
      'If your CPA already does this, it’s in your current numbers and there’s nothing more to gain.',
    ],
    watchOuts: [
      'The premiums must be on the W-2 (Box 1, not Boxes 3 and 5), or the deduction is lost.',
      'Not available for any month Tim or Rachael could join an employer-subsidized plan.',
    ],
    sources: [{ label: 'IRS: S-corp shareholder health insurance', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/s-corporation-compensation-and-medical-insurance-issues' }],
  },
  {
    id: 'home-office',
    name: 'Home office through an accountable plan (yes, renters qualify)',
    tier: 'Do now',
    annualSavings: '≈ $2,300',
    savingsNote: 'a year',
    effort: 'Low — a one-page accountable-plan policy, a monthly expense report, and a reimbursement from Div',
    deadline: 'Adopt the plan and reimburse 2026 costs before year end',
    summary:
      'You do not need to own your home. Because Tim is an S-corp employee, he can’t deduct a home office on his own return. Instead, Div reimburses him under a written accountable plan for the business share of rent, utilities, phone and internet. Div deducts it and Tim receives it tax-free.',
    math: [
      'Example: $5,500/month rent and the office is 10% of the home: $6,600 a year, plus ~$600 utilities and ~$600 phone = $7,800.',
      'Household tax falls from $74,620 to $72,330: $2,290 saved.',
    ],
    watchOuts: [
      'The space must be used only for business. A guest room that doubles as an office does not qualify.',
      'Keep the measurements, rent and utility bills, and a monthly expense report Tim submits to Div.',
    ],
    sources: [
      { label: 'IRS Publication 587 (home office)', url: 'https://www.irs.gov/publications/p587' },
      { label: 'IRS Publication 463 (accountable plans)', url: 'https://www.irs.gov/publications/p463' },
    ],
  },
  {
    id: 'hsa',
    name: 'HSA with a high-deductible health plan',
    tier: 'Do now',
    annualSavings: '≈ $2,000',
    savingsNote: 'a year, federal only',
    effort: 'Low — pick an HSA-eligible plan at open enrollment',
    deadline: 'Open enrollment for 2027; contributions for 2026 allowed until April 15, 2027 if already HSA-eligible',
    summary:
      'Contributions are deductible, growth is tax-free, and withdrawals for medical costs are tax-free. It is a strong long-term account if the family is healthy enough for a high-deductible plan.',
    math: ['$8,750 family contribution: household tax falls by $2,000. California taxes HSAs, so the saving is federal only.'],
    watchOuts: [
      'Only worth it if a high-deductible plan suits the family’s health costs.',
      'If Div makes the contribution for Tim, it goes on his W-2 the same way as health premiums.',
    ],
    sources: [{ label: '2026 HSA limits (PSCA)', url: 'https://www.psca.org/news/psca-news/2025/11/irs-announces-2026-401k-contribution-limits/' }],
  },
  {
    id: 'ptet',
    name: 'Elect California’s pass-through entity tax (PTET)',
    tier: 'Do now',
    annualSavings: '≈ $2,400',
    savingsNote: 'a year on its own',
    savingsBreakdown: [
      { label: 'On top of the rest of the package', amount: '≈ $600' },
      { label: 'Plus credit carried to 2027', amount: '≈ $1,400' },
    ],
    effort: 'Low — Div pays 9.3% of its profit to California; your CPA elects on the 2026 Form 100S',
    deadline: 'Div must pay by Dec 31, 2026 to deduct it on the 2026 federal return. Elect on the 2026 return, filed by March 15, 2027 (Sept 15 on extension)',
    summary:
      'Div pays California tax on its profit itself, and you get the same amount back as a credit against your personal California tax. California comes out about even. The gain is federal: Div deducts the payment in full, which gets around the SALT cap and works even though you take the standard deduction. This option exists because Div is an S-corp; a single-member LLC can’t use it.',
    math: [
      'On the baseline: Div pays ~$14,100. Your California tax drops by the same amount, and federal tax falls by $2,550. Net saving ≈ $2,430.',
      'With the rest of the package in place, your California tax is smaller than the credit. You save about $570 now and carry ~$1,400 of credit to 2027 (it lasts five years).',
      'The June 15 prepayment was missed for 2026. Since 2026 that only trims the credit by 12.5% of the missed $1,000 ($125); it no longer voids the election.',
    ],
    watchOuts: [
      'Div needs the cash on hand to pay it by Dec 31.',
      'From 2027, pay the June 15 prepayment (the greater of $1,000 or half the prior year’s PTET) to keep the full credit.',
      'Ask the CPA whether PTET was already elected for 2024 or 2025.',
    ],
    sources: [
      { label: 'SB 132 extends PTET to 2030 (BDO)', url: 'https://www.bdo.com/insights/tax/california-enacts-single-sales-factor-for-financial-institutions-and-extends-elective-ptet' },
      { label: 'SB 132 prepayment changes (HCVT)', url: 'https://www.hcvt.com/alert-changes-california-pass-through-entity-tax' },
      { label: 'FTB: what’s new', url: 'https://www.ftb.ca.gov/forms/whats-new.html' },
    ],
  },
  {
    id: 'tips',
    name: 'Claim the new tips deduction for Rachael’s salon',
    tier: 'Do now',
    annualSavings: '≈ $1,400',
    savingsNote: 'on $6,000 of tips; scales with her tips',
    effort: 'Low — keep tips documented (card-processor reports, 1099-K, a tip log)',
    deadline: 'Claimed on the 2026 return; the deduction runs 2025–2028',
    summary:
      'The 2025 tax law lets workers in tipped occupations, including self-employed hair stylists, deduct up to $25,000 of reported tips. It phases out above $300,000 of joint income, and your baseline sits just under that line. The 401(k)s above help keep you below it.',
    math: [
      '$6,000 of reported tips: federal tax falls by $1,440. Already included in the baseline, so make sure your preparer claims it.',
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
    id: 'salary',
    name: 'Keep Tim’s S-corp salary reasonable, not minimal',
    tier: 'Situational',
    annualSavings: '≈ $3,500',
    savingsNote: 'per $20K of salary moved to distributions',
    savingsBreakdown: [
      { label: '$90K salary instead of $110K', amount: 'saves ≈ $3,500' },
      { label: '$130K salary instead of $110K', amount: 'costs ≈ $3,500' },
    ],
    effort: 'Low — set once a year with the CPA, documented with pay data for comparable roles',
    deadline: 'Set before the first 2027 payroll',
    summary:
      'Salary owes payroll tax and distributions don’t, so a lower salary saves tax. But the IRS can reclassify distributions as wages if the salary is unreasonably low, and the CP261 notice that accepted Div’s election says so. A lower salary also lowers Tim’s 401(k) ceiling (25% of salary).',
    math: [
      'Each $20,000 moved from salary to distributions saves about $3,520 (payroll tax and SDI saved, partly offset by more QBI-eligible but California-S-corp-taxed profit).',
      'At $90,000 the 401(k) ceiling drops from $52,000 to $47,000.',
    ],
    watchOuts: ['Don’t chase the last few thousand. A salary in line with what an agency would pay someone to run the business is the defensible number.'],
    sources: [{ label: 'IRS: S-corp reasonable compensation', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/s-corporation-compensation-and-medical-insurance-issues' }],
  },
  {
    id: 'str',
    name: 'Real estate without owning your home: a short-term rental + cost segregation',
    tier: 'Situational',
    annualSavings: '≈ $21,700',
    savingsNote: 'in year one',
    savingsBreakdown: [
      { label: 'Cash in', amount: '≈ $102,500' },
      { label: 'Cash flow', amount: 'Likely negative' },
    ],
    effort: 'High — buy, furnish and self-manage a rental 100+ hours a year, keep an hours log',
    deadline: 'Only counts in the year the property is bought and listed for rent',
    summary:
      'Normally rental losses can’t offset business income. A short-term rental with average stays of 7 days or less escapes that rule if you materially participate, and a cost-segregation study plus 100% bonus depreciation (restored permanently in 2025) creates a large first-year paper loss. At your income it works, but per dollar of cash it is a weaker tax play than the 401(k): buy it only if you want the property anyway.',
    math: [
      'Example: 66355 Coyote Valley Rd, Joshua Tree, a home on 2.27 acres listed at $350,000 that already runs as a short-term rental.',
      'Cash in: 25% down $87,500 + ~$10,000 closing + ~$5,000 cost-seg study = $102,500.',
      'Building value $280,000; cost segregation moves ~30% ($84,000) into first-year bonus depreciation. With assumed $40,000 bookings, the property runs about –$4,000 a year in cash at 7.5% interest.',
      'Year-one loss ≈ $97,000 federal (≈ $15,000 for California, which allows no bonus depreciation). Household tax falls from $74,620 to $52,920: $21,700.',
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
    annualSavings: '≈ $480',
    savingsNote: 'on $2,000 of cash gifts',
    effort: 'Low',
    deadline: 'Cash gifts to charities (not donor-advised funds) by Dec 31',
    summary: 'Starting in 2026, couples who take the standard deduction can still deduct up to $2,000 of cash gifts to charity.',
    math: ['$2,000 given: household tax falls by $480.'],
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
      'R&D credit: possible if Div develops its own software or AI products (client-funded work usually doesn’t qualify).',
    ],
    sources: [{ label: 'IRS: defined benefit plans', url: 'https://www.irs.gov/retirement-plans/defined-benefit-plan' }],
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
  'Tim’s actual 2026 salary from Div, and whether Tim is Div’s only shareholder or owns it with Rachael.',
  'Does Div already pay the family’s health premiums and report them on Tim’s W-2? Does Div already sponsor a 401(k)?',
  'Was California PTET elected for 2024 or 2025?',
  'Is Div’s staff on W-2 payroll or paid as contractors? (Decides solo 401(k) vs. a plan covering staff.)',
  'Rachael’s actual salon profit and reported tips for 2025 and 2026.',
  'Your CPA’s name: everything here should be confirmed by a CPA or EA before acting.',
];

export const thisYearChecklist: string[] = [
  'Before the final December payroll: open Div’s solo 401(k) and run Tim’s 2026 deferrals through payroll; tell the payroll provider to add any Div-paid health premiums to Tim’s W-2.',
  'By Dec 31: Rachael opens her solo 401(k) and makes her 2026 deferrals.',
  'By Dec 31: Div pays the 2026 California PTET (about 9.3% of its profit), so it counts on the 2026 federal return.',
  'By Dec 31: adopt a written accountable plan and have Div reimburse Tim’s 2026 home-office, phone and internet costs.',
  'By Dec 31: if hiring the boys, have the salon start timesheets now and pay 2026 wages for 2026 work.',
  'By Dec 31: give any planned charity in cash (up to $2,000 deductible without itemizing).',
  'By March 15, 2027: file Div’s 1120-S and Form 100S with the PTET election, fund Div’s 401(k) employer share, and keep Tim’s stock-basis record current (the CP261 notice asks for it). Claim Rachael’s tips deduction on the 1040.',
];
