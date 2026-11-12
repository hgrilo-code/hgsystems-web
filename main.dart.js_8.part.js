((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B,F,C={
diy(a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="xl/_rels/workbook.xml.rels",a1="xl/sharedStrings.xml",a2="xl/worksheets/",a3=new B.a32().a9r(a9),a4=y.w,a5=y.v,a6=A.x(a4,a5),a7=A.cc('xmlns:(\\w+)="http://schemas\\.openxmlformats\\.org/spreadsheetml/2006/main"',!0,!1,!1),a8=A.x(a4,a4)
for(x=a3.a,w=y.h,v=new B.r0(x,w),u=w.i("bD<b_.E>"),v=new A.bD(v,v.gt(0),u),t=y.q,s=w.i("b_.E");v.q();){r=v.d
if(r==null)r=s.a(r)
q={}
if(r.a!==a0)continue
p=r.ax
if((p instanceof B.ov?r.ax=p.gkh(0):p)==null)r.m0()
r=a5.a(r.ax)
o=new A.pK(!1).tc(r,0,null,!0)
q.a=1
for(r=A.cc('Id="([^"]+)"',!0,!1,!1).FR(0,o),r=new A.Q_(r.a,r.b,r.c);r.q();){n=r.d
p=(n==null?t.a(n):n).b[1]
p.toString
m=A.cc("^rId\\d+$",!0,!1,!1)
if(m.b.test(p))continue
a8.cL(0,p,new C.cAs(q))}}for(x=new B.r0(x,w),u=new A.bD(x,x.gt(0),u),x=a8.$ti.i("ji<1,2>"),l=!1;u.q();){w=u.d
if(w==null)w=s.a(w)
if(!w.r)continue
v=w.ax
if((v instanceof B.ov?w.ax=v.gkh(0):v)==null)w.m0()
k=a5.a(w.ax)
v=J.P(k)
if(v.gt(k)>=3&&v.h(k,0)===239&&v.h(k,1)===187&&v.h(k,2)===191)k=v.j6(k,3)
v=w.a
if(v===a1)l=!0
if(D.h.jh(v,".xml")||D.h.jh(v,".rels")){o=new A.pK(!1).tc(k,0,null,!0)
j=a7.hY(o)
if(j!=null){v=j.b[1]
v.toString
t=A.cv(o,"<"+v+":","<")
t=A.cv(t,"</"+v+":","</")
o=A.cv(t,"xmlns:"+v+"=","xmlns=")}if(D.h.jh(w.a,".rels")){o=A.cv(o,'Target="/xl/','Target="')
if(w.a===a0)v=!A.ll(o,"relationships/sharedStrings",0)
else v=!1
if(v)o=A.cYq(o,"</Relationships>",'<Relationship Id="rIdSharedStringsGerado" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /></Relationships>',0)}if(D.h.c1(w.a,a2)){v=A.cc("<mergeCells\\b[^>]*>.*?</mergeCells>",!0,!0,!1)
o=A.cv(o,v,"")
v=A.cc("<f\\b[^>]*/>|<f\\b[^>]*>.*?</f>",!0,!0,!1)
o=C.dgp(A.cv(o,v,""))}for(v=new A.ji(a8,a8.r,a8.e,x);v.q();){i=v.d
t=i.a
r=i.b
p=A.cv(o,'Id="'+t+'"','Id="'+r+'"')
o=A.cv(p,'r:id="'+t+'"','r:id="'+r+'"')}k=D.ca.cK(o)}a6.k(0,w.a,k)}if(!l)a6.k(0,a1,D.ca.cK('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="0" uniqueCount="0"/>'))
else{h=a6.h(0,a1)
if(h!=null){g=C.dgH(h)
a6.k(0,a1,g.a)
a5=g.b
if(a5!=null){x=a6.$ti.i("b4<1>")
x=A.F(new A.b4(a6,x),x.i("y.E"))
w=x.length
f=0
for(;f<x.length;x.length===w||(0,A.t)(x),++f){e=x[f]
if(!D.h.c1(e,a2))continue
v=a6.h(0,e)
v.toString
a6.k(0,e,C.diQ(v,a5))}}}}d=new B.E4(A.a([],y.F),A.x(a4,y.e))
for(a4=new A.bM(a6,a6.$ti.i("bM<1,2>")).gX(0);a4.q();){i=a4.d
a5=i.a
x=i.b
w=J.aw(x)
v=new B.jZ(a5,w,D.e.ap(Date.now(),1000),0)
v.IK(a5,w,x,0)
d.B2(0,v)}a4=B.cIC().iP(d)
a4.toString
return new Uint8Array(A.c4(a4))},
dgH(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=null
try{f=B.CR(D.bh.cv(0,d))}catch(x){return new C.a9D(d,g)}w=B.dm(new B.dK(f),"si",g)
v=A.F(w,w.$ti.i("y.E"))
u=new C.cyH()
w=y.e
t=A.x(y.w,w)
s=A.bN(v.length,0,!1,w)
r=A.a([],y.d)
for(q=!1,p=0;p<v.length;++p){o=u.$1(v[p])
n=t.h(0,o)
if(n!=null){s[p]=n
q=!0}else{m=r.length
t.k(0,o,m)
r.push(v[p])
s[p]=m}}if(!q)return new C.a9D(d,g)
w=B.c_("sst",g)
l=A.a([B.dl(B.c_("xmlns",g),"http://schemas.openxmlformats.org/spreadsheetml/2006/main",F.aM),B.dl(B.c_("count",g),""+r.length,F.aM),B.dl(B.c_("uniqueCount",g),""+r.length,F.aM)],y.p)
k=y.r
j=A.a([],k)
for(i=r.length,h=0;h<r.length;r.length===i||(0,A.t)(r),++h)j.push(r[h].lm())
return new C.a9D(D.ca.cK(B.cIA(A.a([B.dP(w,l,j,!0)],k)).CK()),s)},
diQ(d,e){return D.ca.cK(A.K4(D.bh.cv(0,d),A.cc('(<c\\b[^>]*\\bt="s"[^>]*>\\s*<v>)(\\d+)(</v>)',!0,!1,!1),new C.cAH(e),null))},
dgp(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=null
try{i=B.CR(d)}catch(x){return d}for(w=B.dm(new B.dK(i),"row",j),v=J.a4(w.a),w=new A.ey(v,w.b,w.$ti.i("ey<1>")),u=y.s,t=0;w.q();){s=v.gA(v);++t
r=s.pk("r",j)
q=r==null?j:r.b
r=q==null
if(r)s.QG(0,"r",""+t)
p=A.c2(r?"":q,j)
if(p==null)p=t
for(s=s.dt$,o=B.acl("c",j),s=s.z3(0,u),r=s.gX(0),s=new A.ey(r,o,s.$ti.i("ey<y.E>")),n=p,m=0;s.q();){l=r.gA(0);++m
k=l.pk("r",j)
if((k==null?j:k.b)==null)l.QG(0,"r",C.dic(m)+n)}}return i.CK()},
dic(d){var x,w
for(x="";d>0;){w=d-1
x=A.hJ(65+D.e.a1(w,26))+x
d=D.e.ap(w,26)}return x},
cVn(d){var x,w,v=C.diS(d)
try{x=B.cGi(v)
return x}catch(w){try{x=B.cGi(C.diy(v))
return x}catch(w){throw A.p(E.aWR)}}},
diS(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null
try{j=new B.a32().a9r(d)}catch(x){return d}w=A.cc("<f\\b[^>]*>.*?</f>|<f\\b[^>]*/>",!0,!0,!1)
v=new B.E4(A.a([],y.F),A.x(y.w,y.e))
for(u=y.h,t=new B.r0(j.a,u),t=new A.bD(t,t.gt(0),u.i("bD<b_.E>")),s=y.v,u=u.i("b_.E"),r=!1;t.q();){q=t.d
if(q==null)q=u.a(q)
if(!q.r)continue
p=q.a
if(D.h.c1(p,"xl/worksheets/")&&D.h.jh(p,".xml")){p=q.ax
if((p instanceof B.ov?q.ax=p.gkh(0):p)==null)q.m0()
p=s.a(q.ax)
o=new A.pK(!1).tc(p,0,null,!0)
n=A.cv(o,w,"")
if(n!==o)r=!0
m=D.ca.cK(n)
q=q.a
p=m.length
l=new B.jZ(q,p,D.e.ap(Date.now(),1000),0)
l.IK(q,p,m,0)
v.B2(0,l)}else{p=q.ax
if((p instanceof B.ov?q.ax=p.gkh(0):p)==null)q.m0()
k=s.a(q.ax)
q=q.a
p=J.aw(k)
l=new B.jZ(q,p,D.e.ap(Date.now(),1000),0)
l.IK(q,p,k,0)
v.B2(0,l)}}if(!r)return d
u=B.cIC().iP(v)
u.toString
return new Uint8Array(A.c4(u))},
qt:function qt(d){this.a=d},
cAs:function cAs(d){this.a=d},
a9D:function a9D(d,e){this.a=d
this.b=e},
cyH:function cyH(){},
cAH:function cAH(d){this.a=d}},E
J=c[1]
A=c[0]
D=c[2]
B=c[7]
F=c[15]
C=a.updateHolder(c[9],C)
E=c[13]
C.qt.prototype={
j(d){return this.a},
$icp:1}
C.a9D.prototype={}
var z=a.updateTypes(["e(jp)"])
C.cAs.prototype={
$0(){return"rId"+this.a.a++},
$S:51}
C.cyH.prototype={
$1(d){var x,w,v,u,t=new A.ek("")
for(x=B.dm(new B.dK(d),"t",null),w=J.a4(x.a),x=new A.ey(w,x.b,x.$ti.i("ey<1>"));x.q();){v=w.gA(w)
u=B.br2(v)
if(u!=null&&u.b.gCf()==="rPh")continue
v=B.CU(v)
t.a+=v}x=t.a
return x.charCodeAt(0)==0?x:x},
$S:z+0}
C.cAH.prototype={
$1(d){var x,w=d.ww(2)
w.toString
x=A.e1(w,null)
if(x<0||x>=this.a.length){w=d.ww(0)
w.toString
return w}return A.m(d.ww(1))+this.a[x]+A.m(d.ww(3))},
$S:180};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.a8,[C.qt,C.a9D])
w(C.cAs,A.rL)
x(A.mM,[C.cyH,C.cAH])})()
A.Dw(b.typeUniverse,JSON.parse('{"qt":{"cp":[]}}'))
var y=(function rtii(){var x=A.ar
return{F:x("z<jZ>"),p:x("z<i7>"),d:x("z<jp>"),r:x("z<fd>"),v:x("B<d>"),q:x("a_5"),w:x("e"),h:x("r0<jZ>"),s:x("jp"),e:x("d")}})();(function constants(){E.QN=new A.aD(0,560,0,1/0)
E.UK=new A.au(61267,"MaterialIcons",!1)
E.aWR=new C.qt("N\xe3o foi poss\xedvel ler o ficheiro. Confirma que \xe9 um .xlsx v\xe1lido.")
E.an9=new A.O("Tentar novamente",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["Mw92qcN81eLkaQUyAVpOph0HbqQ="]=a.current})($__dart_deferred_initializers__);