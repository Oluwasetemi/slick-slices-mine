(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Njg2:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u})),a.d(t,"query",(function(){return f}));var r=a("Wbzz"),n=a("9eSz"),i=a.n(n),l=a("q1tI"),o=a.n(l),s=a("vOnD"),c=s.b.div.withConfig({displayName:"Pagination__PaginationStyles",componentId:"sc-1g15gau-0"})(["display:flex;align-content:center;align-items:center;justify-items:center;border:1px solid var(--grey);margin:2rem 0;border-radius:5px;text-align:center;& > *{padding:1rem;flex:1;border-right:1px solid var(--grey);text-decoration:none;&[aria-current],&.current{color:var(--red);}&[disabled]{pointer-events:none;color:var(--grey);}}@media (max-width:800px){.word{display:none;}font-size:1.4rem;}"]);function m(e){var t=e.pageSize,a=e.totalCount,n=e.currentPage,i=(e.skip,e.base),l=Math.ceil(a/t),s=n-1,m=s>=1,d=n+1,g=d<=l;return o.a.createElement(c,null,o.a.createElement(r.a,{title:"Prev Page",disabled:!m,to:i+"/"+s},o.a.createElement("span",{className:"word"},"← Prev")),Array.from({length:l},(function(e,t){return o.a.createElement(r.a,{className:1===n&&0===t?"current":"",to:i+"/"+(t>0?t+1:""),key:"page"+(t+1)},t+1)})),o.a.createElement(r.a,{title:"Next Page",disabled:!g,to:i+"/"+d},o.a.createElement("span",{className:"word"},"Next →")))}var d=a("EYWl"),g=s.b.div.withConfig({displayName:"slicemasters__SlicemasterGrid",componentId:"sc-1ghrt1m-0"})(["display:grid;grid-gap:2rem;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));"]),p=s.b.div.withConfig({displayName:"slicemasters__SlicemasterStyles",componentId:"sc-1ghrt1m-1"})(["a{text-decoration:none;}.gatsby-image-wrapper{height:400px;}h2{transform:rotate(-2deg);text-align:center;font-size:4rem;margin-bottom:-2rem;position:relative;z-index:2;}.description{background-color:var(--yellow);padding:1rem;margin:2rem;margin-top:-6rem;z-index:2;position:relative;transform:rotate(1deg);}"]);function u(e){var t=e.data,a=e.pageContext,n=t.slicemasters;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{title:"Slicemaster -Page "+a.currentPage+" || 1"}),o.a.createElement(m,{pageSize:parseInt("2"),totalCount:n.totalCount,skip:a.skip,currentPage:a.currentPage||1,base:"/slicemasters"}),o.a.createElement(g,null,n.nodes.map((function(e,t){return o.a.createElement(p,{key:t},o.a.createElement(r.a,{to:"/slicemaster/"+e.slug.current},o.a.createElement("h2",null,o.a.createElement("span",{className:"mark"},e.name))),o.a.createElement(i.a,{fluid:e.image.asset.fluid}),o.a.createElement("p",{className:"description"},e.description))}))))}var f="813786410"}}]);
//# sourceMappingURL=component---src-pages-slicemasters-js-b952552b5aa007046304.js.map