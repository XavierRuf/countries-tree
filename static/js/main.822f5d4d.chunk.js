(this["webpackJsonpswish-test-task"]=this["webpackJsonpswish-test-task"]||[]).push([[0],{103:function(n,e,t){},104:function(n,e,t){},1599:function(n,e,t){"use strict";t.r(e);var c,r=t(2),a=t(40),i=t.n(a),s=(t(103),t(58)),o=(t(104),t(7)),u=function n(e){var t=e.item,c=Object(r.useState)(!1),a=Object(s.a)(c,2),i=a[0],u=a[1],l=t.countries&&t.countries.length>0,j=t.languages&&t.languages.length>0;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"countries",children:[Object(o.jsxs)("h2",{onClick:l?function(n){n.stopPropagation(),u((function(n){return!n}))}:void 0,className:"countries__name",children:[t.emoji,t.name]}),j&&Object(o.jsx)("span",{children:t.languages[0].name})]}),l&&i&&Object(o.jsx)("ul",{children:t.countries.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(n,{item:e})},e.name)}))})]})},l=t(1626),j=t(1631),d=t(1629),h=t(36),m=t(1625),b=t(1627),p=t(1628),O={client:new m.a({uri:"https://countries.trevorblades.com/",cache:new b.a}),CountriesQueryDocument:Object(p.a)(c||(c=Object(h.a)(["\n    query {\n      continents {\n        code\n        name\n        countries {\n          name\n          emoji\n          languages {\n            name\n          }\n        }\n      }\n    }\n  "])))},f=t(26),x=t(90),g=function n(e){var t=e.depth,c=e.childrenCount;return{name:x.name.findName(),countries:t>0?Object(f.a)(new Array(c)).map((function(){return n({depth:t-1,childrenCount:c})})):[]}};console.log(function(n){var e=n.depth,t=n.childrenCount;return{data:Object(f.a)(new Array(t)).map((function(){return g({depth:e-1,childrenCount:t})}))}}({depth:2,childrenCount:2}));var v=function(){var n=Object(d.a)(O.CountriesQueryDocument),e=n.loading,t=n.data;return Object(o.jsx)(o.Fragment,{children:e?Object(o.jsx)(l.a,{sx:{color:"#fff",zIndex:function(n){return n.zIndex.drawer+1}},open:!0,children:Object(o.jsx)(j.a,{color:"inherit"})}):Object(o.jsx)("div",{className:"App",style:{width:"50%",margin:"0 15px"},children:t.continents.map((function(n){return Object(o.jsx)(u,{item:n},n.name)}))})})},w=t(1624);i.a.render(Object(o.jsx)(w.a,{client:O.client,children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[1599,1,2]]]);
//# sourceMappingURL=main.822f5d4d.chunk.js.map