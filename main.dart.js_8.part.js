((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B,F,C={
dce(a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="xl/_rels/workbook.xml.rels",a1="xl/sharedStrings.xml",a2="xl/worksheets/",a3=new B.a2D().a8t(a9),a4=y.w,a5=y.v,a6=A.x(a4,a5),a7=A.cc('xmlns:(\\w+)="http://schemas\\.openxmlformats\\.org/spreadsheetml/2006/main"',!0,!1,!1),a8=A.x(a4,a4)
for(x=a3.a,w=y.h,v=new B.qP(x,w),u=w.i("bH<b0.E>"),v=new A.bH(v,v.gt(0),u),t=y.q,s=w.i("b0.E");v.q();){r=v.d
if(r==null)r=s.a(r)
q={}
if(r.a!==a0)continue
p=r.ax
if((p instanceof B.od?r.ax=p.gk0(0):p)==null)r.lS()
r=a5.a(r.ax)
o=new A.pt(!1).rT(r,0,null,!0)
q.a=1
for(r=A.cc('Id="([^"]+)"',!0,!1,!1).Fj(0,o),r=new A.PB(r.a,r.b,r.c);r.q();){n=r.d
p=(n==null?t.a(n):n).b[1]
p.toString
m=A.cc("^rId\\d+$",!0,!1,!1)
if(m.b.test(p))continue
a8.cF(0,p,new C.cuK(q))}}for(x=new B.qP(x,w),u=new A.bH(x,x.gt(0),u),x=a8.$ti.i("j9<1,2>"),l=!1;u.q();){w=u.d
if(w==null)w=s.a(w)
if(!w.r)continue
v=w.ax
if((v instanceof B.od?w.ax=v.gk0(0):v)==null)w.lS()
k=a5.a(w.ax)
v=J.O(k)
if(v.gt(k)>=3&&v.h(k,0)===239&&v.h(k,1)===187&&v.h(k,2)===191)k=v.je(k,3)
v=w.a
if(v===a1)l=!0
if(D.h.j6(v,".xml")||D.h.j6(v,".rels")){o=new A.pt(!1).rT(k,0,null,!0)
j=a7.hJ(o)
if(j!=null){v=j.b[1]
v.toString
t=A.cM(o,"<"+v+":","<")
t=A.cM(t,"</"+v+":","</")
o=A.cM(t,"xmlns:"+v+"=","xmlns=")}if(D.h.j6(w.a,".rels")){o=A.cM(o,'Target="/xl/','Target="')
if(w.a===a0)v=!A.mu(o,"relationships/sharedStrings",0)
else v=!1
if(v)o=A.cSq(o,"</Relationships>",'<Relationship Id="rIdSharedStringsGerado" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /></Relationships>',0)}if(D.h.c8(w.a,a2)){v=A.cc("<mergeCells\\b[^>]*>.*?</mergeCells>",!0,!0,!1)
o=A.cM(o,v,"")
v=A.cc("<f\\b[^>]*/>|<f\\b[^>]*>.*?</f>",!0,!0,!1)
o=C.da6(A.cM(o,v,""))}for(v=new A.j9(a8,a8.r,a8.e,x);v.q();){i=v.d
t=i.a
r=i.b
p=A.cM(o,'Id="'+t+'"','Id="'+r+'"')
o=A.cM(p,'r:id="'+t+'"','r:id="'+r+'"')}k=D.c8.cD(o)}a6.k(0,w.a,k)}if(!l)a6.k(0,a1,D.c8.cD('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="0" uniqueCount="0"/>'))
else{h=a6.h(0,a1)
if(h!=null){g=C.dao(h)
a6.k(0,a1,g.a)
a5=g.b
if(a5!=null){x=a6.$ti.i("bc<1>")
x=A.F(new A.bc(a6,x),x.i("y.E"))
w=x.length
f=0
for(;f<x.length;x.length===w||(0,A.t)(x),++f){e=x[f]
if(!D.h.c8(e,a2))continue
v=a6.h(0,e)
v.toString
a6.k(0,e,C.dcv(v,a5))}}}}d=new B.DO(A.a([],y.F),A.x(a4,y.e))
for(a4=new A.bG(a6,a6.$ti.i("bG<1,2>")).gW(0);a4.q();){i=a4.d
a5=i.a
x=i.b
w=J.az(x)
v=new B.jP(a5,w,D.e.ar(Date.now(),1000),0)
v.Ic(a5,w,x,0)
d.AI(0,v)}a4=B.cCM().iG(d)
a4.toString
return new Uint8Array(A.c2(a4))},
dao(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=null
try{f=B.CD(D.bh.cj(0,d))}catch(x){return new C.a92(d,g)}w=B.dl(new B.dI(f),"si",g)
v=A.F(w,w.$ti.i("y.E"))
u=new C.ct3()
w=y.e
t=A.x(y.w,w)
s=A.bJ(v.length,0,!1,w)
r=A.a([],y.d)
for(q=!1,p=0;p<v.length;++p){o=u.$1(v[p])
n=t.h(0,o)
if(n!=null){s[p]=n
q=!0}else{m=r.length
t.k(0,o,m)
r.push(v[p])
s[p]=m}}if(!q)return new C.a92(d,g)
w=B.bY("sst",g)
l=A.a([B.dk(B.bY("xmlns",g),"http://schemas.openxmlformats.org/spreadsheetml/2006/main",F.aM),B.dk(B.bY("count",g),""+r.length,F.aM),B.dk(B.bY("uniqueCount",g),""+r.length,F.aM)],y.p)
k=y.r
j=A.a([],k)
for(i=r.length,h=0;h<r.length;r.length===i||(0,A.t)(r),++h)j.push(r[h].l9())
return new C.a92(D.c8.cD(B.cCK(A.a([B.dL(w,l,j,!0)],k)).Cm()),s)},
dcv(d,e){return D.c8.cD(A.JD(D.bh.cj(0,d),A.cc('(<c\\b[^>]*\\bt="s"[^>]*>\\s*<v>)(\\d+)(</v>)',!0,!1,!1),new C.cuZ(e),null))},
da6(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=null
try{i=B.CD(d)}catch(x){return d}for(w=B.dl(new B.dI(i),"row",j),v=J.a3(w.a),w=new A.eM(v,w.b,w.$ti.i("eM<1>")),u=y.s,t=0;w.q();){s=v.gA(v);++t
r=s.p6("r",j)
q=r==null?j:r.b
r=q==null
if(r)s.Q8(0,"r",""+t)
p=A.cb(r?"":q,j)
if(p==null)p=t
for(s=s.di$,o=B.abJ("c",j),s=s.yC(0,u),r=s.gW(0),s=new A.eM(r,o,s.$ti.i("eM<y.E>")),n=p,m=0;s.q();){l=r.gA(0);++m
k=l.p6("r",j)
if((k==null?j:k.b)==null)l.Q8(0,"r",C.dbT(m)+n)}}return i.Cm()},
dbT(d){var x,w
for(x="";d>0;){w=d-1
x=A.hG(65+D.e.a1(w,26))+x
d=D.e.ar(w,26)}return x},
cPv(d){var x,w,v=C.dcx(d)
try{x=B.cAw(v)
return x}catch(w){try{x=B.cAw(C.dce(v))
return x}catch(w){throw A.p(E.aWH)}}},
dcx(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null
try{j=new B.a2D().a8t(d)}catch(x){return d}w=A.cc("<f\\b[^>]*>.*?</f>|<f\\b[^>]*/>",!0,!0,!1)
v=new B.DO(A.a([],y.F),A.x(y.w,y.e))
for(u=y.h,t=new B.qP(j.a,u),t=new A.bH(t,t.gt(0),u.i("bH<b0.E>")),s=y.v,u=u.i("b0.E"),r=!1;t.q();){q=t.d
if(q==null)q=u.a(q)
if(!q.r)continue
p=q.a
if(D.h.c8(p,"xl/worksheets/")&&D.h.j6(p,".xml")){p=q.ax
if((p instanceof B.od?q.ax=p.gk0(0):p)==null)q.lS()
p=s.a(q.ax)
o=new A.pt(!1).rT(p,0,null,!0)
n=A.cM(o,w,"")
if(n!==o)r=!0
m=D.c8.cD(n)
q=q.a
p=m.length
l=new B.jP(q,p,D.e.ar(Date.now(),1000),0)
l.Ic(q,p,m,0)
v.AI(0,l)}else{p=q.ax
if((p instanceof B.od?q.ax=p.gk0(0):p)==null)q.lS()
k=s.a(q.ax)
q=q.a
p=J.az(k)
l=new B.jP(q,p,D.e.ar(Date.now(),1000),0)
l.Ic(q,p,k,0)
v.AI(0,l)}}if(!r)return d
u=B.cCM().iG(v)
u.toString
return new Uint8Array(A.c2(u))},
qf:function qf(d){this.a=d},
cuK:function cuK(d){this.a=d},
a92:function a92(d,e){this.a=d
this.b=e},
ct3:function ct3(){},
cuZ:function cuZ(d){this.a=d}},E
J=c[1]
A=c[0]
D=c[2]
B=c[7]
F=c[17]
C=a.updateHolder(c[9],C)
E=c[13]
C.qf.prototype={
j(d){return this.a},
$icn:1}
C.a92.prototype={}
var z=a.updateTypes(["e(je)"])
C.cuK.prototype={
$0(){return"rId"+this.a.a++},
$S:52}
C.ct3.prototype={
$1(d){var x,w,v,u,t=new A.en("")
for(x=B.dl(new B.dI(d),"t",null),w=J.a3(x.a),x=new A.eM(w,x.b,x.$ti.i("eM<1>"));x.q();){v=w.gA(w)
u=B.bpq(v)
if(u!=null&&u.b.gBT()==="rPh")continue
v=B.CG(v)
t.a+=v}x=t.a
return x.charCodeAt(0)==0?x:x},
$S:z+0}
C.cuZ.prototype={
$1(d){var x,w=d.w9(2)
w.toString
x=A.dZ(w,null)
if(x<0||x>=this.a.length){w=d.w9(0)
w.toString
return w}return A.n(d.w9(1))+this.a[x]+A.n(d.w9(3))},
$S:207};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.a8,[C.qf,C.a92])
w(C.cuK,A.ry)
x(A.mx,[C.ct3,C.cuZ])})()
A.Dg(b.typeUniverse,JSON.parse('{"qf":{"cn":[]}}'))
var y=(function rtii(){var x=A.aq
return{F:x("z<jP>"),p:x("z<i1>"),d:x("z<je>"),r:x("z<f7>"),v:x("B<d>"),q:x("ZL"),w:x("e"),h:x("qP<jP>"),s:x("je"),e:x("d")}})();(function constants(){E.QL=new A.aG(0,560,0,1/0)
E.UB=new A.av(61267,"MaterialIcons",!1)
E.aWH=new C.qf("N\xe3o foi poss\xedvel ler o ficheiro. Confirma que \xe9 um .xlsx v\xe1lido.")
E.amV=new A.R("Tentar novamente",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["s97ahSHvpch+fNLQoc0OwjU67Rw="]=a.current})($__dart_deferred_initializers__);