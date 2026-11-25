((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,B={
dp4(){return new B.C9(null)},
C9:function C9(d){this.a=d},
a85:function a85(d){var _=this
_.d=!1
_.f=_.e=null
_.r=d
_.w=!1
_.x=""
_.c=_.a=_.ch=_.ay=_.z=_.y=null},
c2G:function c2G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c2D:function c2D(d){this.a=d},
c2E:function c2E(d,e){this.a=d
this.b=e},
c2F:function c2F(d,e){this.a=d
this.b=e},
c2P:function c2P(){},
c2N:function c2N(d){this.a=d},
c2O:function c2O(d){this.a=d},
c2R:function c2R(d){this.a=d},
c2S:function c2S(d){this.a=d},
c2Q:function c2Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c2T:function c2T(d,e){this.a=d
this.b=e},
c2U:function c2U(d,e){this.a=d
this.b=e},
c2M:function c2M(d,e,f){this.a=d
this.b=e
this.c=f},
c2L:function c2L(d,e,f){this.a=d
this.b=e
this.c=f},
c2I:function c2I(d,e){this.a=d
this.b=e},
c2H:function c2H(d,e){this.a=d
this.b=e},
c2J:function c2J(d){this.a=d},
c2K:function c2K(d,e){this.a=d
this.b=e},
a5W:function a5W(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBc:function aBc(){this.d=!1
this.c=this.a=null},
bGM:function bGM(d){this.a=d},
bGL:function bGL(d){this.a=d},
aBd:function aBd(d,e,f){this.c=d
this.d=e
this.a=f},
Xc(d){var w=0,v=A.l(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Xc=A.h(function(a0,a1){if(a0===1)return A.i(a1,v)
for(;;)switch(w){case 0:if(d==null){w=1
break}w=3
return A.c(A.xW("vw_edificio_resumo"),$async$Xc)
case 3:t=a1
w=4
return A.c(A.xW("vw_edificio_top_av_za_pc"),$async$Xc)
case 4:s=a1
r=new B.aZm()
q=new A.E(Date.now(),0,!1)
p=C.h.D(C.f.j(A.H(q)),4,"0")+"-"+C.h.D(C.f.j(A.K(q)),2,"0")+"-"+C.h.D(C.f.j(A.a1(q)),2,"0")
o=A.a([],x.t)
for(q=x.N,n=x.z,m=J.I(t),l=0;l<6;++l){k=D.bGm[l]
j=k==="rl"?t:s
i=r.$2(j,k+"_pct_top0")
h=r.$2(j,k+"_pct_top1")
g=r.$2(j,k+"_pct_top2")
f=r.$2(j,k+"_pct_top0_ou_top2")
if(i==null&&h==null&&g==null)continue
e=A.ap(m.h(t,"n_"+k))
e=e==null?null:C.i.C(e)
o.push(A.X(["num_loja",d,"data",p,"corredor",k.toUpperCase(),"n_linhas",e,"pct_top0",i,"pct_top1",h,"pct_top2",g,"pct_top0_ou_top2",f,"capturado_em",new A.E(Date.now(),0,!1).n3().dP()],q,n))}if(o.length===0){w=1
break}q=$.S().b
q===$&&A.b()
w=5
return A.c(q.R("edificio_top_diario").qX(o,"num_loja,data,corredor"),$async$Xc)
case 5:case 1:return A.j(u,v)}})
return A.k($async$Xc,v)},
aZn(d){var w=0,v=A.l(x.H),u,t,s
var $async$aZn=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:if(d==null){w=1
break}t=$.S().b
t===$&&A.b()
s=x.z
w=3
return A.c(t.bi("edificio_top_seccao_gravar",A.X(["p_num_loja",d],x.N,s),s),$async$aZn)
case 3:case 1:return A.j(u,v)}})
return A.k($async$aZn,v)},
aZm:function aZm(){},
wh(d,e,f){var w=D.Uy,v=3
return B.dp8(d,e,f,f)},
dp8(d,e,f,g){var w=0,v=A.l(g),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$wh=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=D.Uy
k=3
r=1,o=x.H
case 3:t=7
w=10
return A.c(e.$0(),$async$wh)
case 10:n=i
u=n
w=1
break
t=2
w=9
break
case 7:t=6
j=s.pop()
n=A.Q(j)
w=n instanceof A.ee?11:13
break
case 11:q=n
p=q.b==="57014"
if(!p)throw j
if(r>=k)throw A.q(new E.oP("O servidor demorou demasiado "+d+" (tempo esgotado, "+A.n(r)+" tentativas). Tenta outra vez daqui a pouco."))
n=r
w=14
return A.c(A.dI(new A.c9(C.i.ac(l.a*n)),null,o),$async$wh)
case 14:w=12
break
case 13:throw j
case 12:w=9
break
case 6:w=2
break
case 9:case 4:++r
w=3
break
case 5:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$wh,v)},
b5a(d,e,f){return B.dpc(d,e,f)},
dpc(d,e,f){var w=0,v=A.l(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b5a=A.h(function(g,h){if(g===1)return A.i(h,v)
for(;;)switch(w){case 0:k={}
j=$.S().b
j===$&&A.b()
t=J.I(d)
s=t.gt(d)
r=A.a([],x.G)
for(q=0;q<s;q=p){p=q+500
r.push(t.dH(d,q,p<s?p:s))}o=r.length
if(o===0){w=1
break}n=k.a=k.b=0
m=new B.b5b(k,r,e,j,f,null,s)
if(4<o)o=4
l=J.h1(o,x.x)
for(;n<o;++n)l[n]=m.$0()
w=3
return A.c(A.eT(l,x.H),$async$b5a)
case 3:case 1:return A.j(u,v)}})
return A.k($async$b5a,v)},
Ca(d,e,f){return B.dpb(d,e,f)},
dpb(d,e,f){var w=0,v=A.l(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ca=A.h(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:l=$.S()
k=l.b
k===$&&A.b()
k=k.R("import_runs")
p=d.a
o=d.e.length
n=d.w.length
l=l.b.gd3().e.a
l=l==null?null:l.r
l=l==null?null:l.a
w=3
return A.c(k.d9(0,A.X(["profile_id",p,"tabela",d.c,"ficheiro_nome",e,"ficheiro_tamanho",null,"ficheiro_modificado_em",null,"linhas",o,"periodo_inicio",d.f,"periodo_fim",d.r,"avisos",n,"importado_por",l,"num_loja",f],x.N,x.X)),$async$Ca)
case 3:A:{l=null
if("reserva_moradas"===p){l="reserva"
break A}if("promessa_encomendas"===p){l="promessa"
break A}if("valorizacoes_pendentes"===p){l="valorizacoes"
break A}if("promessa_linhas_preparar"===p){l="preparar"
break A}if("promessa_linhas_localizadas_oc"===p){l="localizacao_oc"
break A}if("relex_linhas_preparadas"===p)break A
if("lean_pedidos_nao_valorizados"===p)break A
if("lean_quebras"===p)break A
if("reserva_eml_buffer"===p)break A
if("reserva_contentores"===p)break A
if("lean_triagem"===p)break A
if("lean_otif_semanal"===p)break A
if("lean_rupturas_visuais"===p)break A
if("lean_preparacao_on_time"===p)break A
if("relex_disponibilidade"===p)break A
if("lean_rupturas_visuais_dpt"===p)break A
if("lean_rupturas_visuais_dpt_lista_ref"===p)break A
l=C.h.bS(p,"opcom_")?"opcom":"relex"
break A}r=l
if(r==null){u=null
w=1
break}q=null
t=5
w=8
return A.c(B.wh("ao registar o resumo do hist\xf3rico",new B.b57(r,f,d),x.H),$async$Ca)
case 8:t=2
w=7
break
case 5:t=4
j=s.pop()
q="Aviso: os dados de "+d.b+" foram importados, mas n\xe3o foi poss\xedvel guardar o resumo do hist\xf3rico (servidor ocupado). Importa outra vez mais tarde para o registar."
w=7
break
case 4:w=2
break
case 7:w=r==="reserva"?9:10
break
case 9:t=12
w=15
return A.c(B.wh("ao registar o resumo dos edif\xedcios",new B.b58(f),x.H),$async$Ca)
case 15:t=2
w=14
break
case 12:t=11
i=s.pop()
if(q==null)q="Aviso: a Reserva foi importada, mas n\xe3o foi poss\xedvel guardar o resumo dos edif\xedcios no hist\xf3rico (servidor ocupado)."
w=14
break
case 11:w=2
break
case 14:t=17
w=20
return A.c(B.Xc(f),$async$Ca)
case 20:t=2
w=19
break
case 17:t=16
h=s.pop()
w=19
break
case 16:w=2
break
case 19:t=22
w=25
return A.c(B.aZn(f),$async$Ca)
case 25:t=2
w=24
break
case 22:t=21
g=s.pop()
w=24
break
case 21:w=2
break
case 24:w=26
return A.c(B.b53(f),$async$Ca)
case 26:l=a1
u=l==null?q:l
w=1
break
case 10:u=q
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$Ca,v)},
b53(d){return B.dp5(d)},
dp5(d){var w=0,v=A.l(x.T),u,t=2,s=[],r,q,p,o,n
var $async$b53=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(B.bss(d),$async$b53)
case 7:r=f
if(r.a===0&&r.b===0){u=null
w=1
break}q=A.a([],x.s)
if(r.a>0)J.ax(q,""+r.a+" atualizado(s) sozinho(s)")
if(r.b>0)J.ax(q,""+r.b+" para validar")
p=q
q=J.xS(p,", ")
u="SSCC registados sem dados: "+q+" (Torre \u2192 Acertos SSCC)."
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$b53,v)},
b59(d){var w,v
for(w=0;w<28;++w){v=C.BG[w]
if(v.a===d)return v}return null},
YH(d,e){var w=0,v=A.l(x.F),u,t,s,r,q,p,o,n,m,l,k,j
var $async$YH=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:j=B.b59(d.a)
if(j==null||!j.at){u=d.e
w=1
break}t=e==null?d.y:e
s=t==null
w=s&&j.z==="num_loja"&&j.Q?3:4
break
case 3:s=A.aB(x.N)
for(r=d.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
n=J.I(o)
m=n.h(o,"num_loja")
if(A.n(m==null?"":m).length!==0)s.E(0,A.n(n.h(o,"num_loja")))}if(s.a===0)throw A.q(D.b_Z)
s=A.dx(s,s.r,s.$ti.c),q=x.z,n=s.$ti.c
case 5:if(!s.n()){w=6
break}m=s.d
w=7
return A.c(B.wh("ao apagar as linhas anteriores",new B.b54(d,m==null?n.a(m):m),q),$async$YH)
case 7:w=5
break
case 6:u=r
w=1
break
case 4:if(s)throw A.q(D.XM)
w=j.ax?8:10
break
case 8:l=A.aB(x.N)
for(s=d.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){q=J.p(s[p],"morada")
k=A.n(q==null?"":q).split("-")
if(k.length>=2)l.E(0,k[0]+"-"+k[1])}s=A.dx(l,l.r,l.$ti.c),r=x.z,q=s.$ti.c
case 11:if(!s.n()){w=12
break}n=s.d
if(n==null)n=q.a(n)
w=13
return A.c(B.wh("ao apagar as linhas anteriores (zona "+n+")",new B.b55(d,t,n),r),$async$YH)
case 13:w=11
break
case 12:w=9
break
case 10:w=14
return A.c(B.wh("ao apagar as linhas anteriores",new B.b56(d,t),x.z),$async$YH)
case 14:case 9:u=B.cYt(d.e,t)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$YH,v)},
dp6(d,e){var w,v=B.b59(d.a)
if(v==null||!v.ay)return d.e
w=e==null?d.y:e
if(w==null)throw A.q(D.XM)
return B.cYt(d.e,w)},
dpd(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="), n\xe3o da tua loja ("
if(f==null)return o
w=B.b59(d.a)
if(w==null)return o
if(w.as){v=d.y
if(v==null)return y.c
if(v!==f){u=d.x
return"Este ficheiro \xe9 da loja "+(u==null?v:u)+" ("+v+n+f+")."}return o}t=w.z
if(t==null)return o
s=w.Q?f:e
if(s==null)return"N\xe3o foi poss\xedvel confirmar a tua loja \u2014 tenta mais tarde."
u=d.e
r=x.y
q=r.i("a7<z.E>")
p=A.dk(new A.a7(new A.dg(new A.a2(u,new B.b5e(t),A.V(u).i("a2<1,d?>")),r),new B.b5f(s),q),q.i("z.E"))
if(p.a===0)return o
return"Este ficheiro tem dados de outra loja ("+p.aU(0,", ")+n+s+")."},
cYt(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=d.length,v=x.N,u=x.z,t=0;t<d.length;d.length===w||(0,A.r)(d),++t){s=d[t]
r=A.yR(null,null,v,u)
r.v(0,s)
r.k(0,"num_loja",e)
q.push(r)}return q},
dp7(d,e){var w,v=e==null?null:e.db
if(v==null)return d
w=v.$1(d)
if(J.bb(w))throw A.q(D.b02)
return w},
dp9(d,e){var w,v,u,t,s,r,q,p,o,n,m=$.dgf().hO(e)
if(m==null)return d
w=m.b[1]
w.toString
v=A.e4(w,null)
if(v<1||v>53)return d
u=A.aa(A.H(new A.E(Date.now(),0,!1)),1,4,0,0,0,0,0)
t=u.au(0-A.c7(A.cK(u)-1,0,0,0,0,0).a).au(A.c7((v-1)*7,0,0,0,0,0).a)
s=A.aa(A.H(t),A.K(t),A.a1(t),0,0,0,0,0).dP()
w=A.a([],x.t)
for(r=J.U(d),q=x.N,p=x.z;r.n();){o=r.gu(r)
n=A.yR(null,null,q,p)
n.v(0,o)
n.k(0,"importado_em",s)
w.push(n)}return w},
yI(d,e,f,g,h){return B.dpa(d,e,f,g,h)},
dpa(b6,b7,b8,b9,c0){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$yI=A.h(function(c1,c2){if(c1===1){s.push(c2)
w=t}for(;;)switch(w){case 0:b0=0
b1=x.s
b2=A.a([],b1)
b3=A.a([],b1)
b1=J.I(b6),f=c0!=null,e=x.H,d=x.J,a0=x.e,a1=0
case 3:if(!(a1<b1.gt(b6))){w=5
break}r=b1.h(b6,a1)
b9.$3(a1,b1.gt(b6),r.b)
t=7
w=10
return A.c(r.t1(),$async$yI)
case 10:q=c2
w=11
return A.c(A.dI(D.aMa,null,e),$async$yI)
case 11:w=12
return A.c(A.aQp(B.dF8(),q,null,d,a0),$async$yI)
case 12:p=c2
a2=J.U(p)
case 13:if(!a2.n()){w=14
break}o=a2.gu(a2)
n=J.ar(p)>1?r.b+" ("+o.b+")":r.b
t=16
m=B.dpd(o,b7,b8)
if(m!=null){J.ax(b3,A.n(n)+": "+m)
w=13
break}l=B.b59(o.a)
k=b8
a3=l
if(a3==null)a3=null
else a3=a3.z==null&&!a3.as
w=a3===!0&&f?19:20
break
case 19:w=21
return A.c(c0.$2(o,n),$async$yI)
case 21:k=c2
if(k==null){J.ax(b3,A.n(n)+": sem loja escolhida \u2014 ignorado.")
w=13
break}case 20:a3=l
if(a3==null)a3=null
else a3=a3.z==null&&!a3.as
w=a3===!0&&k!=null?22:24
break
case 22:a4=B.cYt(o.e,k)
w=23
break
case 24:a3=l
w=(a3==null?null:a3.ay)===!0?25:27
break
case 25:c2=B.dp6(o,b8)
w=26
break
case 27:w=28
return A.c(B.YH(o,b8),$async$yI)
case 28:case 26:a4=c2
case 23:j=a4
a3=l
if((a3==null?null:a3.cy)===!0)j=B.dp9(j,r.b)
j=B.dp7(j,l)
a3=j
a5=o.c
w=29
return A.c(B.b5a(a3,o.d,a5),$async$yI)
case 29:a5=r.b
a3=k
if(a3==null)a3=o.y
w=30
return A.c(B.Ca(o,a5,a3),$async$yI)
case 30:i=c2;++b0
a3=A.n(n)
a5=o.b
a6=J.ar(j)
a7=B.dG1(o)
a8=i==null?"":"\n"+i
J.ax(b2,a3+" \u2014 "+a5+" ("+a6+" registos)"+a7+a8)
t=7
w=18
break
case 16:t=15
b4=s.pop()
h=A.Q(b4)
J.ax(b3,A.n(n)+": "+A.n(h))
w=18
break
case 15:w=7
break
case 18:w=13
break
case 14:t=2
w=9
break
case 7:t=6
b5=s.pop()
g=A.Q(b5)
J.ax(b3,r.b+": "+A.n(g))
w=9
break
case 6:w=2
break
case 9:case 4:++a1
w=3
break
case 5:b9.$3(b1.gt(b6),b1.gt(b6),"")
u=new B.anc(b2,b3)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$yI,v)},
cQ1(d){return B.dBA(d)},
dBA(d){var w=0,v=A.l(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$cQ1=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=E.dch(d)
if(m.gRd().a===0)throw A.q(D.b03)
r=A.a([],x.i)
o=m.gRd(),o=new A.bN(o,o.r,o.e,A.w(o).i("bN<2>"))
case 3:if(!o.n()){w=4
break}q=o.d.gaG3(0)
p=B.dzy(q)
if(p==null){w=3
break}t=6
k=J
j=r
w=9
return A.c(B.cQ2(q,p),$async$cQ1)
case 9:k.ax(j,f)
t=2
w=8
break
case 6:t=5
l=s.pop()
if(!(A.Q(l) instanceof E.oP))throw l
w=8
break
case 5:w=2
break
case 8:w=3
break
case 4:if(J.ar(r)===0)throw A.q(D.b0_)
u=r
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$cQ1,v)},
cQ2(c4,c5){var w=0,v=A.l(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cQ2=A.h(function(c6,c7){if(c6===1)return A.i(c7,v)
for(;;)switch(w){case 0:c2=c5.d
c3=c2+1
if(c4.length<=c3)throw A.q(D.b00)
if(c5.y!=null){t=c4[1]
s=B.d0L(B.Li(1<t.length?t[1]:null))
t=c4[1]
r=B.d0L(B.Li(3<t.length?t[3]:null))}else{s=null
r=null}q=A.a([],x.s)
t=x.N
p=A.v(t,x.P)
o=A.a([],x.t)
n=x.z
m=A.v(t,n)
for(l=c5.ch,k=null,j=null,i=null,h=0;h<c2;++h){g=c4[h]
f=B.Li(0<g.length?g[0]:null)
if(typeof f!="string")continue
if(l)i=i==null?B.dcd(f):i
if(A.jV(f,"storeName2",0)){e=$.d2R().hO(f)
if(e!=null){g=e.b
d=g[1]
d.toString
k=C.h.V(d)
g=g[2]
g.toString
j="ST"+g}}else if(A.jV(f,"magasin",0)){e=$.d2P().hO(f)
if(e!=null){g=e.b
d=g[1]
d.toString
j="ST"+C.h.D(d,3,"0")
g=g[2]
g.toString
k=C.h.V(g)}}else if(A.jV(f,"lojaFinal",0)){e=$.d2Q().hO(f)
if(e!=null){g=e.b
d=g[1]
d.toString
j="ST"+C.h.D(d,3,"0")
g=g[2]
g.toString
k=C.h.V(g)}}}c2=c5.w,g=A.V(c2).i("a2<1,d>"),d=c2.length!==0,a0=c5.r,a1=a0!=null,a2=r!=null,a3=s!=null,a4=c5.x,a5=a4.length,a6=c5.e,a7=a6.length,a8=c5.CW,a9=a8!=null,b0=x.H,h=c3
case 3:if(!(h<c4.length)){w=5
break}w=C.f.a0(h-c3,500)===0?6:7
break
case 6:w=8
return A.c(A.dI(C.ba,null,b0),$async$cQ2)
case 8:case 7:b1=c4[h]
if(B.dBX(b1,a7)){w=4
break}if(a9)if(B.aQ1(B.Li(0<b1.length?b1[0]:null))===a8){w=4
break}f=B.Li(0<b1.length?b1[0]:null)
b2=typeof f=="string"
if(b2&&l)i=i==null?B.dcd(f):i
if(b2)b3=A.jV(f,"storeName2",0)
else b3=!1
if(b3){e=$.d2R().hO(f)
if(e!=null){b2=e.b
b3=b2[1]
b3.toString
k=C.h.V(b3)
b2=b2[2]
b2.toString
j="ST"+b2}w=4
break}if(b2)b3=A.jV(f,"magasin",0)
else b3=!1
if(b3){e=$.d2P().hO(f)
if(e!=null){b2=e.b
b3=b2[1]
b3.toString
j="ST"+C.h.D(b3,3,"0")
b2=b2[2]
b2.toString
k=C.h.V(b2)}w=4
break}if(b2)b3=A.jV(f,"lojaFinal",0)
else b3=!1
if(b3){e=$.d2Q().hO(f)
if(e!=null){b2=e.b
b3=b2[1]
b3.toString
j="ST"+C.h.D(b3,3,"0")
b2=b2[2]
b2.toString
k=C.h.V(b2)}w=4
break}if(b2)b2=A.jV(f,"Filtros aplicados",0)
else b2=!1
if(b2){w=4
break}b4=A.v(t,n)
for(b5=0;b5<a7;++b5){b6=a6[b5]
b7=b6.a
if(b7==null)continue
b4.k(0,b7,B.dzf(B.Li(b5<b1.length?b1[b5]:null),b6.b))}for(b8=0;b8<a5;++b8){b7=a4[b8]
if(b4.h(0,b7)==null||J.t(b4.h(0,b7),""))b4.k(0,b7,m.h(0,b7))
else m.k(0,b7,b4.h(0,b7))}if(a3)b4.k(0,"periodo_inicio",s)
if(a2)b4.k(0,"periodo_fim",r)
if(C.e.bn(c2,new B.cQ3(b4))){w=4
break}b9=!a1||a0.length===0
if(!d||b9){o.push(b4)
w=4
break}c0=new A.a2(c2,new B.cQ4(b4),g).aU(0,"||")
if(p.ao(0,c0))q.push("Linha "+(h+1)+": registo repetido \u2014 fica a \xfaltima vers\xe3o.")
p.k(0,c0,b4)
case 4:++h
w=3
break
case 5:if(p.a===0)c1=o
else{c2=p.$ti.i("bc<2>")
c2=A.F(new A.bc(p,c2),c2.i("z.E"))
c2.$flags=1
c1=c2}if(c1.length===0)throw A.q(D.b04)
u=new B.wF(c5.a,c5.b,c5.c,a0,c1,s,r,q,k,j,i)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$cQ2,v)},
dG1(d){var w,v=d.z
if(v==null)return""
w=v.split("-")
return w.length===3?" \xb7 dia "+w[2]+"/"+w[1]+"/"+w[0]:""},
dcd(d){var w,v,u,t,s,r,q,p=null,o=$.diR().hO(d)
if(o==null)return p
w=o.b
v=w[3]
v.toString
v=A.e4(v,p)
u=w[2]
u.toString
u=A.e4(u,p)
t=w[1]
t.toString
s=A.aa(v,u,A.e4(t,p),0,0,0,0,0)
if(w[4]!=null){v=w[6]
v.toString
v=A.e4(v,p)
u=w[5]
u.toString
u=A.e4(u,p)
w=w[4]
w.toString
r=A.aa(v,u,A.e4(w,p)-1,0,0,0,0,0)
q=!r.e1(s)?r:s}else q=s
return C.h.D(C.f.j(A.H(q)),4,"0")+"-"+C.h.D(C.f.j(A.K(q)),2,"0")+"-"+C.h.D(C.f.j(A.a1(q)),2,"0")},
dzy(d){var w,v,u,t,s,r,q
for(w=x.s,v=0;v<28;++v){u=C.BG[v]
t=u.d
if(t>=d.length)continue
s=d[t]
t=A.a([],w)
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)t.push(B.dBp(B.Li(s[q])))
if(C.e.fa(u.f,new B.cNB(t)))return u}return null},
dBX(d,e){var w,v=d.length
if(e<v)v=e
for(w=0;w<v;++w)if(B.Li(d[w])!=null)return!1
return!0},
Li(d){var w,v=d==null?null:d.b
if(v==null)return null
if(v instanceof F.nY){w=v.a.j(0)
return C.h.V(w)==="#"?null:w}if(v instanceof F.nz)return v.a
if(v instanceof F.oF)return v.a
if(v instanceof F.qX)return v.a
if(v instanceof F.pG)return A.aa(v.a,v.b,v.c,0,0,0,0,0)
if(v instanceof F.pH)return A.aa(v.a,v.b,v.c,v.d,v.e,v.f,v.r,v.w)
if(v instanceof F.p7)return v.ayT()
if(v instanceof F.oL)return v.a
return v.j(0)},
dzf(d,e){var w,v,u,t=null
if(d==null)return t
switch(e.a){case 0:w=B.aQ1(d)
return w==null||w.length===0?t:w
case 1:return B.cLK(d)
case 2:v=B.cLK(d)
return v==null?t:C.i.ac(v)
case 3:if(A.pp(d))return d
u=B.cLK(d)
if(u!=null)return u!==0
if(typeof d=="string"){w=C.h.V(d).toLowerCase()
if(w==="sim"||w==="yes"||w==="true")return!0
if(w==="nao"||w==="n\xe3o"||w==="no"||w==="false")return!1
return w.length!==0}return t
case 4:return B.d0L(d)
case 5:return B.dAw(d)
case 6:return B.dzC(d)
case 7:u=B.cLK(d)
return u==null?t:u*100
case 8:return B.dCl(d)
case 9:return B.dBw(d)
case 10:return B.dBZ(d)
case 11:return B.dBv(d)}},
dAw(d){var w,v,u
if(d instanceof A.c9)w=d
else w=d instanceof A.E?A.c7(0,A.cW(d),0,0,A.df(d),0):null
if(w==null)return null
v=w.a
u=C.f.aj(v,36e8)
v=C.f.aj(v,6e7)
return C.h.D(C.f.j(u%24),2,"0")+":"+C.h.D(C.f.j(v%60),2,"0")},
dzC(d){if(d instanceof A.c9)return C.f.aj(d.a,1000)/6e4
if(d instanceof A.E)return A.cW(d)*60+A.df(d)
return null},
aQ1(d){if(d==null)return null
if(typeof d=="string")return C.h.V(d)
if(typeof d=="number"&&d===C.i.io(d))return C.f.j(C.i.C(d))
if(d instanceof A.E)return d.dP()
return C.h.V(J.dD(d))},
cLK(d){var w,v
if(typeof d=="number")return d
if(typeof d=="string"){w=C.h.V(d)
v=A.ci(w,",",".")
if(v.length===0)return null
return A.cVb(v)}return null},
d0L(d){var w
if(d==null)return null
if(d instanceof A.E)return B.dcD(d)
if(typeof d=="string"){w=A.r8(C.h.V(d))
return w==null?null:B.dcD(w)}return null},
dcD(d){return""+A.H(d)+"-"+C.h.D(C.f.j(A.K(d)),2,"0")+"-"+C.h.D(C.f.j(A.a1(d)),2,"0")},
dCl(d){var w
if(d instanceof A.E)return d.dP()
if(typeof d=="string"){w=A.r8(C.h.V(d))
return w==null?null:w.dP()}return null},
dBZ(d){var w=B.aQ1(d)
if(w==null)return null
return C.h.V(C.h.lb(w,$.diS(),""))},
dBw(d){var w,v,u=B.aQ1(d)
if(u==null)return null
w=$.diQ().hO(u)
if(w==null)return null
v=w.b[1]
v.toString
return"ST"+C.h.D(v,3,"0")},
dBv(d){var w,v,u=B.aQ1(d)
if(u==null)return null
w=$.diP().hO(u)
if(w==null)return null
v=w.b[1]
v.toString
return"ST"+C.h.D(v,3,"0")},
dBp(d){var w,v,u,t=d==null?null:J.dD(d)
if(t==null)t=""
w=C.h.V(t.toLowerCase())
for(v=0;v<23;++v){t="\xe1\xe0\xe2\xe3\xe4\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf3\xf2\xf4\xf5\xf6\xfa\xf9\xfb\xfc\xe7"[v]
u="aaaaaeeeeiiiiooooouuuuc"[v]
w=A.ci(w,t,u)}return w},
b5b:function b5b(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
b5c:function b5c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5d:function b5d(d,e,f){this.a=d
this.b=e
this.c=f},
b57:function b57(d,e,f){this.a=d
this.b=e
this.c=f},
b58:function b58(d){this.a=d},
b54:function b54(d,e){this.a=d
this.b=e},
b55:function b55(d,e,f){this.a=d
this.b=e
this.c=f},
b56:function b56(d,e){this.a=d
this.b=e},
b5e:function b5e(d){this.a=d},
b5f:function b5f(d){this.a=d},
anc:function anc(d,e){this.b=d
this.c=e},
wF:function wF(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n},
cQ3:function cQ3(d){this.a=d},
cQ4:function cQ4(d){this.a=d},
cNB:function cNB(d){this.a=d},
cNA:function cNA(d){this.a=d},
d16(){var w=0,v=A.l(x.E),u,t,s,r
var $async$d16=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=b.G
r=s.document.createElement("input")
r.type="file"
r.multiple=!0
r.webkitdirectory=!0
s.document.body.appendChild(r)
s=new A.aZ($.bp,x.g)
t=new A.c3(s,x.R)
new A.Eq(r,"change",!1,x.a).gN(0).cT(new B.cTv(r,t),x.H)
r.addEventListener("cancel",A.id(new B.cTw(r,t)))
r.click()
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$d16,v)},
cTv:function cTv(d,e){this.a=d
this.b=e},
cTw:function cTw(d,e){this.a=d
this.b=e},
NQ(d,e,f){return B.doM(d,e,f)},
doM(d,e,f){var w=0,v=A.l(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$NQ=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:k=D.c42.h(0,d)
if(k==null){w=1
break}w=3
return A.c(A.xW(k),$async$NQ)
case 3:p=h
o=x.N
n=x.K
m=A.v(o,n)
m.k(0,"origem",d)
m.k(0,"metricas",p)
if(f!=null)m.k(0,"num_loja",f)
r=m
w=e!=null?4:5
break
case 4:t=7
m=$.S().b
m===$&&A.b()
m=m.R("metricas_historico")
q=A.e7(r,o,n)
J.bz(q,"data_referencia",e)
w=10
return A.c(m.d9(0,q),$async$NQ)
case 10:w=1
break
t=2
w=9
break
case 7:t=6
j=s.pop()
if(!(A.Q(j) instanceof A.ee))throw j
w=9
break
case 6:w=2
break
case 9:case 5:q=$.S().b
q===$&&A.b()
w=11
return A.c(q.R("metricas_historico").d9(0,r),$async$NQ)
case 11:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$NQ,v)},
bss(d){var w=0,v=A.l(x.O),u,t,s,r,q,p
var $async$bss=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=$.S().b
q===$&&A.b()
t=x.z
p=x.j
w=3
return A.c(q.bi("sscc_gerar_acertos",A.X(["p_num_loja",d],x.N,t),t),$async$bss)
case 3:s=p.a(f)
q=J.I(s)
if(q.ga2(s)){u=D.ceU
w=1
break}r=x.P.a(q.gN(s))
q=J.I(r)
t=A.ap(q.h(r,"aplicados"))
t=t==null?null:C.i.C(t)
if(t==null)t=0
q=A.ap(q.h(r,"propostos"))
q=q==null?null:C.i.C(q)
u=new A.a9X(t,q==null?0:q)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$bss,v)}},D,E,G
J=c[1]
A=c[0]
C=c[2]
F=c[5]
B=a.updateHolder(c[6],B)
D=c[12]
E=c[9]
G=c[13]
B.C9.prototype={
a_(){return new B.a85(C.nC)}}
B.a85.prototype={
a3(){this.af()
this.KN()},
KN(){var w=0,v=A.l(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$KN=A.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n={}
w=7
return A.c(A.Ph(),$async$KN)
case 7:q=e
if(q==null){w=1
break}w=8
return A.c(A.rK(),$async$KN)
case 8:p=e
if(r.c==null){w=1
break}n.a=null
for(m=J.U(p);m.n();){o=m.gu(m)
if(o.b===q.r){n.a=o.a
break}}r.p(new B.c2G(n,r,q,p))
r.EP()
t=2
w=6
break
case 4:t=3
k=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$KN,v)},
EP(){var w=0,v=A.l(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$EP=A.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:r.p(new B.c2D(r))
t=4
w=7
return A.c(A.aQx(r.e),$async$EP)
case 7:q=e
if(r.c==null){w=1
break}r.p(new B.c2E(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=A.Q(n)
if(r.c==null){w=1
break}r.p(new B.c2F(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$EP,v)},
Fi(){var w=0,v=A.l(x.H),u=this,t,s
var $async$Fi=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.c(A.aE(null,null,!0,null,new B.c2P(),s,null,!0,x.N),$async$Fi)
case 2:t=e
w=t==="ficheiros"?3:5
break
case 3:w=6
return A.c(u.Mq(),$async$Fi)
case 6:w=4
break
case 5:w=t==="pasta"?7:8
break
case 7:w=9
return A.c(u.Mp(),$async$Fi)
case 9:case 8:case 4:return A.j(null,v)}})
return A.k($async$Fi,v)},
Mq(){var w=0,v=A.l(x.H),u,t=this,s,r
var $async$Mq=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=A.a([C.ih],x.D)
w=3
return A.c($.d1X().Dj(s,null,null),$async$Mq)
case 3:r=e
if(J.bb(r)){w=1
break}w=4
return A.c(t.Mo(r),$async$Mq)
case 4:case 1:return A.j(u,v)}})
return A.k($async$Mq,v)},
Mp(){var w=0,v=A.l(x.H),u,t=this,s
var $async$Mp=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(B.d16(),$async$Mp)
case 3:s=e
if(J.bb(s)){w=1
break}w=4
return A.c(t.Mo(s),$async$Mp)
case 4:case 1:return A.j(u,v)}})
return A.k($async$Mp,v)},
Mo(d){return this.bbT(d)},
bbT(d){var w=0,v=A.l(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Mo=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:r.p(new B.c2R(r))
t=4
o=r.e
n=r.f
m=r.d?r.gb2X():null
w=7
return A.c(B.yI(d,n,o,new B.c2S(r),m),$async$Mo)
case 7:q=f
if(r.c==null){w=1
break}r.p(new B.c2T(r,q))
if(q.b.length!==0)r.EP()
t=2
w=6
break
case 4:t=3
k=s.pop()
p=A.Q(k)
if(r.c==null){w=1
break}r.p(new B.c2U(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$Mo,v)},
b2Y(d,e){var w,v=null,u={}
u.a=null
w=this.c
w.toString
return A.aE(v,v,!1,v,new B.c2M(u,this,e),w,v,!0,x.N)},
G(d){var w=this,v=null,u=A.A(d),t=u.ok,s=A.f("Importar v\xe1rios ficheiros",v,v,v,v,t.w,v,v,v),r=w.ay,q=w.ch,p=w.w,o=p?v:w.gb31(),n=p?C.jG:D.aWW,m=x.p
o=A.a([s,C.M,new B.a5W(r,q,w.gaWI(),v),C.M,A.jj(n,A.f(p?"A importar\u2026":"Escolher ficheiros ou pasta",v,v,v,v,v,v,v,v),o,v)],m)
if(w.w&&w.x.length!==0){t=t.Q
s=A.a([C.U,A.f(w.x,v,v,v,v,t,v,v,v)],m)
if(t==null)t=v
else{r=u.ax
q=r.rx
t=t.a4(q==null?r.k3:q)}s.push(new A.D(C.hu,A.f("Ficheiros grandes (dezenas de milhares de linhas) s\xe3o lidos no pr\xf3prio browser e podem deixar o separador sem resposta durante um ou dois minutos. Se aparecer \xabEsta p\xe1gina n\xe3o est\xe1 a responder\xbb, escolhe \xabEsperar\xbb. Na app Windows/Android n\xe3o acontece.",v,v,v,v,t,v,v,v),v))
C.e.v(o,s)}if(!w.w&&w.y!=null){t=w.y
t.toString
s=w.z
s.toString
C.e.v(o,A.a([C.M,new B.aBd(t,s,v)],m))}return A.bu(new A.dN(G.Sm,A.cp(A.J(A.a([A.J(o,C.af,C.l,C.q,0,C.u)],m),C.af,C.l,C.J,0,C.u),v,C.D,C.c0,v,v,C.aq),v),v,v)}}
B.a5W.prototype={
a_(){return new B.aBc()}}
B.aBc.prototype={
G(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.A(d),i=l.a,h=i.c,g=h==null,f=g?k:h.a,e=i.d
i=f==null
if(i)w=D.bWu
else{v=A.a([],x.n)
for(u=0;u<28;++u){t=C.BG[u]
if(f.ao(0,t.a))v.push(t)}w=v}s=l.d?C.BG:w
v=j.ax
r=v.RG
if(r==null)r=v.k2
q=A.aN(12)
p=g?"J\xe1 importado hoje":"Uploads hoje: "+h.gqV(0)+" ("+w.length+" de 28 formatos)"
o=j.ok
n=o.z
m=x.p
n=A.a([A.Z(A.f(p,k,k,k,k,n==null?k:n.bV(C.bz),k,k,k),1)],m)
if(g&&e==null)n.push(C.Pk)
g=A.a([A.O(n,C.t,C.l,C.q,0,k,k),C.U],m)
if(e!=null){i=v.fy
v=A.aO(C.B,i,k,16)
o=o.Q
i=o==null?k:o.a4(i)
g.push(new A.D(C.fU,A.O(A.a([v,C.a9,A.Z(A.f("N\xe3o foi poss\xedvel carregar: "+e,k,k,k,k,i,k,k,k),1),A.ay(!1,G.app,k,k,!0,k,k,l.a.e,k,k)],m),C.A,C.l,C.q,0,k,k),k))}else{p=A.a([],m)
if(!i&&s.length===0){o=o.Q
if(o==null)v=k
else{n=v.rx
v=o.a4(n==null?v.k3:n)}p.push(new A.D(C.ed,A.f("Ainda nada importado hoje.",k,k,k,k,v,k,k,k),k))}for(v=s.length,u=0;u<s.length;s.length===v||(0,A.r)(s),++u){t=s[u]
o=i?k:f.h(0,t.a)
p.push(l.bbS(j,t.b,o))}i=l.d
v=A.aO(i?C.nr:D.aV5,k,k,18)
p.push(new A.d7(C.bj,k,k,A.h8(v,A.f(i?"Mostrar s\xf3 os importados hoje":"Mostrar todos os formatos (28)",k,k,k,k,k,k,k,k),new B.bGM(l),k),k))
C.e.v(g,p)}return A.aS(k,A.J(g,C.A,C.l,C.q,0,C.u),C.E,k,k,new A.b0(r,k,k,q,k,k,C.al),k,k,k,k,C.cz,k,k,k)},
bbS(d,e,f){var w,v,u,t,s,r,q=null,p=f!=null&&J.cT(f),o=d.ax
if(p)w=o.b
else{v=o.rx
w=v==null?o.k3:v}o=p?C.hU:G.Ww
o=A.aO(o,p?w:w.aX(0.5),q,16)
v=d.ok.Q
u=v==null
if(u)t=q
else t=v.a4(p?q:w)
t=A.a([o,C.a9,A.Z(A.f(e,q,q,q,q,t,q,q,q),1)],x.p)
if(p){o=A.a([],x.s)
for(s=J.U(f);s.n();){r=s.gu(s)
o.push(C.h.D(C.f.j(A.cW(r)),2,"0")+":"+C.h.D(C.f.j(A.df(r)),2,"0"))}o=C.e.aU(o," \xb7 ")
t.push(A.f(o,q,q,q,q,u?q:v.a4(w),C.md,q,q))}return new A.D(C.is,A.O(t,C.t,C.l,C.q,0,q,q),q)}}
B.aBd.prototype={
G(d){var w,v,u,t,s,r,q,p,o=null,n=A.A(d),m=this.c,l=m.length,k=this.d,j=k.length,i=n.ax,h=i.RG
if(h==null)h=i.k2
w=A.aN(12)
v=j===0?"":", "+j+" com erro"
u=n.ok
t=u.z
t=t==null?o:t.bV(C.bz)
s=x.p
t=A.a([A.f(""+l+" de "+(l+j)+" importado(s) com sucesso"+v+".",o,o,o,o,t,o,o,o),C.U],s)
for(l=m.length,j=i.b,u=u.Q,r=0;r<m.length;m.length===l||(0,A.r)(m),++r){q=m[r]
t.push(new A.D(C.is,A.O(A.a([A.aO(C.hU,j,o,18),C.a9,new A.bW(1,C.au,A.f(q,o,o,o,o,u,o,o,o),o)],s),C.A,C.l,C.q,0,o,o),o))}for(m=k.length,i=i.fy,r=0;r<k.length;k.length===m||(0,A.r)(k),++r){p=k[r]
t.push(new A.D(C.is,A.O(A.a([A.aO(C.W5,i,o,18),C.a9,new A.bW(1,C.au,A.f(p,o,o,o,o,u,o,o,o),o)],s),C.A,C.l,C.q,0,o,o),o))}return A.aS(o,A.J(t,C.A,C.l,C.q,0,C.u),C.E,o,o,new A.b0(h,o,o,w,o,o,C.al),o,o,o,o,C.cz,o,o,o)}}
B.anc.prototype={}
B.wF.prototype={}
var z=a.updateTypes(["ak<~>()","ak<d?>(wF,d)","ak<y<wF>>(eP)"])
B.c2G.prototype={
$0(){var w=this,v=w.b,u=w.c
v.d=A.a3(u.e)===C.w
v.e=u.r
v.r=w.d
v.f=w.a.a},
$S:0}
B.c2D.prototype={
$0(){return this.a.ch=null},
$S:0}
B.c2E.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.c2F.prototype={
$0(){return this.a.ch=A.n(this.b)},
$S:0}
B.c2P.prototype={
$1(d){return A.Qe(A.a([A.brl(D.cu1,new B.c2N(d)),A.brl(D.cux,new B.c2O(d))],x.p),D.ctO)},
$S:129}
B.c2N.prototype={
$0(){return A.R(this.a,!1).T("ficheiros")},
$S:0}
B.c2O.prototype={
$0(){return A.R(this.a,!1).T("pasta")},
$S:0}
B.c2R.prototype={
$0(){var w=this.a
w.w=!0
w.x=""
w.z=w.y=null},
$S:0}
B.c2S.prototype={
$3(d,e,f){var w=this.a
if(w.c==null)return
w.p(new B.c2Q(w,f,d,e))},
$S:1628}
B.c2Q.prototype={
$0(){var w=this,v=w.b
v=v.length===0?"Conclu\xeddo.":'A importar "'+v+'" ('+w.c+"/"+w.d+")\u2026"
w.a.x=v},
$S:0}
B.c2T.prototype={
$0(){var w,v=this.a
v.w=!1
w=this.b
v.y=w.b
v.z=w.c},
$S:0}
B.c2U.prototype={
$0(){var w=this.a
w.w=!1
w.y=C.C
w.z=A.a(["Erro ao importar: "+A.n(this.b)],x.s)},
$S:0}
B.c2M.prototype={
$1(d){return new A.du(new B.c2L(this.a,this.b,this.c),null)},
$S:10}
B.c2L.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=A.A(d).ok.Q
if(o==null)o=p
else{w=A.A(d).ax
v=w.rx
o=o.a4(v==null?w.k3:v)}o=A.f(this.c,p,p,p,p,o,p,p,p)
w=this.a
v=w.a
u=A.a([],x.I)
for(t=J.U(this.b.r),s=x.r;t.n();){r=t.gu(t)
q=r.b
u.push(new A.be(q,A.f(q+" \u2014 "+r.a,p,p,p,p,p,p,p,p),C.am,p,s))}t=x.p
u=A.J(A.a([o,C.M,new A.T(p,44,new A.cd(v,p,u,new B.c2I(w,e),C.xR,p,!0,p,x.B),p)],t),C.A,C.l,C.J,0,C.u)
v=A.ay(!1,D.cxl,p,p,!0,p,p,new B.c2J(d),p,p)
return A.aK(A.a([v,A.b5(C.vh,w.a==null?p:new B.c2K(w,d),p)],t),p,p,u,p,p,p,D.ctb)},
$S:12}
B.c2I.prototype={
$1(d){return this.b.$1(new B.c2H(this.a,d))},
$S:7}
B.c2H.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.c2J.prototype={
$0(){return A.R(this.a,!1).bc()},
$S:0}
B.c2K.prototype={
$0(){return A.R(this.b,!1).T(this.a.a)},
$S:0}
B.bGM.prototype={
$0(){var w=this.a
return w.p(new B.bGL(w))},
$S:0}
B.bGL.prototype={
$0(){var w=this.a
return w.d=!w.d},
$S:0}
B.aZm.prototype={
$2(d,e){var w=A.ap(J.p(d,e))
return w==null?null:w},
$S:1629}
B.b5b.prototype={
$0(){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=t.a,r=t.d,q=t.e,p=x.z,o=t.c,n=o!=null,m=t.b
case 3:l=s.a
k=m.length
if(l>=k){w=1
break}j=l+1
s.a=j
i=m[l]
h="ao gravar o lote "+j+" de "+k
w=n&&o.length!==0?5:7
break
case 5:w=8
return A.c(B.wh(h,new B.b5c(r,q,i,o),p),$async$$0)
case 8:w=6
break
case 7:w=9
return A.c(B.wh(h,new B.b5d(r,q,i),p),$async$$0)
case 9:case 6:s.b=s.b+i.length
w=3
break
case 4:case 1:return A.j(u,v)}})
return A.k($async$$0,v)},
$S:1}
B.b5c.prototype={
$0(){var w=this
return w.a.R(w.b).qX(w.c,w.d)},
$S:176}
B.b5d.prototype={
$0(){return this.a.R(this.b).d9(0,this.c)},
$S:176}
B.b57.prototype={
$0(){return B.NQ(this.a,this.c.z,this.b)},
$S:1}
B.b58.prototype={
$0(){return B.NQ("edificios",null,this.a)},
$S:1}
B.b54.prototype={
$0(){var w=$.S().b
w===$&&A.b()
return w.R(this.a.c).dt(0).W("num_loja",this.b)},
$S:176}
B.b55.prototype={
$0(){var w=$.S().b
w===$&&A.b()
w=w.R(this.a.c).dt(0).W("num_loja",this.b)
return A.d4(w.c4(w.c5("morada","like."+(this.c+"-%"))),w.$ti.c)},
$S:176}
B.b56.prototype={
$0(){var w=$.S().b
w===$&&A.b()
return w.R(this.a.c).dt(0).W("num_loja",this.b)},
$S:176}
B.b5e.prototype={
$1(d){return A.a4(J.p(d,this.a))},
$S:493}
B.b5f.prototype={
$1(d){return d!==this.a},
$S:13}
B.cQ3.prototype={
$1(d){var w=this.a.h(0,d)
return J.dD(w==null?"":w).length===0},
$S:13}
B.cQ4.prototype={
$1(d){var w=this.a.h(0,d)
return A.n(w==null?"":w)},
$S:21}
B.cNB.prototype={
$1(d){return C.e.bn(this.a,new B.cNA(d))},
$S:13}
B.cNA.prototype={
$1(d){return C.h.l(d,this.a)},
$S:13}
B.cTv.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=p.files,n=A.a([],x.S)
if(o!=null)for(w=b.G,v=0;v<o.length;++v){u=o.item(v)
if(u==null)continue
if(!C.h.iz(u.name.toLowerCase(),".xlsx"))continue
t=w.URL.createObjectURL(u)
s=u.name
r=u.type
q=u.size
n.push(A.xd(t,new A.E(A.mL(u.lastModified,0,!1),0,!1),q,r,s))}p.remove()
p=this.b
if((p.a.a&30)===0)p.eL(0,n)},
$S:40}
B.cTw.prototype={
$1(d){var w
this.a.remove()
w=this.b
if((w.a.a&30)===0)w.eL(0,D.bWv)},
$S:40};(function installTearOffs(){var w=a._instance_0u,v=a._instance_2u,u=a._static_1
var t
w(t=B.a85.prototype,"gaWI","EP",0)
w(t,"gb31","Fi",0)
v(t,"gb2X","b2Y",1)
u(B,"dF8","cQ1",2)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.ac,[B.C9,B.a5W])
w(A.ad,[B.a85,B.aBc])
w(A.tM,[B.c2G,B.c2D,B.c2E,B.c2F,B.c2N,B.c2O,B.c2R,B.c2Q,B.c2T,B.c2U,B.c2H,B.c2J,B.c2K,B.bGM,B.bGL,B.b5b,B.b5c,B.b5d,B.b57,B.b58,B.b54,B.b55,B.b56])
w(A.nl,[B.c2P,B.c2S,B.c2M,B.c2I,B.b5e,B.b5f,B.cQ3,B.cQ4,B.cNB,B.cNA,B.cTv,B.cTw])
w(A.vM,[B.c2L,B.aZm])
v(B.aBd,A.aA)
w(A.ae,[B.anc,B.wF])})()
A.EO(b.typeUniverse,JSON.parse('{"a5W":{"ac":[],"o":[]},"C9":{"ac":[],"o":[]},"a85":{"ad":["C9"]},"aBc":{"ad":["a5W"]},"aBd":{"aA":[],"o":[]}}'))
var y={c:'N\xe3o foi poss\xedvel identificar a loja deste ficheiro (rodap\xe9 "Filtros aplicados" em falta) \u2014 exporta-o de novo.'}
var x=(function rtii(){var w=A.aq
return{r:w("be<d>"),x:w("ak<~>"),C:w("anc"),I:w("x<be<d>>"),n:w("x<hc>"),G:w("x<y<a5<d,@>>>"),t:w("x<a5<d,@>>"),i:w("x<wF>"),s:w("x<d>"),p:w("x<o>"),S:w("x<jP>"),D:w("x<Ac>"),F:w("y<a5<d,@>>"),e:w("y<wF>"),E:w("y<jP>"),j:w("y<@>"),P:w("a5<d,@>"),K:w("ae"),m:w("wF"),O:w("+aplicados,propostos(e,e)"),B:w("cd<d>"),N:w("d"),J:w("eP"),y:w("dg<d>"),R:w("c3<y<jP>>"),a:w("Eq<aR>"),g:w("aZ<y<jP>>"),z:w("@"),X:w("ae?"),T:w("d?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Uy=new A.c9(3e6)
D.aMa=new A.c9(8e4)
D.aV5=new A.an(58244,"MaterialIcons",!0)
D.aWW=new A.aW(C.Wl,null,null,null,null)
D.b_Z=new E.oP("N\xe3o foi poss\xedvel identificar a loja deste ficheiro \u2014 exporta-o de novo.")
D.b0_=new E.oP("Formato n\xe3o reconhecido. Este ficheiro n\xe3o corresponde a nenhum formato conhecido. Verifica se \xe9 o ficheiro certo.")
D.b00=new E.oP("O ficheiro n\xe3o tem linhas de dados.")
D.b02=new E.oP("O ficheiro n\xe3o tem linhas reconhec\xedveis para este formato \u2014 exporta-o de novo.")
D.b03=new E.oP("O ficheiro n\xe3o tem folhas de c\xe1lculo.")
D.b04=new E.oP("N\xe3o foram encontradas linhas de dados v\xe1lidas.")
D.XM=new E.oP(y.c)
D.bGm=w(["av","za","rl","pc","ext","eml"],x.s)
D.bWu=w([],x.n)
D.bWv=w([],x.S)
D.c7K={relex:0,opcom:1,reserva:2,promessa:3,valorizacoes:4,preparar:5,localizacao_oc:6,edificios:7}
D.c42=new A.al(D.c7K,["vw_param_resumo","vw_opcom_resumo","vw_reserva_resumo","vw_promessa_resumo","vw_valorizacoes_resumo","vw_preparar_resumo","vw_localizacao_oc_resumo","vw_edificio_resumo"],A.aq("al<d,d>"))
D.ceU=new A.a9X(0,0)
D.ctb=new A.L("De que loja \xe9 este ficheiro?",null,null,null,null,null,null,null,null,null,null)
D.ctO=new A.L("Importar v\xe1rios ficheiros",null,null,null,null,null,null,null,null,null,null)
D.cu1=new A.L("Ficheiros individuais",null,null,null,null,null,null,null,null,null,null)
D.cux=new A.L("Pasta inteira",null,null,null,null,null,null,null,null,null,null)
D.cxl=new A.L("Ignorar ficheiro",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dJN","dgf",()=>A.cb("sem(\\d{1,2})",!1,!1,!1))
w($,"dOK","d2R",()=>A.cb("storeName2\\s+\xe9\\s+(.+?)\\s*\\((\\d+)\\)",!0,!1,!1))
w($,"dOI","d2P",()=>A.cb("magasin\\s+\xe9\\s+(\\d+)\\s*-\\s*(.+)",!0,!1,!1))
w($,"dOJ","d2Q",()=>A.cb("lojaFinal\\s+\xe9\\s+(\\d+)\\s*-\\s*(.+?)(?:\\n|$)",!0,!1,!1))
w($,"dOH","diR",()=>A.cb("Date\\s+\xe9\\s+em\\s+ou\\s+posterior\\s+a\\s+(\\d{2})-(\\d{2})-(\\d{4})(?:\\s+e\\s+\xe9\\s+anterior\\s+a\\s+(\\d{2})-(\\d{2})-(\\d{4}))?",!0,!1,!1))
w($,"dOL","diS",()=>A.cb("\\s*-\\s*$",!0,!1,!1))
w($,"dOG","diQ",()=>A.cb("\\((\\d+)\\)\\s*$",!0,!1,!1))
w($,"dOF","diP",()=>A.cb("^(\\d+)\\s*-",!0,!1,!1))})()};
(a=>{a["QIP1D9ghfGj0jY3VQQv9Qwze8eU="]=a.current})($__dart_deferred_initializers__);