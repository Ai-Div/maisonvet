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
    { task: "Perform zoning verification for 26413 N Lake Wohlford Rd (22.0 acres) and evaluate cottage renovation for staff housing or initial ops.", completed: false },
    { task: "Evaluate 6465 Rainbow Heights Rd #2 (41.18 acres) for water well flow-rate capacity and private road emergency access.", completed: false },
    { task: "Verify zoning compatibility and gate restrictions for Parcel 3 & 4 Emerald Hill Rd (10.01 acres) in Bonsall.", completed: false },
    { task: "Perform agricultural tax audit and farm income modeling for 10438 Couser (35.7 acres) seed avocado farm.", completed: false },
    { task: "Perform zoning verification for 14905 Calle Privada (2.37 acres, $1.75M) and evaluate for high-end clinic infrastructure in RSF.", completed: true },
    { task: "Perform zoning verification for Via Alicia (10.05 acres, $725k) and evaluate for clinic infrastructure in Bonsall.", completed: true },
    { task: "Perform zoning verification for 0 Adams Street (13.8 acres, $1.94M) and evaluate for high-end clinic infrastructure in Carlsbad.", completed: true },
    { task: "Perform zoning verification for Double Canyon Rd (44.51 acres, $475k) and evaluate for legacy compound feasibility.", completed: true },
    { task: "Perform zoning verification for 30270 Lagunita Ln (10.82 acres, $1.74M) and evaluate for high-end clinic infrastructure.", completed: false },
    { task: "Perform zoning verification for 121 Avo Dr (25.5 acres, $888k) and evaluate for clinic site suitability.", completed: false },
    { task: "Email cdfa_aus@cdfa.ca.gov to request shortage designation consideration for Bonsall/Valley Center/Fallbrook.", completed: false },
    { task: "Evaluate Valley Center 15.89-acre listing for CropSWAP feasibility and 'Sovereign Compound' infrastructure fit.", completed: false },
    { task: "Perform zoning verification for 31675 Rancho Amigos Rd (19.28 acres, $650k) and evaluate 'Change of Use' or 'Agricultural Exemption' for clinic structure.", completed: false },
    { task: "Instruct CPA/Founders to model a 'Cost Segregation' study for the property acquisition to maximize the new 100% Bonus Depreciation rules.", completed: false },
    { task: "Apply for EmpowHer Grant (up to $50k) for female-led businesses with social impact.", completed: false },
    { task: "Audit clinic SOPs for compliance with new CCR 2036.5 drug compounding standards (Effective April 1).", completed: false },
    { task: "Perform zoning verification for 29133 Sandy Hill Dr (16.86 acres) and 18868 Paradise Mountain Rd (10.09 acres).", completed: true },
    { task: "Verify Fallbrook/Pauma 2026 USDA Veterinary Shortage designation and prepare VSGP-RPE grant intake form ($200k potential).", completed: false },
    { task: "Perform zoning verification for 0 Jubilee Dr (36.6 acres) and 17912 El Brazo (2.68 acres).", completed: false },
    { task: "Perform zoning verification for 49 Maridge Rd (20.54 acres) and request CalWATRS PIN.", completed: true },
    { task: "Coordinate portfolio rebalance for $CEG ex-dividend capture (May 15).", completed: false },
    { task: "Review current formation docs and Emily's licensing prep against the 2026 Veterinary Medicine Practice Act (published April 6).", completed: false },
    { task: "Cross-reference the current Bylaws draft against the updated disciplinary reporting and electronic license verification mandates in the April 2026 Veterinary Medicine Practice Act.", completed: false },
    { task: "Calculate FTE-based premises fee for Year 1 budget based on AB 1502.", completed: false },
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
  ],
  regulatory: [
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
      phase: "Phase 1",
      date: "Month 2 (April)",
      goal: "Entity structure and land due diligence. BMO conversation initialized."
    },
    {
      phase: "Phase 1",
      date: "Month 3 (May)",
      goal: "Finalize PC formation, Agent for Service designation, and top-tier land targeting."
    }
  ],
  neededFromTim: [
    "Three (3) corporate name choices in order of preference.",
    "Official contact person (Agent for Service of Process) and physical CA address.",
    "Confirmation on Emily Gray's official corporate titles."
  ]
};
