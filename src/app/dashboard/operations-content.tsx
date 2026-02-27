import { Heading, Subheading } from "@/components/heading";
import { Divider } from "@/components/divider";
import { Badge } from "@/components/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/table";
import { 
  UsersIcon, 
  CurrencyDollarIcon, 
  ClockIcon, 
  BeakerIcon,
  BoltIcon,
  QueueListIcon,
  CheckCircleIcon,
  PencilSquareIcon,
  PrinterIcon,
  CircleStackIcon
} from "@heroicons/react/20/solid";

export const OperationsSummary = () => (
  <div className="space-y-10 pb-20">
    {/* KPI STRIP - TOP LAYER */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { label: "Patients Today", value: "38", trend: "▴ 12%", sub: "Waiting: 6", icon: UsersIcon, color: "zinc" },
        { label: "Revenue Today", value: "$4,260", trend: "▴ 8%", sub: "ATV: $242", icon: CurrencyDollarIcon, color: "green" },
        { label: "Room Utilization", value: "63%", trend: "Stable", sub: "5/8 Occupied", icon: ClockIcon, color: "blue" },
        { label: "Infrastructure", value: "Optimal", trend: "1 Alert", sub: "Autoclave: Maint Due", icon: BeakerIcon, color: "amber" },
      ].map((kpi) => (
        <div key={kpi.label} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm opacity-90">
          <div className="flex items-center justify-between">
            <kpi.icon className="size-5 text-zinc-400" />
            <span className={`text-[10px] font-bold text-${kpi.color}-600 uppercase`}>{kpi.trend}</span>
          </div>
          <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-zinc-500">{kpi.label}</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-zinc-950">{kpi.value}</span>
          </div>
          <p className="mt-1 text-[10px] text-zinc-400 font-medium italic">{kpi.sub}</p>
        </div>
      ))}
    </div>

    {/* PRIMARY CLINICAL WORKFLOW - MIDDLE LAYER */}
    <div className="grid lg:grid-cols-3 gap-8">
      {/* 1. CLINICAL QUEUE (Synthetic from PIMS Analysis) */}
      <section className="lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <QueueListIcon className="size-5 text-zinc-400" />
            <Subheading>Clinical Queue</Subheading>
          </div>
          <div className="flex gap-2">
             <Badge color="blue" className="opacity-75">Waiting (6)</Badge>
             <Badge color="zinc" className="opacity-50">In Consult (4)</Badge>
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-sm opacity-95">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>#</TableHeader>
                <TableHeader>Patient (Species)</TableHeader>
                <TableHeader>Reason / Subjective</TableHeader>
                <TableHeader>Wait</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader className="text-right">Act</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { id: "48", patient: "Max (Labrador)", owner: "J. Young", reason: "Vaccination due", wait: "12min", status: "Arrived", badge: "zinc" },
                { id: "49", patient: "Bella (Siamese)", owner: "M. Imran", reason: "Follow-up: post-spay", wait: "8min", status: "Checked-in", badge: "blue" },
                { id: "50", patient: "Rocky (Bulldog)", owner: "Y. Tan", reason: "Chief complaint: limping", wait: "3min", status: "Confirmed", badge: "zinc" },
                { id: "51", patient: "Luna (Equine)", owner: "E. Gray", reason: "TPLO Follow-up", wait: "1min", status: "Unloading", badge: "zinc" },
              ].map((apt) => (
                <TableRow key={apt.id}>
                  <TableCell className="font-mono text-xs text-zinc-400">{apt.id}</TableCell>
                  <TableCell>
                    <div className="font-medium text-zinc-950">{apt.patient}</div>
                    <div className="text-[10px] text-zinc-400">{apt.owner}</div>
                  </TableCell>
                  <TableCell className="text-zinc-500 text-xs italic">"{apt.reason}"</TableCell>
                  <TableCell className="text-zinc-500 text-xs">{apt.wait}</TableCell>
                  <TableCell><Badge color={apt.badge as any}>{apt.status}</Badge></TableCell>
                  <TableCell className="text-right">
                    <button className="p-1 text-zinc-300 hover:text-zinc-900 transition-colors">
                      <PencilSquareIcon className="size-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* 2. DOCTOR STATUS BOARD (Synthetic from Analysis) */}
      <section>
        <Subheading className="mb-4">Veterinarians On Shift</Subheading>
        <div className="space-y-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm opacity-95">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-600">EG</div>
              <div>
                <p className="text-sm font-bold text-zinc-950">Dr. Emily Gray</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="size-1.5 rounded-full bg-blue-500" />
                  <span className="text-[10px] font-medium text-zinc-500 uppercase">In Consultation</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-50">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tight">Active Patient</p>
              <p className="text-sm font-medium text-zinc-900 mt-1">Max #48 · Labrador</p>
              <p className="text-[10px] text-zinc-500 italic mt-0.5">Started: 10:23 AM (14m elapsed)</p>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-stone-50 p-5 shadow-sm opacity-80 border-dashed">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-400">?</div>
              <div>
                <p className="text-sm font-bold text-zinc-400 italic">Dr. Position Open</p>
                <p className="text-[10px] font-medium text-zinc-400 uppercase mt-0.5">Recruiting...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* LOWER LAYER - INFRASTRUCTURE & BILLING */}
    <div className="grid lg:grid-cols-2 gap-8">
      {/* CHECKOUT / POS DISCHARGE QUEUE */}
      <section>
        <div className="flex items-center gap-2 mb-4">
           <CurrencyDollarIcon className="size-5 text-zinc-400" />
           <Subheading>Discharge & Billing</Subheading>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-sm opacity-95">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Patient</TableHeader>
                <TableHeader>Service Items</TableHeader>
                <TableHeader className="text-right">Total</TableHeader>
                <TableHeader className="text-right">Action</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { patient: "Bella", items: "Consult + Follow-up", total: "$45.00", status: "Paid", badge: "green" },
                { patient: "Max", items: "Consult + DHPP Vaccine", total: "$127.50", status: "Unpaid", badge: "amber" },
              ].map((bill, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{bill.patient}</TableCell>
                  <TableCell className="text-xs text-zinc-500 italic">{bill.items}</TableCell>
                  <TableCell className="text-right font-mono text-xs">{bill.total}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                       <Badge color={bill.badge as any}>{bill.status}</Badge>
                       <button className="text-zinc-300 hover:text-zinc-600"><PrinterIcon className="size-4"/></button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* SOVEREIGN INFRASTRUCTURE MONITOR */}
      <section>
        <div className="flex items-center gap-2 mb-4">
           <BoltIcon className="size-5 text-zinc-400" />
           <Subheading>Compound Infrastructure</Subheading>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-zinc-200 bg-stone-50 p-5 opacity-90">
            <div className="flex justify-between items-start">
              <BoltIcon className="size-4 text-blue-500" />
              <Badge color="green">Sovereign</Badge>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-mono text-zinc-900 leading-none">242 kW</p>
              <p className="text-[10px] text-zinc-500 uppercase font-bold mt-2">Microgrid Production</p>
              <div className="mt-3 w-full bg-zinc-200 h-1 rounded-full overflow-hidden">
                 <div className="bg-green-500 h-full w-[98%]" />
              </div>
              <p className="text-[9px] text-zinc-400 mt-1">98% Battery SoC</p>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-stone-50 p-5 opacity-90 text-stone-900">
            <div className="flex justify-between items-start">
              <CircleStackIcon className="size-4 text-blue-400" />
              <Badge color="blue">Active</Badge>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-mono text-stone-950 leading-none">52 GPM</p>
              <p className="text-[10px] text-stone-500 uppercase font-bold mt-2">Well Flow Rate</p>
              <p className="text-[11px] text-stone-950 font-medium mt-3">24,000 Gal</p>
              <p className="text-[9px] text-stone-400 mt-0.5">Reserve Storage Tank</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* FOOTER - SYSTEM STATUS */}
    <div className="flex items-center justify-center gap-6 py-8 border-t border-zinc-50 opacity-40">
       <div className="flex items-center gap-1.5"><CheckCircleIcon className="size-3 text-green-500" /> <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">PIMS: Shepherd Cloud Linked</span></div>
       <div className="flex items-center gap-1.5"><CheckCircleIcon className="size-3 text-green-500" /> <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">VPP Interconnect: Active</span></div>
       <div className="flex items-center gap-1.5"><CheckCircleIcon className="size-3 text-green-500" /> <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Water PIN: Verified</span></div>
    </div>
  </div>
);
