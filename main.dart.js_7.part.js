((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,B={
dn_(){return new B.C4(null)},
C4:function C4(d){this.a=d},
a7N:function a7N(d){var _=this
_.d=!1
_.f=_.e=null
_.r=d
_.w=!1
_.x=""
_.c=_.a=_.ch=_.ay=_.z=_.y=null},
c0I:function c0I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c0F:function c0F(d){this.a=d},
c0G:function c0G(d,e){this.a=d
this.b=e},
c0H:function c0H(d,e){this.a=d
this.b=e},
c0R:function c0R(){},
c0P:function c0P(d){this.a=d},
c0Q:function c0Q(d){this.a=d},
c0T:function c0T(d){this.a=d},
c0U:function c0U(d){this.a=d},
c0S:function c0S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c0V:function c0V(d,e){this.a=d
this.b=e},
c0W:function c0W(d,e){this.a=d
this.b=e},
c0O:function c0O(d,e,f){this.a=d
this.b=e
this.c=f},
c0N:function c0N(d,e,f){this.a=d
this.b=e
this.c=f},
c0K:function c0K(d,e){this.a=d
this.b=e},
c0J:function c0J(d,e){this.a=d
this.b=e},
c0L:function c0L(d){this.a=d},
c0M:function c0M(d,e){this.a=d
this.b=e},
a5D:function a5D(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAO:function aAO(){this.d=!1
this.c=this.a=null},
bEW:function bEW(d){this.a=d},
bEV:function bEV(d){this.a=d},
aAP:function aAP(d,e,f){this.c=d
this.d=e
this.a=f},
X_(d){var w=0,v=A.l(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$X_=A.h(function(a0,a1){if(a0===1)return A.i(a1,v)
for(;;)switch(w){case 0:if(d==null){w=1
break}w=3
return A.c(A.xS("vw_edificio_resumo"),$async$X_)
case 3:t=a1
w=4
return A.c(A.xS("vw_edificio_top_av_za_pc"),$async$X_)
case 4:s=a1
r=new B.aYR()
q=new A.E(Date.now(),0,!1)
p=C.h.D(C.f.j(A.H(q)),4,"0")+"-"+C.h.D(C.f.j(A.K(q)),2,"0")+"-"+C.h.D(C.f.j(A.a1(q)),2,"0")
o=A.a([],x.t)
for(q=x.N,n=x.z,m=J.I(t),l=0;l<6;++l){k=D.bG3[l]
j=k==="rl"?t:s
i=r.$2(j,k+"_pct_top0")
h=r.$2(j,k+"_pct_top1")
g=r.$2(j,k+"_pct_top2")
f=r.$2(j,k+"_pct_top0_ou_top2")
if(i==null&&h==null&&g==null)continue
e=A.ap(m.h(t,"n_"+k))
e=e==null?null:C.i.C(e)
o.push(A.Y(["num_loja",d,"data",p,"corredor",k.toUpperCase(),"n_linhas",e,"pct_top0",i,"pct_top1",h,"pct_top2",g,"pct_top0_ou_top2",f,"capturado_em",new A.E(Date.now(),0,!1).n3().dV()],q,n))}if(o.length===0){w=1
break}q=$.R().b
q===$&&A.b()
w=5
return A.c(q.R("edificio_top_diario").qX(o,"num_loja,data,corredor"),$async$X_)
case 5:case 1:return A.j(u,v)}})
return A.k($async$X_,v)},
aYS(d){var w=0,v=A.l(x.H),u,t,s
var $async$aYS=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:if(d==null){w=1
break}t=$.R().b
t===$&&A.b()
s=x.z
w=3
return A.c(t.br("edificio_top_seccao_gravar",A.Y(["p_num_loja",d],x.N,s),s),$async$aYS)
case 3:case 1:return A.j(u,v)}})
return A.k($async$aYS,v)},
aYR:function aYR(){},
wc(d,e,f){var w=D.Uo,v=3
return B.dn3(d,e,f,f)},
dn3(d,e,f,g){var w=0,v=A.l(g),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$wc=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=D.Uo
k=3
r=1,o=x.H
case 3:t=7
w=10
return A.c(e.$0(),$async$wc)
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
w=n instanceof A.eT?11:13
break
case 11:q=n
p=q.b==="57014"
if(!p)throw j
if(r>=k)throw A.q(new E.oM("O servidor demorou demasiado "+d+" (tempo esgotado, "+A.n(r)+" tentativas). Tenta outra vez daqui a pouco."))
n=r
w=14
return A.c(A.dJ(new A.c9(C.i.ac(l.a*n)),null,o),$async$wc)
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
return A.k($async$wc,v)},
b4D(d,e,f){return B.dn7(d,e,f)},
dn7(d,e,f){var w=0,v=A.l(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b4D=A.h(function(g,h){if(g===1)return A.i(h,v)
for(;;)switch(w){case 0:k={}
j=$.R().b
j===$&&A.b()
t=J.I(d)
s=t.gt(d)
r=A.a([],x.G)
for(q=0;q<s;q=p){p=q+500
r.push(t.dG(d,q,p<s?p:s))}o=r.length
if(o===0){w=1
break}n=k.a=k.b=0
m=new B.b4E(k,r,e,j,f,null,s)
if(4<o)o=4
l=J.h1(o,x.x)
for(;n<o;++n)l[n]=m.$0()
w=3
return A.c(A.eX(l,x.H),$async$b4D)
case 3:case 1:return A.j(u,v)}})
return A.k($async$b4D,v)},
C5(d,e,f){return B.dn6(d,e,f)},
dn6(d,e,f){var w=0,v=A.l(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$C5=A.h(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:l=$.R()
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
return A.c(k.dd(0,A.Y(["profile_id",p,"tabela",d.c,"ficheiro_nome",e,"ficheiro_tamanho",null,"ficheiro_modificado_em",null,"linhas",o,"periodo_inicio",d.f,"periodo_fim",d.r,"avisos",n,"importado_por",l,"num_loja",f],x.N,x.X)),$async$C5)
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
return A.c(B.wc("ao registar o resumo do hist\xf3rico",new B.b4A(r,f,d),x.H),$async$C5)
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
return A.c(B.wc("ao registar o resumo dos edif\xedcios",new B.b4B(f),x.H),$async$C5)
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
return A.c(B.X_(f),$async$C5)
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
return A.c(B.aYS(f),$async$C5)
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
return A.c(B.b4w(f),$async$C5)
case 26:l=a1
u=l==null?q:l
w=1
break
case 10:u=q
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$C5,v)},
b4w(d){return B.dn0(d)},
dn0(d){var w=0,v=A.l(x.T),u,t=2,s=[],r,q,p,o,n
var $async$b4w=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(B.brV(d),$async$b4w)
case 7:r=f
if(r.a===0&&r.b===0){u=null
w=1
break}q=A.a([],x.s)
if(r.a>0)J.ax(q,""+r.a+" atualizado(s) sozinho(s)")
if(r.b>0)J.ax(q,""+r.b+" para validar")
p=q
q=J.xO(p,", ")
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
return A.k($async$b4w,v)},
b4C(d){var w,v
for(w=0;w<28;++w){v=C.BB[w]
if(v.a===d)return v}return null},
Ys(d,e){var w=0,v=A.l(x.F),u,t,s,r,q,p,o,n,m,l,k,j
var $async$Ys=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:j=B.b4C(d.a)
if(j==null||!j.at){u=d.e
w=1
break}t=e==null?d.y:e
s=t==null
w=s&&j.z==="num_loja"&&j.Q?3:4
break
case 3:s=A.aB(x.N)
for(r=d.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p]
n=J.I(o)
m=n.h(o,"num_loja")
if(A.n(m==null?"":m).length!==0)s.E(0,A.n(n.h(o,"num_loja")))}if(s.a===0)throw A.q(D.b_I)
s=A.dB(s,s.r,s.$ti.c),q=x.z,n=s.$ti.c
case 5:if(!s.n()){w=6
break}m=s.d
w=7
return A.c(B.wc("ao apagar as linhas anteriores",new B.b4x(d,m==null?n.a(m):m),q),$async$Ys)
case 7:w=5
break
case 6:u=r
w=1
break
case 4:if(s)throw A.q(D.XD)
w=j.ax?8:10
break
case 8:l=A.aB(x.N)
for(s=d.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){q=J.p(s[p],"morada")
k=A.n(q==null?"":q).split("-")
if(k.length>=2)l.E(0,k[0]+"-"+k[1])}s=A.dB(l,l.r,l.$ti.c),r=x.z,q=s.$ti.c
case 11:if(!s.n()){w=12
break}n=s.d
if(n==null)n=q.a(n)
w=13
return A.c(B.wc("ao apagar as linhas anteriores (zona "+n+")",new B.b4y(d,t,n),r),$async$Ys)
case 13:w=11
break
case 12:w=9
break
case 10:w=14
return A.c(B.wc("ao apagar as linhas anteriores",new B.b4z(d,t),x.z),$async$Ys)
case 14:case 9:u=B.cWr(d.e,t)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$Ys,v)},
dn1(d,e){var w,v=B.b4C(d.a)
if(v==null||!v.ay)return d.e
w=e==null?d.y:e
if(w==null)throw A.q(D.XD)
return B.cWr(d.e,w)},
dn8(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="), n\xe3o da tua loja ("
if(f==null)return o
w=B.b4C(d.a)
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
q=r.i("a7<y.E>")
p=A.dk(new A.a7(new A.dg(new A.a2(u,new B.b4H(t),A.V(u).i("a2<1,d?>")),r),new B.b4I(s),q),q.i("y.E"))
if(p.a===0)return o
return"Este ficheiro tem dados de outra loja ("+p.aW(0,", ")+n+s+")."},
cWr(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=d.length,v=x.N,u=x.z,t=0;t<d.length;d.length===w||(0,A.t)(d),++t){s=d[t]
r=A.yO(null,null,v,u)
r.u(0,s)
r.k(0,"num_loja",e)
q.push(r)}return q},
dn2(d,e){var w,v=e==null?null:e.db
if(v==null)return d
w=v.$1(d)
if(J.bd(w))throw A.q(D.b_M)
return w},
dn4(d,e){var w,v,u,t,s,r,q,p,o,n,m=$.dec().hO(e)
if(m==null)return d
w=m.b[1]
w.toString
v=A.e4(w,null)
if(v<1||v>53)return d
u=A.aa(A.H(new A.E(Date.now(),0,!1)),1,4,0,0,0,0,0)
t=u.au(0-A.c7(A.cK(u)-1,0,0,0,0,0).a).au(A.c7((v-1)*7,0,0,0,0,0).a)
s=A.aa(A.H(t),A.K(t),A.a1(t),0,0,0,0,0).dV()
w=A.a([],x.t)
for(r=J.W(d),q=x.N,p=x.z;r.n();){o=r.gv(r)
n=A.yO(null,null,q,p)
n.u(0,o)
n.k(0,"importado_em",s)
w.push(n)}return w},
yF(d,e,f,g,h){return B.dn5(d,e,f,g,h)},
dn5(b6,b7,b8,b9,c0){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$yF=A.h(function(c1,c2){if(c1===1){s.push(c2)
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
return A.c(r.rZ(),$async$yF)
case 10:q=c2
w=11
return A.c(A.dJ(D.aLX,null,e),$async$yF)
case 11:w=12
return A.c(A.aQ_(B.dD2(),q,null,d,a0),$async$yF)
case 12:p=c2
a2=J.W(p)
case 13:if(!a2.n()){w=14
break}o=a2.gv(a2)
n=J.at(p)>1?r.b+" ("+o.b+")":r.b
t=16
m=B.dn8(o,b7,b8)
if(m!=null){J.ax(b3,A.n(n)+": "+m)
w=13
break}l=B.b4C(o.a)
k=b8
a3=l
if(a3==null)a3=null
else a3=a3.z==null&&!a3.as
w=a3===!0&&f?19:20
break
case 19:w=21
return A.c(c0.$2(o,n),$async$yF)
case 21:k=c2
if(k==null){J.ax(b3,A.n(n)+": sem loja escolhida \u2014 ignorado.")
w=13
break}case 20:a3=l
if(a3==null)a3=null
else a3=a3.z==null&&!a3.as
w=a3===!0&&k!=null?22:24
break
case 22:a4=B.cWr(o.e,k)
w=23
break
case 24:a3=l
w=(a3==null?null:a3.ay)===!0?25:27
break
case 25:c2=B.dn1(o,b8)
w=26
break
case 27:w=28
return A.c(B.Ys(o,b8),$async$yF)
case 28:case 26:a4=c2
case 23:j=a4
a3=l
if((a3==null?null:a3.cy)===!0)j=B.dn4(j,r.b)
j=B.dn2(j,l)
a3=j
a5=o.c
w=29
return A.c(B.b4D(a3,o.d,a5),$async$yF)
case 29:a5=r.b
a3=k
if(a3==null)a3=o.y
w=30
return A.c(B.C5(o,a5,a3),$async$yF)
case 30:i=c2;++b0
a3=A.n(n)
a5=o.b
a6=J.at(j)
a7=B.dDW(o)
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
u=new B.amR(b2,b3)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$yF,v)},
cO0(d){return B.dzu(d)},
dzu(d){var w=0,v=A.l(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$cO0=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=E.dae(d)
if(m.gR_().a===0)throw A.q(D.b_N)
r=A.a([],x.i)
o=m.gR_(),o=new A.bM(o,o.r,o.e,A.w(o).i("bM<2>"))
case 3:if(!o.n()){w=4
break}q=o.d.gaFA(0)
p=B.dxs(q)
if(p==null){w=3
break}t=6
k=J
j=r
w=9
return A.c(B.cO1(q,p),$async$cO0)
case 9:k.ax(j,f)
t=2
w=8
break
case 6:t=5
l=s.pop()
if(!(A.Q(l) instanceof E.oM))throw l
w=8
break
case 5:w=2
break
case 8:w=3
break
case 4:if(J.at(r)===0)throw A.q(D.b_J)
u=r
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$cO0,v)},
cO1(c4,c5){var w=0,v=A.l(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cO1=A.h(function(c6,c7){if(c6===1)return A.i(c7,v)
for(;;)switch(w){case 0:c2=c5.d
c3=c2+1
if(c4.length<=c3)throw A.q(D.b_K)
if(c5.y!=null){t=c4[1]
s=B.cZJ(B.L9(1<t.length?t[1]:null))
t=c4[1]
r=B.cZJ(B.L9(3<t.length?t[3]:null))}else{s=null
r=null}q=A.a([],x.s)
t=x.N
p=A.v(t,x.P)
o=A.a([],x.t)
n=x.z
m=A.v(t,n)
for(l=c5.ch,k=null,j=null,i=null,h=0;h<c2;++h){g=c4[h]
f=B.L9(0<g.length?g[0]:null)
if(typeof f!="string")continue
if(l)i=i==null?B.daa(f):i
if(A.kp(f,"storeName2",0)){e=$.d0O().hO(f)
if(e!=null){g=e.b
d=g[1]
d.toString
k=C.h.W(d)
g=g[2]
g.toString
j="ST"+g}}else if(A.kp(f,"magasin",0)){e=$.d0M().hO(f)
if(e!=null){g=e.b
d=g[1]
d.toString
j="ST"+C.h.D(d,3,"0")
g=g[2]
g.toString
k=C.h.W(g)}}else if(A.kp(f,"lojaFinal",0)){e=$.d0N().hO(f)
if(e!=null){g=e.b
d=g[1]
d.toString
j="ST"+C.h.D(d,3,"0")
g=g[2]
g.toString
k=C.h.W(g)}}}c2=c5.w,g=A.V(c2).i("a2<1,d>"),d=c2.length!==0,a0=c5.r,a1=a0!=null,a2=r!=null,a3=s!=null,a4=c5.x,a5=a4.length,a6=c5.e,a7=a6.length,a8=c5.CW,a9=a8!=null,b0=x.H,h=c3
case 3:if(!(h<c4.length)){w=5
break}w=C.f.a0(h-c3,500)===0?6:7
break
case 6:w=8
return A.c(A.dJ(C.ba,null,b0),$async$cO1)
case 8:case 7:b1=c4[h]
if(B.dzR(b1,a7)){w=4
break}if(a9)if(B.aPC(B.L9(0<b1.length?b1[0]:null))===a8){w=4
break}f=B.L9(0<b1.length?b1[0]:null)
b2=typeof f=="string"
if(b2&&l)i=i==null?B.daa(f):i
if(b2)b3=A.kp(f,"storeName2",0)
else b3=!1
if(b3){e=$.d0O().hO(f)
if(e!=null){b2=e.b
b3=b2[1]
b3.toString
k=C.h.W(b3)
b2=b2[2]
b2.toString
j="ST"+b2}w=4
break}if(b2)b3=A.kp(f,"magasin",0)
else b3=!1
if(b3){e=$.d0M().hO(f)
if(e!=null){b2=e.b
b3=b2[1]
b3.toString
j="ST"+C.h.D(b3,3,"0")
b2=b2[2]
b2.toString
k=C.h.W(b2)}w=4
break}if(b2)b3=A.kp(f,"lojaFinal",0)
else b3=!1
if(b3){e=$.d0N().hO(f)
if(e!=null){b2=e.b
b3=b2[1]
b3.toString
j="ST"+C.h.D(b3,3,"0")
b2=b2[2]
b2.toString
k=C.h.W(b2)}w=4
break}if(b2)b2=A.kp(f,"Filtros aplicados",0)
else b2=!1
if(b2){w=4
break}b4=A.v(t,n)
for(b5=0;b5<a7;++b5){b6=a6[b5]
b7=b6.a
if(b7==null)continue
b4.k(0,b7,B.dx9(B.L9(b5<b1.length?b1[b5]:null),b6.b))}for(b8=0;b8<a5;++b8){b7=a4[b8]
if(b4.h(0,b7)==null||J.r(b4.h(0,b7),""))b4.k(0,b7,m.h(0,b7))
else m.k(0,b7,b4.h(0,b7))}if(a3)b4.k(0,"periodo_inicio",s)
if(a2)b4.k(0,"periodo_fim",r)
if(C.e.bq(c2,new B.cO2(b4))){w=4
break}b9=!a1||a0.length===0
if(!d||b9){o.push(b4)
w=4
break}c0=new A.a2(c2,new B.cO3(b4),g).aW(0,"||")
if(p.ap(0,c0))q.push("Linha "+(h+1)+": registo repetido \u2014 fica a \xfaltima vers\xe3o.")
p.k(0,c0,b4)
case 4:++h
w=3
break
case 5:if(p.a===0)c1=o
else{c2=p.$ti.i("bb<2>")
c2=A.F(new A.bb(p,c2),c2.i("y.E"))
c2.$flags=1
c1=c2}if(c1.length===0)throw A.q(D.b_O)
u=new B.wA(c5.a,c5.b,c5.c,a0,c1,s,r,q,k,j,i)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$cO1,v)},
dDW(d){var w,v=d.z
if(v==null)return""
w=v.split("-")
return w.length===3?" \xb7 dia "+w[2]+"/"+w[1]+"/"+w[0]:""},
daa(d){var w,v,u,t,s,r,q,p=null,o=$.dgO().hO(d)
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
dxs(d){var w,v,u,t,s,r,q
for(w=x.s,v=0;v<28;++v){u=C.BB[v]
t=u.d
if(t>=d.length)continue
s=d[t]
t=A.a([],w)
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)t.push(B.dzj(B.L9(s[q])))
if(C.e.f9(u.f,new B.cLA(t)))return u}return null},
dzR(d,e){var w,v=d.length
if(e<v)v=e
for(w=0;w<v;++w)if(B.L9(d[w])!=null)return!1
return!0},
L9(d){var w,v=d==null?null:d.b
if(v==null)return null
if(v instanceof F.nU){w=v.a.j(0)
return C.h.W(w)==="#"?null:w}if(v instanceof F.nu)return v.a
if(v instanceof F.oC)return v.a
if(v instanceof F.qU)return v.a
if(v instanceof F.pB)return A.aa(v.a,v.b,v.c,0,0,0,0,0)
if(v instanceof F.pC)return A.aa(v.a,v.b,v.c,v.d,v.e,v.f,v.r,v.w)
if(v instanceof F.p3)return v.ayp()
if(v instanceof F.oI)return v.a
return v.j(0)},
dx9(d,e){var w,v,u,t=null
if(d==null)return t
switch(e.a){case 0:w=B.aPC(d)
return w==null||w.length===0?t:w
case 1:return B.cJJ(d)
case 2:v=B.cJJ(d)
return v==null?t:C.i.ac(v)
case 3:if(A.pk(d))return d
u=B.cJJ(d)
if(u!=null)return u!==0
if(typeof d=="string"){w=C.h.W(d).toLowerCase()
if(w==="sim"||w==="yes"||w==="true")return!0
if(w==="nao"||w==="n\xe3o"||w==="no"||w==="false")return!1
return w.length!==0}return t
case 4:return B.cZJ(d)
case 5:return B.dyq(d)
case 6:return B.dxw(d)
case 7:u=B.cJJ(d)
return u==null?t:u*100
case 8:return B.dAf(d)
case 9:return B.dzq(d)
case 10:return B.dzT(d)
case 11:return B.dzp(d)}},
dyq(d){var w,v,u
if(d instanceof A.c9)w=d
else w=d instanceof A.E?A.c7(0,A.cW(d),0,0,A.df(d),0):null
if(w==null)return null
v=w.a
u=C.f.aj(v,36e8)
v=C.f.aj(v,6e7)
return C.h.D(C.f.j(u%24),2,"0")+":"+C.h.D(C.f.j(v%60),2,"0")},
dxw(d){if(d instanceof A.c9)return C.f.aj(d.a,1000)/6e4
if(d instanceof A.E)return A.cW(d)*60+A.df(d)
return null},
aPC(d){if(d==null)return null
if(typeof d=="string")return C.h.W(d)
if(typeof d=="number"&&d===C.i.im(d))return C.f.j(C.i.C(d))
if(d instanceof A.E)return d.dV()
return C.h.W(J.dC(d))},
cJJ(d){var w,v
if(typeof d=="number")return d
if(typeof d=="string"){w=C.h.W(d)
v=A.ci(w,",",".")
if(v.length===0)return null
return A.cT9(v)}return null},
cZJ(d){var w
if(d==null)return null
if(d instanceof A.E)return B.daA(d)
if(typeof d=="string"){w=A.r5(C.h.W(d))
return w==null?null:B.daA(w)}return null},
daA(d){return""+A.H(d)+"-"+C.h.D(C.f.j(A.K(d)),2,"0")+"-"+C.h.D(C.f.j(A.a1(d)),2,"0")},
dAf(d){var w
if(d instanceof A.E)return d.dV()
if(typeof d=="string"){w=A.r5(C.h.W(d))
return w==null?null:w.dV()}return null},
dzT(d){var w=B.aPC(d)
if(w==null)return null
return C.h.W(C.h.lb(w,$.dgP(),""))},
dzq(d){var w,v,u=B.aPC(d)
if(u==null)return null
w=$.dgN().hO(u)
if(w==null)return null
v=w.b[1]
v.toString
return"ST"+C.h.D(v,3,"0")},
dzp(d){var w,v,u=B.aPC(d)
if(u==null)return null
w=$.dgM().hO(u)
if(w==null)return null
v=w.b[1]
v.toString
return"ST"+C.h.D(v,3,"0")},
dzj(d){var w,v,u,t=d==null?null:J.dC(d)
if(t==null)t=""
w=C.h.W(t.toLowerCase())
for(v=0;v<23;++v){t="\xe1\xe0\xe2\xe3\xe4\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf3\xf2\xf4\xf5\xf6\xfa\xf9\xfb\xfc\xe7"[v]
u="aaaaaeeeeiiiiooooouuuuc"[v]
w=A.ci(w,t,u)}return w},
b4E:function b4E(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
b4F:function b4F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4G:function b4G(d,e,f){this.a=d
this.b=e
this.c=f},
b4A:function b4A(d,e,f){this.a=d
this.b=e
this.c=f},
b4B:function b4B(d){this.a=d},
b4x:function b4x(d,e){this.a=d
this.b=e},
b4y:function b4y(d,e,f){this.a=d
this.b=e
this.c=f},
b4z:function b4z(d,e){this.a=d
this.b=e},
b4H:function b4H(d){this.a=d},
b4I:function b4I(d){this.a=d},
amR:function amR(d,e){this.b=d
this.c=e},
wA:function wA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cO2:function cO2(d){this.a=d},
cO3:function cO3(d){this.a=d},
cLA:function cLA(d){this.a=d},
cLz:function cLz(d){this.a=d},
d_4(){var w=0,v=A.l(x.E),u,t,s,r
var $async$d_4=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=b.G
r=s.document.createElement("input")
r.type="file"
r.multiple=!0
r.webkitdirectory=!0
s.document.body.appendChild(r)
s=new A.aX($.bo,x.g)
t=new A.c2(s,x.R)
new A.El(r,"change",!1,x.a).gO(0).cT(new B.cRt(r,t),x.H)
r.addEventListener("cancel",A.id(new B.cRu(r,t)))
r.click()
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$d_4,v)},
cRt:function cRt(d,e){this.a=d
this.b=e},
cRu:function cRu(d,e){this.a=d
this.b=e},
NI(d,e,f){return B.dmH(d,e,f)},
dmH(d,e,f){var w=0,v=A.l(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$NI=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:k=D.c3G.h(0,d)
if(k==null){w=1
break}w=3
return A.c(A.xS(k),$async$NI)
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
m=$.R().b
m===$&&A.b()
m=m.R("metricas_historico")
q=A.e7(r,o,n)
J.by(q,"data_referencia",e)
w=10
return A.c(m.dd(0,q),$async$NI)
case 10:w=1
break
t=2
w=9
break
case 7:t=6
j=s.pop()
if(!(A.Q(j) instanceof A.eT))throw j
w=9
break
case 6:w=2
break
case 9:case 5:q=$.R().b
q===$&&A.b()
w=11
return A.c(q.R("metricas_historico").dd(0,r),$async$NI)
case 11:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$NI,v)},
brV(d){var w=0,v=A.l(x.O),u,t,s,r,q,p
var $async$brV=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=$.R().b
q===$&&A.b()
t=x.z
p=x.j
w=3
return A.c(q.br("sscc_gerar_acertos",A.Y(["p_num_loja",d],x.N,t),t),$async$brV)
case 3:s=p.a(f)
q=J.I(s)
if(q.ga2(s)){u=D.ceq
w=1
break}r=x.P.a(q.gO(s))
q=J.I(r)
t=A.ap(q.h(r,"aplicados"))
t=t==null?null:C.i.C(t)
if(t==null)t=0
q=A.ap(q.h(r,"propostos"))
q=q==null?null:C.i.C(q)
u=new A.a9E(t,q==null?0:q)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$brV,v)}},D,E,G
J=c[1]
A=c[0]
C=c[2]
F=c[6]
B=a.updateHolder(c[3],B)
D=c[12]
E=c[9]
G=c[13]
B.C4.prototype={
a_(){return new B.a7N(C.nz)}}
B.a7N.prototype={
a4(){this.af()
this.KC()},
KC(){var w=0,v=A.l(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$KC=A.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n={}
w=7
return A.c(A.Pa(),$async$KC)
case 7:q=e
if(q==null){w=1
break}w=8
return A.c(A.rG(),$async$KC)
case 8:p=e
if(r.c==null){w=1
break}n.a=null
for(m=J.W(p);m.n();){o=m.gv(m)
if(o.b===q.r){n.a=o.a
break}}r.p(new B.c0I(n,r,q,p))
r.EF()
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
return A.k($async$KC,v)},
EF(){var w=0,v=A.l(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$EF=A.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:r.p(new B.c0F(r))
t=4
w=7
return A.c(A.aQ7(r.e),$async$EF)
case 7:q=e
if(r.c==null){w=1
break}r.p(new B.c0G(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=A.Q(n)
if(r.c==null){w=1
break}r.p(new B.c0H(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$EF,v)},
F8(){var w=0,v=A.l(x.H),u=this,t,s
var $async$F8=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.c(A.aD(null,null,!0,null,new B.c0R(),s,null,!0,x.N),$async$F8)
case 2:t=e
w=t==="ficheiros"?3:5
break
case 3:w=6
return A.c(u.Mf(),$async$F8)
case 6:w=4
break
case 5:w=t==="pasta"?7:8
break
case 7:w=9
return A.c(u.Me(),$async$F8)
case 9:case 8:case 4:return A.j(null,v)}})
return A.k($async$F8,v)},
Mf(){var w=0,v=A.l(x.H),u,t=this,s,r
var $async$Mf=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=A.a([C.iN],x.D)
w=3
return A.c($.d_V().Dd(s,null,null),$async$Mf)
case 3:r=e
if(J.bd(r)){w=1
break}w=4
return A.c(t.Md(r),$async$Mf)
case 4:case 1:return A.j(u,v)}})
return A.k($async$Mf,v)},
Me(){var w=0,v=A.l(x.H),u,t=this,s
var $async$Me=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(B.d_4(),$async$Me)
case 3:s=e
if(J.bd(s)){w=1
break}w=4
return A.c(t.Md(s),$async$Me)
case 4:case 1:return A.j(u,v)}})
return A.k($async$Me,v)},
Md(d){return this.bbb(d)},
bbb(d){var w=0,v=A.l(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Md=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:r.p(new B.c0T(r))
t=4
o=r.e
n=r.f
m=r.d?r.gb2g():null
w=7
return A.c(B.yF(d,n,o,new B.c0U(r),m),$async$Md)
case 7:q=f
if(r.c==null){w=1
break}r.p(new B.c0V(r,q))
if(q.b.length!==0)r.EF()
t=2
w=6
break
case 4:t=3
k=s.pop()
p=A.Q(k)
if(r.c==null){w=1
break}r.p(new B.c0W(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$Md,v)},
b2h(d,e){var w,v=null,u={}
u.a=null
w=this.c
w.toString
return A.aD(v,v,!1,v,new B.c0O(u,this,e),w,v,!0,x.N)},
G(d){var w=this,v=null,u=A.B(d),t=u.ok,s=A.f("Importar v\xe1rios ficheiros",v,v,v,v,t.w,v,v,v),r=w.ay,q=w.ch,p=w.w,o=p?v:w.gb2l(),n=p?C.jF:D.aWH,m=x.p
o=A.a([s,C.N,new B.a5D(r,q,w.gaW5(),v),C.N,A.jG(n,A.f(p?"A importar\u2026":"Escolher ficheiros ou pasta",v,v,v,v,v,v,v,v),o,v)],m)
if(w.w&&w.x.length!==0){t=t.Q
s=A.a([C.U,A.f(w.x,v,v,v,v,t,v,v,v)],m)
if(t==null)t=v
else{r=u.ax
q=r.rx
t=t.a3(q==null?r.k3:q)}s.push(new A.D(C.hr,A.f("Ficheiros grandes (dezenas de milhares de linhas) s\xe3o lidos no pr\xf3prio browser e podem deixar o separador sem resposta durante um ou dois minutos. Se aparecer \xabEsta p\xe1gina n\xe3o est\xe1 a responder\xbb, escolhe \xabEsperar\xbb. Na app Windows/Android n\xe3o acontece.",v,v,v,v,t,v,v,v),v))
C.e.u(o,s)}if(!w.w&&w.y!=null){t=w.y
t.toString
s=w.z
s.toString
C.e.u(o,A.a([C.N,new B.aAP(t,s,v)],m))}return A.bF(new A.dM(G.Sg,A.cr(A.J(A.a([A.J(o,C.ak,C.n,C.q,0,C.u)],m),C.ak,C.n,C.I,0,C.u),v,C.F,C.ch,v,v,C.aq),v),v,v)}}
B.a5D.prototype={
a_(){return new B.aAO()}}
B.aAO.prototype={
G(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.B(d),i=l.a,h=i.c,g=h==null,f=g?k:h.a,e=i.d
i=f==null
if(i)w=D.bW8
else{v=A.a([],x.n)
for(u=0;u<28;++u){t=C.BB[u]
if(f.ap(0,t.a))v.push(t)}w=v}s=l.d?C.BB:w
v=j.ax
r=v.RG
if(r==null)r=v.k2
q=A.aO(12)
p=g?"J\xe1 importado hoje":"Uploads hoje: "+h.gqV(0)+" ("+w.length+" de 28 formatos)"
o=j.ok
n=o.z
m=x.p
n=A.a([A.a_(A.f(p,k,k,k,k,n==null?k:n.bZ(C.bC),k,k,k),1)],m)
if(g&&e==null)n.push(C.Pf)
g=A.a([A.P(n,C.t,C.n,C.q,0,k,k),C.U],m)
if(e!=null){i=v.fy
v=A.aL(C.B,i,k,16)
o=o.Q
i=o==null?k:o.a3(i)
g.push(new A.D(C.hq,A.P(A.a([v,C.ac,A.a_(A.f("N\xe3o foi poss\xedvel carregar: "+e,k,k,k,k,i,k,k,k),1),A.az(!1,G.apc,k,k,!0,k,k,l.a.e,k,k)],m),C.A,C.n,C.q,0,k,k),k))}else{p=A.a([],m)
if(!i&&s.length===0){o=o.Q
if(o==null)v=k
else{n=v.rx
v=o.a3(n==null?v.k3:n)}p.push(new A.D(C.ep,A.f("Ainda nada importado hoje.",k,k,k,k,v,k,k,k),k))}for(v=s.length,u=0;u<s.length;s.length===v||(0,A.t)(s),++u){t=s[u]
o=i?k:f.h(0,t.a)
p.push(l.bba(j,t.b,o))}i=l.d
v=A.aL(i?C.no:D.aUS,k,k,18)
p.push(new A.dd(C.bj,k,k,A.h8(v,A.f(i?"Mostrar s\xf3 os importados hoje":"Mostrar todos os formatos (28)",k,k,k,k,k,k,k,k),new B.bEW(l),k),k))
C.e.u(g,p)}return A.aS(k,A.J(g,C.A,C.n,C.q,0,C.u),C.D,k,k,new A.b2(r,k,k,q,k,k,C.al),k,k,k,k,C.cz,k,k,k)},
bba(d,e,f){var w,v,u,t,s,r,q=null,p=f!=null&&J.cT(f),o=d.ax
if(p)w=o.b
else{v=o.rx
w=v==null?o.k3:v}o=p?C.hT:G.Wn
o=A.aL(o,p?w:w.aV(0.5),q,16)
v=d.ok.Q
u=v==null
if(u)t=q
else t=v.a3(p?q:w)
t=A.a([o,C.ac,A.a_(A.f(e,q,q,q,q,t,q,q,q),1)],x.p)
if(p){o=A.a([],x.s)
for(s=J.W(f);s.n();){r=s.gv(s)
o.push(C.h.D(C.f.j(A.cW(r)),2,"0")+":"+C.h.D(C.f.j(A.df(r)),2,"0"))}o=C.e.aW(o," \xb7 ")
t.push(A.f(o,q,q,q,q,u?q:v.a3(w),C.mc,q,q))}return new A.D(C.im,A.P(t,C.t,C.n,C.q,0,q,q),q)}}
B.aAP.prototype={
G(d){var w,v,u,t,s,r,q,p,o=null,n=A.B(d),m=this.c,l=m.length,k=this.d,j=k.length,i=n.ax,h=i.RG
if(h==null)h=i.k2
w=A.aO(12)
v=j===0?"":", "+j+" com erro"
u=n.ok
t=u.z
t=t==null?o:t.bZ(C.bC)
s=x.p
t=A.a([A.f(""+l+" de "+(l+j)+" importado(s) com sucesso"+v+".",o,o,o,o,t,o,o,o),C.U],s)
for(l=m.length,j=i.b,u=u.Q,r=0;r<m.length;m.length===l||(0,A.t)(m),++r){q=m[r]
t.push(new A.D(C.im,A.P(A.a([A.aL(C.hT,j,o,18),C.ac,new A.bW(1,C.au,A.f(q,o,o,o,o,u,o,o,o),o)],s),C.A,C.n,C.q,0,o,o),o))}for(m=k.length,i=i.fy,r=0;r<k.length;k.length===m||(0,A.t)(k),++r){p=k[r]
t.push(new A.D(C.im,A.P(A.a([A.aL(C.VX,i,o,18),C.ac,new A.bW(1,C.au,A.f(p,o,o,o,o,u,o,o,o),o)],s),C.A,C.n,C.q,0,o,o),o))}return A.aS(o,A.J(t,C.A,C.n,C.q,0,C.u),C.D,o,o,new A.b2(h,o,o,w,o,o,C.al),o,o,o,o,C.cz,o,o,o)}}
B.amR.prototype={}
B.wA.prototype={}
var z=a.updateTypes(["ak<~>()","ak<d?>(wA,d)","ak<z<wA>>(eO)"])
B.c0I.prototype={
$0(){var w=this,v=w.b,u=w.c
v.d=A.a3(u.e)===C.w
v.e=u.r
v.r=w.d
v.f=w.a.a},
$S:0}
B.c0F.prototype={
$0(){return this.a.ch=null},
$S:0}
B.c0G.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.c0H.prototype={
$0(){return this.a.ch=A.n(this.b)},
$S:0}
B.c0R.prototype={
$1(d){return A.Q7(A.a([A.bqO(D.ctt,new B.c0P(d)),A.bqO(D.ctZ,new B.c0Q(d))],x.p),D.ctf)},
$S:128}
B.c0P.prototype={
$0(){return A.S(this.a,!1).U("ficheiros")},
$S:0}
B.c0Q.prototype={
$0(){return A.S(this.a,!1).U("pasta")},
$S:0}
B.c0T.prototype={
$0(){var w=this.a
w.w=!0
w.x=""
w.z=w.y=null},
$S:0}
B.c0U.prototype={
$3(d,e,f){var w=this.a
if(w.c==null)return
w.p(new B.c0S(w,f,d,e))},
$S:1613}
B.c0S.prototype={
$0(){var w=this,v=w.b
v=v.length===0?"Conclu\xeddo.":'A importar "'+v+'" ('+w.c+"/"+w.d+")\u2026"
w.a.x=v},
$S:0}
B.c0V.prototype={
$0(){var w,v=this.a
v.w=!1
w=this.b
v.y=w.b
v.z=w.c},
$S:0}
B.c0W.prototype={
$0(){var w=this.a
w.w=!1
w.y=C.C
w.z=A.a(["Erro ao importar: "+A.n(this.b)],x.s)},
$S:0}
B.c0O.prototype={
$1(d){return new A.dv(new B.c0N(this.a,this.b,this.c),null)},
$S:11}
B.c0N.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=A.B(d).ok.Q
if(o==null)o=p
else{w=A.B(d).ax
v=w.rx
o=o.a3(v==null?w.k3:v)}o=A.f(this.c,p,p,p,p,o,p,p,p)
w=this.a
v=w.a
u=A.a([],x.I)
for(t=J.W(this.b.r),s=x.r;t.n();){r=t.gv(t)
q=r.b
u.push(new A.bl(q,A.f(q+" \u2014 "+r.a,p,p,p,p,p,p,p,p),C.ap,p,s))}t=x.p
u=A.J(A.a([o,C.N,new A.T(p,44,new A.cg(v,p,u,new B.c0K(w,e),C.xM,p,!0,p,x.B),p)],t),C.A,C.n,C.I,0,C.u)
v=A.az(!1,D.cwF,p,p,!0,p,p,new B.c0L(d),p,p)
return A.aN(A.a([v,A.b7(C.vc,w.a==null?p:new B.c0M(w,d),p)],t),p,p,u,p,p,p,D.csF)},
$S:13}
B.c0K.prototype={
$1(d){return this.b.$1(new B.c0J(this.a,d))},
$S:7}
B.c0J.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.c0L.prototype={
$0(){return A.S(this.a,!1).bc()},
$S:0}
B.c0M.prototype={
$0(){return A.S(this.b,!1).U(this.a.a)},
$S:0}
B.bEW.prototype={
$0(){var w=this.a
return w.p(new B.bEV(w))},
$S:0}
B.bEV.prototype={
$0(){var w=this.a
return w.d=!w.d},
$S:0}
B.aYR.prototype={
$2(d,e){var w=A.ap(J.p(d,e))
return w==null?null:w},
$S:1614}
B.b4E.prototype={
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
return A.c(B.wc(h,new B.b4F(r,q,i,o),p),$async$$0)
case 8:w=6
break
case 7:w=9
return A.c(B.wc(h,new B.b4G(r,q,i),p),$async$$0)
case 9:case 6:s.b=s.b+i.length
w=3
break
case 4:case 1:return A.j(u,v)}})
return A.k($async$$0,v)},
$S:1}
B.b4F.prototype={
$0(){var w=this
return w.a.R(w.b).qX(w.c,w.d)},
$S:162}
B.b4G.prototype={
$0(){return this.a.R(this.b).dd(0,this.c)},
$S:162}
B.b4A.prototype={
$0(){return B.NI(this.a,this.c.z,this.b)},
$S:1}
B.b4B.prototype={
$0(){return B.NI("edificios",null,this.a)},
$S:1}
B.b4x.prototype={
$0(){var w=$.R().b
w===$&&A.b()
return w.R(this.a.c).dz(0).V("num_loja",this.b)},
$S:162}
B.b4y.prototype={
$0(){var w=$.R().b
w===$&&A.b()
w=w.R(this.a.c).dz(0).V("num_loja",this.b)
return A.d4(w.c4(w.c5("morada","like."+(this.c+"-%"))),w.$ti.c)},
$S:162}
B.b4z.prototype={
$0(){var w=$.R().b
w===$&&A.b()
return w.R(this.a.c).dz(0).V("num_loja",this.b)},
$S:162}
B.b4H.prototype={
$1(d){return A.a4(J.p(d,this.a))},
$S:516}
B.b4I.prototype={
$1(d){return d!==this.a},
$S:12}
B.cO2.prototype={
$1(d){var w=this.a.h(0,d)
return J.dC(w==null?"":w).length===0},
$S:12}
B.cO3.prototype={
$1(d){var w=this.a.h(0,d)
return A.n(w==null?"":w)},
$S:21}
B.cLA.prototype={
$1(d){return C.e.bq(this.a,new B.cLz(d))},
$S:12}
B.cLz.prototype={
$1(d){return C.h.l(d,this.a)},
$S:12}
B.cRt.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=p.files,n=A.a([],x.S)
if(o!=null)for(w=b.G,v=0;v<o.length;++v){u=o.item(v)
if(u==null)continue
if(!C.h.iy(u.name.toLowerCase(),".xlsx"))continue
t=w.URL.createObjectURL(u)
s=u.name
r=u.type
q=u.size
n.push(A.x9(t,new A.E(A.mI(u.lastModified,0,!1),0,!1),q,r,s))}p.remove()
p=this.b
if((p.a.a&30)===0)p.eL(0,n)},
$S:40}
B.cRu.prototype={
$1(d){var w
this.a.remove()
w=this.b
if((w.a.a&30)===0)w.eL(0,D.bW9)},
$S:40};(function installTearOffs(){var w=a._instance_0u,v=a._instance_2u,u=a._static_1
var t
w(t=B.a7N.prototype,"gaW5","EF",0)
w(t,"gb2l","F8",0)
v(t,"gb2g","b2h",1)
u(B,"dD2","cO0",2)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.ac,[B.C4,B.a5D])
w(A.ad,[B.a7N,B.aAO])
w(A.tH,[B.c0I,B.c0F,B.c0G,B.c0H,B.c0P,B.c0Q,B.c0T,B.c0S,B.c0V,B.c0W,B.c0J,B.c0L,B.c0M,B.bEW,B.bEV,B.b4E,B.b4F,B.b4G,B.b4A,B.b4B,B.b4x,B.b4y,B.b4z])
w(A.nh,[B.c0R,B.c0U,B.c0O,B.c0K,B.b4H,B.b4I,B.cO2,B.cO3,B.cLA,B.cLz,B.cRt,B.cRu])
w(A.vI,[B.c0N,B.aYR])
v(B.aAP,A.aA)
w(A.ab,[B.amR,B.wA])})()
A.EJ(b.typeUniverse,JSON.parse('{"a5D":{"ac":[],"o":[]},"C4":{"ac":[],"o":[]},"a7N":{"ad":["C4"]},"aAO":{"ad":["a5D"]},"aAP":{"aA":[],"o":[]}}'))
var y={c:'N\xe3o foi poss\xedvel identificar a loja deste ficheiro (rodap\xe9 "Filtros aplicados" em falta) \u2014 exporta-o de novo.'}
var x=(function rtii(){var w=A.aq
return{r:w("bl<d>"),x:w("ak<~>"),C:w("amR"),I:w("x<bl<d>>"),n:w("x<hc>"),G:w("x<z<a5<d,@>>>"),t:w("x<a5<d,@>>"),i:w("x<wA>"),s:w("x<d>"),p:w("x<o>"),S:w("x<jO>"),D:w("x<A8>"),F:w("z<a5<d,@>>"),e:w("z<wA>"),E:w("z<jO>"),j:w("z<@>"),P:w("a5<d,@>"),K:w("ab"),m:w("wA"),O:w("+aplicados,propostos(e,e)"),B:w("cg<d>"),N:w("d"),J:w("eO"),y:w("dg<d>"),R:w("c2<z<jO>>"),a:w("El<aR>"),g:w("aX<z<jO>>"),z:w("@"),X:w("ab?"),T:w("d?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Uo=new A.c9(3e6)
D.aLX=new A.c9(8e4)
D.aUS=new A.am(58244,"MaterialIcons",!0)
D.aWH=new A.aW(C.Wc,null,null,null,null)
D.b_I=new E.oM("N\xe3o foi poss\xedvel identificar a loja deste ficheiro \u2014 exporta-o de novo.")
D.b_J=new E.oM("Formato n\xe3o reconhecido. Este ficheiro n\xe3o corresponde a nenhum formato conhecido. Verifica se \xe9 o ficheiro certo.")
D.b_K=new E.oM("O ficheiro n\xe3o tem linhas de dados.")
D.b_M=new E.oM("O ficheiro n\xe3o tem linhas reconhec\xedveis para este formato \u2014 exporta-o de novo.")
D.b_N=new E.oM("O ficheiro n\xe3o tem folhas de c\xe1lculo.")
D.b_O=new E.oM("N\xe3o foram encontradas linhas de dados v\xe1lidas.")
D.XD=new E.oM(y.c)
D.bG3=w(["av","za","rl","pc","ext","eml"],x.s)
D.bW8=w([],x.n)
D.bW9=w([],x.S)
D.c7n={relex:0,opcom:1,reserva:2,promessa:3,valorizacoes:4,preparar:5,localizacao_oc:6,edificios:7}
D.c3G=new A.al(D.c7n,["vw_param_resumo","vw_opcom_resumo","vw_reserva_resumo","vw_promessa_resumo","vw_valorizacoes_resumo","vw_preparar_resumo","vw_localizacao_oc_resumo","vw_edificio_resumo"],A.aq("al<d,d>"))
D.ceq=new A.a9E(0,0)
D.csF=new A.L("De que loja \xe9 este ficheiro?",null,null,null,null,null,null,null,null,null,null)
D.ctf=new A.L("Importar v\xe1rios ficheiros",null,null,null,null,null,null,null,null,null,null)
D.ctt=new A.L("Ficheiros individuais",null,null,null,null,null,null,null,null,null,null)
D.ctZ=new A.L("Pasta inteira",null,null,null,null,null,null,null,null,null,null)
D.cwF=new A.L("Ignorar ficheiro",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dHF","dec",()=>A.cb("sem(\\d{1,2})",!1,!1,!1))
w($,"dMB","d0O",()=>A.cb("storeName2\\s+\xe9\\s+(.+?)\\s*\\((\\d+)\\)",!0,!1,!1))
w($,"dMz","d0M",()=>A.cb("magasin\\s+\xe9\\s+(\\d+)\\s*-\\s*(.+)",!0,!1,!1))
w($,"dMA","d0N",()=>A.cb("lojaFinal\\s+\xe9\\s+(\\d+)\\s*-\\s*(.+?)(?:\\n|$)",!0,!1,!1))
w($,"dMy","dgO",()=>A.cb("Date\\s+\xe9\\s+em\\s+ou\\s+posterior\\s+a\\s+(\\d{2})-(\\d{2})-(\\d{4})(?:\\s+e\\s+\xe9\\s+anterior\\s+a\\s+(\\d{2})-(\\d{2})-(\\d{4}))?",!0,!1,!1))
w($,"dMC","dgP",()=>A.cb("\\s*-\\s*$",!0,!1,!1))
w($,"dMx","dgN",()=>A.cb("\\((\\d+)\\)\\s*$",!0,!1,!1))
w($,"dMw","dgM",()=>A.cb("^(\\d+)\\s*-",!0,!1,!1))})()};
(a=>{a["EqWnRpavzDqTxOvJycgABEc/aik="]=a.current})($__dart_deferred_initializers__);