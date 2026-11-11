# 2026 household tax model, illustrative. Div Digital LLC is taxed as an S-corp (IRS CP261:
# effective 2024-01-01); Tim is assumed sole shareholder and takes a W-2 salary. Rachael's
# salon is a sole proprietorship. MFJ, two kids. Div profit is before Tim's salary and
# already net of payroll-service / 1120-S prep costs.
FED=[(24800,.10),(100800,.12),(211400,.22),(403550,.24),(512450,.32),(768700,.35),(1e12,.37)]
CA=[(23018,.01),(54568,.02),(86124,.04),(119553,.06),(151097,.08),(771810,.093),(926163,.103),(1543604,.113),(1e12,.123)]
WB=184500
def brk(t,b):
    tax=0;prev=0
    for top,r in b:
        if t>prev: tax+=(min(t,top)-prev)*r
        prev=top
    return tax
def se_tax(net):
    e=max(0,net)*0.9235
    return 0.124*min(e,WB)+0.029*e, e
def calc(div=270000, salary=110000, r_sc=30000, tips=6000, tim_401k_def=0, tim_401k_er=0,
         r_401k=0, hsa=0, kids=0, kids_via='div', accountable=0, sehi=0, ptet=False,
         str_fed=0, str_ca=0, charity_cash=0, label=''):
    assert tim_401k_er<=0.25*salary and tim_401k_def+tim_401k_er<=72000
    er_fica=0.0765*salary; futa_sui=280
    kid_div = kids if kids_via=='div' else 0
    kid_fica = 0.153*kid_div; kid_futa = 560 if kid_div else 0   # parent-owned corp: no family exemption
    # sehi: health premiums paid by Div, added to Tim's W-2 box 1 then deducted on the 1040 (no FICA)
    k1_ca = div - salary - er_fica - futa_sui - tim_401k_er - accountable - kid_div - 0.0765*kid_div - kid_futa - sehi
    ca_entity = max(800, 0.015*k1_ca)
    pt = 0.093*k1_ca if ptet else 0          # elective PTET, paid by Dec 31 so it is a 2026 federal deduction
    k1 = k1_ca - pt
    emp_fica = 0.0765*salary; sdi = 0.013*salary
    rs = r_sc - (kids if kids_via=='salon' else 0)
    r_se, r_e = se_tax(rs); halfse_r = r_se/2
    addl = 0.009*max(0, salary + r_e - 250000)
    agi = salary - tim_401k_def + k1 + rs - halfse_r - r_401k - hsa - str_fed
    ca_agi = agi + hsa + str_fed - str_ca + pt
    ca_tax = max(0, brk(max(0, ca_agi-11800), CA) - (2*153 + 2*475))
    ca_credit = min(ca_tax, max(0, pt - 0.125*1000)) if ptet else 0   # missed $1,000 June 15 prepayment
    ca_carry = (max(0, pt - 0.125*1000) - ca_credit) if ptet else 0
    ca_net = ca_tax - ca_credit
    itemized = min(ca_net + sdi, 40400) + charity_cash
    ded = max(32200, itemized)
    nonitem_charity = min(charity_cash, 2000) if ded == 32200 else 0
    tipd = max(0, min(tips, 25000, rs) - 100*(max(0, agi-300000)//1000))
    ti = max(0, agi - ded - nonitem_charity - tipd)
    qbi = min(0.2*(max(0,k1) + max(0, rs - halfse_r - r_401k)), 0.2*ti)
    fed = max(0, brk(ti-qbi, FED) - 4400)
    total = fed + emp_fica + er_fica + futa_sui + kid_fica + kid_futa + r_se + addl + ca_net + ca_entity + sdi + pt
    return dict(label=label, agi=round(agi), fed=round(fed), payroll_se=round(emp_fica+er_fica+futa_sui+kid_fica+kid_futa+r_se+addl),
                ca=round(ca_net), ca_entity=round(ca_entity), sdi=round(sdi), ptet=round(pt), ca_carry=round(ca_carry), total=round(total))
if __name__=='__main__':
    b=calc(label='Baseline: S-corp, $110K salary')
    print(b)
    def d(**k):
        r=calc(**k); r['save']=b['total']-r['total']; print(r); return r
    d(label='Solo 401(k) $24.5K + $15.5K = $40K', tim_401k_def=24500, tim_401k_er=15500)
    d(label='Solo 401(k) max at $110K salary = $52K', tim_401k_def=24500, tim_401k_er=27500)
    d(label='Rachael solo 401(k) $10K', r_401k=10000)
    d(label='Kids $16K via Div S-corp (FICA)', kids=16000)
    d(label='Kids $16K via salon (FICA-free)', kids=16000, kids_via='salon')
    d(label='Accountable plan $7.8K', accountable=7800)
    d(label='HSA $8,750', hsa=8750)
    d(label='Health premiums $24K via W-2', sehi=24000)
    d(label='PTET', ptet=True)
    d(label='Tips OFF', tips=0)
    d(label='Salary $90K', salary=90000)
    d(label='Salary $130K', salary=130000)
    d(label='STR yr1', str_fed=97000, str_ca=15000)
    d(label='Charity $2K', charity_cash=2000)
    pk=dict(tim_401k_def=24500, tim_401k_er=15500, r_401k=10000, kids=16000, kids_via='salon', accountable=7800, hsa=8750)
    d(label='PKG (401k $40K, Rachael, kids via salon, accountable, HSA)', **pk)
    d(label='PKG + PTET', ptet=True, **pk)
    d(label='PKG max 401k + PTET', ptet=True, **{**pk, 'tim_401k_er':27500})
