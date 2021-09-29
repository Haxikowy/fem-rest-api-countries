(this["webpackJsonprest-api-countries"]=this["webpackJsonprest-api-countries"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},63:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c,a,r,s=n(1),i=n(18),o=n.n(i),l=n(9),u=n(13),d=n(36),j=n(10),b=(n(55),n(3)),h=n(4),m=Object(h.b)(),O=n(38),f=n(37),p=(n(56),n(11)),x=n(8),v=n(0),g=function(e){return Object(v.jsx)("header",{className:"header",children:Object(v.jsxs)("div",{className:"wrapper",children:[Object(v.jsx)(p.a,{to:"/",className:"header__logo",children:"Where in the world?"}),Object(v.jsx)("button",{onClick:function(){return e.setTheme(!e.theme)},className:"header__theme-switch",children:e.theme?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(x.a,{icon:f.faMoon}),"Dark Mode"]}):e.theme?void 0:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(x.a,{icon:O.faSun}),"Light Mode"]})})]})})},_=(n(63),n(25)),y=n.n(_),N=n(40),E=n(41),w=n.n(E).a.create({baseURL:"https://restcountries.com/v2"}),R="FETCH_COUNTRIES",C="SET_TERM",L="SELECT_REGION",k="SET_RENDERED",S="RESET_RENDERED",T=function(){return function(){var e=Object(N.a)(y.a.mark((function e(t){var n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/all");case 2:return n=e.sent,c=n.data,e.abrupt("return",t({type:R,payload:c}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=n(19),A=n.n(D),I=n(42),B=(n(84),Object(l.b)((function(e){return{term:e.term}}),{setTerm:function(e){return{type:C,payload:e}}})((function(e){var t=e.term,n=e.setTerm;return Object(v.jsxs)("div",{className:"search-input",children:[Object(v.jsx)("label",{htmlFor:"input",children:Object(v.jsx)(x.a,{className:"icon",icon:I.faSearch})}),Object(v.jsx)("input",{autoComplete:"off",id:"input",onChange:function(e){return n(e.target.value)},placeholder:"Search for a country...",value:t,type:"text"})]})}))),F=n(43),M=(n(86),[{name:"Filter by Region",value:""},{name:"Africa",value:"Africa"},{name:"America",value:"Americas"},{name:"Asia",value:"Asia"},{name:"Europe",value:"Europe"},{name:"Oceania",value:"Oceania"}]),P=Object(l.b)((function(e){return{selectedRegion:e.selectedRegion}}),{selectRegion:function(e){return{type:L,payload:e}},resetRendered:function(){return{type:S}}})((function(e){var t=e.selectedRegion,n=e.selectRegion,c=e.resetRendered,a=Object(s.useState)(!1),r=Object(j.a)(a,2),i=r[0],o=r[1],l=i?"active":"",u=Object(s.useRef)();Object(s.useEffect)((function(){var e=function(e){u.current.contains(e.target)||o(!1)};return n(M[0]),document.body.addEventListener("click",e,{capture:!0}),function(){document.body.removeEventListener("click",e,{capture:!0})}}),[n]);return Object(v.jsxs)("div",{tabIndex:"0",ref:u,onKeyPress:function(e){return"Enter"===e.key?o(!i):null},onClick:function(){return o(!i)},className:"dropdown ".concat(l),children:[Object(v.jsxs)("div",{className:"dropdown__text",children:[t.name,Object(v.jsx)(x.a,{className:"icon",icon:F.faAngleDown})]}),Object(v.jsx)("ul",{className:"dropdown__list",children:M.map((function(e,a){return e.value===t.value?null:Object(v.jsx)("li",{tabIndex:"0",onKeyPress:function(t){"Enter"===t.key&&(n(e),c())},onClick:function(){n(e),c()},className:"dropdown__item",children:e.name},a)}))})]})})),K=(n(87),n(44)),U=(n(88),function(){return Object(v.jsx)("div",{className:"loader__container",children:Object(v.jsx)(x.a,{icon:K.faCircleNotch,className:"loader"})})}),H=function(e){var t=e.data,n=(e.onLoad,Object(s.useState)(!1)),c=Object(j.a)(n,2),a=c[0],r=c[1],i="".concat(t.population).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");return Object(v.jsxs)("div",{className:"country-card",children:[Object(v.jsxs)(p.a,{tabIndex:"-1",to:"/details/".concat(t.alpha3Code),className:"country-card__flag",children:[a?null:Object(v.jsx)(U,{style:{width:"250px",height:"166px"}}),Object(v.jsx)("img",{onLoad:function(){return r(!a)},style:a?{}:{display:"none"},src:t.flag,alt:"".concat(t.name," flag")})]}),Object(v.jsxs)("div",{className:"country-card__informations",children:[Object(v.jsx)(p.a,{to:"/details/".concat(t.alpha3Code),className:"country-card__name",children:t.name}),Object(v.jsxs)("p",{className:"country-card__information",children:[Object(v.jsx)("span",{className:"highlighted",children:"Population: "}),i]}),Object(v.jsxs)("p",{className:"country-card__information",children:[Object(v.jsx)("span",{className:"highlighted",children:"Region: "}),t.region]}),Object(v.jsxs)("p",{className:"country-card__information",children:[Object(v.jsx)("span",{className:"highlighted",children:"Capital: "}),t.capital]})]})]})},J=Object(l.b)((function(e){return{countries:Object.values(e.countries),term:e.term,selectedRegion:e.selectedRegion,rendered:e.rendered}}),{fetchCountries:T,setRendered:function(e){return{type:k,payload:e}}})((function(e){var t=e.fetchCountries,n=e.setRendered,c=e.rendered,a=e.countries,r=e.term,i=e.selectedRegion,o=Object(s.useRef)();Object(s.useEffect)((function(){t()}),[t]),Object(s.useEffect)((function(){var e=function(){o.current&&window.scrollY+window.innerHeight>=o.current.offsetTop&&c<248&&n(19)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[c,n]);return Object(v.jsxs)("div",{className:"countries-list",children:[Object(v.jsxs)("div",{className:"countries-list__menu",children:[Object(v.jsx)(B,{}),Object(v.jsx)(P,{})]}),Object(v.jsx)("div",{className:"countries-list__content",children:function(){if(a.length<=247||A.a.isEmpty(i))return Object(v.jsx)(U,{});var e=a;return i.value.length&&r.length?e=a.filter((function(e){return e.region===i.value&&e.name.toLowerCase().includes(r.toLowerCase())})):i.value.length?e=a.filter((function(e){return e.region===i.value})):r.length&&(e=a.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))),e.slice(0,c).map((function(e){return Object(v.jsx)(H,{data:e},e.alpha3Code)}))}()}),Object(v.jsx)("footer",{ref:o,style:{padding:"2em"}})]})})),X=n(45),$=(n(89),function(e){var t=e.label,n=e.data;return void 0===n?null:Object(v.jsxs)("li",{className:"country-details__item",children:[Object(v.jsx)("span",{className:"highlighted",children:t}),n]})}),G=n(12),V=function(e){var t=e.label,n=e.data;return void 0===n?null:Object(v.jsxs)("li",{className:"country-details__item",children:[Object(v.jsx)("span",{className:"highlighted",children:t}),n.join(c||(c=Object(G.a)([", "])))]})},W=function(e){var t=e.label,n=e.data;return void 0===n?null:Object(v.jsxs)("li",{className:"country-details__item",children:[Object(v.jsx)("span",{className:"highlighted",children:t}),n.map((function(e){return e.name})).join(a||(a=Object(G.a)([", "])))]})},Y=function(e){var t=e.label,n=e.data;return void 0===n?null:Object(v.jsxs)("li",{className:"country-details__item",children:[Object(v.jsx)("span",{className:"highlighted",children:t}),n.map((function(e){return e.name})).join(r||(r=Object(G.a)([", "])))]})},q=function(e){var t=e.label,n=e.country,c=e.countries;if(void 0===n.borders)return null;return Object(v.jsxs)("div",{className:"country-details__borders",children:[Object(v.jsx)("h3",{className:"highlighted",children:t}),Object(v.jsx)("div",{className:"country-details__buttons",children:n.borders.map((function(e){var t=c.find((function(t){return t.alpha3Code===e}));return t?Object(v.jsx)(p.a,{className:"country-details_borderBtn btn",to:"/details/".concat(e),children:t.name},e):null}))})]})},z=Object(l.b)((function(e,t){return{country:e.countries[t.match.params.id],countries:Object.values(e.countries)}}),{fetchCountries:T})((function(e){var t=e.fetchCountries,n=e.country,c=e.countries,a=Object(s.useState)(!1),r=Object(j.a)(a,2),i=r[0],o=r[1];Object(s.useEffect)((function(){t()}),[t]);return Object(v.jsx)("main",{className:"country-details",children:function(){if(void 0===n||void 0===c)return Object(v.jsx)(U,{});var t="".concat(n.population).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("button",{onClick:e.history.goBack,className:"country-details__backBtn btn",children:[Object(v.jsx)(x.a,{icon:X.faArrowLeft,className:"icon"}),"Back"]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"country-details__flag",children:[i?null:Object(v.jsx)(U,{}),Object(v.jsx)("img",{onLoad:function(){return o(!0)},src:n.flag,style:i?{}:{display:"none"},alt:"".concat(n.name," flag")})]}),Object(v.jsxs)("div",{className:"country-details__informations",children:[Object(v.jsx)("h2",{className:"country-details__name",children:n.name}),Object(v.jsxs)("div",{className:"col",children:[Object(v.jsxs)("ul",{className:"country-details__list",children:[Object(v.jsx)($,{label:"Native Name: ",data:n.nativeName}),Object(v.jsx)($,{label:"Population: ",data:t}),Object(v.jsx)($,{label:"Region: ",data:n.region}),Object(v.jsx)($,{label:"Sub Region: ",data:n.subregion}),Object(v.jsx)($,{label:"Capital: ",data:n.capital})]}),Object(v.jsxs)("ul",{className:"country-details__list",children:[Object(v.jsx)(V,{label:"Top Level Domain: ",data:n.topLevelDomain}),Object(v.jsx)(W,{label:"Currencies: ",data:n.currencies}),Object(v.jsx)(Y,{label:"Languages: ",data:n.languages})]})]}),Object(v.jsx)(q,{label:"Border Countries: ",country:n,countries:c})]})]})]})}()})})),Q=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1];Object(s.useEffect)((function(){c(window.matchMedia("(prefers-color-scheme: light)").matches)}),[]);var a=n?"light-theme":"dark-theme";return Object(v.jsx)("div",{className:"container ".concat(a),children:Object(v.jsx)("div",{className:"wrapper",children:Object(v.jsxs)(b.b,{history:m,children:[Object(v.jsx)(g,{theme:n,setTheme:c}),Object(v.jsxs)(b.c,{children:[Object(v.jsx)(b.a,{path:"/",exact:!0,component:J}),Object(v.jsx)(b.a,{path:"/details/:id",exact:!0,component:z})]})]})})})},Z=n(14),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===R?Object(Z.a)(Object(Z.a)({},e),A.a.mapKeys(t.payload,"alpha3Code")):e},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t.type===C?t.payload:e},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===L?t.payload:e},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return e+t.payload;case S:return 20;default:return e}},ae=Object(u.b)({countries:ee,term:te,selectedRegion:ne,rendered:ce}),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,se=Object(u.d)(ae,re(Object(u.a)(d.a)));o.a.render(Object(v.jsx)(l.a,{store:se,children:Object(v.jsx)(Q,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.ea18c2d1.chunk.js.map