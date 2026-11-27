((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,B={
dp_(){return new B.Ca(null)},
Ca:function Ca(d){this.a=d},
a86:function a86(d){var _=this
_.d=!1
_.f=_.e=null
_.r=d
_.w=!1
_.x=""
_.c=_.a=_.ch=_.ay=_.z=_.y=null},
c2K:function c2K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c2H:function c2H(d){this.a=d},
c2I:function c2I(d,e){this.a=d
this.b=e},
c2J:function c2J(d,e){this.a=d
this.b=e},
c2T:function c2T(){},
c2R:function c2R(d){this.a=d},
c2S:function c2S(d){this.a=d},
c2V:function c2V(d){this.a=d},
c2W:function c2W(d){this.a=d},
c2U:function c2U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c2X:function c2X(d,e){this.a=d
this.b=e},
c2Y:function c2Y(d,e){this.a=d
this.b=e},
c2Q:function c2Q(d,e,f){this.a=d
this.b=e
this.c=f},
c2P:function c2P(d,e,f){this.a=d
this.b=e
this.c=f},
c2M:function c2M(d,e){this.a=d
this.b=e},
c2L:function c2L(d,e){this.a=d
this.b=e},
c2N:function c2N(d){this.a=d},
c2O:function c2O(d,e){this.a=d
this.b=e},
a5X:function a5X(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aB8:function aB8(){this.d=!1
this.c=this.a=null},
bGQ:function bGQ(d){this.a=d},
bGP:function bGP(d){this.a=d},
aB9:function aB9(d,e,f){this.c=d
this.d=e
this.a=f},
Xa(d){var w=0,v=A.l(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Xa=A.h(function(a0,a1){if(a0===1)return A.i(a1,v)
for(;;)switch(w){case 0:if(d==null){w=1
break}w=3
return A.c(A.xV("vw_edificio_resumo"),$async$Xa)
case 3:t=a1
w=4
return A.c(A.xV("vw_edificio_top_av_za_pc"),$async$Xa)
case 4:s=a1
r=new B.aZi()
q=new A.E(Date.now(),0,!1)
p=C.h.D(C.f.j(A.H(q)),4,"0")+"-"+C.h.D(C.f.j(A.K(q)),2,"0")+"-"+C.h.D(C.f.j(A.a1(q)),2,"0")
o=A.a([],x.t)
for(q=x.N,n=x.z,m=J.I(t),l=0;l<6;++l){k=D.bGe[l]
j=k==="rl"?t:s
i=r.$2(j,k+"_pct_top0")
h=r.$2(j,k+"_pct_top1")
g=r.$2(j,k+"_pct_top2")
f=r.$2(j,k+"_pct_top0_ou_top2")
if(i==null&&h==null&&g==null)continue
e=A.ao(m.h(t,"n_"+k))
e=e==null?null:C.i.C(e)
o.push(A.Y(["num_loja",d,"data",p,"corredor",k.toUpperCase(),"n_linhas",e,"pct_top0",i,"pct_top1",h,"pct_top2",g,"pct_top0_ou_top2",f,"capturado_em",new A.E(Date.now(),0,!1).n2().dJ()],q,n))}if(o.length===0){w=1
break}q=$.T().b
q===$&&A.b()
w=5
return A.c(q.R("edificio_top_diario").qW(o,"num_loja,data,corredor"),$async$Xa)
case 5:case 1:return A.j(u,v)}})
return A.k($async$Xa,v)},
aZj(d){var w=0,v=A.l(x.H),u,t,s
var $async$aZj=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:if(d==null){w=1
break}t=$.T().b
t===$&&A.b()
s=x.z
w=3
return A.c(t.bj("edificio_top_seccao_gravar",A.Y(["p_num_loja",d],x.N,s),s),$async$aZj)
case 3:case 1:return A.j(u,v)}})
return A.k($async$aZj,v)},
aZi:function aZi(){},
wg(d,e,f){var w=D.Us,v=3
return B.dp3(d,e,f,f)},
dp3(d,e,f,g){var w=0,v=A.l(g),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$wg=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=D.Us
k=3
r=1,o=x.H
case 3:t=7
w=10
return A.c(e.$0(),$async$wg)
case 10:n=i
u=n
w=1
break
t=2
w=9
break
case 7:t=6
j=s.pop()
n=A.P(j)
w=n instanceof A.dX?11:13
break
case 11:q=n
p=q.b==="57014"
if(!p)throw j
if(r>=k)throw A.q(new E.oM("O servidor demorou demasiado "+d+" (tempo esgotado, "+A.n(r)+" tentativas). Tenta outra vez daqui a pouco."))
n=r
w=14
return A.c(A.dG(new A.c9(C.i.ac(l.a*n)),null,o),$async$wg)
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
return A.k($async$wg,v)},
b56(d,e,f){return B.dp7(d,e,f)},
dp7(d,e,f){var w=0,v=A.l(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b56=A.h(function(g,h){if(g===1)return A.i(h,v)
for(;;)switch(w){case 0:k={}
j=$.T().b
j===$&&A.b()
t=J.I(d)
s=t.gt(d)
r=A.a([],x.G)
for(q=0;q<s;q=p){p=q+500
r.push(t.dF(d,q,p<s?p:s))}o=r.length
if(o===0){w=1
break}n=k.a=k.b=0
m=new B.b57(k,r,e,j,f,null,s)
if(4<o)o=4
l=J.hb(o,x.x)
for(;n<o;++n)l[n]=m.$0()
w=3
return A.c(A.eS(l,x.H),$async$b56)
case 3:case 1:return A.j(u,v)}})
return A.k($async$b56,v)},
Cb(d,e,f){return B.dp6(d,e,f)},
dp6(d,e,f){var w=0,v=A.l(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cb=A.h(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:l=$.T()
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
return A.c(k.d8(0,A.Y(["profile_id",p,"tabela",d.c,"ficheiro_nome",e,"ficheiro_tamanho",null,"ficheiro_modificado_em",null,"linhas",o,"periodo_inicio",d.f,"periodo_fim",d.r,"avisos",n,"importado_por",l,"num_loja",f],x.N,x.X)),$async$Cb)
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
l=C.h.bT(p,"opcom_")?"opcom":"relex"
break A}r=l
if(r==null){u=null
w=1
break}q=null
t=5
w=8
return A.c(B.wg("ao registar o resumo do hist\xf3rico",new B.b53(r,f,d),x.H),$async$Cb)
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
return A.c(B.wg("ao registar o resumo dos edif\xedcios",new B.b54(f),x.H),$async$Cb)
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
return A.c(B.Xa(f),$async$Cb)
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
return A.c(B.aZj(f),$async$Cb)
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
return A.c(B.b5_(f),$async$Cb)
case 26:l=a1
u=l==null?q:l
w=1
break
case 10:u=q
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$Cb,v)},
b5_(d){return B.dp0(d)},
dp0(d){var w=0,v=A.l(x.T),u,t=2,s=[],r,q,p,o,n
var $async$b5_=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(B.bsm(d),$async$b5_)
case 7:r=f
if(r.a===0&&r.b===0){u=null
w=1
break}q=A.a([],x.s)
if(r.a>0)J.ax(q,""+r.a+" atualizado(s) sozinho(s)")
if(r.b>0)J.ax(q,""+r.b+" para validar")
p=q
q=J.xQ(p,", ")
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
return A.k($async$b5_,v)},
b55(d){var w,v
for(w=0;w<28;++w){v=C.D6[w]
if(v.a===d)return v}return null},
YF(d,e){var w=0,v=A.l(x.F),u,t,s,r,q,p,o,n,m,l,k,j
var $async$YF=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:j=B.b55(d.a)
if(j==null||!j.ax){u=d.e
w=1
break}t=e==null?d.y:e
s=t==null
w=s&&j.Q==="num_loja"&&j.as?3:4
break
case 3:s=A.aC(x.N)
for(r=d.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
n=J.I(o)
m=n.h(o,"num_loja")
if(A.n(m==null?"":m).length!==0)s.E(0,A.n(n.h(o,"num_loja")))}if(s.a===0)throw A.q(D.b_Q)
s=A.dw(s,s.r,s.$ti.c),q=x.z,n=s.$ti.c
case 5:if(!s.n()){w=6
break}m=s.d
w=7
return A.c(B.wg("ao apagar as linhas anteriores",new B.b50(d,m==null?n.a(m):m),q),$async$YF)
case 7:w=5
break
case 6:u=r
w=1
break
case 4:if(s)throw A.q(D.XH)
w=j.ay?8:10
break
case 8:l=A.aC(x.N)
for(s=d.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){q=J.p(s[p],"morada")
k=A.n(q==null?"":q).split("-")
if(k.length>=2)l.E(0,k[0]+"-"+k[1])}s=A.dw(l,l.r,l.$ti.c),r=x.z,q=s.$ti.c
case 11:if(!s.n()){w=12
break}n=s.d
if(n==null)n=q.a(n)
w=13
return A.c(B.wg("ao apagar as linhas anteriores (zona "+n+")",new B.b51(d,t,n),r),$async$YF)
case 13:w=11
break
case 12:w=9
break
case 10:w=14
return A.c(B.wg("ao apagar as linhas anteriores",new B.b52(d,t),x.z),$async$YF)
case 14:case 9:u=B.cYj(d.e,t)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$YF,v)},
dp1(d,e){var w,v=B.b55(d.a)
if(v==null||!v.ch)return d.e
w=e==null?d.y:e
if(w==null)throw A.q(D.XH)
return B.cYj(d.e,w)},
dp8(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="), n\xe3o da tua loja ("
if(f==null)return o
w=B.b55(d.a)
if(w==null)return o
if(w.at){v=d.y
if(v==null)return y.c
if(v!==f){u=d.x
return"Este ficheiro \xe9 da loja "+(u==null?v:u)+" ("+v+n+f+")."}return o}t=w.Q
if(t==null)return o
s=w.as?f:e
if(s==null)return"N\xe3o foi poss\xedvel confirmar a tua loja \u2014 tenta mais tarde."
u=d.e
r=x.y
q=r.i("a7<z.E>")
p=A.dj(new A.a7(new A.dc(new A.a2(u,new B.b5a(t),A.V(u).i("a2<1,d?>")),r),new B.b5b(s),q),q.i("z.E"))
if(p.a===0)return o
return"Este ficheiro tem dados de outra loja ("+p.aS(0,", ")+n+s+")."},
cYj(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=d.length,v=x.N,u=x.z,t=0;t<d.length;d.length===w||(0,A.r)(d),++t){s=d[t]
r=A.yP(null,null,v,u)
r.v(0,s)
r.k(0,"num_loja",e)
q.push(r)}return q},
dp2(d,e){var w,v=e==null?null:e.dx
if(v==null)return d
w=v.$1(d)
if(J.bb(w))throw A.q(D.b_U)
return w},
dp4(d,e){var w,v,u,t,s,r,q,p,o,n,m=$.dg9().hN(e)
if(m==null)return d
w=m.b[1]
w.toString
v=A.e3(w,null)
if(v<1||v>53)return d
u=A.a8(A.H(new A.E(Date.now(),0,!1)),1,4,0,0,0,0,0)
t=u.aq(0-A.c6(A.cK(u)-1,0,0,0,0,0).a).aq(A.c6((v-1)*7,0,0,0,0,0).a)
s=A.a8(A.H(t),A.K(t),A.a1(t),0,0,0,0,0).dJ()
w=A.a([],x.t)
for(r=J.S(d),q=x.N,p=x.z;r.n();){o=r.gu(r)
n=A.yP(null,null,q,p)
n.v(0,o)
n.k(0,"importado_em",s)
w.push(n)}return w},
yG(d,e,f,g,h){return B.dp5(d,e,f,g,h)},
dp5(b6,b7,b8,b9,c0){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$yG=A.h(function(c1,c2){if(c1===1){s.push(c2)
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
return A.c(r.t0(),$async$yG)
case 10:q=c2
w=11
return A.c(A.dG(D.aM0,null,e),$async$yG)
case 11:w=12
return A.c(A.aQd(B.dEZ(),q,null,d,a0),$async$yG)
case 12:p=c2
a2=J.S(p)
case 13:if(!a2.n()){w=14
break}o=a2.gu(a2)
n=J.aq(p)>1?r.b+" ("+o.b+")":r.b
t=16
m=B.dp8(o,b7,b8)
if(m!=null){J.ax(b3,A.n(n)+": "+m)
w=13
break}l=B.b55(o.a)
k=b8
a3=l
if(a3==null)a3=null
else a3=a3.Q==null&&!a3.at
w=a3===!0&&f?19:20
break
case 19:w=21
return A.c(c0.$2(o,n),$async$yG)
case 21:k=c2
if(k==null){J.ax(b3,A.n(n)+": sem loja escolhida \u2014 ignorado.")
w=13
break}case 20:a3=l
if(a3==null)a3=null
else a3=a3.Q==null&&!a3.at
w=a3===!0&&k!=null?22:24
break
case 22:a4=B.cYj(o.e,k)
w=23
break
case 24:a3=l
w=(a3==null?null:a3.ch)===!0?25:27
break
case 25:c2=B.dp1(o,b8)
w=26
break
case 27:w=28
return A.c(B.YF(o,b8),$async$yG)
case 28:case 26:a4=c2
case 23:j=a4
a3=l
if((a3==null?null:a3.db)===!0)j=B.dp4(j,r.b)
j=B.dp2(j,l)
a3=j
a5=o.c
w=29
return A.c(B.b56(a3,o.d,a5),$async$yG)
case 29:a5=r.b
a3=k
if(a3==null)a3=o.y
w=30
return A.c(B.Cb(o,a5,a3),$async$yG)
case 30:i=c2;++b0
a3=A.n(n)
a5=o.b
a6=J.aq(j)
a7=B.dFS(o)
a8=i==null?"":"\n"+i
J.ax(b2,a3+" \u2014 "+a5+" ("+a6+" registos)"+a7+a8)
t=7
w=18
break
case 16:t=15
b4=s.pop()
h=A.P(b4)
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
g=A.P(b5)
J.ax(b3,r.b+": "+A.n(g))
w=9
break
case 6:w=2
break
case 9:case 4:++a1
w=3
break
case 5:b9.$3(b1.gt(b6),b1.gt(b6),"")
u=new B.anb(b2,b3)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$yG,v)},
cPU(d){return B.dBp(d)},
dBp(d){var w=0,v=A.l(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$cPU=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=E.dc8(d)
if(m.gR2().a===0)throw A.q(D.b_V)
r=A.a([],x.i)
o=m.gR2(),o=new A.bK(o,o.r,o.e,A.w(o).i("bK<2>"))
case 3:if(!o.n()){w=4
break}q=o.d.gaFC(0)
p=B.dzo(q)
if(p==null){w=3
break}t=6
k=J
j=r
w=9
return A.c(B.cPV(q,p),$async$cPU)
case 9:k.ax(j,f)
t=2
w=8
break
case 6:t=5
l=s.pop()
if(!(A.P(l) instanceof E.oM))throw l
w=8
break
case 5:w=2
break
case 8:w=3
break
case 4:if(J.aq(r)===0)throw A.q(D.b_R)
u=r
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$cPU,v)},
cPV(c4,c5){var w=0,v=A.l(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cPV=A.h(function(c6,c7){if(c6===1)return A.i(c7,v)
for(;;)switch(w){case 0:c2=c5.d
c3=c2+1
if(c4.length<=c3)throw A.q(D.b_S)
if(c5.z!=null){t=c4[1]
s=B.d0y(B.Lg(1<t.length?t[1]:null))
t=c4[1]
r=B.d0y(B.Lg(3<t.length?t[3]:null))}else{s=null
r=null}q=A.a([],x.s)
t=x.N
p=A.v(t,x.P)
o=A.a([],x.t)
n=x.z
m=A.v(t,n)
for(l=c5.CW,k=null,j=null,i=null,h=0;h<c2;++h){g=c4[h]
f=B.Lg(0<g.length?g[0]:null)
if(typeof f!="string")continue
if(l)i=i==null?B.dc4(f):i
if(A.jS(f,"storeName2",0)){e=$.d2D().hN(f)
if(e!=null){g=e.b
d=g[1]
d.toString
k=C.h.W(d)
g=g[2]
g.toString
j="ST"+g}}else if(A.jS(f,"magasin",0)){e=$.d2B().hN(f)
if(e!=null){g=e.b
d=g[1]
d.toString
j="ST"+C.h.D(d,3,"0")
g=g[2]
g.toString
k=C.h.W(g)}}else if(A.jS(f,"lojaFinal",0)){e=$.d2C().hN(f)
if(e!=null){g=e.b
d=g[1]
d.toString
j="ST"+C.h.D(d,3,"0")
g=g[2]
g.toString
k=C.h.W(g)}}}c2=c5.x,g=A.V(c2).i("a2<1,d>"),d=c2.length!==0,a0=c5.w,a1=a0!=null,a2=r!=null,a3=s!=null,a4=c5.y,a5=a4.length,a6=c5.e,a7=a6.length,a8=c5.cx,a9=a8!=null,b0=x.H,h=c3
case 3:if(!(h<c4.length)){w=5
break}w=C.f.a0(h-c3,500)===0?6:7
break
case 6:w=8
return A.c(A.dG(C.b9,null,b0),$async$cPV)
case 8:case 7:b1=c4[h]
if(B.dBM(b1,a7)){w=4
break}if(a9)if(B.aPQ(B.Lg(0<b1.length?b1[0]:null))===a8){w=4
break}f=B.Lg(0<b1.length?b1[0]:null)
b2=typeof f=="string"
if(b2&&l)i=i==null?B.dc4(f):i
if(b2)b3=A.jS(f,"storeName2",0)
else b3=!1
if(b3){e=$.d2D().hN(f)
if(e!=null){b2=e.b
b3=b2[1]
b3.toString
k=C.h.W(b3)
b2=b2[2]
b2.toString
j="ST"+b2}w=4
break}if(b2)b3=A.jS(f,"magasin",0)
else b3=!1
if(b3){e=$.d2B().hN(f)
if(e!=null){b2=e.b
b3=b2[1]
b3.toString
j="ST"+C.h.D(b3,3,"0")
b2=b2[2]
b2.toString
k=C.h.W(b2)}w=4
break}if(b2)b3=A.jS(f,"lojaFinal",0)
else b3=!1
if(b3){e=$.d2C().hN(f)
if(e!=null){b2=e.b
b3=b2[1]
b3.toString
j="ST"+C.h.D(b3,3,"0")
b2=b2[2]
b2.toString
k=C.h.W(b2)}w=4
break}if(b2)b2=A.jS(f,"Filtros aplicados",0)
else b2=!1
if(b2){w=4
break}b4=A.v(t,n)
for(b5=0;b5<a7;++b5){b6=a6[b5]
b7=b6.a
if(b7==null)continue
b4.k(0,b7,B.dz5(B.Lg(b5<b1.length?b1[b5]:null),b6.b))}for(b8=0;b8<a5;++b8){b7=a4[b8]
if(b4.h(0,b7)==null||J.t(b4.h(0,b7),""))b4.k(0,b7,m.h(0,b7))
else m.k(0,b7,b4.h(0,b7))}if(a3)b4.k(0,"periodo_inicio",s)
if(a2)b4.k(0,"periodo_fim",r)
if(C.e.bg(c2,new B.cPW(b4))){w=4
break}b9=!a1||a0.length===0
if(!d||b9){o.push(b4)
w=4
break}c0=new A.a2(c2,new B.cPX(b4),g).aS(0,"||")
if(p.ao(0,c0))q.push("Linha "+(h+1)+": registo repetido \u2014 fica a \xfaltima vers\xe3o.")
p.k(0,c0,b4)
case 4:++h
w=3
break
case 5:if(p.a===0)c1=o
else{c2=p.$ti.i("bc<2>")
c2=A.F(new A.bc(p,c2),c2.i("z.E"))
c2.$flags=1
c1=c2}if(c1.length===0)throw A.q(D.b_W)
u=new B.wE(c5.a,c5.b,c5.c,a0,c1,s,r,q,k,j,i)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$cPV,v)},
dFS(d){var w,v=d.z
if(v==null)return""
w=v.split("-")
return w.length===3?" \xb7 dia "+w[2]+"/"+w[1]+"/"+w[0]:""},
dc4(d){var w,v,u,t,s,r,q,p=null,o=$.diL().hN(d)
if(o==null)return p
w=o.b
v=w[3]
v.toString
v=A.e3(v,p)
u=w[2]
u.toString
u=A.e3(u,p)
t=w[1]
t.toString
s=A.a8(v,u,A.e3(t,p),0,0,0,0,0)
if(w[4]!=null){v=w[6]
v.toString
v=A.e3(v,p)
u=w[5]
u.toString
u=A.e3(u,p)
w=w[4]
w.toString
r=A.a8(v,u,A.e3(w,p)-1,0,0,0,0,0)
q=!r.e1(s)?r:s}else q=s
return C.h.D(C.f.j(A.H(q)),4,"0")+"-"+C.h.D(C.f.j(A.K(q)),2,"0")+"-"+C.h.D(C.f.j(A.a1(q)),2,"0")},
dzo(d){var w,v,u,t,s,r,q
for(w=x.s,v=0;v<28;++v){u=C.D6[v]
t=u.d
if(t>=d.length)continue
s=d[t]
t=A.a([],w)
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)t.push(B.dBe(B.Lg(s[q])))
t=new B.cNs(t)
if(!t.$1(u.f)){r=u.r
t=r.length!==0&&t.$1(r)}else t=!0
if(t)return u}return null},
dBM(d,e){var w,v=d.length
if(e<v)v=e
for(w=0;w<v;++w)if(B.Lg(d[w])!=null)return!1
return!0},
Lg(d){var w,v=d==null?null:d.b
if(v==null)return null
if(v instanceof F.nS){w=v.a.j(0)
return C.h.W(w)==="#"?null:w}if(v instanceof F.nx)return v.a
if(v instanceof F.oB)return v.a
if(v instanceof F.qY)return v.a
if(v instanceof F.pF)return A.a8(v.a,v.b,v.c,0,0,0,0,0)
if(v instanceof F.pG)return A.a8(v.a,v.b,v.c,v.d,v.e,v.f,v.r,v.w)
if(v instanceof F.p7)return v.ayn()
if(v instanceof F.oI)return v.a
return v.j(0)},
dz5(d,e){var w,v,u,t=null
if(d==null)return t
switch(e.a){case 0:w=B.aPQ(d)
return w==null||w.length===0?t:w
case 1:return B.cLC(d)
case 2:v=B.cLC(d)
return v==null?t:C.i.ac(v)
case 3:if(A.po(d))return d
u=B.cLC(d)
if(u!=null)return u!==0
if(typeof d=="string"){w=C.h.W(d).toLowerCase()
if(w==="sim"||w==="yes"||w==="true")return!0
if(w==="nao"||w==="n\xe3o"||w==="no"||w==="false")return!1
return w.length!==0}return t
case 4:return B.d0y(d)
case 5:return B.dAm(d)
case 6:return B.dzs(d)
case 7:u=B.cLC(d)
return u==null?t:u*100
case 8:return B.dCa(d)
case 9:return B.dBl(d)
case 10:return B.dBO(d)
case 11:return B.dBk(d)}},
dAm(d){var w,v,u
if(d instanceof A.c9)w=d
else w=d instanceof A.E?A.c6(0,A.cV(d),0,0,A.dg(d),0):null
if(w==null)return null
v=w.a
u=C.f.aj(v,36e8)
v=C.f.aj(v,6e7)
return C.h.D(C.f.j(u%24),2,"0")+":"+C.h.D(C.f.j(v%60),2,"0")},
dzs(d){if(d instanceof A.c9)return C.f.aj(d.a,1000)/6e4
if(d instanceof A.E)return A.cV(d)*60+A.dg(d)
return null},
aPQ(d){if(d==null)return null
if(typeof d=="string")return C.h.W(d)
if(typeof d=="number"&&d===C.i.il(d))return C.f.j(C.i.C(d))
if(d instanceof A.E)return d.dJ()
return C.h.W(J.dD(d))},
cLC(d){var w,v
if(typeof d=="number")return d
if(typeof d=="string"){w=C.h.W(d)
v=A.cj(w,",",".")
if(v.length===0)return null
return A.cV5(v)}return null},
d0y(d){var w
if(d==null)return null
if(d instanceof A.E)return B.dcv(d)
if(typeof d=="string"){w=A.r9(C.h.W(d))
return w==null?null:B.dcv(w)}return null},
dcv(d){return""+A.H(d)+"-"+C.h.D(C.f.j(A.K(d)),2,"0")+"-"+C.h.D(C.f.j(A.a1(d)),2,"0")},
dCa(d){var w
if(d instanceof A.E)return d.dJ()
if(typeof d=="string"){w=A.r9(C.h.W(d))
return w==null?null:w.dJ()}return null},
dBO(d){var w=B.aPQ(d)
if(w==null)return null
return C.h.W(C.h.la(w,$.diM(),""))},
dBl(d){var w,v,u=B.aPQ(d)
if(u==null)return null
w=$.diK().hN(u)
if(w==null)return null
v=w.b[1]
v.toString
return"ST"+C.h.D(v,3,"0")},
dBk(d){var w,v,u=B.aPQ(d)
if(u==null)return null
w=$.diJ().hN(u)
if(w==null)return null
v=w.b[1]
v.toString
return"ST"+C.h.D(v,3,"0")},
dBe(d){var w,v,u,t=d==null?null:J.dD(d)
if(t==null)t=""
w=C.h.W(t.toLowerCase())
for(v=0;v<23;++v){t="\xe1\xe0\xe2\xe3\xe4\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf3\xf2\xf4\xf5\xf6\xfa\xf9\xfb\xfc\xe7"[v]
u="aaaaaeeeeiiiiooooouuuuc"[v]
w=A.cj(w,t,u)}return w},
b57:function b57(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
b58:function b58(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b59:function b59(d,e,f){this.a=d
this.b=e
this.c=f},
b53:function b53(d,e,f){this.a=d
this.b=e
this.c=f},
b54:function b54(d){this.a=d},
b50:function b50(d,e){this.a=d
this.b=e},
b51:function b51(d,e,f){this.a=d
this.b=e
this.c=f},
b52:function b52(d,e){this.a=d
this.b=e},
b5a:function b5a(d){this.a=d},
b5b:function b5b(d){this.a=d},
anb:function anb(d,e){this.b=d
this.c=e},
wE:function wE(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cPW:function cPW(d){this.a=d},
cPX:function cPX(d){this.a=d},
cNs:function cNs(d){this.a=d},
cNu:function cNu(d){this.a=d},
cNt:function cNt(d){this.a=d},
d0U(){var w=0,v=A.l(x.E),u,t,s,r
var $async$d0U=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=b.G
r=s.document.createElement("input")
r.type="file"
r.multiple=!0
r.webkitdirectory=!0
s.document.body.appendChild(r)
s=new A.aZ($.bp,x.g)
t=new A.c3(s,x.R)
new A.Eq(r,"change",!1,x.a).gM(0).cS(new B.cTp(r,t),x.H)
r.addEventListener("cancel",A.id(new B.cTq(r,t)))
r.click()
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$d0U,v)},
cTp:function cTp(d,e){this.a=d
this.b=e},
cTq:function cTq(d,e){this.a=d
this.b=e},
NR(d,e,f){return B.doH(d,e,f)},
doH(d,e,f){var w=0,v=A.l(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$NR=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:k=D.c4_.h(0,d)
if(k==null){w=1
break}w=3
return A.c(A.xV(k),$async$NR)
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
m=$.T().b
m===$&&A.b()
m=m.R("metricas_historico")
q=A.e6(r,o,n)
J.bz(q,"data_referencia",e)
w=10
return A.c(m.d8(0,q),$async$NR)
case 10:w=1
break
t=2
w=9
break
case 7:t=6
j=s.pop()
if(!(A.P(j) instanceof A.dX))throw j
w=9
break
case 6:w=2
break
case 9:case 5:q=$.T().b
q===$&&A.b()
w=11
return A.c(q.R("metricas_historico").d8(0,r),$async$NR)
case 11:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$NR,v)},
bsm(d){var w=0,v=A.l(x.O),u,t,s,r,q,p
var $async$bsm=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=$.T().b
q===$&&A.b()
t=x.z
p=x.j
w=3
return A.c(q.bj("sscc_gerar_acertos",A.Y(["p_num_loja",d],x.N,t),t),$async$bsm)
case 3:s=p.a(f)
q=J.I(s)
if(q.ga2(s)){u=D.ceT
w=1
break}r=x.P.a(q.gM(s))
q=J.I(r)
t=A.ao(q.h(r,"aplicados"))
t=t==null?null:C.i.C(t)
if(t==null)t=0
q=A.ao(q.h(r,"propostos"))
q=q==null?null:C.i.C(q)
u=new A.a9X(t,q==null?0:q)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$bsm,v)}},D,E,G
J=c[1]
A=c[0]
C=c[2]
F=c[5]
B=a.updateHolder(c[6],B)
D=c[12]
E=c[9]
G=c[13]
B.Ca.prototype={
Z(){return new B.a86(C.nB)}}
B.a86.prototype={
a3(){this.af()
this.KD()},
KD(){var w=0,v=A.l(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$KD=A.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n={}
w=7
return A.c(A.Pg(),$async$KD)
case 7:q=e
if(q==null){w=1
break}w=8
return A.c(A.rK(),$async$KD)
case 8:p=e
if(r.c==null){w=1
break}n.a=null
for(m=J.S(p);m.n();){o=m.gu(m)
if(o.b===q.r){n.a=o.a
break}}r.p(new B.c2K(n,r,q,p))
r.EI()
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
return A.k($async$KD,v)},
EI(){var w=0,v=A.l(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$EI=A.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:r.p(new B.c2H(r))
t=4
w=7
return A.c(A.aQl(r.e),$async$EI)
case 7:q=e
if(r.c==null){w=1
break}r.p(new B.c2I(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=A.P(n)
if(r.c==null){w=1
break}r.p(new B.c2J(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$EI,v)},
Fb(){var w=0,v=A.l(x.H),u=this,t,s
var $async$Fb=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.c(A.aE(null,null,!0,null,new B.c2T(),s,null,!0,x.N),$async$Fb)
case 2:t=e
w=t==="ficheiros"?3:5
break
case 3:w=6
return A.c(u.Mg(),$async$Fb)
case 6:w=4
break
case 5:w=t==="pasta"?7:8
break
case 7:w=9
return A.c(u.Mf(),$async$Fb)
case 9:case 8:case 4:return A.j(null,v)}})
return A.k($async$Fb,v)},
Mg(){var w=0,v=A.l(x.H),u,t=this,s,r
var $async$Mg=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=A.a([C.hL],x.D)
w=3
return A.c($.d1K().Db(s,null,null),$async$Mg)
case 3:r=e
if(J.bb(r)){w=1
break}w=4
return A.c(t.Me(r),$async$Mg)
case 4:case 1:return A.j(u,v)}})
return A.k($async$Mg,v)},
Mf(){var w=0,v=A.l(x.H),u,t=this,s
var $async$Mf=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(B.d0U(),$async$Mf)
case 3:s=e
if(J.bb(s)){w=1
break}w=4
return A.c(t.Me(s),$async$Mf)
case 4:case 1:return A.j(u,v)}})
return A.k($async$Mf,v)},
Me(d){return this.bbp(d)},
bbp(d){var w=0,v=A.l(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Me=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:r.p(new B.c2V(r))
t=4
o=r.e
n=r.f
m=r.d?r.gb2u():null
w=7
return A.c(B.yG(d,n,o,new B.c2W(r),m),$async$Me)
case 7:q=f
if(r.c==null){w=1
break}r.p(new B.c2X(r,q))
if(q.b.length!==0)r.EI()
t=2
w=6
break
case 4:t=3
k=s.pop()
p=A.P(k)
if(r.c==null){w=1
break}r.p(new B.c2Y(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$Me,v)},
b2v(d,e){var w,v=null,u={}
u.a=null
w=this.c
w.toString
return A.aE(v,v,!1,v,new B.c2Q(u,this,e),w,v,!0,x.N)},
G(d){var w=this,v=null,u=A.B(d),t=u.ok,s=A.f("Importar v\xe1rios ficheiros",v,v,v,v,t.w,v,v,v),r=w.ay,q=w.ch,p=w.w,o=p?v:w.gb2z(),n=p?C.jK:D.aWP,m=x.p
o=A.a([s,C.L,new B.a5X(r,q,w.gaWf(),v),C.L,A.jh(n,A.f(p?"A importar\u2026":"Escolher ficheiros ou pasta",v,v,v,v,v,v,v,v),o)],m)
if(w.w&&w.x.length!==0){t=t.Q
s=A.a([C.R,A.f(w.x,v,v,v,v,t,v,v,v)],m)
if(t==null)t=v
else{r=u.ax
q=r.rx
t=t.a5(q==null?r.k3:q)}s.push(new A.D(C.hv,A.f("Ficheiros grandes (dezenas de milhares de linhas) s\xe3o lidos no pr\xf3prio browser e podem deixar o separador sem resposta durante um ou dois minutos. Se aparecer \xabEsta p\xe1gina n\xe3o est\xe1 a responder\xbb, escolhe \xabEsperar\xbb. Na app Windows/Android n\xe3o acontece.",v,v,v,v,t,v,v,v),v))
C.e.v(o,s)}if(!w.w&&w.y!=null){t=w.y
t.toString
s=w.z
s.toString
C.e.v(o,A.a([C.L,new B.aB9(t,s,v)],m))}return A.br(new A.dN(G.Sg,A.cn(A.J(A.a([A.J(o,C.a9,C.l,C.q,0,C.u)],m),C.a9,C.l,C.H,0,C.u),v,C.c9,v,v,C.ap),v),v,v)}}
B.a5X.prototype={
Z(){return new B.aB8()}}
B.aB8.prototype={
G(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.B(d),i=l.a,h=i.c,g=h==null,f=g?k:h.a,e=i.d
i=f==null
if(i)w=D.bWp
else{v=A.a([],x.n)
for(u=0;u<28;++u){t=C.D6[u]
if(f.ao(0,t.a))v.push(t)}w=v}s=l.d?C.D6:w
v=j.ax
r=v.RG
if(r==null)r=v.k2
q=A.aN(12)
p=g?"J\xe1 importado hoje":"Uploads hoje: "+h.gqU(0)+" ("+w.length+" de 28 formatos)"
o=j.ok
n=o.z
m=x.p
n=A.a([A.a_(A.f(p,k,k,k,k,n==null?k:n.bQ(C.bv),k,k,k),1)],m)
if(g&&e==null)n.push(C.Pg)
g=A.a([A.O(n,C.t,C.l,C.q,0,k,k),C.R],m)
if(e!=null){i=v.fy
v=A.aO(C.B,i,k,16)
o=o.Q
i=o==null?k:o.a5(i)
g.push(new A.D(C.fw,A.O(A.a([v,C.aa,A.a_(A.f("N\xe3o foi poss\xedvel carregar: "+e,k,k,k,k,i,k,k,k),1),A.ay(!1,G.aph,k,k,!0,k,k,l.a.e,k,k)],m),C.C,C.l,C.q,0,k,k),k))}else{p=A.a([],m)
if(!i&&s.length===0){o=o.Q
if(o==null)v=k
else{n=v.rx
v=o.a5(n==null?v.k3:n)}p.push(new A.D(C.ee,A.f("Ainda nada importado hoje.",k,k,k,k,v,k,k,k),k))}for(v=s.length,u=0;u<s.length;s.length===v||(0,A.r)(s),++u){t=s[u]
o=i?k:f.h(0,t.a)
p.push(l.bbo(j,t.b,o))}i=l.d
v=A.aO(i?C.nr:D.aV_,k,k,18)
p.push(new A.cX(C.bj,k,k,A.hr(v,A.f(i?"Mostrar s\xf3 os importados hoje":"Mostrar todos os formatos (28)",k,k,k,k,k,k,k,k),new B.bGQ(l),k),k))
C.e.v(g,p)}return A.aS(k,A.J(g,C.C,C.l,C.q,0,C.u),C.D,k,k,new A.b1(r,k,k,q,k,k,C.al),k,k,k,k,C.cz,k,k,k)},
bbo(d,e,f){var w,v,u,t,s,r,q=null,p=f!=null&&J.cT(f),o=d.ax
if(p)w=o.b
else{v=o.rx
w=v==null?o.k3:v}o=p?C.hW:G.Wp
o=A.aO(o,p?w:w.aW(0.5),q,16)
v=d.ok.Q
u=v==null
if(u)t=q
else t=v.a5(p?q:w)
t=A.a([o,C.aa,A.a_(A.f(e,q,q,q,q,t,q,q,q),1)],x.p)
if(p){o=A.a([],x.s)
for(s=J.S(f);s.n();){r=s.gu(s)
o.push(C.h.D(C.f.j(A.cV(r)),2,"0")+":"+C.h.D(C.f.j(A.dg(r)),2,"0"))}o=C.e.aS(o," \xb7 ")
t.push(A.f(o,q,q,q,q,u?q:v.a5(w),C.me,q,q))}return new A.D(C.is,A.O(t,C.t,C.l,C.q,0,q,q),q)}}
B.aB9.prototype={
G(d){var w,v,u,t,s,r,q,p,o=null,n=A.B(d),m=this.c,l=m.length,k=this.d,j=k.length,i=n.ax,h=i.RG
if(h==null)h=i.k2
w=A.aN(12)
v=j===0?"":", "+j+" com erro"
u=n.ok
t=u.z
t=t==null?o:t.bQ(C.bv)
s=x.p
t=A.a([A.f(""+l+" de "+(l+j)+" importado(s) com sucesso"+v+".",o,o,o,o,t,o,o,o),C.R],s)
for(l=m.length,j=i.b,u=u.Q,r=0;r<m.length;m.length===l||(0,A.r)(m),++r){q=m[r]
t.push(new A.D(C.is,A.O(A.a([A.aO(C.hW,j,o,18),C.aa,new A.bW(1,C.at,A.f(q,o,o,o,o,u,o,o,o),o)],s),C.C,C.l,C.q,0,o,o),o))}for(m=k.length,i=i.fy,r=0;r<k.length;k.length===m||(0,A.r)(k),++r){p=k[r]
t.push(new A.D(C.is,A.O(A.a([A.aO(C.VZ,i,o,18),C.aa,new A.bW(1,C.at,A.f(p,o,o,o,o,u,o,o,o),o)],s),C.C,C.l,C.q,0,o,o),o))}return A.aS(o,A.J(t,C.C,C.l,C.q,0,C.u),C.D,o,o,new A.b1(h,o,o,w,o,o,C.al),o,o,o,o,C.cz,o,o,o)}}
B.anb.prototype={}
B.wE.prototype={}
var z=a.updateTypes(["al<~>()","al<d?>(wE,d)","al<y<wE>>(eP)"])
B.c2K.prototype={
$0(){var w=this,v=w.b,u=w.c
v.d=A.a3(u.e)===C.w
v.e=u.r
v.r=w.d
v.f=w.a.a},
$S:0}
B.c2H.prototype={
$0(){return this.a.ch=null},
$S:0}
B.c2I.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.c2J.prototype={
$0(){return this.a.ch=A.n(this.b)},
$S:0}
B.c2T.prototype={
$1(d){return A.Qe(A.a([A.brg(D.ctX,new B.c2R(d)),A.brg(D.cut,new B.c2S(d))],x.p),D.ctJ)},
$S:136}
B.c2R.prototype={
$0(){return A.R(this.a,!1).T("ficheiros")},
$S:0}
B.c2S.prototype={
$0(){return A.R(this.a,!1).T("pasta")},
$S:0}
B.c2V.prototype={
$0(){var w=this.a
w.w=!0
w.x=""
w.z=w.y=null},
$S:0}
B.c2W.prototype={
$3(d,e,f){var w=this.a
if(w.c==null)return
w.p(new B.c2U(w,f,d,e))},
$S:1632}
B.c2U.prototype={
$0(){var w=this,v=w.b
v=v.length===0?"Conclu\xeddo.":'A importar "'+v+'" ('+w.c+"/"+w.d+")\u2026"
w.a.x=v},
$S:0}
B.c2X.prototype={
$0(){var w,v=this.a
v.w=!1
w=this.b
v.y=w.b
v.z=w.c},
$S:0}
B.c2Y.prototype={
$0(){var w=this.a
w.w=!1
w.y=C.z
w.z=A.a(["Erro ao importar: "+A.n(this.b)],x.s)},
$S:0}
B.c2Q.prototype={
$1(d){return new A.dt(new B.c2P(this.a,this.b,this.c),null)},
$S:10}
B.c2P.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=A.B(d).ok.Q
if(o==null)o=p
else{w=A.B(d).ax
v=w.rx
o=o.a5(v==null?w.k3:v)}o=A.f(this.c,p,p,p,p,o,p,p,p)
w=this.a
v=w.a
u=A.a([],x.I)
for(t=J.S(this.b.r),s=x.r;t.n();){r=t.gu(t)
q=r.b
u.push(new A.bo(q,A.f(q+" \u2014 "+r.a,p,p,p,p,p,p,p,p),C.aq,p,s))}t=x.p
u=A.J(A.a([o,C.L,new A.U(p,44,new A.cg(v,p,u,new B.c2M(w,e),C.xQ,p,!0,p,x.B),p)],t),C.C,C.l,C.H,0,C.u)
v=A.ay(!1,D.cxg,p,p,!0,p,p,new B.c2N(d),p,p)
return A.aK(A.a([v,A.b5(C.vj,w.a==null?p:new B.c2O(w,d),p)],t),p,p,u,p,p,p,D.ct7)},
$S:12}
B.c2M.prototype={
$1(d){return this.b.$1(new B.c2L(this.a,d))},
$S:7}
B.c2L.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.c2N.prototype={
$0(){return A.R(this.a,!1).bc()},
$S:0}
B.c2O.prototype={
$0(){return A.R(this.b,!1).T(this.a.a)},
$S:0}
B.bGQ.prototype={
$0(){var w=this.a
return w.p(new B.bGP(w))},
$S:0}
B.bGP.prototype={
$0(){var w=this.a
return w.d=!w.d},
$S:0}
B.aZi.prototype={
$2(d,e){var w=A.ao(J.p(d,e))
return w==null?null:w},
$S:1633}
B.b57.prototype={
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
return A.c(B.wg(h,new B.b58(r,q,i,o),p),$async$$0)
case 8:w=6
break
case 7:w=9
return A.c(B.wg(h,new B.b59(r,q,i),p),$async$$0)
case 9:case 6:s.b=s.b+i.length
w=3
break
case 4:case 1:return A.j(u,v)}})
return A.k($async$$0,v)},
$S:1}
B.b58.prototype={
$0(){var w=this
return w.a.R(w.b).qW(w.c,w.d)},
$S:191}
B.b59.prototype={
$0(){return this.a.R(this.b).d8(0,this.c)},
$S:191}
B.b53.prototype={
$0(){return B.NR(this.a,this.c.z,this.b)},
$S:1}
B.b54.prototype={
$0(){return B.NR("edificios",null,this.a)},
$S:1}
B.b50.prototype={
$0(){var w=$.T().b
w===$&&A.b()
return w.R(this.a.c).dt(0).X("num_loja",this.b)},
$S:191}
B.b51.prototype={
$0(){var w=$.T().b
w===$&&A.b()
w=w.R(this.a.c).dt(0).X("num_loja",this.b)
return A.d5(w.c3(w.c4("morada","like."+(this.c+"-%"))),w.$ti.c)},
$S:191}
B.b52.prototype={
$0(){var w=$.T().b
w===$&&A.b()
return w.R(this.a.c).dt(0).X("num_loja",this.b)},
$S:191}
B.b5a.prototype={
$1(d){return A.a4(J.p(d,this.a))},
$S:524}
B.b5b.prototype={
$1(d){return d!==this.a},
$S:13}
B.cPW.prototype={
$1(d){var w=this.a.h(0,d)
return J.dD(w==null?"":w).length===0},
$S:13}
B.cPX.prototype={
$1(d){var w=this.a.h(0,d)
return A.n(w==null?"":w)},
$S:23}
B.cNs.prototype={
$1(d){return C.e.f7(d,new B.cNu(this.a))},
$S:531}
B.cNu.prototype={
$1(d){return C.e.bg(this.a,new B.cNt(d))},
$S:13}
B.cNt.prototype={
$1(d){return C.h.l(d,this.a)},
$S:13}
B.cTp.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=p.files,n=A.a([],x.S)
if(o!=null)for(w=b.G,v=0;v<o.length;++v){u=o.item(v)
if(u==null)continue
if(!C.h.ix(u.name.toLowerCase(),".xlsx"))continue
t=w.URL.createObjectURL(u)
s=u.name
r=u.type
q=u.size
n.push(A.xd(t,new A.E(A.mJ(u.lastModified,0,!1),0,!1),q,r,s))}p.remove()
p=this.b
if((p.a.a&30)===0)p.eL(0,n)},
$S:39}
B.cTq.prototype={
$1(d){var w
this.a.remove()
w=this.b
if((w.a.a&30)===0)w.eL(0,D.bWq)},
$S:39};(function installTearOffs(){var w=a._instance_0u,v=a._instance_2u,u=a._static_1
var t
w(t=B.a86.prototype,"gaWf","EI",0)
w(t,"gb2z","Fb",0)
v(t,"gb2u","b2v",1)
u(B,"dEZ","cPU",2)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.ae,[B.Ca,B.a5X])
w(A.ad,[B.a86,B.aB8])
w(A.tL,[B.c2K,B.c2H,B.c2I,B.c2J,B.c2R,B.c2S,B.c2V,B.c2U,B.c2X,B.c2Y,B.c2L,B.c2N,B.c2O,B.bGQ,B.bGP,B.b57,B.b58,B.b59,B.b53,B.b54,B.b50,B.b51,B.b52])
w(A.nj,[B.c2T,B.c2W,B.c2Q,B.c2M,B.b5a,B.b5b,B.cPW,B.cPX,B.cNs,B.cNu,B.cNt,B.cTp,B.cTq])
w(A.vL,[B.c2P,B.aZi])
v(B.aB9,A.aA)
w(A.ac,[B.anb,B.wE])})()
A.EO(b.typeUniverse,JSON.parse('{"a5X":{"ae":[],"o":[]},"Ca":{"ae":[],"o":[]},"a86":{"ad":["Ca"]},"aB8":{"ad":["a5X"]},"aB9":{"aA":[],"o":[]}}'))
var y={c:'N\xe3o foi poss\xedvel identificar a loja deste ficheiro (rodap\xe9 "Filtros aplicados" em falta) \u2014 exporta-o de novo.'}
var x=(function rtii(){var w=A.ar
return{r:w("bo<d>"),x:w("al<~>"),C:w("anb"),I:w("x<bo<d>>"),n:w("x<ha>"),G:w("x<y<a5<d,@>>>"),t:w("x<a5<d,@>>"),i:w("x<wE>"),s:w("x<d>"),p:w("x<o>"),S:w("x<jL>"),D:w("x<Ac>"),F:w("y<a5<d,@>>"),e:w("y<wE>"),E:w("y<jL>"),j:w("y<@>"),P:w("a5<d,@>"),K:w("ac"),m:w("wE"),O:w("+aplicados,propostos(e,e)"),B:w("cg<d>"),N:w("d"),J:w("eP"),y:w("dc<d>"),R:w("c3<y<jL>>"),a:w("Eq<aR>"),g:w("aZ<y<jL>>"),z:w("@"),X:w("ac?"),T:w("d?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Us=new A.c9(3e6)
D.aM0=new A.c9(8e4)
D.aV_=new A.am(58244,"MaterialIcons",!0)
D.aWP=new A.aV(C.We,null,null,null,null)
D.b_Q=new E.oM("N\xe3o foi poss\xedvel identificar a loja deste ficheiro \u2014 exporta-o de novo.")
D.b_R=new E.oM("Formato n\xe3o reconhecido. Este ficheiro n\xe3o corresponde a nenhum formato conhecido. Verifica se \xe9 o ficheiro certo.")
D.b_S=new E.oM("O ficheiro n\xe3o tem linhas de dados.")
D.b_U=new E.oM("O ficheiro n\xe3o tem linhas reconhec\xedveis para este formato \u2014 exporta-o de novo.")
D.b_V=new E.oM("O ficheiro n\xe3o tem folhas de c\xe1lculo.")
D.b_W=new E.oM("N\xe3o foram encontradas linhas de dados v\xe1lidas.")
D.XH=new E.oM(y.c)
D.bGe=w(["av","za","rl","pc","ext","eml"],x.s)
D.bWp=w([],x.n)
D.bWq=w([],x.S)
D.c7H={relex:0,opcom:1,reserva:2,promessa:3,valorizacoes:4,preparar:5,localizacao_oc:6,edificios:7}
D.c4_=new A.ak(D.c7H,["vw_param_resumo","vw_opcom_resumo","vw_reserva_resumo","vw_promessa_resumo","vw_valorizacoes_resumo","vw_preparar_resumo","vw_localizacao_oc_resumo","vw_edificio_resumo"],A.ar("ak<d,d>"))
D.ceT=new A.a9X(0,0)
D.ct7=new A.L("De que loja \xe9 este ficheiro?",null,null,null,null,null,null,null,null,null,null)
D.ctJ=new A.L("Importar v\xe1rios ficheiros",null,null,null,null,null,null,null,null,null,null)
D.ctX=new A.L("Ficheiros individuais",null,null,null,null,null,null,null,null,null,null)
D.cut=new A.L("Pasta inteira",null,null,null,null,null,null,null,null,null,null)
D.cxg=new A.L("Ignorar ficheiro",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dJC","dg9",()=>A.ca("sem(\\d{1,2})",!1,!1,!1))
w($,"dOy","d2D",()=>A.ca("storeName2\\s+\xe9\\s+(.+?)\\s*\\((\\d+)\\)",!0,!1,!1))
w($,"dOw","d2B",()=>A.ca("magasin\\s+\xe9\\s+(\\d+)\\s*-\\s*(.+)",!0,!1,!1))
w($,"dOx","d2C",()=>A.ca("lojaFinal\\s+\xe9\\s+(\\d+)\\s*-\\s*(.+?)(?:\\n|$)",!0,!1,!1))
w($,"dOv","diL",()=>A.ca("Date\\s+\xe9\\s+em\\s+ou\\s+posterior\\s+a\\s+(\\d{2})-(\\d{2})-(\\d{4})(?:\\s+e\\s+\xe9\\s+anterior\\s+a\\s+(\\d{2})-(\\d{2})-(\\d{4}))?",!0,!1,!1))
w($,"dOz","diM",()=>A.ca("\\s*-\\s*$",!0,!1,!1))
w($,"dOu","diK",()=>A.ca("\\((\\d+)\\)\\s*$",!0,!1,!1))
w($,"dOt","diJ",()=>A.ca("^(\\d+)\\s*-",!0,!1,!1))})()};
(a=>{a["spdyAp42XJUVN3yw7MgB/R0qcw4="]=a.current})($__dart_deferred_initializers__);