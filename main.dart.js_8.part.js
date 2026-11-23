((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C,F,B={
dz8(a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="xl/_rels/workbook.xml.rels",a1="xl/sharedStrings.xml",a2="xl/worksheets/",a3=new C.a4M().abJ(a9),a4=y.w,a5=y.v,a6=A.v(a4,a5),a7=A.cb('xmlns:(\\w+)="http://schemas\\.openxmlformats\\.org/spreadsheetml/2006/main"',!0,!1,!1),a8=A.v(a4,a4)
for(x=a3.a,w=y.h,v=new C.rU(x,w),u=w.i("bu<b1.E>"),v=new A.bu(v,v.gt(0),u),t=y.q,s=w.i("b1.E");v.n();){r=v.d
if(r==null)r=s.a(r)
q={}
if(r.a!==a0)continue
p=r.ax
if((p instanceof C.p8?r.ax=p.gkr(0):p)==null)r.ma()
r=a5.a(r.ax)
o=new A.qx(!1).tB(r,0,null,!0)
q.a=1
for(r=A.cb('Id="([^"]+)"',!0,!1,!1).GP(0,o),r=new A.Rm(r.a,r.b,r.c);r.n();){n=r.d
p=(n==null?t.a(n):n).b[1]
p.toString
m=A.cb("^rId\\d+$",!0,!1,!1)
if(m.b.test(p))continue
a8.c0(0,p,new B.cNN(q))}}for(x=new C.rU(x,w),u=new A.bu(x,x.gt(0),u),x=a8.$ti.i("hc<1,2>"),l=!1;u.n();){w=u.d
if(w==null)w=s.a(w)
if(!w.r)continue
v=w.ax
if((v instanceof C.p8?w.ax=v.gkr(0):v)==null)w.ma()
k=a5.a(w.ax)
v=J.I(k)
if(v.gt(k)>=3&&v.h(k,0)===239&&v.h(k,1)===187&&v.h(k,2)===191)k=v.jj(k,3)
v=w.a
if(v===a1)l=!0
if(D.h.iy(v,".xml")||D.h.iy(v,".rels")){o=new A.qx(!1).tB(k,0,null,!0)
j=a7.hO(o)
if(j!=null){v=j.b[1]
v.toString
t=A.ci(o,"<"+v+":","<")
t=A.ci(t,"</"+v+":","</")
o=A.ci(t,"xmlns:"+v+"=","xmlns=")}if(D.h.iy(w.a,".rels")){o=A.ci(o,'Target="/xl/','Target="')
if(w.a===a0)v=!A.kn(o,"relationships/sharedStrings",0)
else v=!1
if(v)o=A.ddo(o,"</Relationships>",'<Relationship Id="rIdSharedStringsGerado" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /></Relationships>',0)}if(D.h.bS(w.a,a2)){v=A.cb("<mergeCells\\b[^>]*>.*?</mergeCells>",!0,!0,!1)
o=A.ci(o,v,"")
v=A.cb("<f\\b[^>]*/>|<f\\b[^>]*>.*?</f>",!0,!0,!1)
o=B.dwP(A.ci(o,v,""))}for(v=new A.hc(a8,a8.r,a8.e,x);v.n();){i=v.d
t=i.a
r=i.b
p=A.ci(o,'Id="'+t+'"','Id="'+r+'"')
o=A.ci(p,'r:id="'+t+'"','r:id="'+r+'"')}k=D.cd.cs(o)}a6.k(0,w.a,k)}if(!l)a6.k(0,a1,D.cd.cs('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="0" uniqueCount="0"/>'))
else{h=a6.h(0,a1)
if(h!=null){g=B.dx9(h)
a6.k(0,a1,g.a)
a5=g.b
if(a5!=null){x=a6.$ti.i("aZ<1>")
x=A.F(new A.aZ(a6,x),x.i("y.E"))
w=x.length
f=0
for(;f<x.length;x.length===w||(0,A.t)(x),++f){e=x[f]
if(!D.h.bS(e,a2))continue
v=a6.h(0,e)
v.toString
a6.k(0,e,B.dzr(v,a5))}}}}d=new C.Fg(A.a([],y.F),A.v(a4,y.e))
for(a4=new A.b8(a6,a6.$ti.i("b8<1,2>")).gY(0);a4.n();){i=a4.d
a5=i.a
x=i.b
w=J.at(x)
v=new C.ks(a5,w,D.f.aj(Date.now(),1000),0)
v.JO(a5,w,x,0)
d.BP(0,v)}a4=C.cY6().j3(d)
a4.toString
return new Uint8Array(A.c8(a4))},
dx9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=null
try{f=C.JA(D.bn.cA(0,d))}catch(x){return new B.abC(d,g)}w=C.dw(new C.dZ(f),"si",g)
v=A.F(w,w.$ti.i("y.E"))
u=new B.cLe()
w=y.e
t=A.v(y.w,w)
s=A.bQ(v.length,0,!1,w)
r=A.a([],y.d)
for(q=!1,p=0;p<v.length;++p){o=u.$1(v[p])
n=t.h(0,o)
if(n!=null){s[p]=n
q=!0}else{m=r.length
t.k(0,o,m)
r.push(v[p])
s[p]=m}}if(!q)return new B.abC(d,g)
w=C.c5("sst",g)
l=A.a([C.du(C.c5("xmlns",g),"http://schemas.openxmlformats.org/spreadsheetml/2006/main",F.aR),C.du(C.c5("count",g),""+r.length,F.aR),C.du(C.c5("uniqueCount",g),""+r.length,F.aR)],y.p)
k=y.r
j=A.a([],k)
for(i=r.length,h=0;h<r.length;r.length===i||(0,A.t)(r),++h)j.push(r[h].lv())
return new B.abC(D.cd.cs(C.cY4(A.a([C.e_(w,l,j,!0)],k)).IN()),s)},
dzr(d,e){return D.cd.cs(A.F_(D.bn.cA(0,d),A.cb('(<c\\b[^>]*\\bt="s"[^>]*>\\s*<v>)(\\d+)(</v>)',!0,!1,!1),new B.cO5(e),null))},
dwP(d){var x={}
x.a=x.b=x.c=0
return A.F_(d,$.dgy(),new B.cKW(x),null)},
dyJ(d){var x,w
for(x="";d>0;){w=d-1
x=A.i3(65+D.f.a0(w,26))+x
d=D.f.aj(w,26)}return x},
da1(d){var x,w,v=B.dzt(d)
try{x=C.cVF(v)
return x}catch(w){try{x=C.cVF(B.dz8(v))
return x}catch(w){throw A.q(E.b_I)}}},
dzt(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null
try{j=new C.a4M().abJ(d)}catch(x){return d}w=A.cb("<f\\b[^>]*>.*?</f>|<f\\b[^>]*/>",!0,!0,!1)
v=new C.Fg(A.a([],y.F),A.v(y.w,y.e))
for(u=y.h,t=new C.rU(j.a,u),t=new A.bu(t,t.gt(0),u.i("bu<b1.E>")),s=y.v,u=u.i("b1.E"),r=!1;t.n();){q=t.d
if(q==null)q=u.a(q)
if(!q.r)continue
p=q.a
if(D.h.bS(p,"xl/worksheets/")&&D.h.iy(p,".xml")){p=q.ax
if((p instanceof C.p8?q.ax=p.gkr(0):p)==null)q.ma()
p=s.a(q.ax)
o=new A.qx(!1).tB(p,0,null,!0)
n=A.ci(o,w,"")
if(n!==o)r=!0
m=D.cd.cs(n)
q=q.a
p=m.length
l=new C.ks(q,p,D.f.aj(Date.now(),1000),0)
l.JO(q,p,m,0)
v.BP(0,l)}else{p=q.ax
if((p instanceof C.p8?q.ax=p.gkr(0):p)==null)q.ma()
k=s.a(q.ax)
q=q.a
p=J.at(k)
l=new C.ks(q,p,D.f.aj(Date.now(),1000),0)
l.JO(q,p,k,0)
v.BP(0,l)}}if(!r)return d
u=C.cY6().j3(v)
u.toString
return new Uint8Array(A.c8(u))},
oM:function oM(d){this.a=d},
cNN:function cNN(d){this.a=d},
abC:function abC(d,e){this.a=d
this.b=e},
cLe:function cLe(){},
cO5:function cO5(d){this.a=d},
cKW:function cKW(d){this.a=d}},E
J=c[1]
A=c[0]
D=c[2]
C=c[6]
F=c[15]
B=a.updateHolder(c[9],B)
E=c[13]
B.oM.prototype={
j(d){return this.a},
$icu:1}
B.abC.prototype={}
var z=a.updateTypes(["d(kd)"])
B.cNN.prototype={
$0(){return"rId"+this.a.a++},
$S:45}
B.cLe.prototype={
$1(d){var x,w,v,u,t=new A.eE("")
for(x=C.dw(new C.dZ(d),"t",null),w=J.W(x.a),x=new A.f6(w,x.b,x.$ti.i("f6<1>"));x.n();){v=w.gv(w)
u=C.bwL(v)
if(u!=null&&u.b.gD2()==="rPh")continue
v=C.E3(v)
t.a+=v}x=t.a
return x.charCodeAt(0)==0?x:x},
$S:z+0}
B.cO5.prototype={
$1(d){var x,w=d.nN(2)
w.toString
x=A.e4(w,null)
if(x<0||x>=this.a.length){w=d.nN(0)
w.toString
return w}return A.n(d.nN(1))+this.a[x]+A.n(d.nN(3))},
$S:189}
B.cKW.prototype={
$1(d){var x,w,v,u,t,s=d.nN(1)
s.toString
x=d.nN(2)
x.toString
w=$.dgx().hO(x)
if(s==="row"){s=this.a;++s.c
s.b=0
v=w==null
u=v?null:w.b[2]
t=A.c3(u==null?"":u,null)
s.a=t==null?s.c:t
if(!v){s=d.nN(0)
s.toString
return s}return"<row"+x+' r="'+s.c+'"'+A.n(d.nN(3))+">"}s=this.a
v=++s.b
if(w!=null){s=d.nN(0)
s.toString
return s}return"<c"+x+' r="'+B.dyJ(v)+s.a+'"'+A.n(d.nN(3))+">"},
$S:189};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ab,[B.oM,B.abC])
w(B.cNN,A.tG)
x(A.nh,[B.cLe,B.cO5,B.cKW])})()
A.EG(b.typeUniverse,JSON.parse('{"oM":{"cu":[]}}'))
var y={F:A.aq("x<ks>"),p:A.aq("x<iw>"),d:A.aq("x<kd>"),r:A.aq("x<fz>"),v:A.aq("z<e>"),q:A.aq("a0P"),w:A.aq("d"),h:A.aq("rU<ks>"),e:A.aq("e")};(function constants(){E.Sf=new A.aG(0,560,0,1/0)
E.Wj=new A.am(61267,"MaterialIcons",!1)
E.b_I=new B.oM("N\xe3o foi poss\xedvel ler o ficheiro. Confirma que \xe9 um .xlsx v\xe1lido.")
E.ap8=new A.L("Tentar novamente",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dMj","dgy",()=>A.cb("<(row|c)\\b((?:[^>\"']|\"[^\"]*\"|'[^']*')*?)(/?)>",!0,!1,!1))
x($,"dMi","dgx",()=>A.cb("\\sr\\s*=\\s*([\"'])(.*?)\\1",!0,!1,!1))})()};
(a=>{a["wLah2kFUICvDYgFlwMiTzj0wTLw="]=a.current})($__dart_deferred_initializers__);