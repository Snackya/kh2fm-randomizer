(this["webpackJsonpkh2fm-randomizer"]=this["webpackJsonpkh2fm-randomizer"]||[]).push([[0],{114:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),c=t(10),o=t.n(c),i=t(42),s=t(156),m=t(153),u=t(27),d=t(115),p=Object(m.a)((function(){return{footer:{flexShrink:0},link:{color:"black",textDecoration:"none"},left:{float:"left"},right:{float:"right"}}})),b=function(){var e=p();return l.a.createElement("footer",{className:e.footer},l.a.createElement(s.a,null,l.a.createElement(d.a,{className:e.left},l.a.createElement("a",{href:"https://github.com/afresquet/kh2fm-randomizer",target:"_blank",rel:"noopener noreferrer",className:e.link},"GitHub")," - ",l.a.createElement("a",{href:"https://github.com/afresquet/kh2fm-randomizer",target:"_blank",rel:"noopener noreferrer",className:e.link},"Twitter")," - ",l.a.createElement("a",{href:"https://github.com/afresquet/kh2fm-randomizer",target:"_blank",rel:"noopener noreferrer",className:e.link},"Twitch")),l.a.createElement(d.a,{className:e.right},"Special thanks to"," ",l.a.createElement("a",{href:"https://twitter.com/Sonicshadowsil2",target:"_blank",rel:"noopener noreferrer",className:e.link},"Sonicshadowsilver2"),", ",l.a.createElement("a",{href:"https://twitter.com/desa3579",target:"_blank",rel:"noopener noreferrer",className:e.link},"Desa3579")," and ",l.a.createElement("a",{href:"https://twitter.com/Bizkit047",target:"_blank",rel:"noopener noreferrer",className:e.link},"Bizkit047"))))},h=t(23),E=t.n(h),f=t(36),g=t(76),v=t(31),w=t(12),k=t(18),O=t(163),y=t(172),j=t(162),A=t(158),C=t(174),T=t(175),R=t(159),S=t(169),B=t(170),N=t(173),M=t(49),x=t.n(M),z="https://us-central1-kh2fm-randomizer.cloudfunctions.net/randomizer";!function(e){e[e.BASE_GAME=0]="BASE_GAME",e[e.GOA_MOD=1]="GOA_MOD"}(n||(n={}));var G=Object(m.a)((function(e){return{paper:{margin:e.spacing(3),marginLeft:"auto",marginRight:"auto",padding:e.spacing(3),width:"50%"},marginBottom:{marginBottom:e.spacing(3)},worldsWrapper:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},buttonWrapper:{textAlign:"center"},button:{marginTop:e.spacing(3),width:"75%"}}})),D=function(e){var a=e.history,t=G(),c=Object(r.useState)(!1),o=Object(k.a)(c,2),i=o[0],s=o[1],m=Object(r.useState)({seed:""}),u=Object(k.a)(m,2),d=u[0],p=u[1],b=Object(r.useState)({stats:!0,criticalMode:!0,abilities:!0,level50:!1,donaldAbilities:!0,goofyAbilities:!0,formAbilities:!0,simulatedTwilightTown:!0,twilightTown:!0,hollowBastion:!0,cavernOfRemembrance:!0,beastsCastle:!0,olympus:!0,agrabah:!0,landOfDragons:!0,pooh:!0,atlantica:!0,prideLands:!0,disneyCastle:!0,timelessRiver:!0,halloweenTown:!0,portRoyal:!0,spaceParanoids:!0,twtnw:!0}),h=Object(k.a)(b,2),M=h[0],D=h[1],_=Object(r.useState)(n.GOA_MOD),W=Object(k.a)(_,2),P=W[0],L=W[1],H=Object(r.useCallback)((function(e){var a=e.target,t=a.name,n=a.value;p((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(v.a)({},t,n))}))}),[]),F=Object(r.useCallback)((function(e){var a=e.target,t=a.name,n=a.checked;D((function(e){return"abilities"!==t||n?Object(w.a)(Object(w.a)({},e),{},Object(v.a)({},t,n)):Object(w.a)(Object(w.a)({},e),{},{abilities:!1,level50:!1})}))}),[]),q=Object(r.useCallback)((function(e){L(e.target.value)}),[]),K=Object(r.useCallback)((function(e){return function(){D((function(a){return Object(w.a)(Object(w.a)({},a),{},Object(v.a)({},e,!a[e]))}))}}),[]),J=Object(r.useCallback)((function(e){var a=e.label,t=e.name,n=e.checked,r=Object(g.a)(e,["label","name","checked"]);return l.a.createElement("div",null,l.a.createElement(A.a,Object.assign({label:a,control:l.a.createElement(B.a,{name:t,checked:n,onChange:F,color:"primary"})},r)))}),[F]),U=Object(r.useCallback)((function(e){var a=e.label,t=e.name,n=e.checked;return l.a.createElement(y.a,{label:a,color:n?"primary":"default",onClick:K(t)})}),[K]),V=Object(r.useCallback)(function(){var e=Object(f.a)(E.a.mark((function e(t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),s(!0),n=Object.entries(M).filter((function(e){var a=Object(k.a)(e,2);a[0];return a[1]})).reduce((function(e,a){var t=Object(k.a)(a,2),n=t[0],r=t[1];return Object(w.a)(Object(w.a)({},e),{},Object(v.a)({},n,r))}),{}),e.next=6,x.a.post("".concat(z,"/seed"),Object(w.a)(Object(w.a)(Object(w.a)({},d),n),{},{gameMode:P}));case 6:r=e.sent,a.push("/seed/".concat(r.data.seed)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),s(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}(),[d,M,P,a]);return l.a.createElement(R.a,{className:t.paper},l.a.createElement("form",{noValidate:!0,onSubmit:V},l.a.createElement("div",{className:t.marginBottom},l.a.createElement(N.a,{name:"seed",value:d.seed,label:"Seed (defaults to current time)",onChange:H,fullWidth:!0})),l.a.createElement("div",{className:t.marginBottom},l.a.createElement(j.a,{variant:"outlined",fullWidth:!0,disabled:!0},l.a.createElement(C.a,null,"Game Mode"),l.a.createElement(S.a,{value:P,onChange:q,label:"Game Mode"},l.a.createElement(T.a,{value:n.BASE_GAME},"Base Game"),l.a.createElement(T.a,{value:n.GOA_MOD},"Garden of Assemblage Mod")))),l.a.createElement("div",{className:t.marginBottom},l.a.createElement(J,{label:"Critical Mode",name:"criticalMode",checked:M.criticalMode}),l.a.createElement(J,{label:"Randomize Stats",name:"stats",checked:M.stats}),l.a.createElement(J,{label:"Randomize Abilities",name:"abilities",checked:M.abilities}),l.a.createElement(J,{label:"Cap abilities at level 50 (KH3 style)",name:"level50",checked:M.level50,disabled:!M.abilities}),l.a.createElement(J,{label:"Randomize Donald's Abilities",name:"donaldAbilities",checked:M.donaldAbilities}),l.a.createElement(J,{label:"Randomize Goofy's Abilities",name:"goofyAbilities",checked:M.goofyAbilities}),l.a.createElement(J,{label:"Randomize Form Abilities",name:"formAbilities",checked:M.formAbilities})),l.a.createElement("div",{className:t.worldsWrapper},l.a.createElement(U,{label:"Simulated Twilight Town",name:"simulatedTwilightTown",checked:M.simulatedTwilightTown}),l.a.createElement(U,{label:"Twilight Town",name:"twilightTown",checked:M.twilightTown}),l.a.createElement(U,{label:"Hollow Bastion",name:"hollowBastion",checked:M.hollowBastion}),l.a.createElement(U,{label:"Cavern of Remembrance",name:"cavernOfRemembrance",checked:M.cavernOfRemembrance}),l.a.createElement(U,{label:"Beast's Castle",name:"beastsCastle",checked:M.beastsCastle}),l.a.createElement(U,{label:"Olympus Colisseum",name:"olympus",checked:M.olympus}),l.a.createElement(U,{label:"Agrabah",name:"agrabah",checked:M.agrabah}),l.a.createElement(U,{label:"Land of Dragons",name:"landOfDragons",checked:M.landOfDragons}),l.a.createElement(U,{label:"100 Acre Wood",name:"pooh",checked:M.pooh}),l.a.createElement(U,{label:"Atlantica",name:"atlantica",checked:M.atlantica}),l.a.createElement(U,{label:"Pride Lands",name:"prideLands",checked:M.prideLands}),l.a.createElement(U,{label:"Disne's Castle",name:"disneyCastle",checked:M.disneyCastle}),l.a.createElement(U,{label:"Timeless River",name:"timelessRiver",checked:M.timelessRiver}),l.a.createElement(U,{label:"Halloween Town",name:"halloweenTown",checked:M.halloweenTown}),l.a.createElement(U,{label:"Port Royal",name:"portRoyal",checked:M.portRoyal}),l.a.createElement(U,{label:"Space Paranoids",name:"spaceParanoids",checked:M.spaceParanoids}),l.a.createElement(U,{label:"The World That Never Was",name:"twtnw",checked:M.twtnw})),l.a.createElement("div",{className:t.buttonWrapper},l.a.createElement(O.a,{type:"submit",disabled:i,className:t.button,color:"primary",variant:"contained"},i?"Generating seed...":"Generate seed"))))},_=Object(m.a)((function(){return{link:{color:"black",textDecoration:"none"}}})),W=function(){var e=_();return l.a.createElement("header",null,l.a.createElement(s.a,null,l.a.createElement(d.a,{variant:"h4",align:"center"},l.a.createElement(i.b,{to:"/",className:e.link},"KH2FM Randomizer")),l.a.createElement(d.a,{variant:"subtitle1",align:"center"},"by"," ",l.a.createElement("a",{href:"https://github.com/afresquet",target:"_blank",rel:"noopener noreferrer",className:e.link},"Alvaro")," ",l.a.createElement("a",{href:"https://www.twitch.tv/valaxor_",target:"_blank",rel:"noopener noreferrer",className:e.link},"(Valaxor)"))))},P=t(171),L=t(166),H=t(168),F=t(165),q=t(167),K=t(164),J=t(75),U=t.n(J),V=function(e){return e.reduce((function(e,a){return e+function(e,a){var t=e.padStart(8,"0").toUpperCase(),n=a.padStart(8,"0").toUpperCase();return"patch=1,EE,".concat(t,",extended,").concat(n,"\n")}(a.location.value,a.reward.value)}),"")},I=function(e){var a=e.property,t=e.children;return a?l.a.createElement(d.a,null,t):null},$=function(e){var a=e.reward,t=e.location;return t.description&&a?l.a.createElement(K.a,null,l.a.createElement(F.a,null,t.description),l.a.createElement(F.a,null,t.type),l.a.createElement(F.a,{colSpan:t.reward.name?1:2},a.name),t.reward.name?l.a.createElement(F.a,null,t.reward.name):null):null},Q=Object(m.a)((function(e){var a={margin:e.spacing(3),marginLeft:"auto",marginRight:"auto",padding:e.spacing(3),width:"50%",textAlign:"center"};return Object(P.a)({paper:a,title:{marginBottom:e.spacing(3)},button:{marginTop:e.spacing(3),width:"75%"},spoilerPaper:Object(w.a)(Object(w.a)({},a),{},{width:"auto"})})})),X=function(e){var a=e.match.params.seed,t=Q(),c=Object(r.useState)(null),o=Object(k.a)(c,2),i=o[0],s=o[1],m=Object(r.useState)(null),u=Object(k.a)(m,2),p=u[0],b=u[1],h=Object(r.useState)(!1),g=Object(k.a)(h,2),v=g[0],w=g[1],y=Object(r.useState)(!0),j=Object(k.a)(y,2),A=j[0],C=j[1],T=Object(r.useState)(null),S=Object(k.a)(T,2),B=S[0],N=S[1];Object(r.useEffect)((function(){Object(f.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(z,"/seed/").concat(a));case 3:t=e.sent,n=t.data,s(n.configuration),b(n.seed),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),N(e.t0);case 12:return e.prev=12,C(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()}),[a]);var M=Object(r.useCallback)(Object(f.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,p){e.next=3;break}return e.abrupt("return");case 3:C(!0),"F266B00B.pnach",a=V(p),U()(a,"F266B00B.pnach","application/octet-stream"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),N(e.t0);case 12:return e.prev=12,C(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[p]),G=Object(r.useCallback)(Object(f.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w((function(e){return!e}));case 1:case"end":return e.stop()}}),e)}))),[]);if(A&&!i)return l.a.createElement("div",null,"loading...");if(B)return console.error(B),l.a.createElement("div",null,"error");if(!i||!p)return null;var D="";return i.gameMode.mode===n.BASE_GAME?D="Base Game":i.gameMode.mode===n.GOA_MOD&&(D="Garden of Assemblage Mod"),l.a.createElement(l.a.Fragment,null,l.a.createElement(R.a,{variant:"outlined",className:t.paper},l.a.createElement("div",{className:t.title},l.a.createElement(d.a,{variant:"h4"},"Seed: ",i.seed),l.a.createElement(d.a,{variant:"h6"},"Game Mode: ",D)),l.a.createElement(I,{property:i.criticalMode},"Critical Mode"),l.a.createElement(I,{property:i.stats},"Randomize Stats"),l.a.createElement(I,{property:i.abilities},"Randomize Abilities"),l.a.createElement(I,{property:i.level50},"Cap abilities at level 50 (KH3 style)"),l.a.createElement(I,{property:i.donaldAbilities},"Randomize Donald's Abilities"),l.a.createElement(I,{property:i.goofyAbilities},"Randomize Goofy's Abilities"),l.a.createElement(I,{property:i.formAbilities},"Randomize Form Abilities"),l.a.createElement(I,{property:i.simulatedTwilightTown},"Simulated Twilight Town"),l.a.createElement(I,{property:i.twilightTown},"Twilight Town"),l.a.createElement(I,{property:i.hollowBastion},"Hollow Bastion"),l.a.createElement(I,{property:i.cavernOfRemembrance},"Cavern of Remembrance"),l.a.createElement(I,{property:i.beastsCastle},"Beast's Castle"),l.a.createElement(I,{property:i.olympus},"Olympus"),l.a.createElement(I,{property:i.agrabah},"Agrabah"),l.a.createElement(I,{property:i.landOfDragons},"Land of Dragons"),l.a.createElement(I,{property:i.pooh},"100 Acre Wood"),l.a.createElement(I,{property:i.atlantica},"Atlantica"),l.a.createElement(I,{property:i.prideLands},"Pride Lands"),l.a.createElement(I,{property:i.disneyCastle},"Disney Castle"),l.a.createElement(I,{property:i.timelessRiver},"Timeless River"),l.a.createElement(I,{property:i.halloweenTown},"Halloween Town"),l.a.createElement(I,{property:i.portRoyal},"Port Royal"),l.a.createElement(I,{property:i.spaceParanoids},"Space Paranoids"),l.a.createElement(I,{property:i.twtnw},"The World That Never Was"),l.a.createElement(O.a,{onClick:M,color:"primary",variant:"contained",className:t.button},"Download seed"),l.a.createElement(O.a,{onClick:G,color:"primary",variant:"contained",className:t.button},v?"Hide":"Show"," spoiler logs")),v?l.a.createElement(R.a,{className:t.spoilerPaper,variant:"outlined"},l.a.createElement(L.a,{size:"small"},l.a.createElement(q.a,null,l.a.createElement(K.a,null,l.a.createElement(F.a,null,"Location"),l.a.createElement(F.a,null,"Type"),l.a.createElement(F.a,null,"Became"),l.a.createElement(F.a,null,"Original"))),l.a.createElement(H.a,null,p.map((function(e){var a=e.reward,t=e.location;return l.a.createElement($,{key:t.value,reward:a,location:t})}))))):null)},Y=Object(m.a)((function(e){return{content:{padding:e.spacing(3),flex:"1 0 auto"}}}));var Z=function(){var e=Y();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:e.content},l.a.createElement(W,null),l.a.createElement("main",null,l.a.createElement(s.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",component:D,exact:!0}),l.a.createElement(u.a,{path:"/seed/:seed",component:X,exact:!0}))))),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{basename:"/"},l.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,a,t){e.exports=t(114)}},[[86,1,2]]]);
//# sourceMappingURL=main.d70abd0a.chunk.js.map