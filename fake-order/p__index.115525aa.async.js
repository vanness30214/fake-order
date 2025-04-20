"use strict";(self.webpackChunkfake_order=self.webpackChunkfake_order||[]).push([[866],{68400:function(se,y,t){t.r(y),t.d(y,{default:function(){return w}});var z=t(90228),g=t.n(z),W=t(87999),E=t.n(W),G=t(48305),a=t.n(G),S=t(79519),H=t(11389),M=t.n(H),e=t(52676),p=function(n){return M().format(n,{thousand:",",code:"jp",precision:0,symbol:"\uFFE5"})},O=`
  @media print {
    hr {
      border-top: 1px solid #000 !important;
      margin: 10px 0 !important;
      visibility: visible !important;
    }
  }
`,L=function(n){var o=n.order,x=n.prefix,h=n.orderNum,d=n.tip,c=o.reduce(function(i,u){return i+u.price},0)+d;return(0,e.jsxs)("div",{children:[(0,e.jsx)("style",{children:O}),(0,e.jsxs)("h1",{style:{fontSize:"20px"},children:["#",x,"-",h]}),(0,e.jsx)("hr",{style:{border:"1px solid #000",margin:"1.5em 0",backgroundColor:"#000",borderBottom:"none"}}),(0,e.jsxs)("h1",{style:{fontSize:"30px"},children:["#",x,"-",h]}),(0,e.jsx)("div",{style:{minWidth:"100%"},children:(0,e.jsxs)("table",{style:{margin:"1em 0 0 0",borderCollapse:"collapse",minWidth:"100%"},children:[(0,e.jsx)("thead",{style:{border:"1px solid #000000"},children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{style:{border:"1px solid #000000"},children:"Quantity"}),(0,e.jsx)("th",{style:{border:"1px solid #000000",textAlign:"left"},children:"Item"}),(0,e.jsx)("th",{style:{textAlign:"right",border:"1px solid #000000"},children:"Price"})]})}),(0,e.jsxs)("tbody",{style:{border:"1px solid #000000"},children:[o.map(function(i,u){return(0,e.jsxs)("tr",{style:{border:"1px solid #000000"},children:[(0,e.jsx)("td",{style:{border:"1px solid #000000",textAlign:"center"},children:i.quantity}),(0,e.jsx)("td",{style:{border:"1px solid #000000"},children:i.title}),(0,e.jsx)("td",{style:{textAlign:"right",border:"1px solid #000000"},children:p(i.price)})]},u)}),(0,e.jsxs)("tr",{style:{border:"1px solid #000000"},children:[(0,e.jsx)("td",{style:{border:"1px solid #000000",textAlign:"center"},children:"\u2764"}),(0,e.jsx)("td",{style:{border:"1px solid #000000"},children:"Tip"}),(0,e.jsx)("td",{style:{border:"1px solid #000000",textAlign:"right"},children:p(d)})]})]})]})}),(0,e.jsx)("div",{style:{float:"right"},children:(0,e.jsxs)(S.Z,{children:[(0,e.jsx)("strong",{children:"Total"}),(0,e.jsx)("strong",{children:p(c)})]})})]})},Q=L,U=t(25621),V=t(70691),$=t(83061),C=t(45529),I=t(72215),l=t(75271),v=t(35063),J=t(71323),A=t(37915),Z=t(6670),K=t(95052),X=t(56229),Y=v.Z.TextArea;function w(){var m=(0,l.useState)("Doki"),n=a()(m,2),o=n[0],x=n[1],h=(0,l.useState)("0001"),d=a()(h,2),c=d[0],i=d[1],u=(0,l.useState)(0),b=a()(u,2),T=b[0],k=b[1],q=(0,l.useState)("noteContent"),N=a()(q,2),j=N[0],_=N[1],ee=(0,l.useState)([{quantity:1,title:"04-15 \u2764 \u65B0\u4F5C \u2764\u30101419\u3011\u30B3\u30E9\u30C3\u30BF \u9AD8\u7D1A\u30AC\u30E9\u30B9\u30D3\u30FC\u30BA10mm,8mm,\u30E9\u30A6\u30F3\u30C9\u30AB\u30C3\u30C8\u30D3\u30FC\u30BA10mm,\u9AD8\u54C1\u8CEA\u30E1\u30BF\u30EB",price:1120}]),P=a()(ee,2),F=P[0],te=P[1],re=(0,l.useState)(!1),D=a()(re,2),B=D[0],R=D[1],ne=function(){R(!0),requestAnimationFrame(function(){window.print(),setTimeout(function(){return R(!1)},100)})};return(0,e.jsxs)("div",{children:[(0,e.jsx)("style",{children:`
          
        @media print {
          .no-print {
            display: none !important;
          }
              #note-area {
            page-break-before: always;
           }
          #printable-area {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
   
          #printable-area {
            font-size:11px;
           }
      
        }
      `}),(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(A.Z,{span:12,children:(0,e.jsxs)(Z.Z,{className:"no-print",title:(0,e.jsx)(K.ZP,{onClick:function(){return ne()},children:"\u{1F5A8}\uFE0F \u6253\u5370\u8BA2\u5355"}),children:[(0,e.jsxs)(S.Z,{children:[(0,e.jsx)(v.Z,{value:o,onChange:function(r){return x(r.target.value)},addonBefore:"\u524D\u7F00",style:{width:200}}),(0,e.jsx)(v.Z,{value:c,onChange:function(r){return i(r.target.value)},addonBefore:"\u5E8F\u53F7",style:{width:200}}),(0,e.jsx)(X.Z,{value:T,onChange:function(r){return k(r||0)},addonBefore:"Tip",style:{width:200}})]}),(0,e.jsx)(Y,{rows:4,value:j,onChange:function(r){_(r.target.value)}}),(0,e.jsx)(Z.Z,{style:{overflow:"auto",maxHeight:500},children:(0,e.jsx)(U.A,{onFinish:function(){var s=E()(g()().mark(function r(ie){return g()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:te(ie.order);case 1:case"end":return f.stop()}},r)}));return function(r){return s.apply(this,arguments)}}(),children:(0,e.jsx)(V.u,{name:"order",label:"\u4EA7\u54C1\u4FE1\u606F",initialValue:F,children:(0,e.jsxs)($.UW,{children:[(0,e.jsx)(C.Z,{name:"quantity",label:"quantity",rules:[{required:!0}]}),(0,e.jsx)(I.Z,{name:"title",label:"Item",rules:[{required:!0}]}),(0,e.jsx)(C.Z,{name:"price",label:"price",rules:[{required:!0}]})]},"group")})})})]})}),(0,e.jsx)(A.Z,{span:B?24:12,style:{padding:B?0:10},children:(0,e.jsxs)("div",{id:"printable-area",children:[(0,e.jsx)(Q,{prefix:o,orderNum:c,tip:T,order:F}),j&&(0,e.jsxs)("div",{id:"note-area",children:[(0,e.jsx)("div",{children:"Note"}),(0,e.jsx)("h2",{style:{fontSize:20},children:j})]})]})})]})]})}}}]);
