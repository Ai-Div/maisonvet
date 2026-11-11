# 2026 household tax model: Div Digital LLC (Tim) + Rachael's salon, MFJ, 2 kids. Illustrative.
FED=[(24800,.10),(100800,.12),(211400,.22),(403550,.24),(512450,.32),(768700,.35),(1e12,.37)]
FED=[(24800,.10),(100800,.12),(211400,.22),(403550,.24),(512450,.32),(768700,.35),(1e12,.37)]
# NOTE: real 2026 MFJ: 10% to 24,800; 12% to 100,800; 22% to 211,400; 24% to 403,550; 32% to 512,450; 35% to 768,700
CA=[(23018,.01),(54568,.02),(86124,.04),(119553,.06),(151097,.08),(771810,.093),(926163,.103),(1543604,.113),(1e12,.123)]
def brk(t,b):
    tax=0;prev=0
    for top,r in b:
        if t>prev: tax+=(min(t,top)-prev)*r
        prev=top
    return tax
WB=184500
def se_tax(net, wages=0):
    e=max(0,net)*0.9235
    ss=0.124*min(e,max(0,WB-wages)); med=0.029*e
    return ss+med, e
def calc(tim_sc=270000, r_sc=30000, tips=6000, scorp_salary=None, tim_401k_def=0, tim_401k_er=0,
         r_401k=0, hsa=0, kids=0, kids_via='div', office=0, str_fed=0, str_ca=0, charity_cash=0,
         llc_fee=2500, extra_costs=0, label=''):
    # business deductions
    div=tim_sc-office-(kids if kids_via=='div' else 0)-extra_costs
    rs=r_sc-(kids if kids_via=='salon' else 0)
    payroll=0; fica_wages=0; w2=0; k1=0; ca_entity=0
    if scorp_salary:
        w2=scorp_salary
        er_fica=0.0765*w2; futa_sui=42+238; er_401k=tim_401k_er
        k1=div-w2-er_fica-futa_sui-er_401k-(0.0765*kids if kids_via=='div' else 0)
        payroll=0.153*w2 + (0.153*kids if kids_via=='div' else 0)  # both halves; kids owe FICA under an S-corp
        ca_entity=max(800,0.015*k1)
        sdi=0.013*w2
        tim_se=0; tim_e=0; halfse_t=0
        ded_401k_above=0
        w2_taxable=w2-tim_401k_def
        tim_qbi=k1
    else:
        sdi=0; futa_sui=0
        tim_se,tim_e=se_tax(div); halfse_t=tim_se/2
        ca_entity=800+llc_fee
        ded_401k_above=tim_401k_def+tim_401k_er
        w2_taxable=0
        tim_qbi=div-halfse_t-tim_401k_er-tim_401k_def*0  # elective deferral of sole prop: treat employer part reduces QBI
    r_se,r_e=se_tax(rs); halfse_r=r_se/2
    addl=0.009*max(0,(w2+tim_e+r_e)-250000)
    agi=(w2_taxable+k1+ (0 if scorp_salary else div) + rs - halfse_t - halfse_r - ded_401k_above - r_401k - hsa - str_fed)
    # deductions
    ca_agi=agi+hsa+str_fed-str_ca
    ca_ti=max(0,ca_agi-11800); ca_tax=max(0,brk(ca_ti,CA)-(2*153+2*475))
    salt=min(ca_tax+sdi, 40400)
    itemized=salt+charity_cash
    std=32200
    ded=max(std,itemized)
    nonitem_charity=min(charity_cash,2000) if ded==std else 0
    # tips deduction (federal only), phase-out $100 per $1,000 MAGI over 300k
    tipd=max(0,min(tips,25000,rs)-0.1*max(0,agi-300000)//1000*1000/1)
    tipd=max(0,min(tips,25000,rs)-100*max(0,(agi-300000))//1000)
    ti=max(0,agi-ded-nonitem_charity-tipd)
    qbi_base=max(0,tim_qbi)+max(0,rs-halfse_r-r_401k)
    qbi=min(0.2*qbi_base,0.2*ti)
    taxable=ti-qbi
    fed=max(0,brk(taxable,FED)-4400)
    total=fed+tim_se+r_se+addl+payroll+ca_tax+ca_entity+sdi+futa_sui
    return dict(label=label,agi=round(agi),taxable=round(taxable),qbi=round(qbi),fed=round(fed),se_fica=round(tim_se+r_se+addl+payroll+futa_sui),
                ca=round(ca_tax),ca_entity=round(ca_entity),sdi=round(sdi),total=round(total))
if __name__=='__main__':
    b=calc(label='Baseline: Div LLC (Schedule C)')
    rows=[b]
    def d(**k):
        r=calc(**k); r['save']=b['total']-r['total']; rows.append(r); return r
    d(label='S-corp, $110K salary', scorp_salary=110000, extra_costs=2700)  # payroll svc 1,200 + 1120S prep 1,500
    d(label='Solo 401(k) $24.5K deferral + $15.5K employer', tim_401k_def=24500, tim_401k_er=15500)
    d(label='Solo 401(k) max $72K', tim_401k_def=24500, tim_401k_er=47500)
    d(label='Rachael solo 401(k) $10K', r_401k=10000)
    d(label='Kids $8K each via Div LLC (FICA-free)', kids=16000)
    d(label='Home office (renters) $7.8K', office=7800)
    d(label='HSA family $8,750 (federal only)', hsa=8750)
    d(label='Tips deduction OFF (to value it)', tips=0)
    d(label='STR $350K Joshua Tree yr1', str_fed=97000, str_ca=15000)
    pk=d(label='PACKAGE: 401k $40K + Rachael $10K + kids + office + HSA', tim_401k_def=24500, tim_401k_er=15500, r_401k=10000, kids=16000, office=7800, hsa=8750)
    pk2=d(label='PACKAGE + S-corp (kids via salon)', scorp_salary=110000, extra_costs=2700, tim_401k_def=24500, tim_401k_er=15500, r_401k=10000, kids=16000, kids_via='salon', office=7800, hsa=8750)
    for r in rows: print(r)
