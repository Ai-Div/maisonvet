// Maison Vet — Clinic 10-Year Conservative Operating Model (Year 1 = first full year open).
// Benchmark-validated (AVMA/iVET360 + 2026 SoCal cost/lender data). Ownership: two owners via
// LLCs — Emily Gray LLC (licensed veterinarian) + Rachael Gray LLC (operations) — are the only
// two at launch; relief/locum vet coverage and tech/front-desk hires are added as revenue grows.
// Capitalized with ~$650K owner equity + $154K energy grants/credits, leaving ~$2.44M debt.
// Mirrors the model sent to the founders and appended to the weekly briefing.

export interface YearProjection {
  year: number; opYear: number; phase: string;
  patientsPerMonth: number; avgTransactionValue: number; vetCount: number; headcount: number;
  examRevenue: number; surgeryRevenue: number; diagnosticsRevenue: number; dentistryRevenue: number;
  pharmacyRevenue: number; boardingRevenue: number; equineRevenue: number; energyRevenue: number;
  discounts: number; netRevenue: number;
  medicalSupplies: number; pharmacyCOGS: number; referenceLab: number; boardingCOGS: number;
  totalCOGS: number; grossProfit: number; grossMarginPct: number;
  emilyComp: number; rachaelComp: number; reliefComp: number; techComp: number; adminComp: number;
  payrollStaff: number; totalLabor: number; laborPct: number;
  maintenance: number; netUtilities: number; insurance: number; marketing: number; officeAdmin: number;
  legalAccounting: number; software: number; ccProcessing: number; continuingEd: number; propertyTax: number;
  totalOpex: number;
  ebitda: number; ebitdaPct: number; debtService: number; dscr: number; depreciation: number;
  pretaxIncome: number; incomeTax: number; netIncome: number; netIncomePct: number;
  freeCashFlow: number; cumulativeFCF: number;
}

export function fmt(n: number): string {
  if (n < 0) return `($${Math.abs(Math.round(n)).toLocaleString("en-US")})`;
  return `$${Math.round(n).toLocaleString("en-US")}`;
}
export function fmtPct(n: number): string { return `${(n * 100).toFixed(0)}%`; }

export const assumptions = {
  startYear: 2027,
  y1VisitsPerMonth: 110,
  growth: [0.32, 0.25, 0.18, 0.12, 0.08, 0.05, 0.04, 0.03, 0.03],
  examAtv: 160, surgeryRate: 0.10, surgeryValue: 900,
  diagnosticsRate: 0.45, diagnosticsValue: 150, dentistryRate: 0.08, dentistryValue: 550,
  pharmacyPctOfService: 0.12, discountBadDebtPct: 0.035,
  boardingY3Annual: 80000, equineY2Annual: 50000, energyY2Annual: 25000,
  cogsSuppliesPct: 0.12, pharmacyCogsPct: 0.48, referenceLabPct: 0.28, boardingCogsPct: 0.35,
  emilySalary: 180000, rachaelSalary: 95000, reliefVetRate: 170000, reliefSoloCapacity: 180,
  techSalary: 52000, adminSalary: 42000, staffBurdenPct: 0.26, inflation: 0.03,
  campusDebtAnnual: 262093, equipmentLeaseAnnual: 63443,
  depreciationEarly: 165000, depreciationLate: 120000, effectiveTaxRate: 0.28, maintCapexY1: 20000,
  emily: [1,1,1,1,1,1,1,1,1,1], rachael: [1,1,1,1,1,1,1,1,1,1],
  techs: [0,1,1,2,2,3,3,4,4,5], admin: [0,0,1,1,1,2,2,2,2,2],
};

const PHASES = ["Launch","Ramp","Growth","Scale","Maturing","Steady","Steady","Steady","Steady","Steady"];

export function generateProjections(): YearProjection[] {
  const a = assumptions; const out: YearProjection[] = []; let cumulative = 0;
  const raw: number[] = [a.y1VisitsPerMonth];
  for (const g of a.growth) raw.push(Math.round(raw[raw.length - 1] * (1 + g)));

  for (let i = 0; i < 10; i++) {
    const pf = Math.pow(1 + a.inflation, i); const lf = pf;
    const visitsPerMonth = raw[i]; const v = visitsPerMonth * 12;
    const examRevenue = v * a.examAtv * pf;
    const surgeryRevenue = v * a.surgeryRate * a.surgeryValue * pf;
    const diagnosticsRevenue = v * a.diagnosticsRate * a.diagnosticsValue * pf;
    const dentistryRevenue = v * a.dentistryRate * a.dentistryValue * pf;
    const service = examRevenue + surgeryRevenue + diagnosticsRevenue + dentistryRevenue;
    const pharmacyRevenue = service * a.pharmacyPctOfService;
    const boardingRevenue = i < 2 ? 0 : a.boardingY3Annual * Math.pow(1.10, i - 2);
    const equineRevenue = i < 1 ? 0 : a.equineY2Annual * (i <= 4 ? Math.pow(1.12, i - 1) : Math.pow(1.12, 3) * Math.pow(1.05, i - 4));
    const energyRevenue = i < 1 ? 0 : a.energyY2Annual * Math.pow(1.03, i - 1);
    const gross = examRevenue + surgeryRevenue + diagnosticsRevenue + dentistryRevenue + pharmacyRevenue + boardingRevenue + equineRevenue + energyRevenue;
    const discounts = gross * a.discountBadDebtPct; const netRevenue = gross - discounts;

    const medicalSupplies = (examRevenue + surgeryRevenue + dentistryRevenue + equineRevenue) * a.cogsSuppliesPct;
    const pharmacyCOGS = pharmacyRevenue * a.pharmacyCogsPct;
    const referenceLab = diagnosticsRevenue * a.referenceLabPct;
    const boardingCOGS = boardingRevenue * a.boardingCogsPct;
    const totalCOGS = medicalSupplies + pharmacyCOGS + referenceLab + boardingCOGS;
    const grossProfit = netRevenue - totalCOGS;

    const emilyComp = a.emilySalary * lf;
    const rachaelComp = a.rachaelSalary * lf;
    const reliefComp = Math.max(0, visitsPerMonth - a.reliefSoloCapacity) / a.reliefSoloCapacity * a.reliefVetRate * lf;
    const techComp = a.techs[i] * a.techSalary * lf;
    const adminComp = a.admin[i] * a.adminSalary * lf;
    const empBase = reliefComp + techComp + adminComp;
    const payrollStaff = empBase * a.staffBurdenPct;
    const totalLabor = emilyComp + rachaelComp + empBase + payrollStaff;

    const maintenance = 22000 * lf * (i >= 2 ? 1.3 : 1);
    const netUtilities = Math.max(0, 36000 * lf - (i >= 1 ? 26000 * lf : 0));
    const insurance = 12000 * lf * (reliefComp > 85000 ? 1.5 : 1);
    const marketing = (i <= 1 ? 44000 : i <= 3 ? 44000 * 0.6 : 44000 * 0.45) * lf;
    const officeAdmin = 15000 * lf * (a.admin[i] >= 2 ? 1.3 : 1);
    const legalAccounting = 22000 * lf; const software = 20000 * lf;
    const ccProcessing = gross * 0.028; const continuingEd = 4000 * lf; const propertyTax = 30000 * Math.pow(1.02, i);
    const totalOpex = maintenance + netUtilities + insurance + marketing + officeAdmin + legalAccounting + software + ccProcessing + continuingEd + propertyTax;

    const ebitda = grossProfit - totalLabor - totalOpex;
    const debtService = i < 5 ? a.campusDebtAnnual : a.campusDebtAnnual - a.equipmentLeaseAnnual;
    const dscr = ebitda / debtService;
    const depreciation = i < 5 ? a.depreciationEarly : a.depreciationLate;
    const interest = debtService * Math.max(0.3, 0.55 - 0.03 * i);
    const pretaxIncome = ebitda - depreciation - interest;
    const incomeTax = pretaxIncome > 0 ? pretaxIncome * a.effectiveTaxRate : 0;
    const netIncome = pretaxIncome - incomeTax;
    const freeCashFlow = ebitda - debtService - a.maintCapexY1 * lf;
    cumulative += freeCashFlow;

    out.push({
      year: a.startYear + i, opYear: i + 1, phase: PHASES[i],
      patientsPerMonth: visitsPerMonth, avgTransactionValue: Math.round(a.examAtv * pf),
      vetCount: 1, headcount: a.emily[i] + a.rachael[i] + a.techs[i] + a.admin[i],
      examRevenue, surgeryRevenue, diagnosticsRevenue, dentistryRevenue, pharmacyRevenue, boardingRevenue, equineRevenue, energyRevenue, discounts, netRevenue,
      medicalSupplies, pharmacyCOGS, referenceLab, boardingCOGS, totalCOGS, grossProfit, grossMarginPct: grossProfit / netRevenue,
      emilyComp, rachaelComp, reliefComp, techComp, adminComp, payrollStaff, totalLabor, laborPct: totalLabor / netRevenue,
      maintenance, netUtilities, insurance, marketing, officeAdmin, legalAccounting, software, ccProcessing, continuingEd, propertyTax, totalOpex,
      ebitda, ebitdaPct: ebitda / netRevenue, debtService, dscr, depreciation, pretaxIncome, incomeTax, netIncome, netIncomePct: netIncome / netRevenue,
      freeCashFlow, cumulativeFCF: cumulative,
    });
  }
  return out;
}

// Buildout uses ($3.25M campus) — benchmark-validated; clinic/solar at market, VE elsewhere.
export const capexSchedule = [
  { year: 2027, phase: "1", category: "Land & Site", description: "Land Acquisition (10–22 ac)", cost: 750000, taxTreatment: "Non-Depreciable" },
  { year: 2027, phase: "1", category: "Land & Site", description: "Site Prep & Grading", cost: 80000, taxTreatment: "15-Yr MACRS" },
  { year: 2027, phase: "1", category: "Land & Site", description: "CUP, Permitting & Entitlements", cost: 90000, taxTreatment: "Amortized" },
  { year: 2027, phase: "1", category: "Buildings", description: "Modular Clinic (3,500 sq ft @ ~$357/sf)", cost: 1250000, taxTreatment: "100% OBBBA Expensing" },
  { year: 2027, phase: "1", category: "Buildings", description: "Clinic Fit-Out & Casework", cost: 140000, taxTreatment: "100% OBBBA Expensing" },
  { year: 2028, phase: "2", category: "Energy & Water", description: "Solar Array (75kW DC, gross of ITC)", cost: 190000, taxTreatment: "30% ITC" },
  { year: 2028, phase: "2", category: "Energy & Water", description: "Battery Storage (300kWh Na-ion)", cost: 90000, taxTreatment: "30% ITC" },
  { year: 2028, phase: "2", category: "Energy & Water", description: "Well, Water System & Storage", cost: 100000, taxTreatment: "15-Yr MACRS" },
  { year: 2027, phase: "1", category: "Medical Equipment", description: "CT Scanner (16-slice, certified pre-owned)", cost: 157000, taxTreatment: "100% Expensing" },
  { year: 2027, phase: "1", category: "Medical Equipment", description: "General Medical Equipment", cost: 110000, taxTreatment: "100% Expensing" },
  { year: 2027, phase: "1", category: "Working Capital", description: "Operating Reserve (6 mo)", cost: 200000, taxTreatment: "Reserve" },
  { year: 2027, phase: "1", category: "Working Capital", description: "Working Capital / Contingency", cost: 90000, taxTreatment: "Reserve" },
];

export interface SourceItem { name: string; amount: number; type: string; }
export const sourcesOfFunds: SourceItem[] = [
  { name: "Owner Equity Injection (~20%)", amount: 650000, type: "Equity" },
  { name: "USDA REAP Grant (energy, 25%)", amount: 70000, type: "Grant" },
  { name: "Federal Solar ITC (30% of energy)", amount: 84000, type: "Tax Credit" },
  { name: "Ag Land Loan — 7.0% / 20 yr", amount: 750000, type: "Debt" },
  { name: "SBA 504 (Clinic + Fit-Out) — 5.8% / 25 yr", amount: 990000, type: "Debt" },
  { name: "C-PACE (Energy + Water) — 7.5% / 20 yr", amount: 226000, type: "Debt" },
  { name: "Equipment Lease — 7.0% / 5 yr", amount: 267000, type: "Debt" },
  { name: "USDA B&I / Working Capital — 9.0% / 10 yr", amount: 210000, type: "Debt" },
];

export interface DebtItem { name: string; principal: number; rate: number; termYears: number; startYear: number; annualPayment: number; type: string; }
export const debtSchedule: DebtItem[] = [
  { name: "Ag Land Loan", principal: 750000, rate: 7.0, termYears: 20, startYear: 2027, annualPayment: 69768, type: "Senior Debt" },
  { name: "SBA 504 (Clinic + Fit-Out)", principal: 990000, rate: 5.8, termYears: 25, startYear: 2027, annualPayment: 75099, type: "SBA 504" },
  { name: "C-PACE (Energy + Water)", principal: 226000, rate: 7.5, termYears: 20, startYear: 2028, annualPayment: 21853, type: "C-PACE" },
  { name: "Equipment Lease", principal: 267000, rate: 7.0, termYears: 5, startYear: 2027, annualPayment: 63443, type: "Lease" },
  { name: "USDA B&I / Working Capital", principal: 210000, rate: 9.0, termYears: 10, startYear: 2027, annualPayment: 31930, type: "USDA B&I" },
];
