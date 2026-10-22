((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,F,B={
cYN(d){return new B.BQ(d,null)},
I4:function I4(d,e){this.a=d
this.b=e},
OX:function OX(d,e){this.a=d
this.b=e},
yI:function yI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h},
BQ:function BQ(d,e){this.c=d
this.a=e},
a8m:function a8m(d,e,f,g){var _=this
_.d=d
_.f=_.e=null
_.r=e
_.w=f
_.Q=_.z=_.y=_.x=0
_.as=null
_.at=!0
_.ax=null
_.ay=g
_.c=_.a=null},
cgr:function cgr(d){this.a=d},
cgs:function cgs(d,e){this.a=d
this.b=e},
cgt:function cgt(d,e){this.a=d
this.b=e},
cgz:function cgz(d,e){this.a=d
this.b=e},
cgA:function cgA(){},
cgB:function cgB(){},
cgC:function cgC(d,e,f){this.a=d
this.b=e
this.c=f},
cgD:function cgD(d,e){this.a=d
this.b=e},
cgu:function cgu(d){this.a=d},
cgv:function cgv(d){this.a=d},
cgw:function cgw(d,e){this.a=d
this.b=e},
cgx:function cgx(d,e){this.a=d
this.b=e},
cgy:function cgy(d,e,f){this.a=d
this.b=e
this.c=f},
cgO:function cgO(d){this.a=d},
cgH:function cgH(){},
cgI:function cgI(){},
cgJ:function cgJ(){},
cgK:function cgK(){},
cgL:function cgL(d){this.a=d},
cgM:function cgM(d,e,f){this.a=d
this.b=e
this.c=f},
cgG:function cgG(d,e,f){this.a=d
this.b=e
this.c=f},
cgE:function cgE(){},
cgN:function cgN(d,e){this.a=d
this.b=e},
cgF:function cgF(d,e,f){this.a=d
this.b=e
this.c=f},
aFh:function aFh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a2x:function a2x(d,e){this.c=d
this.a=e},
pg:function pg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ay_:function ay_(d,e){this.c=d
this.a=e},
cUU(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null
try{a1=G.cIn(a2)}catch(w){v=A.M(w)
if(v instanceof G.pZ){x=v
throw A.p(new B.AI(x.a))}else throw w}if(a1.gOE().a===0)throw A.p(D.bQt)
v=a1.gOE()
u=a1.gOE()
t=v.h(0,new A.bc(u,A.v(u).i("bc<1>")).gP(0)).gaAg(0)
if(t.length<2)throw A.p(D.bQs)
s=new B.b_D(C.f.gP(t))
v=y.s
r=s.$1(A.a(["ldap"],v))
if(r==null)throw A.p(D.bQu)
q=s.$1(A.a(["nome abreviado","nome"],v))
p=s.$1(A.a(["local de trabalho"],v))
o=s.$1(A.a(["miss\xe3o","missao"],v))
n=s.$1(A.a(["centro custo"],v))
m=s.$1(A.a(["nome do manager","manager"],v))
l=s.$1(A.a(["hierarquia"],v))
k=new B.b_E()
j=A.aL(y.N)
i=A.a([],y.k)
for(h=1;h<t.length;++h){g=t[h]
if(g.length===0)continue
f=k.$2(g,r)
if(f==null||!j.C(0,f))continue
if(C.h.cg(f,"Filtros aplicados"))continue
v=k.$2(g,q)
u=k.$2(g,p)
e=k.$2(g,o)
d=k.$2(g,n)
a0=k.$2(g,m)
i.push(new A.aDw([d,k.$2(g,l),f,u,a0,e,v]))}return i},
cId(d){var x
if(d==null)return null
if(d instanceof E.mR)return d.a.j(0)
if(d instanceof E.mz)return""+d.a
if(d instanceof E.nt){x=d.a
return x===C.j.nq(x)?""+C.j.G(x):A.n(x)}return d.j(0)},
AI:function AI(d){this.a=d},
b_D:function b_D(d){this.a=d},
b_E:function b_E(){},
bdO(){var x=0,w=A.m(y.Z),v,u,t,s,r
var $async$bdO=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=$.S().b
s===$&&A.b()
u=s.T("rh_colaboradores").de(0)
r=A
x=3
return A.c(u.eP(0,"nome",!0),$async$bdO)
case 3:s=r.aO(e,!0,y.P)
t=A.T(s).i("a1<1,fk>")
s=A.F(new A.a1(s,A.cxK(),t),t.i("at.E"))
v=s
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bdO,w)},
bdN(){var x=0,w=A.m(y.O),v,u,t,s,r,q,p
var $async$bdN=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=new A.E(Date.now(),0,!1)
s=A.ag(A.G(t),A.L(t),A.a0(t),0,0,0,0,0).ru()
r=s.aL(864e8)
q=$.S().b
q===$&&A.b()
q=q.T("import_runs").bZ(0,"importado_em").V("profile_id","listagem_colaboradores")
q=A.d9(q.cQ(q.cR("importado_em","gte."+s.eg())),q.$ti.c)
p=A
x=3
return A.c(A.d9(q.cQ(q.cR("importado_em","lt."+r.eg())),q.$ti.c).eP(0,"importado_em",!1).rf(1),$async$bdN)
case 3:u=p.aO(e,!0,y.P)
if(u.length===0){v=null
x=1
break}v=A.c8(A.af(J.r(C.f.gP(u),"importado_em"))).fb()
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bdN,w)},
bcN(d){var x=0,w=A.m(y.X),v,u,t
var $async$bcN=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=$.S().b
t===$&&A.b()
x=3
return A.c(t.T("rh_colaboradores").de(0).V("ldap",d).nm(),$async$bcN)
case 3:u=f
v=u==null?null:A.cAz(u)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bcN,w)}},D
J=c[1]
A=c[0]
C=c[2]
E=c[7]
G=c[9]
F=c[13]
B=a.updateHolder(c[4],B)
D=c[14]
B.I4.prototype={
L(){return"_Fase."+this.b}}
B.OX.prototype={
L(){return"_Acao."+this.b}}
B.yI.prototype={}
B.BQ.prototype={
Z(){return new B.a8m(D.NW,D.Ko,C.D,A.aL(y.N))}}
B.a8m.prototype={
a4(){this.ah()
this.D4()},
D4(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$D4=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.q(new B.cgr(s))
u=4
x=7
return A.c(B.bdN(),$async$D4)
case 7:r=e
if(s.c==null){x=1
break}s.q(new B.cgs(s,r))
u=2
x=6
break
case 4:u=3
o=t.pop()
q=A.M(o)
if(s.c==null){x=1
break}s.q(new B.cgt(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$D4,w)},
Tq(d){var x,w,v,u=C.h.a6(d).toLowerCase()
for(x=0;x<24;++x){w="\xe1\xe0\xe2\xe3\xe4\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf3\xf2\xf4\xf5\xf6\xfa\xf9\xfb\xfc\xe7\xf1"[x]
v="aaaaaeeeeiiiiooooouuuucn"[x]
u=A.cV(u,w,v)}return u},
ahw(d,e,f){var x,w,v,u
if(e==null)return D.bLy
x=A.a([],y.L)
w=e.ax
v=d.a
u=v[2]
if(w!==u)x.push(new A.vT("LDAP",w,u))
w=v[6]
if(w!=null&&w!==e.c)x.push(new A.vT("Nome",e.c,w))
w=e.b
if(f!==w)x.push(new A.vT("Loja",w,f))
if(!e.dy){w=v[5]
w=w!=null&&w!==e.cx}else w=!1
if(w)x.push(new A.vT("Miss\xe3o",e.cx,v[5]))
if(!e.fr){w=v[0]
w=w!=null&&w!==e.cy}else w=!1
if(w)x.push(new A.vT("Centro de Custo",e.cy,v[0]))
if(!e.fx){w=v[4]
w=w!=null&&w!==e.db}else w=!1
if(w)x.push(new A.vT("Manager",e.db,v[4]))
if(!e.fy){w=v[1]
w=w!=null&&w!==e.dx}else w=!1
if(w)x.push(new A.vT("Hierarquia",e.dx,v[1]))
return x},
uA(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$uA=A.i(function(b6,b7){if(b6===1){t.push(b7)
x=u}for(;;)switch(x){case 0:b3=A.a([C.jS],y.D)
x=3
return A.c($.cya().ya(b3,null,null),$async$uA)
case 3:b4=b7
if(b4==null){x=1
break}s.q(new B.cgz(s,b4))
u=5
x=8
return A.c(b4.vG(),$async$uA)
case 8:r=b7
q=B.cUU(r)
x=9
return A.c(A.qj(),$async$uA)
case 9:p=b7
b3=y.N
o=A.z(b3,b3)
for(a6=J.a3(p);a6.p();){n=a6.gA(a6)
J.bJ(o,s.Tq(n.a),n.b)}m=o
x=10
return A.c(B.bdO(),$async$uA)
case 10:l=b7
k=A.z(b3,y.Z)
for(o=J.a3(l);o.p();){j=o.gA(o)
i=s.Tq(j.c)+"|"+j.b
J.aF(J.wb(k,i,new B.cgA()),j)}h=A.a([],y.f)
g=A.a([],y.s)
f=0
o=q,a6=o.length,a7=y.H,a8=0
case 11:if(!(a8<o.length)){x=13
break}e=o[a8];++f
x=C.j.a1(f,100)===0?14:15
break
case 14:x=16
return A.c(A.pW(C.bc,null,a7),$async$uA)
case 16:case 15:a9=e.a[6]
d=a9==null?e.a[2]:a9
if(e.a[3]==null){J.aF(g,"LDAP "+e.a[2]+" ("+A.n(d)+'): sem "Local de Trabalho" no ficheiro \u2014 linha ignorada.')
x=12
break}b0=e.a[3]
b0.toString
a0=J.r(m,s.Tq(b0))
if(a0==null){J.aF(g,"LDAP "+e.a[2]+" ("+A.n(d)+'): loja "'+A.n(e.a[3])+'" n\xe3o reconhecida \u2014 linha ignorada.')
x=12
break}x=17
return A.c(B.bcN(e.a[2]),$async$uA)
case 17:a1=b7
if(a1==null&&e.a[6]!=null){b0=e.a[6]
b0.toString
b1=J.r(k,s.Tq(b0)+"|"+a0)
a2=b1==null?C.f_:b1
if(J.aC(a2)===1){a3=J.f3(a2)
e.a[3].toString
J.aF(h,new B.yI(e,a0,a3,D.anb,s.ahw(e,a3,a0)))
x=12
break}if(J.aC(a2)>1){J.aF(g,"LDAP "+e.a[2]+" ("+A.n(d)+"): h\xe1 "+J.aC(a2)+" colaboradores com este nome em "+a0+" (LDAPs: "+J.en(a2,new B.cgB(),b3).b6(0,", ")+") \u2014 linha ignorada, n\xe3o \xe9 seguro adivinhar qual. Corrige \xe0 m\xe3o em RH \u2192 Colaboradores.")
x=12
break}}a4=s.ahw(e,a1,a0)
e.a[3].toString
if(a1==null)b0=D.an8
else b0=J.aC(a4)===0?D.ana:D.an9
J.aF(h,new B.yI(e,a0,a1,b0,a4))
case 12:o.length===a6||(0,A.u)(o),++a8
x=11
break
case 13:if(s.c==null){x=1
break}s.q(new B.cgC(s,h,g))
u=2
x=7
break
case 5:u=4
b5=t.pop()
a5=A.M(b5)
if(s.c==null){x=1
break}s.q(new B.cgD(s,a5))
x=7
break
case 4:x=2
break
case 7:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$uA,w)},
wo(){return this.aRA()},
aRA(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1
var $async$wo=A.i(function(d2,d3){if(d2===1){t.push(d3)
x=u}for(;;)switch(x){case 0:c7={}
s.q(new B.cgu(s))
c7.a=c7.b=c7.c=0
e=y.N
d=A.F(s.w,e)
r=d
d=y.d
q=A.a([],d)
u=4
a0=s.r,a1=a0.length,a2=s.ay,a3=0
case 7:if(!(a3<a0.length)){x=9
break}p=a0[a3]
o=p.a
u=11
case 14:switch(p.e.a){case 0:x=16
break
case 1:x=17
break
case 2:x=18
break
case 3:x=19
break
default:x=15
break}break
case 16:a4=p.b
a5=o.a[6]
if(a5==null)a5=o.a[2]
a6=o.a[2]
a7=o.a[5]
a8=o.a[0]
a9=o.a[4]
x=20
return A.c(A.cER(a8,!1,null,null,o.a[1],!1,null,null,null,null,null,null,null,a6,a9,!1,a7,!1,a5,a4,null,!1),$async$wo)
case 20:++c7.c
x=15
break
case 17:a4=p.d
a4.toString
n=a4
a4=n.a
a5=o.a[6]
if(a5==null)a5=n.c
a6=p.b
a7=n.d
a8=n.e
a9=n.f
b0=n.r
b1=n.as
b2=n.at
b3=n.x
b4=n.y
b5=n.z
b6=n.ax
if(n.dy)b7=n.cx
else{b7=o.a[5]
if(b7==null)b7=n.cx}if(n.fr)b8=n.cy
else{b8=o.a[0]
if(b8==null)b8=n.cy}if(n.fx)b9=n.db
else{b9=o.a[4]
if(b9==null)b9=n.db}if(n.fy)c0=n.dx
else{c0=o.a[1]
if(c0==null)c0=n.dx}c1=n.id
c2=n.dy
c3=n.fr
c4=n.fx
x=21
return A.c(A.bcu(b8,c3,b4,b3,c0,n.fy,a7,a9,b2,a8,b1,b0,null,a4,b6,b9,c4,b7,c2,a5,a6,b5,c1),$async$wo)
case 21:++c7.b
m=A.a([],d)
for(a4=p.f,a5=a4.length,c5=0;c5<a4.length;a4.length===a5||(0,A.u)(a4),++c5){l=a4[c5]
a6=n.a
a7=p.b
J.aF(m,new A.Qo([l.a,a6,a7,l.b,l.c]))}J.jZ(q,m)
x=15
break
case 18:x=15
break
case 19:if(!a2.m(0,o.a[2])){x=15
break}a4=p.d
a4.toString
k=a4
a4=k.a
a5=o.a[6]
if(a5==null)a5=k.c
a6=p.b
a7=k.d
a8=k.e
a9=k.f
b0=k.r
b1=k.as
b2=k.at
b3=k.x
b4=k.y
b5=k.z
b6=o.a[2]
if(k.dy)b7=k.cx
else{b7=o.a[5]
if(b7==null)b7=k.cx}if(k.fr)b8=k.cy
else{b8=o.a[0]
if(b8==null)b8=k.cy}if(k.fx)b9=k.db
else{b9=o.a[4]
if(b9==null)b9=k.db}if(k.fy)c0=k.dx
else{c0=o.a[1]
if(c0==null)c0=k.dx}c1=k.id
c2=k.dy
c3=k.fr
c4=k.fx
x=22
return A.c(A.bcu(b8,c3,b4,b3,c0,k.fy,a7,a9,b2,a8,b1,b0,null,a4,b6,b9,c4,b7,c2,a5,a6,b5,c1),$async$wo)
case 22:++c7.a
j=A.a([],d)
for(a4=p.f,a5=a4.length,c5=0;c5<a4.length;a4.length===a5||(0,A.u)(a4),++c5){i=a4[c5]
a6=k.a
a7=p.b
J.aF(j,new A.Qo([i.a,a6,a7,i.b,i.c]))}J.jZ(q,j)
x=15
break
case 15:u=4
x=13
break
case 11:u=10
c8=t.pop()
a4=A.M(c8)
if(a4 instanceof A.fO){h=a4
if(h.b!=="23505")throw c8
a4=o.a[2]
a5=o.a[6]
if(a5==null)a5=o.a[2]
J.aF(r,"LDAP "+a4+" ("+a5+"): conflito ao gravar \u2014 linha ignorada.")}else throw c8
x=13
break
case 10:x=4
break
case 13:if(s.c==null){x=1
break}new B.cgv(s).$0()
s.c.fv()
case 8:a0.length===a1||(0,A.u)(a0),++a3
x=7
break
case 9:x=J.aC(q)!==0?23:24
break
case 23:u=26
x=29
return A.c(A.apa(q),$async$wo)
case 29:u=4
x=28
break
case 26:u=25
c9=t.pop()
if(A.M(c9) instanceof A.fO)J.aF(r,"As altera\xe7\xf5es foram gravadas nas fichas, mas n\xe3o ficaram registadas em RH \u2192 Altera\xe7\xf5es (falta permiss\xe3o de Planeamento, ou o ficheiro abrange lojas fora da tua).")
else throw c9
x=28
break
case 25:x=4
break
case 28:case 24:u=2
x=6
break
case 4:u=3
d0=t.pop()
m=A.M(d0)
if(m instanceof A.fO){g=m
if(s.c==null){x=1
break}s.q(new B.cgw(s,g))
x=1
break}else{f=m
if(s.c==null){x=1
break}s.q(new B.cgx(s,f))
x=1
break}x=6
break
case 3:x=2
break
case 6:if(s.c==null){x=1
break}s.q(new B.cgy(c7,s,r))
u=31
m=s.r.length
j=$.S()
d=j.b
d===$&&A.b()
d=d.T("import_runs")
j=j.b.gdt().e.a
j=j==null?null:j.r
x=34
return A.c(d.dP(0,A.R(["profile_id","listagem_colaboradores","tabela","rh_colaboradores","linhas",m,"importado_por",j==null?null:j.a],e,y.R)),$async$wo)
case 34:s.D4()
u=2
x=33
break
case 31:u=30
d1=t.pop()
x=33
break
case 30:x=2
break
case 33:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$wo,w)},
bh6(){this.q(new B.cgO(this))},
H(d){var x=this,w=null,v=A.D(d),u=y.p,t=A.a([A.V(A.a([A.aR(C.Iy,v.ax.b,w,56),C.R,A.f("Sincronizar Colaboradores",w,w,w,w,v.ok.f,C.aO,w,w)],u),C.t,C.p,C.r,0,C.u),C.aR,new B.aFh(x.as,x.at,x.ax,x.gaPY(),w),C.aR],u),s=x.f
if(s!=null)C.f.v(t,A.a([new B.ay_(s,w),C.aR],u))
t.push(x.aSt(d))
return A.c_(new A.e0(F.PN,A.ds(A.V(t,C.ap,C.p,C.Q,0,C.u),w,C.db,w,w,C.aC),w),w,w)},
aSt(d){var x,w,v,u,t,s=this,r=null
switch(s.d.a){case 0:return A.jH(D.aRi,D.ch3,s.gaWa())
case 1:x=s.e
return new B.a2x('A ler "'+(x==null?"":x)+'"\u2026',r)
case 2:return s.bc4(d)
case 3:return new B.a2x("A gravar\u2026 ("+s.Q+" / "+s.r.length+")",r)
case 4:w=A.D(d)
x=w.ax
v=y.p
v=A.a([A.Z(A.a([A.aR(C.jm,x.b,r,28),C.bN,A.a5(A.f("Colaboradores sincronizados",r,r,r,r,w.ok.w,r,r,r),1)],v),C.t,C.p,C.r,0,r,r),C.a_,new B.pg(C.Iu,"Criados",""+s.x,r,r),new B.pg(D.TX,"Atualizados",""+s.y,r,r)],v)
u=s.z
if(u>0)v.push(new B.pg(D.To,"Duplicados fundidos",""+u,r,r))
u=s.w.length
if(u!==0){t=x.CW
x=t==null?x.y:t
v.push(new B.pg(C.r0,"Avisos",""+u,x,r))}v.push(C.aR)
v.push(A.jH(C.dy,D.chx,s.gapW()))
return A.cy(r,2,new A.H(C.bx,A.V(v,C.ap,C.p,C.r,0,C.u),r),r,!0,r,r)}},
bc4(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.D(a3),a1=e.r,a2=new A.am(a1,new B.cgH(),A.T(a1).i("am<1>")).gu(0)
a1=e.r
x=new A.am(a1,new B.cgI(),A.T(a1).i("am<1>")).gu(0)
a1=e.r
w=new A.am(a1,new B.cgJ(),A.T(a1).i("am<1>")).gu(0)
a1=e.r
v=A.T(a1).i("am<1>")
u=A.F(new A.am(a1,new B.cgK(),v),v.i("x.E"))
t=new A.am(u,new B.cgL(e),A.T(u).i("am<1>")).gu(0)
s=a2+x+t
a1=e.a.c
r=A.ad(a1.e)===C.B||a1.Q.m(0,"dados_colaboradores_editar")
a1=e.e
if(a1==null)a1="\u2014"
v=a0.ax
q=v.b
p=y.p
q=A.a([new B.pg(D.aPk,"Ficheiro",a1,d,d),new B.pg(C.Iu,"Colaboradores novos a criar",""+a2,q,d),new B.pg(D.TX,"Fichas a atualizar",""+x,q,d),new B.pg(C.a8,"Sem altera\xe7\xf5es",""+w,d,d)],p)
a1=u.length
if(a1!==0){o=v.CW
if(o==null)o=v.y
q.push(new B.pg(D.To,"Poss\xedveis duplicados (a rever)",""+a1,o,d))}a1=e.w.length
if(a1!==0){o=v.CW
if(o==null)o=v.y
q.push(new B.pg(C.r0,"Avisos",""+a1,o,d))}a1=s===0
if(a1&&u.length===0)C.f.v(q,A.a([C.R,D.cfL],p))
if(a1&&u.length!==0){o=v.CW
C.f.v(q,A.a([C.R,A.f("Nada marcado ainda para gravar \u2014 rev\xea a lista de poss\xedveis duplicados abaixo e marca os que reconheceres.",d,d,d,d,A.bA(d,d,o==null?v.y:o,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],p))}if(s>0&&!r)C.f.v(q,A.a([C.R,A.f('A tua conta s\xf3 tem "Ver" nesta funcionalidade \u2014 falta "Editar" para poderes gravar.',d,d,d,d,A.bA(d,d,v.fy,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],p))
if(u.length!==0){o=a0.ok
n=o.Q
if(n==null)v=d
else{m=v.rx
v=n.ac(m==null?v.k3:m)}v=A.f("Poss\xedveis duplicados \u2014 mesmo nome j\xe1 guardado nesta loja com outro LDAP. Confirma um a um s\xf3 quando tiveres a certeza de que \xe9 a mesma pessoa; a ficha j\xe1 existente fica com o LDAP e os dados organizacionais do ficheiro, sem perder hor\xe1rio/equipa/empresa. O que n\xe3o marcares fica como est\xe1, por decidir noutra altura.",d,d,d,d,v,d,d,d)
m=u.length
v=A.a([C.R,v,C.a_,new A.dM(C.fJ,d,d,A.aD(A.f(t===m?"Desmarcar todos":"Marcar todos ("+m+")",d,d,d,d,d,d,d,d),d,d,new B.cgM(e,t,u),d,d),d)],p)
for(m=u.length,o=o.z,l=e.ay,k=0;k<u.length;u.length===m||(0,A.u)(u),++k){j=u[k]
i=j.a.a
h=l.m(0,i[2])
g=i[6]
g=A.f(g==null?i[2]:g,d,d,d,d,o,d,d,d)
i=i[2]
f=j.d.ax
if(f==null)f="sem LDAP"
v.push(A.fj(C.Z,C.d6,!0,new B.cgN(e,j),A.f("LDAP no ficheiro: "+i+" \xb7 j\xe1 guardado como: "+f+" \xb7 "+j.b,d,d,d,d,n,d,d,d),g,!1,h))}C.f.v(q,v)}v=e.w.length
if(v!==0){o=a0.ok
v=A.f("Ver avisos ("+v+")",d,d,d,d,o.z,d,d,d)
n=A.a([],p)
for(m=e.w,m=A.fz(m,0,A.j7(50,"count",y.S),A.T(m).c),l=m.$ti,m=new A.bC(m,m.gu(0),l.i("bC<at.E>")),o=o.Q,l=l.i("at.E");m.p();){i=m.d
n.push(new A.H(C.hi,A.f("\u2022 "+(i==null?l.a(i):i),d,d,d,d,o,d,d,d),d))}m=e.w.length
if(m>50)n.push(A.f("\u2026 e mais "+(m-50)+".",d,d,d,d,o,d,d,d))
C.f.v(q,A.a([C.R,A.cts(n,d,d,!1,d,d,C.Z,v)],p))}q.push(C.aR)
a1=a1||!r?d:e.gaRz()
q.push(A.jH(D.aR5,A.f("Gravar "+s+" colaboradores",d,d,d,d,d,d,d,d),a1))
q.push(C.a_)
q.push(A.aD(D.chY,d,d,e.gapW(),d,d))
return A.cy(d,2,new A.H(C.bx,A.V(q,C.ap,C.p,C.r,0,C.u),d),d,!0,d,d)}}
B.aFh.prototype={
H(d){var x,w,v,u,t,s=this,r=null,q=A.D(d),p=q.ax,o=p.RG
if(o==null)o=p.k2
x=A.b6(12)
w=s.e
if(w!=null){p=p.fy
v=A.aR(C.C,p,r,16)
u=q.ok.Q
p=u==null?r:u.ac(p)
p=A.Z(A.a([v,C.al,A.a5(A.f("N\xe3o foi poss\xedvel carregar: "+w,r,r,r,r,p,r,r,r),1),A.aD(F.alM,r,r,s.f,r,r)],y.p),C.I,C.p,C.r,0,r,r)}else{w=s.c
v=w!=null
u=v?C.jm:F.TE
if(v)p=p.b
else{t=p.rx
p=(t==null?p.k3:t).bW(0.5)}p=A.aR(u,p,r,16)
w=v?"J\xe1 sincronizado hoje \xe0s "+C.h.F(C.e.j(A.cK(w)),2,"0")+":"+C.h.F(C.e.j(A.dh(w)),2,"0"):"Ainda n\xe3o sincronizado hoje"
w=A.a([p,C.al,A.a5(A.f(w,r,r,r,r,q.ok.Q,r,r,r),1)],y.p)
if(s.d)w.push(C.MH)
p=A.Z(w,C.t,C.p,C.r,0,r,r)}return A.bn(r,p,C.J,r,r,new A.bT(o,r,r,x,r,r,C.aF),r,r,r,r,C.d_,r,r,r)}}
B.a2x.prototype={
H(d){var x=null
return A.V(A.a([C.uH,C.aR,A.f(this.c,x,x,x,x,x,C.aO,x,x)],y.p),C.t,C.p,C.r,0,C.u)}}
B.pg.prototype={
H(d){var x,w,v,u,t,s=this,r=null,q=A.D(d),p=s.f
if(p==null){x=q.ax
w=x.rx
x=w==null?x.k3:w}else x=p
x=A.aR(s.c,x,r,20)
w=q.ok.z
v=w==null
if(v)u=r
else{u=q.ax
t=u.rx
u=w.ac(t==null?u.k3:t)}u=A.f(s.d+": ",r,r,r,r,u,r,r,r)
p=v?r:w.es(p,C.cN)
return new A.H(C.vh,A.Z(A.a([x,C.bN,u,A.a5(A.f(s.e,r,r,r,r,p,r,r,r),1)],y.p),C.I,C.p,C.r,0,r,r),r)}}
B.ay_.prototype={
H(d){var x,w,v,u,t=null,s=A.D(d).ax,r=s.id
if(r==null)r=s.fy
x=A.b6(8)
w=s.k1
v=w==null
u=A.aR(C.C,v?s.go:w,t,t)
return A.bn(t,A.Z(A.a([u,C.al,A.a5(A.f(this.c,t,t,t,t,A.bA(t,t,v?s.go:w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),1)],y.p),C.t,C.p,C.r,0,t,t),C.J,t,t,new A.bT(r,t,t,x,t,t,C.aF),t,t,t,t,C.d_,t,t,t)}}
B.AI.prototype={
j(d){return this.a},
$icl:1}
var z=a.updateTypes(["w(yI)","al<~>()","~()","e(yI)","e?(C<kF?>,d?)"])
B.cgr.prototype={
$0(){var x=this.a
x.at=!0
x.ax=null},
$S:0}
B.cgs.prototype={
$0(){var x=this.a
x.as=this.b
x.at=!1},
$S:0}
B.cgt.prototype={
$0(){var x=this.a
x.ax=A.n(this.b)
x.at=!1},
$S:0}
B.cgz.prototype={
$0(){var x=this.a
x.d=D.co6
x.e=this.b.b
x.f=null
x.r=D.Ko
x.w=C.D},
$S:0}
B.cgA.prototype={
$0(){return A.a([],y.Q)},
$S:381}
B.cgB.prototype={
$1(d){var x=d.ax
return x==null?"sem LDAP":x},
$S:1371}
B.cgC.prototype={
$0(){var x=this.a
x.r=this.b
x.w=this.c
x.d=D.NX},
$S:0}
B.cgD.prototype={
$0(){var x=this.a,w=this.b
x.f=w instanceof B.AI?w.a:"Erro ao ler o ficheiro: "+A.n(w)
x.d=D.NW},
$S:0}
B.cgu.prototype={
$0(){var x=this.a
x.d=D.co7
x.Q=0},
$S:0}
B.cgv.prototype={
$0(){return this.a.Q++},
$S:0}
B.cgw.prototype={
$0(){var x=this.a,w=this.b
x.f=w.b==="42501"?'Sem permiss\xe3o para gravar colaboradores \u2014 confirma que a conta tem "RH \xb7 Colaboradores \u2192 Editar" atribu\xeddo, al\xe9m de "Colaboradores" em Dados.':"Erro ao gravar (linha "+(x.Q+1)+" de "+x.r.length+"): "+w.a
x.d=D.NX},
$S:0}
B.cgx.prototype={
$0(){var x=this.a
x.f="Erro ao gravar (linha "+(x.Q+1)+" de "+x.r.length+"): "+A.n(this.b)
x.d=D.NX},
$S:0}
B.cgy.prototype={
$0(){var x=this.b,w=this.a
x.x=w.c
x.y=w.b
x.z=w.a
x.w=this.c
x.d=D.co8},
$S:0}
B.cgO.prototype={
$0(){var x=this.a
x.d=D.NW
x.f=x.e=null
x.r=D.Ko
x.w=C.D
x.Q=x.z=x.y=x.x=0
x.ay.ab(0)},
$S:0}
B.cgH.prototype={
$1(d){return d.e===D.an8},
$S:z+0}
B.cgI.prototype={
$1(d){return d.e===D.an9},
$S:z+0}
B.cgJ.prototype={
$1(d){return d.e===D.ana},
$S:z+0}
B.cgK.prototype={
$1(d){return d.e===D.anb},
$S:z+0}
B.cgL.prototype={
$1(d){return this.a.ay.m(0,d.a.a[2])},
$S:z+0}
B.cgM.prototype={
$0(){var x=this.a
return x.q(new B.cgG(x,this.b,this.c))},
$S:0}
B.cgG.prototype={
$0(){var x=this.c,w=this.a.ay
if(this.b===x.length)w.ab(0)
else w.v(0,new A.a1(x,new B.cgE(),A.T(x).i("a1<1,e>")))},
$S:0}
B.cgE.prototype={
$1(d){return d.a.a[2]},
$S:z+3}
B.cgN.prototype={
$1(d){var x=this.a
return x.q(new B.cgF(x,d,this.b))},
$S:15}
B.cgF.prototype={
$0(){var x=this.a.ay,w=this.c.a
if(this.b===!0)x.C(0,w.a[2])
else x.O(0,w.a[2])},
$S:0}
B.b_D.prototype={
$1(d){var x,w,v,u
for(x=this.a,w=0;w<x.length;++w){v=x[w]
v=B.cId(v==null?null:v.b)
u=v==null?null:C.h.a6(v).toLowerCase()
if(u!=null&&C.f.m(d,u))return w}return null},
$S:1372}
B.b_E.prototype={
$2(d,e){var x,w,v=null
if(e==null||e>=d.length)return v
x=d[e]
x=B.cId(x==null?v:x.b)
w=x==null?v:C.h.a6(x)
return w==null||w.length===0?v:w},
$S:z+4};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.a8m.prototype,"gaPY","D4",1)
x(w,"gaWa","uA",1)
x(w,"gaRz","wo",1)
x(w,"gapW","bh6",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I2,[B.I4,B.OX])
x(A.a8,[B.yI,B.AI])
w(B.BQ,A.ac)
w(B.a8m,A.ab)
x(A.rk,[B.cgr,B.cgs,B.cgt,B.cgz,B.cgA,B.cgC,B.cgD,B.cgu,B.cgv,B.cgw,B.cgx,B.cgy,B.cgO,B.cgM,B.cgG,B.cgF])
x(A.mk,[B.cgB,B.cgH,B.cgI,B.cgJ,B.cgK,B.cgL,B.cgE,B.cgN,B.b_D])
x(A.aA,[B.aFh,B.a2x,B.pg,B.ay_])
w(B.b_E,A.u5)})()
A.CR(b.typeUniverse,JSON.parse('{"BQ":{"ac":[],"o":[]},"a8m":{"ab":["BQ"]},"aFh":{"aA":[],"o":[]},"a2x":{"aA":[],"o":[]},"pg":{"aA":[],"o":[]},"ay_":{"aA":[],"o":[]},"AI":{"cl":[]}}'))
var y=(function rtii(){var x=A.aq
return{Q:x("A<fk>"),L:x("A<+campo,de,para(e,e?,e?)>"),d:x("A<+campo,colaboradorId,numLoja,valorAnterior,valorNovo(e,d,e,e?,e?)>"),k:x("A<+centroCusto,hierarquia,ldap,localTrabalho,manager,missao,nome(e?,e?,e,e?,e?,e?,e?)>"),s:x("A<e>"),p:x("A<o>"),D:x("A<yq>"),f:x("A<yI>"),Z:x("C<fk>"),P:x("X<e,@>"),N:x("e"),S:x("d"),X:x("fk?"),O:x("E?"),R:x("a8?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.To=new A.av(58504,"MaterialIcons",!1)
D.aPk=new A.av(61358,"MaterialIcons",!1)
D.TX=new A.av(984310,"MaterialIcons",!1)
D.aR5=new A.b_(C.TF,null,null,null,null)
D.aOB=new A.av(58020,"MaterialIcons",!1)
D.aRi=new A.b_(D.aOB,null,null,null,null)
D.Ko=x([],y.f)
D.bLy=x([],y.L)
D.bQs=new B.AI("O ficheiro est\xe1 vazio.")
D.bQt=new B.AI("O ficheiro n\xe3o tem nenhuma folha.")
D.bQu=new B.AI('N\xe3o encontrei a coluna "LDAP" no cabe\xe7alho do ficheiro.')
D.cfL=new A.U("Nada para gravar \u2014 ningu\xe9m no ficheiro tem altera\xe7\xf5es por aplicar (ver avisos, se houver).",null,null,null,null,null,null,null,null,null,null)
D.ch3=new A.U("Escolher ficheiro Excel",null,null,null,null,null,null,null,null,null,null)
D.chx=new A.U("Carregar outro ficheiro",null,null,null,null,null,null,null,null,null,null)
D.chY=new A.U("Escolher outro ficheiro",null,null,null,null,null,null,null,null,null,null)
D.an8=new B.OX(0,"criar")
D.an9=new B.OX(1,"atualizar")
D.ana=new B.OX(2,"semAlteracoes")
D.anb=new B.OX(3,"duplicadoPossivel")
D.NW=new B.I4(0,"idle")
D.co6=new B.I4(1,"aCarregar")
D.NX=new B.I4(2,"pronto")
D.co7=new B.I4(3,"aGravar")
D.co8=new B.I4(4,"concluido")})()};
(a=>{a["x6cbjklbvMGIw17h7/dENwc8UKw="]=a.current})($__dart_deferred_initializers__);