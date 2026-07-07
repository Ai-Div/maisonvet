export interface ActionItem {
  task: string;
  completed: boolean;
}

export interface RegulatoryItem {
  title: string;
  description: string;
}

export interface FinancialItem {
  title: string;
  description: string;
}

export interface RoadmapItem {
  phase: string;
  goal: string;
  date: string;
}

export interface ResearchContent {
  actionItems: ActionItem[];
  regulatory: RegulatoryItem[];
  financial: FinancialItem[];
  roadmap: RoadmapItem[];
  neededFromTim: string[];
}

export const researchData: ResearchContent = {
  actionItems: [
    { task: "URGENT: The July 4, 2026 solar ITC safe-harbor deadline has now passed with no confirmation received that a Fallbrook-area installer contract + 5% deposit (~$14,000) was executed. Confirm status immediately. If unsigned, the $84,000 ITC is likely forfeited and the campus capitalization needs $84,000 in replacement equity or debt.", completed: false },
    { task: "Perform zoning verification and environmental/fire assessment for 3728 Pala Rd (10.0 acres, $795k) in Fallbrook.", completed: false },
    { task: "Perform zoning and easement verification for 25 El Camino Real (2.19 acres, $1.3M) in Carlsbad.", completed: false },
    { task: "Perform zoning verification and equestrian compatibility analysis for 12516 Montanya Dr (12.73 acres, $799k) in Valley Center.", completed: false },
    { task: "Perform zoning verification and environmental/fire assessment for 962 Rice Canyon Rd (60.24 acres, $1.3M) Fallbrook.", completed: false },
    { task: "Perform zoning verification for 26413 N Lake Wohlford Rd (22.0 acres) and evaluate cottage renovation for staff housing or initial ops.", completed: true },
    { task: "Evaluate 6465 Rainbow Heights Rd #2 (41.18 acres) for water well flow-rate capacity and private road emergency access.", completed: true },
    { task: "Verify zoning compatibility and gate restrictions for Parcel 3 & 4 Emerald Hill Rd (10.01 acres) in Bonsall.", completed: true },
    { task: "Perform agricultural tax audit and farm income modeling for 10438 Couser (35.7 acres) seed avocado farm.", completed: true },
    { task: "Perform zoning verification for 14905 Calle Privada (2.37 acres, $1.75M) and evaluate for high-end clinic infrastructure in RSF.", completed: true },
    { task: "Perform zoning verification for Via Alicia (10.05 acres, $725k) and evaluate for clinic infrastructure in Bonsall.", completed: true },
    { task: "Perform zoning verification for 0 Adams Street (13.8 acres, $1.94M) and evaluate for high-end clinic infrastructure in Carlsbad.", completed: true },
    { task: "Perform zoning verification for Double Canyon Rd (44.51 acres, $475k) and evaluate for legacy compound feasibility.", completed: true },
    { task: "Perform zoning verification for 30270 Lagunita Ln (10.82 acres, $1.74M) and evaluate for high-end clinic infrastructure.", completed: false },
    { task: "Perform zoning verification for 121 Avo Dr (25.5 acres, $888k) and evaluate for clinic site suitability.", completed: false },
    { task: "URGENT: Email cdfa_aus@cdfa.ca.gov — 5-sentence introduction requesting early guidance on nominating Fallbrook/North SD County for a FY2027 veterinary shortage designation. California's nomination window opens Fall 2026; CDFA recommends prospective nominees contact them before mid-November. Unlocks VMLRP (up to $166,800 for Emily) + VSGP-RPE grant ($200,000 equipment) — $366,800 in non-dilutive funding.", completed: false },
    { task: "Evaluate Valley Center 15.89-acre listing for CropSWAP feasibility and 'Sovereign Compound' infrastructure fit.", completed: true },
    { task: "Perform zoning verification for 31675 Rancho Amigos Rd (19.28 acres, $650k) and evaluate 'Change of Use' or 'Agricultural Exemption' for clinic structure.", completed: false },
    { task: "Instruct CPA/Founders to model a 'Cost Segregation' study for the property acquisition to maximize the new 100% Bonus Depreciation rules.", completed: false },
    { task: "Apply for EmpowHer Grant (up to $50k) for female-led businesses with social impact.", completed: false },
    { task: "Audit clinic SOPs for compliance with new CCR 2036.5 drug compounding standards (Effective April 1).", completed: false },
    { task: "Perform zoning verification for 29133 Sandy Hill Dr (16.86 acres) and 18868 Paradise Mountain Rd (10.09 acres).", completed: true },
    { task: "Verify Fallbrook/Pauma 2026 USDA Veterinary Shortage designation and prepare VSGP-RPE grant intake form ($200k potential).", completed: true },
    { task: "Perform zoning verification for 0 Jubilee Dr (36.6 acres) and 17912 El Brazo (2.68 acres).", completed: false },
    { task: "Perform zoning verification for 49 Maridge Rd (20.54 acres) and request CalWATRS PIN.", completed: true },
    { task: "Coordinate portfolio rebalance for $CEG ex-dividend capture (May 15).", completed: false },
    { task: "Review current formation docs and Emily's licensing prep against the 2026 Veterinary Medicine Practice Act (published April 6).", completed: false },
    { task: "Cross-reference the current Bylaws draft against the updated disciplinary reporting and electronic license verification mandates in the April 2026 Veterinary Medicine Practice Act.", completed: false },
    { task: "Calculate FTE-based premises fee for Year 1 budget based on AB 1502.", completed: true },
    { task: "Draft 'Green Infrastructure' section for BMO pitch.", completed: false },
    { task: "Perform zoning verification for top 3 property candidates.", completed: false },
    { task: "Finalize corporate name choice (3 options required for CA SOS filing).", completed: false },
    { task: "Designate Agent for Service of Process (physical CA address required).", completed: false },
    { task: "Evaluate 18.7-acre Adams Dr parcel ($599k) for water/zoning fit.", completed: false },
    { task: "Finalize Emily Gray's corporate titles (CEO/President vs. Secretary).", completed: false },
    { task: "Review Articles of Incorporation (Form ARTS-PC) draft (pending).", completed: false },
    { task: "Water rights investigation for Pauma Ridge Rd property.", completed: false },
    { task: "Perform zoning verification for Gomez Creek Rd and El Brazo #76 (Price drop alert).", completed: false },
    { task: "Perform zoning verification for 0 Mt Olympus Valley Rd (46.64 acres, $419k).", completed: false },
    { task: "Perform zoning verification for Via Alicia, Bonsall (10.05 acres, $725k) and evaluate for clinic infrastructure.", completed: true },
    { task: "Dismissed 6494 Friendly Place (55+ community house, inaccurate acreage reporting in initial search).", completed: true },
    { task: "Investigate 'Change of Use' permit requirements for medical office conversions in Laguna Beach.", completed: false },
    { task: "Contact a North County commercial real estate broker (medical/retail specialist) to search for: (1) leasable clinic space in Fallbrook, Valley Center, or Bonsall; (2) any retiring-vet practice transitions in those markets. A built-out veterinary space cuts Phase 1 tenant improvement budget by 50-80%.", completed: false },
    { task: "Emily: estimate current patient household count at existing practice and realistic follow rate to a new North SD County location. This is the single number that determines lean-launch Year 1 revenue and how much working capital is needed.", completed: false },
    { task: "Model correction needed: the published Clinic 10-Year Model shows Rachael Gray LLC Year 1 compensation at $95,000 — $5,000 below the non-negotiable $100,000 Year 1 floor. Re-run the labor, EBITDA, tax, and DSCR cascade with her Year 1 base at $100,000 (3% annual growth thereafter) before the model is distributed again.", completed: false },
    { task: "Decision deadline: absent a reply on the Path A vs. Path B launch structure by July 14, 2026, proceed on the standing recommendation (Lean Launch first, campus second) and begin Fallbrook broker outreach using placeholder follow-rate assumptions rather than waiting further.", completed: false },
  ],
  regulatory: [
    {
      title: "Regional CropSWAP Program Eligibility Guidelines (June 4, 2026)",
      description: "CropSWAP (Sustainable Water for Agricultural Production) guidelines require a minimum of one irrigated acre, pre- and post-inspections, and active/operational irrigation systems. Replaced crops must be transitioned block-by-block. Reimbursements are capped at $50,000 per applicant per 12-month period, which can be optimized via phased multi-year transition plans."
    },
    {
      title: "VMB Tiered Premises Registration (June 2, 2026)",
      description: "Under the newly implemented AB 1502 regulations, CA veterinary premises registration is now tiered based on Full-Time Equivalent (FTE) veterinarians. Small premises (up to 3 FTEs) are capped at $840 initial / $910 renewal. Maison Vet is starting as a small premises (1 FTE)."
    },
    {
      title: "Valley Center Veterinary Permitting (May 25, 2026)",
      description: "Under San Diego County Zoning for A70/S92 land, establishing a veterinary facility requires a Minor Use Permit (MUP) or Administrative Permit. Active fire infrastructure on site drastically simplifies the fire safety portion of this permitting process."
    },
    {
      title: "CA Corporate Name Requirement (BPC § 4853)",
      description: "A Professional Corporation name must contain 'Veterinary Corporation', 'Veterinary Medical Corporation', 'Animal Hospital', or the primary shareholder's surname. This is required for filing Articles of Incorporation."
    },
    {
      title: "Veterinary Drug Compounding (CCR 2036.5)",
      description: "Effective April 1, 2026. New state mandates for handling, packaging, and record-keeping of compounded drugs. Facility design must include dedicated, clean compounding areas and specific labeling/SOPs."
    },
    {
      title: "Minimum Standards for Alternate Veterinary Premises (CCR 2030)",
      description: "Effective January 1, 2026. Defines standards for non-traditional clinic settings such as mobile clinics and house-call services, ensuring minimum safety and hygiene requirements."
    },
    {
      title: "SGIP Equity Resiliency Program (Budget Closed)",
      description: "As of May 2026, the SGIP Equity Resiliency budget is officially closed. No new applications are being accepted. Veterinary clinics are not currently defined as 'Critical Facilities' by the CPUC, though designation as an emergency animal shelter could be a future pathway if the program reopens."
    },
    {
      title: "SB 602 (CA BPC 4826.7)",
      description: "Tech-led wellness tracks authorized for mobile/house calls. General vicinity/telephone supervision now sufficient for RVTs."
    },
    {
      title: "AB 1502 (VMB Extension & Fee Restructure)",
      description: "VMB authority extended to 2030. Premises registration fees are now tiered based on Full-Time Equivalent (FTE) veterinarians rather than a flat rate. At least one board member must now represent Equine/Livestock care."
    },
    {
      title: "Permanent 100% Bonus Depreciation (2026)",
      description: "The 'One Big Beautiful Bill Act' (OBBBA) has permanently reinstated 100% Bonus Depreciation for 2026. This allows for the immediate write-off of 100% of qualifying equipment and clinical technology in Year 1, significantly improving cash flow."
    },
    {
      title: "Increased Section 179 Limits (2026)",
      description: "Section 179 deduction limits have increased to $2.56 million with a phase-out threshold of $4.09 million. Ideal for high-cost medical equipment and modular clinic assets."
    },
    {
      title: "Initial Registration & CURES Fee Update",
      description: "Initial premises registration fee confirmed at $500 for 2026. CURES fee increase effective Jan 2026; budget for higher per-DVM overhead."
    },
    {
      title: "VMB Tiered Premises Fees (AB 1502)",
      description: "Effective 2026, premises registration fees are now tiered based on Full-Time Equivalent (FTE) veterinarians. This replaces the old flat-rate system and requires precise FTE reporting during the annual renewal process."
    },
    {
      title: "2026 Edition – Veterinary Medicine Practice Act",
      description: "Published April 6, 2026. Contains new electronic license verification protocols and updated disciplinary reporting mandates under AB 1502. Critical for initial licensure applications."
    },
    {
      title: "VMB Unlicensed Practice Oversight (AB 1502)",
      description: "The 2026 update to the Practice Act increases VMB oversight on veterinary corporations. Ensuring the 'Professional Corporation' (PC) is formed strictly with a licensed DVM as the primary shareholder is critical to avoid 'unlicensed practice' penalties."
    },
  ],
  financial: [
    {
      title: "Model Correction Needed: Rachael's Year 1 Pay Falls Below the Floor (July 7, 2026)",
      description: "The published Clinic 10-Year Model lists Rachael Gray LLC — Operations at $95,000 in Year 1, $5,000 below the non-negotiable $100,000 Year 1 floor, despite running notes from June 23 marking this as 'corrected.' It was not carried into the model. Fix: set Rachael's Year 1 base to $100,000 with the same 3% annual growth used elsewhere (Y2 $103,000 ... Y10 $130,477 vs. the current $97,850 ... $123,953 path). Impact is modest and does not threaten the covenant: Total Labor rises by $5,000 in Year 1, growing to about $6,500 by Year 10; EBITDA and DSCR each move down by roughly 1.5-2%, so the Year 5 DSCR estimate softens from 1.33x to about 1.31x — still comfortably above the 1.25x lender threshold. This needs to be corrected in the source model before the next distribution."
    },
    {
      title: "Solar ITC Deadline Passed Without Confirmation (July 7, 2026)",
      description: "The July 4, 2026 construction-start safe-harbor deadline for the 30% federal Solar ITC has now passed. No reply confirming a signed installer contract or the ~$14,000 deposit has been received in the three weeks since this was first flagged (June 30). Two scenarios: (1) if the contract and deposit were executed before July 4, the $84,000 credit is preserved and this closes out; (2) if not, the credit is very likely forfeited, and the campus Sources of Funds needs an $84,000 patch — either owner equity rising from $650,000 to $734,000, or debt rising from $2,443,000 to roughly $2,527,000 (adding an estimated $8,100/yr in debt service at the C-PACE energy-tranche rate, which would nudge Year 5 DSCR from about 1.33x to 1.29x — still clears 1.25x). Status needs confirming immediately either way."
    },
    {
      title: "Cost of an Unanswered Decision (July 7, 2026)",
      description: "Three consecutive weekly updates (June 24, June 30, July 7) have gone to hello@maisonvet.com proposing the Lean Launch (Path B) sequencing, asking Emily for a patient follow-rate estimate, and flagging the solar deadline — with no reply on any of the three. Decision paralysis, not capital or location, is now the binding constraint on the Q1 2027 clinic-open target. A default decision date (July 14, 2026) has been set: absent a reply, the plan proceeds on the standing recommendation and broker outreach begins on placeholder assumptions so the timeline does not keep slipping."
    },
    {
      title: "Solar ITC Construction-Start Safe Harbor — 4-Day Window (June 30, 2026)",
      description: "The 30% federal Solar Investment Tax Credit (Section 48E) requires 'beginning of construction' by July 4, 2026 to lock in the full credit. Under IRS Notice 2013-29 and subsequent safe-harbor guidance, paying 5% or more of the total project cost to a licensed installer before the deadline constitutes a qualifying start — actual installation can follow years later (continuity safe harbor extends through end of 4th calendar year after start). The campus energy package (75kW solar + 300kWh battery) totals $280,000; 5% = $14,000. A signed installer contract + $14,000 deposit before July 4 preserves the $84,000 ITC. Missing this window requires $84,000 in additional equity or debt to keep the capitalization model whole."
    },
    {
      title: "VMLRP Award Structure Confirmed — Up to $166,800 for Emily (June 23, 2026)",
      description: "The USDA Veterinary Medicine Loan Repayment Program (VMLRP) FY 2026 cycle confirmed its full award structure: $40,000 per year for three years ($120,000 total) in direct student loan repayment, plus a 39% tax-assistance payment of approximately $46,800. Emily could personally receive up to $166,800 — entirely separate from any clinic operating grant. Eligibility requires the clinic to operate in a federally designated veterinary shortage area. California's window to nominate new shortage areas for FY 2027 opens in Fall 2026, and CDFA AUS recommends prospective nominees make contact before mid-November. USDA expanded VMLRP funding to $18 million for FY 2026 (up $8M from prior year), indicating strong congressional support. Combined with the VSGP Rural Practice Enhancement grant ($200,000), a successful designation could deliver up to $366,800 in non-dilutive funding. The single highest-leverage free action available today is emailing cdfa_aus@cdfa.ca.gov to initiate early guidance."
    },
    {
      title: "Property Inventory Check and Carlsbad & Fallbrook Additions (June 11, 2026)",
      description: "Weekly property check: Verified all 19 existing properties are active. 0 Crest Dr (Encinitas, CA 92024) experienced a price increase back to $1,995,000 (from $1,695,000). Added two outstanding new active land listings: 3728 Pala Rd ($795,000, 10.0 acres, Fallbrook, CA 92028) and 25 El Camino Real ($1,300,000, 2.19 acres, Carlsbad, CA 92009) as highly qualified candidates in high priority tiers. Carlsbad acreage meets the reduced 2+ acres threshold. Total properties in the portfolio grew from 19 to 21, and strict price-sorted order was successfully maintained."
    },
    {
      title: "Property Inventory Check and Montanya Drive Addition (June 9, 2026)",
      description: "Weekly property check: Removed Sold/Off-Market property (De Luz Murrieta Road). Added 12516 Montanya Dr ($799,000, 12.73 acres, zoned for agricultural/equestrian use) as a strong active candidate in Valley Center. Rest of the portfolio remains active with no price changes. Price-sorted order maintained across all 19 properties."
    },
    {
      title: "CropSWAP Integration and Malek Lane Acquisition Feasibility (June 4, 2026)",
      description: "Identified the 15.89-acre Malek Lane property ($649,000) as a prime candidate for the Regional CropSWAP program. Under Valley Center Municipal Water District, converting its 1,100 avocado trees to lower-water wine grapes or managed citrus can yield up to $22,500 per acre in reimbursements, capped at $50,000 per applicant annually. The property's 3 legal parcels also simplify the required legal separation between the Veterinary Professional Corporation and the Land Holding Trust."
    },
    {
      title: "Inventory Check & Price Revisions (June 4, 2026)",
      description: "Weekly property check: 0 Pauma Heights Lot 9 price dropped significantly to $265,000 (from $319,000). 49 Maridge Rd price returned to $195,000 (from previous drop to $149k). 6465 Rainbow Heights #2 price increased to $495,000 (from $375k). 0 Santa Virginia Dr removed as off market. Added 12121 Mira Grande Ln ($575k, 26.89 acres, 5 parcels) and Double Canyon Rd ($475k, 44.51 acres)."
    },    {
      title: "Rice Canyon Land Acquisition Discovery (June 2, 2026)",
      description: "Discovered an exceptional 60.24-acre property at 962 Rice Canyon Rd, Fallbrook listed for $1,300,000 (Short Sale). Zoned A70 Agricultural. It features a private lake/reservoir for water storage and fire suppression, two active wells, two 2\" water meters, 3-phase power, on-site utilities, and pre-existing solar preparation."
    },
    {
      title: "Property Portfolio Expansion & Price Realignment (June 2, 2026)",
      description: "Conducted weekly search check: Added 5 highly qualified new listings (6465 Rainbow Heights Rd #2, Via Alicia, 26413 N Lake Wohlford Rd, Parcel 3 & 4 Emerald Hill Rd, and 10438 Couser Way) expanding the portfolio to 18 properties. Successfully updated price and size details across 5 existing listings, including significant price drops for 0 Cristo Rey ($150,000) and 0 Crest Dr ($1,695,000), a price drop for Lot 9 Pauma Heights ($319,000), and size/price adjustments for 5470 La Crescenta (now 5.68 acres at $1,999,900)."
    },
    {
      title: "USDA VSGP-RPE Grant & Shortage Verification (May 27, 2026)",
      description: "Successfully verified the 2026 USDA Veterinary Services Grant Program (VSGP) guidelines for Rural Practice Enhancement (RPE). Prepared the intake draft for a $200,000 equipment and operational expansion grant. Confirmed that nominating the Fallbrook/Pauma Valley service area under California CDFA's Fall 2026 cycle is a high-probability win that matches our agricultural-medical integration model."
    },
    {
      title: "Active Properties Verification & Price Sorting Optimization (May 27, 2026)",
      description: "Successfully verified all 13 active, qualified property candidates in the search portfolio. Corrected a price-sorting issue to place 49 Maridge Rd ($149,000) at the top, ensuring a strict lowest-to-highest price-sorted order across the entire properties list. Synced all templates to guarantee the live site correctly renders the new inventory and integrated financial outlook modules."
    },
    {
      title: "Property Inventory and Price Updates (May 26, 2026)",
      description: "Conducted weekly search check: 49 Maridge Rd (20.54 acres) price dropped significantly to $149,000 (23.6% reduction). Double Canyon Rd, 18868 Paradise Mountain Rd, and 12121 Mira Grande Ln were confirmed sold or off-market and removed from the active search page. The search portfolio currently has 13 active, qualified property candidates."
    },
    {
      title: "Lake Wohlford Development Shortcut (May 25, 2026)",
      description: "Detailed feasibility analysis of the 22.0-acre Lake Wohlford Road property indicates the active fire hydrant and approved septic system will reduce soft-development costs by approximately $75,000 and eliminate up to 12 months of standard environmental reviews. The existing 1BR/1BA cottage serves as an ideal Phase 1 project management office and eventual staff housing expense."
    },
    {
      title: "New Bonsall/Fallbrook/Valley Center Listings (May 24, 2026)",
      description: "Four outstanding new listings added to properties page: 6465 Rainbow Heights Rd #2 ($375k, 41.18 acres, on-site active water well), 26413 N Lake Wohlford Rd ($799k, 22.0 acres, includes 1BR/1BA cottage, fire hydrant, approved septic), Parcel 3 & 4 Emerald Hill Rd ($1,074,000, 10.01 acres, gated road access), and 10438 Couser ($1.6M, 35.7 acres, income-producing seed avocado farm). All present strong layout flexibility for compound development."
    },
    {
      title: "Market Inventory Check & Budget Exceedance (May 24, 2026)",
      description: "0 Adams Street (Carlsbad) has seen a dramatic price adjustment to $2,699,900, which exceeds our $2.2M budget ceiling, prompting its immediate removal. 14905 Calle Privada (Rancho Santa Fe) saw its price increase to $1,950,000 (+11.4%), though it remains within our budget. Gated RSF/Bonsall inventory continues to demonstrate solid demand."
    },
    {
      title: "Market Inventory Reset (May 21, 2026)",
      description: "Significant inventory sweep: 15 active land listings in North County (Valley Center, Bonsall, Fallbrook) confirmed Sold or Off-Market this week, including key value plays like Double Canyon Rd and Sandy Hill Dr. Inventory under $500k for 10+ acre parcels is tightening rapidly."
    },
    {
      title: "Bonsall/Olivenhain Border Play (May 19, 2026)",
      description: "10.82-acre prime residential parcel (30270 Lagunita Ln) identified at $1,749,900. Bordering Encinitas in the prestigious Olivenhain Ranch area. Features panoramic views and high-income demographics. Significant carrying cost ($10k/mo PITI) but maximum prestige for a flagship compound."
    },
    {
      title: "Inventory Check & Price Cuts (May 19, 2026)",
      description: "Significant price reduction for Pauma Heights Rd Lot 9 (Valley Center) down to $319,000 (-15%). Conversely, Punta Del Sur (Rancho Santa Fe) increased to $1,199,000 (+9%), indicating steady demand in Tier 1 gated enclaves."
    },
    {
      title: "Pauma Valley Utility-Ready Land (May 18, 2026)",
      description: "13.90-acre property in Pauma Valley identified. Features two distinct building sites with views. Significantly, it has a water meter in place and power at the property frontage, reducing development lead time."
    },
    {
      title: "Fallbrook Mountaintop Opportunity (May 18, 2026)",
      description: "25.51-acre mountaintop retreat (121 Avo Dr) identified at $888,000. Features stunning panoramic views and scale suitable for a full compound. High investigation priority for utility proximity and access road conditions."
    },
    {
      title: "Low-Cost Scale Entry (May 18, 2026)",
      description: "16.8-acre parcel (0 Rainbow Heights Rd) identified at $350,000 in Fallbrook. Offers exceptional value for 10+ acres in a secluded, naturally beautiful area."
    },
    {
      title: "Rancho Santa Fe Opportunity (May 16, 2026)",
      description: "2.37-acre lot (14905 Calle Privada) identified at $1,750,000. Located in Tier 1 with utilities (water, sewer, power) ready at site. Proposed modern home design included. High investigation priority for specialized luxury clinic fit in RSF context."
    },
    {
      title: "CDFA Early Interest List (May 15, 2026)",
      description: "The California Department of Food and Agriculture is currently accepting early interest for 2027 Veterinary Shortage Area nominations. Securing this designation for Northern San Diego County would unlock state grants and student debt relief for the DVM founder."
    },
    {
      title: "BMO Physician Mortgage for DVMs",
      description: "BMO offers a Physician Mortgage Program that includes Doctors of Veterinary Medicine, allowing up to 100% financing on loans up to $1 million with no PMI. This can preserve personal capital for clinic operations while securing founder housing."
    },
    {
      title: "Bonsall Value Entry (May 15, 2026)",
      description: "10.05-acre buildable lot (Via Alicia) identified at $725,000. Located in a high-priority Tier 5 zone with excellent rural character. Ideal for a private compound or specialized clinic project."
    },
    {
      title: "Valley Center 15.89-acre contiguous play (May 14, 2026)",
      description: "Three contiguous parcels totaling 15.89 acres in Valley Center identified. Features 1,100 avocado trees and 150 navel orange trees. Candidate for 'CropSWAP' transition funding ($22,500/acre incentive)."
    },
    {
      title: "Bonsall Strong Candidate (May 14, 2026)",
      description: "19.28-acre avocado grove (31675 Rancho Amigos Rd) identified at $650,000. Features income-producing Haas avocados on gently sloping terrain. Strong candidate for clinic + compound in Tier 5."
    },
    {
      title: "EmpowHer Grant (May 2026)",
      description: "Boundless Futures Foundation is offering grants up to $50,000 for female-led businesses with a social impact. A sustainable veterinary clinic in a rural/underserved area fits the eligibility profile well."
    },
    {
      title: "New Tier 6 Listing (May 2026)",
      description: "16.86-acre parcel (29133 Sandy Hill Dr) identified at $199,900 ($11.8k/acre) in Valley Center. High-priority scale candidate."
    },
    {
      title: "Pet Lover's Spay and Neuter Grant (2026/2027)",
      description: "The CDFA is awarding $500,000 for spay/neuter projects (June 2026 – May 2027). Individual grants range from $25,000 to $50,000. Registration with the Veterinary Medical Board is a prerequisite for eligibility."
    },
    {
      title: "Paradise Mountain Alert (May 2026)",
      description: "18868 Paradise Mountain Rd (10.09 acres) active at $447,000 (+2% from $437k). Features graded pad and panoramic views."
    },
    {
      title: "USDA VSGP-RPE Grant (2026)",
      description: "USDA NIFA has increased Rural Practice Enhancement (RPE) grant funding to $200,000 for FY 2026. This funding is specifically for veterinary practices in designated shortage areas to help with equipment, mobile clinics, and operational expansion. Fallbrook and Pauma Valley are high-probability candidates for these designations."
    },
    {
      title: "RSF Market Reset (May 2026)",
      description: "Tier 1 candidate (El Brazo #76) price increased to $1,599,000, signaling a tightening of high-end land inventory in Cielo."
    },
    {
      title: "Fallbrook Scale Alert (May 2026)",
      description: "46.64-acre parcel (Mt Olympus Valley Rd) identified at $419,900, providing massive scale in Tier 4. 36.6-acre Jubilee Dr also active at $1.2M."
    },
    {
      title: "Inventory Reset (May 14, 2026)",
      description: "Significant price adjustments: 14097 Pauma Vista Dr reduced to $395,000; 0 Mt Ararat Way #21 reduced to $649,900. Bonsall (Rancho Amigos Rd) emerges as a top-tier value play at $33k/acre."
    },
    {
      title: "Inventory Reset (May 10, 2026)",
      description: "Significant price adjustments: Muutama Rd reduced to $285,000; Pauma Heights Rd Lot 9 reduced to $339,000. Conversely, Green Valley Rd increased to $360,000 and Mt Olympus Valley Rd adjusted to $375,000. RSF Cielo inventory remains tight."
    },
    {
      title: "Constellation Energy ($CEG) Ex-Dividend (May 15, 2026)",
      description: "Ex-dividend date for $0.43/share payout. Rebalance liquid holdings to capture cash flow for the 'AI Backbone' stack."
    },
    {
      title: "Double Canyon Scale Play (May 20, 2026)",
      description: "44.51-acre parcel (Double Canyon Rd, Valley Center) identified at $475,000. Extremely secluded and private location with massive scale for a legacy compound or specialized clinic project."
    },
    {
      title: "Carlsbad High-Income Search (May 20, 2026)",
      description: "Search criteria for Carlsbad (Tier 3) reduced to 2+ acres to capture premium coastal inventory. New 13.8-acre parcel (0 Adams Street) identified at $1,949,000. Features ocean and lagoon views in a top-tier demographic zone."
    },
    {
      title: "Pauma Valley (Maridge Rd) Listing (May 2026)",
      description: "49 Maridge Rd active at $195,000. NOTE: Recent listing update indicates the topography may not support building sites; currently a managed avocado grove. High priority for land-only agricultural play, but likely unsuitable for a clinic structure."
    },
    {
      title: "CDFA Veterinary Shortage Nominations (Fall 2026)",
      description: "The California Department of Food and Agriculture (CDFA) opens nominations for veterinary shortage areas in Fall 2026. Securing a designation for the clinic's location would unlock priority for state and federal grants in 2027. Fallbrook and Pauma Valley remain primary candidates."
    },
    {
      title: "SBA 7(a) Loan Benchmarks (May 2026)",
      description: "SBA 7(a) loans for veterinary clinics are currently averaging 8.75%. Maximum allowable rates range from Prime + 2.75% to Prime + 6.25% depending on loan size and lender."
    },
    {
      title: "Carlsbad Massive Scale Alert (May 2026)",
      description: "81.9-acre parcel (Friendly Place) identified at $695,000, presenting a rare massive acreage opportunity in a Tier 3 high-income zone."
    },
    {
      title: "Laguna Beach Office Inventory (May 2026)",
      description: "Local office inventory remains extremely tight with only ~3,600 sq ft of total available space currently listed. Any potential clinic site in the city will likely require a 'Change of Use' permit from the Planning Commission, adding 3-6 months to the timeline."
    },
  ],
  roadmap: [
    {
      phase: "Phase 1 — Lean Launch Prep",
      date: "July 2026",
      goal: "Confirm solar ITC safe-harbor status (deadline passed July 4 unconfirmed — reforecast $84K gap if missed). Send CDFA shortage nomination email. Engage North County commercial broker for leased clinic space in Fallbrook/Valley Center. Emily estimates patient follow rate. Founder decision on launch path due by July 14."
    },
    {
      phase: "Phase 1 — Entity & Land",
      date: "August 2026",
      goal: "Finalize PC formation (3 name choices + Agent for Service). Select top-3 land candidates for offers. Execute lease on Phase 1 clinic space. Build month-by-month Y1 cash plan."
    },
    {
      phase: "Phase 1 — Clinic Open",
      date: "Q1 2027 (target)",
      goal: "Emily sees first patients in leased space. Rachael manages operations. Begin shortage area nomination process with CDFA for Fall 2026 cycle. Land permitting/CUP underway in parallel."
    },
    {
      phase: "Phase 2 — Campus Build",
      date: "Q3 2027 – Q3 2028",
      goal: "Land acquired, CUP filed, modular clinic construction begins. Solar install completes (ITC captured). Clinic revenue funds campus operating reserve."
    },
    {
      phase: "Phase 2 — Campus Open",
      date: "Q4 2028 (target)",
      goal: "Move practice to owned campus. Lease released. DSCR model targets 1.25x by Year 5, 1.5–1.7x at maturity."
    }
  ],
  neededFromTim: [
    "Three (3) corporate name choices in order of preference.",
    "Official contact person (Agent for Service of Process) and physical CA address.",
    "Confirmation on Emily Gray's official corporate titles."
  ]
};
