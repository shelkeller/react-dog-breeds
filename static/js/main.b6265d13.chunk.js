(this["webpackJsonpreact-dog-breeds"]=this["webpackJsonpreact-dog-breeds"]||[]).push([[0],{23:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s(2),i=s(15),n=s.n(i),c=s(6);s(23);var l=e=>{let t=e.puppy,s={backgroundImage:"url("+t.image+")",backgroundSize:"cover",position:"relative"},r=e=>e.length?e[0].toUpperCase()+e.slice(1):"";return Object(a.jsx)(a.Fragment,{children:!t.filtered&&Object(a.jsx)("div",{className:"grid-entry",style:s,children:Object(a.jsxs)("span",{className:"entry-label",style:{position:"absolute",bottom:"5px",left:"5px"},children:[r(t.firstName)," ",r(t.lastName)]})})})},p=s(16);var o=e=>{let t=e.puppies;return t.sort((function(e,t){let s=e.firstName+e.lastName,a=t.firstName+t.lastName;return s<a?-1:s>a?1:0})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"grid",children:!!t.length&&t.map(((e,t)=>Object(a.jsx)(l,{puppy:e},"puppy"+t)))}),!t.length&&Object(a.jsxs)("div",{className:"loading",children:[Object(a.jsx)("div",{children:Object(a.jsx)(p.a,{className:"spinny"})}),"Fetching puppies..."]})]})},d=s(17),j=s(5),b=s.n(j);const g=(e,t)=>{let s=e;t&&(s+="/"+t);let a="https://dog.ceo/api/breed/"+s+"/images/random";return b.a.get(a)};function h(){let e=Object(r.useState)([]),t=Object(c.a)(e,2),s=t[0],i=t[1],n=Object(r.useState)(""),l=Object(c.a)(n,2),p=l[0],j=l[1];Object(r.useEffect)((()=>{b.a.get("https://dog.ceo/api/breeds/list/all").then((e=>{let t=[],s=Object.entries(e.data.message).length;Object.entries(e.data.message).forEach(((e,a)=>{0===e[1].length&&g(e[0]).then((r=>{t.push({firstName:"",lastName:e[0],image:r.data.message}),a===s-1&&i(t)})),e[1].length>0&&e[1].forEach(((r,n)=>{g(e[0],r).then((c=>{t.push({firstName:r,lastName:e[0],image:c.data.message}),a===s-1&&n===e[1].length-1&&i(t)}))}))}))}))}),[]);return Object(a.jsxs)("main",{children:[Object(a.jsx)("header",{children:Object(a.jsxs)("h1",{children:["It's Puppy Time",Object(a.jsx)(d.a,{style:{position:"relative",top:"5px"}}),Object(a.jsx)("span",{style:{fontSize:"15px",float:"right",position:"relative",top:"5px"},children:"All dogs are puppies."}),Object(a.jsx)("input",{onChange:e=>{j(e.target.value);let t=e.target.value.toLowerCase(),a=s.map((e=>(e.filtered=!e.firstName.includes(t)&&!e.lastName.includes(t),e)));i(a)},type:"text",value:p})]})}),Object(a.jsx)(o,{puppies:s})]})}const m=document.getElementById("root");n.a.render(Object(a.jsx)(r.StrictMode,{children:Object(a.jsx)(h,{})}),m)}},[[42,1,2]]]);
//# sourceMappingURL=main.b6265d13.chunk.js.map