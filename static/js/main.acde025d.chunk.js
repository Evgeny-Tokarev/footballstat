(this.webpackJsonpfootballstat=this.webpackJsonpfootballstat||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(33),o=a.n(r),i=(a(124),a(125),a(216)),s=a(214),l=a(1);var j=function(){return Object(l.jsxs)(i.a,{variant:"contained",children:[Object(l.jsx)(s.a,{href:"/",children:"Competitions"}),Object(l.jsx)(s.a,{href:"/teams",children:"Teams"})]})},b=a(217);var d=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(b.a,{variant:"h3",component:"h1",color:"textPrimary",align:"center",gutterBottom:!0,children:"Football statistics"}),Object(l.jsx)(j,{})]})};var h=function(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)(b.a,{variant:"h5",component:"h4",color:"textPrimary",align:"center",gutterBottom:!0,children:["This app is based on\xa0",Object(l.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.football-data.org/",children:"https://www.football-data.org/"})]})})},m=a(7),u=a(213),O=a(221),f=a(225),g=a(224),x=a(220),p=a(222),v=a(223),w=a(219),T=a(21),S=function(){var e=Object(u.a)({backToTop:{position:"fixed",bottom:"20px",right:"20px",fontSize:"50px",background:"#e5e3e3",color:"white",cursor:"pointer",borderRadius:"100px",border:"none",boxShadow:"0 5px 10px #ccc","&:hover":{background:"grey"}}})(),t=Object(c.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1];Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.pageYOffset>300?r(!0):r(!1)})),function(){r(!1)}}),[]);return Object(l.jsx)(l.Fragment,{children:n&&Object(l.jsx)("button",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:e.backToTop,children:"\u21e7"})})},D=a(44),N=a(212),y=a(218),k=a(209),E=a(210),C=a(211),A=a(92),z=Object(u.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",textAlign:"left",marginBottom:"20px"}}})),W=function(e){var t=e.matches,a=e.setMatches,n=z(),r=Object(c.useState)(new Date(Object(A.a)(t[0].utcDate))),o=Object(m.a)(r,2),i=o[0],s=o[1],j=Object(c.useState)(new Date(Object(A.a)(t[t.length-1].utcDate))),b=Object(m.a)(j,2),d=b[0],h=b[1],u=function(e){return console.log(e+"   "+new Date(Object(A.a)(t[0].utcDate))+"   "+new Date(Object(A.a)(t[t.length-1].utcDate))),e>=new Date(Object(A.a)(t[0].utcDate))&&e<new Date(Object(A.a)(t[t.length-1].utcDate))&&null!==e};return Object(l.jsx)(y.a,{component:"form",className:n.root,noValidate:!0,autoComplete:"off",children:Object(l.jsxs)(k.b,{dateAdapter:C.a,children:[Object(l.jsx)(E.a,{label:"Start date",value:i,onChange:function(e){u(e)&&(s(e),a(t.filter((function(t){return new Date(t.utcDate)>=new Date(e)&&new Date(t.utcDate)<new Date(d)}))))},renderInput:function(e){return Object(l.jsx)(N.a,Object(D.a)({},e))}}),Object(l.jsx)(E.a,{label:"End date",value:d,onChange:function(e){u(e)&&(h(e),a(t.filter((function(t){return new Date(t.utcDate)>=new Date(i)&&new Date(t.utcDate)<new Date(e)}))))},renderInput:function(e){return Object(l.jsx)(N.a,Object(D.a)({},e))}})]})})},I=Object(u.a)({table:{minWidth:650},block:{marginTop:"2rem"},error:{fontSize:"1.5rem",fontWeight:"bold",color:"#D15563 "},message:{fontSize:"1.5rem",fontWeight:"bold"}});var B=function(){var e=Object(T.f)().id,t=I(),a=Object(c.useState)(null),n=Object(m.a)(a,2),r=n[0],o=n[1],i=Object(c.useState)(!1),s=Object(m.a)(i,2),j=s[0],d=s[1],h=Object(c.useState)([]),u=Object(m.a)(h,2),D=u[0],N=u[1],y=Object(c.useState)({}),k=Object(m.a)(y,2),E=k[0],C=k[1],A={year:"numeric",month:"2-digit",day:"numeric",timezone:"UTC"};return Object(c.useEffect)((function(){fetch("http://api.football-data.org/v2/teams/".concat(e),{method:"GET",mode:"cors",headers:{"X-Auth-Token":"b2dd0e14d46548faaeb560db1e55fc93"}}).then((function(e){return 200===e.status?e.json():null})).then((function(t){console.log(t),t?(C({name:t.name,crestUrl:t.crestUrl}),fetch("http://api.football-data.org/v2/teams/".concat(e,"/matches"),{method:"GET",mode:"cors",headers:{"X-Auth-Token":"b2dd0e14d46548faaeb560db1e55fc93"}}).then((function(e){return 200===e.status?e.json():null})).then((function(e){console.log(e),e&&N(e.matches)})),d(!0)):(d(!0),C(null))}),(function(e){d(!0),o(e)}))}),[e]),console.log("After use effect"),r?"Failed to fetch"===r.message?Object(l.jsx)("div",{className:t.error,children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043c\u0438\u043d\u0443\u0442\u0443"}):Object(l.jsx)("div",{className:t.error,children:r.message}):j?E&&D.length?Object(l.jsxs)("div",{className:t.block,children:[Object(l.jsx)(S,{}),Object(l.jsx)(b.a,{variant:"h4",component:"h3",color:"textPrimary",align:"center",gutterBottom:!0,children:E.name}),Object(l.jsx)(W,{setMatches:N,matches:D}),Object(l.jsx)("img",{width:"50",heght:"50",src:E.crestUrl,alt:"Team crest"}),Object(l.jsx)(x.a,{component:w.a,children:Object(l.jsxs)(O.a,{className:t.table,size:"small","aria-label":"a dense table",children:[Object(l.jsx)(p.a,{children:Object(l.jsxs)(v.a,{children:[Object(l.jsx)(g.a,{children:"Date"}),Object(l.jsx)(g.a,{align:"right",children:"Home TEam"}),Object(l.jsx)(g.a,{align:"right",children:"Away TEam"}),Object(l.jsx)(g.a,{align:"right",children:"Score"})]})}),Object(l.jsx)(f.a,{children:D.map((function(e){return Object(l.jsxs)(v.a,{children:[Object(l.jsx)(g.a,{component:"th",scope:"row",children:new Date(e.utcDate).toLocaleString(void 0,A)}),Object(l.jsx)(g.a,{align:"right",children:e.homeTeam.name}),Object(l.jsx)(g.a,{align:"right",children:e.awayTeam.name}),Object(l.jsx)(g.a,{align:"right",children:"FINISHED"===e.status?e.score.fullTime.homeTeam+" : "+e.score.fullTime.awayTeam:"---"})]},e.id)}))})]})})]}):Object(l.jsx)("div",{className:t.block,children:Object(l.jsx)(b.a,{variant:"h4",component:"h3",color:"textPrimary",align:"center",gutterBottom:!0,children:"No team"})}):Object(l.jsx)("div",{className:t.message,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})},M=a(40),U=a(96),F=["src","srcOnError"],R=function(e){var t=e.src,a=e.srcOnError,n=Object(U.a)(e,F),r=Object(c.useState)(null),o=Object(m.a)(r,2),i=o[0],s=o[1];return a?i?Object(l.jsx)("img",Object(D.a)({src:i},n)):t?Object(l.jsx)("img",Object(D.a)({src:t,onError:function(){s(a)}},n)):void s(a):Object(l.jsx)("img",Object(D.a)({src:t},n))},L=a.p+"static/media/search.552248cf.svg",P=Object(u.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",textAlign:"left",marginBottom:"20px"}}}));var G=function(e){var t=P(),a=Object(c.useState)(""),n=Object(m.a)(a,2),r=n[0],o=n[1];return Object(l.jsxs)(y.a,{component:"form",className:t.root,onSubmit:function(t){t.preventDefault(),o(""),e.findRow(e.names.findIndex((function(e){return e.toUpperCase().includes(r.toUpperCase())})))},noValidate:!0,autoComplete:"off",children:[Object(l.jsx)(N.a,{placeholder:"Search competition",onChange:function(e){o(e.target.value)},variant:"filled",value:r}),Object(l.jsx)(s.a,{type:"submit",variant:"contained",size:"large",children:Object(l.jsx)("img",{src:L,width:"20",height:"20",alt:"Search"})})]})};var X=function(){var e=Object(u.a)({table:{minWidth:650},grey:{backgroundColor:"#e5e3e3"},block:{marginTop:"2rem"},myLink:{textDecoration:"none",color:"#666"},error:{fontSize:"1.5rem",fontWeight:"bold",color:"#D15563 "},message:{fontSize:"1.5rem",fontWeight:"bold"}})(),t=Object(c.useState)(null),a=Object(m.a)(t,2),r=a[0],o=a[1],i=Object(c.useState)(!1),s=Object(m.a)(i,2),j=s[0],d=s[1],h=Object(c.useState)(null),T=Object(m.a)(h,2),D=T[0],N=T[1],y=Object(c.useState)([]),k=Object(m.a)(y,2),E=k[0],C=k[1];Object(c.useEffect)((function(){fetch("http://api.football-data.org/v2/areas",{method:"GET",mode:"cors",headers:{"X-Auth-Token":"b2dd0e14d46548faaeb560db1e55fc93"}}).then((function(e){return e.json()})).then((function(e){var t=e.areas.filter((function(e){return"Europe"===e.parentArea}));fetch("http://api.football-data.org/v2/teams/?areas=".concat(t.map((function(e){return e.id})).join(",")),{method:"GET",mode:"cors",headers:{"X-Auth-Token":"b2dd0e14d46548faaeb560db1e55fc93"}}).then((function(e){return e.json()})).then((function(e){C(e.teams)}),(function(e){d(!0),o(e)})),d(!0)}),(function(e){d(!0),o(e)}))}),[]);var A=E.reduce((function(e,t){return e[t.id]=n.a.createRef(),e}),{});if(Object(c.useEffect)((function(){D&&-1!==D&&A[E[D].id].current.scrollIntoView({block:"center",behavior:"smooth"})}),[D,A,E]),r)return"Failed to fetch"===r.message?Object(l.jsx)("div",{className:e.error,children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043c\u0438\u043d\u0443\u0442\u0443"}):Object(l.jsx)("div",{className:e.error,children:r.message});if(j){var z=E.map((function(e){return e.name}));return Object(l.jsxs)("div",{className:e.block,children:[Object(l.jsx)(S,{}),Object(l.jsx)(b.a,{variant:"h4",component:"h3",color:"textPrimary",align:"center",gutterBottom:!0,children:"Teams"}),Object(l.jsx)(G,{names:z,findRow:N}),Object(l.jsx)(x.a,{component:w.a,children:Object(l.jsxs)(O.a,{className:e.table,size:"small","aria-label":"a dense table",children:[Object(l.jsx)(p.a,{children:Object(l.jsxs)(v.a,{children:[Object(l.jsx)(g.a,{children:"Team"}),Object(l.jsx)(g.a,{align:"right",children:"Crest"}),Object(l.jsx)(g.a,{align:"right",children:"Country"})]})}),Object(l.jsx)(f.a,{children:E.map((function(t,a){return Object(l.jsxs)(v.a,{className:a===D?e.grey:"",ref:A[t.id],children:[Object(l.jsx)(g.a,{component:"th",scope:"row",children:Object(l.jsx)(M.b,{to:"/Team/".concat(t.id),params:{id:t.id},className:e.myLink,children:t.name})}),Object(l.jsx)(g.a,{align:"right",children:Object(l.jsx)(R,{src:t.crestUrl,srcOnError:"/images/question.svg",width:"30px",heght:"30px",alt:"Team crest"})}),Object(l.jsx)(g.a,{align:"right",children:t.area.name})]},t.id)}))})]})})]})}return Object(l.jsx)("div",{className:e.message,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})},H=Object(u.a)({table:{minWidth:650},block:{marginTop:"2rem"},error:{fontSize:"1.5rem",fontWeight:"bold",color:"#D15563 "},message:{fontSize:"1.5rem",fontWeight:"bold"}});var V=function(e){console.log("\u043d\u0430\u0447\u0430\u043b\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430");var t=Object(T.f)().id,a=H(),n=Object(c.useState)(null),r=Object(m.a)(n,2),o=r[0],i=r[1],s=Object(c.useState)(!1),j=Object(m.a)(s,2),d=j[0],h=j[1],u=Object(c.useState)([]),D=Object(m.a)(u,2),N=D[0],y=D[1],k=Object(c.useState)([]),E=Object(m.a)(k,2),C=E[0],A=E[1];return Object(c.useEffect)((function(){console.log("\u043d\u0430\u0447\u0430\u043b\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0430"),fetch("http://api.football-data.org/v2/competitions/".concat(t,"/matches"),{method:"GET",mode:"cors",headers:{"X-Auth-Token":"b2dd0e14d46548faaeb560db1e55fc93"}}).then((function(e){return 200===e.status?(console.log("200"),e.json()):null})).then((function(e){e?(y(e.matches),A(e.competition.name+" "+e.competition.area.name),h(!0)):h(!0)}),(function(e){h(!0),i(e)}))}),[t]),o?"Failed to fetch"===o.message?Object(l.jsx)("div",{className:a.error,children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043c\u0438\u043d\u0443\u0442\u0443"}):Object(l.jsx)("div",{className:a.error,children:o.message}):d?C.length?(console.log("\u0440\u0435\u043d\u0434\u0435\u0440     "+N.length),Object(l.jsxs)("div",{className:a.block,children:[Object(l.jsx)(S,{}),Object(l.jsx)(b.a,{variant:"h4",component:"h3",color:"textPrimary",align:"center",gutterBottom:!0,children:C}),Object(l.jsx)(W,{setMatches:y,matches:N}),Object(l.jsx)(x.a,{component:w.a,children:Object(l.jsxs)(O.a,{className:a.table,size:"small","aria-label":"a dense table",children:[Object(l.jsx)(p.a,{children:Object(l.jsxs)(v.a,{children:[Object(l.jsx)(g.a,{align:"left",children:"Date"}),Object(l.jsx)(g.a,{align:"center",colSpan:2,children:"Match"}),Object(l.jsx)(g.a,{align:"right",children:"Winner"}),Object(l.jsx)(g.a,{align:"right",children:"Score"})]})}),Object(l.jsx)(f.a,{children:N.map((function(e){return Object(l.jsxs)(v.a,{children:[Object(l.jsx)(g.a,{align:"left",component:"th",scope:"row",children:new Date(e.utcDate).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"numeric",timezone:"UTC"})}),Object(l.jsx)(g.a,{align:"left",component:"th",scope:"row",children:e.homeTeam.name}),Object(l.jsx)(g.a,{align:"right",component:"th",scope:"row",children:e.awayTeam.name}),Object(l.jsx)(g.a,{align:"right",children:"FINISHED"===e.status?"DRAW"===e.score.winner?"Draw":"HOME_TEAM"===e.score.winner?e.homeTeam.name:e.awayTeam.name:"---"}),Object(l.jsx)(g.a,{align:"right",children:"FINISHED"===e.status?e.score.fullTime.homeTeam+" : "+e.score.fullTime.awayTeam:"---"})]},e.id)}))})]})})]})):Object(l.jsx)("div",{className:a.block,children:Object(l.jsx)(b.a,{variant:"h4",component:"h3",color:"textPrimary",align:"center",gutterBottom:!0,children:"No matches available for this competition."})}):(console.log("Loading..."),Object(l.jsx)("div",{className:a.message,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}))};var _=function(e){var t=Object(u.a)({table:{minWidth:650},block:{marginTop:"2rem"},grey:{backgroundColor:"#e5e3e3"},centered:{verticalAlign:"middle",marginRight:"1rem"},myLink:{textDecoration:"none",color:"#666"},error:{fontSize:"1.5rem",fontWeight:"bold",color:"#D15563 "},message:{fontSize:"1.5rem",fontWeight:"bold"}})(),a=Object(c.useState)(null),r=Object(m.a)(a,2),o=r[0],i=r[1],s=Object(c.useState)(null),j=Object(m.a)(s,2),d=j[0],h=j[1],T=Object(c.useState)(!1),D=Object(m.a)(T,2),N=D[0],y=D[1],k=Object(c.useState)([]),E=Object(m.a)(k,2),C=E[0],A=E[1];Object(c.useEffect)((function(){console.log("effect 1  []"),fetch("http://api.football-data.org/v2/areas",{method:"GET",mode:"cors",headers:{"X-Auth-Token":"b2dd0e14d46548faaeb560db1e55fc93"}}).then((function(e){return console.log("api \u043e\u0442\u0432\u0435\u0442 1 + res: "+e),e.json()})).then((function(e){var t=e.areas.filter((function(e){return"Europe"===e.parentArea||2077===e.id}));console.log(t),fetch("http://api.football-data.org/v2/competitions/?areas=".concat(t.map((function(e){return e.id})).join(",")),{method:"GET",mode:"cors",headers:{"X-Auth-Token":"b2dd0e14d46548faaeb560db1e55fc93"}}).then((function(e){return console.log("api \u043e\u0442\u0432\u0435\u0442 2 + res : "+e),e.json()})).then((function(e){console.log(),A(e.competitions)}),(function(e){console.log("fetch 1 error : "+e),y(!0),i(e)})),y(!0)}),(function(e){console.log("fetch 2 error : "+e),y(!0),i(e)}))}),[]);var z=C.reduce((function(e,t){return e[t.id]=n.a.createRef(),e}),{});if(console.log(z),Object(c.useEffect)((function(){d&&-1!==d&&z[C[d].id].current.scrollIntoView({block:"center",behavior:"smooth"})}),[d,z,C]),o)return"Failed to fetch"===o.message?Object(l.jsx)("div",{className:t.error,children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043c\u0438\u043d\u0443\u0442\u0443"}):Object(l.jsx)("div",{className:t.error,children:o.message});if(N){var W=C.map((function(e){return e.name}));return Object(l.jsxs)("div",{className:t.block,children:[Object(l.jsx)(S,{}),Object(l.jsx)(b.a,{variant:"h4",component:"h3",color:"textPrimary",align:"center",gutterBottom:!0,children:"Competitions"}),Object(l.jsx)(G,{names:W,findRow:h}),Object(l.jsx)(x.a,{component:w.a,children:Object(l.jsxs)(O.a,{className:t.table,size:"small","aria-label":"a dense table",children:[Object(l.jsx)(p.a,{children:Object(l.jsxs)(v.a,{children:[Object(l.jsx)(g.a,{children:"Competition"}),Object(l.jsx)(g.a,{align:"left",children:"Country"}),Object(l.jsx)(g.a,{align:"center",children:"Available in free plan"}),Object(l.jsx)(g.a,{align:"right",children:"Area"}),Object(l.jsx)(g.a,{align:"right",children:"Match day"})]})}),Object(l.jsx)(f.a,{children:C.map((function(e,a){return Object(l.jsxs)(v.a,{id:e.id,ref:z[e.id],className:a===d?t.grey:"",children:[Object(l.jsx)(g.a,{component:"th",scope:"row",children:Object(l.jsx)(M.b,{to:"/Matches/".concat(e.id),params:{id:e.id},className:t.myLink,children:e.name})}),Object(l.jsxs)(g.a,{align:"left",children:[Object(l.jsx)(R,{className:t.centered,src:e.area.ensignUrl,srcOnError:"/images/question.svg",width:"30px",height:"30px",alt:"country flag"}),e.area.name]}),Object(l.jsx)(g.a,{align:"center",children:"TIER_ONE"===e.plan?"+":"-"}),Object(l.jsx)(g.a,{align:"right",children:e.area.name}),Object(l.jsx)(g.a,{align:"right",children:e.currentSeason?e.currentSeason.currentMatchday:"------------------"})]},e.id)}))})]})})]})}return Object(l.jsx)("div",{className:t.message,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})};var q=function(e){return Object(l.jsx)(M.a,{children:Object(l.jsx)("div",{className:"main",children:Object(l.jsxs)(T.c,{children:[Object(l.jsx)(T.a,{exact:!0,path:"/",children:Object(l.jsx)(_,{})}),Object(l.jsx)(T.a,{path:"/teams",children:Object(l.jsx)(X,{})}),Object(l.jsx)(T.a,{path:"/matches/:id",children:Object(l.jsx)(V,{})}),Object(l.jsx)(T.a,{path:"/team/:id",children:Object(l.jsx)(B,{})})]})})})},J=a(226);var Y=function(){return Object(l.jsxs)(J.a,{className:"app-container",children:[Object(l.jsx)(d,{}),Object(l.jsx)(q,{}),Object(l.jsx)(h,{})]})};o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(Y,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.acde025d.chunk.js.map