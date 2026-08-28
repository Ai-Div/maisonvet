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
} from "./projections-data";

const projections = generateProjections();

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

function PnlRow({
  label,
  values,
  bold = false,
  negative = false,
  pct = false,
  indent = false,
  separator = false,
  owner = false,
}: {
  label: string;
  values: (number | string)[];
  bold?: boolean;
  negative?: boolean;
  pct?: boolean;
  indent?: boolean;
  separator?: boolean;
  owner?: boolean;
}) {
  const cellClass = `text-right font-mono text-sm whitespace-nowrap ${bold ? "font-bold" : ""}`;
  return (
    <TableRow className={`${separator ? "border-t-2 border-stone-300" : ""} ${owner ? "bg-teal-50/60" : ""}`}>
      <TableCell
        className={`sticky left-0 z-10 min-w-[240px] ${owner ? "bg-teal-50/60 font-semibold" : "bg-white"} ${bold ? "font-bold" : ""} ${indent ? "pl-8" : ""}`}
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
                ? `(${fmt(Math.abs(v))})`
                : fmt(v)}
        </TableCell>
      ))}
    </TableRow>
  );
}

export const Financials = () => {
  const p = projections;
  const last = p[p.length - 1];
  const breakEven = p.find((y) => y.netIncome > 0);
  const dscrCross = p.find((y) => y.dscr >= 1.25);
  const cashTrough = p.reduce((m, y) => (y.cumulativeFCF < m.cumulativeFCF ? y : m), p[0]);

  return (
    <div className="space-y-16 pb-24">
      {/* OWNERSHIP */}
      <section>
        <Heading level={2}>Ownership &amp; Operating Structure</Heading>
        <Divider className="my-4" />
        <p className="mt-4 max-w-3xl text-sm text-stone-600 leading-relaxed">
          Two primary owners, each holding the business through their own LLC:{" "}
          <strong>Emily Gray LLC</strong> (licensed veterinarian) and{" "}
          <strong>Rachael Gray LLC</strong> (operations manager). At launch the clinic runs
          lean — Emily and Rachael are the only two working in it — and adds veterinary
          technicians, front-desk support, and an associate veterinarian only as patient
          volume and revenue justify each hire. Owner payments are made to their LLCs as
          guaranteed payments and are labeled by name in the model below.
        </p>
      </section>

      {/* KEY METRICS */}
      <section>
        <Heading level={2}>Key Performance Indicators</Heading>
        <Divider className="my-4" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <MetricCard
            label={`Net Revenue at Maturity (Yr ${last.opYear})`}
            value={fmt(last.netRevenue)}
            sublabel={`${last.vetCount} vets, ${last.patientsPerMonth} visits/mo, ${last.headcount} staff`}
            color="stone"
          />
          <MetricCard
            label={`EBITDA at Maturity (Yr ${last.opYear})`}
            value={fmt(last.ebitda)}
            sublabel={`${fmtPct(last.ebitdaPct)} margin`}
            color="green"
          />
          <MetricCard
            label="Net-Income Break-even"
            value={breakEven ? `Year ${breakEven.opYear}` : "10+ yrs"}
            sublabel={breakEven ? `${fmt(breakEven.netIncome)} net income` : "Beyond 10 years"}
            color="blue"
          />
          <MetricCard
            label={`DSCR at Maturity (Yr ${last.opYear})`}
            value={`${last.dscr.toFixed(2)}x`}
            sublabel={`Clears 1.25x in Year ${dscrCross?.opYear ?? "—"} (target 1.25x+)`}
            color={last.dscr >= 1.25 ? "green" : "red"}
          />
        </div>
        <p className="mt-6 max-w-3xl text-sm text-stone-600 leading-relaxed">
          DSCR clears 1.25x in Year {dscrCross?.opYear ?? "—"} and runs 1.5–1.7x at maturity.
          Cumulative free cash flow troughs at{" "}
          <strong>{fmt(cashTrough.cumulativeFCF)}</strong> in Year {cashTrough.opYear}, recovering
          toward break-even by Year {last.opYear} — the operating reserve and equity cushion carry
          the clinic through that trough during the ramp.
        </p>
      </section>

      {/* FULL P&L TABLE */}
      <section>
        <div className="flex items-baseline justify-between">
          <Heading level={2}>
            Clinic 10-Year Operating Projection (Year 1 = first full year open)
          </Heading>
          <Badge color="zinc">Conservative Scenario</Badge>
        </div>
        <Divider className="my-4" />
        <div className="overflow-x-auto mt-6 -mx-4 px-4">
          <Table className="min-w-[1400px]">
            <TableHead>
              <TableRow>
                <TableHeader className="sticky left-0 bg-white z-10 min-w-[240px]">
                  Line Item
                </TableHeader>
                {p.map((y) => (
                  <TableHeader key={y.year} className="text-right whitespace-nowrap">
                    Y{y.opYear}
                    <br />
                    <span className="text-[10px] text-zinc-400 font-normal">{y.phase}</span>
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* DRIVERS */}
              <PnlRow label="DRIVERS" values={p.map(() => "")} bold separator />
              <PnlRow label="Patient Visits / Month" values={p.map((y) => String(y.patientsPerMonth))} indent />
              <PnlRow label="Avg Transaction Value" values={p.map((y) => fmt(y.avgTransactionValue))} indent />
              <PnlRow label="Veterinarians" values={p.map((y) => String(y.vetCount))} indent />
              <PnlRow label="Clinic Headcount" values={p.map((y) => String(y.headcount))} indent />

              {/* REVENUE */}
              <PnlRow label="REVENUE" values={p.map(() => "")} bold separator />
              <PnlRow label="Exam & Wellness" values={p.map((y) => y.examRevenue)} indent />
              <PnlRow label="Surgery" values={p.map((y) => y.surgeryRevenue)} indent />
              <PnlRow label="Diagnostics & Imaging" values={p.map((y) => y.diagnosticsRevenue)} indent />
              <PnlRow label="Dentistry" values={p.map((y) => y.dentistryRevenue)} indent />
              <PnlRow label="Pharmacy & Retail" values={p.map((y) => y.pharmacyRevenue)} indent />
              <PnlRow label="Boarding & Lodging" values={p.map((y) => y.boardingRevenue)} indent />
              <PnlRow label="Equine / Ambulatory" values={p.map((y) => y.equineRevenue)} indent />
              <PnlRow label="Energy (VPP / Net Metering)" values={p.map((y) => y.energyRevenue)} indent />
              <PnlRow label="Less: Discounts & Bad Debt" values={p.map((y) => y.discounts)} indent negative />
              <PnlRow label="Net Revenue" values={p.map((y) => y.netRevenue)} bold separator />

              {/* COGS */}
              <PnlRow label="COST OF SERVICES" values={p.map(() => "")} bold separator />
              <PnlRow label="Medical & Surgical Supplies" values={p.map((y) => y.medicalSupplies)} indent negative />
              <PnlRow label="Pharmacy COGS" values={p.map((y) => y.pharmacyCOGS)} indent negative />
              <PnlRow label="Reference Lab Fees" values={p.map((y) => y.referenceLab)} indent negative />
              <PnlRow label="Boarding COGS" values={p.map((y) => y.boardingCOGS)} indent negative />
              <PnlRow label="Total COGS" values={p.map((y) => y.totalCOGS)} bold negative separator />
              <PnlRow label="Gross Profit" values={p.map((y) => y.grossProfit)} bold />
              <PnlRow label="Gross Margin %" values={p.map((y) => y.grossMarginPct)} pct />

              {/* LABOR & OWNERSHIP */}
              <PnlRow label="LABOR & OWNERSHIP" values={p.map(() => "")} bold separator />
              <PnlRow label="Emily Gray LLC — Veterinarian" values={p.map((y) => y.emilyComp)} indent negative owner />
              <PnlRow label="Rachael Gray LLC — Operations" values={p.map((y) => y.rachaelComp)} indent negative owner />
              <PnlRow label="Relief / Locum Veterinarian" values={p.map((y) => y.reliefComp)} indent negative />
              <PnlRow label="Veterinary Technicians & Assistants" values={p.map((y) => y.techComp)} indent negative />
              <PnlRow label="Front Desk / Admin Support" values={p.map((y) => y.adminComp)} indent negative />
              <PnlRow label="Payroll Taxes & Benefits (staff)" values={p.map((y) => y.payrollStaff)} indent negative />
              <PnlRow label="Total Labor" values={p.map((y) => y.totalLabor)} bold negative separator />
              <PnlRow label="Labor % of Net Revenue" values={p.map((y) => y.laborPct)} pct />

              {/* OPERATING */}
              <PnlRow label="OPERATING EXPENSES" values={p.map(() => "")} bold separator />
              <PnlRow label="Facilities Maint & R&R Reserve" values={p.map((y) => y.maintenance)} indent negative />
              <PnlRow label="Utilities (net of solar)" values={p.map((y) => y.netUtilities)} indent negative />
              <PnlRow label="Insurance" values={p.map((y) => y.insurance)} indent negative />
              <PnlRow label="Marketing" values={p.map((y) => y.marketing)} indent negative />
              <PnlRow label="Office & Admin" values={p.map((y) => y.officeAdmin)} indent negative />
              <PnlRow label="Legal & Accounting" values={p.map((y) => y.legalAccounting)} indent negative />
              <PnlRow label="Software & Tech (PIMS)" values={p.map((y) => y.software)} indent negative />
              <PnlRow label="Credit Card Processing" values={p.map((y) => y.ccProcessing)} indent negative />
              <PnlRow label="Continuing Ed & Licensing" values={p.map((y) => y.continuingEd)} indent negative />
              <PnlRow label="Property Tax" values={p.map((y) => y.propertyTax)} indent negative />
              <PnlRow label="Total Operating Expenses" values={p.map((y) => y.totalOpex)} bold negative separator />

              {/* SUMMARY */}
              <PnlRow label="SUMMARY & COVERAGE" values={p.map(() => "")} bold separator />
              <PnlRow label="EBITDA" values={p.map((y) => y.ebitda)} bold />
              <PnlRow label="EBITDA Margin" values={p.map((y) => y.ebitdaPct)} pct />
              <PnlRow label="Total Debt Service (P&I)" values={p.map((y) => y.debtService)} indent negative />
              <PnlRow label="DSCR" values={p.map((y) => `${y.dscr.toFixed(2)}x`)} />
              <PnlRow label="Depreciation" values={p.map((y) => y.depreciation)} indent negative />
              <PnlRow label="Pre-Tax Income" values={p.map((y) => y.pretaxIncome)} indent />
              <PnlRow label="Income Tax (28%)" values={p.map((y) => y.incomeTax)} indent negative />
              <PnlRow label="Net Income" values={p.map((y) => y.netIncome)} bold separator />
              <PnlRow label="Net Income Margin" values={p.map((y) => y.netIncomePct)} pct />
              <PnlRow label="Free Cash Flow (after debt)" values={p.map((y) => y.freeCashFlow)} />
              <PnlRow label="Cumulative Free Cash Flow" values={p.map((y) => y.cumulativeFCF)} bold />
            </TableBody>
          </Table>
        </div>
        <p className="mt-4 text-xs text-stone-400 max-w-3xl">
          Owner LLC payments (Emily, Rachael) are guaranteed payments; payroll taxes &amp;
          benefits shown apply to employees. Full $4M campus debt service is carried by the
          clinic; the equipment lease retires after Year 5. Excludes one-time bonus
          depreciation and the residential build.
        </p>
      </section>

      {/* CAPEX */}
      <section>
        <div className="flex items-baseline justify-between">
          <Heading level={2}>Buildout — Uses of Funds ($3.25M)</Heading>
          <Badge color="green">OBBBA-Eligible</Badge>
        </div>
        <Divider className="my-4" />
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeader>Year</TableHeader>
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
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell className="text-right font-mono">{fmt(item.cost)}</TableCell>
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
              <TableCell colSpan={3}>Total Capital Investment</TableCell>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {debtSchedule.map((d, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{d.name}</TableCell>
                <TableCell>
                  <Badge color="zinc">{d.type}</Badge>
                </TableCell>
                <TableCell className="text-right font-mono">{fmt(d.principal)}</TableCell>
                <TableCell className="text-right font-mono">{d.rate.toFixed(1)}%</TableCell>
                <TableCell className="text-right font-mono">{d.termYears} yr</TableCell>
                <TableCell className="text-right font-mono">{fmt(d.annualPayment)}</TableCell>
              </TableRow>
            ))}
            <TableRow className="font-bold border-t-2 border-stone-300">
              <TableCell colSpan={5}>Total Annual Debt Service (Years 1–5)</TableCell>
              <TableCell className="text-right font-mono">
                {fmt(debtSchedule.reduce((s, d) => s + d.annualPayment, 0))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* STAFFING PLAN */}
      <section>
        <Heading level={2}>Staffing Plan — Hire as Revenue Grows</Heading>
        <Divider className="my-4" />
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeader>Operating Year</TableHeader>
              <TableHeader>Vets</TableHeader>
              <TableHeader>Techs</TableHeader>
              <TableHeader>Front Desk</TableHeader>
              <TableHeader>Headcount</TableHeader>
              <TableHeader>Trigger</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { y: "Year 1", trig: "Lean launch — Emily (vet) + Rachael (ops) only" },
              { y: "Year 2", trig: "Volume supports first veterinary technician" },
              { y: "Year 3", trig: "Add dedicated front-desk support; relief vet as needed" },
              { y: "Year 4", trig: "Surgery/diagnostics volume — 2nd technician" },
              { y: "Year 6", trig: "Relief/locum vet coverage scales with volume" },
              { y: "Year 10", trig: "Mature staffing for compound operations" },
            ].map((row, idx) => {
              const i = [0, 1, 2, 3, 5, 9][idx];
              const y = p[i];
              return (
                <TableRow key={row.y}>
                  <TableCell className="font-medium">{row.y}</TableCell>
                  <TableCell>1 (Emily){y.reliefComp > 0 ? " + relief" : ""}</TableCell>
                  <TableCell>{assumptions.techs[i]}</TableCell>
                  <TableCell>{assumptions.admin[i]} + Rachael</TableCell>
                  <TableCell className="font-mono">{y.headcount}</TableCell>
                  <TableCell>{row.trig}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </section>

      {/* ASSUMPTIONS */}
      <section>
        <Heading level={2}>Conservative Assumptions</Heading>
        <Divider className="my-4" />
        <div className="grid lg:grid-cols-2 gap-12 mt-6">
          <div>
            <Subheading>Revenue</Subheading>
            <DescriptionList className="mt-4">
              <DescriptionTerm>Year 1 Volume</DescriptionTerm>
              <DescriptionDetails>
                {assumptions.y1VisitsPerMonth} visits/month (~6/day) — deliberately slow ramp
                for a new rural destination practice, growing to ~300/month (~14/day) at
                maturity, handled by Emily plus scaling relief/locum coverage.
              </DescriptionDetails>
              <DescriptionTerm>Avg Transaction Value</DescriptionTerm>
              <DescriptionDetails>
                ${assumptions.examAtv} base office visit, +{(assumptions.inflation * 100).toFixed(0)}%/yr.
                Surgery {(assumptions.surgeryRate * 100).toFixed(0)}% attach @ $
                {assumptions.surgeryValue.toLocaleString()}; diagnostics{" "}
                {(assumptions.diagnosticsRate * 100).toFixed(0)}%; dentistry{" "}
                {(assumptions.dentistryRate * 100).toFixed(0)}%.
              </DescriptionDetails>
              <DescriptionTerm>Discounts &amp; Bad Debt</DescriptionTerm>
              <DescriptionDetails>
                {(assumptions.discountBadDebtPct * 100).toFixed(1)}% allowance against gross
                revenue — a conservative contra-revenue line the prior model omitted.
              </DescriptionDetails>
              <DescriptionTerm>Other Revenue</DescriptionTerm>
              <DescriptionDetails>
                Equine/ambulatory and energy (VPP/net metering) from Year 2; boarding &amp;
                lodging from Year 3.
              </DescriptionDetails>
            </DescriptionList>
          </div>
          <div>
            <Subheading>Costs &amp; Ownership</Subheading>
            <DescriptionList className="mt-4">
              <DescriptionTerm>Owner Compensation</DescriptionTerm>
              <DescriptionDetails>
                Emily Gray LLC ${(assumptions.emilySalary / 1000).toFixed(0)}k (veterinarian),
                Rachael Gray LLC ${(assumptions.rachaelSalary / 1000).toFixed(0)}k (operations) —
                guaranteed payments, +{(assumptions.inflation * 100).toFixed(0)}%/yr.
              </DescriptionDetails>
              <DescriptionTerm>Staff Hiring</DescriptionTerm>
              <DescriptionDetails>
                Relief/locum vet ${(assumptions.reliefVetRate / 1000).toFixed(0)}k/FTE scaling with
                volume, techs ${(assumptions.techSalary / 1000).toFixed(0)}k, front-desk $
                {(assumptions.adminSalary / 1000).toFixed(0)}k — added only as volume requires,
                with {(assumptions.staffBurdenPct * 100).toFixed(0)}% payroll burden.
              </DescriptionDetails>
              <DescriptionTerm>COGS</DescriptionTerm>
              <DescriptionDetails>
                {(assumptions.cogsSuppliesPct * 100).toFixed(0)}% supplies, pharmacy{" "}
                {(assumptions.pharmacyCogsPct * 100).toFixed(0)}%, reference lab{" "}
                {(assumptions.referenceLabPct * 100).toFixed(0)}% of diagnostics.
              </DescriptionDetails>
              <DescriptionTerm>Debt Service</DescriptionTerm>
              <DescriptionDetails>
                $3.25M campus capitalized with ~$650k equity + $154k energy grants/credits,
                leaving ~$2.44M debt (${assumptions.campusDebtAnnual.toLocaleString()}/yr); equipment
                lease retires after Year 5. 28% blended tax; 3% cost inflation.
              </DescriptionDetails>
            </DescriptionList>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="mt-12 text-center p-8 border-t border-zinc-100">
        <p className="text-[10px] text-zinc-400 tracking-[0.3em] uppercase">
          Conservative planning estimates based on AVMA benchmarks and San Diego County market
          conditions. Owner-operated lean launch. Not a guarantee of results — refine with
          actuals once operating.
        </p>
      </div>
    </div>
  );
};
