// Maison Vet — 10-Year Conservative Financial Projections (2027-2037)
// Based on AVMA industry benchmarks, IBIS World data, San Diego County market conditions
// All figures in USD, annual basis

export interface YearProjection {
  year: number;
  phase: string;
  // Revenue
  examRevenue: number;
  surgeryRevenue: number;
  diagnosticsRevenue: number;
  pharmacyRevenue: number;
  boardingRevenue: number;
  energyRevenue: number;
  totalRevenue: number;
  // COGS
  medicalSupplies: number;
  pharmacyCOGS: number;
  boardingCOGS: number;
  totalCOGS: number;
  grossMargin: number;
  grossMarginPct: number;
  // Labor
  dvmCompensation: number;
  techCompensation: number;
  adminCompensation: number;
  payrollTaxesBenefits: number;
  totalLabor: number;
  laborPct: number;
  // Facilities & Operations
  facilitiesMaintenance: number;
  utilities: number;
  solarOffset: number;
  netUtilities: number;
  insurance: number;
  marketing: number;
  officeAdmin: number;
  legalAccounting: number;
  techSoftware: number;
  totalOperating: number;
  // Debt Service
  landDebtService: number;
  clinicDebtService: number;
  energyDebtService: number;
  workingCapitalDebt: number;
  totalDebtService: number;
  // Summary
  ebitda: number;
  ebitdaPct: number;
  depreciation: number;
  interestExpense: number;
  taxableIncome: number;
  incomeTax: number;
  netIncome: number;
  netIncomePct: number;
  // Key Ratios
  dscr: number;
  patientsPerMonth: number;
  avgTransactionValue: number;
  dvmCount: number;
  techCount: number;
  adminCount: number;
  revenuePerDvm: number;
}

// Helper: format currency
export function fmt(n: number): string {
  if (n < 0) return `($${Math.abs(n).toLocaleString("en-US", { maximumFractionDigits: 0 })})`;
  return `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

export function fmtPct(n: number): string {
  return `${(n * 100).toFixed(1)}%`;
}

// ============================================================
// CONSERVATIVE ASSUMPTIONS
// ============================================================
export const assumptions = {
  // Revenue ramp
  y1PatientsPerMonth: 40,       // Starting slow - new practice in rural area
  y1AvgTransaction: 175,        // Conservative avg including wellness + minor procedures
  surgeryPct: 0.15,             // 15% of patients need surgery
  avgSurgeryValue: 1650,        // Conservative surgical avg
  diagnosticsPctOfExam: 0.55,   // 55% of visits include diagnostics
  avgDiagnosticsValue: 185,     // Labs, imaging, teleradiology
  pharmacyPctOfRevenue: 0.12,   // Pharmacy/prescription diet = 12% of total
  boardingMonthlyRevenue: 8500, // Starting boarding revenue (2030)
  energyMonthlyRevenue: 3500,   // VPP/DSGS + net metering (from 2028)
  
  // Cost assumptions
  cogsPctOfServiceRevenue: 0.22,  // 22% COGS on services
  pharmacyCogsPct: 0.65,          // 65% COGS on pharmacy
  boardingCogsPct: 0.35,          // 35% COGS on boarding

  // Compensation (annual, conservative for rural SD)
  dvmSalary: 165000,             // Emily Y1, associate at $155k
  associateDvmSalary: 155000,
  techSalary: 52000,
  adminSalary: 48000,
  payrollTaxBenefitsPct: 0.28,   // Taxes + benefits + workers comp

  // Facilities
  y1Maintenance: 18000,
  y1Utilities: 36000,            // Before solar
  solarSavingsAnnual: 25200,     // $2,100/mo starting 2028
  y1Insurance: 42000,            // Malpractice + property + liability
  y1Marketing: 36000,            // Heavier Y1-Y2 for awareness
  y1OfficeAdmin: 14400,
  y1LegalAccounting: 24000,
  y1TechSoftware: 18000,         // PMS, teleradiology, etc

  // Debt service (annual)
  landDebtAnnual: 36660,         // $2.8M financed @ 6.5% 20yr = ~$3,055/mo
  clinicDebtAnnual: 5330 * 12,   // $650k SBA 504 @ 5.5% 25yr = ~$5,330/mo (90% financed)
  energyDebtAnnual: 0,           // C-PACE starts 2028
  energyDebtAnnualPost2028: 8700 * 12, // $1.1M C-PACE @ 5% 20yr, net of ITC
  workingCapitalDebtAnnual: 2400 * 12, // $200k line @ ~8%, drawn as needed

  // Growth rates (conservative)
  y2PatientGrowth: 0.35,  // 35% growth Y1->Y2 (still building base)
  y3PatientGrowth: 0.25,  // 25% growth
  y4PatientGrowth: 0.15,  // 15% growth (boarding launches)
  y5PatientGrowth: 0.10,  // 10% growth (2nd DVM)
  matureGrowth: 0.04,     // 4% steady state

  // Transaction value inflation
  annualPriceIncrease: 0.03, // 3% annual fee increases

  // Tax
  effectiveTaxRate: 0.28,     // CA corp + federal blended
  
  // Depreciation (simplified MACRS)
  y1BonusDepreciation: 900000,  // OBBBA on clinic + med stack
  annualDepreciation: 25000,    // Ongoing (equipment refresh, etc)

  // Inflation on costs
  costInflation: 0.03,
};

// ============================================================
// PROJECTION ENGINE
// ============================================================
function buildProjection(year: number, idx: number, prev?: YearProjection): YearProjection {
  const a = assumptions;
  
  // Staff scaling
  let dvmCount = 1;
  let techCount = 1;
  let adminCount = 1;
  if (idx >= 3) techCount = 2;     // 2029: 2nd tech
  if (idx >= 4) { dvmCount = 2; adminCount = 2; } // 2031: 2nd DVM + admin (corrected: 2030 consider, 2031 hire)
  if (idx >= 3 && idx < 4) dvmCount = 1; // Still 1 DVM in 2030
  // Actually: Y4=2030 "consider", Y5=2031 hire. Let's be conservative:
  if (idx >= 4) { dvmCount = 2; }
  if (idx >= 5) { adminCount = 2; }  // 2nd admin in 2032
  
  // Patient volume
  let patientsPerMonth: number;
  if (idx === 0) {
    patientsPerMonth = a.y1PatientsPerMonth;
  } else {
    const growthRate = idx === 1 ? a.y2PatientGrowth
      : idx === 2 ? a.y3PatientGrowth
      : idx === 3 ? a.y4PatientGrowth
      : idx === 4 ? a.y5PatientGrowth
      : a.matureGrowth;
    patientsPerMonth = Math.round(prev!.patientsPerMonth * (1 + growthRate));
  }

  // Cap patients per DVM at ~90/mo (industry max for quality care)
  const maxPatientsPerDvm = 85;
  patientsPerMonth = Math.min(patientsPerMonth, dvmCount * maxPatientsPerDvm);

  // Transaction value (increases 3% annually)
  const avgTransaction = Math.round(a.y1AvgTransaction * Math.pow(1 + a.annualPriceIncrease, idx));
  
  // Revenue calculations
  const annualPatients = patientsPerMonth * 12;
  const examRevenue = annualPatients * avgTransaction;
  const surgeryRevenue = Math.round(annualPatients * a.surgeryPct * a.avgSurgeryValue * Math.pow(1 + a.annualPriceIncrease, idx));
  const diagnosticsRevenue = Math.round(annualPatients * a.diagnosticsPctOfExam * a.avgDiagnosticsValue * Math.pow(1 + a.annualPriceIncrease, idx));
  const serviceRevenue = examRevenue + surgeryRevenue + diagnosticsRevenue;
  const pharmacyRevenue = Math.round(serviceRevenue * a.pharmacyPctOfRevenue);
  
  // Boarding (starts 2030, grows 10% annually)
  let boardingRevenue = 0;
  if (idx >= 3) {
    boardingRevenue = Math.round(a.boardingMonthlyRevenue * 12 * Math.pow(1.10, idx - 3));
  }

  // Energy revenue (starts 2028)
  let energyRevenue = 0;
  if (idx >= 1) {
    energyRevenue = Math.round(a.energyMonthlyRevenue * 12 * Math.pow(1.02, idx - 1));
  }

  const totalRevenue = examRevenue + surgeryRevenue + diagnosticsRevenue + pharmacyRevenue + boardingRevenue + energyRevenue;

  // COGS
  const medicalSupplies = Math.round(serviceRevenue * a.cogsPctOfServiceRevenue);
  const pharmacyCOGS = Math.round(pharmacyRevenue * a.pharmacyCogsPct);
  const boardingCOGS = Math.round(boardingRevenue * a.boardingCogsPct);
  const totalCOGS = medicalSupplies + pharmacyCOGS + boardingCOGS;
  const grossMargin = totalRevenue - totalCOGS;
  const grossMarginPct = totalRevenue > 0 ? grossMargin / totalRevenue : 0;

  // Labor
  const inflator = Math.pow(1 + a.costInflation, idx);
  const dvmComp = dvmCount === 1 
    ? Math.round(a.dvmSalary * inflator)
    : Math.round((a.dvmSalary + a.associateDvmSalary) * inflator);
  const techComp = Math.round(a.techSalary * techCount * inflator);
  const adminComp = Math.round(a.adminSalary * adminCount * inflator);
  const baseLaborCost = dvmComp + techComp + adminComp;
  const payrollTaxesBenefits = Math.round(baseLaborCost * a.payrollTaxBenefitsPct);
  const totalLabor = baseLaborCost + payrollTaxesBenefits;
  const laborPct = totalRevenue > 0 ? totalLabor / totalRevenue : 0;

  // Operating expenses
  const facilitiesMaintenance = Math.round(a.y1Maintenance * inflator * (idx >= 3 ? 1.4 : 1)); // Higher after boarding barn
  const utilities = Math.round(a.y1Utilities * inflator);
  const solarOffset = idx >= 1 ? Math.round(a.solarSavingsAnnual * inflator) : 0;
  const netUtilities = Math.max(0, utilities - solarOffset);
  const insurance = Math.round(a.y1Insurance * inflator * (dvmCount >= 2 ? 1.5 : 1));
  const marketing = Math.round(
    idx <= 1 ? a.y1Marketing * inflator          // Heavy marketing Y1-Y2
    : idx <= 3 ? a.y1Marketing * 0.7 * inflator  // Taper Y3-Y4
    : a.y1Marketing * 0.5 * inflator             // Mature: referral-driven
  );
  const officeAdmin = Math.round(a.y1OfficeAdmin * inflator * (adminCount >= 2 ? 1.3 : 1));
  const legalAccounting = Math.round(a.y1LegalAccounting * inflator);
  const techSoftware = Math.round(a.y1TechSoftware * inflator);
  
  const totalOperating = facilitiesMaintenance + netUtilities + insurance + marketing + officeAdmin + legalAccounting + techSoftware;

  // Debt service
  const landDebtService = a.landDebtAnnual;
  const clinicDebtService = a.clinicDebtAnnual;
  const energyDebtService = idx >= 1 ? a.energyDebtAnnualPost2028 : 0;
  const workingCapitalDebt = idx <= 2 ? a.workingCapitalDebtAnnual : Math.round(a.workingCapitalDebtAnnual * 0.5); // Pay down over time
  const totalDebtService = landDebtService + clinicDebtService + energyDebtService + workingCapitalDebt;

  // EBITDA
  const ebitda = grossMargin - totalLabor - totalOperating;
  const ebitdaPct = totalRevenue > 0 ? ebitda / totalRevenue : 0;

  // Depreciation
  const depreciation = idx === 0 ? a.y1BonusDepreciation : Math.round(a.annualDepreciation * inflator);

  // Interest expense (approximate - ~60% of debt service is interest in early years, declining)
  const interestPct = Math.max(0.3, 0.6 - idx * 0.03);
  const interestExpense = Math.round(totalDebtService * interestPct);

  // Taxable income
  const taxableIncome = ebitda - depreciation - interestExpense;
  const incomeTax = taxableIncome > 0 ? Math.round(taxableIncome * a.effectiveTaxRate) : 0;
  const netIncome = ebitda - interestExpense - incomeTax;
  const netIncomePct = totalRevenue > 0 ? netIncome / totalRevenue : 0;

  // DSCR (Net Operating Income / Total Debt Service)
  // NOI = EBITDA for this purpose
  const dscr = totalDebtService > 0 ? Math.round((ebitda / totalDebtService) * 100) / 100 : 0;

  const phase = idx === 0 ? "1 - Launch"
    : idx === 1 ? "2 - Energy"
    : idx === 2 ? "Growth"
    : idx === 3 ? "3 - Boarding"
    : idx >= 4 && idx <= 5 ? "Maturity"
    : "Steady State";

  return {
    year, phase,
    examRevenue, surgeryRevenue, diagnosticsRevenue, pharmacyRevenue, boardingRevenue, energyRevenue, totalRevenue,
    medicalSupplies, pharmacyCOGS, boardingCOGS, totalCOGS, grossMargin, grossMarginPct,
    dvmCompensation: dvmComp, techCompensation: techComp, adminCompensation: adminComp,
    payrollTaxesBenefits, totalLabor, laborPct,
    facilitiesMaintenance, utilities, solarOffset, netUtilities, insurance, marketing, officeAdmin, legalAccounting, techSoftware, totalOperating,
    landDebtService, clinicDebtService, energyDebtService, workingCapitalDebt, totalDebtService,
    ebitda, ebitdaPct, depreciation, interestExpense, taxableIncome, incomeTax, netIncome, netIncomePct,
    dscr, patientsPerMonth, avgTransactionValue: avgTransaction, dvmCount, techCount, adminCount,
    revenuePerDvm: Math.round(totalRevenue / dvmCount),
  };
}

export function generateProjections(): YearProjection[] {
  const projections: YearProjection[] = [];
  for (let i = 0; i <= 10; i++) {
    const year = 2027 + i;
    const prev = i > 0 ? projections[i - 1] : undefined;
    projections.push(buildProjection(year, i, prev));
  }
  return projections;
}

// CapEx schedule
export const capexSchedule = [
  { year: 2026, phase: "0", category: "De-risking", description: "Water Validation, Permits, Perris Prep", cost: 75000, taxTreatment: "OpEx" },
  { year: 2027, phase: "1", category: "Real Estate", description: "15-22 Acres North County (Ag-Zoned)", cost: 3500000, taxTreatment: "Non-Depreciable" },
  { year: 2027, phase: "1", category: "Facility", description: "Modular Clinical Unit (1,500 sqft)", cost: 650000, taxTreatment: "100% OBBBA Expensing" },
  { year: 2027, phase: "1", category: "Medical Equipment", description: "Surgical, Triage, Teleradiology Stack", cost: 250000, taxTreatment: "100% OBBBA Expensing" },
  { year: 2028, phase: "2", category: "Energy", description: "75kW Solar + Sodium-Ion Microgrid", cost: 1100000, taxTreatment: "30% ITC + USDA Grant" },
  { year: 2028, phase: "2", category: "Water", description: "Industrial Well + Solar Pumping", cost: 225000, taxTreatment: "15-Yr MACRS" },
  { year: 2030, phase: "3", category: "Compound", description: "Boarding / Equine Recovery Barn", cost: 450000, taxTreatment: "100% Expensing" },
  { year: 2032, phase: "4", category: "Energy", description: "Microgrid Phase II (VPP Expansion)", cost: 300000, taxTreatment: "ITC 2.0" },
];

// Debt schedule
export interface DebtItem {
  name: string;
  principal: number;
  rate: number;
  termYears: number;
  startYear: number;
  annualPayment: number;
  type: string;
}

export const debtSchedule: DebtItem[] = [
  { name: "Ag Land Loan", principal: 2800000, rate: 6.5, termYears: 20, startYear: 2027, annualPayment: 36660, type: "Senior Debt" },
  { name: "SBA 504 (Clinic)", principal: 585000, rate: 5.5, termYears: 25, startYear: 2027, annualPayment: 63960, type: "SBA 504" },
  { name: "C-PACE (Energy)", principal: 770000, rate: 5.0, termYears: 20, startYear: 2028, annualPayment: 104400, type: "C-PACE" },
  { name: "Working Capital Line", principal: 200000, rate: 8.0, termYears: 7, startYear: 2027, annualPayment: 28800, type: "SBA 7(a)" },
];
