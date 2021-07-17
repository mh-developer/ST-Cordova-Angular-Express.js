(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{zrcO:function(e,t,r){"use strict";r.r(t),r.d(t,"UsersModule",function(){return O});var n=r("ofXK"),s=r("fXoL"),b=r("lJxs"),i=r("ajia");let c=(()=>{class e{constructor(e){this.apiService=e}getAll(){return this.apiService.get("/users").pipe(Object(b.a)(e=>e))}get(e){return this.apiService.get(`/users/${e}`).pipe(Object(b.a)(e=>e))}post(e){return this.apiService.post("/users",e).pipe(Object(b.a)(e=>e))}put(e,t){return this.apiService.put(`/users/${e}`,t).pipe(Object(b.a)(e=>e))}delete(e){return this.apiService.delete(`/users/${e}`).pipe(Object(b.a)(e=>e))}}return e.\u0275fac=function(t){return new(t||e)(s.Wb(i.a))},e.\u0275prov=s.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var o=r("tyNb"),a=r("3Pt+");let u=(()=>{class e{constructor(e,t){this.usersService=e,this.router=t,this.user={}}add(){this.usersService.post(this.user).subscribe(e=>{this.router.navigateByUrl("/users",{replaceUrl:!0})},e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(c),s.Kb(o.b))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-users-add"]],decls:20,vars:3,consts:[[1,"container"],[1,"my-3","p-3","bg-white","rounded","box-shadow"],[1,"border-bottom","border-gray","pb-2","mb-0"],[1,"media","text-muted","pt-3"],[1,"media-body","pb-3","mb-0","small","lh-125","border-bottom","border-gray"],[1,"form-group"],["type","text","placeholder","Name (example: Cefizelj)","name","name","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Surname (example: Butalski)","name","surname","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","email","placeholder","Email (example: cefizelj.butaljski@gmail.com)","name","email","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","btn-sm",3,"click"]],template:function(e,t){1&e&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"h6",2),s.vc(3,"Add user"),s.Ob(),s.Pb(4,"div",3),s.Pb(5,"form",4),s.Pb(6,"div",5),s.Pb(7,"label"),s.vc(8,"Name"),s.Ob(),s.Pb(9,"input",6),s.Zb("ngModelChange",function(e){return t.user.name=e}),s.Ob(),s.Ob(),s.Pb(10,"div",5),s.Pb(11,"label"),s.vc(12,"Surname"),s.Ob(),s.Pb(13,"input",7),s.Zb("ngModelChange",function(e){return t.user.surname=e}),s.Ob(),s.Ob(),s.Pb(14,"div",5),s.Pb(15,"label"),s.vc(16,"Email"),s.Ob(),s.Pb(17,"input",8),s.Zb("ngModelChange",function(e){return t.user.email=e}),s.Ob(),s.Ob(),s.Pb(18,"button",9),s.Zb("click",function(){return t.add()}),s.vc(19," Add "),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&e&&(s.yb(9),s.gc("ngModel",t.user.name),s.yb(4),s.gc("ngModel",t.user.surname),s.yb(4),s.gc("ngModel",t.user.email))},directives:[a.m,a.f,a.g,a.a,a.l,a.e,a.h],styles:[""]}),e})();var l=r("mrSG");let d=(()=>{class e{constructor(e,t,r){this.usersService=e,this.route=t,this.router=r}ngOnInit(){this.route.params.subscribe(e=>{const{id:t}=e;t?this.user=this.usersService.get(t):this.router.navigateByUrl("/users",{replaceUrl:!0})})}delete(){return Object(l.a)(this,void 0,void 0,function*(){this.usersService.delete((yield this.user.toPromise()).id).subscribe(e=>{this.router.navigateByUrl("/users",{replaceUrl:!0})},e=>{console.log(e)})})}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(c),s.Kb(o.a),s.Kb(o.b))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-users-details"]],decls:17,vars:9,consts:[[1,"container"],[1,"my-3","p-3","bg-white","rounded","box-shadow"],[1,"border-bottom","border-gray","pb-2","mb-0"],[1,"media","text-muted","pt-3"],[1,"mr-2","rounded"],[1,"media-body","pb-3","mb-0","small","lh-125","border-bottom","border-gray"],[1,"d-flex","justify-content-between","align-items-center","w-100"],[1,"text-gray-dark"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"d-block"]],template:function(e,t){if(1&e&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"h6",2),s.vc(3,"User details"),s.Ob(),s.Pb(4,"div",3),s.Lb(5,"span",4),s.Pb(6,"div",5),s.Pb(7,"div",6),s.Pb(8,"strong",7),s.vc(9),s.cc(10,"async"),s.cc(11,"async"),s.Ob(),s.Pb(12,"button",8),s.Zb("click",function(){return t.delete()}),s.vc(13," Delete "),s.Ob(),s.Ob(),s.Pb(14,"span",9),s.vc(15),s.cc(16,"async"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&e){let e=null,r=null;s.yb(9),s.yc(" ",null==(e=s.dc(10,3,t.user))?null:e.name," ",null==(e=s.dc(11,5,t.user))?null:e.surname," "),s.yb(6),s.xc("@",null==(r=s.dc(16,7,t.user))?null:r.email,"")}},pipes:[n.b],styles:[""]}),e})();var p=r("LRne");const m=function(e){return["/users",e]};function v(e,t){if(1&e&&(s.Pb(0,"div",6),s.Lb(1,"span",7),s.Pb(2,"div",8),s.Pb(3,"div",2),s.Pb(4,"strong",9),s.vc(5),s.Ob(),s.Pb(6,"a",4),s.vc(7,"Details"),s.Ob(),s.Ob(),s.Pb(8,"span",10),s.vc(9),s.Ob(),s.Ob(),s.Ob()),2&e){const e=t.$implicit;s.yb(5),s.yc(" ",null==e?null:e.name," ",null==e?null:e.surname," "),s.yb(1),s.gc("routerLink",s.kc(4,m,e.id)),s.yb(3),s.xc("@",null==e?null:e.email,"")}}const g=function(){return["/users/add"]},h=[{path:"users",component:(()=>{class e{constructor(e){this.usersService=e,this.users=Object(p.a)([])}ngOnInit(){this.users=this.usersService.getAll()}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(c))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-users-list"]],decls:10,vars:5,consts:[["role","main",1,"container"],[1,"my-3","p-3","bg-white","rounded","box-shadow"],[1,"d-flex","justify-content-between","align-items-center","w-100"],[1,"border-bottom","border-gray","pb-2","mb-0"],[3,"routerLink"],["class","media text-muted pt-3",4,"ngFor","ngForOf"],[1,"media","text-muted","pt-3"],[1,"mr-2","rounded"],[1,"media-body","pb-3","mb-0","small","lh-125","border-bottom","border-gray"],[1,"text-gray-dark"],[1,"d-block"]],template:function(e,t){1&e&&(s.Pb(0,"main",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"h6",3),s.vc(4,"Users"),s.Ob(),s.Pb(5,"small"),s.Pb(6,"a",4),s.vc(7,"+ Add"),s.Ob(),s.Ob(),s.Ob(),s.tc(8,v,10,6,"div",5),s.cc(9,"async"),s.Ob(),s.Ob()),2&e&&(s.yb(6),s.gc("routerLink",s.jc(4,g)),s.yb(2),s.gc("ngForOf",s.dc(9,2,t.users)))},directives:[o.e,n.k],pipes:[n.b],styles:[""]}),e})()},{path:"users/add",component:u},{path:"users/:id",component:d}];let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({imports:[[o.f.forChild(h)],o.f]}),e})();var f=r("PCNd");let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({imports:[[n.c,y,f.a]]}),e})()}}]);