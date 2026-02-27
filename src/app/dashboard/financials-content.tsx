"use client";

import { Heading, Subheading } from "@/components/heading";
import { Divider } from "@/components/divider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { Badge } from "@/components/badge";
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDetails,
} from "@/components/description-list";
import {
  generateProjections,
  fmt,
  fmtPct,
  assumptions,
  capexSchedule,
  debtSchedule,
  type YearProjection,
} from "./projections-data";

const projections = generateProjections();

// ────────────────────────────────────────────────────────────
// KEY METRICS CARDS
// ────────────────────────────────────────────────────────────
function MetricCard({
  label,
  value,
  sublabel,
  color = "stone",
}: {
  label: string;
  value: string;
  sublabel: string;
  color?: string;
}) {
  const bgMap: Record<string, string> = {
    stone: "bg-stone-50 border-stone-200",
    green: "bg-green-50 border-green-200",
    blue: "bg-blue-50 border-blue-200",
    red: "bg-red-50 border-red-200",
  };
  const valMap: Record<string, string> = {
    stone: "text-stone-900",
    green: "text-green-800",
    blue: "text-blue-800",
    red: "text-red-800",
  };
  return (
    <div className={`p-6 rounded-xl border ${bgMap[color] || bgMap.stone}`}>
      <Subheading>{label}</Subheading>
      <p className={`mt-2 text-3xl font-mono font-semibold ${valMap[color] || valMap.stone}`}>
        {value}
      </p>
      <p className="mt-1 text-xs text-stone-500">{sublabel}</p>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// P&L TABLE ROWS HELPER
// ────────────────────────────────────────────────────────────
function PnlRow({
  label,
  values,
  bold = false,
  negative = false,
  pct = false,
  indent = false,
  separator = false,
}: {
  label: string;
  values: (number | string)[];
  bold?: boolean;
  negative?: boolean;
  pct?: boolean;
  indent?: boolean;
  separator?: boolean;
}) {
  const cellClass = `text-right font-mono text-sm whitespace-nowrap ${
    bold ? "font-bold" : ""
  } ${negative ? "text-red-700" : ""}`;
  return (
    <TableRow className={separator ? "border-t-2 border-stone-300" : ""}>
      <TableCell
        className={`sticky left-0 bg-white z-10 min-w-[220px] ${bold ? "font-bold" : ""} ${indent ? "pl-8" : ""}`}
      >
        {label}
      </TableCell>
      {values.map((v, i) => (
        <TableCell key={i} className={cellClass}>
          {typeof v === "string"
            ? v
            : pct
              ? fmtPct(v)
              : negative
                ? v < 0
                  ? fmt(v)
                  : `(${fmt(Math.abs(v))})`
                : fmt(v)}
        </TableCell>
      ))}
    </TableRow>
  );
}

// ────────────────────────────────────────────────────────────
// MAIN EXPORT
// ────────────────────────────────────────────────────────────
export const Financials = () => {
  const p = projections;

  // Find key metrics
  const breakEvenYear = p.find((y) => y.netIncome > 0)?.year || "N/A";
  const peakRevenue = p[p.length - 1];
  const maturityYear = p.find((y) => y.dscr >= 1.25);

  return (
    <div className="space-y-16 pb-24">
      {/* KEY METRICS */}
      <section>
        <Heading level={2}>Key Performance Indicators</Heading>
        <Divider className="my-4" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <MetricCard
            label="Peak Annual Revenue (2037)"
            value={fmt(peakRevenue.totalRevenue)}
            sublabel={`${peakRevenue.dvmCount} DVMs, ${peakRevenue.patientsPerMonth} patients/mo`}
            color="stone"
          />
          <MetricCard
            label="EBITDA at Maturity"
            value={fmt(maturityYear?.ebitda || p[4].ebitda)}
            sublabel={`${fmtPct(maturityYear?.ebitdaPct || p[4].ebitdaPct)} margin (Year ${(maturityYear?.year || p[4].year) - 2026})`}
            color="green"
          />
          <MetricCard
            label="Break-even Year"
            value={String(breakEvenYear)}
            sublabel={
              breakEvenYear !== "N/A"
                ? `Year ${Number(breakEvenYear) - 2026} of operations`
                : "Projected beyond 10 years"
            }
            color="blue"
          />
          <MetricCard
            label="DSCR at Maturity"
            value={`${(maturityYear?.dscr || p[4].dscr).toFixed(2)}x`}
            sublabel="Debt Service Coverage Ratio (target: 1.25x+)"
            color={
              (maturityYear?.dscr || p[4].dscr) >= 1.25 ? "green" : "red"
            }
          />
        </div>
      </section>

      {/* FULL P&L TABLE */}
      <section>
        <div className="flex items-baseline justify-between">
          <Heading level={2}>
            Projected Profit &amp; Loss Statement (2027-2037)
          </Heading>
          <Badge color="zinc">Conservative Scenario</Badge>
        </div>
        <Divider className="my-4" />
        <div className="overflow-x-auto mt-6 -mx-4 px-4">
          <Table className="min-w-[1400px]">
            <TableHead>
              <TableRow>
                <TableHeader className="sticky left-0 bg-white z-10 min-w-[220px]">
                  Line Item
                </TableHeader>
                {p.map((y) => (
                  <TableHeader key={y.year} className="text-right whitespace-nowrap">
                    {y.year}
                    <br />
                    <span className="text-[10px] text-zinc-400 font-normal">
                      {y.phase}
                    </span>
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* REVENUE */}
              <PnlRow label="REVENUE" values={p.map(() => "")} bold separator />
              <PnlRow label="Professional Exams" values={p.map((y) => y.examRevenue)} indent />
              <PnlRow label="Surgical Services" values={p.map((y) => y.surgeryRevenue)} indent />
              <PnlRow label="Diagnostics & Imaging" values={p.map((y) => y.diagnosticsRevenue)} indent />
              <PnlRow label="Pharmacy & Rx Diet" values={p.map((y) => y.pharmacyRevenue)} indent />
              <PnlRow label="Boarding & Recovery" values={p.map((y) => y.boardingRevenue)} indent />
              <PnlRow label="Energy (VPP/Net Metering)" values={p.map((y) => y.energyRevenue)} indent />
              <PnlRow label="Total Revenue" values={p.map((y) => y.totalRevenue)} bold separator />

              {/* COGS */}
              <PnlRow label="COST OF GOODS SOLD" values={p.map(() => "")} bold separator />
              <PnlRow label="Medical Supplies" values={p.map((y) => y.medicalSupplies)} indent negative />
              <PnlRow label="Pharmacy COGS" values={p.map((y) => y.pharmacyCOGS)} indent negative />
              <PnlRow label="Boarding COGS" values={p.map((y) => y.boardingCOGS)} indent negative />
              <PnlRow label="Total COGS" values={p.map((y) => y.totalCOGS)} bold negative separator />
              <PnlRow label="Gross Margin" values={p.map((y) => y.grossMargin)} bold separator />
              <PnlRow label="Gross Margin %" values={p.map((y) => y.grossMarginPct)} pct />

              {/* LABOR */}
              <PnlRow label="LABOR" values={p.map(() => "")} bold separator />
              <PnlRow label="DVM Compensation" values={p.map((y) => y.dvmCompensation)} indent negative />
              <PnlRow label="Veterinary Technicians" values={p.map((y) => y.techCompensation)} indent negative />
              <PnlRow label="Administrative Staff" values={p.map((y) => y.adminCompensation)} indent negative />
              <PnlRow label="Payroll Taxes & Benefits (28%)" values={p.map((y) => y.payrollTaxesBenefits)} indent negative />
              <PnlRow label="Total Labor" values={p.map((y) => y.totalLabor)} bold negative separator />
              <PnlRow label="Labor % of Revenue" values={p.map((y) => y.laborPct)} pct />

              {/* OPERATING */}
              <PnlRow label="OPERATING EXPENSES" values={p.map(() => "")} bold separator />
              <PnlRow label="Facilities & Maintenance" values={p.map((y) => y.facilitiesMaintenance)} indent negative />
              <PnlRow label="Utilities (Gross)" values={p.map((y) => y.utilities)} indent negative />
              <PnlRow label="Solar Offset" values={p.map((y) => y.solarOffset)} indent />
              <PnlRow label="Net Utilities" values={p.map((y) => y.netUtilities)} indent negative />
              <PnlRow label="Insurance (Malpractice + P&C)" values={p.map((y) => y.insurance)} indent negative />
              <PnlRow label="Marketing & Business Dev" values={p.map((y) => y.marketing)} indent negative />
              <PnlRow label="Office & Admin" values={p.map((y) => y.officeAdmin)} indent negative />
              <PnlRow label="Legal & Accounting" values={p.map((y) => y.legalAccounting)} indent negative />
              <PnlRow label="Technology & Software" values={p.map((y) => y.techSoftware)} indent negative />
              <PnlRow label="Total Operating" values={p.map((y) => y.totalOperating)} bold negative separator />

              {/* EBITDA */}
              <PnlRow label="EBITDA" values={p.map((y) => y.ebitda)} bold separator />
              <PnlRow label="EBITDA %" values={p.map((y) => y.ebitdaPct)} pct />

              {/* BELOW THE LINE */}
              <PnlRow label="DEBT SERVICE & TAXES" values={p.map(() => "")} bold separator />
              <PnlRow label="Interest Expense" values={p.map((y) => y.interestExpense)} indent negative />
              <PnlRow label="Depreciation" values={p.map((y) => y.depreciation)} indent negative />
              <PnlRow label="Taxable Income" values={p.map((y) => y.taxableIncome)} indent />
              <PnlRow label="Income Tax (28%)" values={p.map((y) => y.incomeTax)} indent negative />
              <PnlRow label="NET INCOME" values={p.map((y) => y.netIncome)} bold separator />
              <PnlRow label="Net Margin %" values={p.map((y) => y.netIncomePct)} pct />

              {/* RATIOS */}
              <PnlRow label="KEY RATIOS" values={p.map(() => "")} bold separator />
              <PnlRow label="DSCR" values={p.map((y) => `${y.dscr.toFixed(2)}x`)} />
              <PnlRow label="Patients / Month" values={p.map((y) => String(y.patientsPerMonth))} />
              <PnlRow label="Avg Transaction Value" values={p.map((y) => fmt(y.avgTransactionValue))} />
              <PnlRow label="DVMs" values={p.map((y) => String(y.dvmCount))} />
              <PnlRow label="Revenue / DVM" values={p.map((y) => fmt(y.revenuePerDvm))} />
            </TableBody>
          </Table>
        </div>
      </section>

      {/* CAPEX WATERFALL */}
      <section>
        <div className="flex items-baseline justify-between">
          <Heading level={2}>Capital Expenditure Waterfall</Heading>
          <Badge color="green">OBBBA 100% Eligible</Badge>
        </div>
        <Divider className="my-4" />
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeader>Year</TableHeader>
              <TableHeader>Phase</TableHeader>
              <TableHeader>Category</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader className="text-right">Cost</TableHeader>
              <TableHeader>Tax Treatment</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {capexSchedule.map((item, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{item.year}</TableCell>
                <TableCell>{item.phase}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell className="text-right font-mono">
                  {fmt(item.cost)}
                </TableCell>
                <TableCell>
                  <Badge
                    color={
                      item.taxTreatment.includes("100%") || item.taxTreatment.includes("OBBBA")
                        ? "green"
                        : item.taxTreatment.includes("ITC") || item.taxTreatment.includes("USDA")
                          ? "blue"
                          : "zinc"
                    }
                  >
                    {item.taxTreatment}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="font-bold border-t-2 border-stone-300">
              <TableCell colSpan={4}>Total Capital Investment</TableCell>
              <TableCell className="text-right font-mono">
                {fmt(capexSchedule.reduce((s, i) => s + i.cost, 0))}
              </TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* DEBT SCHEDULE */}
      <section>
        <Heading level={2}>Debt Schedule</Heading>
        <Divider className="my-4" />
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeader>Instrument</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader className="text-right">Principal</TableHeader>
              <TableHeader className="text-right">Rate</TableHeader>
              <TableHeader className="text-right">Term</TableHeader>
              <TableHeader className="text-right">Annual Payment</TableHeader>
              <TableHeader>Start</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {debtSchedule.map((d, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{d.name}</TableCell>
                <TableCell>
                  <Badge color="zinc">{d.type}</Badge>
                </TableCell>
                <TableCell className="text-right font-mono">
                  {fmt(d.principal)}
                </TableCell>
                <TableCell className="text-right font-mono">
                  {d.rate.toFixed(1)}%
                </TableCell>
                <TableCell className="text-right font-mono">
                  {d.termYears} yr
                </TableCell>
                <TableCell className="text-right font-mono">
                  {fmt(d.annualPayment)}
                </TableCell>
                <TableCell>{d.startYear}</TableCell>
              </TableRow>
            ))}
            <TableRow className="font-bold border-t-2 border-stone-300">
              <TableCell colSpan={5}>Total Annual Debt Service (at peak)</TableCell>
              <TableCell className="text-right font-mono">
                {fmt(debtSchedule.reduce((s, d) => s + d.annualPayment, 0))}
              </TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* OBBBA TAX SHIELD */}
      <section>
        <Heading level={2}>Strategic OBBBA Tax Shield &amp; Incentives</Heading>
        <Divider className="my-4" />
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <MetricCard
            label="OBBBA 100% Deduction (2027)"
            value="$900,000"
            sublabel="100% Bonus Depreciation on qualifying modular clinic + med-stack equipment."
            color="green"
          />
          <MetricCard
            label="One-Time Tax Shield Value"
            value="$252,000"
            sublabel="Immediate cash retention (28% effective rate). Reinvested to offset Phase 1 debt."
            color="green"
          />
          <MetricCard
            label="USDA REAP + ITC (2028)"
            value="$450,000"
            sublabel="Anticipated energy grants and credits for rural vertical ag-vet infrastructure."
            color="blue"
          />
        </div>
      </section>

      {/* CONSERVATIVE ASSUMPTIONS */}
      <section>
        <Heading level={2}>Conservative Assumptions</Heading>
        <Divider className="my-4" />
        <div className="grid lg:grid-cols-2 gap-12 mt-6">
          <div>
            <Subheading>Revenue Assumptions</Subheading>
            <DescriptionList className="mt-4">
              <DescriptionTerm>Year 1 Patient Volume</DescriptionTerm>
              <DescriptionDetails>
                {assumptions.y1PatientsPerMonth} patients/month (480 annually).
                New rural practice with limited awareness.
              </DescriptionDetails>
              <DescriptionTerm>Avg Transaction Value</DescriptionTerm>
              <DescriptionDetails>
                ${assumptions.y1AvgTransaction} starting, increasing 3% annually
                for fee schedule adjustments.
              </DescriptionDetails>
              <DescriptionTerm>Surgery Rate</DescriptionTerm>
              <DescriptionDetails>
                {(assumptions.surgeryPct * 100).toFixed(0)}% of patients require
                surgical intervention at avg $
                {assumptions.avgSurgeryValue.toLocaleString()}.
              </DescriptionDetails>
              <DescriptionTerm>Patient Capacity</DescriptionTerm>
              <DescriptionDetails>
                Capped at 85 patients/month per DVM to maintain quality of care.
                2nd DVM hired in Year 5 (2031).
              </DescriptionDetails>
              <DescriptionTerm>Growth Trajectory</DescriptionTerm>
              <DescriptionDetails>
                Y2: 35%, Y3: 25%, Y4: 15%, Y5: 10%, Mature: 4% annually.
                Deliberately front-loaded slower than industry average.
              </DescriptionDetails>
              <DescriptionTerm>Boarding Revenue</DescriptionTerm>
              <DescriptionDetails>
                Begins 2030 (Phase 3) at $
                {assumptions.boardingMonthlyRevenue.toLocaleString()}/mo, growing
                10% annually.
              </DescriptionDetails>
              <DescriptionTerm>Energy Revenue</DescriptionTerm>
              <DescriptionDetails>
                VPP/DSGS enrollment from 2028 at $
                {assumptions.energyMonthlyRevenue.toLocaleString()}/mo. Subject
                to CPUC program continuation.
              </DescriptionDetails>
            </DescriptionList>
          </div>
          <div>
            <Subheading>Cost Assumptions</Subheading>
            <DescriptionList className="mt-4">
              <DescriptionTerm>COGS</DescriptionTerm>
              <DescriptionDetails>
                {(assumptions.cogsPctOfServiceRevenue * 100).toFixed(0)}% of
                service revenue (medical supplies). Pharmacy at{" "}
                {(assumptions.pharmacyCogsPct * 100).toFixed(0)}% COGS.
              </DescriptionDetails>
              <DescriptionTerm>Labor Model</DescriptionTerm>
              <DescriptionDetails>
                DVM: ${(assumptions.dvmSalary / 1000).toFixed(0)}k (Emily), Associate: $
                {(assumptions.associateDvmSalary / 1000).toFixed(0)}k.
                Techs: ${(assumptions.techSalary / 1000).toFixed(0)}k. Admin: $
                {(assumptions.adminSalary / 1000).toFixed(0)}k. All include 28%
                payroll taxes and benefits loading.
              </DescriptionDetails>
              <DescriptionTerm>Cost Inflation</DescriptionTerm>
              <DescriptionDetails>
                3% annual increase applied to all operating costs. Matches
                historical CPI for San Diego metro.
              </DescriptionDetails>
              <DescriptionTerm>Debt Service</DescriptionTerm>
              <DescriptionDetails>
                Blended across 4 instruments: Ag land loan (6.5%), SBA 504
                (5.5%), C-PACE (5.0%), working capital (8.0%). Peak annual
                service: $
                {debtSchedule
                  .reduce((s, d) => s + d.annualPayment, 0)
                  .toLocaleString()}
                .
              </DescriptionDetails>
              <DescriptionTerm>Tax Rate</DescriptionTerm>
              <DescriptionDetails>
                28% blended effective rate (CA franchise tax + federal corporate).
                Year 1 shows significant loss due to OBBBA bonus depreciation.
              </DescriptionDetails>
              <DescriptionTerm>Insurance</DescriptionTerm>
              <DescriptionDetails>
                ${(assumptions.y1Insurance / 1000).toFixed(0)}k/year (malpractice
                + property + general liability). Increases 50% when 2nd DVM is
                added.
              </DescriptionDetails>
            </DescriptionList>
          </div>
        </div>
      </section>

      {/* STAFFING TIMELINE */}
      <section>
        <Heading level={2}>Staffing Plan</Heading>
        <Divider className="my-4" />
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeader>Year</TableHeader>
              <TableHeader>DVMs</TableHeader>
              <TableHeader>Vet Techs</TableHeader>
              <TableHeader>Admin</TableHeader>
              <TableHeader>Total Headcount</TableHeader>
              <TableHeader>Trigger</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">2027-2028</TableCell>
              <TableCell>1 (Emily)</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell className="font-mono">3</TableCell>
              <TableCell>Launch team</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2029</TableCell>
              <TableCell>1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>1</TableCell>
              <TableCell className="font-mono">4</TableCell>
              <TableCell>Patient volume approaching 1 DVM capacity</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2030</TableCell>
              <TableCell>1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>1</TableCell>
              <TableCell className="font-mono">4</TableCell>
              <TableCell>Boarding barn opens; evaluating associate DVM need</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2031</TableCell>
              <TableCell>2</TableCell>
              <TableCell>2</TableCell>
              <TableCell>1</TableCell>
              <TableCell className="font-mono">5</TableCell>
              <TableCell>Associate DVM hired; patient cap reached for 1 DVM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2032+</TableCell>
              <TableCell>2</TableCell>
              <TableCell>2</TableCell>
              <TableCell>2</TableCell>
              <TableCell className="font-mono">6</TableCell>
              <TableCell>2nd admin for expanded compound operations</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* FOOTER */}
      <div className="mt-12 text-center p-8 border-t border-zinc-100">
        <p className="text-[10px] text-zinc-400 tracking-[0.3em] uppercase">
          Verification Status: Conservative estimates based on AVMA industry
          benchmarks, IBIS World 2026 data, and San Diego County market
          conditions. All projections assume no recession, no pandemic, and
          stable regulatory environment. Feb 2026.
        </p>
      </div>
    </div>
  );
};
