((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C,F,B={
dBq(a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="xl/_rels/workbook.xml.rels",a1="xl/sharedStrings.xml",a2="xl/worksheets/",a3=new C.a54().ac3(a9),a4=y.w,a5=y.v,a6=A.v(a4,a5),a7=A.cb('xmlns:(\\w+)="http://schemas\\.openxmlformats\\.org/spreadsheetml/2006/main"',!0,!1,!1),a8=A.v(a4,a4)
for(x=a3.a,w=y.h,v=new C.t0(x,w),u=w.i("bw<b2.E>"),v=new A.bw(v,v.gt(0),u),t=y.q,s=w.i("b2.E");v.n();){r=v.d
if(r==null)r=s.a(r)
q={}
if(r.a!==a0)continue
p=r.ax
if((p instanceof C.pd?r.ax=p.gkr(0):p)==null)r.mb()
r=a5.a(r.ax)
o=new A.qA(!1).tD(r,0,null,!0)
q.a=1
for(r=A.cb('Id="([^"]+)"',!0,!1,!1).GZ(0,o),r=new A.Rv(r.a,r.b,r.c);r.n();){n=r.d
p=(n==null?t.a(n):n).b[1]
p.toString
m=A.cb("^rId\\d+$",!0,!1,!1)
if(m.b.test(p))continue
a8.c0(0,p,new B.cQ0(q))}}for(x=new C.t0(x,w),u=new A.bw(x,x.gt(0),u),x=a8.$ti.i("hd<1,2>"),l=!1;u.n();){w=u.d
if(w==null)w=s.a(w)
if(!w.r)continue
v=w.ax
if((v instanceof C.pd?w.ax=v.gkr(0):v)==null)w.mb()
k=a5.a(w.ax)
v=J.I(k)
if(v.gt(k)>=3&&v.h(k,0)===239&&v.h(k,1)===187&&v.h(k,2)===191)k=v.jj(k,3)
v=w.a
if(v===a1)l=!0
if(D.h.iz(v,".xml")||D.h.iz(v,".rels")){o=new A.qA(!1).tD(k,0,null,!0)
j=a7.hO(o)
if(j!=null){v=j.b[1]
v.toString
t=A.ci(o,"<"+v+":","<")
t=A.ci(t,"</"+v+":","</")
o=A.ci(t,"xmlns:"+v+"=","xmlns=")}if(D.h.iz(w.a,".rels")){o=A.ci(o,'Target="/xl/','Target="')
if(w.a===a0)v=!A.jV(o,"relationships/sharedStrings",0)
else v=!1
if(v)o=A.dfE(o,"</Relationships>",'<Relationship Id="rIdSharedStringsGerado" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /></Relationships>',0)}if(D.h.bS(w.a,a2)){v=A.cb("<mergeCells\\b[^>]*>.*?</mergeCells>",!0,!0,!1)
o=A.ci(o,v,"")
v=A.cb("<f\\b[^>]*/>|<f\\b[^>]*>.*?</f>",!0,!0,!1)
o=B.dz6(A.ci(o,v,""))}for(v=new A.hd(a8,a8.r,a8.e,x);v.n();){i=v.d
t=i.a
r=i.b
p=A.ci(o,'Id="'+t+'"','Id="'+r+'"')
o=A.ci(p,'r:id="'+t+'"','r:id="'+r+'"')}k=D.cf.cs(o)}a6.k(0,w.a,k)}if(!l)a6.k(0,a1,D.cf.cs('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="0" uniqueCount="0"/>'))
else{h=a6.h(0,a1)
if(h!=null){g=B.dzr(h)
a6.k(0,a1,g.a)
a5=g.b
if(a5!=null){x=a6.$ti.i("aY<1>")
x=A.F(new A.aY(a6,x),x.i("z.E"))
w=x.length
f=0
for(;f<x.length;x.length===w||(0,A.r)(x),++f){e=x[f]
if(!D.h.bS(e,a2))continue
v=a6.h(0,e)
v.toString
a6.k(0,e,B.dBJ(v,a5))}}}}d=new C.Fo(A.a([],y.F),A.v(a4,y.e))
for(a4=new A.b6(a6,a6.$ti.i("b6<1,2>")).gX(0);a4.n();){i=a4.d
a5=i.a
x=i.b
w=J.ar(x)
v=new C.kw(a5,w,D.f.aj(Date.now(),1000),0)
v.JY(a5,w,x,0)
d.BV(0,v)}a4=C.d_k().j4(d)
a4.toString
return new Uint8Array(A.c8(a4))},
dzr(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=null
try{f=C.JI(D.bn.cA(0,d))}catch(x){return new B.abZ(d,g)}w=C.dy(new C.e_(f),"si",g)
v=A.F(w,w.$ti.i("z.E"))
u=new B.cNs()
w=y.e
t=A.v(y.w,w)
s=A.bR(v.length,0,!1,w)
r=A.a([],y.d)
for(q=!1,p=0;p<v.length;++p){o=u.$1(v[p])
n=t.h(0,o)
if(n!=null){s[p]=n
q=!0}else{m=r.length
t.k(0,o,m)
r.push(v[p])
s[p]=m}}if(!q)return new B.abZ(d,g)
w=C.c5("sst",g)
l=A.a([C.dv(C.c5("xmlns",g),"http://schemas.openxmlformats.org/spreadsheetml/2006/main",F.aR),C.dv(C.c5("count",g),""+r.length,F.aR),C.dv(C.c5("uniqueCount",g),""+r.length,F.aR)],y.p)
k=y.r
j=A.a([],k)
for(i=r.length,h=0;h<r.length;r.length===i||(0,A.r)(r),++h)j.push(r[h].lv())
return new B.abZ(D.cf.cs(C.d_i(A.a([C.e0(w,l,j,!0)],k)).IX()),s)},
dBJ(d,e){return D.cf.cs(A.F7(D.bn.cA(0,d),A.cb('(<c\\b[^>]*\\bt="s"[^>]*>\\s*<v>)(\\d+)(</v>)',!0,!1,!1),new B.cQj(e),null))},
dz6(d){var x={}
x.a=x.b=x.c=0
return A.F7(d,$.diO(),new B.cN9(x),null)},
dB0(d){var x,w
for(x="";d>0;){w=d-1
x=A.i3(65+D.f.a0(w,26))+x
d=D.f.aj(w,26)}return x},
dch(d){var x,w,v=B.dBL(d)
try{x=C.cXU(v)
return x}catch(w){try{x=C.cXU(B.dBq(v))
return x}catch(w){throw A.q(E.b01)}}},
dBL(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null
try{j=new C.a54().ac3(d)}catch(x){return d}w=A.cb("<f\\b[^>]*>.*?</f>|<f\\b[^>]*/>",!0,!0,!1)
v=new C.Fo(A.a([],y.F),A.v(y.w,y.e))
for(u=y.h,t=new C.t0(j.a,u),t=new A.bw(t,t.gt(0),u.i("bw<b2.E>")),s=y.v,u=u.i("b2.E"),r=!1;t.n();){q=t.d
if(q==null)q=u.a(q)
if(!q.r)continue
p=q.a
if(D.h.bS(p,"xl/worksheets/")&&D.h.iz(p,".xml")){p=q.ax
if((p instanceof C.pd?q.ax=p.gkr(0):p)==null)q.mb()
p=s.a(q.ax)
o=new A.qA(!1).tD(p,0,null,!0)
n=A.ci(o,w,"")
if(n!==o)r=!0
m=D.cf.cs(n)
q=q.a
p=m.length
l=new C.kw(q,p,D.f.aj(Date.now(),1000),0)
l.JY(q,p,m,0)
v.BV(0,l)}else{p=q.ax
if((p instanceof C.pd?q.ax=p.gkr(0):p)==null)q.mb()
k=s.a(q.ax)
q=q.a
p=J.ar(k)
l=new C.kw(q,p,D.f.aj(Date.now(),1000),0)
l.JY(q,p,k,0)
v.BV(0,l)}}if(!r)return d
u=C.d_k().j4(v)
u.toString
return new Uint8Array(A.c8(u))},
oP:function oP(d){this.a=d},
cQ0:function cQ0(d){this.a=d},
abZ:function abZ(d,e){this.a=d
this.b=e},
cNs:function cNs(){},
cQj:function cQj(d){this.a=d},
cN9:function cN9(d){this.a=d}},E
J=c[1]
A=c[0]
D=c[2]
C=c[5]
F=c[15]
B=a.updateHolder(c[9],B)
E=c[13]
B.oP.prototype={
j(d){return this.a},
$icv:1}
B.abZ.prototype={}
var z=a.updateTypes(["d(kg)"])
B.cQ0.prototype={
$0(){return"rId"+this.a.a++},
$S:45}
B.cNs.prototype={
$1(d){var x,w,v,u,t=new A.eJ("")
for(x=C.dy(new C.e_(d),"t",null),w=J.U(x.a),x=new A.f9(w,x.b,x.$ti.i("f9<1>"));x.n();){v=w.gu(w)
u=C.bxq(v)
if(u!=null&&u.b.gD8()==="rPh")continue
v=C.Eb(v)
t.a+=v}x=t.a
return x.charCodeAt(0)==0?x:x},
$S:z+0}
B.cQj.prototype={
$1(d){var x,w=d.nN(2)
w.toString
x=A.e4(w,null)
if(x<0||x>=this.a.length){w=d.nN(0)
w.toString
return w}return A.n(d.nN(1))+this.a[x]+A.n(d.nN(3))},
$S:185}
B.cN9.prototype={
$1(d){var x,w,v,u,t,s=d.nN(1)
s.toString
x=d.nN(2)
x.toString
w=$.diN().hO(x)
if(s==="row"){s=this.a;++s.c
s.b=0
v=w==null
u=v?null:w.b[2]
t=A.c2(u==null?"":u,null)
s.a=t==null?s.c:t
if(!v){s=d.nN(0)
s.toString
return s}return"<row"+x+' r="'+s.c+'"'+A.n(d.nN(3))+">"}s=this.a
v=++s.b
if(w!=null){s=d.nN(0)
s.toString
return s}return"<c"+x+' r="'+B.dB0(v)+s.a+'"'+A.n(d.nN(3))+">"},
$S:185};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ae,[B.oP,B.abZ])
w(B.cQ0,A.tM)
x(A.nl,[B.cNs,B.cQj,B.cN9])})()
A.EO(b.typeUniverse,JSON.parse('{"oP":{"cv":[]}}'))
var y={F:A.aq("x<kw>"),p:A.aq("x<iw>"),d:A.aq("x<kg>"),r:A.aq("x<fz>"),v:A.aq("y<e>"),q:A.aq("a16"),w:A.aq("d"),h:A.aq("t0<kw>"),e:A.aq("e")};(function constants(){E.Sm=new A.aF(0,560,0,1/0)
E.Ww=new A.an(61267,"MaterialIcons",!1)
E.b01=new B.oP("N\xe3o foi poss\xedvel ler o ficheiro. Confirma que \xe9 um .xlsx v\xe1lido.")
E.app=new A.L("Tentar novamente",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dOE","diO",()=>A.cb("<(row|c)\\b((?:[^>\"']|\"[^\"]*\"|'[^']*')*?)(/?)>",!0,!1,!1))
x($,"dOD","diN",()=>A.cb("\\sr\\s*=\\s*([\"'])(.*?)\\1",!0,!1,!1))})()};
(a=>{a["cITOc98IC0cRBwR7u89FXg/vqeY="]=a.current})($__dart_deferred_initializers__);