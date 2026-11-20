((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,B={
dlQ(){return new B.C_(null)},
C_:function C_(d){this.a=d},
a7F:function a7F(d){var _=this
_.d=!1
_.f=_.e=null
_.r=d
_.w=!1
_.x=""
_.c=_.a=_.ch=_.ay=_.z=_.y=null},
c_O:function c_O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c_L:function c_L(d){this.a=d},
c_M:function c_M(d,e){this.a=d
this.b=e},
c_N:function c_N(d,e){this.a=d
this.b=e},
c_X:function c_X(){},
c_V:function c_V(d){this.a=d},
c_W:function c_W(d){this.a=d},
c_Z:function c_Z(d){this.a=d},
c0_:function c0_(d){this.a=d},
c_Y:function c_Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c00:function c00(d,e){this.a=d
this.b=e},
c01:function c01(d,e){this.a=d
this.b=e},
c_U:function c_U(d,e,f){this.a=d
this.b=e
this.c=f},
c_T:function c_T(d,e,f){this.a=d
this.b=e
this.c=f},
c_Q:function c_Q(d,e){this.a=d
this.b=e},
c_P:function c_P(d,e){this.a=d
this.b=e},
c_R:function c_R(d){this.a=d},
c_S:function c_S(d,e){this.a=d
this.b=e},
a5w:function a5w(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAF:function aAF(){this.d=!1
this.c=this.a=null},
bEx:function bEx(d){this.a=d},
bEw:function bEw(d){this.a=d},
aAG:function aAG(d,e,f){this.c=d
this.d=e
this.a=f},
WR(d){var w=0,v=A.l(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$WR=A.h(function(a0,a1){if(a0===1)return A.i(a1,v)
for(;;)switch(w){case 0:if(d==null){w=1
break}w=3
return A.c(A.xM("vw_edificio_resumo"),$async$WR)
case 3:t=a1
w=4
return A.c(A.xM("vw_edificio_top_av_za_pc"),$async$WR)
case 4:s=a1
r=new B.aYE()
q=new A.D(Date.now(),0,!1)
p=C.h.D(C.f.j(A.H(q)),4,"0")+"-"+C.h.D(C.f.j(A.J(q)),2,"0")+"-"+C.h.D(C.f.j(A.a0(q)),2,"0")
o=A.a([],x.t)
for(q=x.N,n=x.z,m=J.I(t),l=0;l<6;++l){k=D.bFT[l]
j=k==="rl"?t:s
i=r.$2(j,k+"_pct_top0")
h=r.$2(j,k+"_pct_top1")
g=r.$2(j,k+"_pct_top2")
f=r.$2(j,k+"_pct_top0_ou_top2")
if(i==null&&h==null&&g==null)continue
e=A.ao(m.h(t,"n_"+k))
e=e==null?null:C.i.C(e)
o.push(A.Z(["num_loja",d,"data",p,"corredor",k.toUpperCase(),"n_linhas",e,"pct_top0",i,"pct_top1",h,"pct_top2",g,"pct_top0_ou_top2",f,"capturado_em",new A.D(Date.now(),0,!1).n3().e0()],q,n))}if(o.length===0){w=1
break}q=$.R().b
q===$&&A.b()
w=5
return A.c(q.R("edificio_top_diario").qX(o,"num_loja,data,corredor"),$async$WR)
case 5:case 1:return A.j(u,v)}})
return A.k($async$WR,v)},
aYF(d){var w=0,v=A.l(x.H),u,t,s
var $async$aYF=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:if(d==null){w=1
break}t=$.R().b
t===$&&A.b()
s=x.z
w=3
return A.c(t.bs("edificio_top_seccao_gravar",A.Z(["p_num_loja",d],x.N,s),s),$async$aYF)
case 3:case 1:return A.j(u,v)}})
return A.k($async$aYF,v)},
aYE:function aYE(){},
w6(d,e,f){var w=D.Uj,v=3
return B.dlU(d,e,f,f)},
dlU(d,e,f,g){var w=0,v=A.l(g),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$w6=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=D.Uj
k=3
r=1,o=x.H
case 3:t=7
w=10
return A.c(e.$0(),$async$w6)
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
w=n instanceof A.eS?11:13
break
case 11:q=n
p=q.b==="57014"
if(!p)throw j
if(r>=k)throw A.q(new E.oI("O servidor demorou demasiado "+d+" (tempo esgotado, "+A.n(r)+" tentativas). Tenta outra vez daqui a pouco."))
n=r
w=14
return A.c(A.dP(new A.c7(C.i.ac(l.a*n)),null,o),$async$w6)
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
return A.k($async$w6,v)},
b4p(d,e,f){return B.dlY(d,e,f)},
dlY(d,e,f){var w=0,v=A.l(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b4p=A.h(function(g,h){if(g===1)return A.i(h,v)
for(;;)switch(w){case 0:k={}
j=$.R().b
j===$&&A.b()
t=J.I(d)
s=t.gt(d)
r=A.a([],x.G)
for(q=0;q<s;q=p){p=q+500
r.push(t.dF(d,q,p<s?p:s))}o=r.length
if(o===0){w=1
break}n=k.a=k.b=0
m=new B.b4q(k,r,e,j,f,null,s)
if(4<o)o=4
l=J.h0(o,x.x)
for(;n<o;++n)l[n]=m.$0()
w=3
return A.c(A.f3(l,x.H),$async$b4p)
case 3:case 1:return A.j(u,v)}})
return A.k($async$b4p,v)},
C0(d,e,f){return B.dlX(d,e,f)},
dlX(d,e,f){var w=0,v=A.l(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$C0=A.h(function(a0,a1){if(a0===1){s.push(a1)
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
return A.c(k.dh(0,A.Z(["profile_id",p,"tabela",d.c,"ficheiro_nome",e,"ficheiro_tamanho",null,"ficheiro_modificado_em",null,"linhas",o,"periodo_inicio",d.f,"periodo_fim",d.r,"avisos",n,"importado_por",l,"num_loja",f],x.N,x.X)),$async$C0)
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
return A.c(B.w6("ao registar o resumo do hist\xf3rico",new B.b4m(r,f,d),x.H),$async$C0)
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
return A.c(B.w6("ao registar o resumo dos edif\xedcios",new B.b4n(f),x.H),$async$C0)
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
return A.c(B.WR(f),$async$C0)
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
return A.c(B.aYF(f),$async$C0)
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
return A.c(B.b4i(f),$async$C0)
case 26:l=a1
u=l==null?q:l
w=1
break
case 10:u=q
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$C0,v)},
b4i(d){return B.dlR(d)},
dlR(d){var w=0,v=A.l(x.T),u,t=2,s=[],r,q,p,o,n
var $async$b4i=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(B.brD(d),$async$b4i)
case 7:r=f
if(r.a===0&&r.b===0){u=null
w=1
break}q=A.a([],x.s)
if(r.a>0)J.aA(q,""+r.a+" atualizado(s) sozinho(s)")
if(r.b>0)J.aA(q,""+r.b+" para validar")
p=q
q=J.vk(p,", ")
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
return A.k($async$b4i,v)},
b4o(d){var w,v
for(w=0;w<28;++w){v=C.By[w]
if(v.a===d)return v}return null},
Yj(d,e){var w=0,v=A.l(x.F),u,t,s,r,q,p,o,n,m,l,k,j
var $async$Yj=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:j=B.b4o(d.a)
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
if(A.n(m==null?"":m).length!==0)s.E(0,A.n(n.h(o,"num_loja")))}if(s.a===0)throw A.q(D.b_x)
s=A.dB(s,s.r,s.$ti.c),q=x.z,n=s.$ti.c
case 5:if(!s.n()){w=6
break}m=s.d
w=7
return A.c(B.w6("ao apagar as linhas anteriores",new B.b4j(d,m==null?n.a(m):m),q),$async$Yj)
case 7:w=5
break
case 6:u=r
w=1
break
case 4:if(s)throw A.q(D.Xw)
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
return A.c(B.w6("ao apagar as linhas anteriores (zona "+n+")",new B.b4k(d,t,n),r),$async$Yj)
case 13:w=11
break
case 12:w=9
break
case 10:w=14
return A.c(B.w6("ao apagar as linhas anteriores",new B.b4l(d,t),x.z),$async$Yj)
case 14:case 9:u=B.cVg(d.e,t)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$Yj,v)},
dlS(d,e){var w,v=B.b4o(d.a)
if(v==null||!v.ay)return d.e
w=e==null?d.y:e
if(w==null)throw A.q(D.Xw)
return B.cVg(d.e,w)},
dlZ(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="), n\xe3o da tua loja ("
if(f==null)return o
w=B.b4o(d.a)
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
q=r.i("a9<z.E>")
p=A.dj(new A.a9(new A.de(new A.a2(u,new B.b4t(t),A.U(u).i("a2<1,d?>")),r),new B.b4u(s),q),q.i("z.E"))
if(p.a===0)return o
return"Este ficheiro tem dados de outra loja ("+p.aW(0,", ")+n+s+")."},
cVg(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=d.length,v=x.N,u=x.z,t=0;t<d.length;d.length===w||(0,A.t)(d),++t){s=d[t]
r=A.yI(null,null,v,u)
r.u(0,s)
r.k(0,"num_loja",e)
q.push(r)}return q},
dlT(d,e){var w,v=e==null?null:e.db
if(v==null)return d
w=v.$1(d)
if(J.bi(w))throw A.q(D.b_B)
return w},
dlV(d,e){var w,v,u,t,s,r,q,p,o,n,m=$.dd1().hO(e)
if(m==null)return d
w=m.b[1]
w.toString
v=A.ec(w,null)
if(v<1||v>53)return d
u=A.ab(A.H(new A.D(Date.now(),0,!1)),1,4,0,0,0,0,0)
t=u.av(0-A.c8(A.cL(u)-1,0,0,0,0,0).a).av(A.c8((v-1)*7,0,0,0,0,0).a)
s=A.ab(A.H(t),A.J(t),A.a0(t),0,0,0,0,0).e0()
w=A.a([],x.t)
for(r=J.X(d),q=x.N,p=x.z;r.n();){o=r.gv(r)
n=A.yI(null,null,q,p)
n.u(0,o)
n.k(0,"importado_em",s)
w.push(n)}return w},
yz(d,e,f,g,h){return B.dlW(d,e,f,g,h)},
dlW(b6,b7,b8,b9,c0){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$yz=A.h(function(c1,c2){if(c1===1){s.push(c2)
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
return A.c(r.rZ(),$async$yz)
case 10:q=c2
w=11
return A.c(A.dP(D.aLN,null,e),$async$yz)
case 11:w=12
return A.c(A.aPP(B.dBT(),q,null,d,a0),$async$yz)
case 12:p=c2
a2=J.X(p)
case 13:if(!a2.n()){w=14
break}o=a2.gv(a2)
n=J.aw(p)>1?r.b+" ("+o.b+")":r.b
t=16
m=B.dlZ(o,b7,b8)
if(m!=null){J.aA(b3,A.n(n)+": "+m)
w=13
break}l=B.b4o(o.a)
k=b8
a3=l
if(a3==null)a3=null
else a3=a3.z==null&&!a3.as
w=a3===!0&&f?19:20
break
case 19:w=21
return A.c(c0.$2(o,n),$async$yz)
case 21:k=c2
if(k==null){J.aA(b3,A.n(n)+": sem loja escolhida \u2014 ignorado.")
w=13
break}case 20:a3=l
if(a3==null)a3=null
else a3=a3.z==null&&!a3.as
w=a3===!0&&k!=null?22:24
break
case 22:a4=B.cVg(o.e,k)
w=23
break
case 24:a3=l
w=(a3==null?null:a3.ay)===!0?25:27
break
case 25:c2=B.dlS(o,b8)
w=26
break
case 27:w=28
return A.c(B.Yj(o,b8),$async$yz)
case 28:case 26:a4=c2
case 23:j=a4
a3=l
if((a3==null?null:a3.cy)===!0)j=B.dlV(j,r.b)
j=B.dlT(j,l)
a3=j
a5=o.c
w=29
return A.c(B.b4p(a3,o.d,a5),$async$yz)
case 29:a5=r.b
a3=k
if(a3==null)a3=o.y
w=30
return A.c(B.C0(o,a5,a3),$async$yz)
case 30:i=c2;++b0
a3=A.n(n)
a5=o.b
a6=J.aw(j)
a7=B.dCM(o)
a8=i==null?"":"\n"+i
J.aA(b2,a3+" \u2014 "+a5+" ("+a6+" registos)"+a7+a8)
t=7
w=18
break
case 16:t=15
b4=s.pop()
h=A.P(b4)
J.aA(b3,A.n(n)+": "+A.n(h))
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
J.aA(b3,r.b+": "+A.n(g))
w=9
break
case 6:w=2
break
case 9:case 4:++a1
w=3
break
case 5:b9.$3(b1.gt(b6),b1.gt(b6),"")
u=new B.amI(b2,b3)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$yz,v)},
cMR(d){return B.dyk(d)},
dyk(d){var w=0,v=A.l(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$cMR=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=E.d93(d)
if(m.gQQ().a===0)throw A.q(D.b_C)
r=A.a([],x.i)
o=m.gQQ(),o=new A.bM(o,o.r,o.e,A.w(o).i("bM<2>"))
case 3:if(!o.n()){w=4
break}q=o.d.gaF1(0)
p=B.dwi(q)
if(p==null){w=3
break}t=6
k=J
j=r
w=9
return A.c(B.cMS(q,p),$async$cMR)
case 9:k.aA(j,f)
t=2
w=8
break
case 6:t=5
l=s.pop()
if(!(A.P(l) instanceof E.oI))throw l
w=8
break
case 5:w=2
break
case 8:w=3
break
case 4:if(J.aw(r)===0)throw A.q(D.b_y)
u=r
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$cMR,v)},
cMS(c4,c5){var w=0,v=A.l(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cMS=A.h(function(c6,c7){if(c6===1)return A.i(c7,v)
for(;;)switch(w){case 0:c2=c5.d
c3=c2+1
if(c4.length<=c3)throw A.q(D.b_z)
if(c5.y!=null){t=c4[1]
s=B.cYy(B.L4(1<t.length?t[1]:null))
t=c4[1]
r=B.cYy(B.L4(3<t.length?t[3]:null))}else{s=null
r=null}q=A.a([],x.s)
t=x.N
p=A.v(t,x.P)
o=A.a([],x.t)
n=x.z
m=A.v(t,n)
for(l=c5.ch,k=null,j=null,i=null,h=0;h<c2;++h){g=c4[h]
f=B.L4(0<g.length?g[0]:null)
if(typeof f!="string")continue
if(l)i=i==null?B.d9_(f):i
if(A.kJ(f,"storeName2",0)){e=$.d_D().hO(f)
if(e!=null){g=e.b
d=g[1]
d.toString
k=C.h.X(d)
g=g[2]
g.toString
j="ST"+g}}else if(A.kJ(f,"magasin",0)){e=$.d_B().hO(f)
if(e!=null){g=e.b
d=g[1]
d.toString
j="ST"+C.h.D(d,3,"0")
g=g[2]
g.toString
k=C.h.X(g)}}else if(A.kJ(f,"lojaFinal",0)){e=$.d_C().hO(f)
if(e!=null){g=e.b
d=g[1]
d.toString
j="ST"+C.h.D(d,3,"0")
g=g[2]
g.toString
k=C.h.X(g)}}}c2=c5.w,g=A.U(c2).i("a2<1,d>"),d=c2.length!==0,a0=c5.r,a1=a0!=null,a2=r!=null,a3=s!=null,a4=c5.x,a5=a4.length,a6=c5.e,a7=a6.length,a8=c5.CW,a9=a8!=null,b0=x.H,h=c3
case 3:if(!(h<c4.length)){w=5
break}w=C.f.a0(h-c3,500)===0?6:7
break
case 6:w=8
return A.c(A.dP(C.ba,null,b0),$async$cMS)
case 8:case 7:b1=c4[h]
if(B.dyH(b1,a7)){w=4
break}if(a9)if(B.aPr(B.L4(0<b1.length?b1[0]:null))===a8){w=4
break}f=B.L4(0<b1.length?b1[0]:null)
b2=typeof f=="string"
if(b2&&l)i=i==null?B.d9_(f):i
if(b2)b3=A.kJ(f,"storeName2",0)
else b3=!1
if(b3){e=$.d_D().hO(f)
if(e!=null){b2=e.b
b3=b2[1]
b3.toString
k=C.h.X(b3)
b2=b2[2]
b2.toString
j="ST"+b2}w=4
break}if(b2)b3=A.kJ(f,"magasin",0)
else b3=!1
if(b3){e=$.d_B().hO(f)
if(e!=null){b2=e.b
b3=b2[1]
b3.toString
j="ST"+C.h.D(b3,3,"0")
b2=b2[2]
b2.toString
k=C.h.X(b2)}w=4
break}if(b2)b3=A.kJ(f,"lojaFinal",0)
else b3=!1
if(b3){e=$.d_C().hO(f)
if(e!=null){b2=e.b
b3=b2[1]
b3.toString
j="ST"+C.h.D(b3,3,"0")
b2=b2[2]
b2.toString
k=C.h.X(b2)}w=4
break}if(b2)b2=A.kJ(f,"Filtros aplicados",0)
else b2=!1
if(b2){w=4
break}b4=A.v(t,n)
for(b5=0;b5<a7;++b5){b6=a6[b5]
b7=b6.a
if(b7==null)continue
b4.k(0,b7,B.dw_(B.L4(b5<b1.length?b1[b5]:null),b6.b))}for(b8=0;b8<a5;++b8){b7=a4[b8]
if(b4.h(0,b7)==null||J.r(b4.h(0,b7),""))b4.k(0,b7,m.h(0,b7))
else m.k(0,b7,b4.h(0,b7))}if(a3)b4.k(0,"periodo_inicio",s)
if(a2)b4.k(0,"periodo_fim",r)
if(C.e.bq(c2,new B.cMT(b4))){w=4
break}b9=!a1||a0.length===0
if(!d||b9){o.push(b4)
w=4
break}c0=new A.a2(c2,new B.cMU(b4),g).aW(0,"||")
if(p.ap(0,c0))q.push("Linha "+(h+1)+": registo repetido \u2014 fica a \xfaltima vers\xe3o.")
p.k(0,c0,b4)
case 4:++h
w=3
break
case 5:if(p.a===0)c1=o
else{c2=p.$ti.i("ba<2>")
c2=A.F(new A.ba(p,c2),c2.i("z.E"))
c2.$flags=1
c1=c2}if(c1.length===0)throw A.q(D.b_D)
u=new B.wu(c5.a,c5.b,c5.c,a0,c1,s,r,q,k,j,i)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$cMS,v)},
dCM(d){var w,v=d.z
if(v==null)return""
w=v.split("-")
return w.length===3?" \xb7 dia "+w[2]+"/"+w[1]+"/"+w[0]:""},
d9_(d){var w,v,u,t,s,r,q,p=null,o=$.dfD().hO(d)
if(o==null)return p
w=o.b
v=w[3]
v.toString
v=A.ec(v,p)
u=w[2]
u.toString
u=A.ec(u,p)
t=w[1]
t.toString
s=A.ab(v,u,A.ec(t,p),0,0,0,0,0)
if(w[4]!=null){v=w[6]
v.toString
v=A.ec(v,p)
u=w[5]
u.toString
u=A.ec(u,p)
w=w[4]
w.toString
r=A.ab(v,u,A.ec(w,p)-1,0,0,0,0,0)
q=!r.e1(s)?r:s}else q=s
return C.h.D(C.f.j(A.H(q)),4,"0")+"-"+C.h.D(C.f.j(A.J(q)),2,"0")+"-"+C.h.D(C.f.j(A.a0(q)),2,"0")},
dwi(d){var w,v,u,t,s,r,q
for(w=x.s,v=0;v<28;++v){u=C.By[v]
t=u.d
if(t>=d.length)continue
s=d[t]
t=A.a([],w)
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)t.push(B.dy9(B.L4(s[q])))
if(C.e.f8(u.f,new B.cKq(t)))return u}return null},
dyH(d,e){var w,v=d.length
if(e<v)v=e
for(w=0;w<v;++w)if(B.L4(d[w])!=null)return!1
return!0},
L4(d){var w,v=d==null?null:d.b
if(v==null)return null
if(v instanceof F.nQ){w=v.a.j(0)
return C.h.X(w)==="#"?null:w}if(v instanceof F.nr)return v.a
if(v instanceof F.oy)return v.a
if(v instanceof F.qR)return v.a
if(v instanceof F.pz)return A.ab(v.a,v.b,v.c,0,0,0,0,0)
if(v instanceof F.pA)return A.ab(v.a,v.b,v.c,v.d,v.e,v.f,v.r,v.w)
if(v instanceof F.p0)return v.axR()
if(v instanceof F.oE)return v.a
return v.j(0)},
dw_(d,e){var w,v,u,t=null
if(d==null)return t
switch(e.a){case 0:w=B.aPr(d)
return w==null||w.length===0?t:w
case 1:return B.cIz(d)
case 2:v=B.cIz(d)
return v==null?t:C.i.ac(v)
case 3:if(A.pi(d))return d
u=B.cIz(d)
if(u!=null)return u!==0
if(typeof d=="string"){w=C.h.X(d).toLowerCase()
if(w==="sim"||w==="yes"||w==="true")return!0
if(w==="nao"||w==="n\xe3o"||w==="no"||w==="false")return!1
return w.length!==0}return t
case 4:return B.cYy(d)
case 5:return B.dxg(d)
case 6:return B.dwm(d)
case 7:u=B.cIz(d)
return u==null?t:u*100
case 8:return B.dz5(d)
case 9:return B.dyg(d)
case 10:return B.dyJ(d)
case 11:return B.dyf(d)}},
dxg(d){var w,v,u
if(d instanceof A.c7)w=d
else w=d instanceof A.D?A.c8(0,A.cW(d),0,0,A.dd(d),0):null
if(w==null)return null
v=w.a
u=C.f.aj(v,36e8)
v=C.f.aj(v,6e7)
return C.h.D(C.f.j(u%24),2,"0")+":"+C.h.D(C.f.j(v%60),2,"0")},
dwm(d){if(d instanceof A.c7)return C.f.aj(d.a,1000)/6e4
if(d instanceof A.D)return A.cW(d)*60+A.dd(d)
return null},
aPr(d){if(d==null)return null
if(typeof d=="string")return C.h.X(d)
if(typeof d=="number"&&d===C.i.im(d))return C.f.j(C.i.C(d))
if(d instanceof A.D)return d.e0()
return C.h.X(J.dE(d))},
cIz(d){var w,v
if(typeof d=="number")return d
if(typeof d=="string"){w=C.h.X(d)
v=A.ci(w,",",".")
if(v.length===0)return null
return A.cRX(v)}return null},
cYy(d){var w
if(d==null)return null
if(d instanceof A.D)return B.d9p(d)
if(typeof d=="string"){w=A.r2(C.h.X(d))
return w==null?null:B.d9p(w)}return null},
d9p(d){return""+A.H(d)+"-"+C.h.D(C.f.j(A.J(d)),2,"0")+"-"+C.h.D(C.f.j(A.a0(d)),2,"0")},
dz5(d){var w
if(d instanceof A.D)return d.e0()
if(typeof d=="string"){w=A.r2(C.h.X(d))
return w==null?null:w.e0()}return null},
dyJ(d){var w=B.aPr(d)
if(w==null)return null
return C.h.X(C.h.lc(w,$.dfE(),""))},
dyg(d){var w,v,u=B.aPr(d)
if(u==null)return null
w=$.dfC().hO(u)
if(w==null)return null
v=w.b[1]
v.toString
return"ST"+C.h.D(v,3,"0")},
dyf(d){var w,v,u=B.aPr(d)
if(u==null)return null
w=$.dfB().hO(u)
if(w==null)return null
v=w.b[1]
v.toString
return"ST"+C.h.D(v,3,"0")},
dy9(d){var w,v,u,t=d==null?null:J.dE(d)
if(t==null)t=""
w=C.h.X(t.toLowerCase())
for(v=0;v<23;++v){t="\xe1\xe0\xe2\xe3\xe4\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf3\xf2\xf4\xf5\xf6\xfa\xf9\xfb\xfc\xe7"[v]
u="aaaaaeeeeiiiiooooouuuuc"[v]
w=A.ci(w,t,u)}return w},
b4q:function b4q(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
b4r:function b4r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4s:function b4s(d,e,f){this.a=d
this.b=e
this.c=f},
b4m:function b4m(d,e,f){this.a=d
this.b=e
this.c=f},
b4n:function b4n(d){this.a=d},
b4j:function b4j(d,e){this.a=d
this.b=e},
b4k:function b4k(d,e,f){this.a=d
this.b=e
this.c=f},
b4l:function b4l(d,e){this.a=d
this.b=e},
b4t:function b4t(d){this.a=d},
b4u:function b4u(d){this.a=d},
amI:function amI(d,e){this.b=d
this.c=e},
wu:function wu(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cMT:function cMT(d){this.a=d},
cMU:function cMU(d){this.a=d},
cKq:function cKq(d){this.a=d},
cKp:function cKp(d){this.a=d},
cYU(){var w=0,v=A.l(x.E),u,t,s,r
var $async$cYU=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=b.G
r=s.document.createElement("input")
r.type="file"
r.multiple=!0
r.webkitdirectory=!0
s.document.body.appendChild(r)
s=new A.aX($.bm,x.g)
t=new A.c1(s,x.R)
new A.Ef(r,"change",!1,x.a).gO(0).cS(new B.cQg(r,t),x.H)
r.addEventListener("cancel",A.ib(new B.cQh(r,t)))
r.click()
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$cYU,v)},
cQg:function cQg(d,e){this.a=d
this.b=e},
cQh:function cQh(d,e){this.a=d
this.b=e},
NE(d,e,f){return B.dlx(d,e,f)},
dlx(d,e,f){var w=0,v=A.l(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$NE=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:k=D.c3x.h(0,d)
if(k==null){w=1
break}w=3
return A.c(A.xM(k),$async$NE)
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
q=A.e4(r,o,n)
J.bA(q,"data_referencia",e)
w=10
return A.c(m.dh(0,q),$async$NE)
case 10:w=1
break
t=2
w=9
break
case 7:t=6
j=s.pop()
if(!(A.P(j) instanceof A.eS))throw j
w=9
break
case 6:w=2
break
case 9:case 5:q=$.R().b
q===$&&A.b()
w=11
return A.c(q.R("metricas_historico").dh(0,r),$async$NE)
case 11:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$NE,v)},
brD(d){var w=0,v=A.l(x.O),u,t,s,r,q,p
var $async$brD=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=$.R().b
q===$&&A.b()
t=x.z
p=x.j
w=3
return A.c(q.bs("sscc_gerar_acertos",A.Z(["p_num_loja",d],x.N,t),t),$async$brD)
case 3:s=p.a(f)
q=J.I(s)
if(q.ga2(s)){u=D.cee
w=1
break}r=x.P.a(q.gO(s))
q=J.I(r)
t=A.ao(q.h(r,"aplicados"))
t=t==null?null:C.i.C(t)
if(t==null)t=0
q=A.ao(q.h(r,"propostos"))
q=q==null?null:C.i.C(q)
u=new A.a9w(t,q==null?0:q)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$brD,v)}},D,E,G
J=c[1]
A=c[0]
C=c[2]
F=c[6]
B=a.updateHolder(c[3],B)
D=c[12]
E=c[9]
G=c[13]
B.C_.prototype={
a_(){return new B.a7F(C.nA)}}
B.a7F.prototype={
a4(){this.af()
this.Kt()},
Kt(){var w=0,v=A.l(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Kt=A.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n={}
w=7
return A.c(A.P4(),$async$Kt)
case 7:q=e
if(q==null){w=1
break}w=8
return A.c(A.rD(),$async$Kt)
case 8:p=e
if(r.c==null){w=1
break}n.a=null
for(m=J.X(p);m.n();){o=m.gv(m)
if(o.b===q.r){n.a=o.a
break}}r.p(new B.c_O(n,r,q,p))
r.Eu()
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
return A.k($async$Kt,v)},
Eu(){var w=0,v=A.l(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$Eu=A.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:r.p(new B.c_L(r))
t=4
w=7
return A.c(A.aPX(r.e),$async$Eu)
case 7:q=e
if(r.c==null){w=1
break}r.p(new B.c_M(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=A.P(n)
if(r.c==null){w=1
break}r.p(new B.c_N(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$Eu,v)},
EY(){var w=0,v=A.l(x.H),u=this,t,s
var $async$EY=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.c(A.aD(null,null,!0,null,new B.c_X(),s,null,!0,x.N),$async$EY)
case 2:t=e
w=t==="ficheiros"?3:5
break
case 3:w=6
return A.c(u.M5(),$async$EY)
case 6:w=4
break
case 5:w=t==="pasta"?7:8
break
case 7:w=9
return A.c(u.M4(),$async$EY)
case 9:case 8:case 4:return A.j(null,v)}})
return A.k($async$EY,v)},
M5(){var w=0,v=A.l(x.H),u,t=this,s,r
var $async$M5=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:s=A.a([C.jL],x.D)
w=3
return A.c($.cZK().D5(s,null,null),$async$M5)
case 3:r=e
if(J.bi(r)){w=1
break}w=4
return A.c(t.M3(r),$async$M5)
case 4:case 1:return A.j(u,v)}})
return A.k($async$M5,v)},
M4(){var w=0,v=A.l(x.H),u,t=this,s
var $async$M4=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(B.cYU(),$async$M4)
case 3:s=e
if(J.bi(s)){w=1
break}w=4
return A.c(t.M3(s),$async$M4)
case 4:case 1:return A.j(u,v)}})
return A.k($async$M4,v)},
M3(d){return this.baw(d)},
baw(d){var w=0,v=A.l(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$M3=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:r.p(new B.c_Z(r))
t=4
o=r.e
n=r.f
m=r.d?r.gb1B():null
w=7
return A.c(B.yz(d,n,o,new B.c0_(r),m),$async$M3)
case 7:q=f
if(r.c==null){w=1
break}r.p(new B.c00(r,q))
if(q.b.length!==0)r.Eu()
t=2
w=6
break
case 4:t=3
k=s.pop()
p=A.P(k)
if(r.c==null){w=1
break}r.p(new B.c01(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$M3,v)},
b1C(d,e){var w,v=null,u={}
u.a=null
w=this.c
w.toString
return A.aD(v,v,!1,v,new B.c_U(u,this,e),w,v,!0,x.N)},
G(d){var w=this,v=null,u=A.B(d),t=u.ok,s=A.f("Importar v\xe1rios ficheiros",v,v,v,v,t.w,v,v,v),r=w.ay,q=w.ch,p=w.w,o=p?v:w.gb1G(),n=p?C.m0:D.aWw,m=x.p
o=A.a([s,C.O,new B.a5w(r,q,w.gaVu(),v),C.O,A.jF(n,A.f(p?"A importar\u2026":"Escolher ficheiros ou pasta",v,v,v,v,v,v,v,v),o,v)],m)
if(w.w&&w.x.length!==0){t=t.Q
s=A.a([C.U,A.f(w.x,v,v,v,v,t,v,v,v)],m)
if(t==null)t=v
else{r=u.ax
q=r.rx
t=t.a5(q==null?r.k3:q)}s.push(new A.E(C.hr,A.f("Ficheiros grandes (dezenas de milhares de linhas) s\xe3o lidos no pr\xf3prio browser e podem deixar o separador sem resposta durante um ou dois minutos. Se aparecer \xabEsta p\xe1gina n\xe3o est\xe1 a responder\xbb, escolhe \xabEsperar\xbb. Na app Windows/Android n\xe3o acontece.",v,v,v,v,t,v,v,v),v))
C.e.u(o,s)}if(!w.w&&w.y!=null){t=w.y
t.toString
s=w.z
s.toString
C.e.u(o,A.a([C.O,new B.aAG(t,s,v)],m))}return A.bI(new A.dK(G.Sc,A.cs(A.K(A.a([A.K(o,C.ak,C.o,C.q,0,C.u)],m),C.ak,C.o,C.J,0,C.u),v,C.F,C.ci,v,v,C.aq),v),v,v)}}
B.a5w.prototype={
a_(){return new B.aAF()}}
B.aAF.prototype={
G(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.B(d),i=l.a,h=i.c,g=h==null,f=g?k:h.a,e=i.d
i=f==null
if(i)w=D.bVY
else{v=A.a([],x.n)
for(u=0;u<28;++u){t=C.By[u]
if(f.ap(0,t.a))v.push(t)}w=v}s=l.d?C.By:w
v=j.ax
r=v.RG
if(r==null)r=v.k2
q=A.aP(12)
p=g?"J\xe1 importado hoje":"Uploads hoje: "+h.gqV(0)+" ("+w.length+" de 28 formatos)"
o=j.ok
n=o.z
m=x.p
n=A.a([A.a_(A.f(p,k,k,k,k,n==null?k:n.c0(C.bH),k,k,k),1)],m)
if(g&&e==null)n.push(C.P8)
g=A.a([A.Q(n,C.t,C.o,C.q,0,k,k),C.U],m)
if(e!=null){i=v.fy
v=A.aM(C.B,i,k,16)
o=o.Q
i=o==null?k:o.a5(i)
g.push(new A.E(C.hq,A.Q(A.a([v,C.ab,A.a_(A.f("N\xe3o foi poss\xedvel carregar: "+e,k,k,k,k,i,k,k,k),1),A.ay(!1,G.ap1,k,k,!0,k,k,l.a.e,k,k)],m),C.A,C.o,C.q,0,k,k),k))}else{p=A.a([],m)
if(!i&&s.length===0){o=o.Q
if(o==null)v=k
else{n=v.rx
v=o.a5(n==null?v.k3:n)}p.push(new A.E(C.eo,A.f("Ainda nada importado hoje.",k,k,k,k,v,k,k,k),k))}for(v=s.length,u=0;u<s.length;s.length===v||(0,A.t)(s),++u){t=s[u]
o=i?k:f.h(0,t.a)
p.push(l.bav(j,t.b,o))}i=l.d
v=A.aM(i?C.no:D.aUI,k,k,18)
p.push(new A.dk(C.bj,k,k,A.hf(v,A.f(i?"Mostrar s\xf3 os importados hoje":"Mostrar todos os formatos (28)",k,k,k,k,k,k,k,k),new B.bEx(l),k),k))
C.e.u(g,p)}return A.aT(k,A.K(g,C.A,C.o,C.q,0,C.u),C.E,k,k,new A.b3(r,k,k,q,k,k,C.ao),k,k,k,k,C.cC,k,k,k)},
bav(d,e,f){var w,v,u,t,s,r,q=null,p=f!=null&&J.cT(f),o=d.ax
if(p)w=o.b
else{v=o.rx
w=v==null?o.k3:v}o=p?C.hQ:G.Wh
o=A.aM(o,p?w:w.aV(0.5),q,16)
v=d.ok.Q
u=v==null
if(u)t=q
else t=v.a5(p?q:w)
t=A.a([o,C.ab,A.a_(A.f(e,q,q,q,q,t,q,q,q),1)],x.p)
if(p){o=A.a([],x.s)
for(s=J.X(f);s.n();){r=s.gv(s)
o.push(C.h.D(C.f.j(A.cW(r)),2,"0")+":"+C.h.D(C.f.j(A.dd(r)),2,"0"))}o=C.e.aW(o," \xb7 ")
t.push(A.f(o,q,q,q,q,u?q:v.a5(w),C.m8,q,q))}return new A.E(C.il,A.Q(t,C.t,C.o,C.q,0,q,q),q)}}
B.aAG.prototype={
G(d){var w,v,u,t,s,r,q,p,o=null,n=A.B(d),m=this.c,l=m.length,k=this.d,j=k.length,i=n.ax,h=i.RG
if(h==null)h=i.k2
w=A.aP(12)
v=j===0?"":", "+j+" com erro"
u=n.ok
t=u.z
t=t==null?o:t.c0(C.bH)
s=x.p
t=A.a([A.f(""+l+" de "+(l+j)+" importado(s) com sucesso"+v+".",o,o,o,o,t,o,o,o),C.U],s)
for(l=m.length,j=i.b,u=u.Q,r=0;r<m.length;m.length===l||(0,A.t)(m),++r){q=m[r]
t.push(new A.E(C.il,A.Q(A.a([A.aM(C.hQ,j,o,18),C.ab,new A.bY(1,C.au,A.f(q,o,o,o,o,u,o,o,o),o)],s),C.A,C.o,C.q,0,o,o),o))}for(m=k.length,i=i.fy,r=0;r<k.length;k.length===m||(0,A.t)(k),++r){p=k[r]
t.push(new A.E(C.il,A.Q(A.a([A.aM(C.VR,i,o,18),C.ab,new A.bY(1,C.au,A.f(p,o,o,o,o,u,o,o,o),o)],s),C.A,C.o,C.q,0,o,o),o))}return A.aT(o,A.K(t,C.A,C.o,C.q,0,C.u),C.E,o,o,new A.b3(h,o,o,w,o,o,C.ao),o,o,o,o,C.cC,o,o,o)}}
B.amI.prototype={}
B.wu.prototype={}
var z=a.updateTypes(["ak<~>()","ak<d?>(wu,d)","ak<A<wu>>(eT)"])
B.c_O.prototype={
$0(){var w=this,v=w.b,u=w.c
v.d=A.a3(u.e)===C.w
v.e=u.r
v.r=w.d
v.f=w.a.a},
$S:0}
B.c_L.prototype={
$0(){return this.a.ch=null},
$S:0}
B.c_M.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.c_N.prototype={
$0(){return this.a.ch=A.n(this.b)},
$S:0}
B.c_X.prototype={
$1(d){return A.Q2(A.a([A.bqw(D.ctm,new B.c_V(d)),A.bqw(D.ctR,new B.c_W(d))],x.p),D.ct7)},
$S:132}
B.c_V.prototype={
$0(){return A.S(this.a,!1).V("ficheiros")},
$S:0}
B.c_W.prototype={
$0(){return A.S(this.a,!1).V("pasta")},
$S:0}
B.c_Z.prototype={
$0(){var w=this.a
w.w=!0
w.x=""
w.z=w.y=null},
$S:0}
B.c0_.prototype={
$3(d,e,f){var w=this.a
if(w.c==null)return
w.p(new B.c_Y(w,f,d,e))},
$S:1604}
B.c_Y.prototype={
$0(){var w=this,v=w.b
v=v.length===0?"Conclu\xeddo.":'A importar "'+v+'" ('+w.c+"/"+w.d+")\u2026"
w.a.x=v},
$S:0}
B.c00.prototype={
$0(){var w,v=this.a
v.w=!1
w=this.b
v.y=w.b
v.z=w.c},
$S:0}
B.c01.prototype={
$0(){var w=this.a
w.w=!1
w.y=C.C
w.z=A.a(["Erro ao importar: "+A.n(this.b)],x.s)},
$S:0}
B.c_U.prototype={
$1(d){return new A.dz(new B.c_T(this.a,this.b,this.c),null)},
$S:10}
B.c_T.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=A.B(d).ok.Q
if(o==null)o=p
else{w=A.B(d).ax
v=w.rx
o=o.a5(v==null?w.k3:v)}o=A.f(this.c,p,p,p,p,o,p,p,p)
w=this.a
v=w.a
u=A.a([],x.I)
for(t=J.X(this.b.r),s=x.r;t.n();){r=t.gv(t)
q=r.b
u.push(new A.bf(q,A.f(q+" \u2014 "+r.a,p,p,p,p,p,p,p,p),C.ap,p,s))}t=x.p
u=A.K(A.a([o,C.O,new A.V(p,44,new A.cg(v,p,u,new B.c_Q(w,e),C.xJ,p,!0,p,x.B),p)],t),C.A,C.o,C.J,0,C.u)
v=A.ay(!1,D.cwv,p,p,!0,p,p,new B.c_R(d),p,p)
return A.aN(A.a([v,A.b7(C.vc,w.a==null?p:new B.c_S(w,d),p)],t),p,p,u,p,p,p,D.csw)},
$S:13}
B.c_Q.prototype={
$1(d){return this.b.$1(new B.c_P(this.a,d))},
$S:7}
B.c_P.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.c_R.prototype={
$0(){return A.S(this.a,!1).bb()},
$S:0}
B.c_S.prototype={
$0(){return A.S(this.b,!1).V(this.a.a)},
$S:0}
B.bEx.prototype={
$0(){var w=this.a
return w.p(new B.bEw(w))},
$S:0}
B.bEw.prototype={
$0(){var w=this.a
return w.d=!w.d},
$S:0}
B.aYE.prototype={
$2(d,e){var w=A.ao(J.p(d,e))
return w==null?null:w},
$S:1605}
B.b4q.prototype={
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
return A.c(B.w6(h,new B.b4r(r,q,i,o),p),$async$$0)
case 8:w=6
break
case 7:w=9
return A.c(B.w6(h,new B.b4s(r,q,i),p),$async$$0)
case 9:case 6:s.b=s.b+i.length
w=3
break
case 4:case 1:return A.j(u,v)}})
return A.k($async$$0,v)},
$S:1}
B.b4r.prototype={
$0(){var w=this
return w.a.R(w.b).qX(w.c,w.d)},
$S:174}
B.b4s.prototype={
$0(){return this.a.R(this.b).dh(0,this.c)},
$S:174}
B.b4m.prototype={
$0(){return B.NE(this.a,this.c.z,this.b)},
$S:1}
B.b4n.prototype={
$0(){return B.NE("edificios",null,this.a)},
$S:1}
B.b4j.prototype={
$0(){var w=$.R().b
w===$&&A.b()
return w.R(this.a.c).dw(0).U("num_loja",this.b)},
$S:174}
B.b4k.prototype={
$0(){var w=$.R().b
w===$&&A.b()
w=w.R(this.a.c).dw(0).U("num_loja",this.b)
return A.d4(w.c3(w.c4("morada","like."+(this.c+"-%"))),w.$ti.c)},
$S:174}
B.b4l.prototype={
$0(){var w=$.R().b
w===$&&A.b()
return w.R(this.a.c).dw(0).U("num_loja",this.b)},
$S:174}
B.b4t.prototype={
$1(d){return A.a4(J.p(d,this.a))},
$S:512}
B.b4u.prototype={
$1(d){return d!==this.a},
$S:12}
B.cMT.prototype={
$1(d){var w=this.a.h(0,d)
return J.dE(w==null?"":w).length===0},
$S:12}
B.cMU.prototype={
$1(d){var w=this.a.h(0,d)
return A.n(w==null?"":w)},
$S:22}
B.cKq.prototype={
$1(d){return C.e.bq(this.a,new B.cKp(d))},
$S:12}
B.cKp.prototype={
$1(d){return C.h.l(d,this.a)},
$S:12}
B.cQg.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=p.files,n=A.a([],x.S)
if(o!=null)for(w=b.G,v=0;v<o.length;++v){u=o.item(v)
if(u==null)continue
if(!C.h.iy(u.name.toLowerCase(),".xlsx"))continue
t=w.URL.createObjectURL(u)
s=u.name
r=u.type
q=u.size
n.push(A.x3(t,new A.D(A.mH(u.lastModified,0,!1),0,!1),q,r,s))}p.remove()
p=this.b
if((p.a.a&30)===0)p.eL(0,n)},
$S:39}
B.cQh.prototype={
$1(d){var w
this.a.remove()
w=this.b
if((w.a.a&30)===0)w.eL(0,D.bVZ)},
$S:39};(function installTearOffs(){var w=a._instance_0u,v=a._instance_2u,u=a._static_1
var t
w(t=B.a7F.prototype,"gaVu","Eu",0)
w(t,"gb1G","EY",0)
v(t,"gb1B","b1C",1)
u(B,"dBT","cMR",2)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.ac,[B.C_,B.a5w])
w(A.ad,[B.a7F,B.aAF])
w(A.tD,[B.c_O,B.c_L,B.c_M,B.c_N,B.c_V,B.c_W,B.c_Z,B.c_Y,B.c00,B.c01,B.c_P,B.c_R,B.c_S,B.bEx,B.bEw,B.b4q,B.b4r,B.b4s,B.b4m,B.b4n,B.b4j,B.b4k,B.b4l])
w(A.nf,[B.c_X,B.c0_,B.c_U,B.c_Q,B.b4t,B.b4u,B.cMT,B.cMU,B.cKq,B.cKp,B.cQg,B.cQh])
w(A.vD,[B.c_T,B.aYE])
v(B.aAG,A.az)
w(A.aa,[B.amI,B.wu])})()
A.ED(b.typeUniverse,JSON.parse('{"a5w":{"ac":[],"o":[]},"C_":{"ac":[],"o":[]},"a7F":{"ad":["C_"]},"aAF":{"ad":["a5w"]},"aAG":{"az":[],"o":[]}}'))
var y={c:'N\xe3o foi poss\xedvel identificar a loja deste ficheiro (rodap\xe9 "Filtros aplicados" em falta) \u2014 exporta-o de novo.'}
var x=(function rtii(){var w=A.aq
return{r:w("bf<d>"),x:w("ak<~>"),C:w("amI"),I:w("x<bf<d>>"),n:w("x<hb>"),G:w("x<A<a5<d,@>>>"),t:w("x<a5<d,@>>"),i:w("x<wu>"),s:w("x<d>"),p:w("x<o>"),S:w("x<jN>"),D:w("x<A1>"),F:w("A<a5<d,@>>"),e:w("A<wu>"),E:w("A<jN>"),j:w("A<@>"),P:w("a5<d,@>"),K:w("aa"),m:w("wu"),O:w("+aplicados,propostos(e,e)"),B:w("cg<d>"),N:w("d"),J:w("eT"),y:w("de<d>"),R:w("c1<A<jN>>"),a:w("Ef<aR>"),g:w("aX<A<jN>>"),z:w("@"),X:w("aa?"),T:w("d?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Uj=new A.c7(3e6)
D.aLN=new A.c7(8e4)
D.aUI=new A.an(58244,"MaterialIcons",!0)
D.aWw=new A.aW(C.W6,null,null,null,null)
D.b_x=new E.oI("N\xe3o foi poss\xedvel identificar a loja deste ficheiro \u2014 exporta-o de novo.")
D.b_y=new E.oI("Formato n\xe3o reconhecido. Este ficheiro n\xe3o corresponde a nenhum formato conhecido. Verifica se \xe9 o ficheiro certo.")
D.b_z=new E.oI("O ficheiro n\xe3o tem linhas de dados.")
D.b_B=new E.oI("O ficheiro n\xe3o tem linhas reconhec\xedveis para este formato \u2014 exporta-o de novo.")
D.b_C=new E.oI("O ficheiro n\xe3o tem folhas de c\xe1lculo.")
D.b_D=new E.oI("N\xe3o foram encontradas linhas de dados v\xe1lidas.")
D.Xw=new E.oI(y.c)
D.bFT=w(["av","za","rl","pc","ext","eml"],x.s)
D.bVY=w([],x.n)
D.bVZ=w([],x.S)
D.c7d={relex:0,opcom:1,reserva:2,promessa:3,valorizacoes:4,preparar:5,localizacao_oc:6,edificios:7}
D.c3x=new A.al(D.c7d,["vw_param_resumo","vw_opcom_resumo","vw_reserva_resumo","vw_promessa_resumo","vw_valorizacoes_resumo","vw_preparar_resumo","vw_localizacao_oc_resumo","vw_edificio_resumo"],A.aq("al<d,d>"))
D.cee=new A.a9w(0,0)
D.csw=new A.M("De que loja \xe9 este ficheiro?",null,null,null,null,null,null,null,null,null,null)
D.ct7=new A.M("Importar v\xe1rios ficheiros",null,null,null,null,null,null,null,null,null,null)
D.ctm=new A.M("Ficheiros individuais",null,null,null,null,null,null,null,null,null,null)
D.ctR=new A.M("Pasta inteira",null,null,null,null,null,null,null,null,null,null)
D.cwv=new A.M("Ignorar ficheiro",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dGv","dd1",()=>A.cb("sem(\\d{1,2})",!1,!1,!1))
w($,"dLr","d_D",()=>A.cb("storeName2\\s+\xe9\\s+(.+?)\\s*\\((\\d+)\\)",!0,!1,!1))
w($,"dLp","d_B",()=>A.cb("magasin\\s+\xe9\\s+(\\d+)\\s*-\\s*(.+)",!0,!1,!1))
w($,"dLq","d_C",()=>A.cb("lojaFinal\\s+\xe9\\s+(\\d+)\\s*-\\s*(.+?)(?:\\n|$)",!0,!1,!1))
w($,"dLo","dfD",()=>A.cb("Date\\s+\xe9\\s+em\\s+ou\\s+posterior\\s+a\\s+(\\d{2})-(\\d{2})-(\\d{4})(?:\\s+e\\s+\xe9\\s+anterior\\s+a\\s+(\\d{2})-(\\d{2})-(\\d{4}))?",!0,!1,!1))
w($,"dLs","dfE",()=>A.cb("\\s*-\\s*$",!0,!1,!1))
w($,"dLn","dfC",()=>A.cb("\\((\\d+)\\)\\s*$",!0,!1,!1))
w($,"dLm","dfB",()=>A.cb("^(\\d+)\\s*-",!0,!1,!1))})()};
(a=>{a["e9Y6TejslzeCIv/F5ofTVRZeTro="]=a.current})($__dart_deferred_initializers__);